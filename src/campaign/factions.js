/**
 * Chronicles of War - 4X Factions & Civilizations
 * Inspired by Empire Earth civilizations, Total War diplomacy, and Age of History 3 mechanics
 */

const FACTIONS = {
  spain: {
    id: 'spain',
    name: 'Imperio Español',
    adjective: 'Español',
    banner: '🚩',
    emblem: '⚜️',
    leader: 'Carlos I de España',
    colors: {
      primary: '#d97706',
      secondary: '#b91c1c',
      accent: '#fbbf24',
      bg: 'rgba(217, 119, 6, 0.45)',
      map: '#b45309'
    },
    capitalProvince: 'castilla',
    traits: [
      { name: 'Infantes de Acero', desc: 'Tercios y arcabuceros cuestan -15% y poseen +20% moral.' },
      { name: 'Flota de Indias', desc: '+25% de ingresos de Oro por comercio y puertos.' },
      { name: 'Baluartes de Pavía', desc: 'Fortalezas y murallas reducen un 30% las bajas en asedios.' }
    ],
    startingResources: { gold: 1200, food: 800, iron: 500, science: 100 },
    epoch: 'renaissance'
  },

  france: {
    id: 'france',
    name: 'Reino de Francia',
    adjective: 'Francés',
    banner: '⚜️',
    emblem: '👑',
    leader: 'Francisco I de Valois',
    colors: {
      primary: '#2563eb',
      secondary: '#1e3a8a',
      accent: '#60a5fa',
      bg: 'rgba(37, 99, 235, 0.45)',
      map: '#1d4ed8'
    },
    capitalProvince: 'paris',
    traits: [
      { name: 'Caballería Real', desc: 'Gendarmes y caballeros feudales con +25% daño de carga de choque.' },
      { name: 'Granero de Europa', desc: '+30% de producción de Alimentos en provincias llanas.' },
      { name: 'Elan Militar', desc: 'Reclutamiento de infantería requiere un 20% menos de tiempo.' }
    ],
    startingResources: { gold: 1100, food: 1100, iron: 450, science: 110 },
    epoch: 'renaissance'
  },

  britain: {
    id: 'britain',
    name: 'Imperio Británico',
    adjective: 'Británico',
    banner: '🦁',
    emblem: '👑',
    leader: 'Enrique V / Wellington',
    colors: {
      primary: '#dc2626',
      secondary: '#7f1d1d',
      accent: '#f87171',
      bg: 'rgba(220, 38, 38, 0.45)',
      map: '#b91c1c'
    },
    capitalProvince: 'london',
    traits: [
      { name: 'Maestros del Tiro', desc: 'Arqueros de tiro largo y rifles con +15% de alcance y precisión.' },
      { name: 'Comercio Marítimo', desc: '+20% de Oro proveniente de provincias costeras.' },
      { name: 'Cuadro Inquebrantable', desc: 'Formación en cuadro anti-caballería recibe 40% menos de daño.' }
    ],
    startingResources: { gold: 1300, food: 750, iron: 400, science: 120 },
    epoch: 'renaissance'
  },

  germany: {
    id: 'germany',
    name: 'Sacro Imperio / Prusia',
    adjective: 'Germánico',
    banner: '🦅',
    emblem: '⚔️',
    leader: 'Maximiliano I / Federico II',
    colors: {
      primary: '#475569',
      secondary: '#0f172a',
      accent: '#cbd5e1',
      bg: 'rgba(71, 85, 105, 0.45)',
      map: '#334155'
    },
    capitalProvince: 'bavaria',
    traits: [
      { name: 'Furia Lansquenete', desc: 'Doppelsöldners y mandobles con +25% de penetración contra picas.' },
      { name: 'Fundiciones del Rin', desc: '+35% de producción de Hierro para armamento.' },
      { name: 'Disciplina Artillera', desc: 'Baterías de cañones y culebrinas recargan un 20% más rápido.' }
    ],
    startingResources: { gold: 950, food: 850, iron: 700, science: 130 },
    epoch: 'renaissance'
  },

  rome: {
    id: 'rome',
    name: 'Imperio Romano / Estados',
    adjective: 'Romano',
    banner: '🏛️',
    emblem: '🦅',
    leader: 'Julio César / Papa Julio II',
    colors: {
      primary: '#831843',
      secondary: '#500724',
      accent: '#f472b6',
      bg: 'rgba(131, 24, 67, 0.45)',
      map: '#701a75'
    },
    capitalProvince: 'rome',
    traits: [
      { name: 'Vías Consulares', desc: 'Ejércitos estratégicos tienen +30% de puntos de movimiento (MP).' },
      { name: 'Legiones Eternas', desc: 'Legiones romanas sufren -50% de penalización por flanqueo.' },
      { name: 'Ingeniería de Asedio', desc: 'Balistas y torres de asedio cuestan -25% de Hierro.' }
    ],
    startingResources: { gold: 1000, food: 900, iron: 600, science: 140 },
    epoch: 'antiquity'
  },

  ottoman: {
    id: 'ottoman',
    name: 'Imperio Otomano',
    adjective: 'Otomano',
    banner: '🌙',
    emblem: '⚔️',
    leader: 'Suleimán el Magnífico',
    colors: {
      primary: '#047857',
      secondary: '#064e3b',
      accent: '#34d399',
      bg: 'rgba(4, 120, 87, 0.45)',
      map: '#065f46'
    },
    capitalProvince: 'constantinople',
    traits: [
      { name: 'Cuerpo de Jenízaros', desc: 'Infantería de élite con moral inquebrantable y gran cadencia.' },
      { name: 'Gran Bombarda de Asedio', desc: 'Artillería con +30% daño de demolición contra murallas.' },
      { name: 'Encrucijada Comercial', desc: '+35% de ingresos por rutas comerciales terrestres.' }
    ],
    startingResources: { gold: 1250, food: 950, iron: 550, science: 120 },
    epoch: 'renaissance'
  },

  china: {
    id: 'china',
    name: 'Dinastía Ming / China',
    adjective: 'Chino',
    banner: '🐉',
    emblem: '🏯',
    leader: 'Emperador Yongle',
    colors: {
      primary: '#b91c1c',
      secondary: '#7f1d1d',
      accent: '#facc15',
      bg: 'rgba(185, 28, 28, 0.45)',
      map: '#991b1b'
    },
    capitalProvince: 'beijing',
    traits: [
      { name: 'Cuna de la Pólvora', desc: 'Coste de investigación en armas de fuego reducido un 30%.' },
      { name: 'Gran Muralla', desc: 'Guarniciones defensivas reciben bonificación del 40% de resistencia.' },
      { name: 'Ruta de la Seda', desc: '+40% de ingresos de Oro por comercio.' }
    ],
    startingResources: { gold: 1400, food: 1200, iron: 600, science: 150 },
    epoch: 'renaissance'
  },

  japan: {
    id: 'japan',
    name: 'Shogunato Tokugawa',
    adjective: 'Japonés',
    banner: '🎌',
    emblem: '🌸',
    leader: 'Tokugawa Ieyasu / Oda Nobunaga',
    colors: {
      primary: '#9333ea',
      secondary: '#581c87',
      accent: '#c084fc',
      bg: 'rgba(147, 51, 234, 0.45)',
      map: '#7e22ce'
    },
    capitalProvince: 'kyoto',
    traits: [
      { name: 'Código Bushido', desc: 'Samuráis nunca huyen en desbandada; luchan hasta el último aliento.' },
      { name: 'Salvas Tanegashima', desc: 'Arcabuceros disparan en tres filas rotativas con letal precisión.' },
      { name: 'Castillos de Piedra', desc: 'Reducción del 35% de daño de proyectiles en ciudadelas.' }
    ],
    startingResources: { gold: 1050, food: 900, iron: 500, science: 110 },
    epoch: 'renaissance'
  },

  persia: {
    id: 'persia',
    name: 'Imperio Safávida / Persia',
    adjective: 'Persa',
    banner: '🦁',
    emblem: '☀️',
    leader: 'Shah Abbas I',
    colors: {
      primary: '#0891b2',
      secondary: '#164e63',
      accent: '#22d3ee',
      bg: 'rgba(8, 145, 178, 0.45)',
      map: '#0e7490'
    },
    capitalProvince: 'persia',
    traits: [
      { name: 'Catafractos Reales', desc: 'Caballería pesada acorazada con gran armadura.' },
      { name: 'Ciudades Oasis', desc: '+25% de crecimiento demográfico y cosechas.' },
      { name: 'Arqueros de Tiro Rápido', desc: 'Cadencia de arqueros +30%.' }
    ],
    startingResources: { gold: 1150, food: 850, iron: 480, science: 115 },
    epoch: 'renaissance'
  },

  aztec: {
    id: 'aztec',
    name: 'Imperio Mexica / Azteca',
    adjective: 'Mexica',
    banner: '🦅',
    emblem: '☀️',
    leader: 'Moctezuma II',
    colors: {
      primary: '#ca8a04',
      secondary: '#713f12',
      accent: '#fde047',
      bg: 'rgba(202, 138, 4, 0.45)',
      map: '#a16207'
    },
    capitalProvince: 'tenochtitlan',
    traits: [
      { name: 'Guerreros Águila y Jaguar', desc: 'Infantería ligera con alta velocidad y letales golpes de macuahuitl.' },
      { name: 'Chinampas Flotantes', desc: 'Producción masiva de alimentos en lagos y riberas.' },
      { name: 'Fervor Sagrado', desc: 'Moral inicial aumentada en +35%.' }
    ],
    startingResources: { gold: 1300, food: 1000, iron: 350, science: 100 },
    epoch: 'medieval'
  },

  inca: {
    id: 'inca',
    name: 'Imperio Inca & Tawantinsuyu',
    adjective: 'Inca',
    banner: '☀️',
    emblem: '🏔️',
    leader: 'Huayna Cápac / Atahualpa',
    colors: {
      primary: '#ea580c',
      secondary: '#9a3412',
      accent: '#fdba74',
      bg: 'rgba(234, 88, 12, 0.45)',
      map: '#c2410c'
    },
    capitalProvince: 'cuzco',
    traits: [
      { name: 'Caminos del Inca', desc: '+35% velocidad de marcha en terrenos montañosos.' },
      { name: 'Terrazas de Andenería', desc: '+40% de producción agrícola en los Andes.' },
      { name: 'Guardia Imperial Huambracuna', desc: 'Guerreros con porras y boleadoras con gran armadura.' }
    ],
    startingResources: { gold: 1400, food: 1100, iron: 300, science: 105 },
    epoch: 'medieval'
  },

  portugal: {
    id: 'portugal',
    name: 'Reino de Portugal & Ultramar',
    adjective: 'Portugués',
    banner: '🛡️',
    emblem: '⚓',
    leader: 'Manuel I / Vasco da Gama',
    colors: {
      primary: '#059669',
      secondary: '#064e3b',
      accent: '#34d399',
      bg: 'rgba(5, 150, 105, 0.45)',
      map: '#047857'
    },
    capitalProvince: 'lisbon',
    traits: [
      { name: 'Carabelas de Exploración', desc: 'Rutas marítimas generan +45% de Oro.' },
      { name: 'Factorías de Especias', desc: '+30% de comercio en provincias costeras.' }
    ],
    startingResources: { gold: 1350, food: 800, iron: 420, science: 125 },
    epoch: 'renaissance'
  },

  holland: {
    id: 'holland',
    name: 'Provincias Unidas de Holanda',
    adjective: 'Holandés',
    banner: '🦁',
    emblem: '⛵',
    leader: 'Mauricio de Nassau',
    colors: {
      primary: '#f97316',
      secondary: '#9a3412',
      accent: '#fdba74',
      bg: 'rgba(249, 115, 22, 0.45)',
      map: '#ea580c'
    },
    capitalProvince: 'holland',
    traits: [
      { name: 'Compañía de las Indias', desc: '+50% ingresos por rutas comerciales ultramarinas.' },
      { name: 'Tácticas de Mauricio', desc: 'Fuego en contramarcha para arcabuceros y mosqueteros.' }
    ],
    startingResources: { gold: 1500, food: 750, iron: 450, science: 135 },
    epoch: 'renaissance'
  },

  hre: {
    id: 'hre',
    name: 'Sacro Imperio Romano Germánico',
    adjective: 'Imperial',
    banner: '🦅',
    emblem: '⚔️',
    leader: 'Maximiliano I / Casa de Austria',
    colors: {
      primary: '#eab308',
      secondary: '#713f12',
      accent: '#fef08a',
      bg: 'rgba(234, 179, 8, 0.45)',
      map: '#ca8a04'
    },
    capitalProvince: 'austria',
    traits: [
      { name: 'Regimientos Lansquenetes', desc: 'Infantería de picas y mandobles con gran pegada.' },
      { name: 'Metalurgia Germánica', desc: '+35% producción de Hierro.' }
    ],
    startingResources: { gold: 1100, food: 850, iron: 650, science: 120 },
    epoch: 'renaissance'
  },

  russia: {
    id: 'russia',
    name: 'Zarato de Rusia & Moscovia',
    adjective: 'Ruso',
    banner: '🦅',
    emblem: '🐻',
    leader: 'Iván IV / Pedro el Grande',
    colors: {
      primary: '#0284c7',
      secondary: '#082f49',
      accent: '#38bdf8',
      bg: 'rgba(2, 132, 199, 0.45)',
      map: '#0369a1'
    },
    capitalProvince: 'moscow',
    traits: [
      { name: 'Streltsí de la Guardia', desc: 'Mosqueteros con hachas de combate y alta resistencia invernal.' },
      { name: 'Inmensidad Esteparia', desc: 'Resistencia contra desgaste y bajo coste de reclutamiento.' }
    ],
    startingResources: { gold: 1050, food: 1150, iron: 600, science: 100 },
    epoch: 'renaissance'
  },

  poland: {
    id: 'poland',
    name: 'Mancomunidad Polaco-Lituana',
    adjective: 'Polaco',
    banner: '🦅',
    emblem: '🪶',
    leader: 'Segismundo II / Jan III Sobieski',
    colors: {
      primary: '#e11d48',
      secondary: '#4c0519',
      accent: '#fb7185',
      bg: 'rgba(225, 29, 72, 0.45)',
      map: '#be123c'
    },
    capitalProvince: 'poland',
    traits: [
      { name: 'Húsares Alados', desc: 'Caballería pesada de élite con la carga de choque más devastadora.' },
      { name: 'Libertad Dorada', desc: '+25% de moral para tropas montadas.' }
    ],
    startingResources: { gold: 1100, food: 950, iron: 550, science: 110 },
    epoch: 'renaissance'
  },

  sweden: {
    id: 'sweden',
    name: 'Imperio Sueco & Báltico',
    adjective: 'Sueco',
    banner: '🦁',
    emblem: '⚔️',
    leader: 'Gustavo Adolfo',
    colors: {
      primary: '#0284c7',
      secondary: '#1e3a8a',
      accent: '#facc15',
      bg: 'rgba(2, 132, 199, 0.45)',
      map: '#0369a1'
    },
    capitalProvince: 'sweden',
    traits: [
      { name: 'Doctrina de Fuego Rápido', desc: 'Salvas combinadas de mosquetería y artillería ligera de cuero.' },
      { name: 'Disciplina Severa', desc: '+25% resistencia a la fatiga en combate.' }
    ],
    startingResources: { gold: 1000, food: 800, iron: 700, science: 125 },
    epoch: 'renaissance'
  },

  mughal: {
    id: 'mughal',
    name: 'Imperio Mogol de la India',
    adjective: 'Mogol',
    banner: '🕌',
    emblem: '🐘',
    leader: 'Akbar el Grande',
    colors: {
      primary: '#15803d',
      secondary: '#14532d',
      accent: '#86efac',
      bg: 'rgba(21, 128, 61, 0.45)',
      map: '#166534'
    },
    capitalProvince: 'delhi',
    traits: [
      { name: 'Elefantes de Guerra', desc: 'Unidades gigantes que pulverizan líneas de infantería enemigas.' },
      { name: 'Riqueza del Indostán', desc: '+40% de ingresos de Oro por tributos y sedas.' }
    ],
    startingResources: { gold: 1500, food: 1200, iron: 500, science: 120 },
    epoch: 'renaissance'
  },

  safavid: {
    id: 'safavid',
    name: 'Imperio Safávida de Persia',
    adjective: 'Safávida',
    banner: '🦁',
    emblem: '☀️',
    leader: 'Shah Ismail / Shah Abbas I',
    colors: {
      primary: '#0891b2',
      secondary: '#164e63',
      accent: '#67e8f9',
      bg: 'rgba(8, 145, 178, 0.45)',
      map: '#0e7490'
    },
    capitalProvince: 'isfahan',
    traits: [
      { name: 'Caballería Qizilbash', desc: 'Jinetes devotos de choque con bonificación de moral.' },
      { name: 'Artesanía de Isfahán', desc: '+30% de producción científica y cultural.' }
    ],
    startingResources: { gold: 1200, food: 850, iron: 450, science: 125 },
    epoch: 'renaissance'
  },

  morocco: {
    id: 'morocco',
    name: 'Sultanato Saadí de Marruecos',
    adjective: 'Marroquí',
    banner: '🌙',
    emblem: '🕌',
    leader: 'Ahmad al-Mansur',
    colors: {
      primary: '#b45309',
      secondary: '#78350f',
      accent: '#fde68a',
      bg: 'rgba(180, 83, 9, 0.45)',
      map: '#92400e'
    },
    capitalProvince: 'fes',
    traits: [
      { name: 'Mosqueteros del Desierto', desc: 'Infantería ligera con arcabuces adaptados a la guerra en arenas.' },
      { name: 'Ruta del Oro Transahariana', desc: '+35% ingresos de Oro.' }
    ],
    startingResources: { gold: 1150, food: 800, iron: 380, science: 105 },
    epoch: 'renaissance'
  },

  neutral: {
    id: 'neutral',
    name: 'Tierras Neutrales & Fronteras Colonizables',
    adjective: 'Neutral',
    banner: '🏕️',
    emblem: '🌲',
    leader: 'Poblaciones Locales & Frontera Salvaje',
    colors: {
      primary: '#64748b',
      secondary: '#334155',
      accent: '#94a3b8',
      bg: 'rgba(100, 116, 139, 0.35)',
      map: '#475569'
    },
    capitalProvince: 'great_plains',
    traits: [
      { name: 'Tierra Virgen', desc: 'Territorio no reclamado que puede ser colonizado pacíficamente o anexionado mediante inversión de desarrollo.' }
    ],
    startingResources: { gold: 300, food: 300, iron: 100, science: 20 },
    epoch: 'medieval'
  }
};

