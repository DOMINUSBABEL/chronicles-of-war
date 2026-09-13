/**
 * Chronicles of War - Master 4X Campaign Manager
 * Coordinates provinces, armies, turn progression, AI empires, and mode switching
 */

class CampaignManager {
  constructor(gameEngine) {
    this.game = gameEngine;
    this.activeMode = 'campaign'; // 'campaign' or 'rts'

    this.playerFaction = 'spain';
    this.turn = 1;
    this.year = 1525;
    this.seasons = ['Primavera', 'Verano', 'Otoño', 'Invierno'];

    // Subsystems
    this.map = new StrategicCampaignMap(gameEngine.canvas);
    this.economy = new EconomyManager();
    this.diplomacy = new DiplomacyManager();
    this.techTree = new TechTreeManager();
    this.battleBridge = new BattleBridge(this);
    this.civBuilder = (typeof CivilizationBuilder !== 'undefined') ? new CivilizationBuilder(this) : null;

    this.armies = [];
    this.selectedArmy = null;
    this.armyManager = this; // self reference for unit def lookups

    this._initStartingArmies();
  }

  _initStartingArmies() {
    this.armies = [
      // Spain: Imperial Army at Milan/Pavia
      new StrategicArmy(1, 'spain', 'Fernando de Ávalos (Marqués de Pescara)', 'milan', [
        { unitKey: 'tercio', soldiers: 56, maxSoldiers: 56 },
        { unitKey: 'tercio', soldiers: 56, maxSoldiers: 56 },
        { unitKey: 'arquebusiers', soldiers: 36, maxSoldiers: 36 },
        { unitKey: 'arquebusiers', soldiers: 36, maxSoldiers: 36 },
        { unitKey: 'culverin', soldiers: 8, maxSoldiers: 8 }
      ]),

      // Spain: Second Army in Madrid
      new StrategicArmy(2, 'spain', 'Duque de Alba', 'castilla', [
        { unitKey: 'tercio', soldiers: 56, maxSoldiers: 56 },
        { unitKey: 'landsknecht', soldiers: 40, maxSoldiers: 40 },
        { unitKey: 'arquebusiers', soldiers: 36, maxSoldiers: 36 }
      ]),

      // France: Royal Army in Burgundy / Paris Border
      new StrategicArmy(3, 'france', 'Francisco I de Francia', 'burgundy', [
        { unitKey: 'landsknecht', soldiers: 40, maxSoldiers: 40 },
        { unitKey: 'landsknecht', soldiers: 40, maxSoldiers: 40 },
        { unitKey: 'tercio', soldiers: 56, maxSoldiers: 56 },
        { unitKey: 'arquebusiers', soldiers: 36, maxSoldiers: 36 },
        { unitKey: 'culverin', soldiers: 8, maxSoldiers: 8 }
      ]),

      // Britain: Royal Army in London
      new StrategicArmy(4, 'britain', 'Duque de Norfolk', 'london', [
        { unitKey: 'longbow', soldiers: 40, maxSoldiers: 40 },
        { unitKey: 'men_at_arms', soldiers: 48, maxSoldiers: 48 },
        { unitKey: 'knights', soldiers: 24, maxSoldiers: 24 }
      ]),

      // Germany: Imperial Lansquenet Host in Bavaria
      new StrategicArmy(5, 'germany', 'Georg von Frundsberg', 'bavaria', [
        { unitKey: 'landsknecht', soldiers: 40, maxSoldiers: 40 },
        { unitKey: 'landsknecht', soldiers: 40, maxSoldiers: 40 },
        { unitKey: 'culverin', soldiers: 8, maxSoldiers: 8 }
      ]),

      // Rome: Papal Guard in Rome
      new StrategicArmy(6, 'rome', 'Prospero Colonna', 'rome', [
        { unitKey: 'legion', soldiers: 48, maxSoldiers: 48 },
        { unitKey: 'phalanx', soldiers: 48, maxSoldiers: 48 }
      ])
    ];

    // Initialize map positions
    this.armies.forEach(a => {
      const p = this.map.getProvinceById(a.provinceId);
      a.initCoords(p);
    });
  }

  _findUnitDef(unitKey) {
    const erasObj = typeof ERAS !== 'undefined' ? ERAS : (globalThis.ERAS || (globalThis.window && globalThis.window.ERAS) || {});
    for (const eraKey of Object.keys(erasObj)) {
      if (erasObj[eraKey].units[unitKey]) {
        return erasObj[eraKey].units[unitKey];
      }
    }
    return null;
  }

  switchMode(mode) {
    this.activeMode = mode;
    const isCampaign = mode === 'campaign';

    // Toggle HUD elements
    const campHUD = document.getElementById('campaign-hud');
    const rtsHUD = document.getElementById('rts-hud');
    const modeBadge = document.getElementById('mode-indicator');

    if (campHUD) campHUD.style.display = isCampaign ? 'flex' : 'none';
    if (rtsHUD) rtsHUD.style.display = isCampaign ? 'none' : 'flex';
    if (modeBadge) modeBadge.innerText = isCampaign ? '🌍 Gran Campaña 4X' : '⚔️ Combate Táctico RTS';

    if (isCampaign) {
      this.refreshUI();
    }
  }

