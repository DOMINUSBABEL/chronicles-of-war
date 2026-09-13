/**
 * Chronicles of War - Tactical Supply Lines & Command Points System
 * Inspired by Wargame: Red Dragon logistics and Total War battle captures.
 * Features mobile Supply Trains (carros de bagajes), raycast supply lines,
 * logistical failure penalties (falla de suministro), strategic capture points,
 * and Command Points (CP) for live tactical reinforcements during combat.
 */

class SupplyTrain {
  constructor(id, team, x, y) {
    this.id = id;
    this.team = team; // 0 = Player/Blue, 1 = Enemy/Red
    this.x = x;
    this.y = y;
    this.targetX = x;
    this.targetY = y;
    this.angle = team === 0 ? 0 : Math.PI;

    this.alive = true;
    this.selected = false;
    this.radius = 24;
    this.supplyRadius = 320; // Logistical radius in world units
    this.speed = 28; // Slow logistical wagon speed

    this.maxHealth = 450;
    this.health = this.maxHealth;
    this.suppliesRemaining = 4000; // Total ammo and medicine points

    this.isSupplyTrain = true;
    this.teamColors = team === 0
      ? { main: '#1d4ed8', accent: '#fbbf24', flag: '#3b82f6', text: '#f8fafc' }
      : { main: '#b91c1c', accent: '#f59e0b', flag: '#ef4444', text: '#fef2f2' };
  }

  setTarget(tx, ty) {
    this.targetX = tx;
    this.targetY = ty;
    const dx = tx - this.x;
    const dy = ty - this.y;
    if (Math.hypot(dx, dy) > 8) {
      this.angle = Math.atan2(dy, dx);
    }
  }

  update(dt) {
    if (!this.alive) return;

    // Movement towards destination
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 4) {
      const step = Math.min(dist, this.speed * dt);
      this.x += (dx / dist) * step;
      this.y += (dy / dist) * step;
      this.angle = Math.atan2(dy, dx);
    }
  }

  receiveDamage(amount) {
    if (!this.alive) return;
    this.health -= amount;
    if (this.health <= 0) {
      this.health = 0;
      this.alive = false;
    }
  }

  render(ctx, isSelected) {
    if (!this.alive) return;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    // 1. Logistical Aura Ring
    ctx.strokeStyle = this.team === 0 ? 'rgba(59, 130, 246, 0.15)' : 'rgba(239, 68, 68, 0.15)';
    ctx.fillStyle = this.team === 0 ? 'rgba(59, 130, 246, 0.03)' : 'rgba(239, 68, 68, 0.03)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.arc(0, 0, this.supplyRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.setLineDash([]);

    // 2. Draft Horses / Oxen (Ahead of the wagon)
    ctx.fillStyle = '#78350f'; // Brown horse
    ctx.beginPath();
    ctx.ellipse(22, -6, 8, 3.5, 0, 0, Math.PI * 2); // Left draft horse
    ctx.ellipse(22, 6, 8, 3.5, 0, 0, Math.PI * 2);  // Right draft horse
    ctx.fill();

    // Harness poles
    ctx.strokeStyle = '#92400e';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(10, -5);
    ctx.lineTo(16, -5);
    ctx.moveTo(10, 5);
    ctx.lineTo(16, 5);
    ctx.stroke();

    // 3. Heavy Timber Wagon Body
    ctx.fillStyle = '#451a03'; // Dark wood chassis
    ctx.fillRect(-16, -11, 28, 22);

    // 4. Wooden Wheels
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(-12, -14, 8, 3); // Front left wheel
    ctx.fillRect(-12, 11, 8, 3);  // Front right wheel
    ctx.fillRect(4, -14, 8, 3);   // Rear left wheel
    ctx.fillRect(4, 11, 8, 3);    // Rear right wheel

    // 5. White Canvas Canopy / Tarpaulin with Team Color Trim
    ctx.fillStyle = '#f1f5f9';
    ctx.beginPath();
    ctx.roundRect(-14, -9, 24, 18, 4);
    ctx.fill();

    ctx.strokeStyle = this.teamColors.main;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Powder Keg & Ammunition Icon
    ctx.fillStyle = this.teamColors.accent;
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('📦', -2, 0);

    // Flagpole & Banner
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-10, -8);
    ctx.lineTo(-10, -22);
    ctx.stroke();

    ctx.fillStyle = this.teamColors.flag;
    ctx.fillRect(-10, -22, 10, 7);

    ctx.restore();

    // Health and Supply Gauges (Screen upright above wagon)
    const barW = 38;
    const barH = 4;
    const barX = this.x - barW * 0.5;
    const barY = this.y - 30;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
    ctx.fillRect(barX - 1, barY - 1, barW + 2, barH * 2 + 3);

    // Health (Green)
    const hpPct = Math.max(0, this.health / this.maxHealth);
    ctx.fillStyle = hpPct > 0.4 ? '#22c55e' : '#ef4444';
    ctx.fillRect(barX, barY, barW * hpPct, barH);

    // Supplies Remaining (Amber)
    const suppPct = Math.max(0, this.suppliesRemaining / 4000);
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(barX, barY + barH + 1, barW * suppPct, barH - 1);

    // Label
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 8.5px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(this.team === 0 ? 'Bagajes & Pólvora' : 'Convoy Enemigo', this.x, barY - 4);
  }
}

