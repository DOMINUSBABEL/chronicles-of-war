/**
 * Chronicles of War - Empire Earth Procedural Battlefield Generator
 * Implements the architecture of Empire Earth RMV (Random Map Scripts)
 * Supports multiple map types: Continental, Highlands, Mediterranean, Plains, and Siege Breach.
 * Features grand operational scale (4800 x 3200 px), multi-tier elevation, biomes, meandering rivers, bridges, fords, and forward capture points.
 */

class ProceduralBattlefieldGenerator {
  constructor() {
    this.width = 4800;
    this.height = 3200;
  }

  _createPRNG(seed) {
    let s = typeof seed === 'number' ? seed : this._stringToHash(seed.toString());
    return function() {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
  }

  _stringToHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }

  generateBattlefield(province, turn = 1, options = {}) {
    const seed = `${province.id}_${province.owner}_${turn}`;
    const prng = this._createPRNG(seed);

    // Determine Map Type & Climate (Empire Earth RMV style)
    let mapType = options.mapType;
    if (!mapType) {
      if (province.hasBuilding && (province.hasBuilding('star_bastion') || province.cityLevel >= 3)) {
        mapType = 'siege_breach';
      } else if (province.terrain === 'mountains' || province.terrain === 'hills') {
        mapType = 'highlands';
      } else if (province.hasPort) {
        mapType = 'mediterranean';
      } else {
        mapType = prng() > 0.45 ? 'continental' : 'plains';
      }
    }

    const climate = options.climate || (province.terrain === 'desert' ? 'desert' : (mapType === 'highlands' ? 'temperate' : 'temperate'));

    const mapData = {
      mapType,
      climate,
      width: this.width,
      height: this.height,
      hills: [],
      forests: [],
      roads: [],
      rivers: [],
      fortifications: [],
      camps: [],
      resources: []
    };

    // 1. Camps & Bases (Grand Operational Scale: 4800 x 3200 px)
    const campY0 = 1600 + (prng() - 0.5) * 250;
    const campY1 = 1600 + (prng() - 0.5) * 250;
    mapData.camps = [
      // Base Camps
      { x: 550, y: campY0, team: 0, name: 'Cuartel General & Tren de Bagajes Aliado' },
      { x: 4250, y: campY1, team: 1, name: `Campamento y Estado Mayor de ${province.capitalName || 'Fuerza Hostil'}` },

      // Forward Tactical Capture Points (Total War & Wargame Command Objectives)
      { x: 2400, y: 750, team: -1, name: 'Molino Fortificado & Reducto Norte' },
      { x: 2400, y: 1600, team: -1, name: 'Cruce Central & Puente de Piedra' },
      { x: 2400, y: 2450, team: -1, name: 'Baluarte & Batería de Artillería Sur' }
    ];

    // 2. Map-Specific Topology Generation (Scaled to 4800 x 3200 px)
    switch (mapType) {
      case 'siege_breach':
        this._buildSiegeBreachMap(mapData, prng, province);
        break;
      case 'highlands':
        this._buildHighlandsMap(mapData, prng);
        break;
      case 'mediterranean':
        this._buildMediterraneanMap(mapData, prng);
        break;
      case 'plains':
        this._buildPlainsMap(mapData, prng);
        break;
      case 'continental':
      default:
        this._buildContinentalMap(mapData, prng);
        break;
    }

    // 3. Balanced Strategic Resource Nodes (Empire Earth Style: Gold, Iron, Farms)
    this._distributeResourceNodes(mapData, prng);

    return mapData;
  }

  // --- MAP BUILDERS ---

