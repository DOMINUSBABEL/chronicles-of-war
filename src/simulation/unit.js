/**
 * Chronicles of War - Unit & Formation Entity
 * Dual-layer simulation: Outer tactical military block + Internal rank-and-file micro-soldiers
 * Features anatomical soldier rendering, forward-heading weapon alignment, command groups,
 * and dynamic pike stances (sloped on march, leveled horizontally in guard/combat).
 */

class MicroSoldier {
  constructor(rank, file, totalRanks, totalFiles, unit) {
    this.rank = rank; // 0 = front rank, 1 = second rank, etc.
    this.file = file; // 0 = left file, totalFiles - 1 = right file
    this.totalRanks = totalRanks;
    this.totalFiles = totalFiles;
    this.unit = unit;

    this.alive = true;
    this.relForward = 0; // Distance forward along unit heading
    this.relLateral = 0; // Distance lateral to unit right flank
    this.worldX = 0;
    this.worldY = 0;
    this.facingOffset = 0; // Local angle offset (for square formation faces)

    this.state = 'idle'; // 'idle', 'marching', 'firing', 'reloading', 'bracing', 'melee'
    this.stepPhase = Math.random() * Math.PI * 2;
    this.jitterX = (Math.random() - 0.5) * 1.5;
    this.jitterY = (Math.random() - 0.5) * 1.5;

    // Special regiment roles in front-center rank
    const centerFile = Math.floor(totalFiles / 2);
    this.isOfficer = (rank === 0 && file === centerFile);
    this.isStandardBearer = (rank === 0 && file === centerFile - 1);
    this.isDrummer = (rank === 0 && file === centerFile + 1);

    // Tercio hybrid role: center = pikes, outer flanks = arquebusiers
    this.isTercioArquebus = false;
    if (unit.def.weaponType === 'tercio_hybrid') {
      const flankWidth = Math.max(2, Math.floor(totalFiles * 0.28));
      this.isTercioArquebus = (file < flankWidth || file >= totalFiles - flankWidth);
    }

    this.muzzleFlashTimer = 0;
  }

  updateLocalPos(spacingRank, spacingFile, formationType) {
    if (formationType === 'line') {
      // Front rank is rank 0 (+relForward), rear rank is totalRanks - 1 (-relForward)
      this.relForward = ((this.totalRanks - 1) / 2 - this.rank) * spacingRank;
      this.relLateral = (this.file - (this.totalFiles - 1) / 2) * spacingFile;
      this.facingOffset = 0;
    } else if (formationType === 'column') {
      // Deep marching column: narrow frontage, deep files
      this.relForward = ((this.totalFiles - 1) / 2 - this.file) * spacingRank;
      this.relLateral = (this.rank - (this.totalRanks - 1) / 2) * spacingFile;
      this.facingOffset = 0;
    } else if (formationType === 'square') {
      // Hollow anti-cavalry square perimeter
      const perimeterIndex = this.rank * this.totalFiles + this.file;
      const totalPerimeter = this.totalRanks * this.totalFiles;
      const angle = (perimeterIndex / totalPerimeter) * Math.PI * 2;
      const sqRadius = Math.max(16, (this.totalFiles * spacingFile) * 0.38);

      this.relForward = Math.cos(angle) * sqRadius;
      this.relLateral = Math.sin(angle) * sqRadius;
      // In square formation, each soldier faces outwards along radial vector
      this.facingOffset = angle;
    } else {
      // Skirmish loose cloud
      this.relForward = ((this.totalRanks - 1) / 2 - this.rank) * (spacingRank * 1.6) + this.jitterX * 4;
      this.relLateral = (this.file - (this.totalFiles - 1) / 2) * (spacingFile * 1.6) + this.jitterY * 4;
      this.facingOffset = 0;
    }
  }

  updateWorldPos(unitX, unitY, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    // Standard 2D rotation:
    // Forward vector is (cos, sin)
    // Right flank vector is (-sin, cos)
    this.worldX = unitX + (this.relForward * cos - this.relLateral * sin) + this.jitterX;
    this.worldY = unitY + (this.relForward * sin + this.relLateral * cos) + this.jitterY;
  }
}

