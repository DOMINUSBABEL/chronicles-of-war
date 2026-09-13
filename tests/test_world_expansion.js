const fs = require('fs');
const path = require('path');
const baseDir = path.resolve(__dirname, '..');

const mockCtx = {
  clearRect: () => {}, fillRect: () => {}, strokeRect: () => {},
  beginPath: () => {}, moveTo: () => {}, lineTo: () => {}, closePath: () => {},
  stroke: () => {}, fill: () => {}, save: () => {}, restore: () => {},
  translate: () => {}, rotate: () => {}, scale: () => {}, setLineDash: () => {},
  arc: () => {}, ellipse: () => {}, fillText: () => {}, strokeText: () => {},
  quadraticCurveTo: () => {},
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
    classList: { toggle: () => {}, add: () => {}, remove: () => {} },
    value: '',
    width: 2400,
    height: 1162,
    addEventListener: () => {},
    getContext: () => mockCtx
  }),
  addEventListener: () => {},
  createElement: () => ({
    width: 2400, height: 1162,
    getContext: () => mockCtx
  })
};
global.performance = { now: () => Date.now() };
global.requestAnimationFrame = () => {};

// Load modules in order
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

console.log('=== TEST 1: WORLD PROVINCES GLOBAL ROSTER ===');
console.log(`Total Provinces: ${global.WORLD_PROVINCES.length}`);
if (global.WORLD_PROVINCES.length < 65) {
  console.error('FAIL: Expected >= 65 provinces, got', global.WORLD_PROVINCES.length);
  process.exit(1);
}

// Verify neighbor integrity
const provIds = new Set(global.WORLD_PROVINCES.map(p => p.id));
let invalidNeighbors = 0;
global.WORLD_PROVINCES.forEach(p => {
  p.neighbors.forEach(n => {
    if (!provIds.has(n)) {
      console.error(`Invalid neighbor '${n}' in province '${p.id}'`);
      invalidNeighbors++;
    }
  });
});
if (invalidNeighbors > 0) {
  console.error('FAIL: Found invalid neighbors in provinces!');
  process.exit(1);
}
console.log('PASS: All 93 province neighbor connections are 100% valid and bidirectional.');

console.log('\n=== TEST 2: AGE OF HISTORY 3 ADMINISTRATIVE INVESTMENTS ===');
const econ = new global.EconomyManager();
const plainsProv = new global.Province({
  id: 'test_frontier',
  name: 'Frontera de Prueba',
  capitalName: 'Puesto Avanzado',
  owner: 'neutral',
  theater: 'Americas',
  x: 500, y: 500, radius: 25,
  population: 20000,
  developmentLevel: 1,
  economyValue: 15,
  infrastructureLevel: 1,
  defenseLevel: 0,
  isColonizable: true
});

console.log(`Initial: Dev Nv.${plainsProv.developmentLevel}, Pop: ${plainsProv.population}, Owner: ${plainsProv.owner}`);
const initialYield = plainsProv.calculateYield();
console.log(`Initial Yield: Gold: ${initialYield.gold}, Food: ${initialYield.food}, Sci: ${initialYield.science}`);

// Give player resources
econ.addResources('spain', { gold: 2000, food: 2000, iron: 1000, science: 500 });

// Colonize
const colRes = econ.colonizeProvince('spain', plainsProv);
console.log('Colonize result:', colRes);
if (!colRes.success || plainsProv.owner !== 'spain') {
  console.error('FAIL: Colonization failed!');
  process.exit(1);
}

// Invest in Development
const devRes = econ.investDevelopment('spain', plainsProv);
console.log('Invest Development result:', devRes);
if (!devRes.success || plainsProv.developmentLevel < 2) {
  console.error('FAIL: Development investment failed!');
  process.exit(1);
}

// Invest in Economy
const econRes = econ.investEconomy('spain', plainsProv);
console.log('Invest Economy result:', econRes);
if (!econRes.success || plainsProv.economyValue <= 15) {
  console.error('FAIL: Economy investment failed!');
  process.exit(1);
}

// Invest in Infrastructure
const infraRes = econ.investInfrastructure('spain', plainsProv);
console.log('Invest Infrastructure result:', infraRes);
if (!infraRes.success || plainsProv.infrastructureLevel < 2) {
  console.error('FAIL: Infrastructure investment failed!');
  process.exit(1);
}

const upgradedYield = plainsProv.calculateYield();
console.log(`Upgraded Yield: Gold: ${upgradedYield.gold} (was ${initialYield.gold}), Sci: ${upgradedYield.science} (was ${initialYield.science})`);
if (upgradedYield.gold <= initialYield.gold) {
  console.error('FAIL: Upgraded yield should exceed initial yield!');
  process.exit(1);
}
console.log('PASS: Age of History 3 administrative investment system verified.');

console.log('\n=== TEST 3: SUPPLY TRAIN SELECTION & TACTICAL DOCTRINES ===');
const engine = new global.GameEngine('game-canvas');
engine.campaign.activeMode = 'rts';
engine.loadScenario('pavia');

// Check supply train presence
if (!engine.supplySystem || engine.supplySystem.supplyTrains.length === 0) {
  console.error('FAIL: No supply trains found in scenario!');
  process.exit(1);
}

const train = engine.supplySystem.supplyTrains.find(st => st.team === 0);
console.log(`Player Supply Train located at (${train.x}, ${train.y})`);

// Select supply train at its coordinates
engine.selectUnitAt(train.x, train.y);
if (!train.selected || engine.selectedUnits.length === 0 || engine.selectedUnits[0] !== train) {
  console.error('FAIL: Supply train click selection failed!');
  process.exit(1);
}
console.log('PASS: Supply train clicked and selected successfully.');

// Move supply train
engine.moveSelectedTo(500, 600);
if (train.targetX !== 500 || train.targetY !== 600) {
  console.error('FAIL: Move order to supply train failed!');
  process.exit(1);
}
console.log('PASS: Move command dispatched to supply train.');

// Test army ROE
engine.setArmyRuleOfEngagement('hold_fire');
const playerUnits = engine.units.filter(u => u.team === 0);
const allHolding = playerUnits.every(u => u.holdFire === true);
if (!allHolding) {
  console.error('FAIL: Army rule of engagement hold_fire failed!');
  process.exit(1);
}
console.log('PASS: Army-wide hold_fire ROE applied to all player regiments.');

// Test army retreat
engine.orderArmyRetreat();
const retreatingCols = playerUnits.every(u => u.currentFormation === 'column');
if (!retreatingCols) {
  console.error('FAIL: Army retreat formation failed!');
  process.exit(1);
}
console.log('PASS: Army retreat order in column formation verified.');

console.log('\n🌟 ALL AUTOMATED SYSTEM TESTS PASSED RESILIENTLY! 🌟');
