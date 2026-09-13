/**
 * Chronicles of War - Tactical Map & Fortification Renderer
 * Renders parchment cartographic terrain, star bastions (trace italienne), breaches, rivers, and forests
 */

class TacticalMap {
  constructor(width = 4800, height = 3200) {
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

    // Subtle paper grain & grid lines (Engraved military survey grid)
    ctx.strokeStyle = 'rgba(180, 160, 140, 0.14)';
    ctx.lineWidth = 1;
    const gridSize = 80;
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

    // 2. Elevation Hills with Contour Lines & Topographic Slope Hachures
    this.hills.forEach(hill => {
      ctx.save();
      ctx.fillStyle = '#e8dfcb';
      ctx.beginPath();
      ctx.ellipse(hill.x, hill.y, hill.rx, hill.ry, hill.angle || 0, 0, Math.PI * 2);
      ctx.fill();

      // Contour rings
      ctx.strokeStyle = '#cfbf9f';
      ctx.lineWidth = 1.4;
      for (let s = 0.82; s >= 0.3; s -= 0.26) {
        ctx.beginPath();
        ctx.ellipse(hill.x, hill.y, hill.rx * s, hill.ry * s, hill.angle || 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Topographic slope hachures (Antique military relief engraving)
      ctx.save();
      ctx.translate(hill.x, hill.y);
      ctx.rotate(hill.angle || 0);
      ctx.strokeStyle = 'rgba(160, 130, 95, 0.42)';
      ctx.lineWidth = 0.9;
      const hachureSteps = 42;
      for (let i = 0; i < hachureSteps; i++) {
        const th = (i / hachureSteps) * Math.PI * 2;
        const cos = Math.cos(th);
        const sin = Math.sin(th);
        ctx.beginPath();
        ctx.moveTo(cos * hill.rx * 0.96, sin * hill.ry * 0.96);
        ctx.lineTo(cos * hill.rx * 0.74, sin * hill.ry * 0.74);
        ctx.stroke();

        if (i % 2 === 0) {
          ctx.beginPath();
          ctx.moveTo(cos * hill.rx * 0.70, sin * hill.ry * 0.70);
          ctx.lineTo(cos * hill.rx * 0.48, sin * hill.ry * 0.48);
          ctx.stroke();
        }
      }
      ctx.restore();

      ctx.restore();
    });

    // 3. Roads
    ctx.save();
    this.roads.forEach(road => {
      ctx.strokeStyle = '#e2d5be';
      ctx.lineWidth = road.width || 22;
      ctx.lineCap = 'round';
      ctx.beginPath();
      road.points.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();

      // Road edge borders
      ctx.strokeStyle = '#baa686';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });
    ctx.restore();

    // 4. Rivers & Bridges with Shoreline Stippling
    this.rivers.forEach(river => {
      ctx.save();
      ctx.strokeStyle = '#7ca6b8';
      ctx.lineWidth = river.width || 32;
      ctx.lineCap = 'round';
      ctx.beginPath();
      river.points.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();

      // River bank lines
      ctx.strokeStyle = '#5a8497';
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // Shoreline stippling dots
      ctx.fillStyle = 'rgba(90, 132, 151, 0.4)';
      river.points.forEach((pt, idx) => {
        if (idx % 2 === 0) {
          for (let s = 0; s < 5; s++) {
            const sx = pt.x + (Math.random() - 0.5) * (river.width * 1.4);
            const sy = pt.y + (Math.random() - 0.5) * (river.width * 1.4);
            ctx.beginPath();
            ctx.arc(sx, sy, 0.8 + Math.random() * 0.9, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Bridges
      if (river.bridges) {
        river.bridges.forEach(br => {
          ctx.fillStyle = '#baa686';
          ctx.strokeStyle = '#5c4933';
          ctx.lineWidth = 2.2;
          ctx.save();
          ctx.translate(br.x, br.y);
          ctx.rotate(br.angle || 0);
          ctx.fillRect(-18, -river.width * 0.65, 36, river.width * 1.3);
          ctx.strokeRect(-18, -river.width * 0.65, 36, river.width * 1.3);
          ctx.restore();
        });
      }
      ctx.restore();
    });

    // 5. Forests & Groves (Antique Woodcut Styling with Trunks & Canopies)
    this.forests.forEach(forest => {
      ctx.save();
      ctx.fillStyle = '#8ea375';
      ctx.beginPath();
      ctx.ellipse(forest.x, forest.y, forest.rx, forest.ry, forest.angle || 0, 0, Math.PI * 2);
      ctx.fill();

      // Outer boundary engraving
      ctx.strokeStyle = '#637e4c';
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Tree clusters inside grove
      const treeCount = Math.floor((forest.rx * forest.ry) / 280);
      for (let t = 0; t < treeCount; t++) {
        const u = Math.random();
        const v = Math.random();
        const r = Math.sqrt(u);
        const theta = v * 2 * Math.PI;
        const tx = forest.x + r * forest.rx * 0.85 * Math.cos(theta);
        const ty = forest.y + r * forest.ry * 0.85 * Math.sin(theta);

        // Tiny woodcut tree trunk
        ctx.fillStyle = '#5c4033';
        ctx.fillRect(tx - 0.7, ty, 1.4, 3.5);

        // Canopy crown
        ctx.fillStyle = '#5a7543';
        ctx.strokeStyle = '#3e522d';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(tx, ty - 2, 4 + Math.random() * 3.5, 0, Math.PI * 2);
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

    // 9. Antique Renaissance Compass Rose & Military Scale Bar Cartouche
    ctx.save();
    const crX = 220;
    const crY = 200;
    ctx.translate(crX, crY);

    // Ornate outer circle
    ctx.strokeStyle = '#8c7853';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.arc(0, 0, 52, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = '#cfbf9f';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.arc(0, 0, 47, 0, Math.PI * 2);
    ctx.stroke();

    // 8-Pointed Compass Star
    for (let p = 0; p < 8; p++) {
      const ang = (p * Math.PI) / 4;
      const rOuter = (p % 2 === 0) ? 46 : 28;
      const rInner = 9;

      // Dark half
      ctx.fillStyle = (p % 2 === 0) ? '#4a3b2c' : '#78644e';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(ang) * rOuter, Math.sin(ang) * rOuter);
      ctx.lineTo(Math.cos(ang + Math.PI / 8) * rInner, Math.sin(ang + Math.PI / 8) * rInner);
      ctx.closePath();
      ctx.fill();

      // Light half
      ctx.fillStyle = (p % 2 === 0) ? '#f4efe4' : '#e2d5be';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(ang) * rOuter, Math.sin(ang) * rOuter);
      ctx.lineTo(Math.cos(ang - Math.PI / 8) * rInner, Math.sin(ang - Math.PI / 8) * rInner);
      ctx.closePath();
      ctx.fill();
    }

    // Cardinal Points Latin labels
    ctx.fillStyle = '#3e2e1e';
    ctx.font = 'bold 11px "Georgia", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', 0, -58);
    ctx.fillText('S', 0, 58);
    ctx.fillText('E', 58, 0);
    ctx.fillText('O', -58, 0);

    // Fleur-de-lis on North tip
    ctx.fillStyle = '#b45309';
    ctx.font = '14px serif';
    ctx.fillText('⚜', 0, -42);

    // Scale Bar underneath
    ctx.translate(0, 80);
    ctx.fillStyle = '#3e2e1e';
    ctx.font = 'italic 9.5px "Georgia", serif';
    ctx.fillText('ESCALA MILITAR • 500 PASOS', 0, -8);

    // Alternating black and white scale ruler (120px wide)
    const rulerW = 120;
    const rulerH = 5;
    const segs = 4;
    const segW = rulerW / segs;
    ctx.strokeStyle = '#3e2e1e';
    ctx.lineWidth = 1;
    ctx.strokeRect(-rulerW * 0.5, 0, rulerW, rulerH);

    for (let s = 0; s < segs; s++) {
      ctx.fillStyle = (s % 2 === 0) ? '#3e2e1e' : '#f4efe4';
      ctx.fillRect(-rulerW * 0.5 + s * segW, 0, segW, rulerH);
    }
    ctx.restore();

    // 10. Engraved Outer Border & Coordinate Tick Frame
    ctx.save();
    ctx.strokeStyle = '#4a3b2c';
    ctx.lineWidth = 3;
    ctx.strokeRect(6, 6, this.width - 12, this.height - 12);

    ctx.strokeStyle = '#8c7853';
    ctx.lineWidth = 1;
    ctx.strokeRect(14, 14, this.width - 28, this.height - 28);
    ctx.restore();
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
