/**
 * Chronicles of War - Battle Bridge (4X Campaign <-> Tactical RTS Engine)
 * Replicates Total War's pre-battle screen, auto-resolve calculator, and real-time battle orchestration
 */

class BattleBridge {
  constructor(campaignManager) {
    this.campaign = campaignManager;
    this.currentEncounter = null;
  }

  prepareEncounter(attackerArmy, defenderArmy, province) {
    const attPower = attackerArmy.getCombatPower();
    let defPower = defenderArmy.getCombatPower();

    // Fortification defense bonus in besieged provincial capitals
    if (province.hasBuilding('star_bastion')) {
      defPower = Math.round(defPower * 1.35);
    }

    const totalPower = attPower + defPower;
    const attPercent = Math.round((attPower / Math.max(1, totalPower)) * 100);
    const defPercent = 100 - attPercent;

    this.currentEncounter = {
      attacker: attackerArmy,
      defender: defenderArmy,
      province: province,
      attPower,
      defPower,
      attPercent,
      defPercent
    };

    this._showPreBattleModal();
  }

  _showPreBattleModal() {
    const enc = this.currentEncounter;
    const attFac = FACTIONS[enc.attacker.faction];
    const defFac = FACTIONS[enc.defender.faction];

    const modal = document.getElementById('pre-battle-modal');
    if (!modal) return;

    modal.innerHTML = `
      <div class="pre-battle-content glass-panel">
        <div class="pre-battle-header">
          <h2>⚔️ CHOQUE EN ${enc.province.name.toUpperCase()}</h2>
          <span class="battle-sub">Terreno: ${enc.province.terrain.toUpperCase()} • ${enc.province.hasBuilding('star_bastion') ? '🏰 FORTALEZA CON BALUARTE' : 'CAMPO ABIERTO'}</span>
        </div>

        <div class="armies-comparison">
          <!-- Attacker Side -->
          <div class="army-side" style="border-color: ${attFac.colors.primary}">
            <div class="side-header">
              <span class="flag-icon">${attFac.banner}</span>
              <div>
                <h3>${enc.attacker.commanderName}</h3>
                <span class="fac-title">${attFac.name} (Atacante)</span>
              </div>
            </div>
            <div class="side-troops">
              <div class="troop-stat">Hombres: <strong>${enc.attacker.getTotalSoldiers()}</strong></div>
              <div class="troop-stat">Regimientos: <strong>${enc.attacker.regiments.length}</strong></div>
            </div>
            <div class="roster-list">
              ${enc.attacker.regiments.map(r => `<div class="roster-item">• ${r.unitKey.toUpperCase()} (${r.soldiers} hombres)</div>`).join('')}
            </div>
          </div>

          <!-- Balance of Power Bar -->
          <div class="balance-column">
            <span class="balance-label">PROBABILIDAD DE VICTORIA</span>
            <div class="power-bar">
              <div class="power-att" style="width: ${enc.attPercent}%; background: ${attFac.colors.primary}">${enc.attPercent}%</div>
              <div class="power-def" style="width: ${enc.defPercent}%; background: ${defFac.colors.primary}">${enc.defPercent}%</div>
            </div>
            <span class="vs-badge">VS</span>
          </div>

          <!-- Defender Side -->
          <div class="army-side" style="border-color: ${defFac.colors.primary}">
            <div class="side-header">
              <span class="flag-icon">${defFac.banner}</span>
              <div>
                <h3>${enc.defender.commanderName}</h3>
                <span class="fac-title">${defFac.name} (Defensor)</span>
              </div>
            </div>
            <div class="side-troops">
              <div class="troop-stat">Hombres: <strong>${enc.defender.getTotalSoldiers()}</strong></div>
              <div class="troop-stat">Regimientos: <strong>${enc.defender.regiments.length}</strong></div>
            </div>
            <div class="roster-list">
              ${enc.defender.regiments.map(r => `<div class="roster-item">• ${r.unitKey.toUpperCase()} (${r.soldiers} hombres)</div>`).join('')}
            </div>
          </div>
        </div>

        <div class="pre-battle-actions">
          <button class="btn-battle auto-btn" onclick="window.game.campaign.battleBridge.executeAutoResolve()">
            ⚡ Resolución Automática
          </button>
          <button class="btn-battle rts-btn" onclick="window.game.campaign.battleBridge.executeRealTimeBattle()">
            ⚔️ ¡Comandar Batalla en Tiempo Real!
          </button>
        </div>
      </div>
    `;

    modal.style.display = 'flex';
  }

