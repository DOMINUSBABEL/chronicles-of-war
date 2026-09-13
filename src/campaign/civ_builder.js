/**
 * Chronicles of War - Custom Civilization Builder (Empire Earth Style)
 * Allows creating a customized empire with point-buy traits, custom heraldry, colors, and doctrines
 */

class CivilizationBuilder {
  constructor(campaignManager) {
    this.campaign = campaignManager;
    this.totalPoints = 100;
    this.spentPoints = 0;

    this.customCiv = {
      id: 'custom',
      name: 'Imperio Soberano',
      adjective: 'Soberano',
      leader: 'Gran Mariscal',
      banner: '👑',
      colors: {
        primary: '#b45309',
        secondary: '#78350f',
        accent: '#f59e0b',
        bg: 'rgba(180, 83, 9, 0.45)',
        map: '#92400e'
      },
      capitalProvince: 'castilla',
      epoch: 'renaissance',
      talents: {
        infantry_power: 15,
        pikes_defense: 15,
        powder_ballistics: 15,
        cavalry_shock: 10,
        economy_trade: 15,
        agriculture: 15,
        metallurgy: 15
      }
    };

    this._recalcPoints();
  }

  _recalcPoints() {
    this.spentPoints = Object.values(this.customCiv.talents).reduce((a, b) => a + b, 0);
  }

  setTalent(talentKey, val) {
    const num = Math.max(0, Math.min(30, parseInt(val) || 0));
    const current = this.customCiv.talents[talentKey] || 0;
    const diff = num - current;

    if (this.spentPoints + diff <= this.totalPoints) {
      this.customCiv.talents[talentKey] = num;
      this._recalcPoints();
      return true;
    }
    return false;
  }

  applyCustomCiv() {
    // Generate traits description based on talents
    const traits = [];
    if (this.customCiv.talents.infantry_power >= 15) {
      traits.push({ name: 'Furia de Infantería', desc: `+${this.customCiv.talents.infantry_power * 2}% daño en combate cuerpo a cuerpo.` });
    }
    if (this.customCiv.talents.powder_ballistics >= 15) {
      traits.push({ name: 'Maestría en Pólvora', desc: `+${this.customCiv.talents.powder_ballistics * 1.5}% cadencia y rango de mosquetes.` });
    }
    if (this.customCiv.talents.economy_trade >= 15) {
      traits.push({ name: 'Tesoro Mercantil', desc: `+${this.customCiv.talents.economy_trade * 2}% de ingresos de Oro.` });
    }
    if (this.customCiv.talents.pikes_defense >= 15) {
      traits.push({ name: 'Muro Inexpugnable', desc: `+${this.customCiv.talents.pikes_defense * 2}% defensa frontal con picas.` });
    }

    this.customCiv.traits = traits;
    this.customCiv.startingResources = {
      gold: 1200 + this.customCiv.talents.economy_trade * 20,
      food: 900 + this.customCiv.talents.agriculture * 20,
      iron: 500 + this.customCiv.talents.metallurgy * 20,
      science: 120
    };

    // Register into FACTIONS
    FACTIONS['custom'] = this.customCiv;

    // Set player faction
    if (this.campaign) {
      this.campaign.playerFaction = 'custom';
      // Re-assign capital province ownership
      const cap = this.campaign.map.getProvinceById(this.customCiv.capitalProvince);
      if (cap) cap.owner = 'custom';
      this.campaign.refreshUI();
      if (this.campaign.game) {
        this.campaign.game.addLogMessage(`👑 ¡Civilización '${this.customCiv.name}' fundada y lista para la conquista!`);
      }
    }

    return this.customCiv;
  }
}

window.CivilizationBuilder = CivilizationBuilder;
