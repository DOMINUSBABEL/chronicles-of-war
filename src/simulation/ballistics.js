/**
 * Chronicles of War - Ballistics & Projectile Simulation
 * Simulates arrows with arc & shadow, musket balls, bouncing cannonballs, and canister shot
 */

class Projectile {
  constructor() {
    this.active = false;
    this.x = 0;
    this.y = 0;
    this.z = 0; // Altitude above ground
    this.vx = 0;
    this.vy = 0;
    this.vz = 0;
    this.startX = 0;
    this.startY = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.gravity = 140;
    this.type = 'musket'; // 'arrow', 'musket', 'cannonball', 'canister', 'trebuchet'
    this.damage = 25;
    this.penetration = 1;
    this.team = 0;
    this.owner = null;
    this.bounces = 0;
    this.maxBounces = 2;
    this.trailTimer = 0;
  }

  initArrow(startX, startY, targetX, targetY, team, owner, damage = 22) {
    this.active = true;
    this.team = team;
    this.owner = owner;
    this.type = 'arrow';
    this.damage = damage;
    this.penetration = 1;
    this.startX = startX;
    this.startY = startY;
    this.x = startX;
    this.y = startY;
    this.z = 8;
    this.targetX = targetX + (Math.random() - 0.5) * 20;
    this.targetY = targetY + (Math.random() - 0.5) * 20;

    const dx = this.targetX - startX;
    const dy = this.targetY - startY;
    const dist = Math.hypot(dx, dy);
    const speed = 260 + Math.random() * 40;
    const flightTime = Math.max(0.3, dist / speed);

    this.vx = dx / flightTime;
    this.vy = dy / flightTime;
    this.gravity = 280;
    this.vz = 0.5 * this.gravity * flightTime; // Parabolic arc apex
  }

  initMusket(startX, startY, angle, maxRange, spread, team, owner, damage = 35) {
    this.active = true;
    this.team = team;
    this.owner = owner;
    this.type = 'musket';
    this.damage = damage;
    this.penetration = 1;
    this.startX = startX;
    this.startY = startY;
    this.x = startX;
    this.y = startY;
    this.z = 4;

    const shotAngle = angle + (Math.random() - 0.5) * spread;
    const speed = 650;
    this.vx = Math.cos(shotAngle) * speed;
    this.vy = Math.sin(shotAngle) * speed;
    this.vz = 0;
    this.gravity = 0;
    this.maxRange = maxRange;
    this.traveled = 0;
  }

  initCannonball(startX, startY, angle, maxRange, team, owner, damage = 120) {
    this.active = true;
    this.team = team;
    this.owner = owner;
    this.type = 'cannonball';
    this.damage = damage;
    this.penetration = 6; // Can plow through multiple soldiers
    this.startX = startX;
    this.startY = startY;
    this.x = startX;
    this.y = startY;
    this.z = 5;

    const shotAngle = angle + (Math.random() - 0.5) * 0.08;
    const speed = 480;
    this.vx = Math.cos(shotAngle) * speed;
    this.vy = Math.sin(shotAngle) * speed;
    this.vz = 20;
    this.gravity = 90;
    this.bounces = 0;
    this.maxBounces = 3;
    this.maxRange = maxRange;
    this.traveled = 0;
  }

  initCanister(startX, startY, angle, team, owner, damage = 40) {
    this.active = true;
    this.team = team;
    this.owner = owner;
    this.type = 'canister';
    this.damage = damage;
    this.penetration = 1;
    this.startX = startX;
    this.startY = startY;
    this.x = startX;
    this.y = startY;
    this.z = 4;

    // Wide fan spread
    const shotAngle = angle + (Math.random() - 0.5) * 0.65;
    const speed = 450 + Math.random() * 120;
    this.vx = Math.cos(shotAngle) * speed;
    this.vy = Math.sin(shotAngle) * speed;
    this.vz = 0;
    this.gravity = 0;
    this.maxRange = 160;
    this.traveled = 0;
  }