  hidePreBattleModal() {
    const modal = document.getElementById('pre-battle-modal');
    if (modal) modal.style.display = 'none';
  }

  executeAutoResolve() {
    const enc = this.currentEncounter;
    if (!enc) return;

    this.hidePreBattleModal();

    // Roll random combat modifier
    const rng = (Math.random() - 0.5) * 20;
    const adjustedAtt = enc.attPercent + rng;

    const attackerWon = adjustedAtt >= 50;
    const winnerArmy = attackerWon ? enc.attacker : enc.defender;
    const loserArmy = attackerWon ? enc.defender : enc.attacker;

    // Calculate casualties
    const winnerLossRate = attackerWon ? (100 - adjustedAtt) * 0.005 : (adjustedAtt) * 0.005;
    const loserLossRate = 0.65 + Math.random() * 0.35;

    winnerArmy.applyAttrition(winnerLossRate);
    loserArmy.applyAttrition(loserLossRate);

    // Apply territorial conquest
    let provinceCaptured = false;
    if (attackerWon) {
      enc.province.owner = enc.attacker.faction;
      provinceCaptured = true;
      // Loser retreats
      loserArmy.isAlive = loserArmy.getTotalSoldiers() > 15;
    } else {
      enc.attacker.isAlive = enc.attacker.getTotalSoldiers() > 15;
    }

    this._showPostBattleModal({
      isRTS: false,
      attackerWon,
      winnerArmy,
      loserArmy,
      province: enc.province,
      provinceCaptured
    });
  }

  executeRealTimeBattle() {
    const enc = this.currentEncounter;
    if (!enc) return;

    this.hidePreBattleModal();

    // 1. Prepare RTS battlefield deployment based on strategic armies
    const attackerEra = window.game.campaign.techTree.getCurrentEpoch(enc.attacker.faction).id;
    const defenderEra = window.game.campaign.techTree.getCurrentEpoch(enc.defender.faction).id;

    // Use current era
    window.game.currentEraKey = attackerEra;

    // Generate Procedural Battlefield based on province seed, biome, and star bastion fortifications
    if (typeof ProceduralBattlefieldGenerator !== 'undefined') {
      const generator = new ProceduralBattlefieldGenerator();
      const procMapData = generator.generateBattlefield(enc.province, window.game.campaign.turn);
      window.game.tacticalMap.loadScenarioData(procMapData);
    } else {
      const scenarioKey = enc.province.hasBuilding('star_bastion') ? 'pavia' : (enc.province.terrain === 'hills' ? 'waterloo' : 'agincourt');
      window.game.loadScenario(scenarioKey);
    }

    // Replace units with exact regiments from both strategic armies
    window.game.units = [];
    window.game.selectedUnits = [];
    window.game.nextUnitId = 1;

    // Deploy Attacker (Team 0 if player, Team 1 if AI)
    const playerFaction = window.game.campaign.playerFaction;
    const isPlayerAttacker = enc.attacker.faction === playerFaction;
    const attTeam = isPlayerAttacker ? 0 : 1;
    const defTeam = isPlayerAttacker ? 1 : 0;

    // Spawn Attacker Regiments
    enc.attacker.regiments.forEach((reg, idx) => {
      const uDef = window.game.campaign.armyManager._findUnitDef(reg.unitKey);
      if (uDef) {
        const col = Math.floor(idx / 8);
        const row = idx % 8;
        const startX = isPlayerAttacker ? (750 - col * 130) : (4050 + col * 130);
        const startY = 1100 + row * 130 + (col % 2) * 35;
        const angle = isPlayerAttacker ? 0 : Math.PI;
        const u = new Unit(window.game.nextUnitId++, uDef, attTeam, startX, startY, angle);
        u.health = (reg.soldiers / reg.maxSoldiers) * u.maxHealth;
        u.currentSoldiers = reg.soldiers;
        window.game.units.push(u);
      }
    });

    // Spawn Defender Regiments
    enc.defender.regiments.forEach((reg, idx) => {
      const uDef = window.game.campaign.armyManager._findUnitDef(reg.unitKey);
      if (uDef) {
        const col = Math.floor(idx / 8);
        const row = idx % 8;
        const startX = isPlayerAttacker ? (4050 + col * 130) : (750 - col * 130);
        const startY = 1100 + row * 130 + (col % 2) * 35;
        const angle = isPlayerAttacker ? Math.PI : 0;
        const u = new Unit(window.game.nextUnitId++, uDef, defTeam, startX, startY, angle);
        u.health = (reg.soldiers / reg.maxSoldiers) * u.maxHealth;
        u.currentSoldiers = reg.soldiers;
        window.game.units.push(u);
      }
    });

    // Center camera on player's army deployment
    if (window.game.camera && window.game.canvas) {
      const playerSpawnX = isPlayerAttacker ? 750 : 4050;
      const playerSpawnY = 1500;
      window.game.camera.zoom = 0.75;
      window.game.camera.x = (window.game.canvas.width * 0.5) - playerSpawnX * window.game.camera.zoom;
      window.game.camera.y = (window.game.canvas.height * 0.5) - playerSpawnY * window.game.camera.zoom;
    }

    // Switch view to RTS Tactical Canvas
    window.game.campaign.switchMode('rts');
    window.game.addLogMessage(`⚔️ ¡Comienza la batalla por ${enc.province.name}!`);

    // Listen for battle end
    this.battleEndCheckInterval = setInterval(() => {
      const team0Alive = window.game.units.filter(u => u.team === 0 && u.alive && !u.isRouting).length;
      const team1Alive = window.game.units.filter(u => u.team === 1 && u.alive && !u.isRouting).length;

      if (team0Alive === 0 || team1Alive === 0) {
        clearInterval(this.battleEndCheckInterval);
        this._finishRealTimeBattle(team0Alive > 0, isPlayerAttacker);
      }
    }, 1500);
  }

