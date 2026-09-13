/**
 * Chronicles of War - Tactical Map & Fortification Renderer
 * Renders parchment cartographic terrain, star bastions (trace italienne), breaches, rivers, and forests
 */

class TacticalMap {
  constructor(width = 3200, height = 2400) {
    this.width = width;
    this.height = height;
    this.terrainCanvas = null;
    this.terrainCtx = null;

    // Map features
    this.fortifications = []; // Walls, bastions, breaches
    this.forests = [];        // Wooded groves
    this.rivers = [];         // Water streams with bridges
    this.hills = [];          // Elevation contours
    this.camps = [];          // Capture points / towns
    this.roads = [];          // High speed roads

    this._initOffscreenCanvas();
  }

  _initOffscreenCanvas() {
    if (typeof document !== 'undefined') {
      this.terrainCanvas = document.createElement('canvas');
      this.terrainCanvas.width = this.width;
      this.terrainCanvas.height = this.height;
      this.terrainCtx = this.terrainCanvas.getContext('2d');
    }
  }

  loadScenarioData(data) {
    if (data.width && data.height) {
      this.width = data.width;
      this.height = data.height;
      this._initOffscreenCanvas();
    }
    this.fortifications = data.fortifications || [];
    this.forests = data.forests || [];
    this.rivers = data.rivers || [];
    this.hills = data.hills || [];
    this.camps = data.camps || [];
    this.roads = data.roads || [];
    this.resources = data.resources || [];
    this.climate = data.climate || 'temperate';

    this._renderStaticTerrain();
  }

