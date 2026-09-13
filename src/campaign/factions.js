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