class Unit {
  constructor(id, unitDef, team, x, y, angle = 0) {
    this.id = id;
    this.def = unitDef;
    this.team = team; // 0 = Blue/Player, 1 = Red/Enemy
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.targetAngle = angle;
    this.targetX = x;
    this.targetY = y;
    this.waypoints = [];

    this.alive = true;
    this.selected = false;
    this.maxSoldiers = unitDef.soldierCount;
    this.currentSoldiers = this.maxSoldiers;

    this.maxHealth = unitDef.health * this.maxSoldiers;
    this.health = this.maxHealth;
    this.maxMorale = unitDef.morale;
    this.morale = this.maxMorale;
    this.isRouting = false;

    this.speed = unitDef.speed;
    this.meleeDamage = unitDef.meleeDamage;
    this.rangedDamage = unitDef.rangedDamage;
    this.range = unitDef.range;
    this.reloadTime = unitDef.reloadTime || 4.0;
    this.reloadTimer = Math.random() * 2.0;

    this.currentFormation = 'line'; // 'line', 'column', 'square', 'skirmish'
    // Spacing: spacingRank is depth between rows, spacingFile is width between columns
    this.spacingRank = unitDef.category === 'cavalry' ? 14 : 7;
    this.spacingFile = unitDef.category === 'cavalry' ? 11 : 6;

    // Physical knockback & rumble
    this.knockX = 0;
    this.knockY = 0;
    this.shakeX = 0;
    this.shakeY = 0;
    this.inCombat = false;
    this.outOfCombatTimer = 10;
    this.isWater = false;
    this.isNearCamp = false;

    // Ammunition (War of Dots & Wargame logistics)
    this.ammo = unitDef.rangedDamage > 0 ? (unitDef.category === 'artillery' ? 30 : 60) : 0;
    this.maxAmmo = this.ammo;

    // Fatigue (Total War & Wargame: 0 = Fresco, 100 = Exhausto)
    this.fatigue = 0;

    // Supply Logistics
    this.supplyStatus = 'supplied'; // 'supplied', 'contested', 'isolated'
    this.supplyLossTimer = 0;

    // Combat telemetry
    this.kills = 0;
    this.losses = 0;

    // Active tactical doctrine
    this.activeDoctrine = 'none'; // 'pike_wall', 'charge', 'square', 'loose', 'volley'
    this.isCharging = false;
    this.chargeDuration = 0;
    this.elevationLevel = 0;
    this.inForest = false;

    // Animation & wind timer
    this.animTime = Math.random() * 10;

    // Abilities & stances
    this.activeStance = null;
    this.pilumVolleysLeft = unitDef.maxVolleys || 0;
    this.holdFire = false; // Rule of engagement: Hold fire to preserve ammo or ambush
    this.skirmishStance = false; // Rule of engagement: Keep distance from approaching melee enemies

    // Create micro-soldiers
    this.soldiers = [];
    const totalFiles = unitDef.cols || 12;
    const totalRanks = unitDef.rows || 4;
    this.totalFiles = totalFiles;
    this.totalRanks = totalRanks;

    for (let r = 0; r < totalRanks; r++) {
      for (let f = 0; f < totalFiles; f++) {
        if (this.soldiers.length < this.maxSoldiers) {
          const s = new MicroSoldier(r, f, totalRanks, totalFiles, this);
          s.updateLocalPos(this.spacingRank, this.spacingFile, this.currentFormation);
          s.updateWorldPos(this.x, this.y, this.angle);
          this.soldiers.push(s);
        }
      }
    }

    // Bounding radius for collision and selection
    this.radius = Math.max(18, (totalFiles * this.spacingFile) * 0.52);

    // Team color palette (Rich heraldic & military contrast)
    this.teamColors = this.team === 0
      ? {
          main: '#1d4ed8',       // Royal blue
          accent: '#fbbf24',     // Gold
          border: '#60a5fa',     // Light azure
          bg: 'rgba(30, 58, 138, 0.55)',
          flag: '#3b82f6',
          text: '#f8fafc',
          trim: '#fef08a'
        }
      : {
          main: '#b91c1c',       // Crimson red
          accent: '#f59e0b',     // Amber
          border: '#f87171',     // Salmon red
          bg: 'rgba(127, 29, 29, 0.55)',
          flag: '#ef4444',
          text: '#fef2f2',
          trim: '#fed7aa'
        };
  }

  setTarget(x, y, addWaypoint = false) {
    if (this.isRouting) return;
    if (addWaypoint) {
      this.waypoints.push({ x, y });
    } else {
      this.waypoints = [];
      this.targetX = x;
      this.targetY = y;
      const dx = x - this.x;
      const dy = y - this.y;
      if (Math.hypot(dx, dy) > 8) {
        this.targetAngle = Math.atan2(dy, dx);
      }
    }
  }

  setFormation(formation) {
    if (this.isRouting) return;
    this.currentFormation = formation;
    for (let i = 0; i < this.soldiers.length; i++) {
      this.soldiers[i].updateLocalPos(this.spacingRank, this.spacingFile, formation);
    }
  }

  toggleSquareFormation() {
    if (this.currentFormation === 'square') {
      this.setFormation('line');
      this.activeStance = null;
      this.activeDoctrine = 'none';
    } else {
      this.setFormation('square');
      this.activeStance = 'square';
      this.activeDoctrine = 'square';
    }
  }

  setDoctrine(doctrineKey) {
    if (this.isRouting) return;
    this.activeDoctrine = doctrineKey;

    if (doctrineKey === 'pike_wall') {
      this.speed = 0;
      this.activeStance = 'pike_wall';
    } else if (doctrineKey === 'charge') {
      this.isCharging = true;
      this.chargeDuration = 7.0;
      this.speed = this.def.speed * 1.5;
      this.activeStance = 'charge';
    } else if (doctrineKey === 'square') {
      this.setFormation('square');
      this.activeStance = 'square';
      this.speed = this.def.speed * 0.25;
    } else if (doctrineKey === 'loose') {
      this.setFormation('skirmish');
      this.activeStance = 'loose';
      this.speed = this.def.speed * 0.9;
    } else if (doctrineKey === 'volley') {
      this.activeStance = 'volley';
      this.speed = this.def.speed * 0.7;
    } else {
      this.activeDoctrine = 'none';
      this.activeStance = null;
      this.isCharging = false;
      this.speed = this.def.speed;
      this.setFormation('line');
    }
  }

