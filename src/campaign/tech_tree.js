/**
 * Chronicles of War - Tech Tree & Epoch Advancement
 * Faithfully inspired by Empire Earth's epoch progression across historical ages
 */

const EPOCHS = [
  {
    id: 'antiquity',
    name: 'Época I: Antigüedad Clásica',
    period: '500 a.C. - 400 d.C.',
    icon: '🏛️',
    scienceCost: 0,
    goldCost: 0,
    desc: 'La era de la falange y las legiones. Construcción de empalizadas y caminos de piedra.',
    unlockedUnits: ['legion', 'phalanx', 'cavalry', 'ballista'],
    unlockedBuildings: ['palisade', 'granary', 'barracks_basic']
  },
  {
    id: 'medieval',
    name: 'Época II: Edad Media Feudal',
    period: '500 - 1450',
    icon: '🏰',
    scienceCost: 250,
    goldCost: 600,
    desc: 'Caballeros con armadura de placas, murallas de sillería y castillos con fosos.',
    unlockedUnits: ['knights', 'longbow', 'men_at_arms', 'catapult'],
    unlockedBuildings: ['stone_wall', 'blacksmith', 'stables_feudal']
  },
  {
    id: 'renaissance',
    name: 'Época III: Renacimiento & Pólvora',
    period: '1492 - 1648',
    icon: '⚜️',
    scienceCost: 500,
    goldCost: 1200,
    desc: 'La revolución de la pólvora negra. Tercios españoles, arcabuces de mecha y baluartes en estrella.',
    unlockedUnits: ['tercio', 'arquebusiers', 'landsknecht', 'culverin'],
    unlockedBuildings: ['star_bastion', 'foundry_bronze', 'arsenal']
  },
  {
    id: 'modern',
    name: 'Época IV: Edad de la Ilustración',
    period: '1650 - 1790',
    icon: '🦅',
    scienceCost: 900,
    goldCost: 2000,
    desc: 'Fusiles de chispa con bayoneta de cubo, fortalezas Vauban y baterías de artillería de campaña.',
    unlockedUnits: ['line_infantry', 'grenadiers', 'dragoons', 'twelve_pounder'],
    unlockedBuildings: ['vauban_fortress', 'military_academy', 'manufactory']
  },
  {
    id: 'napoleonic',
    name: 'Época V: Siglo XIX & Guerras Napoleónicas',
    period: '1799 - 1880',
    icon: '👑',
    scienceCost: 1500,
    goldCost: 3200,
    desc: 'La era de la Gran Batería, cuadros de infantería, coraceros pesados y fusiles estriados.',
    unlockedUnits: ['imperial_guard', 'rifles', 'cuirassiers', 'grand_battery'],
    unlockedBuildings: ['grand_arsenal', 'imperial_palace', 'industrial_foundry']
  }
];

class TechTreeManager {
  constructor() {
    this.factionEpochs = {};
    Object.keys(FACTIONS).forEach(fId => {
      this.factionEpochs[fId] = FACTIONS[fId].epoch || 'renaissance';
    });
  }

  getCurrentEpoch(factionId) {
    const epochId = this.factionEpochs[factionId] || 'renaissance';
    return EPOCHS.find(e => e.id === epochId) || EPOCHS[2];
  }

  getNextEpoch(factionId) {
    const cur = this.getCurrentEpoch(factionId);
    const curIdx = EPOCHS.findIndex(e => e.id === cur.id);
    if (curIdx < EPOCHS.length - 1) {
      return EPOCHS[curIdx + 1];
    }
    return null; // Max epoch reached
  }

  canAdvanceEpoch(factionId, economy) {
    const next = this.getNextEpoch(factionId);
    if (!next) return { can: false, reason: 'Ya has alcanzado la época máxima.' };

    const res = economy.getResources(factionId);
    if (res.science < next.scienceCost) {
      return { can: false, reason: `Ciencia insuficiente (${res.science}/${next.scienceCost}). Construye Universidades.` };
    }
    if (res.gold < next.goldCost) {
      return { can: false, reason: `Oro insuficiente (${res.gold}/${next.goldCost}).` };
    }

    return { can: true, nextEpoch: next };
  }

  advanceEpoch(factionId, economy, soundEngine) {
    const check = this.canAdvanceEpoch(factionId, economy);
    if (!check.can) return false;

    const next = check.nextEpoch;
    economy.spendResources(factionId, {
      gold: next.goldCost,
      science: next.scienceCost
    });

    this.factionEpochs[factionId] = next.id;

    if (soundEngine) {
      soundEngine.playTrumpetCall();
    }

    return next;
  }
}

window.EPOCHS = EPOCHS;
window.TechTreeManager = TechTreeManager;
