/**
 * Chronicles of War - Main RTS Engine & Simulation Orchestrator
 * Coordinates physics, AI, rendering, camera, economy, and historical eras
 */

class GameEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');

    // Camera & Viewport
    this.camera = {
      x: 0,
      y: 0,
      zoom: 0.85
    };

    // Subsystems
    this.sound = new SoundEngine();
    this.particles = new ParticleSystem(1800);
    this.ballistics = new BallisticsManager(800);
    this.tacticalMap = new TacticalMap(1600, 1100);
    this.territory = new TerritorySystem(1600, 1100, 40);
    this.supplySystem = (typeof SupplySystem !== 'undefined') ? new SupplySystem(this) : null;
    this.battlefieldCasualties = [];
    this.input = new InputController(this.canvas, this);
    this.campaign = new CampaignManager(this);
    if (typeof CustomBattleBuilder !== 'undefined') {
      this.customBattleBuilder = new CustomBattleBuilder(this);
    }

    // State
    this.gameState = 'menu'; // 'menu', 'game'
    this.units = [];
    this.selectedUnits = [];
    this.currentEraKey = 'renaissance';
    this.currentScenarioKey = 'pavia';

    this.gameSpeed = 1.0;
    this.isPaused = false;
    this.lastTime = performance.now();
    this.nextUnitId = 1;

    // Reinforcements & Supplies (War of Dots economy)
    this.gold = 500;
    this.battleLog = [];
    this.aiThinkTimer = 0;

    this._resizeCanvas();
    window.addEventListener('resize', () => this._resizeCanvas());
  }

  _resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    this.sound.init();
    this.loadScenario(this.currentScenarioKey);
    this._centerCameraOnScenario();
    this.campaign.switchMode('campaign');
    this.campaign.refreshUI();
    this.addLogMessage('🌍 ¡Gran Campaña 4X iniciada! Administra tu imperio y marcha tus ejércitos.');
    this.addLogMessage('⚔️ Pulsa en una provincia o selecciona un ejército para moverlo.');

    const menuEl = document.getElementById('main-menu-screen');
    if (menuEl) {
      menuEl.style.display = 'flex';
      this.gameState = 'menu';
    } else {
      this.gameState = 'game';
    }

    requestAnimationFrame((t) => this._loop(t));
  }

  loadScenario(scenarioKey) {
    const scenario = SCENARIOS[scenarioKey];
    if (!scenario) return;

    this.currentScenarioKey = scenarioKey;
    this.currentEraKey = scenario.era;
    this.units = [];
    this.selectedUnits = [];
    this.battlefieldCasualties = [];
    this.nextUnitId = 1;

    // Load Map data
    this.tacticalMap.loadScenarioData(scenario.mapData);

    // Initialize Supply Trains & Capture Points for this battlefield
    if (this.supplySystem) {
      this.supplySystem.loadScenarioLogistics(scenario.mapData);
    }

    // Deploy units
    const eraDefs = ERAS[scenario.era].units;
    scenario.deployments.forEach(dep => {
      const uDef = eraDefs[dep.unitKey];
      if (uDef) {
        const u = new Unit(this.nextUnitId++, uDef, dep.team, dep.x, dep.y, dep.angle);
        this.units.push(u);
      }
    });

    this.addLogMessage(`🗺️ Escenario cargado: ${scenario.name}`);
    this._centerCameraOnScenario();
  }

  setEra(eraKey) {
    if (!ERAS[eraKey]) return;
    this.currentEraKey = eraKey;
    this.addLogMessage(`⏳ Era cambiada a: ${ERAS[eraKey].name}`);
  }

  _centerCameraOnScenario() {
    this.camera.zoom = 0.85;
    this.camera.x = (this.canvas.width - 1600 * this.camera.zoom) * 0.5;
    this.camera.y = (this.canvas.height - 1100 * this.camera.zoom) * 0.5;
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    this.addLogMessage(this.isPaused ? '⏸️ Pausa Táctica activada' : '▶️ Simulación reanudada');
    const pauseBtn = document.getElementById('btn-pause');
    if (pauseBtn) {
      pauseBtn.innerHTML = this.isPaused ? '▶️ Reanudar' : '⏸️ Pausa';
      pauseBtn.classList.toggle('active', this.isPaused);
    }
  }

  setGameSpeed(speed) {
    this.gameSpeed = speed;
    this.isPaused = false;
    this.addLogMessage(`⏩ Velocidad ajustada a ${speed}x`);
  }

  addLogMessage(msg) {
    this.battleLog.unshift({ text: msg, time: new Date().toLocaleTimeString() });
    if (this.battleLog.length > 20) this.battleLog.pop();

    const logContainer = document.getElementById('battle-log-entries');
    if (logContainer) {
      logContainer.innerHTML = this.battleLog.slice(0, 8).map(l => `<div class="log-item"><span class="log-time">${l.time}</span> ${l.text}</div>`).join('');
    }
  }

  // --- SELECTION & COMMANDS ---

  selectUnitAt(x, y, toggle = false) {
    let clickedUnit = null;
    for (let i = 0; i < this.units.length; i++) {
      const u = this.units[i];
      if (!u.alive || u.team !== 0) continue; // Only player units
      if (Math.hypot(x - u.x, y - u.y) < u.radius + 8) {
        clickedUnit = u;
        break;
      }
    }

    // Check player supply wagons if no combat unit was clicked
    if (!clickedUnit && this.supplySystem && this.supplySystem.supplyTrains) {
      for (let i = 0; i < this.supplySystem.supplyTrains.length; i++) {
        const st = this.supplySystem.supplyTrains[i];
        if (!st.alive || st.team !== 0) continue;
        if (Math.hypot(x - st.x, y - st.y) < st.radius + 12) {
          clickedUnit = st;
          break;
        }
      }
    }

    if (!toggle) {
      this.deselectAll();
    }

    if (clickedUnit) {
      clickedUnit.selected = !clickedUnit.selected;
      if (clickedUnit.selected) {
        this.selectedUnits.push(clickedUnit);
        this.sound.playMarchDrums();
      } else {
        this.selectedUnits = this.selectedUnits.filter(u => u !== clickedUnit);
      }
    }

    this._updateSelectionUI();
  }

  selectUnitsInBox(x1, y1, x2, y2, toggle = false) {
    if (!toggle) {
      this.deselectAll();
    }

    for (let i = 0; i < this.units.length; i++) {
      const u = this.units[i];
      if (!u.alive || u.team !== 0) continue;
      if (u.x >= x1 && u.x <= x2 && u.y >= y1 && u.y <= y2) {
        u.selected = true;
        if (!this.selectedUnits.includes(u)) {
          this.selectedUnits.push(u);
        }
      }
    }

    if (this.supplySystem && this.supplySystem.supplyTrains) {
      for (let i = 0; i < this.supplySystem.supplyTrains.length; i++) {
        const st = this.supplySystem.supplyTrains[i];
        if (!st.alive || st.team !== 0) continue;
        if (st.x >= x1 && st.x <= x2 && st.y >= y1 && st.y <= y2) {
          st.selected = true;
          if (!this.selectedUnits.includes(st)) {
            this.selectedUnits.push(st);
          }
        }
      }
    }

    if (this.selectedUnits.length > 0) {
      this.sound.playMarchDrums();
    }
    this._updateSelectionUI();
  }

  deselectAll() {
    this.selectedUnits.forEach(u => u.selected = false);
    if (this.supplySystem && this.supplySystem.supplyTrains) {
      this.supplySystem.supplyTrains.forEach(st => st.selected = false);
    }
    this.selectedUnits = [];
    this._updateSelectionUI();
  }

  moveSelectedTo(targetX, targetY, addWaypoint = false) {
    if (this.selectedUnits.length === 0) return;

    this.sound.playTrumpetCall();

    // Formation dispersion so units don't overlap on a single point
    const count = this.selectedUnits.length;
    const spacing = 45;
    const cols = Math.ceil(Math.sqrt(count));

    this.selectedUnits.forEach((u, idx) => {
      const col = idx % cols;
      const row = Math.floor(idx / cols);
      const offsetX = (col - (cols - 1) / 2) * spacing;
      const offsetY = row * spacing;
      u.setTarget(targetX + offsetX, targetY + offsetY, addWaypoint);
    });
  }

  deploySelectedInLine(startX, startY, endX, endY) {
    if (this.selectedUnits.length === 0) return;

    this.sound.playTrumpetCall();

    const count = this.selectedUnits.length;
    const lineDx = endX - startX;
    const lineDy = endY - startY;
    const lineLength = Math.hypot(lineDx, lineDy);
    const lineAngle = Math.atan2(lineDy, lineDx);
    const faceAngle = lineAngle - Math.PI * 0.5; // Perpendicular facing

    this.selectedUnits.forEach((u, idx) => {
      const t = count === 1 ? 0.5 : idx / (count - 1);
      const targetX = startX + lineDx * t;
      const targetY = startY + lineDy * t;
      u.setTarget(targetX, targetY);
      u.targetAngle = faceAngle;
    });

    this.addLogMessage(`🛡️ Desplegando ${count} regimiento(s) en línea de batalla.`);
  }

  setFormationForSelected(formation) {
    this.selectedUnits.forEach(u => u.setFormation(formation));
    this.addLogMessage(`📐 Formación cambiada a: ${formation.toUpperCase()}`);
    this._updateSelectionUI();
  }

  stopSelectedUnits() {
    this.selectedUnits.forEach(u => {
      u.targetX = u.x;
      u.targetY = u.y;
      u.waypoints = [];
    });
    this.addLogMessage('🛑 Órdenes canceladas: Alto el fuego y mantener posición.');
  }

  recruitUnit(unitKey) {
    const eraUnits = ERAS[this.currentEraKey].units;
    const uDef = eraUnits[unitKey];
    if (!uDef) return;

    if (this.gold < uDef.cost) {
      this.addLogMessage('⚠️ Oro insuficiente para reclutar este regimiento.');
      return;
    }

    // Find friendly camp
    const camp = this.tacticalMap.camps.find(c => c.team === 0);
    const spawnX = camp ? camp.x + (Math.random() - 0.5) * 40 : 250;
    const spawnY = camp ? camp.y + (Math.random() - 0.5) * 40 : 550;

    const newUnit = new Unit(this.nextUnitId++, uDef, 0, spawnX, spawnY, 0);
    this.units.push(newUnit);
    this.gold -= uDef.cost;
    this.sound.playTrumpetCall();
    this.addLogMessage(`⚔️ ¡Reclutado nuevo regimiento: ${uDef.name}!`);
  }

  // --- AI OPPONENT (Red Team) ---

  _updateAI(dt) {
    this.aiThinkTimer += dt;
    if (this.aiThinkTimer < 1.2) return;
    this.aiThinkTimer = 0;

    const redUnits = this.units.filter(u => u.team === 1 && u.alive && !u.isRouting);
    const blueUnits = this.units.filter(u => u.team === 0 && u.alive);

    if (redUnits.length === 0 || blueUnits.length === 0) return;

    redUnits.forEach(red => {
      // Find nearest enemy or camp
      let nearestTarget = null;
      let minDist = Infinity;

      blueUnits.forEach(blue => {
        const d = Math.hypot(blue.x - red.x, blue.y - red.y);
        if (d < minDist) {
          minDist = d;
          nearestTarget = blue;
        }
      });

      if (nearestTarget) {
        if (red.def.category === 'cavalry') {
          // Flanking behavior: try to attack vulnerable flanks or ranged units
          const flankAngle = nearestTarget.angle + Math.PI * 0.5;
          const targetDist = minDist > 180 ? 120 : 0;
          red.setTarget(nearestTarget.x + Math.cos(flankAngle) * targetDist, nearestTarget.y + Math.sin(flankAngle) * targetDist);
        } else if (red.def.category === 'artillery') {
          // Artillery holds position and shoots
          if (minDist < 120) {
            // Reposition back if enemies too close
            const awayAngle = Math.atan2(red.y - nearestTarget.y, red.x - nearestTarget.x);
            red.setTarget(red.x + Math.cos(awayAngle) * 80, red.y + Math.sin(awayAngle) * 80);
          }
        } else {
          // Infantry / pikes advance in battle line
          if (minDist > (red.range > 0 ? red.range * 0.8 : 35)) {
            red.setTarget(nearestTarget.x, nearestTarget.y);
          }
        }
      }
    });
  }

  // --- MAIN SIMULATION & RENDER LOOP ---

  _loop(timestamp) {
    try {
      const rawDt = Math.min(0.1, (timestamp - this.lastTime) / 1000);
      this.lastTime = timestamp;

      if (this.campaign && this.campaign.activeMode === 'campaign') {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.campaign.render(this.ctx);
        return;
      }

      const dt = this.isPaused ? 0 : rawDt * this.gameSpeed;

      if (dt > 0) {
        // 1. Update AI
        this._updateAI(dt);

        // 2. Update Units
        this.units.forEach(u => u.update(dt, this.tacticalMap, this.units, this.ballistics, this.particles, this.sound));

        // 3. Update Ballistics
        this.ballistics.update(dt, this.units, this.particles, this.sound);

        // 4. Update Smoke & Particles
        this.particles.update(dt);

        // 5. Update Supply Lines, Command Points & Objectives (Wargame Logistics)
        if (this.supplySystem) {
          this.supplySystem.update(dt, this.units);
        }

        // 6. Update Persistent Casualties
        this.battlefieldCasualties = this.battlefieldCasualties.filter(c => {
          c.life -= dt;
          return c.life > 0;
        });

        // 7. Update Territory Frontline
        this.territory.update(dt, this.units, this.tacticalMap.camps);

        // Passive income
        this.gold += dt * 15;
      }

      // 8. Clean up dead units
      this.units = this.units.filter(u => u.alive || u.isRouting);
      this.selectedUnits = this.selectedUnits.filter(u => u.alive);

      // 9. Render Everything (Single-Pass Clear Canvas per subgeist_naturaleza.md)
      this._render();

      // 10. Update HUD Info & Drawer Telemetry
      this._updateHUD();
      if (this.tacticalDrawerOpen) {
        this._updateTacticalDrawerLiveTelemetry();
      }
    } catch (loopErr) {
      console.error('⚠️ [Engine Loop Resilient Catch]:', loopErr);
    } finally {
      requestAnimationFrame((t) => this._loop(t));
    }
  }

  _render() {
    const ctx = this.ctx;
    const cam = this.camera;

    // Single clear
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.save();
    // Apply camera transform
    ctx.translate(cam.x, cam.y);
    ctx.scale(cam.zoom, cam.zoom);

    // Layer 1: Base Map Terrain (Parchment, Fortifications, Bastions, Rivers)
    this.tacticalMap.render(ctx, cam);

    // Layer 2: Dynamic Territory / Frontline Shading
    this.territory.renderFrontline(ctx);

    // Layer 3: Persistent Battlefield Casualties & Dropped Arms
    this._renderCasualties(ctx);

    // Layer 3.5: Supply Trains, Capture Points & Supply Lines (Wargame Logistics)
    if (this.supplySystem) {
      this.supplySystem.render(ctx);
    }

    // Layer 4: Units & Micro-Soldiers
    this.units.forEach(u => u.render(ctx));

    // Layer 5: Ballistics (Arrows, Bullets, Cannonballs)
    this.ballistics.render(ctx);

    // Layer 6: Volumetric Gunpowder Smoke & Flashes
    this.particles.render(ctx);

    // Layer 7: Input Overlays (Marquee box, deployment line)
    this.input.renderOverlays(ctx);

    ctx.restore();

    // Layer 8: Minimap
    this._renderMinimap(ctx);
  }

  _renderMinimap(ctx) {
    const mmSize = 180;
    const mmX = this.canvas.width - mmSize - 20;
    const mmY = 20;

    ctx.save();
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1.5;
    ctx.fillRect(mmX, mmY, mmSize, mmSize * (1100 / 1600));
    ctx.strokeRect(mmX, mmY, mmSize, mmSize * (1100 / 1600));

    const scaleX = mmSize / 1600;
    const scaleY = (mmSize * (1100 / 1600)) / 1100;

    // Fortifications on minimap
    ctx.fillStyle = '#475569';
    this.tacticalMap.fortifications.forEach(f => {
      if (f.type === 'wall') {
        ctx.fillRect(mmX + f.x1 * scaleX - 1, mmY + f.y1 * scaleY, 2, (f.y2 - f.y1) * scaleY);
      }
    });

    // Camps
    this.tacticalMap.camps.forEach(c => {
      ctx.fillStyle = c.team === 0 ? '#3b82f6' : '#ef4444';
      ctx.beginPath();
      ctx.arc(mmX + c.x * scaleX, mmY + c.y * scaleY, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // Units on minimap
    this.units.forEach(u => {
      if (!u.alive) return;
      ctx.fillStyle = u.team === 0 ? '#3b82f6' : '#ef4444';
      ctx.fillRect(mmX + u.x * scaleX - 2, mmY + u.y * scaleY - 2, 4, 4);
    });

    // Camera Frustum
    const cam = this.camera;
    const frustumX = (-cam.x / cam.zoom) * scaleX;
    const frustumY = (-cam.y / cam.zoom) * scaleY;
    const frustumW = (this.canvas.width / cam.zoom) * scaleX;
    const frustumH = (this.canvas.height / cam.zoom) * scaleY;

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1;
    ctx.strokeRect(mmX + frustumX, mmY + frustumY, frustumW, frustumH);

    ctx.restore();
  }

  _renderCasualties(ctx) {
    if (!this.battlefieldCasualties || this.battlefieldCasualties.length === 0) return;

    ctx.save();
    for (let i = 0; i < this.battlefieldCasualties.length; i++) {
      const c = this.battlefieldCasualties[i];
      const alpha = Math.min(1.0, c.life / 20.0); // Slow fadeout at end of life

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(c.x, c.y);
      ctx.rotate(c.angle);

      // Blood pool on ground
      ctx.fillStyle = 'rgba(127, 29, 29, 0.45)';
      ctx.beginPath();
      ctx.ellipse(0, 0, 4.8, 3.0, 0.3, 0, Math.PI * 2);
      ctx.fill();

      // Fallen soldier body
      ctx.fillStyle = c.color || '#475569';
      ctx.fillRect(-2.5, -1.8, 5.0, 3.6);

      // Steel breastplate / tunic
      ctx.fillStyle = '#64748b';
      ctx.fillRect(-1.5, -1.2, 3.0, 2.4);

      // Head
      ctx.fillStyle = '#fed7aa';
      ctx.beginPath();
      ctx.arc(2.8, 0, 1.3, 0, Math.PI * 2);
      ctx.fill();

      // Discarded weapon lying beside soldier
      if (c.weaponType === 'pike') {
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(-10, 3);
        ctx.lineTo(12, 5);
        ctx.stroke();
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(12, 5);
        ctx.lineTo(15, 5.5);
        ctx.stroke();
      } else if (c.weaponType === 'musket' || c.weaponType === 'arquebus' || c.weaponType === 'rifle') {
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(-3, 3);
        ctx.lineTo(5, 4);
        ctx.stroke();
      } else {
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(-2, 2.5);
        ctx.lineTo(4, 3.5);
        ctx.stroke();
      }

      ctx.restore();
    }
    ctx.restore();
  }

  _updateHUD() {
    const goldEl = document.getElementById('stat-gold');
    if (goldEl) goldEl.innerText = Math.floor(this.gold);

    const cpEl = document.getElementById('stat-cp');
    if (cpEl && this.supplySystem) {
      cpEl.innerText = `${Math.floor(this.supplySystem.commandPoints)} CP`;
    }

    const blueTroopsEl = document.getElementById('stat-blue-troops');
    const redTroopsEl = document.getElementById('stat-red-troops');
    if (blueTroopsEl) blueTroopsEl.innerText = this.territory.blueUnitCount;
    if (redTroopsEl) redTroopsEl.innerText = this.territory.redUnitCount;

    const territoryEl = document.getElementById('stat-territory');
    if (territoryEl) territoryEl.innerText = `${this.territory.blueScore}% / ${this.territory.redScore}%`;

    const eraNameEl = document.getElementById('current-era-name');
    if (eraNameEl && ERAS[this.currentEraKey]) {
      eraNameEl.innerText = ERAS[this.currentEraKey].name;
    }
  }

  setDoctrineForSelected(doctrineKey) {
    this.selectedUnits.forEach(u => u.setDoctrine(doctrineKey));
    this.addLogMessage(`⚔️ Doctrina táctica ordenada: ${doctrineKey.toUpperCase()}`);
    this._updateSelectionUI();
  }

  callTacticalReinforcement(unitKey) {
    if (this.supplySystem) {
      this.supplySystem.callPlayerReinforcement(unitKey);
    }
  }

  _updateSelectionUI() {
    const panel = document.getElementById('selected-unit-panel');
    if (!panel) return;

    if (this.selectedUnits.length === 0) {
      panel.innerHTML = '<div class="no-selection">Ningún regimiento seleccionado.<br><small>Haz clic o arrastra un lazo para seleccionar tropas o carros de bagajes.</small></div>';
      return;
    }

    const u = this.selectedUnits[0];

    // Specialized Telemetry Card for Mobile Supply Trains (Logistics)
    if (u.isSupplyTrain) {
      const hpPct = Math.round((u.health / u.maxHealth) * 100);
      const suppPct = Math.round((u.suppliesRemaining / 4000) * 100);
      panel.innerHTML = `
        <div class="unit-card supply-train-card" style="border-left: 3px solid #f59e0b;">
          <div class="unit-header">
            <span class="unit-badge">📦</span>
            <div class="unit-titles">
              <h4>${u.def.name}</h4>
              <span class="unit-cat" style="color: #fbbf24">LOGÍSTICA MÓVIL • CONVOY DE INTENDENCIA</span>
            </div>
          </div>
          <div class="unit-bars">
            <div class="bar-row">
              <span>Integridad de Carros:</span>
              <strong style="color: ${hpPct > 40 ? '#22c55e' : '#ef4444'}">${Math.round(u.health)} / ${u.maxHealth} (${hpPct}%)</strong>
            </div>
            <div class="bar-row">
              <span>Reserva de Pólvora & Víveres:</span>
              <strong style="color: #f59e0b">${Math.round(u.suppliesRemaining)} pts (${suppPct}%)</strong>
            </div>
            <div class="bar-row">
              <span>Radio Logístico:</span>
              <strong style="color: #38bdf8">${u.supplyRadius} px</strong>
            </div>
            <div class="bar-row">
              <span>Velocidad de Marcha:</span>
              <strong style="color: #cbd5e1">${u.speed} px/s</strong>
            </div>
          </div>
          <div style="margin-top: 8px; font-size: 11px; color: #94a3b8; line-height: 1.4; background: rgba(0,0,0,0.3); padding: 8px 10px; border-radius: 6px; border: 1px solid rgba(245, 158, 11, 0.2);">
            💡 <em>Haz clic derecho en el terreno para ordenar al convoy que avance o se repliegue. Las tropas dentro de su aura circular reciben munición continua y recuperación de fatiga acelerada.</em>
          </div>
        </div>
      `;
      return;
    }

    const totalSelected = this.selectedUnits.length;
    const isPike = (u.def.category === 'pikes' || u.def.weaponType === 'pike' || u.def.weaponType === 'tercio_hybrid');
    const isRanged = (u.range > 0);
    const isCav = (u.def.category === 'cavalry');

    const fatigueColor = u.fatigue >= 75 ? '#ef4444' : (u.fatigue >= 40 ? '#f59e0b' : '#22c55e');
    const supplyStatusHtml = u.supplyStatus === 'supplied' 
      ? '<span style="color:#22c55e">🟢 Conectado</span>' 
      : (u.supplyStatus === 'degraded' ? '<span style="color:#f59e0b">🟡 Degradado</span>' : '<span style="color:#ef4444">🔴 Aislado</span>');

    panel.innerHTML = `
      <div class="unit-card">
        <div class="unit-header">
          <span class="unit-badge">${u.def.badge || '⚔️'}</span>
          <div class="unit-titles">
            <h4>${u.def.name} ${totalSelected > 1 ? `(+${totalSelected - 1})` : ''}</h4>
            <span class="unit-cat">${u.def.category.toUpperCase()} • ${u.currentFormation.toUpperCase()}</span>
          </div>
        </div>

        <div class="unit-bars">
          <div class="bar-row">
            <span>Efectivos:</span>
            <strong>${u.currentSoldiers} / ${u.maxSoldiers}</strong>
          </div>
          <div class="bar-row">
            <span>Moral:</span>
            <strong style="color: #38bdf8">${Math.round(u.morale)}%</strong>
          </div>
          <div class="bar-row">
            <span>Fatiga:</span>
            <strong style="color: ${fatigueColor}">${Math.round(u.fatigue || 0)}%</strong>
          </div>
          ${u.ammo !== undefined ? `
          <div class="bar-row">
            <span>Munición:</span>
            <strong style="color: ${u.ammo <= 0 ? '#ef4444' : '#f59e0b'}">${u.ammo} / ${u.maxAmmo}</strong>
          </div>` : ''}
          <div class="bar-row">
            <span>Logística:</span>
            <strong>${supplyStatusHtml}</strong>
          </div>
          <div class="bar-row">
            <span>Bajas infligidas:</span>
            <strong style="color: #cbd5e1">${u.kills || 0}</strong>
          </div>
        </div>

        <div class="unit-doctrine-section" style="margin-top: 6px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 6px;">
          <div style="font-size: 10px; color: #94a3b8; font-weight: 600; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;">Doctrina Táctica:</div>
          <div class="unit-actions" style="display: flex; flex-wrap: wrap; gap: 4px;">
            ${isPike ? `<button onclick="window.game.setDoctrineForSelected('pike_wall')" class="btn-action ${u.activeDoctrine === 'pike_wall' ? 'active' : ''}">🛡️ Muro Picas</button>` : ''}
            <button onclick="window.game.setDoctrineForSelected('charge')" class="btn-action ${u.activeDoctrine === 'charge' ? 'active' : ''}">⚔️ Carga</button>
            <button onclick="window.game.setDoctrineForSelected('square')" class="btn-action ${u.activeDoctrine === 'square' ? 'active' : ''}">🔲 Cuadro</button>
            <button onclick="window.game.setDoctrineForSelected('loose')" class="btn-action ${u.activeDoctrine === 'loose' ? 'active' : ''}">💨 Dispersa</button>
            ${isRanged ? `<button onclick="window.game.setDoctrineForSelected('volley')" class="btn-action ${u.activeDoctrine === 'volley' ? 'active' : ''}">💥 Salva</button>` : ''}
            <button onclick="window.game.setDoctrineForSelected('none')" class="btn-action ${u.activeDoctrine === 'none' ? 'active' : ''}">Normal</button>
          </div>
        </div>

        <div class="unit-formation-section" style="margin-top: 6px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 6px;">
          <div style="font-size: 10px; color: #94a3b8; font-weight: 600; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;">Formación de Batalla:</div>
          <div class="unit-actions">
            <button onclick="window.game.setFormationForSelected('line')" class="btn-action ${u.currentFormation === 'line' ? 'active' : ''}">Línea [1]</button>
            <button onclick="window.game.setFormationForSelected('column')" class="btn-action ${u.currentFormation === 'column' ? 'active' : ''}">Columna [2]</button>
            <button onclick="window.game.setFormationForSelected('square')" class="btn-action ${u.currentFormation === 'square' ? 'active' : ''}">Cuadro [3]</button>
            <button onclick="window.game.setFormationForSelected('skirmish')" class="btn-action ${u.currentFormation === 'skirmish' ? 'active' : ''}">Guerrilla [4]</button>
          </div>
        </div>
      </div>
    `;
  }

  // --- ARMY-WIDE TACTICAL DOCTRINES & DRAWER CONTROLS ---

  toggleTacticalDrawer() {
    this.tacticalDrawerOpen = !this.tacticalDrawerOpen;
    const drawer = document.getElementById('tactical-command-drawer');
    const toggleBtn = document.getElementById('btn-tactical-drawer-toggle');
    if (drawer) {
      drawer.classList.toggle('open', this.tacticalDrawerOpen);
    }
    if (toggleBtn) {
      toggleBtn.classList.toggle('active', this.tacticalDrawerOpen);
      toggleBtn.innerHTML = this.tacticalDrawerOpen ? '⚜️ Puesto de Mando ⏶' : '⚜️ Puesto de Mando ⏷';
    }
    if (this.tacticalDrawerOpen) {
      this._updateTacticalDrawerLiveTelemetry();
    }
  }

  setArmyRuleOfEngagement(rule) {
    this.currentArmyROE = rule;
    this.units.filter(u => u.team === 0).forEach(u => {
      u.holdFire = (rule === 'hold_fire');
      u.skirmishStance = (rule === 'skirmish');
    });

    const msg = rule === 'hold_fire' 
      ? '🤫 ¡ALTO EL FUEGO ordenado a todo el ejército! Ahorro estricto de munición.' 
      : (rule === 'skirmish' ? '💨 ¡GUERRILLA TÁCTICA! Regimientos mantendrán distancia.' : '💥 ¡FUEGO A DISCRECIÓN! Autorizadas salvas libres.');
    this.addLogMessage(msg);
    if (this.sound) this.sound.playMarchDrums();
    this._updateTacticalDrawerLiveTelemetry();
  }

  orderArmyRetreat() {
    this.units.filter(u => u.team === 0 && u.alive).forEach(u => {
      u.setFormation('column');
      u.setTarget(u.x - 300, u.y);
    });
    this.addLogMessage('🚩 ¡REPLIEGUE EN ORDEN! Los batallones se repliegan en columna.');
    if (this.sound) this.sound.playTrumpetCall();
  }

  orderArmyFullCharge() {
    this.units.filter(u => u.team === 0 && u.alive).forEach(u => {
      u.setDoctrine('charge');
    });
    this.addLogMessage('⚔️ ¡CARGA GENERAL DE CHOQUE! A la bayoneta / carga decisiva.');
    if (this.sound) this.sound.playTrumpetCall();
  }

  orderArmyAdvanceInLine() {
    this.units.filter(u => u.team === 0 && u.alive).forEach(u => {
      u.setFormation('line');
      u.setTarget(u.x + 260, u.y);
    });
    this.addLogMessage('🛡️ ¡AVANCE EN LÍNEA DE BATALLA! Frente entero avanza coordinado.');
    if (this.sound) this.sound.playMarchDrums();
  }

  centerOnSupplyTrain() {
    if (!this.supplySystem) return;
    const train = this.supplySystem.supplyTrains.find(st => st.team === 0 && st.alive);
    if (train) {
      this.camera.x = this.canvas.width * 0.5 - train.x * this.camera.zoom;
      this.camera.y = this.canvas.height * 0.5 - train.y * this.camera.zoom;
      this.addLogMessage('📦 Cámara centrada en el Convoy de Bagajes y Pólvora.');
      this.deselectAll();
      train.selected = true;
      this.selectedUnits = [train];
      this._updateSelectionUI();
    }
  }

  _updateTacticalDrawerLiveTelemetry() {
    const blueUnits = this.units.filter(u => u.team === 0 && u.alive);
    const redUnits = this.units.filter(u => u.team === 1 && u.alive);

    // Casualties
    let playerKills = 0;
    let playerLosses = 0;
    let totalFatigue = 0;
    let suppliedCount = 0;

    blueUnits.forEach(u => {
      playerKills += (u.kills || 0);
      playerLosses += (u.losses || 0);
      totalFatigue += (u.fatigue || 0);
      if (u.supplyStatus === 'supplied') suppliedCount++;
    });

    const avgFatigue = blueUnits.length > 0 ? Math.round(totalFatigue / blueUnits.length) : 0;
    const suppPct = blueUnits.length > 0 ? Math.round((suppliedCount / blueUnits.length) * 100) : 0;

    const elKills = document.getElementById('drawer-stat-kills');
    const elLosses = document.getElementById('drawer-stat-losses');
    const elFatigue = document.getElementById('drawer-stat-fatigue');
    const elSupplied = document.getElementById('drawer-stat-supply');
    const elWagonAmmo = document.getElementById('drawer-stat-wagon-ammo');

    if (elKills) elKills.innerText = playerKills;
    if (elLosses) elLosses.innerText = playerLosses;
    if (elFatigue) {
      elFatigue.innerText = `${avgFatigue}%`;
      elFatigue.style.color = avgFatigue > 50 ? '#ef4444' : (avgFatigue > 25 ? '#f59e0b' : '#22c55e');
    }
    if (elSupplied) {
      elSupplied.innerText = `${suppPct}%`;
      elSupplied.style.color = suppPct > 70 ? '#22c55e' : (suppPct > 40 ? '#f59e0b' : '#ef4444');
    }

    if (elWagonAmmo && this.supplySystem) {
      const train = this.supplySystem.supplyTrains.find(st => st.team === 0 && st.alive);
      if (train) {
        elWagonAmmo.innerText = `${Math.round(train.suppliesRemaining)} pts`;
      } else {
        elWagonAmmo.innerText = '0 (Destruido)';
        elWagonAmmo.style.color = '#ef4444';
      }
    }
  }
}

window.GameEngine = GameEngine;