class StrategicCapturePoint {
  constructor(id, name, x, y, type = 'hill') {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.type = type; // 'hill', 'bridge', 'crossroad', 'camp'
    this.radius = 70; // Capture zone radius

    this.controllingTeam = null; // null = neutral, 0 = Blue, 1 = Red
    this.captureProgress = 0; // -100 (Full Red) to +100 (Full Blue)
    this.cpBonus = 1.2; // Extra Command Points per second when held

    this.animPulse = Math.random() * Math.PI * 2;
  }

  update(dt, units) {
    this.animPulse += dt * 2.0;

    // Count presence of living units inside radius
    let blueWeight = 0;
    let redWeight = 0;

    units.forEach(u => {
      if (!u.alive || u.isRouting) return;
      const d = Math.hypot(u.x - this.x, u.y - this.y);
      if (d <= this.radius + u.radius) {
        const soldierFactor = (u.currentSoldiers || 20) * 0.05;
        if (u.team === 0) blueWeight += soldierFactor;
        else if (u.team === 1) redWeight += soldierFactor;
      }
    });

    const netCaptureSpeed = 12 * dt;

    if (blueWeight > redWeight) {
      this.captureProgress = Math.min(100, this.captureProgress + netCaptureSpeed);
    } else if (redWeight > blueWeight) {
      this.captureProgress = Math.max(-100, this.captureProgress - netCaptureSpeed);
    }

    if (this.captureProgress >= 70) {
      this.controllingTeam = 0;
    } else if (this.captureProgress <= -70) {
      this.controllingTeam = 1;
    } else if (Math.abs(this.captureProgress) < 20) {
      this.controllingTeam = null; // Neutralized
    }
  }

  render(ctx) {
    ctx.save();

    // Base Zone Circle with pulsing outline
    const pulseR = this.radius + Math.sin(this.animPulse) * 3;
    let zoneColor = 'rgba(148, 163, 184, 0.12)';
    let strokeColor = 'rgba(148, 163, 184, 0.4)';

    if (this.controllingTeam === 0) {
      zoneColor = 'rgba(59, 130, 246, 0.15)';
      strokeColor = '#3b82f6';
    } else if (this.controllingTeam === 1) {
      zoneColor = 'rgba(239, 68, 68, 0.15)';
      strokeColor = '#ef4444';
    }

    ctx.fillStyle = zoneColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.arc(this.x, this.y, pulseR, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Central Flagstaff & Plaque
    ctx.fillStyle = '#0f172a';
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Capture Progress Ring
    const progressAngle = (Math.abs(this.captureProgress) / 100) * Math.PI * 2;
    ctx.strokeStyle = this.captureProgress >= 0 ? '#3b82f6' : '#ef4444';
    ctx.lineWidth = 3.0;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 17, -Math.PI * 0.5, -Math.PI * 0.5 + progressAngle);
    ctx.stroke();

    // Icon / Emblem
    ctx.font = '13px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let icon = '🚩';
    if (this.type === 'hill') icon = '⛰️';
    else if (this.type === 'bridge') icon = '🌉';
    else if (this.type === 'crossroad') icon = '⚔️';
    else if (this.type === 'camp') icon = '🏕️';
    ctx.fillText(icon, this.x, this.y);

    // Objective Label Plaque
    const labelW = Math.max(70, this.name.length * 6.5);
    ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1;
    ctx.fillRect(this.x - labelW * 0.5, this.y - 28, labelW, 14);
    ctx.strokeRect(this.x - labelW * 0.5, this.y - 28, labelW, 14);

    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 9px "Outfit", sans-serif';
    ctx.fillText(this.name, this.x, this.y - 20);

    ctx.restore();
  }
}

