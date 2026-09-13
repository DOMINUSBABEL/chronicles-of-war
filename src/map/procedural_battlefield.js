/**
 * Chronicles of War - Empire Earth Procedural Battlefield Generator
 * Implements the architecture of Empire Earth RMV (Random Map Scripts)
 * Supports multiple map types: Continental, Highlands, Mediterranean, Plains, and Siege Breach.
 * Features multi-tier elevation, biomes, meandering rivers, bridges, fords, and resource nodes.
 */

class ProceduralBattlefieldGenerator {
  constructor() {
    this.width = 1600;
    this.height = 1100;
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
      hills: [],
      forests: [],
      roads: [],
      rivers: [],
      fortifications: [],
      camps: [],
      resources: []
    };

    // 1. Camps & Bases (Symmetrical deployment zones for Team 0 & Team 1)
    const campY0 = 550 + (prng() - 0.5) * 80;
    const campY1 = 550 + (prng() - 0.5) * 80;
    mapData.camps = [
      { x: 220, y: campY0, team: 0, name: 'Línea y Cuartel Aliado' },
      { x: 1380, y: campY1, team: 1, name: `Campamento de ${province.capitalName || 'Fuerza Hostil'}` }
    ];

    // 2. Map-Specific Topology Generation
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
    const riverMidX = 800 + (prng() - 0.5) * 80;
    const bridgeY = 550 + (prng() - 0.5) * 60;

    mapData.rivers.push({
      width: 34,
      points: [
        { x: riverMidX + 40, y: 30 },
        { x: riverMidX - 60, y: 320 },
        { x: riverMidX + 20, y: bridgeY },
        { x: riverMidX - 40, y: 780 },
        { x: riverMidX + 50, y: 1070 }
      ],
      bridges: [
        { x: riverMidX + 20, y: bridgeY, angle: 0 },
        { x: riverMidX - 50, y: 250, angle: 0.15 } // Secondary crossing
      ]
    });

    // B. Strategic Paved Road connecting Camps via Main Bridge
    mapData.roads.push({
      width: 22,
      points: [
        { x: 150, y: mapData.camps[0].y },
        { x: 450, y: 550 },
        { x: riverMidX + 20, y: bridgeY },
        { x: 1150, y: 550 },
        { x: 1450, y: mapData.camps[1].y }
      ]
    });

    // C. Flanking Elevation Hills (Artillery vantage points)
    mapData.hills.push(
      { x: 480, y: 220, rx: 140, ry: 80, angle: 0.2 },
      { x: 480, y: 880, rx: 130, ry: 75, angle: -0.15 },
      { x: 1120, y: 220, rx: 140, ry: 80, angle: -0.2 },
      { x: 1120, y: 880, rx: 130, ry: 75, angle: 0.15 }
    );