  update(dt, map, allUnits, ballistics, particles, audio) {
    if (!this.alive) return;

    this.animTime += dt;

    // 0. Charge Duration & Speed Restoration
    if (this.isCharging) {
      this.chargeDuration -= dt;
      if (this.chargeDuration <= 0) {
        this.isCharging = false;
        this.activeDoctrine = 'none';
        this.speed = this.def.speed;
        this.fatigue = Math.min(100, this.fatigue + 20);
      }
    }

    // 1. Terrain Query (War of Dots & Empire Earth terrain rules)
    let terrainSpeedMult = 1.0;
    this.inForest = false;
    this.elevationLevel = 0;

    if (map) {
      const terrain = map.getTerrainAt(this.x, this.y);
      if (terrain === 'water') {
        this.isWater = true;
        terrainSpeedMult = 0.45;
      } else {
        this.isWater = false;
        if (terrain === 'forest') {
          this.inForest = true;
          terrainSpeedMult = (this.def.category === 'cavalry' || this.def.category === 'artillery') ? 0.4 : 0.85;
        } else if (terrain === 'mud') {
          terrainSpeedMult = 0.55;
        } else if (terrain === 'hill') {
          this.elevationLevel = 1.5;
          terrainSpeedMult = 0.85;
        }
      }
      this.isNearCamp = map.isNearCamp(this.x, this.y, this.team);
    }

    // 2. Knockback dissipation
    this.x += this.knockX * dt;
    this.y += this.knockY * dt;
    this.knockX *= Math.pow(0.85, dt * 60);
    this.knockY *= Math.pow(0.85, dt * 60);

    // 3. Rumble / Shake calculation during melee
    if (this.inCombat) {
      this.shakeX = (Math.random() - 0.5) * 3.5;
      this.shakeY = (Math.random() - 0.5) * 3.5;
      this.outOfCombatTimer = 0;
      this.fatigue = Math.min(100, this.fatigue + 2.5 * dt);
    } else {
      this.shakeX = 0;
      this.shakeY = 0;
      this.outOfCombatTimer += dt;
      // Recover fatigue when resting (accelerated if supplied)
      const recoveryRate = this.supplyStatus === 'supplied' ? 4.2 : 1.5;
      this.fatigue = Math.max(0, this.fatigue - recoveryRate * dt);
    }

    // 4. Out of combat health and morale regeneration
    if (this.outOfCombatTimer > 4.0 && !this.isRouting) {
      const healRate = this.isNearCamp ? 2.5 : 1.0;
      this.morale = Math.min(this.maxMorale, this.morale + 3.5 * healRate * dt);
      this.health = Math.min(this.maxHealth, this.health + 8.0 * healRate * dt);
      this.currentSoldiers = Math.max(1, Math.ceil((this.health / this.maxHealth) * this.maxSoldiers));
    }

    // 5. Morale and Rout checks
    if (this.morale <= 0 && !this.isRouting) {
      this.isRouting = true;
      this.activeStance = null;
      this.activeDoctrine = 'none';
      const enemy = this._findNearestEnemy(allUnits);
      if (enemy) {
        const fleeAngle = Math.atan2(this.y - enemy.y, this.x - enemy.x);
        this.targetX = this.x + Math.cos(fleeAngle) * 600;
        this.targetY = this.y + Math.sin(fleeAngle) * 600;
      }
    }

    // 6. Movement & Fatigue Effects
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    const distToTarget = Math.hypot(dx, dy);

    let isMoving = false;
    const fatigueFactor = this.fatigue >= 75 ? 0.60 : (this.fatigue >= 50 ? 0.80 : (this.fatigue >= 25 ? 0.95 : 1.0));

    if (distToTarget > 6) {
      isMoving = true;
      let effectiveSpeed = this.speed * terrainSpeedMult * fatigueFactor;
      if (this.isRouting) effectiveSpeed *= 1.25;
      if (this.activeDoctrine === 'pike_wall') effectiveSpeed = 0;
      else if (this.activeDoctrine === 'square') effectiveSpeed *= 0.25;

      const moveStep = Math.min(distToTarget, effectiveSpeed * dt);
      const moveAngle = Math.atan2(dy, dx);

      this.x += Math.cos(moveAngle) * moveStep;
      this.y += Math.sin(moveAngle) * moveStep;

      // Add movement fatigue
      this.fatigue = Math.min(100, this.fatigue + (this.isCharging ? 4.8 : 1.2) * dt);

      // When moving, target facing aligns with direction of travel
      this.targetAngle = moveAngle;

      // Smooth angle interpolation toward target facing (Deterministic O(1) calculation)
      const angleDiff = Math.atan2(Math.sin(this.targetAngle - this.angle), Math.cos(this.targetAngle - this.angle));
      this.angle += angleDiff * Math.min(1.0, 6.0 * dt);
    } else {
      if (this.waypoints.length > 0) {
        const next = this.waypoints.shift();
        this.targetX = next.x;
        this.targetY = next.y;
        this.targetAngle = Math.atan2(next.y - this.y, next.x - this.x);
      }
    }

    // 7. Combat & Target Engagement
    this.inCombat = false;
    const nearestEnemy = this._findNearestEnemy(allUnits);

    if (nearestEnemy && !this.isRouting) {
      const distToEnemy = Math.hypot(nearestEnemy.x - this.x, nearestEnemy.y - this.y);
      const enemyAngle = Math.atan2(nearestEnemy.y - this.y, nearestEnemy.x - this.x);

      // Melee Range
      const meleeEngagementDist = this.radius + nearestEnemy.radius + 8;
      if (distToEnemy <= meleeEngagementDist) {
        this.inCombat = true;
        const combatAngleDiff = Math.atan2(Math.sin(enemyAngle - this.angle), Math.cos(enemyAngle - this.angle));
        this.angle += combatAngleDiff * Math.min(1.0, 8.0 * dt);

        this._resolveMeleeCombat(nearestEnemy, dt, particles, audio);
      }
      // Ranged Combat
      else if (this.range > 0 && distToEnemy <= this.range && !isMoving) {
        // Skirmish mode: if enemy is closing in (< 45% range), back away while firing
        if (this.skirmishStance && distToEnemy < this.range * 0.45) {
          const retreatAngle = Math.atan2(this.y - nearestEnemy.y, this.x - nearestEnemy.x);
          this.targetX = this.x + Math.cos(retreatAngle) * 70;
          this.targetY = this.y + Math.sin(retreatAngle) * 70;
        }

        const combatAngleDiff = Math.atan2(Math.sin(enemyAngle - this.angle), Math.cos(enemyAngle - this.angle));
        this.angle += combatAngleDiff * Math.min(1.0, 5.0 * dt);

        // Fire only if hold fire is not active
        if (!this.holdFire) {
          const reloadFactor = this.fatigue >= 75 ? 1.5 : (this.fatigue >= 50 ? 1.2 : 1.0);
          this.reloadTimer -= dt;
          if (this.reloadTimer <= 0) {
            this._fireRangedVolley(nearestEnemy, ballistics, particles, audio);
            this.reloadTimer = (this.reloadTime * reloadFactor) + (Math.random() - 0.5) * 0.6;
          }
        }
      }
    }

    // 8. Update Micro-Soldiers (World Positions & Animation States)
    for (let i = 0; i < this.soldiers.length; i++) {
      const s = this.soldiers[i];
      s.alive = i < this.currentSoldiers;
      if (s.alive) {
        if (s.muzzleFlashTimer > 0) s.muzzleFlashTimer -= dt;
        s.updateWorldPos(this.x + this.shakeX, this.y + this.shakeY, this.angle);
        if (isMoving) {
          s.state = 'marching';
          s.stepPhase += dt * (this.speed * 0.18);
        } else if (this.inCombat) {
          s.state = 'melee';
        } else {
          s.state = 'idle';
        }
      }
    }
  }

