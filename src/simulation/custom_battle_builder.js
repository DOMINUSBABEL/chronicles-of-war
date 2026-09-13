/**
 * Chronicles of War - Custom Battle & Army Builder
 * Allows players to orchestrate and simulate custom historical or fictional clashes
 * with selectable civilizations, point-buy battalion rosters, and Empire Earth map generators.
 */

const NATION_ROSTERS = {
  spain: {
    name: 'Imperio Español',
    era: 'renaissance',
    flag: 'assets/flags/spain.png',
    banner: '🇪🇸',
    accentColor: '#fbbf24',
    primaryColor: '#b91c1c',
    units: [
      { key: 'tercio', name: 'Tercio Viejo Español', cost: 280, soldiers: 56, type: 'pikes', icon: '🚩', desc: 'Núcleo acorazado de picas con mangas de fuego continuo.' },
      { key: 'arquebusiers', name: 'Manga de Arcabuceros', cost: 180, soldiers: 36, type: 'ranged', icon: '💥', desc: 'Tiradores veteranos con mecha y pólvora fina.' },
      { key: 'cavalry', name: 'Jinetes Ligeros de Pavía', cost: 240, soldiers: 24, type: 'cavalry', icon: '🐎', desc: 'Caballería rápida para envolver flancos enemigos.' },
      { key: 'culverin', name: 'Batería de Culebrinas', cost: 350, soldiers: 8, type: 'artillery', icon: '💣', desc: 'Pieza de artillería de bronce capaz de disparar bala y bote de metralla.' }
    ]
  },
  france: {
    name: 'Reino de Francia',
    era: 'renaissance',
    flag: 'assets/flags/france.png',
    banner: '⚜️',
    accentColor: '#93c5fd',
    primaryColor: '#1d4ed8',
    units: [
      { key: 'landsknecht', name: 'Banda Negra Francesa', cost: 250, soldiers: 48, type: 'pikes', icon: '🛡️', desc: 'Mercenarios suizos y lansquenetes al servicio de la corona.' },
      { key: 'knights', name: 'Gens d\'Armes Pesados', cost: 320, soldiers: 24, type: 'cavalry', icon: '👑', desc: 'La caballería más acorazada de Europa con lanzas pesadas.' },
      { key: 'arquebusiers', name: 'Tiradores Reales de Francisco I', cost: 180, soldiers: 36, type: 'ranged', icon: '💥', desc: 'Arcabuceros de línea real.' },
      { key: 'culverin', name: 'Batería Real de Artillería', cost: 360, soldiers: 8, type: 'artillery', icon: '💣', desc: 'Artillería pesada que dominó el inicio de Pavía.' }
    ]
  },
  britain: {
    name: 'Reino de Inglaterra / Gran Bretaña',
    era: 'medieval',
    flag: 'assets/flags/britain.png',
    banner: '🦁',
    accentColor: '#f87171',
    primaryColor: '#991b1b',
    units: [
      { key: 'longbow', name: 'Arqueros de Tiro Largo', cost: 220, soldiers: 40, type: 'ranged', icon: '🏹', desc: 'Lluvia letal de flechas bodkin perforantes.' },
      { key: 'men_at_arms', name: 'Hombres de Armas con Alabarda', cost: 200, soldiers: 48, type: 'infantry', icon: '⚔️', desc: 'Infantería de primera línea tenaz y pesada.' },
      { key: 'knights', name: 'Caballeros Ingleses', cost: 300, soldiers: 24, type: 'cavalry', icon: '🐎', desc: 'Jinetes nobles acorazados.' },
      { key: 'catapult', name: 'Fundíbulo / Catapulta', cost: 350, soldiers: 8, type: 'artillery', icon: '☄️', desc: 'Máquina de asedio para ablandar formaciones.' }
    ]
  },
  germany: {
    name: 'Sacro Imperio Romano Germánico',
    era: 'renaissance',
    flag: 'assets/flags/germany.png',
    banner: '🦅',
    accentColor: '#fef08a',
    primaryColor: '#78350f',
    units: [
      { key: 'landsknecht', name: 'Landsknechte de Frundsberg', cost: 260, soldiers: 48, type: 'pikes', icon: '⚔️', desc: 'Doppelsöldner con picas y espadones mandobles.' },
      { key: 'tercio', name: 'Cuadro Imperial de Picas', cost: 270, soldiers: 56, type: 'pikes', icon: '🛡️', desc: 'Bloque defensivo infranqueable.' },
      { key: 'arquebusiers', name: 'Arcabuceros de Suabia', cost: 180, soldiers: 36, type: 'ranged', icon: '💥', desc: 'Fuego de salva escalonado.' },
      { key: 'culverin', name: 'Cañón de Asedio Imperial', cost: 360, soldiers: 8, type: 'artillery', icon: '💣', desc: 'Gran calibre para desbaratar líneas enemigas.' }
    ]
  },
  rome: {
    name: 'República e Imperio Romano',
    era: 'antiquity',
    flag: 'assets/flags/rome.png',
    banner: '🏛️',
    accentColor: '#f59e0b',
    primaryColor: '#831843',
    units: [
      { key: 'legion', name: 'Cohorte de Legión Romana', cost: 220, soldiers: 48, type: 'infantry', icon: '⚔️', desc: 'Disciplina de hierro, dos salvas de pilum y avance con gladius.' },
      { key: 'phalanx', name: 'Falange Auxiliar de Lanzas', cost: 210, soldiers: 48, type: 'pikes', icon: '🛡️', desc: 'Muro de escudos y sarissas entrelazadas.' },
      { key: 'cavalry', name: 'Equites / Caballería Romana', cost: 240, soldiers: 24, type: 'cavalry', icon: '🐎', desc: 'Jinetes para persecución y protección de flancos.' },
      { key: 'ballista', name: 'Balista de Torsión', cost: 340, soldiers: 8, type: 'artillery', icon: '🎯', desc: 'Proyectiles perforantes de largo alcance.' }
    ]
  },
  ottoman: {
    name: 'Imperio Otomano',
    era: 'renaissance',
    flag: 'assets/flags/ottoman.png',
    banner: '🌙',
    accentColor: '#34d399',
    primaryColor: '#065f46',
    units: [
      { key: 'arquebusiers', name: 'Jenízaros de Infantería', cost: 220, soldiers: 40, type: 'ranged', icon: '💥', desc: 'Fuego de mosquete sumamente preciso con moral de acero.' },
      { key: 'tercio', name: 'Piqueros Azab de Vanguardia', cost: 240, soldiers: 52, type: 'pikes', icon: '🛡️', desc: 'Infantería masiva de choque.' },
      { key: 'cavalry', name: 'Caballería Pesada Sipahi', cost: 270, soldiers: 24, type: 'cavalry', icon: '🐎', desc: 'Jinetes de élite con cota de malla y sable curvo.' },
      { key: 'culverin', name: 'Gran Bombarda Otomana', cost: 400, soldiers: 8, type: 'artillery', icon: '💣', desc: 'Potencia destructiva colosal capaz de demoler murallas.' }
    ]
  },
  japan: {
    name: 'Shogunato Tokugawa / Japón Sengoku',
    era: 'renaissance',
    flag: 'assets/flags/japan.png',
    banner: '⛩️',
    accentColor: '#f43f5e',
    primaryColor: '#881337',
    units: [
      { key: 'men_at_arms', name: 'Samuráis con Katana & Yari', cost: 260, soldiers: 40, type: 'infantry', icon: '⚔️', desc: 'Guerreros de élite con código bushido y moral inquebrantable.' },
      { key: 'arquebusiers', name: 'Ashigarus con Arcabuz Tanegashima', cost: 190, soldiers: 36, type: 'ranged', icon: '💥', desc: 'Salvas continuas por filas (estilo Nobunaga).' },
      { key: 'cavalry', name: 'Caballería de Élite Samurai', cost: 280, soldiers: 24, type: 'cavalry', icon: '🐎', desc: 'Choque frontal veloz y disciplinado.' },
      { key: 'culverin', name: 'Batería de Cañones de Salva', cost: 350, soldiers: 8, type: 'artillery', icon: '💣', desc: 'Piezas importadas de bombardeo.' }
    ]
  },
  china: {
    name: 'Imperio Celestial Ming',
    era: 'renaissance',
    flag: 'assets/flags/china.png',
    banner: '🐉',
    accentColor: '#fbbf24',
    primaryColor: '#991b1b',
    units: [
      { key: 'longbow', name: 'Ballesteros de Repetición Chu-Ko-Nu', cost: 230, soldiers: 42, type: 'ranged', icon: '🏹', desc: 'Cadencia de fuego vertiginosa a media distancia.' },
      { key: 'men_at_arms', name: 'Guardia Imperial de la Ciudad Prohibida', cost: 250, soldiers: 48, type: 'infantry', icon: '⚔️', desc: 'Armaduras pesadas de placas y sables dao.' },
      { key: 'cavalry', name: 'Jinetes Acorazados del Norte', cost: 260, soldiers: 24, type: 'cavalry', icon: '🐎', desc: 'Caballería de frontera con lanzas y arcos.' },
      { key: 'culverin', name: 'Batería de Cohetes y Culebrinas', cost: 360, soldiers: 8, type: 'artillery', icon: '💣', desc: 'Artillería de pólvora con fuego de dispersión.' }
    ]
  },
  persia: {
    name: 'Imperio Safávida / Persia',
    era: 'renaissance',
    flag: 'assets/flags/persia.png',
    banner: '🦁',
    accentColor: '#38bdf8',
    primaryColor: '#0369a1',
    units: [
      { key: 'cavalry', name: 'Qizilbash / Jinetes de la Corona Roja', cost: 280, soldiers: 26, type: 'cavalry', icon: '🐎', desc: 'Caballería de choque fanática y veloz.' },
      { key: 'longbow', name: 'Arqueros Compuestos Persas', cost: 210, soldiers: 40, type: 'ranged', icon: '🏹', desc: 'Tiro de precisión con gran alcance.' },
      { key: 'men_at_arms', name: 'Guardia Real Inmortal Safávida', cost: 240, soldiers: 44, type: 'infantry', icon: '⚔️', desc: 'Infantería pesada armada con hachas y sables shamshir.' },
      { key: 'culverin', name: 'Batería de Morteros de Bronce', cost: 350, soldiers: 8, type: 'artillery', icon: '💣', desc: 'Bombardeo parabólico sobre líneas enemigas.' }
    ]
  },
  aztec: {
    name: 'Imperio Mexica / Azteca',
    era: 'antiquity',
    flag: 'assets/flags/aztec.png',
    banner: '🦅',
    accentColor: '#f97316',
    primaryColor: '#7c2d12',
    units: [
      { key: 'legion', name: 'Guerreros Águila con Macuahuitl', cost: 230, soldiers: 44, type: 'infantry', icon: '🦅', desc: 'Espadas de obsidiana capaces de cercenar armaduras.' },
      { key: 'men_at_arms', name: 'Guerreros Jaguar de Choque', cost: 250, soldiers: 40, type: 'infantry', icon: '🐆', desc: 'Furia de combate cuerpo a cuerpo y gran velocidad.' },
      { key: 'longbow', name: 'Honderos y Lanzadardos Atlatl', cost: 190, soldiers: 40, type: 'ranged', icon: '🎯', desc: 'Proyectiles perforantes de dardos con propulsor.' },
      { key: 'ballista', name: 'Batería de Lanzallamas de Nafta', cost: 340, soldiers: 8, type: 'artillery', icon: '🔥', desc: 'Proyectiles incendiarios que causan pánico inmediato.' }
    ]
  }
};

