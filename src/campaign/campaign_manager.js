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
    this.globeView = null;
    this.is3DGlobe = false;

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

    // Manage 3D Globe visibility when switching modes
    if (this.globeView && this.globeView.container) {
      if (!isCampaign && this.is3DGlobe) {
        this.globeView.container.style.display = 'none';
        const canvas2D = document.getElementById('game-canvas');
        if (canvas2D) canvas2D.style.display = 'block';
      } else if (isCampaign && this.is3DGlobe) {
        this.globeView.container.style.display = 'block';
        const canvas2D = document.getElementById('game-canvas');
        if (canvas2D) canvas2D.style.display = 'none';
      }
    }

    if (isCampaign) {
      this.refreshUI();
    }
  }

  toggleGlobeView() {
    if (!this.globeView && typeof GlobeView3D !== 'undefined') {
      this.globeView = new GlobeView3D(this);
      this.globeView.init('globe-container');
    }
    if (!this.globeView) return;

    this.is3DGlobe = !this.is3DGlobe;
    this.globeView.toggle(this.is3DGlobe);

    const btn = document.getElementById('btn-view-toggle');
    if (btn) {
      btn.innerHTML = this.is3DGlobe ? '🗺️ Mapa 2D' : '🌐 Globo 3D';
      btn.classList.toggle('active', this.is3DGlobe);
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

    const fac = FACTIONS[province.owner] || FACTIONS.neutral || {
      name: 'Neutral', banner: '🏕️', colors: { primary: '#64748b' }
    };
    const isPlayer = province.owner === this.playerFaction;
    const isNeutral = province.owner === 'neutral' || province.isColonizable;
    const yields = province.calculateYield();

    // Cost calculations for administrative buttons
    const econCost = 120 + Math.round((province.economyValue || 25) * 1.8);
    const devCostGold = 140 + (province.developmentLevel || 1) * 50;
    const devCostSci = 25 + (province.developmentLevel || 1) * 15;
    const infraCostGold = 130 + (province.infrastructureLevel || 1) * 45;
    const infraCostIron = 35 + (province.infrastructureLevel || 1) * 25;
    const defCostGold = 160 + (province.defenseLevel || 1) * 60;
    const defCostIron = 60 + (province.defenseLevel || 1) * 30;

    panel.innerHTML = `
      <div class="province-card glass-panel" style="border-top: 3px solid ${fac.colors.primary || '#d97706'}">
        <div class="prov-header">
          <span class="prov-flag" style="font-size: 1.6rem;">${fac.banner}</span>
          <div>
            <h3 style="font-family:'Outfit',sans-serif; margin:0; font-size:1.15rem; color:#f8fafc;">${province.capitalName}</h3>
            <span class="prov-region" style="font-size:0.8rem; color:#94a3b8;">${province.name} • <strong>${fac.name}</strong> [${province.theater}]</span>
          </div>
        </div>

        <!-- Age of History 3 Provincial Metrics -->
        <div class="aoh3-metrics-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:6px; margin: 10px 0; background:rgba(0,0,0,0.35); padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.06);">
          <div style="font-size:11px;">👥 Población: <strong style="color:#f8fafc">${(province.population || 50000).toLocaleString()}</strong></div>
          <div style="font-size:11px;">⭐ Desarrollo: <strong style="color:#fbbf24">Nv. ${province.developmentLevel || 1} / 10</strong></div>
          <div style="font-size:11px;">🪙 Valor Fiscal: <strong style="color:#38bdf8">${province.economyValue || 25}</strong></div>
          <div style="font-size:11px;">🛣️ Infraestructura: <strong style="color:#a78bfa">Nv. ${province.infrastructureLevel || 1} / 5</strong></div>
          <div style="font-size:11px;">🛡️ Baluartes: <strong style="color:#34d399">Nv. ${province.defenseLevel || 1} / 4</strong></div>
          <div style="font-size:11px;">📦 Recurso: <strong style="color:#f59e0b">${(province.tradeGood || 'grain').toUpperCase()}</strong></div>
        </div>

        <!-- Yield Grid -->
        <div class="yield-grid">
          <div class="yield-box">🪙 Oro: <strong>+${yields.gold}</strong></div>
          <div class="yield-box">🌾 Alimento: <strong>+${yields.food}</strong></div>
          <div class="yield-box">⛏️ Hierro: <strong>+${yields.iron}</strong></div>
          <div class="yield-box">📜 Ciencia: <strong>+${yields.science}</strong></div>
        </div>

        <!-- Age of History 3 Administrative Investments -->
        ${isPlayer ? `
          <div class="admin-investment-section" style="margin-top: 10px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px;">
            <h4 style="font-size:11px; color:#fbbf24; text-transform:uppercase; margin-bottom:6px; font-weight:700;">🏛️ Administración Provincial (AoH3):</h4>
            <div style="display:flex; flex-direction:column; gap:5px;">
              <button class="btn-action" style="text-align:left; padding:5px 8px; font-size:11px;" onclick="window.game.campaign.adminInvestEconomy('${province.id}')">
                🪙 Invertir en Economía (+15 Base) <small style="color:#94a3b8">(${econCost} Oro)</small>
              </button>
              <button class="btn-action" style="text-align:left; padding:5px 8px; font-size:11px;" onclick="window.game.campaign.adminInvestDevelopment('${province.id}')">
                🌱 Invertir en Desarrollo (+1 Nivel) <small style="color:#94a3b8">(${devCostGold} Oro, ${devCostSci} Ci)</small>
              </button>
              <button class="btn-action" style="text-align:left; padding:5px 8px; font-size:11px;" onclick="window.game.campaign.adminInvestInfrastructure('${province.id}')">
                ⛏️ Mejorar Caminos y Red (+1 Nivel) <small style="color:#94a3b8">(${infraCostGold} Oro, ${infraCostIron} H)</small>
              </button>
              <button class="btn-action" style="text-align:left; padding:5px 8px; font-size:11px;" onclick="window.game.campaign.adminInvestDefense('${province.id}')">
                🛡️ Fortificar Baluarte (+1 Nivel) <small style="color:#94a3b8">(${defCostGold} Oro, ${defCostIron} H)</small>
              </button>
            </div>
          </div>

          <div class="buildings-section" style="margin-top: 8px;">
            <h4 style="font-size:11px; color:#cbd5e1; margin-bottom:4px;">Edificios Erigidos:</h4>
            <div class="building-badges">
              ${province.buildings.map(b => `<span class="badge-bld">🏛️ ${b.toUpperCase()}</span>`).join('')}
            </div>
            <div class="prov-actions" style="margin-top:6px;">
              <button class="btn-action" onclick="window.game.campaign.buildInfrastructure('${province.id}', 'farm')">🌾 Granja (150 O)</button>
              <button class="btn-action" onclick="window.game.campaign.buildInfrastructure('${province.id}', 'mine')">⛏️ Mina (200 O)</button>
              <button class="btn-action" onclick="window.game.campaign.buildInfrastructure('${province.id}', 'university')">📜 Universidad (300 O)</button>
            </div>
          </div>

          <div class="recruit-sec" style="margin-top: 8px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 6px;">
            <h4 style="font-size:11px; color:#cbd5e1; margin-bottom:4px;">Levas Provinciales:</h4>
            <button class="btn-action btn-recruit-prov" onclick="window.game.campaign.recruitIntoLocalArmy('${province.id}', 'tercio')">🚩 Tercio (280 O, 50 H)</button>
            <button class="btn-action btn-recruit-prov" onclick="window.game.campaign.recruitIntoLocalArmy('${province.id}', 'arquebusiers')">💥 Arcabuceros (180 O)</button>
          </div>
        ` : (isNeutral ? `
          <div class="colonial-annex-section" style="margin-top:10px; background:rgba(30,58,138,0.25); border:1px solid rgba(59,130,246,0.3); padding:10px; border-radius:8px;">
            <h4 style="color:#38bdf8; font-size:12px; margin-bottom:6px;">🏕️ Territorio de Frontera Sin Soberanía Formal</h4>
            <p style="font-size:11px; color:#cbd5e1; margin-bottom:8px; line-height:1.4;">
              Esta provincia no pertenece a ninguna corona. Puedes colonizarla o invertir en su desarrollo inicial para anexarla a tus dominios.
            </p>
            <div style="display:flex; flex-direction:column; gap:5px;">
              <button class="btn-action" style="background:#0284c7; color:#fff;" onclick="window.game.campaign.adminColonize('${province.id}')">
                ⛵ Enviar Expedición Colonial (180 Oro, 90 Alimento)
              </button>
              <button class="btn-action" onclick="window.game.campaign.adminInvestDevelopment('${province.id}')">
                🌱 Invertir en Desarrollo & Anexar (${devCostGold} Oro, ${devCostSci} Ciencia)
              </button>
            </div>
          </div>
        ` : `
          <div class="enemy-prov-notice" style="margin-top:10px; padding:10px; background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.3); border-radius:8px;">
            <strong style="color:#ef4444">⚔️ Provincia Soberana Extranjera</strong>
            <p style="font-size:11px; color:#cbd5e1; margin-top:4px;">Territorio bajo control de ${fac.name}. Mueve un ejército aquí para asediar su guarnición o conquistar la plaza fuerte.</p>
          </div>
        `)}
      </div>
    `;

    panel.style.display = 'block';
  }

  // Administrative Actions
  adminInvestEconomy(provinceId) {
    const province = this.map.getProvinceById(provinceId);
    if (!province) return;
    const res = this.economy.investEconomy(this.playerFaction, province);
    if (res.success) {
      if (this.game.sound) this.game.sound.playMarchDrums();
      this.game.addLogMessage(res.message);
      this._showProvincePanel(province);
      this.refreshUI();
    } else {
      this.game.addLogMessage(`⚠️ ${res.reason}`);
    }
  }

  adminInvestDevelopment(provinceId) {
    const province = this.map.getProvinceById(provinceId);
    if (!province) return;
    const res = this.economy.investDevelopment(this.playerFaction, province);
    if (res.success) {
      if (this.game.sound) this.game.sound.playTrumpetCall();
      this.game.addLogMessage(res.message);
      this._showProvincePanel(province);
      this.refreshUI();
    } else {
      this.game.addLogMessage(`⚠️ ${res.reason}`);
    }
  }

  adminInvestInfrastructure(provinceId) {
    const province = this.map.getProvinceById(provinceId);
    if (!province) return;
    const res = this.economy.investInfrastructure(this.playerFaction, province);
    if (res.success) {
      if (this.game.sound) this.game.sound.playMarchDrums();
      this.game.addLogMessage(res.message);
      this._showProvincePanel(province);
      this.refreshUI();
    } else {
      this.game.addLogMessage(`⚠️ ${res.reason}`);
    }
  }

  adminInvestDefense(provinceId) {
    const province = this.map.getProvinceById(provinceId);
    if (!province) return;
    const res = this.economy.investDefense(this.playerFaction, province);
    if (res.success) {
      if (this.game.sound) this.game.sound.playMarchDrums();
      this.game.addLogMessage(res.message);
      this._showProvincePanel(province);
      this.refreshUI();
    } else {
      this.game.addLogMessage(`⚠️ ${res.reason}`);
    }
  }

  adminColonize(provinceId) {
    const province = this.map.getProvinceById(provinceId);
    if (!province) return;
    const res = this.economy.colonizeProvince(this.playerFaction, province);
    if (res.success) {
      if (this.game.sound) this.game.sound.playTrumpetCall();
      this.game.addLogMessage(res.message);
      this._showProvincePanel(province);
      this.refreshUI();
    } else {
      this.game.addLogMessage(`⚠️ ${res.reason}`);
    }
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

  setMapMode(mode) {
    if (this.map) {
      this.map.setMapMode(mode);
    }
  }

  flyToTheater(theaterKey) {
    if (this.map) {
      this.map.flyToTheater(theaterKey);
    }
  }

  render(ctx) {
    if (this.activeMode !== 'campaign') return;

    // Update armies marching along paths
    const dt = 0.016;
    this.armies.forEach(a => a.update(dt));

    // Render strategic map and armies
    this.map.render(ctx, this.armies, this.selectedArmy);
  }
}

window.CampaignManager = CampaignManager;
