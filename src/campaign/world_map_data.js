/**
 * Chronicles of War - Global World Map Data
 * Calibrated for ultra-high-definition 2400x1162 historical world map relief
 * Based on Age of History 3 cartographic coordinate space
 */

const WORLD_PROVINCES = [
  // --- IBERIA ---
  {
    id: 'castilla',
    name: 'Castilla & León',
    capitalName: 'Madrid',
    owner: 'spain',
    theater: 'Europe',
    x: 1103,
    y: 375,
    radius: 30,
    polygon: [
      { x: 1075, y: 350 }, { x: 1125, y: 350 }, { x: 1125, y: 395 }, { x: 1075, y: 395 }
    ],
    neighbors: ['aragon', 'andalucia', 'bordeaux', 'flanders', 'milan', 'caribbean'],
    terrain: 'plains',
    hasPort: false,
    cityLevel: 3,
    buildings: ['barracks', 'farm', 'market', 'star_bastion', 'university']
  },
  {
    id: 'aragon',
    name: 'Corona de Aragón',
    capitalName: 'Barcelona',
    owner: 'spain',
    theater: 'Europe',
    x: 1142,
    y: 366,
    radius: 26,
    polygon: [
      { x: 1125, y: 345 }, { x: 1160, y: 345 }, { x: 1160, y: 390 }, { x: 1125, y: 390 }
    ],
    neighbors: ['castilla', 'bordeaux', 'milan', 'rome', 'naples'],
    terrain: 'hills',
    hasPort: true,
    cityLevel: 2,
    buildings: ['barracks', 'market', 'farm']
  },
  {
    id: 'andalucia',
    name: 'Andalucía & Sevilla',
    capitalName: 'Sevilla',
    owner: 'spain',
    theater: 'Europe',
    x: 1088,
    y: 401,
    radius: 26,
    polygon: [
      { x: 1065, y: 390 }, { x: 1115, y: 390 }, { x: 1115, y: 420 }, { x: 1065, y: 420 }
    ],
    neighbors: ['castilla', 'morocco', 'caribbean'],
    terrain: 'plains',
    hasPort: true,
    cityLevel: 3,
    buildings: ['barracks', 'market', 'farm', 'foundry']
  },

  // --- FRANCE & LOW COUNTRIES ---
  {
    id: 'bordeaux',
    name: 'Aquitania & Burdeos',
    capitalName: 'Burdeos',
    owner: 'france',
    theater: 'Europe',
    x: 1124,
    y: 335,
    radius: 26,
    polygon: [
      { x: 1100, y: 315 }, { x: 1145, y: 315 }, { x: 1145, y: 350 }, { x: 1100, y: 350 }
    ],
    neighbors: ['castilla', 'aragon', 'paris', 'burgundy'],
    terrain: 'plains',
    hasPort: true,
    cityLevel: 2,
    buildings: ['barracks', 'farm', 'market']
  },
  {
    id: 'paris',
    name: 'Île-de-France & París',
    capitalName: 'París',
    owner: 'france',
    theater: 'Europe',
    x: 1143,
    y: 296,
    radius: 28,
    polygon: [
      { x: 1125, y: 280 }, { x: 1162, y: 280 }, { x: 1162, y: 315 }, { x: 1125, y: 315 }
    ],
    neighbors: ['bordeaux', 'burgundy', 'flanders', 'normandy'],
    terrain: 'plains',
    hasPort: false,
    cityLevel: 3,
    buildings: ['barracks', 'farm', 'market', 'stables', 'university']
  },
  {
    id: 'normandy',
    name: 'Normandía & Canal',
    capitalName: 'Ruan',
    owner: 'france',
    theater: 'Europe',
    x: 1135,
    y: 291,
    radius: 22,
    polygon: [
      { x: 1115, y: 275 }, { x: 1145, y: 275 }, { x: 1145, y: 302 }, { x: 1115, y: 302 }
    ],
    neighbors: ['paris', 'london'],
    terrain: 'plains',
    hasPort: true,
    cityLevel: 2,
    buildings: ['barracks', 'market', 'farm']
  },
  {
    id: 'burgundy',
    name: 'Borgoña & Ródano',
    capitalName: 'Dijon',
    owner: 'france',
    theater: 'Europe',
    x: 1161,
    y: 312,
    radius: 25,
    polygon: [
      { x: 1145, y: 298 }, { x: 1180, y: 298 }, { x: 1180, y: 335 }, { x: 1145, y: 335 }
    ],
    neighbors: ['paris', 'bordeaux', 'milan', 'rhineland'],
    terrain: 'hills',
    hasPort: false,
    cityLevel: 2,
    buildings: ['barracks', 'mine', 'farm']
  },
  {
    id: 'flanders',
    name: 'Flandes y Países Bajos',
    capitalName: 'Bruselas',
    owner: 'spain',
    theater: 'Europe',
    x: 1156,
    y: 276,
    radius: 24,
    polygon: [
      { x: 1140, y: 260 }, { x: 1172, y: 260 }, { x: 1172, y: 292 }, { x: 1140, y: 292 }
    ],
    neighbors: ['paris', 'rhineland', 'london', 'castilla'],
    terrain: 'plains',
    hasPort: true,
    cityLevel: 3,
    buildings: ['barracks', 'market', 'star_bastion', 'foundry']
  },

  // --- BRITAIN ---
  {
    id: 'london',
    name: 'Inglaterra & Támesis',
    capitalName: 'Londres',
    owner: 'britain',
    theater: 'Europe',
    x: 1127,
    y: 269,
    radius: 26,
    polygon: [
      { x: 1105, y: 250 }, { x: 1145, y: 250 }, { x: 1145, y: 285 }, { x: 1105, y: 285 }
    ],
    neighbors: ['normandy', 'flanders', 'scotland'],
    terrain: 'plains',
    hasPort: true,
    cityLevel: 3,
    buildings: ['barracks', 'market', 'stables', 'star_bastion', 'university']
  },
  {
    id: 'scotland',
    name: 'Escocia & Tierras Altas',
    capitalName: 'Edimburgo',
    owner: 'britain',
    theater: 'Europe',
    x: 1107,
    y: 220,
    radius: 24,
    polygon: [
      { x: 1085, y: 200 }, { x: 1130, y: 200 }, { x: 1130, y: 245 }, { x: 1085, y: 245 }
    ],
    neighbors: ['london'],
    terrain: 'hills',
    hasPort: true,
    cityLevel: 2,
    buildings: ['barracks', 'mine', 'farm']
  },

  // --- ITALY & ALPS ---
  {
    id: 'milan',
    name: 'Ducado de Milán & Pavía',
    capitalName: 'Milán / Pavía',
    owner: 'spain',
    theater: 'Europe',
    x: 1188,
    y: 329,
    radius: 27,
    polygon: [
      { x: 1170, y: 315 }, { x: 1210, y: 315 }, { x: 1210, y: 345 }, { x: 1170, y: 345 }
    ],
    neighbors: ['burgundy', 'bavaria', 'rome', 'aragon', 'castilla'],
    terrain: 'plains',
    hasPort: false,
    cityLevel: 3,
    buildings: ['barracks', 'star_bastion', 'foundry', 'farm', 'university']
  },
  {
    id: 'rome',
    name: 'Estados Pontificios & Roma',
    capitalName: 'Roma',
    owner: 'rome',
    theater: 'Europe',
    x: 1210,
    y: 362,
    radius: 25,
    polygon: [
      { x: 1195, y: 345 }, { x: 1225, y: 345 }, { x: 1225, y: 375 }, { x: 1195, y: 375 }
    ],
    neighbors: ['milan', 'naples', 'aragon'],
    terrain: 'hills',
    hasPort: true,
    cityLevel: 3,
    buildings: ['barracks', 'university', 'star_bastion', 'farm']
  },
  {
    id: 'naples',
    name: 'Reino de Nápoles & Sicilia',
    capitalName: 'Nápoles',
    owner: 'spain',
    theater: 'Europe',
    x: 1221,
    y: 371,
    radius: 25,
    polygon: [
      { x: 1205, y: 365 }, { x: 1245, y: 365 }, { x: 1245, y: 400 }, { x: 1205, y: 400 }
    ],
    neighbors: ['rome', 'constantinople', 'aragon'],
    terrain: 'hills',
    hasPort: true,
    cityLevel: 2,
    buildings: ['barracks', 'market', 'farm']
  },

  // --- GERMANY & CENTRAL EUROPE ---
  {
    id: 'rhineland',
    name: 'Renania & Fráncfort',
    capitalName: 'Colonia',
    owner: 'germany',
    theater: 'Europe',
    x: 1173,
    y: 275,
    radius: 25,
    polygon: [
      { x: 1155, y: 260 }, { x: 1195, y: 260 }, { x: 1195, y: 295 }, { x: 1155, y: 295 }
    ],
    neighbors: ['flanders', 'burgundy', 'bavaria'],
    terrain: 'hills',
    hasPort: false,
    cityLevel: 2,
    buildings: ['barracks', 'mine', 'foundry']
  },
  {
    id: 'bavaria',
    name: 'Baviera, Austria & Viena',
    capitalName: 'Viena / Múnich',
    owner: 'germany',
    theater: 'Europe',
    x: 1220,
    y: 304,
    radius: 28,
    polygon: [
      { x: 1195, y: 285 }, { x: 1255, y: 285 }, { x: 1255, y: 325 }, { x: 1195, y: 325 }
    ],
    neighbors: ['rhineland', 'milan', 'constantinople'],
    terrain: 'mountains',
    hasPort: false,
    cityLevel: 3,
    buildings: ['barracks', 'mine', 'foundry', 'star_bastion', 'university']
  },

  // --- BALKANS & OTTOMAN EMPIRE ---
  {
    id: 'constantinople',
    name: 'Imperio Otomano & Tracia',
    capitalName: 'Constantinopla / Estambul',
    owner: 'ottoman',
    theater: 'Middle East',
    x: 1319,
    y: 369,
    radius: 30,
    polygon: [
      { x: 1290, y: 345 }, { x: 1350, y: 345 }, { x: 1350, y: 395 }, { x: 1290, y: 395 }
    ],
    neighbors: ['bavaria', 'naples', 'cairo', 'persia'],
    terrain: 'hills',
    hasPort: true,
    cityLevel: 3,
    buildings: ['barracks', 'foundry', 'market', 'star_bastion', 'university']
  },

  // --- NORTH AFRICA & MIDDLE EAST ---
  {
    id: 'cairo',
    name: 'Egipto & El Nilo',
    capitalName: 'El Cairo',
    owner: 'ottoman',
    theater: 'Africa',
    x: 1333,
    y: 460,
    radius: 30,
    polygon: [
      { x: 1305, y: 435 }, { x: 1360, y: 435 }, { x: 1360, y: 485 }, { x: 1305, y: 485 }
    ],
    neighbors: ['constantinople', 'morocco', 'persia'],
    terrain: 'plains',
    hasPort: true,
    cityLevel: 3,
    buildings: ['farm', 'market', 'barracks']
  },
  {
    id: 'morocco',
    name: 'Magreb & Marruecos',
    capitalName: 'Fez',
    owner: 'ottoman',
    theater: 'Africa',
    x: 1090,
    y: 427,
    radius: 28,
    polygon: [
      { x: 1060, y: 410 }, { x: 1120, y: 410 }, { x: 1120, y: 455 }, { x: 1060, y: 455 }
    ],
    neighbors: ['andalucia', 'cairo'],
    terrain: 'hills',
    hasPort: true,
    cityLevel: 2,
    buildings: ['barracks', 'market']
  },
  {
    id: 'persia',
    name: 'Imperio Persa & Isfahán',
    capitalName: 'Isfahán',
    owner: 'persia',
    theater: 'Middle East',
    x: 1468,
    y: 439,
    radius: 32,
    polygon: [
      { x: 1430, y: 410 }, { x: 1510, y: 410 }, { x: 1510, y: 470 }, { x: 1430, y: 470 }
    ],
    neighbors: ['constantinople', 'cairo', 'delhi', 'beijing'],
    terrain: 'hills',
    hasPort: false,
    cityLevel: 3,
    buildings: ['barracks', 'stables', 'market', 'university']
  },
  {
    id: 'delhi',
    name: 'Imperio Mogol del Indostán',
    capitalName: 'Delhi / Agra',
    owner: 'persia',
    theater: 'Asia',
    x: 1610,
    y: 445,
    radius: 34,
    polygon: [
      { x: 1570, y: 415 }, { x: 1650, y: 415 }, { x: 1650, y: 480 }, { x: 1570, y: 480 }
    ],
    neighbors: ['persia', 'beijing'],
    terrain: 'plains',
    hasPort: true,
    cityLevel: 3,
    buildings: ['barracks', 'market', 'farm', 'university']
  },

  // --- EAST ASIA ---
  {
    id: 'beijing',
    name: 'Dinastía Ming & Pekín',
    capitalName: 'Pekín',
    owner: 'china',
    theater: 'Asia',
    x: 1894,
    y: 379,
    radius: 36,
    polygon: [
      { x: 1850, y: 345 }, { x: 1940, y: 345 }, { x: 1940, y: 415 }, { x: 1850, y: 415 }
    ],
    neighbors: ['persia', 'delhi', 'kyoto'],
    terrain: 'plains',
    hasPort: true,
    cityLevel: 3,
    buildings: ['barracks', 'foundry', 'farm', 'market', 'star_bastion', 'university']
  },
  {
    id: 'kyoto',
    name: 'Shogunato & Kioto',
    capitalName: 'Kioto / Edo',
    owner: 'japan',
    theater: 'Asia',
    x: 2022,
    y: 420,
    radius: 28,
    polygon: [
      { x: 1995, y: 395 }, { x: 2050, y: 395 }, { x: 2050, y: 450 }, { x: 1995, y: 450 }
    ],
    neighbors: ['beijing'],
    terrain: 'mountains',
    hasPort: true,
    cityLevel: 3,
    buildings: ['barracks', 'mine', 'farm', 'star_bastion']
  },

  // --- AMERICAS ---
  {
    id: 'tenochtitlan',
    name: 'Imperio Mexica / Azteca',
    capitalName: 'Tenochtitlan',
    owner: 'aztec',
    theater: 'Americas',
    x: 471,
    y: 544,
    radius: 32,
    polygon: [
      { x: 435, y: 515 }, { x: 505, y: 515 }, { x: 505, y: 575 }, { x: 435, y: 575 }
    ],
    neighbors: ['cuzco', 'caribbean', 'andalucia'],
    terrain: 'hills',
    hasPort: true,
    cityLevel: 3,
    buildings: ['barracks', 'farm', 'mine', 'university']
  },
  {
    id: 'cuzco',
    name: 'Imperio Inca & Tawantinsuyu',
    capitalName: 'Cuzco',
    owner: 'inca',
    theater: 'Americas',
    x: 650,
    y: 776,
    radius: 34,
    polygon: [
      { x: 615, y: 745 }, { x: 685, y: 745 }, { x: 685, y: 810 }, { x: 615, y: 810 }
    ],
    neighbors: ['tenochtitlan', 'caribbean'],
    terrain: 'mountains',
    hasPort: true,
    cityLevel: 3,
    buildings: ['barracks', 'mine', 'farm']
  },
  {
    id: 'caribbean',
    name: 'Mar Caribe & La Habana',
    capitalName: 'La Habana',
    owner: 'spain',
    theater: 'Americas',
    x: 575,
    y: 495,
    radius: 28,
    polygon: [
      { x: 545, y: 470 }, { x: 605, y: 470 }, { x: 605, y: 520 }, { x: 545, y: 520 }
    ],
    neighbors: ['tenochtitlan', 'cuzco', 'andalucia', 'castilla'],
    terrain: 'plains',
    hasPort: true,
    cityLevel: 2,
    buildings: ['barracks', 'market', 'farm']
  }
];

if (typeof window !== 'undefined') {
  window.WORLD_PROVINCES = WORLD_PROVINCES;
}
if (typeof globalThis !== 'undefined') {
  globalThis.WORLD_PROVINCES = WORLD_PROVINCES;
}