class CustomBattleBuilder {
  constructor(engine) {
    this.engine = engine;

    // Default configuration
    this.playerNation = 'spain';
    this.enemyNation = 'france';
    this.budget = 2500; // Gold points per side

    this.playerRoster = [];
    this.enemyRoster = [];

    // Empire Earth Map parameters
    this.mapType = 'continental'; // 'continental', 'highlands', 'mediterranean', 'plains', 'siege_breach'
    this.climate = 'temperate';   // 'temperate', 'desert', 'snow', 'mediterranean'
    this.timeOfDay = 'day';       // 'day', 'sunset', 'fog'

    this._initDefaultRosters();
  }

  _initDefaultRosters() {
    this.playerRoster = [
      { key: 'tercio', name: 'Tercio Viejo Español', count: 2, cost: 280, icon: '🚩' },
      { key: 'arquebusiers', name: 'Manga de Arcabuceros', count: 2, cost: 180, icon: '💥' },
      { key: 'cavalry', name: 'Jinetes Ligeros de Pavía', count: 1, cost: 240, icon: '🐎' },
      { key: 'culverin', name: 'Batería de Culebrinas', count: 1, cost: 350, icon: '💣' }
    ];

    this.enemyRoster = [
      { key: 'landsknecht', name: 'Banda Negra Francesa', count: 2, cost: 250, icon: '🛡️' },
      { key: 'knights', name: 'Gens d\'Armes Pesados', count: 1, cost: 320, icon: '👑' },
      { key: 'arquebusiers', name: 'Tiradores Reales de Francisco I', count: 2, cost: 180, icon: '💥' },
      { key: 'culverin', name: 'Batería Real de Artillería', count: 1, cost: 360, icon: '💣' }
    ];
  }