  _buildContinentalMap(mapData, prng) {
    // A. Central Meandering River
    const riverMidX = 2400 + (prng() - 0.5) * 240;
    const bridgeY = 1600 + (prng() - 0.5) * 180;

    mapData.rivers.push({
      width: 55,
      points: [
        { x: riverMidX + 120, y: 60 },
        { x: riverMidX - 180, y: 920 },
        { x: riverMidX + 60, y: bridgeY },
        { x: riverMidX - 120, y: 2280 },
        { x: riverMidX + 150, y: 3140 }
      ],
      bridges: [
        { x: riverMidX + 60, y: bridgeY, angle: 0 },         // Main Stone Bridge (Center)
        { x: riverMidX - 160, y: 750, angle: 0.15 },        // Northern Wooden Bridge
        { x: riverMidX - 100, y: 2450, angle: -0.15 }       // Southern Ford & Causeway
      ]
    });

    // B. Strategic Paved Roads connecting Camps via Bridges & Forward Outposts
    // Main Central Highway
    mapData.roads.push({
      width: 26,
      points: [
        { x: 450, y: mapData.camps[0].y },
        { x: 1350, y: 1600 },
        { x: riverMidX + 60, y: bridgeY },
        { x: 3450, y: 1600 },
        { x: 4350, y: mapData.camps[1].y }
      ]
    });

    // Northern Flanking Bypass Road
    mapData.roads.push({
      width: 20,
      points: [
        { x: 750, y: 1100 },
        { x: 1500, y: 750 },
        { x: riverMidX - 160, y: 750 },
        { x: 3300, y: 750 },
        { x: 4050, y: 1100 }
      ]
    });

    // Southern Ridge Road
    mapData.roads.push({
      width: 20,
      points: [
        { x: 750, y: 2100 },
        { x: 1500, y: 2450 },
        { x: riverMidX - 100, y: 2450 },
        { x: 3300, y: 2450 },
        { x: 4050, y: 2100 }
      ]
    });

    // C. Flanking Elevation Hills (High vantage points for batteries & defense)
    mapData.hills.push(
      { x: 1400, y: 650, rx: 420, ry: 240, angle: 0.2 },
      { x: 1400, y: 2550, rx: 390, ry: 220, angle: -0.15 },
      { x: 3400, y: 650, rx: 420, ry: 240, angle: -0.2 },
      { x: 3400, y: 2550, rx: 390, ry: 220, angle: 0.15 },
      { x: 2400, y: 320, rx: 360, ry: 180, angle: 0 },
      { x: 2400, y: 2880, rx: 360, ry: 180, angle: 0 }
    );

    // D. Deciduous Forests & Ambush Woodlots
    mapData.forests.push(
      { x: 950, y: 540, rx: 330, ry: 210 },
      { x: 950, y: 2660, rx: 300, ry: 195 },
      { x: 3850, y: 540, rx: 330, ry: 210 },
      { x: 3850, y: 2660, rx: 300, ry: 195 },
      { x: 2100, y: 1100, rx: 270, ry: 160 }, // Forest hideout near north bridge
      { x: 2700, y: 2100, rx: 270, ry: 160 }, // Forest hideout near south ford
      { x: 2400, y: 420, rx: 250, ry: 140 }
    );
  }

  _buildHighlandsMap(mapData, prng) {
    // Rocky plateaus and mountain pass
    mapData.hills.push(
      { x: 2400, y: 450, rx: 950, ry: 380, angle: 0 },    // Massive Northern Mountain Ridge
      { x: 2400, y: 2750, rx: 950, ry: 380, angle: 0 },   // Massive Southern Mountain Ridge
      { x: 1250, y: 1600, rx: 360, ry: 270, angle: 0.3 },  // West defensive plateau
      { x: 3550, y: 1600, rx: 360, ry: 270, angle: -0.3 }  // East defensive plateau
    );

    // Fast Alpine Mountain Stream
    mapData.rivers.push({
      width: 38,
      points: [
        { x: 2580, y: 850 },
        { x: 2430, y: 1300 },
        { x: 2370, y: 1600 },
        { x: 2490, y: 2100 },
        { x: 2610, y: 2430 }
      ],
      bridges: [
        { x: 2370, y: 1600, angle: 0 } // Narrow timber bridge in rocky gorge
      ]
    });

    // Highway through mountain pass
    mapData.roads.push({
      width: 24,
      points: [
        { x: 500, y: mapData.camps[0].y },
        { x: 1800, y: 1600 },
        { x: 2370, y: 1600 },
        { x: 3000, y: 1600 },
        { x: 4300, y: mapData.camps[1].y }
      ]
    });

    // Conifer pine clusters for ambushes
    mapData.forests.push(
      { x: 1850, y: 1000, rx: 240, ry: 180 },
      { x: 1850, y: 2200, rx: 240, ry: 180 },
      { x: 2950, y: 1000, rx: 240, ry: 180 },
      { x: 2950, y: 2200, rx: 240, ry: 180 }
    );
  }

  _buildMediterraneanMap(mapData, prng) {
    // Coastal bay on the southern flank
    mapData.rivers.push({
      width: 280, // Wide coastal sea edge
      points: [
        { x: 150, y: 3050 },
        { x: 1500, y: 2880 },
        { x: 3000, y: 2820 },
        { x: 4650, y: 2940 }
      ],
      bridges: []
    });

    // Terraced hills overlooking coastal plain
    mapData.hills.push(
      { x: 1500, y: 1050, rx: 540, ry: 300, angle: 0.1 },
      { x: 3300, y: 1050, rx: 540, ry: 300, angle: -0.1 },
      { x: 2400, y: 1950, rx: 420, ry: 220, angle: 0 }
    );

    // Coastal military highway
    mapData.roads.push({
      width: 26,
      points: [
        { x: 450, y: 2100 },
        { x: 1650, y: 2160 },
        { x: 3150, y: 2160 },
        { x: 4350, y: 2100 }
      ]
    });

    // Olive and cypress groves
    mapData.forests.push(
      { x: 1140, y: 660, rx: 270, ry: 180 },
      { x: 3660, y: 660, rx: 270, ry: 180 },
      { x: 2400, y: 780, rx: 300, ry: 150 }
    );
  }