  endTurn() {
    this.turn++;
    const seasonIdx = (this.turn - 1) % 4;
    if (seasonIdx === 0 && this.turn > 1) this.year++;
    const season = this.seasons[seasonIdx];

    // 1. Process Economy Income & Upkeep
    const reports = this.economy.processTurnIncome(this.map.provinces, this.armies);

    // 2. Replenish and Reset Armies
    this.armies.forEach(a => {
      a.resetTurnMP();
      const p = this.map.getProvinceById(a.provinceId);
      a.replenish(p);
    });

    // 3. AI Faction Decisions
    this._executeAITurn();

    // 4. Update UI & Log
    const playerReport = reports[this.playerFaction];
    this.game.sound.playMarchDrums();
    this.game.addLogMessage(`📅 Turno ${this.turn}: ${season} de ${this.year}. Ingresos netos: +${playerReport.gold} Oro.`);
    this.refreshUI();
  }

  _executeAITurn() {
    // Basic AI for rival empires (France marches to Milan/Pavia if at war!)
    this.armies.forEach(a => {
      if (a.faction !== this.playerFaction && a.isAlive) {
        if (a.faction === 'france' && this.diplomacy.isAtWar('france', 'spain')) {
          // March toward Milan
          const curP = this.map.getProvinceById(a.provinceId);
          if (curP && curP.id !== 'milan') {
            const targetP = this.map.getProvinceById('milan');
            if (curP.neighbors.includes('milan')) {
              this.orderArmyMarch(a, targetP);
            }
          }
        }
      }
    });
  }

  selectProvince(province) {
    this.map.selectedProvince = province;
    this.selectedArmy = null;
    this._showProvincePanel(province);
  }

  selectArmy(army) {
    this.selectedArmy = army;
    this.game.sound.playMarchDrums();
    this.game.addLogMessage(`🚩 Seleccionado: ${army.commanderName} (${army.getTotalSoldiers()} hombres).`);
  }

  orderArmyMarch(army, destProvince) {
    if (!army || !destProvince) return;
    const curProvince = this.map.getProvinceById(army.provinceId);

    if (!curProvince.neighbors.includes(destProvince.id)) {
      this.game.addLogMessage('⚠️ La provincia de destino no está conectada por caminos directos.');
      return;
    }

    if (army.currentMP < 50) {
      this.game.addLogMessage('⚠️ Puntos de Movimiento (MP) insuficientes este turno.');
      return;
    }

    // Check if enemy army or hostile province
    army.moveTo(destProvince, (arrivedArmy) => {
      this._checkProvinceCollision(arrivedArmy, destProvince);
    });

    this.game.sound.playTrumpetCall();
    this.game.addLogMessage(`🚶 ${army.commanderName} marcha hacia ${destProvince.name}.`);
  }

  _checkProvinceCollision(arrivedArmy, province) {
    // Check if there is an enemy army stationed here
    const enemyArmy = this.armies.find(a => a.provinceId === province.id && a.faction !== arrivedArmy.faction && a.isAlive && a !== arrivedArmy);

    if (enemyArmy) {
      // Hostile Clash! Trigger Pre-Battle Modal
      this.battleBridge.prepareEncounter(arrivedArmy, enemyArmy, province);
    } else if (province.owner !== arrivedArmy.faction && this.diplomacy.isAtWar(province.owner, arrivedArmy.faction)) {
      // Besieging enemy province garrison!
      const garrisonArmy = new StrategicArmy(999, province.owner, `Guarnición de ${province.capitalName}`, province.id, [
        { unitKey: province.garrison[0] || 'tercio', soldiers: 48, maxSoldiers: 48 },
        { unitKey: province.garrison[1] || 'arquebusiers', soldiers: 36, maxSoldiers: 36 }
      ]);
      this.battleBridge.prepareEncounter(arrivedArmy, garrisonArmy, province);
    }
  }