  getPlayerCost() {
    return this.playerRoster.reduce((sum, item) => sum + (item.cost * item.count), 0);
  }

  getEnemyCost() {
    return this.enemyRoster.reduce((sum, item) => sum + (item.cost * item.count), 0);
  }

  addUnitToRoster(side, unitKey) {
    const isPlayer = side === 'player';
    const nationKey = isPlayer ? this.playerNation : this.enemyNation;
    const nationDef = NATION_ROSTERS[nationKey];
    if (!nationDef) return false;

    const unitDef = nationDef.units.find(u => u.key === unitKey);
    if (!unitDef) return false;

    const currentCost = isPlayer ? this.getPlayerCost() : this.getEnemyCost();
    if (currentCost + unitDef.cost > this.budget) {
      return false; // Budget limit reached
    }

    const roster = isPlayer ? this.playerRoster : this.enemyRoster;
    const existing = roster.find(r => r.key === unitKey);
    if (existing) {
      existing.count++;
    } else {
      roster.push({
        key: unitKey,
        name: unitDef.name,
        count: 1,
        cost: unitDef.cost,
        icon: unitDef.icon
      });
    }
    return true;
  }

  removeUnitFromRoster(side, unitKey) {
    const roster = side === 'player' ? this.playerRoster : this.enemyRoster;
    const idx = roster.findIndex(r => r.key === unitKey);
    if (idx >= 0) {
      if (roster[idx].count > 1) {
        roster[idx].count--;
      } else {
        roster.splice(idx, 1);
      }
      return true;
    }
    return false;
  }