  update(dt, units, particleSystem, soundEngine) {
    if (!this.active) return;

    this.x += this.vx * dt;
    this.y += this.vy * dt;

    if (this.type === 'musket' || this.type === 'canister') {
      const stepDist = Math.hypot(this.vx * dt, this.vy * dt);
      this.traveled += stepDist;
      if (this.traveled >= this.maxRange) {
        this.active = false;
        return;
      }
    } else if (this.type === 'arrow') {
      this.z += this.vz * dt;
      this.vz -= this.gravity * dt;

      if (this.z <= 0) {
        // Hit ground or unit
        this.active = false;
        if (particleSystem) {
          particleSystem.emitClashImpact(this.x, this.y);
        }
        return;
      }
    } else if (this.type === 'cannonball') {
      this.z += this.vz * dt;
      this.vz -= this.gravity * dt;

      if (this.z <= 0) {
        this.z = 0;
        this.bounces++;
        if (this.bounces < this.maxBounces) {
          this.vz = -this.vz * 0.45; // Bounce up
          this.vx *= 0.75;
          this.vy *= 0.75;
          if (particleSystem) {
            particleSystem.emitClashImpact(this.x, this.y);
          }
        } else {
          this.active = false;
          return;
        }
      }
    }

    // Collision Check with Enemy Units
    for (let i = 0; i < units.length; i++) {
      const u = units[i];
      if (u.team === this.team || !u.alive) continue;

      // Check if projectile is inside unit formation bounding circle/box
      const dist = Math.hypot(this.x - u.x, this.y - u.y);
      if (dist < u.radius + 6) {
        const hit = u.receiveProjectileHit(this, particleSystem, soundEngine);
        if (hit) {
          this.penetration--;
          if (this.penetration <= 0) {
            this.active = false;
            break;
          }
        }
      }
    }
  }

  render(ctx) {
    if (!this.active) return;

    ctx.save();
    if (this.type === 'arrow') {
      // 1. Shadow on ground
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.beginPath();
      ctx.ellipse(this.x, this.y, 2, 1, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. Arrow body in air
      const angle = Math.atan2(this.vy, this.vx);
      ctx.translate(this.x, this.y - this.z);
      ctx.rotate(angle);

      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(-6, 0);
      ctx.lineTo(6, 0);
      ctx.stroke();

      // Fletching (feathers)
      ctx.strokeStyle = '#cbd5e1';
      ctx.beginPath();
      ctx.moveTo(-6, -1.5);
      ctx.lineTo(-4, 0);
      ctx.lineTo(-6, 1.5);
      ctx.stroke();

    } else if (this.type === 'musket' || this.type === 'canister') {
      // Fast glowing tracer
      const angle = Math.atan2(this.vy, this.vx);
      ctx.translate(this.x, this.y);
      ctx.rotate(angle);

      ctx.strokeStyle = '#fef08a';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(-10, 0);
      ctx.lineTo(0, 0);
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(0, 0, 1.5, 0, Math.PI * 2);
      ctx.fill();

    } else if (this.type === 'cannonball') {
      // Shadow
      ctx.fillStyle = 'rgba(0,0,0,0.35)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Ball
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.arc(this.x, this.y - this.z, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Iron specular highlight
      ctx.fillStyle = '#94a3b8';
      ctx.beginPath();
      ctx.arc(this.x - 1, this.y - this.z - 1, 1.2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}

class BallisticsManager {
  constructor(maxProjectiles = 600) {
    this.pool = [];
    this.maxProjectiles = maxProjectiles;
    for (let i = 0; i < maxProjectiles; i++) {
      this.pool.push(new Projectile());
    }
  }

  _getFree() {
    for (let i = 0; i < this.maxProjectiles; i++) {
      if (!this.pool[i].active) return this.pool[i];
    }
    return null;
  }

  fireArrow(startX, startY, targetX, targetY, team, owner, damage) {
    const p = this._getFree();
    if (p) p.initArrow(startX, startY, targetX, targetY, team, owner, damage);
  }

  fireMusket(startX, startY, angle, range, spread, team, owner, damage) {
    const p = this._getFree();
    if (p) p.initMusket(startX, startY, angle, range, spread, team, owner, damage);
  }

  fireCannon(startX, startY, angle, range, team, owner, damage) {
    const p = this._getFree();
    if (p) p.initCannonball(startX, startY, angle, range, team, owner, damage);
  }

  fireCanister(startX, startY, angle, team, owner, damage) {
    const p = this._getFree();
    if (p) p.initCanister(startX, startY, angle, team, owner, damage);
  }

  update(dt, units, particleSystem, soundEngine) {
    for (let i = 0; i < this.maxProjectiles; i++) {
      if (this.pool[i].active) {
        this.pool[i].update(dt, units, particleSystem, soundEngine);
      }
    }
  }

  render(ctx) {
    for (let i = 0; i < this.maxProjectiles; i++) {
      if (this.pool[i].active) {
        this.pool[i].render(ctx);
      }
    }
  }
}

window.BallisticsManager = BallisticsManager;