    // D. Deciduous Forests
    mapData.forests.push(
      { x: 320, y: 180, rx: 110, ry: 70 },
      { x: 320, y: 920, rx: 100, ry: 65 },
      { x: 1280, y: 180, rx: 110, ry: 70 },
      { x: 1280, y: 920, rx: 100, ry: 65 },
      { x: 800, y: 140, rx: 90, ry: 50 },
      { x: 800, y: 960, rx: 90, ry: 50 }
    );
  }

  _buildHighlandsMap(mapData, prng) {
    // Rocky plateaus and mountain pass
    // Narrow canyon with mountain cliffs
    mapData.hills.push(
      { x: 800, y: 160, rx: 320, ry: 130, angle: 0 },  // Northern mountain wall
      { x: 800, y: 940, rx: 320, ry: 130, angle: 0 },  // Southern mountain wall
      { x: 420, y: 550, rx: 120, ry: 90, angle: 0.3 },  // West plateau
      { x: 1180, y: 550, rx: 120, ry: 90, angle: -0.3 } // East plateau
    );

    // Fast Alpine Mountain Stream
    mapData.rivers.push({
      width: 24,
      points: [
        { x: 860, y: 290 },
        { x: 810, y: 440 },
        { x: 790, y: 550 },
        { x: 830, y: 700 },
        { x: 870, y: 810 }
      ],
      bridges: [
        { x: 790, y: 550, angle: 0 } // Narrow timber bridge in gorge
      ]
    });

    // Highway through pass
    mapData.roads.push({
      width: 20,
      points: [
        { x: 180, y: mapData.camps[0].y },
        { x: 600, y: 550 },
        { x: 790, y: 550 },
        { x: 1000, y: 550 },
        { x: 1420, y: mapData.camps[1].y }
      ]
    });

    // Conifer pine clusters
    mapData.forests.push(
      { x: 620, y: 340, rx: 80, ry: 60 },
      { x: 620, y: 760, rx: 80, ry: 60 },
      { x: 980, y: 340, rx: 80, ry: 60 },
      { x: 980, y: 760, rx: 80, ry: 60 }
    );
  }

  _buildMediterraneanMap(mapData, prng) {
    // Coastal bay on the south edge
    mapData.rivers.push({
      width: 140, // Wide coastal sea / bay
      points: [
        { x: 50, y: 1020 },
        { x: 500, y: 960 },
        { x: 1000, y: 940 },
        { x: 1550, y: 980 }
      ],
      bridges: [] // Ocean edge, no bridges
    });

    // Terraced hills overlooking the coast
    mapData.hills.push(
      { x: 500, y: 350, rx: 180, ry: 100, angle: 0.1 },
      { x: 1100, y: 350, rx: 180, ry: 100, angle: -0.1 },
      { x: 800, y: 650, rx: 140, ry: 75, angle: 0 }
    );

    // Coastal road
    mapData.roads.push({
      width: 22,
      points: [
        { x: 150, y: 700 },
        { x: 550, y: 720 },
        { x: 1050, y: 720 },
        { x: 1450, y: 700 }
      ]
    });

    // Olive and cypress groves
    mapData.forests.push(
      { x: 380, y: 220, rx: 90, ry: 60 },
      { x: 1220, y: 220, rx: 90, ry: 60 },
      { x: 800, y: 260, rx: 100, ry: 50 }
    );
  }

  _buildPlainsMap(mapData, prng) {
    // Open maneuvers, few obstacles
    mapData.hills.push(
      { x: 800, y: 320, rx: 110, ry: 65, angle: 0.2 },
      { x: 800, y: 780, rx: 110, ry: 65, angle: -0.2 }
    );

    // Direct military road
    mapData.roads.push({
      width: 24,
      points: [
        { x: 150, y: mapData.camps[0].y },
        { x: 550, y: 550 },
        { x: 1050, y: 550 },
        { x: 1450, y: mapData.camps[1].y }
      ]
    });

    // Light copses of trees
    mapData.forests.push(
      { x: 520, y: 180, rx: 75, ry: 50 },
      { x: 520, y: 920, rx: 75, ry: 50 },
      { x: 1080, y: 180, rx: 75, ry: 50 },
      { x: 1080, y: 920, rx: 75, ry: 50 }
    );
  }

  _buildSiegeBreachMap(mapData, prng, province) {
    const wallX = 820;
    const breachY = 550;
    const breachRadius = 42;

    mapData.fortifications = [
      // North Wall Segment
      {
        type: 'wall',
        width: 24,
        x1: wallX,
        y1: 60,
        x2: wallX,
        y2: breachY - breachRadius
      },
      // North Star Bastion (Trace Italienne point)
      {
        type: 'bastion',
        points: [
          { x: wallX, y: breachY - breachRadius - 200 },
          { x: wallX + 90, y: breachY - breachRadius - 120 },
          { x: wallX, y: breachY - breachRadius - 40 }
        ]
      },
      // South Wall Segment
      {
        type: 'wall',
        width: 24,
        x1: wallX,
        y1: breachY + breachRadius,
        x2: wallX,
        y2: 1040,
        breaches: [
          { x: wallX, y: breachY, radius: breachRadius }
        ]
      },
      // South Star Bastion (Trace Italienne point)
      {
        type: 'bastion',
        points: [
          { x: wallX, y: breachY + breachRadius + 40 },
          { x: wallX + 90, y: breachY + breachRadius + 120 },
          { x: wallX, y: breachY + breachRadius + 200 }
        ]
      }
    ];

    // Assault Road through the rubble breach
    mapData.roads.push({
      width: 22,
      points: [
        { x: 100, y: breachY },
        { x: wallX - 80, y: breachY },
        { x: wallX + 80, y: breachY },
        { x: 1500, y: breachY }
      ]
    });

    // Siege trenches / Redoubts for attackers
    mapData.hills.push(
      { x: 450, y: 350, rx: 90, ry: 50, angle: 0.3 }, // Attacker artillery redoubt
      { x: 450, y: 750, rx: 90, ry: 50, angle: -0.3 } // Attacker artillery redoubt
    );

    // Fortress interior citadel grounds
    mapData.forests.push(
      { x: 1150, y: 250, rx: 90, ry: 60 },
      { x: 1150, y: 850, rx: 90, ry: 60 }
    );
  }

  // --- SYMMETRICAL RESOURCE NODES (Empire Earth: Gold, Iron, Granary) ---
  _distributeResourceNodes(mapData, prng) {
    mapData.resources = [
      // Player Sector Resources
      { type: 'gold', x: 380, y: 320, name: 'Mina de Oro Imperial', amount: 2000 },
      { type: 'iron', x: 380, y: 780, name: 'Veta de Hierro Forjado', amount: 1500 },
      { type: 'food', x: 260, y: 500, name: 'Granero y Harinera', amount: 1800 },

      // Enemy Sector Resources
      { type: 'gold', x: 1220, y: 320, name: 'Mina de Oro', amount: 2000 },
      { type: 'iron', x: 1220, y: 780, name: 'Veta de Hierro', amount: 1500 },
      { type: 'food', x: 1340, y: 500, name: 'Silos de Cosecha', amount: 1800 },

      // Neutral Contested Center Resource
      { type: 'gold', x: 800, y: 180, name: 'Tesoro Central Disputado', amount: 3000 }
    ];
  }
}

window.ProceduralBattlefieldGenerator = ProceduralBattlefieldGenerator;
