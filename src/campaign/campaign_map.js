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

    // Age of History 3 Administrative attributes
    this.tradeGood = data.tradeGood || 'grain'; // 8 goods: grain, wool, timber, iron, saltpeter, spices, silver, gold
    this.population = data.population || 60000;
    this.developmentLevel = data.developmentLevel || Math.max(1, this.cityLevel * 2); // 1 to 10
    this.economyValue = data.economyValue || (this.cityLevel * 25);
    this.infrastructureLevel = data.infrastructureLevel || 1; // 1 to 5
    this.defenseLevel = data.defenseLevel || (this.cityLevel >= 3 ? 3 : 1); // 0 to 4
    this.isColonizable = data.isColonizable !== undefined ? data.isColonizable : (data.owner === 'neutral');

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
    // Age of History 3 Yield formula: scaled by development level and infrastructure
    const devMult = 1.0 + (this.developmentLevel - 1) * 0.15;
    const infraMult = 1.0 + (this.infrastructureLevel - 1) * 0.20;

    let gold = Math.round((this.economyValue * 1.5 + this.cityLevel * 20) * devMult * infraMult);
    let food = Math.round((50 + this.cityLevel * 25 + (this.population / 10000) * 6) * devMult);
    let iron = Math.round((15 + this.cityLevel * 15 + this.infrastructureLevel * 12) * devMult);
    let science = Math.round((10 + this.developmentLevel * 6) * infraMult);

    if (this.hasBuilding('farm')) food += 80;
    if (this.hasBuilding('mine')) iron += 65;
    if (this.hasBuilding('market')) gold += 70;
    if (this.hasBuilding('university')) science += 45;
    if (this.hasPort) gold += 55;

    // Strategic Trade Goods yield impact (Victoria & AoH3)
    switch (this.tradeGood) {
      case 'grain': food += 70; gold += 20; break;
      case 'wool': gold += 45; science += 10; break;
      case 'timber': gold += 35; iron += 20; break;
      case 'iron': iron += 75; gold += 30; break;
      case 'saltpeter': science += 40; gold += 45; iron += 20; break;
      case 'spices': gold += 115; break;
      case 'silver': gold += 150; break;
      case 'gold': gold += 190; break;
    }

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
    this.activeLabelBoxes = [];

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

    // Smooth camera target state & transitions
    this.targetZoom = this.zoom;
    this.targetCamX = this.camX;
    this.targetCamY = this.camY;
    this.isTransitioning = false;

    // Active Map Mode: 'political' | 'development' | 'trade' | 'military'
    this.mapMode = 'political';

    // Historical War Theaters for deep focal zoom (especially concentrated Europe)
    this.theaters = {
      europe: { x: 1180, y: 300, zoom: 3.2, name: 'Europa Central' },
      flanders: { x: 1150, y: 275, zoom: 4.2, name: 'Flandes & Rin' },
      spain: { x: 1100, y: 380, zoom: 2.8, name: 'Castilla & Mediterráneo' },
      americas: { x: 580, y: 520, zoom: 1.6, name: 'Las Américas' },
      asia: { x: 1950, y: 420, zoom: 2.0, name: 'Asia Oriental' },
      mena: { x: 1380, y: 420, zoom: 2.4, name: 'Levante & Oriente Medio' },
      global: { x: 1200, y: 580, zoom: 0.75, name: 'Orbe Global' }
    };
  }

  setMapMode(mode) {
    if (['political', 'development', 'trade', 'military'].includes(mode)) {
      this.mapMode = mode;
    }
  }

  flyTo(worldX, worldY, zoom) {
    const cWidth = this.canvas ? this.canvas.width : 1600;
    const cHeight = this.canvas ? this.canvas.height : 900;
    this.targetZoom = Math.max(0.4, Math.min(4.5, zoom));
    this.targetCamX = (cWidth * 0.5) - (worldX * this.targetZoom);
    this.targetCamY = (cHeight * 0.5) - (worldY * this.targetZoom);
    this.isTransitioning = true;
  }

  flyToTheater(theaterKey) {
    const th = this.theaters[theaterKey];
    if (th) {
      this.flyTo(th.x, th.y, th.zoom);
    }
  }

  loadScenario(scenarioKey = 'europe_200', playerFaction = 'spain', customCivData = null) {
    this.scenarioKey = scenarioKey;
    const rawProvs = (typeof getScenarioProvinces === 'function')
      ? getScenarioProvinces(scenarioKey, customCivData)
      : (typeof WORLD_PROVINCES !== 'undefined' ? WORLD_PROVINCES : []);

    this.provinces = rawProvs.map(d => new Province(d));
    this.selectedProvince = null;
    this.hoveredProvince = null;
    this.activeLabelBoxes = [];

    // Center camera on player faction's capital or scenario center
    const activeFactionsMap = (typeof FACTIONS !== 'undefined') ? FACTIONS : {};
    const fDef = (playerFaction === 'custom' && customCivData) ? customCivData : (activeFactionsMap[playerFaction] || activeFactionsMap['spain']);
    const capId = fDef ? fDef.capitalProvince : 'castilla';
    const capProv = this.getProvinceById(capId);

    const scenarioDef = (typeof CAMPAIGN_SCENARIOS !== 'undefined') ? CAMPAIGN_SCENARIOS[scenarioKey] : null;

    if (capProv) {
      const zoom = (scenarioDef && scenarioDef.cameraCenter) ? scenarioDef.cameraCenter.zoom : 1.8;
      this.flyTo(capProv.x, capProv.y, zoom);
    } else if (scenarioDef && scenarioDef.cameraCenter) {
      this.flyTo(scenarioDef.cameraCenter.x, scenarioDef.cameraCenter.y, scenarioDef.cameraCenter.zoom);
    }
  }

  _updateCamera() {
    if (this.isTransitioning) {
      const lerp = 0.12;
      this.camX += (this.targetCamX - this.camX) * lerp;
      this.camY += (this.targetCamY - this.camY) * lerp;
      this.zoom += (this.targetZoom - this.zoom) * lerp;

      if (Math.abs(this.camX - this.targetCamX) < 0.6 &&
          Math.abs(this.camY - this.targetCamY) < 0.6 &&
          Math.abs(this.zoom - this.targetZoom) < 0.005) {
        this.camX = this.targetCamX;
        this.camY = this.targetCamY;
        this.zoom = this.targetZoom;
        this.isTransitioning = false;
      }
    }
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

  render(ctx, armies, selectedArmy = null) {
    if (!ctx) return;
    const w = ctx.canvas ? ctx.canvas.width : (this.canvas ? this.canvas.width : 1600);
    const h = ctx.canvas ? ctx.canvas.height : (this.canvas ? this.canvas.height : 900);
    this.animTime += 1;

    // Update smooth camera lerp if in transition
    this._updateCamera();

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
          const isSel = (selectedArmy === a);
          const isHov = (this.hoveredArmy === a);
          a.renderOnCampaign(ctx, isHov, isSel);
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

    // Reset frame-level label collision manager
    this.activeLabelBoxes = [];

    // Trade good labels and icons
    const tradeLabels = {
      grain: { icon: '🌾', name: 'Grano', color: '#16a34a' },
      wool: { icon: '🧶', name: 'Lana', color: '#d97706' },
      timber: { icon: '🪵', name: 'Madera', color: '#65a30d' },
      iron: { icon: '⛏️', name: 'Hierro', color: '#475569' },
      saltpeter: { icon: '🧂', name: 'Salitre', color: '#9333ea' },
      spices: { icon: '🌶️', name: 'Especias', color: '#db2777' },
      silver: { icon: '🥈', name: 'Plata', color: '#94a3b8' },
      gold: { icon: '🪙', name: 'Oro', color: '#eab308' }
    };

    // 1. First Pass: Render All Province Polygons & Territorial Borders
    this.provinces.forEach(p => {
      const fac = factionsObj[p.owner] || factionsObj.spain || {
        name: 'Imperio',
        banner: '⚔️',
        colors: { primary: '#d97706', secondary: '#b91c1c', accent: '#fbbf24', map: '#1e293b' }
      };

      const isSelected = this.selectedProvince === p;
      const isHovered = this.hoveredProvince === p;

      ctx.save();

      // Draw Province Territorial Polygon
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

      // Compute fill color according to active Mapmode
      let fillColor = fac.colors.primary || '#d97706';
      let fillAlpha = isSelected ? 0.45 : (isHovered ? 0.35 : 0.22);

      if (this.mapMode === 'development') {
        const lvl = p.developmentLevel || 1;
        if (lvl <= 2) fillColor = '#78350f';
        else if (lvl <= 4) fillColor = '#d97706';
        else if (lvl <= 6) fillColor = '#eab308';
        else if (lvl <= 8) fillColor = '#10b981';
        else fillColor = '#06b6d4';
        fillAlpha = isSelected ? 0.60 : (isHovered ? 0.50 : 0.38);
      } else if (this.mapMode === 'trade') {
        const tg = tradeLabels[p.tradeGood] || tradeLabels.grain;
        fillColor = tg.color;
        fillAlpha = isSelected ? 0.55 : (isHovered ? 0.45 : 0.32);
      } else if (this.mapMode === 'military') {
        const def = p.defenseLevel || 0;
        if (def === 0) fillColor = '#334155';
        else if (def === 1) fillColor = '#b45309';
        else if (def === 2) fillColor = '#ea580c';
        else fillColor = '#991b1b';
        fillAlpha = isSelected ? 0.55 : (isHovered ? 0.45 : 0.32);
      }

      if (isHovered && this.mapMode === 'political') {
        fillColor = fac.colors.accent || '#38bdf8';
      }

      ctx.fillStyle = fillColor;
      ctx.globalAlpha = fillAlpha;
      ctx.fill();

      // Territorial Border
      ctx.globalAlpha = 1.0;
      if (isSelected) {
        const pulse = Math.sin(this.animTime * 0.12) * 0.8;
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 3.2 + pulse;
        ctx.stroke();
      } else if (isHovered) {
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.4;
        ctx.stroke();
      } else {
        ctx.strokeStyle = fac.colors.primary || '#d97706';
        ctx.lineWidth = 1.4;
        ctx.stroke();
      }

      // Port Anchor (Visible only at medium-deep zoom)
      if (p.hasPort && this.zoom >= 1.6) {
        const portX = p.x + p.radius * 0.52;
        const portY = p.y + p.radius * 0.42;
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 10px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('⚓', portX, portY);
      }

      ctx.restore();
    });

    // 2. Second Pass: Age of History III Macro Unified Realm Titles (Zoom < 1.6)
    if (this.zoom < 1.6) {
      this._renderNationClusters(ctx, factionsObj);
    }

    // 3. Third Pass: Individual Cities & Citadels with LOD & Anti-Collision
    this.provinces.forEach(p => {
      const fac = factionsObj[p.owner] || factionsObj.spain || {
        name: 'Imperio',
        banner: '⚔️',
        colors: { primary: '#d97706', accent: '#fbbf24' }
      };
      const isSelected = this.selectedProvince === p;
      const isHovered = this.hoveredProvince === p;

      this._renderCitadel(ctx, p, fac, isSelected, isHovered, tradeLabels);
    });
  }

  // Age of History III: Draw unified sovereign empire titles across contiguous province clusters
  _renderNationClusters(ctx, factionsObj) {
    const fObj = factionsObj || (typeof FACTIONS !== 'undefined' ? FACTIONS : (globalThis.FACTIONS || {}));
    const nationProvinces = {};
    this.provinces.forEach(p => {
      if (!p.owner || p.owner === 'neutral') return;
      if (!nationProvinces[p.owner]) nationProvinces[p.owner] = [];
      nationProvinces[p.owner].push(p);
    });

    ctx.save();

    for (const [ownerId, provs] of Object.entries(nationProvinces)) {
      if (provs.length === 0) continue;
      const fac = fObj[ownerId];
      if (!fac) continue;

      // Group into spatial clusters (enclaves separated by > 380px world units)
      const clusters = [];
      provs.forEach(p => {
        let added = false;
        for (const cl of clusters) {
          const dist = Math.hypot(p.x - cl.cx, p.y - cl.cy);
          if (dist < 380) {
            cl.provs.push(p);
            cl.cx = cl.provs.reduce((sum, item) => sum + item.x, 0) / cl.provs.length;
            cl.cy = cl.provs.reduce((sum, item) => sum + item.y, 0) / cl.provs.length;
            added = true;
            break;
          }
        }
        if (!added) {
          clusters.push({ cx: p.x, cy: p.y, provs: [p] });
        }
      });

      clusters.forEach(cl => {
        // Only draw nation label for significant clusters
        if (cl.provs.length < 2 && provs.length > 3) return;

        const count = cl.provs.length;
        const fontSize = Math.max(11, Math.min(18, 10 + Math.sqrt(count) * 2.8));
        const realmName = fac.name.toUpperCase();

        ctx.font = `bold ${fontSize}px "Cinzel", "Outfit", "Times New Roman", serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Wide letter-spaced title
        const spacedName = realmName.split('').join(' ');
        const textW = ctx.measureText(spacedName).width;

        // Bounding collision box
        const boxX = cl.cx - textW * 0.5 - 10;
        const boxY = cl.cy - 12;
        const boxW = textW + 20;
        const boxH = 24;

        if (!this._checkAndAddLabelBox(boxX, boxY, boxW, boxH, false)) return;

        // Sovereign Banner Emblem above name
        if (count >= 2) {
          ctx.font = '14px sans-serif';
          ctx.fillText(fac.banner || '👑', cl.cx, cl.cy - 14);
        }

        // Text Halo & Glow for high contrast readability
        ctx.font = `bold ${fontSize}px "Cinzel", "Outfit", "Times New Roman", serif`;
        ctx.strokeStyle = 'rgba(10, 15, 26, 0.92)';
        ctx.lineWidth = 4.5;
        ctx.lineJoin = 'round';
        ctx.strokeText(spacedName, cl.cx, cl.cy);

        ctx.fillStyle = fac.colors.accent || '#fbbf24';
        ctx.fillText(spacedName, cl.cx, cl.cy);
      });
    }

    ctx.restore();
  }

  // Anti-collision AABB manager for labels
  _checkAndAddLabelBox(x, y, w, h, force = false) {
    if (!this.activeLabelBoxes) this.activeLabelBoxes = [];
    if (force) {
      this.activeLabelBoxes.push({ x, y, w, h });
      return true;
    }
    for (const b of this.activeLabelBoxes) {
      if (x < b.x + b.w && x + w > b.x && y < b.y + b.h && y + h > b.y) {
        return false; // Collides with higher-priority label
      }
    }
    this.activeLabelBoxes.push({ x, y, w, h });
    return true;
  }

  _renderCitadel(ctx, p, fac, isSelected, isHovered, tradeLabels) {
    const cx = p.x;
    const cy = p.y;
    const isFortress = p.hasBuilding('star_bastion') || p.defenseLevel >= 2;
    const z = this.zoom;
    const isCapital = fac.capitalProvince === p.id;

    ctx.save();

    // ==========================================
    // LOD TIER 1: MACRO VIEW (Zoom < 1.45)
    // Clean geopolitical view (Age of History 3)
    // Zero individual banners/pills to prevent clutter
    // ==========================================
    if (z < 1.45 && !isSelected && !isHovered) {
      // Draw subtle city node dot
      ctx.fillStyle = isCapital ? '#fbbf24' : (fac.colors.primary || '#d97706');
      ctx.beginPath();
      ctx.arc(cx, cy, isCapital ? 4.5 : 3.0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.restore();
      return;
    }

    // ==========================================
    // LOD TIER 2 & 3: CITADEL DRAWING (Zoom >= 1.45 or Selected/Hovered)
    // ==========================================
    if (isFortress) {
      // Star Bastion (Trace Italienne) 8-pointed shape
      ctx.fillStyle = '#1e293b';
      ctx.strokeStyle = isSelected ? '#fbbf24' : (fac.colors.primary || '#d97706');
      ctx.lineWidth = 1.4;

      ctx.beginPath();
      const numPoints = 8;
      const outerR = z > 2.6 ? 14 : 10;
      const innerR = z > 2.6 ? 7 : 5;
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
      ctx.strokeStyle = isSelected ? '#fbbf24' : '#64748b';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(cx, cy, 6.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    // Capital Ribbon Plaque with Anti-Collision Check
    const shouldDrawName = isSelected || isHovered || isCapital || (p.developmentLevel >= 4 && z >= 1.6) || z >= 2.4;

    if (shouldDrawName) {
      const nameW = Math.max(48, p.capitalName.length * 6.0);
      const nameH = 13;
      const nameX = cx - nameW * 0.5;
      const nameY = cy + 8;

      const canDraw = this._checkAndAddLabelBox(nameX, nameY, nameW, nameH, isSelected || isHovered);
      if (canDraw) {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.90)';
        ctx.strokeStyle = isSelected ? '#fbbf24' : (fac.colors.primary || '#d97706');
        ctx.lineWidth = 1.0;
        ctx.fillRect(nameX, nameY, nameW, nameH);
        ctx.strokeRect(nameX, nameY, nameW, nameH);

        ctx.fillStyle = isCapital ? '#fbbf24' : '#f8fafc';
        ctx.font = `bold ${isCapital ? 9 : 8.5}px "Outfit", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.capitalName, cx, nameY + 6.5);
      }
    }

    // =========================================================
    // CONTEXTUAL OVERLAYS: Strictly filtered by active Mapmode or Deep Micro Zoom
    // Prevents the massive overlap seen in Political mode
    // =========================================================
    const tgInfo = tradeLabels[p.tradeGood] || tradeLabels.grain;

    // 1. Trade Good Pill: ONLY in Trade mapmode OR Deep Zoom (z > 2.8)
    if (this.mapMode === 'trade' || (z > 2.8 && (isSelected || isHovered))) {
      const pillW = 62;
      const pillH = 12;
      const pillX = cx - pillW * 0.5;
      const pillY = cy + 23;

      if (this._checkAndAddLabelBox(pillX, pillY, pillW, pillH, isSelected || isHovered)) {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
        ctx.strokeStyle = tgInfo.color;
        ctx.lineWidth = 1.0;
        ctx.fillRect(pillX, pillY, pillW, pillH);
        ctx.strokeRect(pillX, pillY, pillW, pillH);

        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 8px "Outfit", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${tgInfo.icon} ${tgInfo.name}`, cx, pillY + 6);
      }
    }

    // 2. Development Stars: ONLY in Development mapmode OR Deep Zoom (z > 2.8)
    if (this.mapMode === 'development' || (z > 2.8 && (isSelected || isHovered))) {
      const devStars = '★'.repeat(Math.min(5, p.developmentLevel || 1));
      ctx.fillStyle = '#fbbf24';
      ctx.font = '9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(devStars, cx, cy - 14);
    }

    // 3. Garrison Defense: ONLY in Military mapmode OR Deep Zoom (z > 2.8)
    if ((this.mapMode === 'military' || z > 2.8) && p.garrison && p.garrison.length > 0) {
      ctx.fillStyle = '#94a3b8';
      ctx.font = '7.5px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`🛡️ Levas: ${p.garrison.length * 35}`, cx, cy + 36);
    }

    ctx.restore();
  }

  _renderMapDecoration(ctx) {
    // Screen-space Compass Rose
    ctx.save();
    const crW = ctx.canvas ? ctx.canvas.width : (this.canvas ? this.canvas.width : 1200);
    if (crW <= 768) {
      ctx.restore();
      return; // Skip compass on mobile to avoid overlapping theaters bar
    }
    const crH = ctx.canvas ? ctx.canvas.height : (this.canvas ? this.canvas.height : 900);
    const crX = 65;
    const crY = crH - 65;

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