  _findNearestEnemy(allUnits) {
    let nearest = null;
    let minDist = Infinity;
    for (let i = 0; i < allUnits.length; i++) {
      const other = allUnits[i];
      if (other.team === this.team || !other.alive) continue;
      const d = Math.hypot(other.x - this.x, other.y - this.y);
      if (d < minDist) {
        minDist = d;
        nearest = other;
      }
    }
    return nearest;
  }

  _resolveMeleeCombat(enemy, dt, particles, audio) {
    // Damage scales with remaining soldiers and unit category advantage
    let damageFactor = this.meleeDamage * (this.currentSoldiers / this.maxSoldiers);

    // Tactical Doctrines & Category Modifiers
    if (this.def.category === 'pikes' && enemy.def.category === 'cavalry') {
      damageFactor *= (this.activeDoctrine === 'pike_wall' ? 3.5 : 2.2);
    } else if (this.def.category === 'cavalry' && enemy.def.category === 'ranged') {
      damageFactor *= 1.8;
    }

    // Cavalry Shock Charge Impact
    if (this.isCharging) {
      damageFactor *= 2.2;
      enemy.morale -= 16.0 * dt;
      const chAngle = Math.atan2(enemy.y - this.y, enemy.x - this.x);
      enemy.knockX += Math.cos(chAngle) * 35;
      enemy.knockY += Math.sin(chAngle) * 35;
      this.isCharging = false;
      this.activeDoctrine = 'none';
      this.speed = this.def.speed;
      this.fatigue = Math.min(100, this.fatigue + 20);
    }

    // Enemy in square formation resists cavalry
    if (enemy.activeDoctrine === 'square' && this.def.category === 'cavalry') {
      damageFactor *= 0.40;
    }

    const dps = damageFactor * 1.8;
    const prevEnemySoldiers = enemy.currentSoldiers;
    enemy.receiveDamage(dps * dt, this, particles, audio);
    if (enemy.currentSoldiers < prevEnemySoldiers) {
      this.kills += (prevEnemySoldiers - enemy.currentSoldiers);
    }

    // Apply reciprocal knockback
    const angle = Math.atan2(enemy.y - this.y, enemy.x - this.x);
    enemy.knockX += Math.cos(angle) * 12 * dt;
    enemy.knockY += Math.sin(angle) * 12 * dt;

    if (particles && Math.random() < 0.25) {
      const clashX = (this.x + enemy.x) * 0.5 + (Math.random() - 0.5) * 20;
      const clashY = (this.y + enemy.y) * 0.5 + (Math.random() - 0.5) * 20;
      particles.emitClashImpact(clashX, clashY);
    }

    if (audio && Math.random() < 0.12) {
      const pan = (this.x / 1600) * 2 - 1;
      audio.playSteelClash(pan);
    }
  }