  _renderStaticTerrain() {
    const ctx = this.terrainCtx;
    ctx.clearRect(0, 0, this.width, this.height);

    // 1. Base Antique Parchment / Field Texture
    ctx.fillStyle = '#f4efe4';
    ctx.fillRect(0, 0, this.width, this.height);

    // Subtle paper grain & grid lines
    ctx.strokeStyle = 'rgba(180, 160, 140, 0.15)';
    ctx.lineWidth = 1;
    const gridSize = 60;
    for (let x = 0; x < this.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.height);
      ctx.stroke();
    }
    for (let y = 0; y < this.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.width, y);
      ctx.stroke();
    }

    // 2. Elevation Hills with Contour Lines
    this.hills.forEach(hill => {
      ctx.save();
      ctx.fillStyle = '#e8dfcb';
      ctx.beginPath();
      ctx.ellipse(hill.x, hill.y, hill.rx, hill.ry, hill.angle || 0, 0, Math.PI * 2);
      ctx.fill();

      // Contour rings
      ctx.strokeStyle = '#cfbf9f';
      ctx.lineWidth = 1.2;
      for (let s = 0.8; s >= 0.3; s -= 0.25) {
        ctx.beginPath();
        ctx.ellipse(hill.x, hill.y, hill.rx * s, hill.ry * s, hill.angle || 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.restore();
    });

    // 3. Roads
    ctx.save();
    this.roads.forEach(road => {
      ctx.strokeStyle = '#e2d5be';
      ctx.lineWidth = road.width || 18;
      ctx.lineCap = 'round';
      ctx.beginPath();
      road.points.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();

      // Road edge borders
      ctx.strokeStyle = '#baa686';
      ctx.lineWidth = 1;
      ctx.stroke();
    });
    ctx.restore();

    // 4. Rivers & Bridges
    this.rivers.forEach(river => {
      ctx.save();
      ctx.strokeStyle = '#7ca6b8';
      ctx.lineWidth = river.width || 28;
      ctx.lineCap = 'round';
      ctx.beginPath();
      river.points.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();

      // River bank lines
      ctx.strokeStyle = '#5a8497';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Bridges
      if (river.bridges) {
        river.bridges.forEach(br => {
          ctx.fillStyle = '#baa686';
          ctx.strokeStyle = '#5c4933';
          ctx.lineWidth = 2;
          ctx.save();
          ctx.translate(br.x, br.y);
          ctx.rotate(br.angle || 0);
          ctx.fillRect(-16, -river.width * 0.65, 32, river.width * 1.3);
          ctx.strokeRect(-16, -river.width * 0.65, 32, river.width * 1.3);
          ctx.restore();
        });
      }
      ctx.restore();
    });

    // 5. Forests & Groves
    this.forests.forEach(forest => {
      ctx.save();
      ctx.fillStyle = '#8ea375';
      ctx.beginPath();
      ctx.ellipse(forest.x, forest.y, forest.rx, forest.ry, forest.angle || 0, 0, Math.PI * 2);
      ctx.fill();

      // Tree clusters inside grove
      ctx.fillStyle = '#657e4e';
      ctx.strokeStyle = '#4c6139';
      ctx.lineWidth = 1.0;
      const treeCount = Math.floor((forest.rx * forest.ry) / 250);
      for (let t = 0; t < treeCount; t++) {
        const u = Math.random();
        const v = Math.random();
        const r = Math.sqrt(u);
        const theta = v * 2 * Math.PI;
        const tx = forest.x + r * forest.rx * 0.85 * Math.cos(theta);
        const ty = forest.y + r * forest.ry * 0.85 * Math.sin(theta);
        ctx.beginPath();
        ctx.arc(tx, ty, 5 + Math.random() * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
      ctx.restore();
    });

    // 6. Fortifications & Star Bastions (Trace Italienne)
    this.fortifications.forEach(fort => {
      ctx.save();
      // Wall / Bastion polygon
      if (fort.type === 'polygon' || fort.type === 'bastion') {
        ctx.fillStyle = '#94a3b8';
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 4;
        ctx.beginPath();
        fort.points.forEach((pt, idx) => {
          if (idx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Parapet line
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 2;
        ctx.stroke();
      } else if (fort.type === 'wall') {
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = fort.width || 14;
        ctx.lineCap = 'square';
        ctx.beginPath();
        ctx.moveTo(fort.x1, fort.y1);
        ctx.lineTo(fort.x2, fort.y2);
        ctx.stroke();
      }

      // Breaches (broken wall sections with rubble)
      if (fort.breaches) {
        fort.breaches.forEach(b => {
          ctx.fillStyle = '#e2d9c8'; // Open ground in breach
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.radius || 18, 0, Math.PI * 2);
          ctx.fill();

          // Rubble rocks
          ctx.fillStyle = '#64748b';
          for (let r = 0; r < 8; r++) {
            const rx = b.x + (Math.random() - 0.5) * (b.radius * 1.6);
            const ry = b.y + (Math.random() - 0.5) * (b.radius * 1.6);
            ctx.beginPath();
            ctx.arc(rx, ry, 2.5 + Math.random() * 2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }
      ctx.restore();
    });

    // 7. Camps / Strategic Towns
    this.camps.forEach(camp => {
      ctx.save();
      ctx.fillStyle = camp.team === 0 ? 'rgba(37, 99, 235, 0.25)' : (camp.team === 1 ? 'rgba(220, 38, 38, 0.25)' : 'rgba(180, 160, 120, 0.25)');
      ctx.beginPath();
      ctx.arc(camp.x, camp.y, 36, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = camp.team === 0 ? '#3b82f6' : (camp.team === 1 ? '#ef4444' : '#a89478');
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Small town buildings / tents
      ctx.fillStyle = '#b91c1c'; // Tile roofs
      ctx.fillRect(camp.x - 12, camp.y - 12, 10, 8);
      ctx.fillRect(camp.x + 2, camp.y - 14, 12, 9);
      ctx.fillRect(camp.x - 8, camp.y + 2, 14, 10);

      // Label
      ctx.fillStyle = '#1e293b';
      ctx.font = 'bold 11px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(camp.name || 'Campamento', camp.x, camp.y + 30);
      ctx.restore();
    });

    // 8. Strategic Resource Nodes (Empire Earth: Gold Mines, Iron Deposits, Granaries)
    if (this.resources) {
      this.resources.forEach(res => {
        ctx.save();
        ctx.translate(res.x, res.y);

        // Circular stone base
        ctx.fillStyle = 'rgba(30, 41, 59, 0.4)';
        ctx.beginPath();
        ctx.arc(0, 0, 18, 0, Math.PI * 2);
        ctx.fill();

        if (res.type === 'gold') {
          ctx.strokeStyle = '#f59e0b';
          ctx.fillStyle = '#fbbf24';
          ctx.lineWidth = 1.8;
          ctx.stroke();
          // Gold nugget icon
          ctx.font = '14px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('🪙', 0, -2);
        } else if (res.type === 'iron') {
          ctx.strokeStyle = '#94a3b8';
          ctx.fillStyle = '#cbd5e1';
          ctx.lineWidth = 1.8;
          ctx.stroke();
          // Iron pickaxe / anvil icon
          ctx.font = '14px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('⛏️', 0, -2);
        } else {
          ctx.strokeStyle = '#84cc16';
          ctx.fillStyle = '#bef264';
          ctx.lineWidth = 1.8;
          ctx.stroke();
          // Grain wheat icon
          ctx.font = '14px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('🌾', 0, -2);
        }

        // Label badge
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.fillRect(-45, 14, 90, 14);
        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 8.5px "Outfit", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(res.name || res.type.toUpperCase(), 0, 21);

        ctx.restore();
      });
    }
  }

  getTerrainAt(x, y) {
    // Check Water
    for (let r = 0; r < this.rivers.length; r++) {
      const river = this.rivers[r];
      const rw = (river.width || 28) * 0.5;
      // Check if on bridge first
      if (river.bridges) {
        for (let b = 0; b < river.bridges.length; b++) {
          const br = river.bridges[b];
          if (Math.hypot(x - br.x, y - br.y) < 22) {
            return 'road'; // Bridge behaves as road
          }
        }
      }
      // Check river points distance
      for (let p = 0; p < river.points.length - 1; p++) {
        const p1 = river.points[p];
        const p2 = river.points[p + 1];
        if (this._distToSegment(x, y, p1.x, p1.y, p2.x, p2.y) < rw) {
          return 'water';
        }
      }
    }

    // Check Fortifications / Walls
    for (let f = 0; f < this.fortifications.length; f++) {
      const fort = this.fortifications[f];
      // Check breaches first
      if (fort.breaches) {
        for (let b = 0; b < fort.breaches.length; b++) {
          if (Math.hypot(x - fort.breaches[b].x, y - fort.breaches[b].y) < fort.breaches[b].radius) {
            return 'breach'; // Passable breach
          }
        }
      }
      if (fort.type === 'wall') {
        if (this._distToSegment(x, y, fort.x1, fort.y1, fort.x2, fort.y2) < (fort.width || 14) * 0.5) {
          return 'impassable';
        }
      }
    }

    // Check Forests
    for (let f = 0; f < this.forests.length; f++) {
      const forest = this.forests[f];
      const dx = (x - forest.x) / forest.rx;
      const dy = (y - forest.y) / forest.ry;
      if (dx * dx + dy * dy <= 1) {
        return 'forest';
      }
    }

    // Check Hills
    for (let h = 0; h < this.hills.length; h++) {
      const hill = this.hills[h];
      const dx = (x - hill.x) / hill.rx;
      const dy = (y - hill.y) / hill.ry;
      if (dx * dx + dy * dy <= 1) {
        return 'hill';
      }
    }

    // Check Roads
    for (let r = 0; r < this.roads.length; r++) {
      const road = this.roads[r];
      const rw = (road.width || 18) * 0.5;
      for (let p = 0; p < road.points.length - 1; p++) {
        const p1 = road.points[p];
        const p2 = road.points[p + 1];
        if (this._distToSegment(x, y, p1.x, p1.y, p2.x, p2.y) < rw) {
          return 'road';
        }
      }
    }

    return 'plains';
  }

  isNearCamp(x, y, team) {
    for (let i = 0; i < this.camps.length; i++) {
      const c = this.camps[i];
      if (c.team === team && Math.hypot(x - c.x, y - c.y) < 55) {
        return true;
      }
    }
    return false;
  }

  _distToSegment(px, py, x1, y1, x2, y2) {
    const l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (l2 === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
  }

  render(ctx, camera) {
    // Draw pre-rendered static map from offscreen canvas
    ctx.drawImage(this.terrainCanvas, 0, 0);
  }
}

window.TacticalMap = TacticalMap;