  _finishRealTimeBattle(playerWon, isPlayerAttacker) {
    const enc = this.currentEncounter;
    const attackerWon = isPlayerAttacker ? playerWon : !playerWon;

    // Synchronize casualties back into strategic army rosters
    const attUnits = window.game.units.filter(u => u.team === (isPlayerAttacker ? 0 : 1));
    const defUnits = window.game.units.filter(u => u.team === (isPlayerAttacker ? 1 : 0));

    enc.attacker.regiments.forEach((reg, idx) => {
      if (attUnits[idx]) {
        reg.soldiers = Math.max(0, attUnits[idx].currentSoldiers);
      }
    });

    enc.defender.regiments.forEach((reg, idx) => {
      if (defUnits[idx]) {
        reg.soldiers = Math.max(0, defUnits[idx].currentSoldiers);
      }
    });

    // Province capture
    let provinceCaptured = false;
    if (attackerWon) {
      enc.province.owner = enc.attacker.faction;
      provinceCaptured = true;
      enc.defender.isAlive = enc.defender.getTotalSoldiers() > 10;
    } else {
      enc.attacker.isAlive = enc.attacker.getTotalSoldiers() > 10;
    }

    this._showPostBattleModal({
      isRTS: true,
      attackerWon,
      winnerArmy: attackerWon ? enc.attacker : enc.defender,
      loserArmy: attackerWon ? enc.defender : enc.attacker,
      province: enc.province,
      provinceCaptured
    });
  }

  _showPostBattleModal(result) {
    const modal = document.getElementById('post-battle-modal');
    if (!modal) return;

    const winnerFac = FACTIONS[result.winnerArmy.faction];

    modal.innerHTML = `
      <div class="post-battle-content glass-panel">
        <div class="victory-banner">
          <h1>🏆 ¡VICTORIA DE ${winnerFac.name.toUpperCase()}!</h1>
          <p>${result.provinceCaptured ? `La provincia de ${result.province.name} ha sido conquistada y anexada.` : 'La guarnición defensora ha resistido exitosamente el asalto.'}</p>
        </div>

        <div class="debrief-stats">
          <div class="debrief-box">
            <h4>Ejército Victorioso</h4>
            <span class="gen-name">${result.winnerArmy.commanderName}</span>
            <span class="troop-count">Supervivientes: ${result.winnerArmy.getTotalSoldiers()}</span>
          </div>
          <div class="debrief-box">
            <h4>Ejército Derrotado</h4>
            <span class="gen-name">${result.loserArmy.commanderName}</span>
            <span class="troop-count">Supervivientes: ${result.loserArmy.getTotalSoldiers()}</span>
          </div>
        </div>

        <button class="btn-return" onclick="window.game.campaign.battleBridge.returnToCampaign()">
          🗺️ Regresar al Mapa de Gran Campaña
        </button>
      </div>
    `;

    modal.style.display = 'flex';
  }

  returnToCampaign() {
    const modal = document.getElementById('post-battle-modal');
    if (modal) modal.style.display = 'none';

    window.game.campaign.switchMode('campaign');
    window.game.campaign.refreshUI();
  }
}

window.BattleBridge = BattleBridge;