class DiplomacyManager {
  constructor() {
    // Relationships table: key 'facA_facB' -> value -100 to +100
    this.relations = {};
    this.alliances = [];
    this.wars = [];
    this._initRelations();
  }

  _initRelations() {
    const keys = Object.keys(FACTIONS);
    for (let i = 0; i < keys.length; i++) {
      for (let j = i + 1; j < keys.length; j++) {
        const f1 = keys[i];
        const f2 = keys[j];
        // Historical Rivalries (Spain vs France in Pavia: At War!)
        let defaultRel = 0;
        if ((f1 === 'spain' && f2 === 'france') || (f1 === 'france' && f2 === 'spain')) {
          defaultRel = -80; // Guerra de Italia / Pavía
          this.wars.push({ f1, f2 });
        } else if ((f1 === 'spain' && f2 === 'germany') || (f1 === 'germany' && f2 === 'spain')) {
          defaultRel = 60; // Alianza Habsburgo
          this.alliances.push({ f1, f2 });
        } else if ((f1 === 'france' && f2 === 'britain') || (f1 === 'britain' && f2 === 'france')) {
          defaultRel = -40; // Tensa rivalidad
        }
        this.setRelation(f1, f2, defaultRel);
      }
    }
  }

  _pairKey(f1, f2) {
    return [f1, f2].sort().join('_');
  }

