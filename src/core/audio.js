/**
 * Chronicles of War - Audio Engine (Web Audio API)
 * Procedural Historical Sound Effects (Zero External Assets Required)
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.volume = 0.6;
    this.masterGain = null;
    this.initialized = false;
    this.audioBuffers = {};
    this.ambientSource = null;
  }

  init() {
    if (this.initialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.volume;
      this.masterGain.connect(this.ctx.destination);
      this.initialized = true;

      // Load broadcast-grade audio samples from Cossacks 3 assets
      this.loadSamples();
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  async loadSamples() {
    if (!this.ctx) return;
    const sampleFiles = {
      musket: ['assets/audio/musket1.ogg', 'assets/audio/musket2.ogg', 'assets/audio/musket3.ogg'],
      cannon: ['assets/audio/cannon1.ogg', 'assets/audio/cannon2.ogg'],
      cannonHit: ['assets/audio/cannon_hit.ogg'],
      melee: ['assets/audio/melee1.ogg', 'assets/audio/melee2.ogg'],
      arrow: ['assets/audio/arrow1.ogg'],
      arrowHit: ['assets/audio/arrow_hit.ogg'],
      alarm: ['assets/audio/alarm.ogg'],
      ambience: ['assets/audio/battle_amb.ogg']
    };

    for (const [key, paths] of Object.entries(sampleFiles)) {
      this.audioBuffers[key] = [];
      for (const path of paths) {
        try {
          const res = await fetch(path);
          if (res.ok) {
            const arrayBuf = await res.arrayBuffer();
            const audioBuf = await this.ctx.decodeAudioData(arrayBuf);
            this.audioBuffers[key].push(audioBuf);
          }
        } catch (e) {
          // Fallback to procedural Web Audio
        }
      }
    }

    // Start subtle atmospheric battle ambience once loaded
    this.playBattleAmbience();
  }

  _playSample(key, pan = 0, volume = 1.0) {
    if (!this.enabled || !this.ctx) return false;
    const list = this.audioBuffers && this.audioBuffers[key];
    if (!list || list.length === 0) return false;

    try {
      this.resume();
      const buffer = list[Math.floor(Math.random() * list.length)];
      const source = this.ctx.createBufferSource();
      source.buffer = buffer;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(volume * this.volume, this.ctx.currentTime);

      const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
      if (panner) {
        panner.pan.setValueAtTime(Math.max(-1, Math.min(1, pan)), this.ctx.currentTime);
        source.connect(gain).connect(panner).connect(this.masterGain);
      } else {
        source.connect(gain).connect(this.masterGain);
      }

      source.start();
      return true;
    } catch (e) {
      return false;
    }
  }

  playBattleAmbience() {
    if (!this.enabled || !this.ctx || this.ambientSource) return;
    const list = this.audioBuffers && this.audioBuffers['ambience'];
    if (!list || list.length === 0) return;

    try {
      this.ambientSource = this.ctx.createBufferSource();
      this.ambientSource.buffer = list[0];
      this.ambientSource.loop = true;

      const ambGain = this.ctx.createGain();
      ambGain.gain.setValueAtTime(0.20 * this.volume, this.ctx.currentTime);

      this.ambientSource.connect(ambGain).connect(this.masterGain);
      this.ambientSource.start();
    } catch (e) {
      // Ignore ambience error
    }
  }

  playAlarm() {
    if (this._playSample('alarm', 0, 0.85)) return;
    this.playTrumpetCall();
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  toggleSound() {
    this.enabled = !this.enabled;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.enabled ? this.volume : 0, this.ctx.currentTime);
    }
    return this.enabled;
  }

  // Gunpowder Musket / Arquebus Volley
  playMusketVolley(pan = 0, count = 5) {
    if (!this.enabled || !this.ctx) return;
    this.resume();

    // Prefer high-definition Cossacks 3 sample if loaded
    if (this._playSample('musket', pan, 0.75)) {
      if (count > 4) {
        setTimeout(() => this._playSample('musket', pan + (Math.random() - 0.5) * 0.2, 0.65), 50 + Math.random() * 80);
      }
      return;
    }

    const t = this.ctx.currentTime;
    for (let i = 0; i < count; i++) {
      const delay = Math.random() * 0.18;
      this._createSingleShot(t + delay, pan, 240 + Math.random() * 80);
    }
  }

  _createSingleShot(time, pan, cutoff) {
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.35);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.05));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(cutoff, time);
    filter.Q.setValueAtTime(2.5, time);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.7, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.35);

    const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
    if (panner) panner.pan.setValueAtTime(Math.max(-1, Math.min(1, pan)), time);

    if (panner) {
      noise.connect(filter).connect(gain).connect(panner).connect(this.masterGain);
    } else {
      noise.connect(filter).connect(gain).connect(this.masterGain);
    }

    noise.start(time);
  }

  // Heavy Cannon / Bombard Roar & Ground Shake
  playCannon(pan = 0) {
    if (!this.enabled || !this.ctx) return;
    this.resume();

    if (this._playSample('cannon', pan, 1.0)) {
      setTimeout(() => this._playSample('cannonHit', pan + (Math.random() - 0.5) * 0.3, 0.6), 180 + Math.random() * 120);
      return;
    }

    const t = this.ctx.currentTime;

    // Sub-bass punch oscillator
    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(30, t + 0.5);

    const oscGain = this.ctx.createGain();
    oscGain.gain.setValueAtTime(1.0, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.8);

    // Blast noise
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.9);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.15));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, t);
    filter.frequency.exponentialRampToValueAtTime(80, t + 0.7);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.9, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.9);

    const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
    if (panner) panner.pan.setValueAtTime(Math.max(-1, Math.min(1, pan)), t);

    const dest = panner ? panner : this.masterGain;
    if (panner) panner.connect(this.masterGain);

    osc.connect(oscGain).connect(dest);
    noise.connect(filter).connect(noiseGain).connect(dest);

    osc.start(t);
    osc.stop(t + 0.85);
    noise.start(t);
  }

  // Clashing Pikes, Swords, and Shields
  playSteelClash(pan = 0) {
    if (!this.enabled || !this.ctx) return;
    this.resume();

    if (this._playSample('melee', pan, 0.55)) {
      return;
    }

    const t = this.ctx.currentTime;
    const freqs = [1800 + Math.random() * 600, 2900 + Math.random() * 400];

    freqs.forEach(freq => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.7, t + 0.15);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

      osc.connect(gain).connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.2);
    });
  }

  // Arrow Volley (Swish + Thuds)
  playArrowVolley(pan = 0) {
    if (!this.enabled || !this.ctx) return;
    this.resume();

    if (this._playSample('arrow', pan, 0.65)) {
      setTimeout(() => this._playSample('arrowHit', pan + (Math.random() - 0.5) * 0.2, 0.45), 220 + Math.random() * 100);
      return;
    }

    const t = this.ctx.currentTime;
    for (let i = 0; i < 4; i++) {
      const delay = Math.random() * 0.2;
      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(600 + Math.random() * 200, t + delay);
      osc.frequency.exponentialRampToValueAtTime(200, t + delay + 0.15);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, t + delay);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.18, t + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.15);

      osc.connect(filter).connect(gain).connect(this.masterGain);
      osc.start(t + delay);
      osc.stop(t + delay + 0.16);
    }
  }

  // Military Drums (Order / Advance)
  playMarchDrums() {
    if (!this.enabled || !this.ctx) return;
    this.resume();

    const t = this.ctx.currentTime;
    const beats = [0, 0.15, 0.3, 0.45];

    beats.forEach(b => {
      const osc = this.ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(110, t + b);
      osc.frequency.exponentialRampToValueAtTime(45, t + b + 0.12);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.5, t + b);
      gain.gain.exponentialRampToValueAtTime(0.001, t + b + 0.14);

      osc.connect(gain).connect(this.masterGain);
      osc.start(t + b);
      osc.stop(t + b + 0.15);
    });
  }

  // Bugle / Trumpet Call
  playTrumpetCall() {
    if (!this.enabled || !this.ctx) return;
    this.resume();

    const t = this.ctx.currentTime;
    const notes = [392, 523.25, 659.25, 783.99]; // G4, C5, E5, G5
    const durations = [0.12, 0.12, 0.12, 0.28];

    let curTime = t;
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, curTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1800, curTime);

      const gain = this.ctx.createGain();
      const dur = durations[idx];
      gain.gain.setValueAtTime(0.2, curTime);
      gain.gain.exponentialRampToValueAtTime(0.001, curTime + dur);

      osc.connect(filter).connect(gain).connect(this.masterGain);
      osc.start(curTime);
      osc.stop(curTime + dur);
      curTime += dur * 0.9;
    });
  }
}

window.SoundEngine = SoundEngine;