  _fireRangedVolley(target, ballistics, particles, audio) {
    if (!ballistics) return;

    // Check Ammunition
    if (this.ammo !== undefined && this.ammo <= 0) {
      if (particles && Math.random() < 0.2) {
        particles.emitFloatingText(this.x, this.y - 20, '¡SIN MUNICIÓN!', '#ef4444');
      }
      return;
    }

    // Consume Ammo
    if (this.ammo !== undefined) {
      const ammoCost = this.def.category === 'artillery' ? 3 : (this.def.weaponType === 'bow' ? 1 : 2);
      this.ammo = Math.max(0, this.ammo - ammoCost);
    }

    const fireAngle = Math.atan2(target.y - this.y, target.x - this.x);
    const pan = (this.x / 1600) * 2 - 1;

    // Elevation and Forest Cover Modifiers
    let damageBonus = 1.0;
    if (this.elevationLevel > (target.elevationLevel || 0)) damageBonus *= 1.25;
    if (target.inForest) damageBonus *= 0.60; // 40% tree trunk protection

    if (this.def.category === 'artillery') {
      // Artillery cannonball shot
      ballistics.fireCannon(this.x, this.y, fireAngle, this.range, this.team, this, this.rangedDamage * damageBonus);
      if (particles) particles.emitCannonSmoke(this.x, this.y, fireAngle);
      if (audio) audio.playCannon(pan);

      // Canister shot if enemy within 140px
      const dist = Math.hypot(target.x - this.x, target.y - this.y);
      if (dist < 140) {
        for (let i = 0; i < 4; i++) {
          ballistics.fireCanister(this.x, this.y, fireAngle, this.team, this, this.rangedDamage * 0.35 * damageBonus);
        }
      }
    } else if (this.def.weaponType === 'bow') {
      // Archery volley
      const shotCount = Math.min(14, Math.ceil(this.currentSoldiers * 0.35));
      for (let i = 0; i < shotCount; i++) {
        const soldier = this.soldiers[Math.floor(Math.random() * this.currentSoldiers)];
        const sx = soldier ? soldier.worldX : this.x;
        const sy = soldier ? soldier.worldY : this.y;
        ballistics.fireArrow(sx, sy, target.x, target.y, this.team, this, this.rangedDamage * damageBonus);
      }
      if (audio) audio.playArrowVolley(pan);
    } else {
      // Gunpowder Volley (Arquebus, Musket, Tercio Sleeves)
      const firingSoldiers = Math.min(18, Math.ceil(this.currentSoldiers * 0.45));
      for (let i = 0; i < firingSoldiers; i++) {
        const s = this.soldiers[i % this.currentSoldiers];
        const sx = s ? s.worldX : this.x;
        const sy = s ? s.worldY : this.y;
        if (s) s.muzzleFlashTimer = 0.18; // Trigger muzzle flash!
        const spread = this.def.weaponType === 'rifle' ? 0.08 : 0.25;
        ballistics.fireMusket(sx, sy, fireAngle, this.range, spread, this.team, this, this.rangedDamage * damageBonus);
      }

      if (particles) {
        particles.emitMusketSmoke(this.x, this.y, fireAngle, 0.45);
      }
      if (audio) {
        audio.playMusketVolley(pan, Math.min(8, firingSoldiers));
      }
    }

    // Volley Doctrine grants massive initial morale suppression
    target.morale -= (this.activeDoctrine === 'volley' ? 7.5 : 2.5);
  }

  receiveDamage(amount, attacker, particles, audio) {
    if (!this.alive) return;

    // Flanking & Rear Attack Detection (Total War depth)
    if (attacker && this.activeDoctrine !== 'square') {
      const attackVecX = attacker.x - this.x;
      const attackVecY = attacker.y - this.y;
      const attackAngle = Math.atan2(attackVecY, attackVecX);
      const angleDiff = Math.abs(Math.atan2(Math.sin(this.angle - attackAngle), Math.cos(this.angle - attackAngle)));

      if (angleDiff > 2.2) {
        // Rear Attack: +60% damage, +95% morale shock!
        amount *= 1.6;
        this.morale -= amount * 0.95;
        if (particles && Math.random() < 0.35) {
          particles.emitFloatingText(this.x, this.y - 22, '¡RETAGUARDIA!', '#ef4444');
        }
      } else if (angleDiff > 1.2) {
        // Flank Attack: +30% damage, +55% morale shock!
        amount *= 1.3;
        this.morale -= amount * 0.55;
        if (particles && Math.random() < 0.25) {
          particles.emitFloatingText(this.x, this.y - 22, '¡FLANQUEADO!', '#f59e0b');
        }
      }
    }

    // Loose formation reduces projectile casualties
    if (this.activeDoctrine === 'loose') {
      amount *= 0.55;
    }

    this.health -= amount;
    this.morale -= amount * 0.25;
    this.losses += Math.round(amount / (this.def.health || 100));

    const newSoldierCount = Math.max(0, Math.ceil((this.health / this.maxHealth) * this.maxSoldiers));
    if (newSoldierCount < this.currentSoldiers) {
      const fallenCount = this.currentSoldiers - newSoldierCount;
      const engine = (typeof window !== 'undefined' && window.game) ? window.game : null;

      for (let k = 0; k < fallenCount; k++) {
        const fallenIdx = this.currentSoldiers - 1 - k;
        const s = this.soldiers[fallenIdx];
        if (s) {
          if (particles) particles.emitBloodLoss(s.worldX, s.worldY);
          // Register persistent fallen soldier on the battlefield!
          if (engine && engine.battlefieldCasualties) {
            engine.battlefieldCasualties.push({
              x: s.worldX,
              y: s.worldY,
              angle: this.angle + (Math.random() - 0.5) * 1.5,
              team: this.team,
              color: this.teamColors.main,
              weaponType: this.def.weaponType,
              life: 120.0
            });
          }
        }
      }
      this.currentSoldiers = newSoldierCount;
    }

    if (this.health <= 0) {
      this.alive = false;
      this.health = 0;
      this.currentSoldiers = 0;
    }
  }

  receiveProjectileHit(projectile, particles, audio) {
    if (!this.alive) return false;
    const armor = this.def.armor || 0;
    const finalDamage = projectile.damage * (1.0 - armor);
    this.receiveDamage(finalDamage, projectile.owner, particles, audio);
    if (particles) {
      particles.emitClashImpact(projectile.x, projectile.y);
    }
    return true;
  }

  // --- RENDERING ---

  render(ctx) {
    if (!this.alive) return;

    ctx.save();

    // 1. Render Micro-Soldiers
    for (let i = 0; i < this.soldiers.length; i++) {
      const s = this.soldiers[i];
      if (!s.alive) continue;
      this._renderMicroSoldier(ctx, s);
    }

    // 2. Render Outer Tactical Military Block (SandRhoman History Styling)
    this._renderTacticalBlock(ctx);

    // 3. Render Health & Morale Gauges
    this._renderHealthAndMorale(ctx);

    ctx.restore();
  }