  getRelation(f1, f2) {
    if (f1 === f2) return 100;
    const key = this._pairKey(f1, f2);
    return this.relations[key] !== undefined ? this.relations[key] : 0;
  }

  setRelation(f1, f2, val) {
    const key = this._pairKey(f1, f2);
    this.relations[key] = Math.max(-100, Math.min(100, val));
  }

  isAtWar(f1, f2) {
    if (f1 === f2) return false;
    return this.getRelation(f1, f2) <= -50;
  }

  isAllied(f1, f2) {
    if (f1 === f2) return true;
    return this.getRelation(f1, f2) >= 50;
  }

  declareWar(f1, f2) {
    this.setRelation(f1, f2, -90);
    this.alliances = this.alliances.filter(a => !(a.f1 === f1 && a.f2 === f2) && !(a.f1 === f2 && a.f2 === f1));
    this.wars.push({ f1, f2 });
  }

  proposePeace(f1, f2) {
    this.setRelation(f1, f2, 10);
    this.wars = this.wars.filter(w => !(w.f1 === f1 && w.f2 === f2) && !(w.f1 === f2 && w.f2 === f1));
  }

  formAlliance(f1, f2) {
    this.setRelation(f1, f2, 80);
    this.alliances.push({ f1, f2 });
  }

  getStatusText(f1, f2) {
    const rel = this.getRelation(f1, f2);
    if (rel <= -50) return { text: 'GUERRA', color: '#ef4444' };
    if (rel < 0) return { text: 'TENSA', color: '#f59e0b' };
    if (rel >= 50) return { text: 'ALIANZA', color: '#10b981' };
    return { text: 'PAZ', color: '#94a3b8' };
  }
}

window.FACTIONS = FACTIONS;
window.DiplomacyManager = DiplomacyManager;
