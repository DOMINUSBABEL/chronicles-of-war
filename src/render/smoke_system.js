/**
 * Chronicles of War - Particle & Volumetric Smoke System
 * Replicates the billowing battlefield gunpowder smoke from SandRhoman History
 */

class SmokeParticle {
  constructor() {
    this.active = false;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.radius = 4;
    this.maxRadius = 30;
    this.growthRate = 12;
    this.alpha = 0.8;
    this.decay = 0.2;
    this.color = '#e2e8f0';
    this.rotation = 0;
    this.rotSpeed = 0;
    this.type = 'smoke'; // 'smoke', 'flash', 'spark', 'dust', 'blood'
  }

  init(x, y, vx, vy, initialRadius, maxRadius, alpha, decay, color, type = 'smoke') {
    this.active = true;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.radius = initialRadius;
    this.maxRadius = maxRadius;
    this.growthRate = (maxRadius - initialRadius) / (alpha / decay);
    this.alpha = alpha;
    this.decay = decay;
    this.color = color;
    this.type = type;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 1.5;
  }

  update(dt, windX, windY) {
    if (!this.active) return;

    this.x += (this.vx + windX) * dt;
    this.y += (this.vy + windY) * dt;
    this.vx *= Math.pow(0.85, dt * 60);
    this.vy *= Math.pow(0.85, dt * 60);

    if (this.radius < this.maxRadius) {
      this.radius += this.growthRate * dt;
    }

    this.alpha -= this.decay * dt;
    this.rotation += this.rotSpeed * dt;

    if (this.alpha <= 0) {
      this.active = false;
    }
  }
}

class ParticleSystem {
  constructor(maxParticles = 1500) {
    this.pool = [];
    this.maxParticles = maxParticles;
    for (let i = 0; i < maxParticles; i++) {
      this.pool.push(new SmokeParticle());
    }
    this.windX = 8.0; // gentle drift eastward
    this.windY = -3.0; // slight drift northward
    this.windOscillation = 0;
  }

  _getFreeParticle() {
    for (let i = 0; i < this.maxParticles; i++) {
      if (!this.pool[i].active) return this.pool[i];
    }
    return null; // pool full, skip gracefully
  }

  update(dt) {
    this.windOscillation += dt * 0.4;
    const currentWindX = this.windX + Math.sin(this.windOscillation) * 4;
    const currentWindY = this.windY + Math.cos(this.windOscillation) * 2;

    for (let i = 0; i < this.maxParticles; i++) {
      if (this.pool[i].active) {
        this.pool[i].update(dt, currentWindX, currentWindY);
      }
    }
  }

  emitMusketSmoke(x, y, angle, spread = 0.4) {
    // Muzzle flash
    const flash = this._getFreeParticle();
    if (flash) {
      flash.init(x, y, 0, 0, 3, 9, 1.0, 18.0, '#fef08a', 'flash');
    }

    // 2-3 billows of dense white-gray smoke
    const count = 2 + Math.floor(Math.random() * 2);
    for (let i = 0; i < count; i++) {
      const p = this._getFreeParticle();
      if (!p) break;
      const shotAngle = angle + (Math.random() - 0.5) * spread;
      const speed = 35 + Math.random() * 45;
      const vx = Math.cos(shotAngle) * speed;
      const vy = Math.sin(shotAngle) * speed;
      const shades = ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1'];
      const col = shades[Math.floor(Math.random() * shades.length)];
      p.init(
        x + (Math.random() - 0.5) * 4,
        y + (Math.random() - 0.5) * 4,
        vx,
        vy,
        4 + Math.random() * 3,
        24 + Math.random() * 16,
        0.75 + Math.random() * 0.2,
        0.28 + Math.random() * 0.15,
        col,
        'smoke'
      );
    }
  }

  emitCannonSmoke(x, y, angle) {
    // Massive bright fireball flash
    const flash = this._getFreeParticle();
    if (flash) {
      flash.init(x, y, 0, 0, 8, 26, 1.0, 10.0, '#fde047', 'flash');
    }

    // Volumetric heavy gunpowder cloud
    const count = 7 + Math.floor(Math.random() * 5);
    for (let i = 0; i < count; i++) {
      const p = this._getFreeParticle();
      if (!p) break;
      const shotAngle = angle + (Math.random() - 0.5) * 0.8;
      const speed = 50 + Math.random() * 90;
      const vx = Math.cos(shotAngle) * speed;
      const vy = Math.sin(shotAngle) * speed;
      const shades = ['#ffffff', '#f1f5f9', '#cbd5e1', '#94a3b8'];
      const col = shades[Math.floor(Math.random() * shades.length)];
      p.init(
        x + (Math.random() - 0.5) * 8,
        y + (Math.random() - 0.5) * 8,
        vx,
        vy,
        8 + Math.random() * 6,
        45 + Math.random() * 25,
        0.85 + Math.random() * 0.15,
        0.18 + Math.random() * 0.1,
        col,
        'smoke'
      );
    }

    // Sparks
    for (let i = 0; i < 5; i++) {
      const spark = this._getFreeParticle();
      if (!spark) break;
      const sAngle = angle + (Math.random() - 0.5) * 1.2;
      const sSpeed = 100 + Math.random() * 120;
      spark.init(
        x,
        y,
        Math.cos(sAngle) * sSpeed,
        Math.sin(sAngle) * sSpeed,
        1.5,
        2.5,
        1.0,
        3.0,
        '#f97316',
        'spark'
      );
    }
  }

  emitClashImpact(x, y) {
    // Sparks & dust on melee / shield clash
    for (let i = 0; i < 3; i++) {
      const p = this._getFreeParticle();
      if (!p) break;
      const a = Math.random() * Math.PI * 2;
      const spd = 25 + Math.random() * 35;
      p.init(x, y, Math.cos(a) * spd, Math.sin(a) * spd, 1.5, 3, 0.9, 4.0, '#fbbf24', 'spark');
    }
    const dust = this._getFreeParticle();
    if (dust) {
      dust.init(x, y, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, 3, 12, 0.4, 0.8, '#d4c5a9', 'dust');
    }
  }

  emitBloodLoss(x, y) {
    const p = this._getFreeParticle();
    if (p) {
      p.init(x, y, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, 2, 4, 0.7, 1.2, '#991b1b', 'blood');
    }
  }

  render(ctx) {
    ctx.save();
    for (let i = 0; i < this.maxParticles; i++) {
      const p = this.pool[i];
      if (!p.active) continue;

      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));

      if (p.type === 'smoke' || p.type === 'dust') {
        // Soft volumetric radial gradient
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, p.color);
        grad.addColorStop(0.5, p.color);
        grad.addColorStop(1, 'rgba(240, 240, 240, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'flash') {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'spark') {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - p.radius * 0.5, p.y - p.radius * 0.5, p.radius, p.radius);
      } else if (p.type === 'blood') {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
    ctx.restore();
  }
}

window.ParticleSystem = ParticleSystem;
