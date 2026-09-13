const fs = require('fs');
const path = require('path');
const baseDir = path.resolve(__dirname, '..');

const mockCtx = {
  clearRect: () => {}, fillRect: () => {}, strokeRect: () => {},
  beginPath: () => {}, moveTo: () => {}, lineTo: () => {}, closePath: () => {},
  stroke: () => {}, fill: () => {}, save: () => {}, restore: () => {},
  translate: () => {}, rotate: () => {}, scale: () => {}, setLineDash: () => {},
  arc: () => {}, ellipse: () => {}, fillText: () => {}, quadraticCurveTo: () => {},
  createLinearGradient: () => ({ addColorStop: () => {} }),
  createRadialGradient: () => ({ addColorStop: () => {} }),
  measureText: () => ({ width: 50 }),
  drawImage: () => {},
  roundRect: () => {}
};

global.window = global;
global.window.addEventListener = () => {};
global.document = {
  getElementById: (id) => ({
    style: {},
    innerText: '',
    innerHTML: '',
    classList: { toggle: () => {} },
    value: '',
    width: 1600,
    height: 1100,
    addEventListener: () => {},
    getContext: () => mockCtx
  }),
  addEventListener: () => {},
  createElement: () => ({
    width: 1600, height: 1100,
    getContext: () => mockCtx
  })
};
global.performance = { now: () => Date.now() };
global.requestAnimationFrame = () => {};

const files = [
  'src/core/audio.js',
  'src/render/smoke_system.js',
  'src/simulation/ballistics.js',
  'src/simulation/eras.js',
  'src/simulation/unit.js',
  'src/simulation/supply_system.js',
  'src/map/map_renderer.js',
  'src/map/territory.js',
  'src/map/scenarios.js',
  'src/campaign/world_map_data.js',
  'src/campaign/factions.js',
  'src/campaign/civ_builder.js',
  'src/campaign/economy.js',
  'src/campaign/tech_tree.js',
  'src/map/procedural_battlefield.js',
  'src/campaign/campaign_map.js',
  'src/campaign/army_strategic.js',
  'src/campaign/battle_bridge.js',
  'src/campaign/campaign_manager.js',
  'src/core/input.js',
  'src/core/engine.js'
];

files.forEach(f => {
  const content = fs.readFileSync(path.join(baseDir, f), 'utf8');
  (0, eval)(content);
});

console.log('Instantiating GameEngine...');
const engine = new global.GameEngine('game-canvas');
engine.campaign.activeMode = 'rts'; // Force RTS combat mode
engine.loadScenario('pavia');

console.log('Simulating 60 full seconds of intense tactical combat at 60 FPS (3600 frames)...');
let time = 1000;
for (let frame = 0; frame < 3600; frame++) {
  time += 16.66;
  try {
    engine._loop(time);
    if (frame % 900 === 0 && frame > 0) {
      console.log(`  Passed ${frame / 60}s (${frame} frames) without issue...`);
    }
  } catch (err) {
    console.error('💥 CRASH at frame', frame, 'time', ((time - 1000) / 1000).toFixed(2), 's:', err);
    process.exit(1);
  }
}
console.log('SUCCESS! 60 continuous seconds (3600 frames) simulated with 0 crashes.');