class SupplySystem {
  constructor(engine) {
    this.engine = engine;

    // Tactical Command Points (CP) for live reinforcements
    this.playerCP = 150;
    this.enemyCP = 150;
    this.maxCP = 300;
    this.baseCPRate = 1.5; // CP generated per second

    // Supply Trains (Mobile Logistical convoys)
    this.supplyTrains = [];

    // Strategic Capture Points
    this.capturePoints = [];

    // Unit supply state tracker { [unitId]: { isSupplied, distance, isolatedTimer } }
    this.unitSupplyStates = new Map();

    // Logistical failure sound cooldown
    this.alarmSoundCooldown = 0;

    // AI reinforcement thinking timer
    this.aiReinforceTimer = 8.0;

    this.initDefaultBattlefieldLogistics();
  }

  get commandPoints() {
    return this.playerCP;
  }

  set commandPoints(val) {
    this.playerCP = val;
  }

  initDefaultBattlefieldLogistics() {
    this.supplyTrains = [
      new SupplyTrain(1, 0, 220, 550),  // Player supply train in west reserve
      new SupplyTrain(2, 1, 1380, 550) // Enemy supply train in east reserve
    ];

    this.capturePoints = [
      new StrategicCapturePoint(1, 'Colina Central', 800, 320, 'hill'),
      new StrategicCapturePoint(2, 'Paso del Vado / Brecha', 800, 550, 'bridge'),
      new StrategicCapturePoint(3, 'Cruce del Parque', 800, 780, 'crossroad')
    ];
  }

  loadScenarioLogistics(mapData) {
    this.supplyTrains = [
      new SupplyTrain(1, 0, 220, 550),
      new SupplyTrain(2, 1, 1380, 550)
    ];

    this.capturePoints = [];

    // If scenario defines specific strategic camps, use them
    if (mapData && mapData.camps && mapData.camps.length > 0) {
      mapData.camps.forEach((c, idx) => {
        const cp = new StrategicCapturePoint(idx + 1, c.name || `Punto Estratégico ${idx + 1}`, c.x, c.y, 'camp');
        cp.controllingTeam = c.team;
        cp.captureProgress = c.team === 0 ? 100 : (c.team === 1 ? -100 : 0);
        this.capturePoints.push(cp);
      });
    } else {
      // Default strategic line across center
      this.capturePoints = [
        new StrategicCapturePoint(1, 'Cota de Artillería', 800, 300, 'hill'),
        new StrategicCapturePoint(2, 'Brecha / Cruce Central', 800, 550, 'bridge'),
        new StrategicCapturePoint(3, 'Flanco de Bosque', 800, 800, 'crossroad')
      ];
    }
  }