  _buildPlainsMap(mapData, prng) {
    // Grand open maneuvers
    mapData.hills.push(
      { x: 2400, y: 960, rx: 330, ry: 195, angle: 0.2 },
      { x: 2400, y: 2340, rx: 330, ry: 195, angle: -0.2 }
    );

    // Direct grand paved road
    mapData.roads.push({
      width: 28,
      points: [
        { x: 450, y: mapData.camps[0].y },
        { x: 1650, y: 1600 },
        { x: 3150, y: 1600 },
        { x: 4350, y: mapData.camps[1].y }
      ]
    });

    // Light woods on wings
    mapData.forests.push(
      { x: 1560, y: 540, rx: 225, ry: 150 },
      { x: 1560, y: 2660, rx: 225, ry: 150 },
      { x: 3240, y: 540, rx: 225, ry: 150 },
      { x: 3240, y: 2660, rx: 225, ry: 150 }
    );
  }

  _buildSiegeBreachMap(mapData, prng, province) {
    const wallX = 2460;
    const breachY = 1600;
    const breachRadius = 125;

    mapData.fortifications = [
      // North Wall Segment
      {
        type: 'wall',
        width: 32,
        x1: wallX,
        y1: 180,
        x2: wallX,
        y2: breachY - breachRadius
      },
      // North Star Bastion
      {
        type: 'bastion',
        points: [
          { x: wallX, y: breachY - breachRadius - 600 },
          { x: wallX + 270, y: breachY - breachRadius - 360 },
          { x: wallX, y: breachY - breachRadius - 120 }
        ]
      },
      // South Wall Segment
      {
        type: 'wall',
        width: 32,
        x1: wallX,
        y1: breachY + breachRadius,
        x2: wallX,
        y2: 3120,
        breaches: [
          { x: wallX, y: breachY, radius: breachRadius }
        ]
      },
      // South Star Bastion
      {
        type: 'bastion',
        points: [
          { x: wallX, y: breachY + breachRadius + 120 },
          { x: wallX + 270, y: breachY + breachRadius + 360 },
          { x: wallX, y: breachY + breachRadius + 600 }
        ]
      }
    ];

    // Assault Road through the rubble breach
    mapData.roads.push({
      width: 28,
      points: [
        { x: 450, y: breachY },
        { x: wallX - 240, y: breachY },
        { x: wallX + 240, y: breachY },
        { x: 4350, y: breachY }
      ]
    });

    // Siege battery redoubts for attackers
    mapData.hills.push(
      { x: 1350, y: 1050, rx: 270, ry: 150, angle: 0.3 },
      { x: 1350, y: 2250, rx: 270, ry: 150, angle: -0.3 }
    );

    // Fortress interior citadel grounds
    mapData.forests.push(
      { x: 3450, y: 750, rx: 270, ry: 180 },
      { x: 3450, y: 2550, rx: 270, ry: 180 }
    );
  }

  // --- SYMMETRICAL RESOURCE NODES (Empire Earth: Gold, Iron, Granary) ---
  _distributeResourceNodes(mapData, prng) {
    mapData.resources = [
      // Player Sector Resources
      { type: 'gold', x: 1140, y: 960, name: 'Mina de Oro Imperial', amount: 2000 },
      { type: 'iron', x: 1140, y: 2340, name: 'Veta de Hierro Forjado', amount: 1500 },
      { type: 'food', x: 780, y: 1500, name: 'Granero y Harinera', amount: 1800 },

      // Enemy Sector Resources
      { type: 'gold', x: 3660, y: 960, name: 'Mina de Oro', amount: 2000 },
      { type: 'iron', x: 3660, y: 2340, name: 'Veta de Hierro', amount: 1500 },
      { type: 'food', x: 4020, y: 1500, name: 'Silos de Cosecha', amount: 1800 },

      // Neutral Contested Center Resource
      { type: 'gold', x: 2400, y: 540, name: 'Tesoro Central Disputado', amount: 3000 }
    ];
  }
}

if (typeof window !== 'undefined') {
  window.ProceduralBattlefieldGenerator = ProceduralBattlefieldGenerator;
}
if (typeof globalThis !== 'undefined') {
  globalThis.ProceduralBattlefieldGenerator = ProceduralBattlefieldGenerator;
}
