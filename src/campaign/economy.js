/**
 * Chronicles of War - 4X Economy & Resource Management
 * Modeled after Empire Earth resource pillars (Gold, Food, Iron, Science) & Total War taxation
 */

class EconomyManager {
  constructor() {
    // Faction resources indexed by faction ID
    this.treasuries = {};
    this.taxRates = {}; // 'low', 'medium', 'high'

    // Initialize all factions
    Object.keys(FACTIONS).forEach(fId => {
      const f = FACTIONS[fId];
      this.treasuries[fId] = {
        gold: f.startingResources.gold,
        food: f.startingResources.food,
        iron: f.startingResources.iron,
        science: f.startingResources.science
      };
      this.taxRates[fId] = 'medium';
    });
  }

  getResources(factionId) {
    return this.treasuries[factionId] || { gold: 0, food: 0, iron: 0, science: 0 };
  }

  setTaxRate(factionId, rate) {
    if (['low', 'medium', 'high'].includes(rate)) {
      this.taxRates[factionId] = rate;
    }
  }

  getTaxMultiplier(factionId) {
    const rate = this.taxRates[factionId] || 'medium';
    if (rate === 'low') return { income: 0.75, order: 15, desc: 'Impuestos Bajos (+15 Orden Público)' };
    if (rate === 'high') return { income: 1.45, order: -20, desc: 'Impuestos Altos (-20 Orden Público)' };
    return { income: 1.0, order: 0, desc: 'Impuestos Medios (Equilibrado)' };
  }

  canAfford(factionId, cost) {
    const res = this.getResources(factionId);
    return (res.gold >= (cost.gold || 0) &&
            res.food >= (cost.food || 0) &&
            res.iron >= (cost.iron || 0) &&
            res.science >= (cost.science || 0));
  }

  spendResources(factionId, cost) {
    if (!this.canAfford(factionId, cost)) return false;
    const res = this.getResources(factionId);
    res.gold -= (cost.gold || 0);
    res.food -= (cost.food || 0);
    res.iron -= (cost.iron || 0);
    res.science -= (cost.science || 0);
    return true;
  }

  addResources(factionId, amounts) {
    const res = this.getResources(factionId);
    res.gold += (amounts.gold || 0);
    res.food += (amounts.food || 0);
    res.iron += (amounts.iron || 0);
    res.science += (amounts.science || 0);
  }

  // Calculate and apply turn income for all provinces and armies
  processTurnIncome(provinces, armies) {
    const turnReports = {};

    Object.keys(FACTIONS).forEach(fId => {
      let incomeGold = 0;
      let incomeFood = 0;
      let incomeIron = 0;
      let incomeScience = 0;
      let armyUpkeepGold = 0;
      let armyUpkeepFood = 0;

      const taxMod = this.getTaxMultiplier(fId);

      // 1. Province Income
      provinces.forEach(p => {
        if (p.owner === fId) {
          const pYield = p.calculateYield();
          incomeGold += pYield.gold * taxMod.income;
          incomeFood += pYield.food;
          incomeIron += pYield.iron;
          incomeScience += pYield.science;

          // Faction traits bonuses
          if (fId === 'spain' && p.hasPort) incomeGold += 60;
          if (fId === 'france' && p.terrain === 'plains') incomeFood += 80;
          if (fId === 'germany' && p.terrain === 'mountains') incomeIron += 70;
          if (fId === 'britain' && p.hasPort) incomeGold += 50;
        }
      });

      // 2. Army Upkeep Costs (War of Dots maintenance)
      armies.forEach(a => {
        if (a.faction === fId && a.isAlive) {
          a.regiments.forEach(reg => {
            armyUpkeepGold += (reg.cost || 200) * 0.08;
            armyUpkeepFood += 15;
          });
        }
      });

      // Net changes
      const netGold = Math.round(incomeGold - armyUpkeepGold);
      const netFood = Math.round(incomeFood - armyUpkeepFood);
      const netIron = Math.round(incomeIron);
      const netScience = Math.round(incomeScience);

      this.addResources(fId, {
        gold: netGold,
        food: netFood,
        iron: netIron,
        science: netScience
      });

      // Avoid negative food causing starvation (attrition)
      const curRes = this.getResources(fId);
      if (curRes.food < 0) {
        curRes.food = 0;
        // Starvation damage to armies
        armies.forEach(a => {
          if (a.faction === fId) a.applyAttrition(0.12);
        });
      }

      turnReports[fId] = {
        gold: netGold,
        food: netFood,
        iron: netIron,
        science: netScience,
        taxDesc: taxMod.desc
      };
    });

    return turnReports;
  }
}

window.EconomyManager = EconomyManager;
