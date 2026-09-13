/**
 * Chronicles of War - Strategic Campaign Map & Geopolitical Provinces
 * Global theater inspired by Total War & Age of History 3
 * Features ultra-high-definition historical relief world map, authentic nation flags,
 * interactive camera pan/zoom, animated maritime trade routes, star citadels, and ports.
 */

class Province {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.capitalName = data.capitalName;
    this.owner = data.owner; // Faction ID
    this.theater = data.theater || 'Europe';
    this.x = data.x;
    this.y = data.y;
    this.radius = data.radius || 30;
    this.polygon = data.polygon || []; // Vector outline of region
    this.neighbors = data.neighbors || []; // Connected province IDs
    this.terrain = data.terrain || 'plains'; // 'plains', 'hills', 'forest', 'mountains'
    this.hasPort = !!data.hasPort;

    // Infrastructure & Buildings (Empire Earth & Total War)
    this.cityLevel = data.cityLevel || 2; // 1 = Aldea, 2 = Ciudad, 3 = Fortaleza Baluarte
    this.buildings = data.buildings || ['barracks', 'farm', 'market'];
    this.publicOrder = 85;

    // Local Garrison
    this.garrison = data.garrison || ['tercio', 'arquebusiers'];
  }

  hasBuilding(bId) {
    return this.buildings.includes(bId);
  }

  addBuilding(bId) {
    if (!this.buildings.includes(bId)) {
      this.buildings.push(bId);
    }
  }

  calculateYield() {
    let gold = 50 + this.cityLevel * 40;
    let food = 60 + this.cityLevel * 30;
    let iron = 20 + this.cityLevel * 20;
    let science = 15;

    if (this.hasBuilding('farm')) food += 90;
    if (this.hasBuilding('mine')) iron += 70;
    if (this.hasBuilding('market')) gold += 80;
    if (this.hasBuilding('university')) science += 45;
    if (this.hasPort) gold += 60;

    return { gold, food, iron, science };
  }

  // Point in polygon test for accurate click selection
  containsPoint(px, py) {
    if (this.polygon && this.polygon.length > 2) {
      let inside = false;
      for (let i = 0, j = this.polygon.length - 1; i < this.polygon.length; j = i++) {
        const xi = this.polygon[i].x, yi = this.polygon[i].y;
        const xj = this.polygon[j].x, yj = this.polygon[j].y;
        const intersect = ((yi > py) !== (yj > py)) &&
                          (px < (xj - xi) * (py - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
      }
      if (inside) return true;
    }
    // Fallback to radius
    return Math.hypot(px - this.x, py - this.y) < this.radius;
  }
}

class StrategicCampaignMap {
  constructor(canvas) {
    this.canvas = canvas;

    // Source data: global continuous world provinces or fallback
    const rawProvinces = (typeof WORLD_PROVINCES !== 'undefined' && WORLD_PROVINCES.length > 0)
      ? WORLD_PROVINCES
      : ((typeof window !== 'undefined' && window.WORLD_PROVINCES)
         ? window.WORLD_PROVINCES
         : ((typeof globalThis !== 'undefined' && globalThis.WORLD_PROVINCES) ? globalThis.WORLD_PROVINCES : []));

    this.provinces = rawProvinces.map(d => new Province(d));

    this.selectedProvince = null;
    this.hoveredProvince = null;

    // Historical Relief World Map Background (2400 x 1162 px)
    this.mapWidth = 2400;
    this.mapHeight = 1162;

    // Preload Background Image
    this.bgImage = null;
    if (typeof Image !== 'undefined') {
      this.bgImage = new Image();
      this.bgImage.src = 'assets/earth_historical_map.jpg';
    }

    // Preload Authentic Nation Flags
    this.flagImages = {};
    if (typeof Image !== 'undefined') {
      const flagKeys = ['spain', 'france', 'britain', 'germany', 'rome', 'ottoman', 'persia', 'china', 'japan', 'aztec', 'inca'];
      flagKeys.forEach(k => {
        const img = new Image();
        img.src = `assets/flags/${k}.png`;
        this.flagImages[k] = img;
      });
    }

    // Historical Maritime Shipping Lanes (Connecting ports across oceans)
    this.shippingLanes = [
      { from: 'andalucia', to: 'caribbean', cpX: 830, cpY: 440 },
      { from: 'caribbean', to: 'tenochtitlan', cpX: 520, cpY: 520 },
      { from: 'caribbean', to: 'cuzco', cpX: 610, cpY: 630 },
      { from: 'aragon', to: 'naples', cpX: 1180, cpY: 380 },
      { from: 'london', to: 'flanders', cpX: 1140, cpY: 275 },
      { from: 'constantinople', to: 'cairo', cpX: 1325, cpY: 415 },
      { from: 'beijing', to: 'kyoto', cpX: 1960, cpY: 400 }
    ];

    // Maritime Caravel Fleets
    this.tradeShips = [
      { laneIdx: 0, progress: 0.15, speed: 0.0007, name: 'Galeón San José' },
      { laneIdx: 0, progress: 0.65, speed: -0.0006, name: 'Flota de Indias' },
      { laneIdx: 2, progress: 0.40, speed: 0.0008, name: 'Armada del Sur' },
      { laneIdx: 3, progress: 0.30, speed: 0.0012, name: 'Nao Santa María' },
      { laneIdx: 5, progress: 0.50, speed: 0.0009, name: 'Galera Otomana' },
      { laneIdx: 6, progress: 0.70, speed: 0.0010, name: 'Junco Imperial' }
    ];

    // Animation ticker
    this.animTime = 0;

    // Initial Viewport Camera: Centered on Western Europe / Mediterranean (Madrid & Paris: x~1120, y~340)
    const cWidth = this.canvas ? this.canvas.width : 1600;
    const cHeight = this.canvas ? this.canvas.height : 900;
    this.zoom = 1.15;
    this.camX = (cWidth * 0.5) - (1150 * this.zoom);
    this.camY = (cHeight * 0.5) - (340 * this.zoom);
  }

  getProvinceById(id) {
    return this.provinces.find(p => p.id === id);
  }

  getProvinceAt(screenX, screenY) {
    const worldX = (screenX - this.camX) / this.zoom;
    const worldY = (screenY - this.camY) / this.zoom;

    for (let i = 0; i < this.provinces.length; i++) {
      const p = this.provinces[i];
      if (p.containsPoint(worldX, worldY)) {
        return p;
      }
    }
    return null;
  }

  render(ctx, armies) {
    if (!ctx) return;
    const w = this.canvas.width;
    const h = this.canvas.height;
    this.animTime += 1;

    // 1. Clear Canvas with Antique Ocean Tint
    ctx.save();
    ctx.fillStyle = '#080d1a';
    ctx.fillRect(0, 0, w, h);

    // Apply Camera Pan & Zoom Transform
    ctx.translate(this.camX, this.camY);
    ctx.scale(this.zoom, this.zoom);

    // 2. High-Definition Historical Earth Relief Map
    this._renderWorldMapBackground(ctx);

    // 3. Nautical Rhumb Lines & Latitude/Longitude Graticule
    this._renderCartographicGraticule(ctx);

    // 4. Strategic Land Roads
    this._renderLandRoads(ctx);

    // 5. Maritime Trade Lanes & Animated Caravels
    this._renderMaritimeRoutes(ctx);

    // 6. Province Boundaries & Territories
    this._renderProvinces(ctx);

    // 7. Strategic Armies on Map
    if (armies && Array.isArray(armies)) {
      armies.forEach(a => {
        if (a && typeof a.renderOnCampaign === 'function') {
          a.renderOnCampaign(ctx);
        }
      });
    }

    ctx.restore();

    // 8. Screen-space Vignette & Compass Rose
    this._renderMapDecoration(ctx);
  }

  _renderWorldMapBackground(ctx) {
    // If background image is loaded, draw it directly
    if (this.bgImage && this.bgImage.complete && this.bgImage.naturalWidth > 0) {
      ctx.drawImage(this.bgImage, 0, 0, this.mapWidth, this.mapHeight);

      // Subtle atmospheric vignette over map
      ctx.fillStyle = 'rgba(10, 15, 25, 0.12)';
      ctx.fillRect(0, 0, this.mapWidth, this.mapHeight);
    } else {
      // Elegant vector fallback if image is still loading or running in unit tests
      ctx.fillStyle = '#101a2b';
      ctx.fillRect(0, 0, this.mapWidth, this.mapHeight);

      // Landmass placeholder
      ctx.fillStyle = '#1c2838';
      ctx.fillRect(1000, 200, 350, 250);
      ctx.fillStyle = '#38bdf8';
      ctx.font = '14px sans-serif';
      ctx.fillText('Cargando Mapa Cartográfico Histórico...', 1100, 300);
    }
  }

  _renderCartographicGraticule(ctx) {
    ctx.save();
    // Latitude / Longitude lines
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.08)';
    ctx.lineWidth = 1.0;

    for (let x = 0; x < this.mapWidth; x += 150) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.mapHeight);
      ctx.stroke();
    }
    for (let y = 0; y < this.mapHeight; y += 120) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this.mapWidth, y);
      ctx.stroke();
    }

    // Rhumb Lines radiating from Atlantic & Mediterranean nautical hubs
    const rhumbHubs = [
      { x: 920, y: 440 },  // Mid Atlantic / Azores
      { x: 1210, y: 410 }, // Western Mediterranean
      { x: 1750, y: 520 }  // Indian Ocean
    ];

    ctx.strokeStyle = 'rgba(245, 158, 11, 0.07)';
    rhumbHubs.forEach(hub => {
      for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
        ctx.beginPath();
        ctx.moveTo(hub.x, hub.y);
        ctx.lineTo(hub.x + Math.cos(a) * 800, hub.y + Math.sin(a) * 800);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(hub.x, hub.y, 25, 0, Math.PI * 2);
      ctx.stroke();
    });

    ctx.restore();
  }

  _renderLandRoads(ctx) {
    ctx.save();
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.35)';
    ctx.lineWidth = 2.0;
    ctx.setLineDash([4, 4]);

    this.provinces.forEach(p1 => {
      p1.neighbors.forEach(nId => {
        const p2 = this.getProvinceById(nId);
        // Only draw non-maritime links here
        if (p2 && p1.id < p2.id && Math.hypot(p1.x - p2.x, p1.y - p2.y) < 320) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });

    ctx.setLineDash([]);
    ctx.restore();
  }

  _renderMaritimeRoutes(ctx) {
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 2.2;
    ctx.setLineDash([6, 5]);

    this.shippingLanes.forEach(lane => {
      const p1 = this.getProvinceById(lane.from);
      const p2 = this.getProvinceById(lane.to);
      if (!p1 || !p2) return;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      if (lane.cpX && lane.cpY) {
        ctx.quadraticCurveTo(lane.cpX, lane.cpY, p2.x, p2.y);
      } else {
        ctx.lineTo(p2.x, p2.y);
      }
      ctx.stroke();
    });

    ctx.setLineDash([]);

    // Animated Caravels sailing on lanes
    this.tradeShips.forEach(ship => {
      ship.progress += ship.speed;
      if (ship.progress > 1) ship.progress = 0;
      if (ship.progress < 0) ship.progress = 1;

      const lane = this.shippingLanes[ship.laneIdx];
      if (!lane) return;
      const p1 = this.getProvinceById(lane.from);
      const p2 = this.getProvinceById(lane.to);
      if (!p1 || !p2) return;

      const t = ship.progress;
      let sx, sy;
      if (lane.cpX && lane.cpY) {
        // Quadratic bezier
        const it = 1 - t;
        sx = it * it * p1.x + 2 * it * t * lane.cpX + t * t * p2.x;
        sy = it * it * p1.y + 2 * it * t * lane.cpY + t * t * p2.y;
      } else {
        sx = p1.x + (p2.x - p1.x) * t;
        sy = p1.y + (p2.y - p1.y) * t;
      }

      // Draw Mini Caravel Ship
      ctx.save();
      ctx.translate(sx, sy);

      // Ship Hull
      ctx.fillStyle = '#78350f';
      ctx.beginPath();
      ctx.ellipse(0, 0, 8, 3.5, 0, 0, Math.PI * 2);
      ctx.fill();

      // White Canvas Sails
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(-3, -7, 6, 5);
      ctx.fillStyle = '#dc2626'; // Red Cross on Sail
      ctx.fillRect(-0.5, -6, 1, 3);
      ctx.fillRect(-2, -5, 4, 1);

      // Ship Water Wake
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 2, 4, 0, Math.PI);
      ctx.stroke();

      ctx.restore();
    });

    ctx.restore();
  }

  _renderProvinces(ctx) {
    const factionsObj = (typeof FACTIONS !== 'undefined') ? FACTIONS : {};

    this.provinces.forEach(p => {
      const fac = factionsObj[p.owner] || factionsObj.spain || {
        name: 'Imperio',
        banner: '⚔️',
        colors: { primary: '#d97706', secondary: '#b91c1c', accent: '#fbbf24', map: '#1e293b' }
      };

      const isSelected = this.selectedProvince === p;
      const isHovered = this.hoveredProvince === p;

      ctx.save();

      // 1. Draw Province Territorial Zone
      ctx.beginPath();
      if (p.polygon && p.polygon.length > 2) {
        p.polygon.forEach((pt, idx) => {
          if (idx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.closePath();
      } else {
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      }

      // Territory tint with faction color
      ctx.fillStyle = isHovered ? (fac.colors.accent || '#38bdf8') : (fac.colors.primary || '#d97706');
      ctx.globalAlpha = isSelected ? 0.40 : (isHovered ? 0.30 : 0.18);
      ctx.fill();

      // Gilded Territorial Border
      ctx.globalAlpha = 1.0;
      ctx.strokeStyle = isSelected ? '#fbbf24' : (fac.colors.primary || '#d97706');
      ctx.lineWidth = isSelected ? 3.0 : 1.5;
      ctx.stroke();

      // 2. Port Anchor (If province has port)
      if (p.hasPort) {
        const portX = p.x + p.radius * 0.55;
        const portY = p.y + p.radius * 0.45;
        ctx.fillStyle = '#38bdf8';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('⚓', portX, portY);
      }

      // 3. City / Star Bastion Citadel & Flag
      this._renderCitadel(ctx, p, fac, isSelected);

      ctx.restore();
    });
  }

  _renderCitadel(ctx, p, fac, isSelected) {
    const cx = p.x;
    const cy = p.y;
    const isFortress = p.hasBuilding('star_bastion') || p.cityLevel >= 3;

    ctx.save();

    if (isFortress) {
      // Star Bastion (Trace Italienne) 4-pointed fortress shape
      ctx.fillStyle = '#1e293b';
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      const numPoints = 8;
      const outerR = 14;
      const innerR = 8;
      for (let i = 0; i < numPoints * 2; i++) {
        const r = (i % 2 === 0) ? outerR : innerR;
        const a = (i / (numPoints * 2)) * Math.PI * 2;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else {
      // Walled Town Citadel
      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    // Authentic High-Definition Nation Flag Image
    const flagImg = this.flagImages[p.owner];
    const flagW = 20;
    const flagH = 13;
    const flagX = cx - flagW * 0.5;
    const flagY = cy - 22;

    if (flagImg && flagImg.complete && flagImg.naturalWidth > 0) {
      // Flagpole
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(flagX, flagY - 2);
      ctx.lineTo(flagX, flagY + flagH + 4);
      ctx.stroke();

      // Flag Image with gold border
      ctx.drawImage(flagImg, flagX, flagY, flagW, flagH);
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 1;
      ctx.strokeRect(flagX, flagY, flagW, flagH);
    } else {
      // Fallback Banner Crest
      ctx.fillStyle = '#fff';
      ctx.font = '12px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(fac.banner || '⚔️', cx, cy - 14);
    }

    // Capital Ribbon Plaque
    const nameW = Math.max(56, p.capitalName.length * 6.5);
    ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    ctx.strokeStyle = isSelected ? '#fbbf24' : (fac.colors.primary || '#d97706');
    ctx.lineWidth = 1.2;
    ctx.fillRect(cx - nameW * 0.5, cy + 9, nameW, 13);
    ctx.strokeRect(cx - nameW * 0.5, cy + 9, nameW, 13);

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 9px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(p.capitalName, cx, cy + 15.5);

    ctx.restore();
  }

  _renderMapDecoration(ctx) {
    // Screen-space Compass Rose
    ctx.save();
    const crX = 65;
    const crY = this.canvas.height - 65;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.arc(crX, crY, 32, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Compass points
    const points = [
      { label: 'N', x: 0, y: -22, color: '#ef4444' },
      { label: 'S', x: 0, y: 22, color: '#fbbf24' },
      { label: 'E', x: 22, y: 0, color: '#fbbf24' },
      { label: 'O', x: -22, y: 0, color: '#fbbf24' }
    ];

    ctx.font = 'bold 10px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    points.forEach(pt => {
      ctx.fillStyle = pt.color;
      ctx.fillText(pt.label, crX + pt.x, crY + pt.y);
    });

    ctx.strokeStyle = '#d97706';
    ctx.beginPath();
    ctx.moveTo(crX, crY - 18);
    ctx.lineTo(crX + 3.5, crY);
    ctx.lineTo(crX, crY + 18);
    ctx.lineTo(crX - 3.5, crY);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
  }
}

if (typeof window !== 'undefined') {
  window.Province = Province;
  window.StrategicCampaignMap = StrategicCampaignMap;
}
if (typeof globalThis !== 'undefined') {
  globalThis.Province = Province;
  globalThis.StrategicCampaignMap = StrategicCampaignMap;
}