  _renderMicroSoldier(ctx, s) {
    ctx.save();
    ctx.translate(s.worldX, s.worldY);

    // Rotate to facing heading: unit angle + local facing offset (outward in squares)
    const facing = this.angle + s.facingOffset;
    ctx.rotate(facing);

    const isCav = this.def.category === 'cavalry';
    const isPike = this.def.weaponType === 'pike' || (this.def.weaponType === 'tercio_hybrid' && !s.isTercioArquebus);
    const isGun = this.def.weaponType === 'musket' || this.def.weaponType === 'arquebus' || this.def.weaponType === 'rifle' || s.isTercioArquebus;
    const isBow = this.def.weaponType === 'bow';

    // A. Soft Ground Shadow
    ctx.fillStyle = 'rgba(15, 23, 42, 0.25)';
    ctx.beginPath();
    ctx.ellipse(0, 1.2, isCav ? 7 : 3.5, isCav ? 4 : 2.2, 0, 0, Math.PI * 2);
    ctx.fill();

    if (isCav) {
      // --- CAVALRY MOUNT & RIDER ---
      // Horse Body (Oblong torso)
      ctx.fillStyle = '#451a03'; // Dark bay warhorse
      ctx.beginPath();
      ctx.ellipse(0, 0, 7.5, 3.8, 0, 0, Math.PI * 2);
      ctx.fill();

      // Horse Head & Neck extending forward (+X)
      ctx.beginPath();
      ctx.moveTo(4, -2);
      ctx.lineTo(9, -3.5);
      ctx.lineTo(11, -1.5);
      ctx.lineTo(8, 2);
      ctx.closePath();
      ctx.fill();

      // Horse Ears
      ctx.fillStyle = '#290e02';
      ctx.fillRect(8.5, -4.5, 1.2, 1.8);

      // Shabraque / Saddle Cloth (Faction colors)
      ctx.fillStyle = this.teamColors.main;
      ctx.fillRect(-3, -3.5, 6, 7);
      ctx.strokeStyle = this.teamColors.accent;
      ctx.lineWidth = 0.8;
      ctx.strokeRect(-3, -3.5, 6, 7);

      // Rider Torso (Cuirassier breastplate)
      ctx.fillStyle = '#64748b';
      ctx.beginPath();
      ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Rider Helmet (Polished steel)
      ctx.fillStyle = '#f1f5f9';
      ctx.beginPath();
      ctx.arc(0.5, 0, 1.6, 0, Math.PI * 2);
      ctx.fill();

      // Cavalry Lance or Saber pointing forward (+X)
      ctx.strokeStyle = '#e2e8f0';
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(1, 2);
      ctx.lineTo(14, 2);
      ctx.stroke();

    } else {
      // --- INFANTRY SOLDIER ---
      // 1. Marching Boots / Legs (Animated walking cycle)
      const stride = (s.state === 'marching') ? Math.sin(s.stepPhase) * 2.2 : 0;
      ctx.fillStyle = '#1e293b'; // Black gaiters/shoes
      // Left foot
      ctx.fillRect(-1.5 + stride, -2.2, 2.2, 1.2);
      // Right foot
      ctx.fillRect(-1.5 - stride, 1.0, 2.2, 1.2);

      // 2. Uniform Torso & Shoulders (Broad silhouette)
      ctx.fillStyle = this.isRouting ? '#64748b' : this.teamColors.main;
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(-2.2, -2.8, 4.4, 5.6, 1.2);
      } else {
        ctx.rect(-2.2, -2.8, 4.4, 5.6);
      }
      ctx.fill();

      // 3. Steel Cuirass / Breastplate with specular metallic gradient
      ctx.fillStyle = '#94a3b8';
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(-1.5, -2.0, 3.2, 4.0, 0.8);
      } else {
        ctx.rect(-1.5, -2.0, 3.2, 4.0);
      }
      ctx.fill();

      // Metallic highlight (specular gleam on breastplate)
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(-0.8, -1.4, 1.4, 2.8);

      // Crossbelt / Bandolier across chest
      ctx.strokeStyle = '#78350f'; // Leather strap
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(-1.6, -2.0);
      ctx.lineTo(1.6, 2.0);
      ctx.stroke();

      // 4. Soldier Head & Era Helmet
      // Flesh tone face
      ctx.fillStyle = '#fed7aa';
      ctx.beginPath();
      ctx.arc(0.4, 0, 1.6, 0, Math.PI * 2);
      ctx.fill();

      // Helmet (Renaissance Morion / Classical Galea / Shako)
      if (this.def.era === 'renaissance' || this.def.category === 'pikes') {
        // Spanish Morion: Curved brim + tall central crest
        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.ellipse(0.4, 0, 2.2, 1.4, 0, 0, Math.PI * 2);
        ctx.fill();
        // Central comb ridge
        ctx.fillStyle = '#e2e8f0';
        ctx.fillRect(-0.8, -0.4, 2.4, 0.8);
        // Feather plume (red/blue)
        ctx.fillStyle = this.teamColors.accent;
        ctx.fillRect(-1.8, -0.6, 1.2, 1.2);
      } else if (this.def.era === 'antiquity') {
        // Roman Galea with red horsehair crest
        ctx.fillStyle = '#b45309'; // Bronze
        ctx.beginPath();
        ctx.arc(0.4, 0, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ef4444'; // Red crest
        ctx.fillRect(-1.0, -0.5, 2.8, 1.0);
      } else if (this.def.era === 'napoleonic' || this.def.era === 'modern') {
        // Shako / Tricorn hat
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-1.2, -1.8, 2.8, 3.6);
        ctx.fillStyle = this.teamColors.accent;
        ctx.fillRect(1.0, -0.6, 1.0, 1.2); // Brass badge / cockade
      } else {
        // Medieval Kettle Hat / Bascinet
        ctx.fillStyle = '#64748b';
        ctx.beginPath();
        ctx.arc(0.4, 0, 1.9, 0, Math.PI * 2);
        ctx.fill();
      }