  update(dt, units) {
    if (!units) return;

    // 1. Update Supply Trains movement and health
    this.supplyTrains.forEach(st => st.update(dt));

    // 2. Update Capture Points & Calculate CP Income
    let playerHeldPoints = 0;
    let enemyHeldPoints = 0;

    this.capturePoints.forEach(cp => {
      cp.update(dt, units);
      if (cp.controllingTeam === 0) playerHeldPoints++;
      else if (cp.controllingTeam === 1) enemyHeldPoints++;
    });

    const playerCPGain = (this.baseCPRate + playerHeldPoints * 1.2) * dt;
    const enemyCPGain = (this.baseCPRate + enemyHeldPoints * 1.2) * dt;

    this.playerCP = Math.min(this.maxCP, this.playerCP + playerCPGain);
    this.enemyCP = Math.min(this.maxCP, this.enemyCP + enemyCPGain);

    if (this.alarmSoundCooldown > 0) this.alarmSoundCooldown -= dt;

    // 3. Evaluate Line of Supply (Raycast from units to nearest friendly supply train)
    units.forEach(u => {
      if (!u.alive) return;

      const friendlyTrain = this.supplyTrains.find(st => st.team === u.team && st.alive);
      let isSupplied = false;
      let dist = Infinity;

      if (friendlyTrain) {
        dist = Math.hypot(u.x - friendlyTrain.x, u.y - friendlyTrain.y);
        if (dist <= friendlyTrain.supplyRadius) {
          // Check raycast blockage: Is there any living enemy unit cutting the supply line?
          const isLineSevered = this._checkSupplyLineSevered(u, friendlyTrain, units);
          if (!isLineSevered) {
            isSupplied = true;
          }
        }
      }

      // Update unit internal supply status
      let state = this.unitSupplyStates.get(u.id);
      if (!state) {
        state = { isSupplied: true, isolatedTimer: 0, distance: dist };
        this.unitSupplyStates.set(u.id, state);
      }

      state.isSupplied = isSupplied;
      state.distance = dist;
      u.supplyStatus = isSupplied ? 'supplied' : 'isolated';

      if (isSupplied) {
        state.isolatedTimer = 0;
        // Gradual replenishment: recover ammo and fatigue when supplied
        if (u.ammo !== undefined && u.ammo < u.maxAmmo && Math.random() < dt * 0.35) {
          u.ammo = Math.min(u.maxAmmo, u.ammo + 2);
        }
        if (u.fatigue > 0) {
          u.fatigue = Math.max(0, u.fatigue - 3.5 * dt);
        }
      } else {
        // Isolated unit suffers supply depletion
        state.isolatedTimer += dt;
        u.supplyLossTimer = state.isolatedTimer;

        if (state.isolatedTimer > 10.0) {
          // Falla de Suministro: Morale decay and fatigue stress
          u.morale = Math.max(5, u.morale - 0.7 * dt);
          u.fatigue = Math.min(100, u.fatigue + 1.2 * dt);

          if (u.team === 0 && this.alarmSoundCooldown <= 0 && Math.random() < 0.05) {
            this.engine.addLogMessage(`⚠️ ¡Falla de Suministros en ${u.def.name}! Cortada la línea con el convoy.`);
            if (this.engine.sound) this.engine.sound.playAlarm();
            this.alarmSoundCooldown = 8.0;
          }
        }
      }
    });

    // 4. AI Reinforcement Logic
    this.aiReinforceTimer -= dt;
    if (this.aiReinforceTimer <= 0) {
      this.aiReinforceTimer = 5.0 + Math.random() * 4.0;
      this._updateAIReinforcements(units);
    }
  }

  _checkSupplyLineSevered(unit, train, allUnits) {
    const ux = unit.x, uy = unit.y;
    const tx = train.x, ty = train.y;
    const enemyTeam = unit.team === 0 ? 1 : 0;

    for (let i = 0; i < allUnits.length; i++) {
      const enemy = allUnits[i];
      if (enemy.team !== enemyTeam || !enemy.alive) continue;

      // Distance from enemy to segment (tx, ty) -> (ux, uy)
      const d = this._distToSegment(enemy.x, enemy.y, tx, ty, ux, uy);
      if (d < enemy.radius + 18) {
        return true; // Enemy brigade sits on the supply line!
      }
    }
    return false;
  }

