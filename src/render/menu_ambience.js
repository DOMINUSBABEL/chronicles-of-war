/**
 * Chronicles of War - Menu Ambience & Atmospheric FX
 * Baroque battlefield atmosphere: drifting gunpowder smoke, rising embers, and lantern glow.
 */

class MenuAmbience {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.running = false;
    this.particles = [];
    this.smokePuffs = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.lastTime = performance.now();
    this.animId = null;

    this._onMouseMove = this._onMouseMove.bind(this);
    this._onResize = this._onResize.bind(this);
  }

  init(canvasId = 'menu-fx-canvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this._onResize();
    window.addEventListener('resize', this._onResize);
    window.addEventListener('mousemove', this._onMouseMove);

    // Initial embers
    this.particles = [];
    for (let i = 0; i < 45; i++) {
      this.particles.push(this._createEmber(true));
    }

    // Initial smoke puffs
    this.smokePuffs = [];
    for (let i = 0; i < 12; i++) {
      this.smokePuffs.push(this._createSmoke(true));
    }

    this.start();
  }

  _onResize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  _onMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  _createEmber(randomY = false) {
    const w = this.canvas ? this.canvas.width : window.innerWidth;
    const h = this.canvas ? this.canvas.height : window.innerHeight;
    return {
      x: Math.random() * w,
      y: randomY ? Math.random() * h : h + 10 + Math.random() * 20,
      vx: (Math.random() - 0.5) * 0.8 + 0.3,
      vy: -(0.6 + Math.random() * 1.4),
      size: 1.2 + Math.random() * 2.8,
      alpha: 0.2 + Math.random() * 0.7,
      maxLife: 4 + Math.random() * 6,
      life: 0,
      hue: Math.random() > 0.4 ? 38 + Math.random() * 12 : 12 + Math.random() * 18, // Gold / Amber / Flame
      flicker: Math.random() * Math.PI * 2
    };
  }

  _createSmoke(randomY = false) {
    const w = this.canvas ? this.canvas.width : window.innerWidth;
    const h = this.canvas ? this.canvas.height : window.innerHeight;
    return {
      x: Math.random() * (w * 0.8),
      y: randomY ? h * 0.4 + Math.random() * (h * 0.6) : h + 40,
      vx: 0.15 + Math.random() * 0.35,
      vy: -(0.2 + Math.random() * 0.4),
      radius: 60 + Math.random() * 100,
      maxRadius: 180 + Math.random() * 140,
      alpha: 0,
      targetAlpha: 0.04 + Math.random() * 0.07,
      growth: 0.12 + Math.random() * 0.18,
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.003,
      life: 0,
      maxLife: 14 + Math.random() * 10
    };
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    this._loop(this.lastTime);
  }

  stop() {
    this.running = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  _loop(time) {
    if (!this.running) return;
    const dt = Math.min(0.1, (time - this.lastTime) / 1000);
    this.lastTime = time;

    this._update(dt);
    this._render();

    this.animId = requestAnimationFrame((t) => this._loop(t));
  }

  _update(dt) {
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Update embers
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.life += dt;
      p.x += p.vx * 60 * dt;
      p.y += p.vy * 60 * dt;
      p.flicker += dt * 6;

      // Slight mouse draft influence
      const dx = p.x - this.mouseX;
      const dy = p.y - this.mouseY;
      const d = Math.hypot(dx, dy);
      if (d < 180 && d > 1) {
        const force = (1 - d / 180) * 0.8;
        p.x += (dx / d) * force;
        p.y += (dy / d) * force;
      }

      if (p.life >= p.maxLife || p.y < -10 || p.x > w + 20 || p.x < -20) {
        this.particles[i] = this._createEmber(false);
      }
    }

    // Update smoke puffs
    for (let i = 0; i < this.smokePuffs.length; i++) {
      const s = this.smokePuffs[i];
      s.life += dt;
      s.x += s.vx * 40 * dt;
      s.y += s.vy * 40 * dt;
      s.radius = Math.min(s.maxRadius, s.radius + s.growth * 40 * dt);
      s.rotation += s.vRot;

      const halfLife = s.maxLife * 0.5;
      if (s.life < halfLife) {
        s.alpha = (s.life / halfLife) * s.targetAlpha;
      } else {
        s.alpha = (1 - (s.life - halfLife) / halfLife) * s.targetAlpha;
      }

      if (s.life >= s.maxLife || s.y < -s.radius) {
        this.smokePuffs[i] = this._createSmoke(false);
      }
    }
  }

  _render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    // 1. Soft Gunpowder Smoke Puffs
    ctx.save();
    for (let i = 0; i < this.smokePuffs.length; i++) {
      const s = this.smokePuffs[i];
      if (s.alpha <= 0.001) continue;

      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.rotation);

      const grad = ctx.createRadialGradient(0, 0, s.radius * 0.1, 0, 0, s.radius);
      grad.addColorStop(0, `rgba(220, 215, 205, ${s.alpha * 1.4})`);
      grad.addColorStop(0.5, `rgba(160, 150, 140, ${s.alpha * 0.8})`);
      grad.addColorStop(1, 'rgba(40, 35, 30, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, s.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();

    // 2. Rising Golden / Fiery Embers
    ctx.save();
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      const alphaPulse = Math.max(0, Math.min(1, p.alpha * (0.75 + Math.sin(p.flicker) * 0.25)));

      ctx.save();
      ctx.shadowColor = `hsl(${p.hue}, 100%, 65%)`;
      ctx.shadowBlur = p.size * 3.5;

      ctx.fillStyle = `hsla(${p.hue}, 95%, 65%, ${alphaPulse})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Hot white core
      if (p.size > 1.8) {
        ctx.fillStyle = `rgba(255, 255, 255, ${alphaPulse * 0.8})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.45, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
    ctx.restore();

    // 3. Subtle Warm Vignette on borders
    ctx.save();
    const vigGrad = ctx.createRadialGradient(w * 0.5, h * 0.45, Math.min(w, h) * 0.35, w * 0.5, h * 0.5, Math.max(w, h) * 0.85);
    vigGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vigGrad.addColorStop(0.7, 'rgba(10, 6, 3, 0.4)');
    vigGrad.addColorStop(1, 'rgba(5, 3, 2, 0.82)');

    ctx.fillStyle = vigGrad;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }
}

if (typeof window !== 'undefined') {
  window.MenuAmbience = MenuAmbience;
}
