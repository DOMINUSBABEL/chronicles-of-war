/**
 * Chronicles of War - Pre-Built Historical Scenarios & Sandbox Generator
 * Includes the featured Battle of Pavia (1525) breach assault from the reference video
 */

const SCENARIOS = {
  pavia: {
    id: 'pavia',
    name: 'La Brecha de Pavía (1525)',
    era: 'renaissance',
    description: 'El asalto a la brecha del muro del Parque Mirabello. Los arcabuceros y tercios imperiales emboscados en la niebla y humo contra la caballería pesada y piqueros franceses.',
    mapWidth: 1600,
    mapHeight: 1100,
    mapData: {
      hills: [
        { x: 250, y: 300, rx: 140, ry: 90, angle: 0.2 },
        { x: 1350, y: 800, rx: 160, ry: 100, angle: -0.1 }
      ],
      forests: [
        { x: 220, y: 180, rx: 120, ry: 90, angle: 0 },
        { x: 240, y: 920, rx: 140, ry: 100, angle: 0.3 },
        { x: 1380, y: 220, rx: 130, ry: 90, angle: -0.2 }
      ],
      roads: [
        {
          width: 20,
          points: [
            { x: 100, y: 550 },
            { x: 680, y: 550 },
            { x: 920, y: 550 },
            { x: 1500, y: 550 }
          ]
        }
      ],
      rivers: [],
      // Star fortress wall and bastions across the center with breach
      fortifications: [
        {
          type: 'wall',
          width: 22,
          x1: 800,
          y1: 80,
          x2: 800,
          y2: 440
        },
        {
          type: 'bastion',
          points: [
            { x: 800, y: 200 },
            { x: 890, y: 280 },
            { x: 800, y: 360 }
          ]
        },
        {
          type: 'wall',
          width: 22,
          x1: 800,
          y1: 660,
          x2: 800,
          y2: 1020,
          breaches: [
            { x: 800, y: 550, radius: 45 } // Central Breach at Road!
          ]
        },
        {
          type: 'bastion',
          points: [
            { x: 800, y: 740 },
            { x: 890, y: 820 },
            { x: 800, y: 900 }
          ]
        }
      ],
      camps: [
        { x: 350, y: 550, team: 0, name: 'Campamento Imperial' },
        { x: 1250, y: 550, team: 1, name: 'Línea de Asalto Francesa' }
      ]
    },
    // Starting army deployment
    deployments: [
      // Blue Team (Imperiales / Españoles): Defend breach and bastion
      { unitKey: 'tercio', team: 0, x: 620, y: 550, angle: 0 },
      { unitKey: 'tercio', team: 0, x: 620, y: 410, angle: 0 },
      { unitKey: 'tercio', team: 0, x: 620, y: 690, angle: 0 },
      { unitKey: 'arquebusiers', team: 0, x: 730, y: 470, angle: 0 },
      { unitKey: 'arquebusiers', team: 0, x: 730, y: 630, angle: 0 },
      { unitKey: 'landsknecht', team: 0, x: 500, y: 550, angle: 0 },
      { unitKey: 'culverin', team: 0, x: 730, y: 280, angle: 0 },
      { unitKey: 'culverin', team: 0, x: 730, y: 820, angle: 0 },

      // Red Team (Franceses / Suizos): Assault the breach
      { unitKey: 'landsknecht', team: 1, x: 960, y: 550, angle: Math.PI },
      { unitKey: 'tercio', team: 1, x: 1040, y: 430, angle: Math.PI },
      { unitKey: 'tercio', team: 1, x: 1040, y: 670, angle: Math.PI },
      { unitKey: 'arquebusiers', team: 1, x: 1120, y: 350, angle: Math.PI },
      { unitKey: 'arquebusiers', team: 1, x: 1120, y: 750, angle: Math.PI },
      { unitKey: 'culverin', team: 1, x: 1220, y: 550, angle: Math.PI }
    ]
  },

  agincourt: {
    id: 'agincourt',
    name: 'Batalla de Agincourt (1415)',
    era: 'medieval',
    description: 'El fango letal de Agincourt. Los arqueros de tiro largo ingleses protegidos por estacas diezman las sucesivas cargas de la caballería feudal francesa.',
    mapWidth: 1600,
    mapHeight: 1100,
    mapData: {
      hills: [
        { x: 300, y: 250, rx: 150, ry: 90, angle: 0 }
      ],
      forests: [
        // Dense woods creating a narrow muddy funnel
        { x: 700, y: 150, rx: 280, ry: 140, angle: 0.1 },
        { x: 700, y: 950, rx: 280, ry: 140, angle: -0.1 },
        { x: 200, y: 900, rx: 160, ry: 100, angle: 0 }
      ],
      roads: [
        {
          width: 22,
          points: [{ x: 100, y: 550 }, { x: 1500, y: 550 }]
        }
      ],
      rivers: [],
      fortifications: [],
      camps: [
        { x: 250, y: 550, team: 0, name: 'Línea de Enrique V' },
        { x: 1350, y: 550, team: 1, name: 'Vanguardia Francesa' }
      ]
    },
    deployments: [
      // English Army (Blue)
      { unitKey: 'longbow', team: 0, x: 450, y: 400, angle: 0 },
      { unitKey: 'longbow', team: 0, x: 450, y: 550, angle: 0 },
      { unitKey: 'longbow', team: 0, x: 450, y: 700, angle: 0 },
      { unitKey: 'men_at_arms', team: 0, x: 380, y: 480, angle: 0 },
      { unitKey: 'men_at_arms', team: 0, x: 380, y: 620, angle: 0 },
      { unitKey: 'knights', team: 0, x: 280, y: 550, angle: 0 },

      // French Army (Red)
      { unitKey: 'knights', team: 1, x: 950, y: 480, angle: Math.PI },
      { unitKey: 'knights', team: 1, x: 950, y: 620, angle: Math.PI },
      { unitKey: 'knights', team: 1, x: 1080, y: 550, angle: Math.PI },
      { unitKey: 'men_at_arms', team: 1, x: 1180, y: 420, angle: Math.PI },
      { unitKey: 'men_at_arms', team: 1, x: 1180, y: 680, angle: Math.PI },
      { unitKey: 'catapult', team: 1, x: 1300, y: 550, angle: Math.PI }
    ]
  },

  cannae: {
    id: 'cannae',
    name: 'Batalla de Cannas (216 a.C.)',
    era: 'antiquity',
    description: 'La obra maestra del doble envolvimiento táctico. Las legiones romanas empujan el centro cartaginés mientras la caballería númida cierra la tenaza por la retaguardia.',
    mapWidth: 1600,
    mapHeight: 1100,
    mapData: {
      hills: [
        { x: 1200, y: 250, rx: 180, ry: 90, angle: 0 }
      ],
      forests: [
        { x: 300, y: 200, rx: 110, ry: 70, angle: 0 },
        { x: 1300, y: 900, rx: 140, ry: 80, angle: 0 }
      ],
      roads: [],
      rivers: [
        {
          width: 32,
          points: [
            { x: 100, y: 980 },
            { x: 500, y: 950 },
            { x: 1000, y: 990 },
            { x: 1500, y: 960 }
          ],
          bridges: [
            { x: 800, y: 970, angle: 0 }
          ]
        }
      ],
      fortifications: [],
      camps: [
        { x: 300, y: 550, team: 0, name: 'Campamento Romano' },
        { x: 1300, y: 550, team: 1, name: 'Línea de Aníbal' }
      ]
    },
    deployments: [
      // Roman Consuls (Blue)
      { unitKey: 'legion', team: 0, x: 520, y: 450, angle: 0 },
      { unitKey: 'legion', team: 0, x: 520, y: 550, angle: 0 },
      { unitKey: 'legion', team: 0, x: 520, y: 650, angle: 0 },
      { unitKey: 'legion', team: 0, x: 420, y: 500, angle: 0 },
      { unitKey: 'legion', team: 0, x: 420, y: 600, angle: 0 },
      { unitKey: 'cavalry', team: 0, x: 480, y: 320, angle: 0 },
      { unitKey: 'cavalry', team: 0, x: 480, y: 780, angle: 0 },
      { unitKey: 'ballista', team: 0, x: 340, y: 550, angle: 0 },

      // Hannibal Barca (Red)
      { unitKey: 'phalanx', team: 1, x: 780, y: 550, angle: Math.PI },
      { unitKey: 'phalanx', team: 1, x: 860, y: 440, angle: Math.PI },
      { unitKey: 'phalanx', team: 1, x: 860, y: 660, angle: Math.PI },
      { unitKey: 'cavalry', team: 1, x: 800, y: 280, angle: Math.PI },
      { unitKey: 'cavalry', team: 1, x: 800, y: 820, angle: Math.PI },
      { unitKey: 'ballista', team: 1, x: 1050, y: 550, angle: Math.PI }
    ]
  },

  waterloo: {
    id: 'waterloo',
    name: 'Batalla de Waterloo (1815)',
    era: 'napoleonic',
    description: 'La colina de Mont-Saint-Jean. Los cuadros británicos de infantería resisten las furiosas cargas de coraceros y el avance final de la Vieja Guardia Imperial.',
    mapWidth: 1600,
    mapHeight: 1100,
    mapData: {
      hills: [
        { x: 550, y: 550, rx: 120, ry: 400, angle: 0 } // Ridge of Mont-Saint-Jean
      ],
      forests: [
        { x: 420, y: 880, rx: 160, ry: 110, angle: 0.2 }, // Bois de Paris
        { x: 1300, y: 220, rx: 120, ry: 80, angle: 0 }
      ],
      roads: [
        {
          width: 20,
          points: [
            { x: 100, y: 550 },
            { x: 1500, y: 550 } // Brussels-Charleroi road
          ]
        }
      ],
      rivers: [],
      fortifications: [
        // Fortified Château d'Hougoumont
        {
          type: 'polygon',
          points: [
            { x: 620, y: 780 },
            { x: 700, y: 780 },
            { x: 700, y: 860 },
            { x: 620, y: 860 }
          ]
        }
      ],
      camps: [
        { x: 300, y: 550, team: 0, name: 'Línea Aliada (Wellington)' },
        { x: 1300, y: 550, team: 1, name: 'La Belle Alliance (Napoleón)' }
      ]
    },
    deployments: [
      // Allied Army (Blue)
      { unitKey: 'rifles', team: 0, x: 620, y: 440, angle: 0 },
      { unitKey: 'imperial_guard', team: 0, x: 500, y: 500, angle: 0 },
      { unitKey: 'imperial_guard', team: 0, x: 500, y: 600, angle: 0 },
      { unitKey: 'cuirassiers', team: 0, x: 380, y: 420, angle: 0 },
      { unitKey: 'grand_battery', team: 0, x: 480, y: 550, angle: 0 },

      // French Imperial Army (Red)
      { unitKey: 'cuirassiers', team: 1, x: 880, y: 450, angle: Math.PI },
      { unitKey: 'cuirassiers', team: 1, x: 880, y: 650, angle: Math.PI },
      { unitKey: 'imperial_guard', team: 1, x: 1050, y: 500, angle: Math.PI },
      { unitKey: 'imperial_guard', team: 1, x: 1050, y: 600, angle: Math.PI },
      { unitKey: 'rifles', team: 1, x: 980, y: 550, angle: Math.PI },
      { unitKey: 'grand_battery', team: 1, x: 1200, y: 550, angle: Math.PI }
    ]
  },

  rocroi: {
    id: 'rocroi',
    name: 'Batalla de Rocroi (1643)',
    era: 'renaissance',
    description: 'El canto del cisne de los Tercios de Flandes. El Conde de Fuentes y los tercios españoles resisten en solitario contra las cargas y la artillería envolvente del Duque de Enghien.',
    mapWidth: 1600,
    mapHeight: 1100,
    mapData: {
      hills: [
        { x: 450, y: 350, rx: 140, ry: 90, angle: 0.1 },
        { x: 1250, y: 750, rx: 160, ry: 100, angle: -0.15 }
      ],
      forests: [
        { x: 250, y: 180, rx: 150, ry: 100, angle: 0 },
        { x: 250, y: 920, rx: 160, ry: 110, angle: 0.2 },
        { x: 1400, y: 200, rx: 130, ry: 80, angle: 0 }
      ],
      roads: [
        {
          width: 20,
          points: [{ x: 100, y: 550 }, { x: 1500, y: 550 }]
        }
      ],
      rivers: [],
      fortifications: [],
      camps: [
        { x: 350, y: 550, team: 0, name: 'Tercios Españoles (Fuentes)' },
        { x: 1250, y: 550, team: 1, name: 'Línea Francesa (Enghien)' }
      ]
    },
    deployments: [
      // Spanish Veteran Tercios (Blue)
      { unitKey: 'tercio', team: 0, x: 500, y: 440, angle: 0 },
      { unitKey: 'tercio', team: 0, x: 500, y: 550, angle: 0 },
      { unitKey: 'tercio', team: 0, x: 500, y: 660, angle: 0 },
      { unitKey: 'arquebusiers', team: 0, x: 620, y: 400, angle: 0 },
      { unitKey: 'arquebusiers', team: 0, x: 620, y: 700, angle: 0 },
      { unitKey: 'landsknecht', team: 0, x: 380, y: 340, angle: 0 },
      { unitKey: 'landsknecht', team: 0, x: 380, y: 760, angle: 0 },
      { unitKey: 'culverin', team: 0, x: 400, y: 550, angle: 0 },

      // French Modern Royal Regiments (Red)
      { unitKey: 'tercio', team: 1, x: 950, y: 450, angle: Math.PI },
      { unitKey: 'tercio', team: 1, x: 950, y: 650, angle: Math.PI },
      { unitKey: 'arquebusiers', team: 1, x: 860, y: 380, angle: Math.PI },
      { unitKey: 'arquebusiers', team: 1, x: 860, y: 720, angle: Math.PI },
      { unitKey: 'landsknecht', team: 1, x: 1100, y: 320, angle: Math.PI },
      { unitKey: 'landsknecht', team: 1, x: 1100, y: 780, angle: Math.PI },
      { unitKey: 'culverin', team: 1, x: 1200, y: 500, angle: Math.PI },
      { unitKey: 'culverin', team: 1, x: 1200, y: 600, angle: Math.PI }
    ]
  },

  sekigahara: {
    id: 'sekigahara',
    name: 'Batalla de Sekigahara (1600)',
    era: 'renaissance',
    description: 'El gran choque del archipiélago nipón. El Ejército Oriental de Tokugawa Ieyasu frente a las fuerzas leales occidentales de Ishida Mitsunari entre la niebla del monte Sasao.',
    mapWidth: 1600,
    mapHeight: 1100,
    mapData: {
      hills: [
        { x: 350, y: 280, rx: 170, ry: 110, angle: 0.3 }, // Monte Sasao
        { x: 1250, y: 820, rx: 180, ry: 100, angle: -0.2 } // Monte Matsuo (Kobayakawa)
      ],
      forests: [
        { x: 300, y: 850, rx: 140, ry: 90, angle: 0 },
        { x: 1350, y: 250, rx: 150, ry: 100, angle: 0.1 }
      ],
      roads: [
        {
          width: 18,
          points: [{ x: 100, y: 550 }, { x: 800, y: 550 }, { x: 1500, y: 550 }]
        }
      ],
      rivers: [
        {
          width: 28,
          points: [
            { x: 800, y: 50 },
            { x: 800, y: 480 },
            { x: 800, y: 620 },
            { x: 800, y: 1050 }
          ],
          bridges: [
            { x: 800, y: 550, angle: 0 }
          ]
        }
      ],
      fortifications: [],
      camps: [
        { x: 300, y: 550, team: 0, name: 'Ejército Oriental (Tokugawa)' },
        { x: 1300, y: 550, team: 1, name: 'Ejército Occidental (Ishida)' }
      ]
    },
    deployments: [
      // Tokugawa Eastern Army (Blue)
      { unitKey: 'tercio', team: 0, x: 520, y: 430, angle: 0 },
      { unitKey: 'tercio', team: 0, x: 520, y: 670, angle: 0 },
      { unitKey: 'arquebusiers', team: 0, x: 620, y: 480, angle: 0 },
      { unitKey: 'arquebusiers', team: 0, x: 620, y: 620, angle: 0 },
      { unitKey: 'landsknecht', team: 0, x: 400, y: 320, angle: 0 },
      { unitKey: 'landsknecht', team: 0, x: 400, y: 780, angle: 0 },
      { unitKey: 'culverin', team: 0, x: 380, y: 550, angle: 0 },

      // Ishida Western Army (Red)
      { unitKey: 'tercio', team: 1, x: 980, y: 430, angle: Math.PI },
      { unitKey: 'tercio', team: 1, x: 980, y: 670, angle: Math.PI },
      { unitKey: 'arquebusiers', team: 1, x: 880, y: 480, angle: Math.PI },
      { unitKey: 'arquebusiers', team: 1, x: 880, y: 620, angle: Math.PI },
      { unitKey: 'landsknecht', team: 1, x: 1100, y: 320, angle: Math.PI },
      { unitKey: 'landsknecht', team: 1, x: 1100, y: 780, angle: Math.PI },
      { unitKey: 'culverin', team: 1, x: 1180, y: 550, angle: Math.PI }
    ]
  }
};

window.SCENARIOS = SCENARIOS;