  _distToSegment(px, py, x1, y1, x2, y2) {
    const l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (l2 === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
  }

  _updateAIReinforcements(units) {
    if (this.enemyCP < 90) return;

    // Count living enemy forces
    const enemyUnits = units.filter(u => u.team === 1 && u.alive);
    if (enemyUnits.length < 9) {
      // Pick suitable reinforcement unit for enemy era
      const eraKey = this.engine.currentEraKey || 'renaissance';
      const erasObj = typeof ERAS !== 'undefined' ? ERAS : (globalThis.ERAS || {});
      const eraUnits = erasObj[eraKey] ? erasObj[eraKey].units : null;
      if (!eraUnits) return;

      const keys = Object.keys(eraUnits);
      const chosenKey = keys[Math.floor(Math.random() * keys.length)];
      const cost = eraUnits[chosenKey].cost ? Math.floor(eraUnits[chosenKey].cost * 0.35) : 85;

      if (this.enemyCP >= cost) {
        this.enemyCP -= cost;
        this.callReinforcement(1, chosenKey);
        this.engine.addLogMessage(`🚨 ¡Refuerzos hostiles avistados por el flanco oriental!`);
      }
    }
  }

  callReinforcement(team, unitKey) {
    const eraKey = this.engine.currentEraKey || 'renaissance';
    const erasObj = typeof ERAS !== 'undefined' ? ERAS : (globalThis.ERAS || {});
    let uDef = null;

    if (erasObj[eraKey] && erasObj[eraKey].units[unitKey]) {
      uDef = erasObj[eraKey].units[unitKey];
    } else {
      for (const k of Object.keys(erasObj)) {
        if (erasObj[k].units && erasObj[k].units[unitKey]) {
          uDef = erasObj[k].units[unitKey];
          break;
        }
      }
    }

    if (!uDef) return null;

    const isPlayer = team === 0;
    const spawnX = isPlayer ? 100 : 1500;
    const spawnY = 350 + Math.random() * 380;
    const angle = isPlayer ? 0 : Math.PI;

    const newUnit = new Unit(this.engine.nextUnitId++, uDef, team, spawnX, spawnY, angle);

    // Give marching order forward towards center line
    const targetX = isPlayer ? 550 + Math.random() * 100 : 1050 - Math.random() * 100;
    newUnit.setTarget(targetX, spawnY);
    newUnit.setFormation('column'); // Enters in marching column!

    this.engine.units.push(newUnit);

    if (isPlayer) {
      this.engine.addLogMessage(`🎺 ¡Refuerzo desplegado: ${uDef.name} entra en el campo de batalla!`);
      if (this.engine.sound) this.engine.sound.playTrumpetCall();
    }

    return newUnit;
  }

  render(ctx) {
    if (!ctx) return;

    // 1. Render Capture Points
    this.capturePoints.forEach(cp => cp.render(ctx));

    // 2. Render Logistical Supply Lines between units and Supply Train
    ctx.save();
    this.engine.units.forEach(u => {
      if (!u.alive || u.isRouting) return;

      const friendlyTrain = this.supplyTrains.find(st => st.team === u.team && st.alive);
      if (!friendlyTrain) return;

      const state = this.unitSupplyStates.get(u.id);
      const isSupplied = state ? state.isSupplied : false;

      // Draw dashed supply line only if unit is selected or close to being isolated
      if (u.selected || (state && state.isolatedTimer > 2.0)) {
        ctx.beginPath();
        ctx.moveTo(friendlyTrain.x, friendlyTrain.y);
        ctx.lineTo(u.x, u.y);

        if (isSupplied) {
          ctx.strokeStyle = u.team === 0 ? 'rgba(52, 211, 153, 0.45)' : 'rgba(248, 113, 113, 0.35)';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([6, 6]);
        } else {
          // Severed line in bright pulsing red
          ctx.strokeStyle = 'rgba(239, 68, 68, 0.85)';
          ctx.lineWidth = 2.2;
          ctx.setLineDash([4, 4]);
        }
        ctx.stroke();
      }
    });
    ctx.setLineDash([]);
    ctx.restore();

    // 3. Render Supply Trains
    this.supplyTrains.forEach(st => st.render(ctx, st.selected));
  }
}

if (typeof window !== 'undefined') {
  window.SupplyTrain = SupplyTrain;
  window.StrategicCapturePoint = StrategicCapturePoint;
  window.SupplySystem = SupplySystem;
}
if (typeof globalThis !== 'undefined') {
  globalThis.SupplyTrain = SupplyTrain;
  globalThis.StrategicCapturePoint = StrategicCapturePoint;
  globalThis.SupplySystem = SupplySystem;
}