  _showProvincePanel(province) {
    const panel = document.getElementById('province-inspector-panel');
    if (!panel) return;

    const fac = FACTIONS[province.owner];
    const isPlayer = province.owner === this.playerFaction;
    const yields = province.calculateYield();

    panel.innerHTML = `
      <div class="province-card glass-panel">
        <div class="prov-header" style="border-bottom: 2px solid ${fac.colors.primary}">
          <span class="prov-flag">${fac.banner}</span>
          <div>
            <h3>${province.capitalName}</h3>
            <span class="prov-region">${province.name} (${fac.name})</span>
          </div>
        </div>

        <div class="yield-grid">
          <div class="yield-box">🪙 Oro: <strong>+${yields.gold}</strong></div>
          <div class="yield-box">🌾 Alimento: <strong>+${yields.food}</strong></div>
          <div class="yield-box">⛏️ Hierro: <strong>+${yields.iron}</strong></div>
          <div class="yield-box">📜 Ciencia: <strong>+${yields.science}</strong></div>
        </div>

        <div class="buildings-section">
          <h4>Infraestructura:</h4>
          <div class="building-badges">
            ${province.buildings.map(b => `<span class="badge-bld">🏛️ ${b.toUpperCase()}</span>`).join('')}
          </div>
        </div>

        ${isPlayer ? `
          <div class="prov-actions">
            <button class="btn-action" onclick="window.game.campaign.buildInfrastructure('${province.id}', 'farm')">🌾 Granja (150 O)</button>
            <button class="btn-action" onclick="window.game.campaign.buildInfrastructure('${province.id}', 'mine')">⛏️ Mina (200 O)</button>
            <button class="btn-action" onclick="window.game.campaign.buildInfrastructure('${province.id}', 'star_bastion')">🏰 Baluarte (350 O)</button>
            <button class="btn-action" onclick="window.game.campaign.buildInfrastructure('${province.id}', 'university')">📜 Universidad (300 O)</button>
          </div>
          <div class="recruit-sec">
            <h4>Levas en esta Provincia:</h4>
            <button class="btn-action btn-recruit-prov" onclick="window.game.campaign.recruitIntoLocalArmy('${province.id}', 'tercio')">🚩 Tercio (280 O, 50 H)</button>
            <button class="btn-action btn-recruit-prov" onclick="window.game.campaign.recruitIntoLocalArmy('${province.id}', 'arquebusiers')">💥 Arcabuceros (180 O)</button>
          </div>
        ` : `
          <div class="enemy-prov-notice">Provincia bajo dominio extranjero.</div>
        `}
      </div>
    `;

    panel.style.display = 'block';
  }

  buildInfrastructure(provinceId, buildingType) {
    const province = this.map.getProvinceById(provinceId);
    if (!province || province.owner !== this.playerFaction) return;

    if (province.hasBuilding(buildingType)) {
      this.game.addLogMessage(`⚠️ ${buildingType.toUpperCase()} ya está construido en esta provincia.`);
      return;
    }

    const costs = {
      farm: { gold: 150, food: 20 },
      mine: { gold: 200, iron: 10 },
      star_bastion: { gold: 350, iron: 80 },
      university: { gold: 300, science: 0 }
    };

    const cost = costs[buildingType] || { gold: 150 };
    if (this.economy.spendResources(this.playerFaction, cost)) {
      province.addBuilding(buildingType);
      this.game.sound.playMarchDrums();
      this.game.addLogMessage(`🔨 ¡Construido ${buildingType.toUpperCase()} en ${province.capitalName}!`);
      this._showProvincePanel(province);
      this.refreshUI();
    } else {
      this.game.addLogMessage('⚠️ Recursos insuficientes para erigir este edificio.');
    }
  }

  recruitIntoLocalArmy(provinceId, unitKey) {
    const province = this.map.getProvinceById(provinceId);
    let army = this.armies.find(a => a.provinceId === provinceId && a.faction === this.playerFaction && a.isAlive);

    if (!army) {
      // Create new army
      army = new StrategicArmy(this.armies.length + 1, this.playerFaction, 'Ejército de Leva', provinceId, []);
      army.initCoords(province);
      this.armies.push(army);
    }

    const uDef = this._findUnitDef(unitKey);
    const cost = { gold: uDef ? uDef.cost : 200, iron: 30 };

    if (this.economy.spendResources(this.playerFaction, cost)) {
      army.addRegiment(unitKey);
      this.game.sound.playTrumpetCall();
      this.game.addLogMessage(`⚔️ ¡Reclutado regimiento de ${unitKey.toUpperCase()} en ${province.capitalName}!`);
      this._showProvincePanel(province);
      this.refreshUI();
    } else {
      this.game.addLogMessage('⚠️ Recursos insuficientes para reclutar este regimiento.');
    }
  }

  refreshUI() {
    const res = this.economy.getResources(this.playerFaction);
    const curEpoch = this.techTree.getCurrentEpoch(this.playerFaction);
    const fac = FACTIONS[this.playerFaction];

    // Resource bar updates
    const gEl = document.getElementById('camp-gold');
    const fEl = document.getElementById('camp-food');
    const iEl = document.getElementById('camp-iron');
    const sEl = document.getElementById('camp-science');
    const turnEl = document.getElementById('camp-turn');
    const epochEl = document.getElementById('camp-epoch');

    if (gEl) gEl.innerText = Math.round(res.gold);
    if (fEl) fEl.innerText = Math.round(res.food);
    if (iEl) iEl.innerText = Math.round(res.iron);
    if (sEl) sEl.innerText = Math.round(res.science);

    if (turnEl) {
      const season = this.seasons[(this.turn - 1) % 4];
      turnEl.innerText = `Turno ${this.turn} • ${season} ${this.year}`;
    }

    if (epochEl) {
      epochEl.innerHTML = `${curEpoch.icon} ${curEpoch.name}`;
    }
  }

  render(ctx) {
    if (this.activeMode !== 'campaign') return;

    // Update armies marching along paths
    const dt = 0.016;
    this.armies.forEach(a => a.update(dt));

    // Render strategic map and armies
    this.map.render(ctx, this.armies);
  }
}

window.CampaignManager = CampaignManager;
