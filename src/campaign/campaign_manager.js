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

    this.scenarioKey = 'europe_200';
    this.armies = [];
    this.selectedArmy = null;
    this.armyManager = this; // self reference for unit def lookups
    this._activeProvinceTab = 'resumen';
    this._selectedProvince = null;

    this._initStartingArmies();
  }

  startCampaign(scenarioKey = 'europe_200', factionKey = 'spain', customCivData = null) {
    this.scenarioKey = scenarioKey;
    this.playerFaction = factionKey;
    this.turn = 1;

    const scenarioDef = (typeof CAMPAIGN_SCENARIOS !== 'undefined') ? CAMPAIGN_SCENARIOS[scenarioKey] : null;
    this.year = (scenarioDef && scenarioDef.startingYear) ? scenarioDef.startingYear : 1525;

    // Load Scenario Provinces & Center Camera
    this.map.loadScenario(scenarioKey, factionKey, customCivData);

    // Initialize Tech Tree Era for all factions according to scenario
    const startingEpoch = (scenarioDef && scenarioDef.startingEpoch) ? scenarioDef.startingEpoch : 'renaissance';
    if (this.techTree && this.techTree.factionEpochs) {
      const activeFactions = Object.keys((typeof FACTIONS !== 'undefined') ? FACTIONS : {});
      activeFactions.forEach(f => {
        this.techTree.factionEpochs[f] = startingEpoch;
      });
      if (factionKey === 'custom') {
        this.techTree.factionEpochs['custom'] = startingEpoch;
      }
    }

    // Initialize Armies based on scenario
    if (typeof getScenarioStartingArmies === 'function') {
      this.armies = getScenarioStartingArmies(scenarioKey, factionKey, customCivData);
    } else {
      this._initStartingArmies();
    }

    // Position armies on map
    this.armies.forEach(a => {
      const p = this.map.getProvinceById(a.provinceId);
      if (p) a.initCoords(p);
    });

    // Assign victory goals
    const dossiers = (typeof FACTION_HISTORICAL_DOSSIERS !== 'undefined') ? FACTION_HISTORICAL_DOSSIERS : {};
    this.victoryObjectives = dossiers[factionKey] ? dossiers[factionKey].victoryGoals : {
      military: 'Conquistar 35 provincias y 3 capitales enemigas.',
      economic: 'Acumular 25,000 de Oro en el Tesoro Imperial.',
      scientific: 'Investigar las tecnologías de la época más avanzada.'
    };

    // Update resources for player faction
    const facDef = (factionKey === 'custom' && customCivData) ? customCivData : (FACTIONS[factionKey] || FACTIONS['spain']);
    if (facDef && facDef.startingResources && this.economy && this.economy.treasuries) {
      this.economy.treasuries[factionKey] = { ...facDef.startingResources };
    }

    // Update HUD & UI
    this.refreshUI();

    if (this.game) {
      const sName = scenarioDef ? scenarioDef.name : 'Campaña';
      const fName = facDef ? facDef.name : factionKey;
      this.game.addLogMessage(`👑 ¡Campaña '${sName}' iniciada al mando de '${fName}' (${this.year})!`);
    }
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
    const theatersBar = document.getElementById('campaign-theaters-bar');
    const provPanel = document.getElementById('province-inspector-panel');
    const unitPanel = document.getElementById('selected-unit-panel');
    const recruitBar = document.getElementById('rts-recruit-bar');
    const tabCamp = document.getElementById('tab-campaign');
    const tabRts = document.getElementById('tab-rts');

    if (campHUD) campHUD.style.display = isCampaign ? 'flex' : 'none';
    if (rtsHUD) rtsHUD.style.display = isCampaign ? 'none' : 'flex';
    if (theatersBar) theatersBar.style.display = isCampaign ? 'flex' : 'none';
    const turnSeal = document.getElementById('imperial-turn-seal');
    if (turnSeal) turnSeal.style.display = isCampaign ? 'flex' : 'none';
    document.body.classList.toggle('mode-campaign', isCampaign);
    document.body.classList.toggle('mode-rts', !isCampaign);
    if (provPanel) {
      if (!isCampaign) provPanel.style.display = 'none';
    }
    if (unitPanel) unitPanel.style.display = isCampaign ? 'none' : 'block';
    if (recruitBar) recruitBar.style.display = isCampaign ? 'none' : 'flex';
    if (tabCamp) tabCamp.classList.toggle('active', isCampaign);
    if (tabRts) tabRts.classList.toggle('active', !isCampaign);
    if (modeBadge) {
      const fac = FACTIONS[this.playerFaction];
      const pillBanner = modeBadge.querySelector ? modeBadge.querySelector('.pill-banner') : null;
      const pillName = modeBadge.querySelector ? modeBadge.querySelector('.pill-name') : null;
      if (pillBanner && pillName) {
        pillBanner.innerText = isCampaign ? (fac ? fac.banner || '👑' : '👑') : '⚔️';
        pillName.innerText = isCampaign ? (fac ? fac.name : 'Gran Campaña') : 'Táctico RTS';
      } else {
        modeBadge.innerText = isCampaign ? `${fac ? fac.banner : '👑'} ${fac ? fac.name : 'Campaña'}` : '⚔️ Combate Táctico RTS';
      }
    }

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

  closeProvincePanel() {
    const panel = document.getElementById('province-inspector-panel');
    if (panel) panel.style.display = 'none';
    this._selectedProvince = null;
  }

  switchProvinceTab(tabKey) {
    this._activeProvinceTab = tabKey;
    if (this._selectedProvince) {
      this._showProvincePanel(this._selectedProvince, tabKey);
    }
  }

  _showProvincePanel(province, activeTab) {
    const panel = document.getElementById('province-inspector-panel');
    if (!panel) return;

    this._selectedProvince = province;
    const tab = activeTab || this._activeProvinceTab || 'resumen';
    this._activeProvinceTab = tab;

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

    let tabBodyHTML = '';

    if (isPlayer) {
      if (tab === 'resumen') {
        tabBodyHTML = `
          <!-- Age of History 3 Provincial Metrics -->
          <div class="aoh3-metrics-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:6px; background:rgba(0,0,0,0.35); padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.06);">
            <div style="font-size:11px;">👥 Población: <strong style="color:#f8fafc">${(province.population || 50000).toLocaleString()}</strong></div>
            <div style="font-size:11px;">⭐ Desarrollo: <strong style="color:#fbbf24">Nv. ${province.developmentLevel || 1} / 10</strong></div>
            <div style="font-size:11px;">🪙 Valor Fiscal: <strong style="color:#38bdf8">${province.economyValue || 25}</strong></div>
            <div style="font-size:11px;">🛣️ Infraestructura: <strong style="color:#a78bfa">Nv. ${province.infrastructureLevel || 1} / 5</strong></div>
            <div style="font-size:11px;">🛡️ Baluartes: <strong style="color:#34d399">Nv. ${province.defenseLevel || 1} / 4</strong></div>
            <div style="font-size:11px;">📦 Recurso: <strong style="color:#f59e0b">${(province.tradeGood || 'grain').toUpperCase()}</strong></div>
          </div>

          <!-- Yield Grid -->
          <div class="yield-grid">
            <div class="yield-box">🪙 Oro: <strong style="color:#fbbf24;">+${yields.gold}</strong></div>
            <div class="yield-box">🌾 Alimento: <strong style="color:#86efac;">+${yields.food}</strong></div>
            <div class="yield-box">⛏️ Hierro: <strong style="color:#cbd5e1;">+${yields.iron}</strong></div>
            <div class="yield-box">📜 Ciencia: <strong style="color:#93c5fd;">+${yields.science}</strong></div>
          </div>

          <div style="font-size:10px; color:#94a3b8; line-height:1.4; padding:4px;">
            💡 <em>Para invertir en desarrollo y erigir edificios provinciales, selecciona la pestaña <strong>Obras</strong>.</em>
          </div>
        `;
      } else if (tab === 'obras') {
        tabBodyHTML = `
          <!-- Age of History 3 Administrative Investments -->
          <div class="admin-investment-section">
            <h4 style="font-size:11px; color:#fbbf24; text-transform:uppercase; margin-bottom:6px; font-weight:700;">🏛️ Mejoras de Gobernación (AoH3):</h4>
            <div style="display:flex; flex-direction:column; gap:5px;">
              <button class="btn-action" style="text-align:left; padding:5px 8px; font-size:11px;" onclick="window.game.campaign.adminInvestEconomy('${province.id}')">
                🪙 Invertir en Economía (+15 Base) <small style="color:#94a3b8">(${econCost} O)</small>
              </button>
              <button class="btn-action" style="text-align:left; padding:5px 8px; font-size:11px;" onclick="window.game.campaign.adminInvestDevelopment('${province.id}')">
                🌱 Invertir en Desarrollo (+1 Nivel) <small style="color:#94a3b8">(${devCostGold} O, ${devCostSci} C)</small>
              </button>
              <button class="btn-action" style="text-align:left; padding:5px 8px; font-size:11px;" onclick="window.game.campaign.adminInvestInfrastructure('${province.id}')">
                ⛏️ Red Vial y Caminos (+1 Nivel) <small style="color:#94a3b8">(${infraCostGold} O, ${infraCostIron} H)</small>
              </button>
              <button class="btn-action" style="text-align:left; padding:5px 8px; font-size:11px;" onclick="window.game.campaign.adminInvestDefense('${province.id}')">
                🛡️ Fortificar Baluartes (+1 Nivel) <small style="color:#94a3b8">(${defCostGold} O, ${defCostIron} H)</small>
              </button>
            </div>
          </div>

          <!-- Buildings Construction -->
          <div class="buildings-section" style="margin-top: 8px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 6px;">
            <h4 style="font-size:11px; color:#cbd5e1; margin-bottom:4px;">Edificios Erigidos:</h4>
            <div class="building-badges" style="display:flex; flex-wrap:wrap; gap:4px; margin-bottom:6px;">
              ${province.buildings.length > 0 ? province.buildings.map(b => `<span class="badge-bld">🏛️ ${b.toUpperCase()}</span>`).join('') : '<span style="font-size:11px; color:#64748b;">Sin edificios erigidos.</span>'}
            </div>
            <div class="prov-actions" style="display:flex; flex-direction:column; gap:4px;">
              <button class="btn-action" onclick="window.game.campaign.buildInfrastructure('${province.id}', 'farm')">🌾 Granja Provincial (150 O, 20 A)</button>
              <button class="btn-action" onclick="window.game.campaign.buildInfrastructure('${province.id}', 'mine')">⛏️ Fundición y Mina (200 O, 10 H)</button>
              <button class="btn-action" onclick="window.game.campaign.buildInfrastructure('${province.id}', 'university')">📜 Academia y Tratados (300 O)</button>
            </div>
          </div>
        `;
      } else if (tab === 'levas') {
        const localArmy = this.armies.find(a => a.provinceId === province.id && a.faction === this.playerFaction && a.isAlive);
        tabBodyHTML = `
          <!-- Levas Provinciales -->
          <div class="recruit-sec">
            <h4 style="font-size:11px; color:#fbbf24; text-transform:uppercase; margin-bottom:6px; font-weight:700;">⚔️ Reclutamiento de Guarnición y Regimientos:</h4>
            <div style="display:flex; flex-direction:column; gap:5px;">
              <button class="btn-action btn-recruit-prov" onclick="window.game.campaign.recruitIntoLocalArmy('${province.id}', 'tercio')">
                🚩 Leva de Infantería Pesada / Tercio (280 O, 50 H)
              </button>
              <button class="btn-action btn-recruit-prov" onclick="window.game.campaign.recruitIntoLocalArmy('${province.id}', 'arquebusiers')">
                💥 Batallón de Arcabuceros (180 O, 30 H)
              </button>
            </div>
          </div>

          <div class="garrison-status" style="margin-top:8px; background:rgba(0,0,0,0.3); border:1px solid rgba(255,255,255,0.06); padding:8px; border-radius:6px;">
            <h5 style="font-size:11px; color:#94a3b8; margin-bottom:4px;">🛡️ Guarnición Provincial Local:</h5>
            <div style="font-size:11px; color:#cbd5e1;">
              Plaza Fuerte: <strong>${province.defenseLevel >= 2 ? 'Fortaleza Abaluartada' : 'Muralla Medieval'}</strong><br>
              ${localArmy ? `⚔️ Ejército estacionado: <strong>${localArmy.commanderName}</strong> (${localArmy.getTotalSoldiers()} soldados)` : '🏳️ Sin ejército de campaña de guarnición.'}
            </div>
          </div>
        `;
      }
    } else if (isNeutral) {
      tabBodyHTML = `
        <div class="aoh3-metrics-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:6px; background:rgba(0,0,0,0.35); padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.06);">
          <div style="font-size:11px;">👥 Población: <strong style="color:#f8fafc">${(province.population || 50000).toLocaleString()}</strong></div>
          <div style="font-size:11px;">⭐ Desarrollo: <strong style="color:#fbbf24">Nv. ${province.developmentLevel || 1} / 10</strong></div>
          <div style="font-size:11px;">🪙 Valor Fiscal: <strong style="color:#38bdf8">${province.economyValue || 25}</strong></div>
          <div style="font-size:11px;">📦 Recurso: <strong style="color:#f59e0b">${(province.tradeGood || 'grain').toUpperCase()}</strong></div>
        </div>

        <div class="yield-grid">
          <div class="yield-box">🪙 Oro: <strong style="color:#fbbf24;">+${yields.gold}</strong></div>
          <div class="yield-box">🌾 Alimento: <strong style="color:#86efac;">+${yields.food}</strong></div>
          <div class="yield-box">⛏️ Hierro: <strong style="color:#cbd5e1;">+${yields.iron}</strong></div>
          <div class="yield-box">📜 Ciencia: <strong style="color:#93c5fd;">+${yields.science}</strong></div>
        </div>

        <div class="colonial-annex-section" style="margin-top:8px; background:rgba(30,58,138,0.25); border:1px solid rgba(59,130,246,0.3); padding:10px; border-radius:8px;">
          <h4 style="color:#38bdf8; font-size:11px; margin-bottom:6px; font-weight:700;">🏕️ Territorio de Frontera Sin Soberanía Formal</h4>
          <p style="font-size:11px; color:#cbd5e1; margin-bottom:8px; line-height:1.4;">
            Esta provincia no pertenece a ninguna corona. Puedes fundar un puesto colonial o invertir en su desarrollo inicial para anexarla a tus dominios imperiales.
          </p>
          <div style="display:flex; flex-direction:column; gap:5px;">
            <button class="btn-action" style="background:#0284c7; color:#fff;" onclick="window.game.campaign.adminColonize('${province.id}')">
              ⛵ Enviar Expedición Colonial (180 O, 90 A)
            </button>
            <button class="btn-action" onclick="window.game.campaign.adminInvestDevelopment('${province.id}')">
              🌱 Invertir en Desarrollo & Anexar (${devCostGold} O, ${devCostSci} C)
            </button>
          </div>
        </div>
      `;
    } else {
      tabBodyHTML = `
        <div class="aoh3-metrics-grid" style="display:grid; grid-template-columns: 1fr 1fr; gap:6px; background:rgba(0,0,0,0.35); padding:8px; border-radius:8px; border:1px solid rgba(255,255,255,0.06);">
          <div style="font-size:11px;">👥 Población: <strong style="color:#f8fafc">${(province.population || 50000).toLocaleString()}</strong></div>
          <div style="font-size:11px;">⭐ Desarrollo: <strong style="color:#fbbf24">Nv. ${province.developmentLevel || 1} / 10</strong></div>
          <div style="font-size:11px;">🪙 Valor Fiscal: <strong style="color:#38bdf8">${province.economyValue || 25}</strong></div>
          <div style="font-size:11px;">🛡️ Baluartes: <strong style="color:#34d399">Nv. ${province.defenseLevel || 1} / 4</strong></div>
          <div style="font-size:11px;">📦 Recurso: <strong style="color:#f59e0b">${(province.tradeGood || 'grain').toUpperCase()}</strong></div>
        </div>

        <div class="yield-grid">
          <div class="yield-box">🪙 Oro: <strong style="color:#fbbf24;">+${yields.gold}</strong></div>
          <div class="yield-box">🌾 Alimento: <strong style="color:#86efac;">+${yields.food}</strong></div>
          <div class="yield-box">⛏️ Hierro: <strong style="color:#cbd5e1;">+${yields.iron}</strong></div>
          <div class="yield-box">📜 Ciencia: <strong style="color:#93c5fd;">+${yields.science}</strong></div>
        </div>

        <div class="enemy-prov-notice" style="margin-top:8px; padding:10px; background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.3); border-radius:8px;">
          <strong style="color:#ef4444; font-size:11px;">⚔️ Provincia Soberana Extranjera</strong>
          <p style="font-size:11px; color:#cbd5e1; margin-top:4px; line-height:1.4;">
            Territorio bajo control de <strong>${fac.name}</strong>. Mueve un ejército imperial aquí para poner sitio a su guarnición o conquistar la plaza fuerte.
          </p>
        </div>
      `;
    }

    panel.innerHTML = `
      <div class="province-card glass-panel" style="border-top: 3px solid ${fac.colors.primary || '#d97706'}">
        <div class="prov-header">
          <span class="prov-flag">${fac.banner}</span>
          <div class="prov-title-wrap">
            <h3>${province.capitalName}</h3>
            <span class="prov-region">${province.name} • <strong>${fac.name}</strong> [${province.theater}]</span>
          </div>
          <button class="btn-prov-close" onclick="window.game.campaign.closeProvincePanel()" title="Cerrar panel">✕</button>
        </div>

        ${isPlayer ? `
          <div class="prov-tab-bar">
            <button class="prov-tab-btn ${tab === 'resumen' ? 'active' : ''}" onclick="window.game.campaign.switchProvinceTab('resumen')">🏛️ Estado</button>
            <button class="prov-tab-btn ${tab === 'obras' ? 'active' : ''}" onclick="window.game.campaign.switchProvinceTab('obras')">📈 Obras</button>
            <button class="prov-tab-btn ${tab === 'levas' ? 'active' : ''}" onclick="window.game.campaign.switchProvinceTab('levas')">⚔️ Levas</button>
          </div>
        ` : ''}

        <div class="prov-card-body">
          ${tabBodyHTML}
        </div>
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

    // Projected net income deltas
    if (this.economy.getProjectedIncome && this.map && this.map.provinces) {
      const deltas = this.economy.getProjectedIncome(this.playerFaction, this.map.provinces, this.armies);
      const gDelta = document.getElementById('camp-gold-delta');
      const fDelta = document.getElementById('camp-food-delta');
      const iDelta = document.getElementById('camp-iron-delta');
      const sDelta = document.getElementById('camp-sci-delta');

      if (gDelta) {
        gDelta.innerText = `(${deltas.gold >= 0 ? '+' : ''}${deltas.gold})`;
        gDelta.style.color = deltas.gold >= 0 ? '#86efac' : '#ef4444';
      }
      if (fDelta) {
        fDelta.innerText = `(${deltas.food >= 0 ? '+' : ''}${deltas.food})`;
        fDelta.style.color = deltas.food >= 0 ? '#86efac' : '#ef4444';
      }
      if (iDelta) {
        iDelta.innerText = `(${deltas.iron >= 0 ? '+' : ''}${deltas.iron})`;
        iDelta.style.color = deltas.iron >= 0 ? '#86efac' : '#ef4444';
      }
      if (sDelta) {
        sDelta.innerText = `(${deltas.science >= 0 ? '+' : ''}${deltas.science})`;
        sDelta.style.color = deltas.science >= 0 ? '#86efac' : '#ef4444';
      }
    }

    const season = this.seasons[(this.turn - 1) % 4];
    if (turnEl) {
      turnEl.innerText = `Turno ${this.turn} • ${season} ${this.year}`;
    }

    // Imperial Turn Seal updates (floating bottom-right)
    const sealSeasonEl = document.getElementById('camp-turn-season-year');
    const sealTurnEl = document.getElementById('camp-turn-number');
    const seasonIcons = { 'Primavera': '☀️', 'Verano': '🌾', 'Otoño': '🍂', 'Invierno': '❄️' };
    const sIcon = seasonIcons[season] || '☀️';

    if (sealSeasonEl) {
      sealSeasonEl.innerText = `${sIcon} ${season} ${this.year}`;
    }
    if (sealTurnEl) {
      const romanTurns = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];
      const rTurn = romanTurns[this.turn - 1] || `${this.turn}`;
      sealTurnEl.innerText = `Turno ${rTurn}`;
    }

    if (epochEl && curEpoch) {
      epochEl.innerHTML = `${curEpoch.icon} ${curEpoch.name}`;
    }

    const modeBadge = document.getElementById('mode-indicator');
    if (modeBadge && fac && this.activeMode === 'campaign') {
      const pillBanner = modeBadge.querySelector ? modeBadge.querySelector('.pill-banner') : null;
      const pillName = modeBadge.querySelector ? modeBadge.querySelector('.pill-name') : null;
      if (pillBanner && pillName) {
        pillBanner.innerText = fac.banner || '🌍';
        pillName.innerText = fac.name;
      } else {
        modeBadge.innerText = `${fac.banner || '🌍'} ${fac.name}`;
      }
      modeBadge.title = `Líder: ${fac.leader || ''} • Capital: ${fac.capitalProvince || ''} • Haz clic para abrir el Forjador de Civilizaciones`;
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