      // 5. Special Regiment Roles: Officer, Standard Bearer, Drummer
      if (s.isOfficer) {
        // Officer waving polished steel sword
        ctx.strokeStyle = '#fbbf24'; // Gold sash
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.arc(0, 0, 2.6, -Math.PI * 0.5, Math.PI * 0.5);
        ctx.stroke();

        ctx.strokeStyle = '#f8fafc'; // Officer rapier
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(1.5, -2.0);
        ctx.lineTo(8.5, -4.5);
        ctx.stroke();
      } else if (s.isStandardBearer) {
        // Ensign holding Regiment Banner (Waving silk flag in wind)
        const wave = Math.sin(this.animTime * 6.0 + s.file) * 2.2;

        // Flagpole
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(-1.0, -2.5);
        ctx.lineTo(2.0, -2.5);
        ctx.stroke();

        // Silk Cloth Banner (Trailing backwards along -X with wave)
        ctx.fillStyle = this.teamColors.flag;
        ctx.beginPath();
        ctx.moveTo(-1.0, -2.5);
        ctx.quadraticCurveTo(-7.0, -5.0 + wave, -13.0, -3.5 + wave);
        ctx.lineTo(-11.5, 2.5 + wave);
        ctx.quadraticCurveTo(-6.0, 1.0 + wave, -1.0, 2.0);
        ctx.closePath();
        ctx.fill();

        // Banner Cross / Emblem
        ctx.strokeStyle = this.teamColors.trim;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.moveTo(-3.0, -1.5 + wave * 0.5);
        ctx.lineTo(-9.0, -0.5 + wave * 0.7);
        ctx.stroke();
      } else if (s.isDrummer) {
        // Military Side-Drum
        ctx.fillStyle = '#b45309'; // Wooden shell
        ctx.beginPath();
        ctx.ellipse(1.5, 2.2, 2.0, 1.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#f8fafc'; // Drum skin
        ctx.beginPath();
        ctx.ellipse(1.5, 2.2, 1.4, 0.9, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // 6. Weapon Visualization (Strictly Facing Forward or Sloped on March)
      if (isPike) {
        const isBraced = this.activeDoctrine === 'pike_wall';
        const isChargingPike = this.isCharging;
        const thrust = isChargingPike ? 5 : (isBraced ? 2 : 0);
        const pikeLen = (this.def.pikeLength || 26) + thrust;
        ctx.lineWidth = 1.3;

        if (s.state === 'marching') {
          // SLOPED ON MARCH: Carried over right shoulder angled backward-upward (-50 deg)
          ctx.strokeStyle = '#78350f';
          ctx.beginPath();
          ctx.moveTo(0.5, 1.5);
          ctx.lineTo(-16, -13);
          ctx.stroke();

          // Shiny steel pike spearhead
          ctx.strokeStyle = '#e2e8f0';
          ctx.lineWidth = 1.6;
          ctx.beginPath();
          ctx.moveTo(-16, -13);
          ctx.lineTo(-20, -16);
          ctx.stroke();
        } else {
          // GUARD / COMBAT: Leveled strictly FORWARD (+X = 0 deg)
          ctx.strokeStyle = '#78350f'; // Ash wood shaft
          ctx.beginPath();
          ctx.moveTo(-3, 1.5);
          ctx.lineTo(pikeLen - 4, 1.5);
          ctx.stroke();

          // Steel Pike Spearhead (Shiny diamond tip extending forward past front rank)
          ctx.strokeStyle = isBraced ? '#38bdf8' : '#f8fafc';
          ctx.lineWidth = isBraced ? 2.2 : 1.8;
          ctx.beginPath();
          ctx.moveTo(pikeLen - 4, 1.5);
          ctx.lineTo(pikeLen + 3, 1.5);
          ctx.stroke();
        }
      } else if (isGun) {
        // Musket / Arquebus
        if (s.state === 'marching') {
          // Sloped over shoulder
          ctx.strokeStyle = '#451a03';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(0, 1.5);
          ctx.lineTo(-7, -6);
          ctx.stroke();
        } else {
          // Leveled forward ready to fire (+X)
          ctx.strokeStyle = '#451a03'; // Wooden stock
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          ctx.moveTo(-1, 1.5);
          ctx.lineTo(4, 1.5);
          ctx.stroke();

          // Iron barrel
          ctx.strokeStyle = '#334155';
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.moveTo(4, 1.5);
          ctx.lineTo(10, 1.5);
          ctx.stroke();

          // Muzzle Flash Effect
          if (s.muzzleFlashTimer > 0) {
            ctx.save();
            ctx.fillStyle = '#ffedd5';
            ctx.beginPath();
            ctx.arc(11, 1.5, 4.0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#f97316';
            ctx.beginPath();
            ctx.arc(13, 1.5, 2.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(15, 1.5, 1.4, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
      } else if (isBow) {
        // Curved Bow arc facing forward
        ctx.strokeStyle = '#854d0e';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(3.0, 0, 3.2, -Math.PI * 0.45, Math.PI * 0.45);
        ctx.stroke();
      } else {
        // Infantry sword / spear pointing forward
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(1.0, 1.8);
        ctx.lineTo(6.5, 1.8);
        ctx.stroke();
      }
    }

    ctx.restore();
  }

  _renderTacticalBlock(ctx) {
    ctx.save();
    ctx.translate(this.x + this.shakeX, this.y + this.shakeY);
    ctx.rotate(this.angle);

    // Block dimensions:
    // Along +X (depth): totalRanks * spacingRank + margin
    // Along +Y (frontage): totalFiles * spacingFile + margin
    const blockDepth = this.totalRanks * this.spacingRank + 10;
    const blockFrontage = this.totalFiles * this.spacingFile + 8;

    // Semi-transparent tactical rectangle (SandRhoman military map aesthetic)
    ctx.fillStyle = this.isRouting ? 'rgba(71, 85, 105, 0.45)' : this.teamColors.bg;
    ctx.strokeStyle = this.isRouting ? '#64748b' : this.teamColors.border;
    ctx.lineWidth = this.selected ? 2.5 : 1.4;

    if (this.currentFormation === 'square') {
      const sq = Math.max(blockFrontage, blockDepth) * 0.9;
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(-sq * 0.5, -sq * 0.5, sq, sq, 4);
      } else {
        ctx.rect(-sq * 0.5, -sq * 0.5, sq, sq);
      }
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(-blockDepth * 0.5, -blockFrontage * 0.5, blockDepth, blockFrontage, 3);
      } else {
        ctx.rect(-blockDepth * 0.5, -blockFrontage * 0.5, blockDepth, blockFrontage);
      }
      ctx.fill();
      ctx.stroke();
    }

    // Directional Facing Chevron at front edge (+X)
    ctx.fillStyle = this.teamColors.accent;
    ctx.beginPath();
    ctx.moveTo(blockDepth * 0.5 + 4, 0);
    ctx.lineTo(blockDepth * 0.5 - 1, -4);
    ctx.lineTo(blockDepth * 0.5 - 1, 4);
    ctx.closePath();
    ctx.fill();

    // Regiment Heraldic / Tactical Symbol
    ctx.fillStyle = this.teamColors.text;
    ctx.font = 'bold 9px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.def.symbol, 0, 0);

    // Selected indicator glow
    if (this.selected) {
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.8;
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(-blockDepth * 0.5 - 3, -blockFrontage * 0.5 - 3, blockDepth + 6, blockFrontage + 6);
      ctx.setLineDash([]);
    }

    ctx.restore();
  }

  _renderHealthAndMorale(ctx) {
    const barWidth = 36;
    const barHeight = 3.5;
    const hasAmmo = (this.range > 0 && this.maxAmmo > 0);
    const extraH = hasAmmo ? 3.0 : 0;
    const barX = this.x - barWidth * 0.5;
    const barY = this.y - this.radius - 14 - extraH;

    // Background panel
    ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
    ctx.fillRect(barX - 1, barY - 1, barWidth + 2, (barHeight * 2) + 4 + extraH);

    // Green Health Bar
    const healthPercent = Math.max(0, this.health / this.maxHealth);
    ctx.fillStyle = healthPercent > 0.5 ? '#22c55e' : (healthPercent > 0.25 ? '#eab308' : '#ef4444');
    ctx.fillRect(barX, barY, barWidth * healthPercent, barHeight);

    // Blue Morale Bar
    const moralePercent = Math.max(0, this.morale / this.maxMorale);
    ctx.fillStyle = this.isRouting ? '#ef4444' : '#38bdf8';
    ctx.fillRect(barX, barY + barHeight + 1, barWidth * moralePercent, barHeight);

    // Amber Ammunition Bar (for ranged regiments)
    if (hasAmmo) {
      const ammoPercent = Math.max(0, (this.ammo || 0) / this.maxAmmo);
      ctx.fillStyle = (this.ammo <= 0) ? '#ef4444' : '#f59e0b';
      ctx.fillRect(barX, barY + (barHeight * 2) + 2, barWidth * ammoPercent, 2);
    }

    // Regiment Name Label
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 9px "Outfit", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText(this.def.name, this.x, barY - 3);

    // Fatigue Indicator (if winded or exhausted)
    if (this.fatigue >= 50) {
      ctx.fillStyle = this.fatigue >= 75 ? '#ef4444' : '#f59e0b';
      ctx.font = 'bold 8px "Outfit", sans-serif';
      ctx.fillText(this.fatigue >= 75 ? '⚡ AGOTADO' : '💨 CANSADO', this.x, barY - 13);
    }

    // Supply Isolation Warning (Wargame-style logistics alert)
    if (this.supplyStatus === 'isolated') {
      const blink = Math.sin(this.animTime * 8.0) > 0;
      if (blink) {
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 9px "Outfit", sans-serif';
        ctx.fillText('⚠️ AISLADO', this.x, barY - (this.fatigue >= 50 ? 22 : 13));
      }
    }

    // Active Formation Doctrine Badge (Total War depth)
    if (this.activeDoctrine && this.activeDoctrine !== 'none' && !this.isRouting) {
      const doctrineTags = {
        pike_wall: '🛡️ MURO PICAS',
        charge: '⚔️ CARGA CHOQUE',
        square: '🔲 CUADRO',
        loose: '💨 DISPERSA',
        volley: '💥 SALVA'
      };
      const tag = doctrineTags[this.activeDoctrine];
      if (tag) {
        ctx.fillStyle = '#67e8f9';
        ctx.font = 'bold 8px "Outfit", sans-serif';
        ctx.fillText(tag, this.x, barY + (barHeight * 2) + 4 + extraH + 8);
      }
    }

    // Routing status alert
    if (this.isRouting) {
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 10px "Outfit", sans-serif';
      ctx.fillText('¡HUIDA!', this.x, barY - 14);
    }
  }
}

window.MicroSoldier = MicroSoldier;
window.Unit = Unit;
