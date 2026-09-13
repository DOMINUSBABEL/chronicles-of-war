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

    // 1. Base Painterly Natural Earth & Meadow Texture (Warm Field Olive & Loam)
    ctx.fillStyle = '#4a5d3f';
    ctx.fillRect(0, 0, this.width, this.height);

    // Multi-tone organic pasture patches and soil loam
    const step = 220;
    for (let x = 0; x < this.width; x += step) {
      for (let y = 0; y < this.height; y += step) {
        const n = Math.sin(x * 0.007 + y * 0.013) * Math.cos(x * 0.011 - y * 0.005);
        if (n > 0.18) {
          ctx.fillStyle = 'rgba(107, 128, 86, 0.42)'; // Lush clover pasture
          ctx.beginPath();
          ctx.arc(x + 110, y + 110, 140, 0, Math.PI * 2);
          ctx.fill();
        } else if (n < -0.18) {
          ctx.fillStyle = 'rgba(88, 72, 52, 0.38)'; // Warm dry loam / dirt patch
          ctx.beginPath();
          ctx.arc(x + 110, y + 110, 130, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // Subtle survey ticks along borders (replaces invasive screen-wide CAD grid)
    ctx.strokeStyle = 'rgba(40, 28, 18, 0.35)';
    ctx.lineWidth = 1;
    const borderTickStep = 160;
    for (let x = borderTickStep; x < this.width; x += borderTickStep) {
      ctx.beginPath();
      ctx.moveTo(x, 0); ctx.lineTo(x, 10);
      ctx.moveTo(x, this.height - 10); ctx.lineTo(x, this.height);
      ctx.stroke();
    }
    for (let y = borderTickStep; y < this.height; y += borderTickStep) {
      ctx.beginPath();
      ctx.moveTo(0, y); ctx.lineTo(10, y);
      ctx.moveTo(this.width - 10, y); ctx.lineTo(this.width, y);
      ctx.stroke();
    }

    // 2. 3D Sunlit Elevation Hills (Directional Lighting from NW)
    this.hills.forEach(hill => {
      ctx.save();

      // A. Directional Drop Shadow Cast to South-East
      const shadowOffsetX = hill.rx * 0.16;
      const shadowOffsetY = hill.ry * 0.16;
      ctx.fillStyle = 'rgba(18, 26, 12, 0.42)';
      ctx.beginPath();
      ctx.ellipse(hill.x + shadowOffsetX, hill.y + shadowOffsetY, hill.rx * 1.08, hill.ry * 1.08, hill.angle || 0, 0, Math.PI * 2);
      ctx.fill();

      // B. Main 3D Hill Volume with NW Sunlit Radial Gradient
      const sunX = hill.x - hill.rx * 0.35;
      const sunY = hill.y - hill.ry * 0.35;
      const hillGrad = ctx.createRadialGradient(sunX, sunY, hill.rx * 0.08, hill.x, hill.y, Math.max(hill.rx, hill.ry) * 1.15);
      hillGrad.addColorStop(0, '#8ea862');   // Sunlit illuminated crest
      hillGrad.addColorStop(0.35, '#768e52'); // Upper slope
      hillGrad.addColorStop(0.75, '#566b3d'); // Lower slope
      hillGrad.addColorStop(1.0, '#3a4928');  // Deep shaded hill base

      ctx.fillStyle = hillGrad;
      ctx.beginPath();
      ctx.ellipse(hill.x, hill.y, hill.rx, hill.ry, hill.angle || 0, 0, Math.PI * 2);
      ctx.fill();

      // C. Topographic Contour Rings
      for (let s = 0.84; s >= 0.32; s -= 0.26) {
        ctx.strokeStyle = 'rgba(195, 218, 150, 0.4)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(hill.x, hill.y, hill.rx * s, hill.ry * s, hill.angle || 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // D. Fine Engraved Topographic Slope Hachures
      ctx.save();
      ctx.translate(hill.x, hill.y);
      ctx.rotate(hill.angle || 0);
      ctx.strokeStyle = 'rgba(42, 30, 16, 0.35)';
      ctx.lineWidth = 0.9;
      const hachureSteps = 38;
      for (let i = 0; i < hachureSteps; i++) {
        const th = (i / hachureSteps) * Math.PI * 2;
        const cos = Math.cos(th);
        const sin = Math.sin(th);
        ctx.beginPath();
        ctx.moveTo(cos * hill.rx * 0.96, sin * hill.ry * 0.96);
        ctx.lineTo(cos * hill.rx * 0.76, sin * hill.ry * 0.76);
        ctx.stroke();

        if (i % 2 === 0) {
          ctx.beginPath();
          ctx.moveTo(cos * hill.rx * 0.72, sin * hill.ry * 0.72);
          ctx.lineTo(cos * hill.rx * 0.52, sin * hill.ry * 0.52);
          ctx.stroke();
        }
      }
      ctx.restore();

      ctx.restore();
    });

    // 3. Roads (Natural unpaved military roads with double ruts)
    ctx.save();
    this.roads.forEach(road => {
      const rw = road.width || 22;

      // Outer road embankment
      ctx.strokeStyle = '#6b583f';
      ctx.lineWidth = rw + 4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      road.points.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();

      // Main packed gravel/dirt surface
      ctx.strokeStyle = '#8a7455';
      ctx.lineWidth = rw;
      ctx.stroke();

      // Center worn path
      ctx.strokeStyle = '#9c8665';
      ctx.lineWidth = rw * 0.45;
      ctx.stroke();
    });
    ctx.restore();

    // 4. Watercolor Rivers & Heavy Stone Arch Bridges
    this.rivers.forEach(river => {
      ctx.save();
      const rw = river.width || 32;

      // Sandy gravel shoreline
      ctx.strokeStyle = '#826e4f';
      ctx.lineWidth = rw + 8;
      ctx.lineCap = 'round';
      ctx.beginPath();
      river.points.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();

      // Shallow riverbanks (turquoise green)
      ctx.strokeStyle = '#356677';
      ctx.lineWidth = rw;
      ctx.stroke();

      // Deep central channel (dark navy teal)
      ctx.strokeStyle = '#1a4150';
      ctx.lineWidth = rw * 0.55;
      ctx.stroke();

      // Shoreline gravel pebbles
      ctx.fillStyle = 'rgba(70, 55, 35, 0.4)';
      river.points.forEach((pt, idx) => {
        if (idx % 2 === 0) {
          for (let s = 0; s < 4; s++) {
            const sx = pt.x + (Math.random() - 0.5) * (rw * 1.3);
            const sy = pt.y + (Math.random() - 0.5) * (rw * 1.3);
            ctx.beginPath();
            ctx.arc(sx, sy, 1.0 + Math.random() * 1.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // Bridges
      if (river.bridges) {
        river.bridges.forEach(br => {
          ctx.save();
          ctx.translate(br.x, br.y);
          ctx.rotate(br.angle || 0);

          // Stone piers
          ctx.fillStyle = '#475569';
          ctx.fillRect(-22, -rw * 0.72, 44, rw * 1.44);

          // Bridge Roadway Deck
          ctx.fillStyle = '#9c8665';
          ctx.fillRect(-18, -rw * 0.68, 36, rw * 1.36);

          // Stone Parapets
          ctx.fillStyle = '#334155';
          ctx.fillRect(-22, -rw * 0.72, 44, 4);
          ctx.fillRect(-22, rw * 0.72 - 4, 44, 4);

          // Pointed Cutwaters
          ctx.beginPath();
          ctx.moveTo(0, -rw * 0.72 - 6);
          ctx.lineTo(-7, -rw * 0.72);
          ctx.lineTo(7, -rw * 0.72);
          ctx.closePath();
          ctx.fill();

          ctx.restore();
        });
      }
      ctx.restore();
    });

    // 5. Painterly Forest Groves (Dense Woodcut Canopy with Ground Shadows)
    this.forests.forEach(forest => {
      ctx.save();

      // Soft Grove Ground Shadow Cast to SE
      ctx.fillStyle = 'rgba(15, 22, 10, 0.45)';
      ctx.beginPath();
      ctx.ellipse(forest.x + forest.rx * 0.12, forest.y + forest.ry * 0.12, forest.rx * 1.05, forest.ry * 1.05, forest.angle || 0, 0, Math.PI * 2);
      ctx.fill();

      // Base grove undergrowth
      ctx.fillStyle = '#365324';
      ctx.beginPath();
      ctx.ellipse(forest.x, forest.y, forest.rx, forest.ry, forest.angle || 0, 0, Math.PI * 2);
      ctx.fill();

      // Tree clusters inside grove with 3D canopies
      const treeCount = Math.floor((forest.rx * forest.ry) / 260);
      for (let t = 0; t < treeCount; t++) {
        const u = Math.random();
        const v = Math.random();
        const r = Math.sqrt(u);
        const theta = v * 2 * Math.PI;
        const tx = forest.x + r * forest.rx * 0.88 * Math.cos(theta);
        const ty = forest.y + r * forest.ry * 0.88 * Math.sin(theta);
        const cRadius = 5.0 + Math.random() * 4.5;

        // Tree shadow
        ctx.fillStyle = 'rgba(10, 16, 8, 0.35)';
        ctx.beginPath();
        ctx.ellipse(tx + 2, ty + 2.5, cRadius * 0.9, cRadius * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Shaded under-canopy
        ctx.fillStyle = '#263b19';
        ctx.beginPath();
        ctx.arc(tx, ty, cRadius, 0, Math.PI * 2);
        ctx.fill();

        // Sunlit canopy crown (NW highlight)
        ctx.fillStyle = '#4c7032';
        ctx.beginPath();
        ctx.arc(tx - 1.2, ty - 1.2, cRadius * 0.72, 0, Math.PI * 2);
        ctx.fill();

        // Top sun highlight
        ctx.fillStyle = '#659242';
        ctx.beginPath();
        ctx.arc(tx - 1.8, ty - 1.8, cRadius * 0.38, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });

    // 6. Fortifications & Star Bastions (Trace Italienne)
    this.fortifications.forEach(fort => {
      ctx.save();
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

      if (fort.breaches) {
        fort.breaches.forEach(b => {
          ctx.fillStyle = '#6b583f';
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.radius || 18, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#475569';
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

    // 7. Authentic Military Field Encampments (Canvas Tents, Campfires, Palisades)
    this.camps.forEach(camp => {
      ctx.save();
      const teamColor = camp.team === 0 ? '#1d4ed8' : (camp.team === 1 ? '#b91c1c' : '#8c7453');
      const teamAccent = camp.team === 0 ? '#60a5fa' : (camp.team === 1 ? '#f87171' : '#cbb89d');

      // A. Worn dirt clearing
      ctx.fillStyle = 'rgba(110, 92, 68, 0.55)';
      ctx.beginPath();
      ctx.arc(camp.x, camp.y, 48, 0, Math.PI * 2);
      ctx.fill();

      // Subtle dashed camp perimeter (tactical boundary)
      ctx.strokeStyle = teamAccent;
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(camp.x, camp.y, 48, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // B. Defensive Timber Abatis / Palisade Stakes
      ctx.strokeStyle = '#54422e';
      ctx.lineWidth = 2.0;
      for (let st = -24; st <= 24; st += 12) {
        ctx.beginPath();
        ctx.moveTo(camp.x + st, camp.y - 36);
        ctx.lineTo(camp.x + st + 3, camp.y - 42);
        ctx.stroke();
      }

      // C. Large Officer Pavilion Tent (Commander's Headquarters)
      ctx.fillStyle = 'rgba(20, 14, 10, 0.45)';
      ctx.beginPath();
      ctx.ellipse(camp.x - 10, camp.y - 6, 18, 12, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#ede3d1';
      ctx.strokeStyle = '#785e3c';
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.ellipse(camp.x - 12, camp.y - 10, 16, 11, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Faction Colored Scalloped Valance
      ctx.fillStyle = teamColor;
      ctx.beginPath();
      ctx.ellipse(camp.x - 12, camp.y - 6, 16, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Center Tent Pole & Flag
      ctx.strokeStyle = '#54422e';
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(camp.x - 12, camp.y - 12);
      ctx.lineTo(camp.x - 12, camp.y - 24);
      ctx.stroke();

      // Waving Pennant Standard
      ctx.fillStyle = teamColor;
      ctx.beginPath();
      ctx.moveTo(camp.x - 12, camp.y - 24);
      ctx.lineTo(camp.x - 2, camp.y - 21);
      ctx.lineTo(camp.x - 12, camp.y - 18);
      ctx.closePath();
      ctx.fill();

      // D. Soldier Wedge A-Frame Tents
      for (let t = 0; t < 3; t++) {
        const tx = camp.x + 8 + (t % 2) * 12;
        const ty = camp.y - 18 + t * 12;

        ctx.fillStyle = 'rgba(20, 14, 10, 0.35)';
        ctx.fillRect(tx - 4, ty + 2, 9, 6);

        ctx.fillStyle = '#e5dbca';
        ctx.strokeStyle = '#8a7355';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(tx, ty - 6);
        ctx.lineTo(tx - 6, ty + 4);
        ctx.lineTo(tx + 6, ty + 4);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = '#6b5438';
        ctx.beginPath();
        ctx.moveTo(tx, ty - 6);
        ctx.lineTo(tx, ty + 4);
        ctx.stroke();
      }

      // E. Stone Campfire with Glowing Embers
      ctx.fillStyle = '#3a342e';
      ctx.beginPath();
      ctx.arc(camp.x - 6, camp.y + 16, 5.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f97316';
      ctx.beginPath();
      ctx.arc(camp.x - 6, camp.y + 16, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.arc(camp.x - 6, camp.y + 16, 1.4, 0, Math.PI * 2);
      ctx.fill();

      // F. Stacked Powder Kegs & Supply Crates
      ctx.fillStyle = '#6b4c28';
      ctx.fillRect(camp.x + 14, camp.y + 12, 7, 7);
      ctx.fillStyle = '#4a3319';
      ctx.fillRect(camp.x + 22, camp.y + 10, 6, 6);
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.ellipse(camp.x + 18, camp.y + 21, 3.5, 4.5, 0, 0, Math.PI * 2);
      ctx.fill();

      // G. Cartouche Label Plaque (Classical Renaissance Survey Style)
      const name = camp.name || 'Campamento';
      ctx.font = 'bold 9.5px "Cinzel", Georgia, serif';
      const textW = ctx.measureText(name).width + 16;

      ctx.fillStyle = 'rgba(20, 13, 8, 0.92)';
      ctx.strokeStyle = '#c89b3c';
      ctx.lineWidth = 1.0;
      ctx.fillRect(camp.x - textW * 0.5, camp.y + 34, textW, 16);
      ctx.strokeRect(camp.x - textW * 0.5, camp.y + 34, textW, 16);

      ctx.fillStyle = '#fef08a';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(name, camp.x, camp.y + 42);

      ctx.restore();
    });

    // 8. Strategic Resource Nodes (Empire Earth: Gold Mines, Iron Deposits, Granaries)
    if (this.resources) {
      this.resources.forEach(res => {
        ctx.save();
        ctx.translate(res.x, res.y);

        // Circular stone base
        ctx.fillStyle = 'rgba(30, 20, 12, 0.6)';
        ctx.beginPath();
        ctx.arc(0, 0, 18, 0, Math.PI * 2);
        ctx.fill();

        if (res.type === 'gold') {
          ctx.strokeStyle = '#f59e0b';
          ctx.fillStyle = '#fbbf24';
          ctx.lineWidth = 1.8;
          ctx.stroke();
          ctx.font = '14px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('🪙', 0, -2);
        } else if (res.type === 'iron') {
          ctx.strokeStyle = '#94a3b8';
          ctx.fillStyle = '#cbd5e1';
          ctx.lineWidth = 1.8;
          ctx.stroke();
          ctx.font = '14px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('⛏️', 0, -2);
        } else {
          ctx.strokeStyle = '#84cc16';
          ctx.fillStyle = '#bef264';
          ctx.lineWidth = 1.8;
          ctx.stroke();
          ctx.font = '14px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('🌾', 0, -2);
        }

        // Label badge
        ctx.fillStyle = 'rgba(20, 13, 8, 0.9)';
        ctx.strokeStyle = '#8c6a23';
        ctx.lineWidth = 0.8;
        ctx.fillRect(-45, 14, 90, 15);
        ctx.strokeRect(-45, 14, 90, 15);
        ctx.fillStyle = '#fef08a';
        ctx.font = 'bold 8.5px "Cinzel", serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(res.name || res.type.toUpperCase(), 0, 22);

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