  setNations(playerNation, enemyNation) {
    if (NATION_ROSTERS[playerNation]) {
      this.playerNation = playerNation;
    }
    if (NATION_ROSTERS[enemyNation]) {
      this.enemyNation = enemyNation;
    }
    this._initDefaultRosters();
  }

  setBudget(budget) {
    this.budget = parseInt(budget) || 2500;
  }

  setEnvironment(mapType, climate) {
    this.mapType = mapType;
    this.climate = climate;
  }

  // --- LAUNCH CUSTOM BATTLE ---
  launchBattle() {
    const engine = this.engine;
    if (!engine) return;

    // 1. Generate Empire Earth Map
    const gen = new ProceduralBattlefieldGenerator();
    const mockProvince = {
      id: `custom_${this.mapType}_${Date.now()}`,
      name: `Campo de Batalla (${this.mapType.toUpperCase()})`,
      capitalName: 'Plaza de Armas',
      owner: this.playerNation,
      terrain: this.mapType === 'highlands' ? 'hills' : (this.mapType === 'siege_breach' ? 'fortress' : 'plains'),
      hasPort: this.mapType === 'mediterranean',
      hasBuilding: (b) => b === 'star_bastion' && this.mapType === 'siege_breach',
      cityLevel: this.mapType === 'siege_breach' ? 3 : 1
    };

    const mapData = gen.generateBattlefield(mockProvince, Math.floor(Math.random() * 99999), {
      mapType: this.mapType,
      climate: this.climate
    });

    engine.tacticalMap.loadScenarioData(mapData);

    // 2. Clear units
    engine.units = [];
    engine.selectedUnits = [];
    engine.nextUnitId = 1;

    // Set era based on player nation era
    const playerDef = NATION_ROSTERS[this.playerNation];
    engine.currentEraKey = playerDef.era || 'renaissance';

    // 3. Deploy Player Regiments (Team 0, Left flank facing East / angle 0)
    let playerY = 320;
    const playerX = 420;
    this.playerRoster.forEach(item => {
      for (let c = 0; c < item.count; c++) {
        const uDef = this._findUnitDefinition(item.key, playerDef.era);
        if (uDef) {
          const u = new Unit(engine.nextUnitId++, uDef, 0, playerX, playerY, 0);
          engine.units.push(u);
          playerY += 75;
        }
      }
    });

    // 4. Deploy Enemy Regiments (Team 1, Right flank facing West / angle PI)
    const enemyDef = NATION_ROSTERS[this.enemyNation];
    let enemyY = 320;
    const enemyX = 1180;
    this.enemyRoster.forEach(item => {
      for (let c = 0; c < item.count; c++) {
        const uDef = this._findUnitDefinition(item.key, enemyDef.era);
        if (uDef) {
          const u = new Unit(engine.nextUnitId++, uDef, 1, enemyX, enemyY, Math.PI);
          engine.units.push(u);
          enemyY += 75;
        }
      }
    });

    // 5. Center camera and switch view
    engine._centerCameraOnScenario();
    engine.campaign.switchMode('rts');

    engine.addLogMessage(`⚔️ ¡Batalla Personalizada iniciada: ${playerDef.name} vs ${enemyDef.name}!`);
    engine.addLogMessage(`🗺️ Terreno: ${this.mapType.toUpperCase()} • Clima: ${this.climate.toUpperCase()}`);
    engine.sound.playTrumpetCall();
  }

  _findUnitDefinition(key, eraKey) {
    const erasObj = typeof ERAS !== 'undefined' ? ERAS : (globalThis.ERAS || {});
    // Look first in expected era
    if (erasObj[eraKey] && erasObj[eraKey].units[key]) {
      return erasObj[eraKey].units[key];
    }
    // Search across all eras
    for (const k of Object.keys(erasObj)) {
      if (erasObj[k].units && erasObj[k].units[key]) {
        return erasObj[k].units[key];
      }
    }
    return null;
  }
}

window.NATION_ROSTERS = NATION_ROSTERS;
window.CustomBattleBuilder = CustomBattleBuilder;
