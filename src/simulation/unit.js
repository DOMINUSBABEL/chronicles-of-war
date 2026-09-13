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

    // Total War Tactical Suite
    this.fireAtWill = true; // Rule of engagement: Fire at will (default true)
    this.holdFire = false;  // Synced with !fireAtWill
    this.skirmishMode = false; // Rule of engagement: Automatically kite away from approaching melee enemies
    this.skirmishStance = false; // Synced with skirmishMode
    this.guardMode = false; // Guard Mode: +25% melee defense, hold battle line, refuse to pursue routing enemies
    this.guardAnchorX = x;
    this.guardAnchorY = y;
    this.isAmbushing = false; // Forest ambush stance: cloaked until enemy <= 95px, +60% surprise morale shock
    this.meleeStance = false; // Melee stance toggle for ranged units (charge with sidearms/bayonets)
    this.forestTime = 0;
    this.activeStance = null;
    this.pilumVolleysLeft = unitDef.maxVolleys || 0;

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
    let isMoving = Math.hypot(this.targetX - this.x, this.targetY - this.y) > 6;

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
          this.forestTime = (this.forestTime || 0) + dt;
          terrainSpeedMult = (this.def.category === 'cavalry' || this.def.category === 'artillery') ? 0.4 : 0.85;
          // Stationary in forest: unit naturally conceals into ambush stance
          if (!isMoving && this.forestTime > 2.0 && !this.inCombat) {
            this.isAmbushing = true;
          }
        } else {
          this.inForest = false;
          this.isAmbushing = false;
          this.forestTime = 0;
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
      this.isAmbushing = false;
      const enemy = this._findNearestEnemy(allUnits);
      if (enemy) {
        const fleeAngle = Math.atan2(this.y - enemy.y, this.x - enemy.x);
        this.targetX = this.x + Math.cos(fleeAngle) * 600;
        this.targetY = this.y + Math.sin(fleeAngle) * 600;
      }
    }

    // Guard Mode: If out of combat and drifting away from guard post, return to anchor
    if (this.guardMode && !this.inCombat && !isMoving && this.waypoints.length === 0) {
      const distToAnchor = Math.hypot(this.x - this.guardAnchorX, this.y - this.guardAnchorY);
      if (distToAnchor > 35) {
        this.targetX = this.guardAnchorX;
        this.targetY = this.guardAnchorY;
      }
    }

    // 6. Movement & Fatigue Effects
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    const distToTarget = Math.hypot(dx, dy);

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

      // Clamping inside battlefield perimeter (Supports 4800x3200 operational battlefield)
      const mapW = (map && map.width) ? map.width : 4800;
      const mapH = (map && map.height) ? map.height : 3200;
      this.x = Math.max(20, Math.min(mapW - 20, this.x));
      this.y = Math.max(20, Math.min(mapH - 20, this.y));

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

      // Skirmish Mode: If enemy melee or cavalry is closing in, kite backward away from threat
      const isSkirmishing = (this.skirmishMode || this.skirmishStance) && !this.meleeStance && this.range > 0;
      if (isSkirmishing) {
        const threatDist = Math.max(160, this.range * 0.48);
        if (distToEnemy < threatDist && (nearestEnemy.range === 0 || nearestEnemy.def.category === 'cavalry' || nearestEnemy.def.category === 'pikes' || distToEnemy < 110)) {
          const retreatAngle = Math.atan2(this.y - nearestEnemy.y, this.x - nearestEnemy.x);
          this.targetX = this.x + Math.cos(retreatAngle) * 110;
          this.targetY = this.y + Math.sin(retreatAngle) * 110;
          this.targetAngle = retreatAngle;
        }
      }

      // Melee Range or Melee Stance
      const meleeEngagementDist = this.radius + nearestEnemy.radius + 8;
      if (distToEnemy <= meleeEngagementDist || this.meleeStance) {
        if (this.meleeStance && distToEnemy > meleeEngagementDist) {
          // Ranged unit in melee stance charges aggressively toward enemy
          this.targetX = nearestEnemy.x;
          this.targetY = nearestEnemy.y;
        } else {
          this.inCombat = true;
          const combatAngleDiff = Math.atan2(Math.sin(enemyAngle - this.angle), Math.cos(enemyAngle - this.angle));
          this.angle += combatAngleDiff * Math.min(1.0, 8.0 * dt);

          this._resolveMeleeCombat(nearestEnemy, dt, particles, audio);
        }
      }
      // Ranged Combat (Elevation grants +25% range)
      else if (this.range > 0 && !isMoving && !this.meleeStance) {
        // Minimum range for artillery (dead zone at 80px)
        const minRange = (this.def.category === 'artillery') ? 80 : 0;
        const effectiveRange = this.range * (this.elevationLevel > 0 ? 1.25 : 1.0);

        if (distToEnemy <= effectiveRange && distToEnemy >= minRange) {
          const combatAngleDiff = Math.atan2(Math.sin(enemyAngle - this.angle), Math.cos(enemyAngle - this.angle));
          this.angle += combatAngleDiff * Math.min(1.0, 5.0 * dt);

          // Fire only if Fire at Will is active and holdFire is false
          if (this.fireAtWill && !this.holdFire) {
            const reloadFactor = this.fatigue >= 75 ? 1.5 : (this.fatigue >= 50 ? 1.2 : 1.0);
            this.reloadTimer -= dt;
            if (this.reloadTimer <= 0) {
              this._fireRangedVolley(nearestEnemy, ballistics, particles, audio);
              this.reloadTimer = (this.reloadTime * reloadFactor) + (Math.random() - 0.5) * 0.6;
            }
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
      // Ambush Concealment: Units in forest ambush stance cannot be targeted if d > 95px
      if (other.isAmbushing && d > 95) continue;
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

    // Ambush Strike Surprise Shock (+40% surprise damage, +25 morale shock)
    if (this.isAmbushing) {
      damageFactor *= 1.40;
      enemy.morale -= 25.0;
      this.isAmbushing = false;
      if (particles) {
        particles.emitFloatingText(this.x, this.y - 25, '¡EMBOSCADA SORPRESA!', '#10b981');
      }
    }

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

    // Topography Melee Modifiers (Hill elevation & River crossing)
    if (this.elevationLevel > (enemy.elevationLevel || 0)) {
      damageFactor *= 1.20; // +20% damage fighting downhill
    } else if (this.elevationLevel < (enemy.elevationLevel || 0)) {
      damageFactor *= 0.75; // -25% damage fighting uphill
    }
    if (this.isWater) {
      damageFactor *= 0.70; // -30% fighting efficiency while wading in river
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

    // Ambush Strike Surprise Shock (+40% surprise damage, +20 morale shock)
    if (this.isAmbushing) {
      damageBonus *= 1.40;
      target.morale -= 20.0;
      this.isAmbushing = false;
      if (particles) {
        particles.emitFloatingText(this.x, this.y - 25, '¡EMBOSCADA SORPRESA!', '#10b981');
      }
    }

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
      // Gunpowder Volley with Dutch & Spanish Counter-march (Contramarcha rotativa por filas)
      if (this.currentFiringRank === undefined) this.currentFiringRank = 0;
      const rankToFire = this.currentFiringRank;

      // Find living soldiers in current firing rank, or fallback to any available
      let firingRankSoldiers = this.soldiers.filter((s, idx) => idx < this.currentSoldiers && s.rank === rankToFire && (!s.isTercioArquebus !== undefined));
      if (firingRankSoldiers.length === 0) {
        firingRankSoldiers = this.soldiers.slice(0, Math.min(16, this.currentSoldiers));
      }

      firingRankSoldiers.forEach(s => {
        const sx = s ? s.worldX : this.x;
        const sy = s ? s.worldY : this.y;
        if (s) {
          s.muzzleFlashTimer = 0.22;
          s.state = 'firing';
        }
        const spread = this.def.weaponType === 'rifle' ? 0.07 : 0.22;
        ballistics.fireMusket(sx, sy, fireAngle, this.range, spread, this.team, this, this.rangedDamage * damageBonus);
        if (particles && Math.random() < 0.4) {
          particles.emitMusketSmoke(sx, sy, fireAngle, 0.35);
        }
      });

      // Put non-firing ranks in reloading stance with ramrods
      this.soldiers.forEach((s, idx) => {
        if (idx < this.currentSoldiers && s.rank !== rankToFire) {
          s.state = 'reloading';
        }
      });

      // Rotate to next rank for the upcoming volley
      this.currentFiringRank = (this.currentFiringRank + 1) % this.totalRanks;

      if (particles) {
        particles.emitMusketSmoke(this.x, this.y, fireAngle, 0.55);
      }
      if (audio) {
        audio.playMusketVolley(pan, Math.min(10, firingRankSoldiers.length));
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

    // Guard Mode: +25% melee defense (reduces damage taken by 20%) & firm bracing against knockback
    if (this.guardMode) {
      amount *= 0.80;
      this.knockX *= 0.5;
      this.knockY *= 0.5;
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
    let armor = this.def.armor || 0;
    // Forest tree trunks provide +40% missile defense against bullets/arrows
    if (this.inForest) {
      armor = Math.min(0.85, armor + 0.40);
    }
    const finalDamage = projectile.damage * (1.0 - armor);
    this.receiveDamage(finalDamage, projectile.owner, particles, audio);
    if (particles) {
      particles.emitClashImpact(projectile.x, projectile.y);
    }
    return true;
  }

  // --- RENDERING ---

  render(ctx, zoom = 1.0) {
    if (!this.alive) return;

    ctx.save();

    // Ambush Stance: woodland camouflage transparency
    if (this.isAmbushing) {
      ctx.globalAlpha = 0.58;
    }

    // Macro Tactical View (Zoom < 0.72): Render Total War / Wargame Division Placard
    if (zoom < 0.72) {
      this._renderDivisionBanner(ctx);
      ctx.restore();
      return;
    }

    // 0. Render Tactical Firing Range if Selected & Ranged
    if (this.selected && this.range > 0 && !this.isRouting) {
      this._renderFiringRange(ctx);
    }

    // 1. Render Micro-Soldiers
    for (let i = 0; i < this.soldiers.length; i++) {
      const s = this.soldiers[i];
      if (!s.alive) continue;
      this._renderMicroSoldier(ctx, s);
    }

    // 2. Render Outer Tactical Military Block (SandRhoman History Styling)
    this._renderTacticalBlock(ctx);

    // 3. Render Health & Morale Gauges with Smart LOD (anti-clutter)
    const isDetailed = Boolean(this.selected || this.isHovered);
    this._renderHealthAndMorale(ctx, isDetailed);

    ctx.restore();
  }

  _renderFiringRange(ctx) {
    ctx.save();
    ctx.translate(this.x + this.shakeX, this.y + this.shakeY);

    const r = this.range;
    const isHolding = this.holdFire || !this.fireAtWill;
    const strokeColor = isHolding ? 'rgba(239, 68, 68, 0.75)' : (this.team === 0 ? 'rgba(56, 189, 248, 0.7)' : 'rgba(248, 113, 113, 0.7)');
    const fillColor = isHolding ? 'rgba(239, 68, 68, 0.04)' : (this.team === 0 ? 'rgba(56, 189, 248, 0.05)' : 'rgba(248, 113, 113, 0.05)');

    // Range wash area
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fillStyle = fillColor;
    ctx.fill();

    // Dashed boundary ring
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1.4;
    ctx.setLineDash([6, 4]);
    ctx.stroke();

    // If artillery has minimum range (e.g. 35px)
    if (this.def.category === 'artillery') {
      const minR = 35;
      ctx.beginPath();
      ctx.arc(0, 0, minR, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([3, 3]);
      ctx.stroke();
    }

    // Range Label at 12 o'clock
    ctx.setLineDash([]);
    ctx.fillStyle = strokeColor;
    ctx.font = '600 9px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    const rangeText = isHolding ? `🚫 ALTO AL FUEGO (${Math.round(r)}m)` : `🎯 RANGO: ${Math.round(r)}m`;
    ctx.fillText(rangeText, 0, -r - 3);

    ctx.restore();
  }

  _renderDivisionBanner(ctx) {
    ctx.save();
    ctx.translate(this.x + this.shakeX, this.y + this.shakeY);

    const bannerW = 54;
    const bannerH = 22;
    const bX = -bannerW * 0.5;
    const bY = -bannerH * 0.5;

    // Outer glow if selected
    if (this.selected) {
      ctx.shadowColor = '#fbbf24';
      ctx.shadowBlur = 10;
    }

    // Card background
    ctx.fillStyle = this.isRouting ? '#475569' : (this.team === 0 ? 'rgba(30, 58, 138, 0.94)' : 'rgba(153, 27, 27, 0.94)');
    ctx.strokeStyle = this.selected ? '#fbbf24' : (this.team === 0 ? '#60a5fa' : '#f87171');
    ctx.lineWidth = this.selected ? 2.0 : 1.2;

    ctx.beginPath();
    ctx.roundRect(bX, bY, bannerW, bannerH, 4);
    ctx.fill();
    ctx.stroke();

    ctx.shadowBlur = 0;

    // Unit Category Icon
    const catIcons = {
      pikes: '🛡️',
      melee: '⚔️',
      ranged: '💥',
      cavalry: '🏇',
      artillery: '💣'
    };
    const icon = catIcons[this.def.category] || '⚔️';

    ctx.fillStyle = '#fff';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(icon, bX + 4, 0);

    // Soldier count
    ctx.fillStyle = this.selected ? '#fbbf24' : '#f8fafc';
    ctx.font = 'bold 9px "Outfit", sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.currentSoldiers.toString(), bX + bannerW - 4, 0);

    // Facing Direction Arrow (Pointed in unit's facing direction)
    const arrowLen = 14;
    ctx.strokeStyle = this.selected ? '#fbbf24' : '#f8fafc';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(this.angle) * arrowLen, Math.sin(this.angle) * arrowLen);
    ctx.stroke();

    // Mini Health & Morale Bars beneath banner
    const hpPct = Math.max(0, this.health / this.maxHealth);
    const morPct = Math.max(0, this.morale / 100);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(bX, bY + bannerH + 2, bannerW, 2.5);
    ctx.fillStyle = '#10b981';
    ctx.fillRect(bX, bY + bannerH + 2, bannerW * hpPct, 2.5);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(bX, bY + bannerH + 5.5, bannerW, 2);
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(bX, bY + bannerH + 5.5, bannerW * morPct, 2);

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

      // Total War Tactical Range Ring & Forward Arc of Fire Cone
      if (this.range > 0 && !this.meleeStance) {
        ctx.save();
        const effRange = this.range * (this.elevationLevel > 0 ? 1.25 : 1.0);
        const coneHalfAngle = 50 * (Math.PI / 180);

        // Forward Arc of Fire Cone (+/- 50 deg around facing direction +X)
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, effRange, -coneHalfAngle, coneHalfAngle);
        ctx.closePath();
        ctx.fillStyle = 'rgba(56, 189, 248, 0.08)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.65)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([5, 4]);
        ctx.stroke();

        // Outer Range Perimeter Ring
        ctx.beginPath();
        ctx.arc(0, 0, effRange, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.28)';
        ctx.lineWidth = 1.0;
        ctx.setLineDash([4, 6]);
        ctx.stroke();

        // Minimum Range Dead Zone (For artillery: barrels cannot depress below 80px)
        if (this.def.category === 'artillery') {
          ctx.beginPath();
          ctx.arc(0, 0, 80, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(239, 68, 68, 0.08)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(239, 68, 68, 0.65)';
          ctx.lineWidth = 1.2;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    ctx.restore();
  }

  _renderHealthAndMorale(ctx, isDetailed = false) {
    if (!isDetailed) {
      // --- CLEAN MINIMALIST MILITARY PENNANT (Anti-Clutter, Total War aesthetic) ---
      const barW = 26;
      const barH = 2.5;
      const barX = this.x - barW * 0.5;
      const barY = this.y - this.radius - 8;

      ctx.save();
      // Faction swallowtail pennant standard
      ctx.fillStyle = this.team === 0 ? '#2563eb' : '#dc2626';
      ctx.beginPath();
      ctx.moveTo(this.x - 4, barY - 7);
      ctx.lineTo(this.x + 8, barY - 4);
      ctx.lineTo(this.x - 4, barY - 1);
      ctx.closePath();
      ctx.fill();

      // Brass flagpole
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.moveTo(this.x - 4, barY - 8);
      ctx.lineTo(this.x - 4, barY);
      ctx.stroke();

      // Mini Health Bar
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.fillRect(barX - 0.5, barY + 1, barW + 1, barH + 2.5);

      const healthPercent = Math.max(0, this.health / this.maxHealth);
      ctx.fillStyle = healthPercent > 0.5 ? '#22c55e' : (healthPercent > 0.25 ? '#eab308' : '#ef4444');
      ctx.fillRect(barX, barY + 1, barW * healthPercent, barH);

      // Mini Morale Bar
      const moralePercent = Math.max(0, this.morale / this.maxMorale);
      ctx.fillStyle = this.isRouting ? '#ef4444' : '#38bdf8';
      ctx.fillRect(barX, barY + barH + 1.5, barW * moralePercent, 1.5);

      if (this.isRouting) {
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 8px "Cinzel", serif';
        ctx.textAlign = 'center';
        ctx.fillText('¡HUIDA!', this.x, barY - 10);
      }
      ctx.restore();
      return;
    }

    // --- DETAILED COMMANDER'S REGIMENT DOSSIER (Rendered on Selection / Hover) ---
    ctx.save();
    const barWidth = 46;
    const barHeight = 4.0;
    const hasAmmo = (this.range > 0 && this.maxAmmo > 0);
    const extraH = hasAmmo ? 3.0 : 0;
    const barX = this.x - barWidth * 0.5;
    const barY = this.y - this.radius - 18 - extraH;

    // Ornate Walnut & Brass Backing Plaque
    ctx.fillStyle = 'rgba(20, 13, 8, 0.95)';
    ctx.strokeStyle = '#b8862d';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.rect(barX - 2, barY - 14, barWidth + 4, (barHeight * 2) + 18 + extraH);
    ctx.fill();
    ctx.stroke();

    // Regiment Name (Classical Serif)
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 8.5px "Cinzel", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.def.name, this.x, barY - 7);

    // Green Health Bar with Brass Border
    const healthPercent = Math.max(0, this.health / this.maxHealth);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(barX, barY, barWidth, barHeight);
    ctx.fillStyle = healthPercent > 0.5 ? '#22c55e' : (healthPercent > 0.25 ? '#eab308' : '#ef4444');
    ctx.fillRect(barX, barY, barWidth * healthPercent, barHeight);

    // Morale Bar
    const moralePercent = Math.max(0, this.morale / this.maxMorale);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(barX, barY + barHeight + 1, barWidth, barHeight);
    ctx.fillStyle = this.isRouting ? '#ef4444' : '#38bdf8';
    ctx.fillRect(barX, barY + barHeight + 1, barWidth * moralePercent, barHeight);

    // Ammunition Bar
    if (hasAmmo) {
      const ammoPercent = Math.max(0, (this.ammo || 0) / this.maxAmmo);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(barX, barY + (barHeight * 2) + 2, barWidth, 2);
      ctx.fillStyle = (this.ammo <= 0) ? '#ef4444' : '#f59e0b';
      ctx.fillRect(barX, barY + (barHeight * 2) + 2, barWidth * ammoPercent, 2);
    }

    // Soldier Headcount Tag
    ctx.fillStyle = '#f5eedc';
    ctx.font = 'bold 7.5px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${this.currentSoldiers} / ${this.maxSoldiers} h`, this.x, barY + (barHeight * 2) + 3 + extraH + 6);

    // Tactical Status Badges: Arranged in a SINGLE horizontal row (never vertical stacking)
    const activeBadges = [];
    if (this.isAmbushing) activeBadges.push('🌿');
    if (this.guardMode) activeBadges.push('🛡️');
    if (this.skirmishMode || this.skirmishStance) activeBadges.push('🏃');
    if (!this.fireAtWill || this.holdFire) activeBadges.push('🚫');
    if (this.meleeStance) activeBadges.push('⚔️');
    if (this.fatigue >= 50) activeBadges.push(this.fatigue >= 75 ? '⚡' : '💨');
    if (this.supplyStatus === 'isolated') activeBadges.push('⚠️');

    if (activeBadges.length > 0) {
      const bSize = 13;
      const totalBW = activeBadges.length * (bSize + 3);
      let bStartX = this.x - totalBW * 0.5 + bSize * 0.5;
      const bY = barY - 22;

      activeBadges.forEach(badge => {
        ctx.fillStyle = 'rgba(14, 9, 6, 0.9)';
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(bStartX, bY, bSize * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.font = '8px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(badge, bStartX, bY);

        bStartX += bSize + 3;
      });
    }

    // Active Formation Doctrine Tag
    if (this.activeDoctrine && this.activeDoctrine !== 'none' && !this.isRouting) {
      const doctrineTags = {
        pike_wall: 'MURO PICAS',
        charge: 'CARGA',
        square: 'CUADRO',
        loose: 'DISPERSA',
        volley: 'SALVA'
      };
      const tag = doctrineTags[this.activeDoctrine];
      if (tag) {
        ctx.fillStyle = '#67e8f9';
        ctx.font = 'bold 7.5px "Cinzel", serif';
        ctx.textAlign = 'center';
        ctx.fillText(`• ${tag} •`, this.x, barY + (barHeight * 2) + 3 + extraH + 16);
      }
    }

    if (this.isRouting) {
      ctx.fillStyle = '#ef4444';
      ctx.font = 'bold 9px "Cinzel", serif';
      ctx.textAlign = 'center';
      ctx.fillText('¡EN HUIDA!', this.x, barY - 24);
    }
    ctx.restore();
  }
}

window.MicroSoldier = MicroSoldier;
window.Unit = Unit;
