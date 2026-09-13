/**
 * Chronicles of War - Verification Test Suite:
 * AoH3 Anti-Density De-Cluttering, 3D Globe Projection, and RTS Battlefield Expansion
 */

const fs = require('fs');
const path = require('path');
const baseDir = path.resolve(__dirname, '..');

// Mock browser / DOM / Canvas environment
const mockCtx = {
  clearRect: () => {}, fillRect: () => {}, strokeRect: () => {},
  beginPath: () => {}, moveTo: () => {}, lineTo: () => {}, closePath: () => {},
  stroke: () => {}, fill: () => {}, save: () => {}, restore: () => {},
  translate: () => {}, rotate: () => {}, scale: () => {}, setLineDash: () => {},
  arc: () => {}, ellipse: () => {}, fillText: () => {}, strokeText: () => {},
  quadraticCurveTo: () => {},
  createLinearGradient: () => ({ addColorStop: () => {} }),
  createRadialGradient: () => ({ addColorStop: () => {} }),
  measureText: (txt) => ({ width: (txt ? txt.length * 6 : 40) }),
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
    height: 1200,
    addEventListener: () => {},
    getContext: () => mockCtx,
    appendChild: () => {}
  }),
  body: {
    appendChild: () => {}
  },
  addEventListener: () => {},
  createElement: () => ({
    width: 2400, height: 1200,
    style: {},
    getContext: () => mockCtx,
    appendChild: () => {}
  })
};
global.performance = { now: () => Date.now() };
global.requestAnimationFrame = () => {};

// Mock THREE.js for Node unit test environment
global.THREE = {
  Scene: function() { this.add = () => {}; },
  PerspectiveCamera: function() { this.position = { set: () => {}, z: 0 }; this.updateProjectionMatrix = () => {}; },
  WebGLRenderer: function() {
    this.domElement = { addEventListener: () => {}, getBoundingClientRect: () => ({ left: 0, top: 0, width: 800, height: 600 }) };
    this.setSize = () => {};
    this.setPixelRatio = () => {};
    this.render = () => {};
  },
  AmbientLight: function() {},
  DirectionalLight: function() { this.position = { set: () => {} }; },
  SphereGeometry: function() {},
  CanvasTexture: function() {},
  MeshStandardMaterial: function() {},
  MeshBasicMaterial: function() {},
  Mesh: function() { this.rotation = { x: 0, y: 0 }; },
  Raycaster: function() { this.setFromCamera = () => {}; this.intersectObject = () => []; },
  Vector2: function() { this.x = 0; this.y = 0; },
  BackSide: 1,
  AdditiveBlending: 2,
  ClampToEdgeWrapping: 1000,
  LinearFilter: 1001
};

// Load codebase scripts in order
eval(fs.readFileSync(path.join(baseDir, 'src/simulation/eras.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/simulation/unit.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/map/map_renderer.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/map/scenarios.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/world_map_data.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/factions.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/economy.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/campaign_map.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/army_strategic.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/globe_view_3d.js'), 'utf8'));

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    testsPassed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    testsFailed++;
  }
}

console.log('\n===============================================================');
console.log('🧪 TEST SUITE 1: AoH3 ANTI-DENSITY NATION CLUSTERING & LABELS');
console.log('===============================================================');

const map = new StrategicCampaignMap(global.document.getElementById('game-canvas'));
assert(map.provinces.length > 50, `Provinces loaded on map: ${map.provinces.length}`);

// Test 1.1: AABB Anti-Collision Box Manager
map._placedLabelBoxes = [];
const box1Placed = map._checkAndAddLabelBox(100, 100, 80, 20);
assert(box1Placed === true, 'First label box placed successfully at (100, 100, 80, 20)');

const box2Overlap = map._checkAndAddLabelBox(120, 105, 80, 20);
assert(box2Overlap === false, 'Overlapping label box (120, 105) rejected by AABB anti-collision');

const box3Separated = map._checkAndAddLabelBox(250, 250, 80, 20);
assert(box3Separated === true, 'Separated label box (250, 250) accepted without collision');

// Test 1.2: Nation Clusters formation at Macro zoom
map.zoom = 1.0; // Macro zoom
map._placedLabelBoxes = [];
let clusterCalls = 0;
const origFillText = mockCtx.fillText;
const capturedLabels = [];
mockCtx.fillText = function(txt, x, y) {
  capturedLabels.push(txt);
};

map._renderNationClusters(mockCtx);
mockCtx.fillText = origFillText;

assert(capturedLabels.length > 0, `Unified nation cluster titles rendered: ${capturedLabels.join(', ')}`);
const hasSpain = capturedLabels.some(l => l && l.replace(/\s+/g, '').includes('ESPAÑOL'));
const hasFrance = capturedLabels.some(l => l && l.replace(/\s+/g, '').includes('FRANCIA'));
assert(hasSpain || hasFrance, 'Historical nation titles correctly computed for clusters');

// Test 1.3: Contextual Mapmode filtering
map.setMapMode('political');
assert(map.mapMode === 'political', 'Mapmode set to political');
map.setMapMode('trade');
assert(map.mapMode === 'trade', 'Mapmode switched to trade');

console.log('\n===============================================================');
console.log('🧪 TEST SUITE 2: COMPACT STRATEGIC ARMY COUNTERS');
console.log('===============================================================');

const testArmy = new StrategicArmy(99, 'spain', 'Duque de Alba', 'castilla', [
  { unitKey: 'tercio', soldiers: 56, maxSoldiers: 56 },
  { unitKey: 'arquebusiers', soldiers: 36, maxSoldiers: 36 }
]);
assert(testArmy.totalSoldiers === 92, `Army computes total soldiers: ${testArmy.totalSoldiers} (expected 92)`);

// Test counter render without error
let armyRenderedOk = false;
try {
  testArmy.renderOnCampaign(mockCtx, false, false);
  testArmy.renderOnCampaign(mockCtx, true, true); // Hovered & selected
  armyRenderedOk = true;
} catch (e) {
  console.error('Error rendering army counter:', e);
}
assert(armyRenderedOk, 'AoH3 compact army counter badge rendered successfully for idle, hover, and selected');

console.log('\n===============================================================');
console.log('🧪 TEST SUITE 3: RTS BATTLEFIELD EXPANSION & TOPOGRAPHY');
console.log('===============================================================');

const tacticalMap = new TacticalMap(3200, 2400);
assert(tacticalMap.width === 3200 && tacticalMap.height === 2400, 'TacticalMap default dimensions are expanded to 3200x2400 px');

// Test topography detection
tacticalMap.hills = [{ x: 500, y: 500, rx: 100, ry: 80 }];
tacticalMap.forests = [{ x: 1000, y: 1000, rx: 120, ry: 90 }];
tacticalMap.rivers = [{ width: 30, points: [{ x: 200, y: 0 }, { x: 200, y: 1000 }], bridges: [{ x: 200, y: 500 }] }];
tacticalMap.roads = [{ width: 20, points: [{ x: 0, y: 300 }, { x: 1500, y: 300 }] }];

assert(tacticalMap.getTerrainAt(500, 500) === 'hill', 'Terrain at (500, 500) detected as hill');
assert(tacticalMap.getTerrainAt(1000, 1000) === 'forest', 'Terrain at (1000, 1000) detected as forest');
assert(tacticalMap.getTerrainAt(200, 200) === 'water', 'Terrain at (200, 200) detected as water');
assert(tacticalMap.getTerrainAt(200, 500) === 'road', 'Terrain at (200, 500) (bridge) detected as road');
assert(tacticalMap.getTerrainAt(500, 300) === 'road', 'Terrain at (500, 300) detected as road');
assert(tacticalMap.getTerrainAt(100, 100) === 'plains', 'Terrain at (100, 100) detected as plains');

// Test Unit Topography Modifiers
const mockEraDef = {
  name: 'Tercio Español',
  category: 'infantry',
  weaponType: 'pike',
  speed: 40,
  maxHealth: 100,
  attack: 12,
  defense: 10,
  range: 0,
  formation: 'square'
};
const unit = new Unit(1, mockEraDef, 0, 500, 500, 0);

// Test coordinate perimeter clamping
unit.x = -50;
unit.y = 2500;
unit.update(0.016, tacticalMap, [], { checkLineOfFire: () => true }, { emitBloodSplatter: () => {} }, { playMeleeClash: () => {} });
assert(unit.x >= 20 && unit.x <= tacticalMap.width - 20, `Unit x was clamped from -50 to ${unit.x}`);
assert(unit.y >= 20 && unit.y <= tacticalMap.height - 20, `Unit y was clamped from 2500 to ${unit.y}`);

// Test Division Banner rendering at Macro RTS Zoom (LOD < 0.72)
let divisionBannerRendered = false;
const prevFillText2 = mockCtx.fillText;
mockCtx.fillText = function(txt) {
  if (txt && (txt === '🛡️' || txt === '⚔️' || txt === unit.currentSoldiers.toString())) {
    divisionBannerRendered = true;
  }
};
unit.render(mockCtx, 0.5); // Macro zoom < 0.72
mockCtx.fillText = prevFillText2;
assert(divisionBannerRendered, 'Macro Division Banner rendered for unit at zoom < 0.72x (Wargame / Total War style)');

console.log('\n===============================================================');
console.log('🧪 TEST SUITE 4: 3D GLOBE PROJECTION MODULE');
console.log('===============================================================');

const mockCampaignManager = {
  map: map,
  armies: [testArmy],
  selectedArmy: null,
  selectProvince: () => {},
  game: { sound: { playTrumpetCall: () => {} } }
};

const globe = new GlobeView3D(mockCampaignManager);
const initSuccess = globe.init('globe-container');
assert(initSuccess === true, 'GlobeView3D initialized Three.js scene, camera, lighting, and sphere mesh');

globe.toggle(true);
assert(globe.isActive === true, 'GlobeView3D toggled to ACTIVE (3D Globe mode)');
assert(globe.container.style.display === 'block', 'Globe container display set to block');

globe.toggle(false);
assert(globe.isActive === false, 'GlobeView3D toggled to INACTIVE (2D Map mode)');
assert(globe.container.style.display === 'none', 'Globe container display set to none');

console.log('\n===============================================================');
console.log(`🏁 TEST SUMMARY: ${testsPassed} passed, ${testsFailed} failed`);
console.log('===============================================================\n');

if (testsFailed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL AoH3 ANTI-DENSITY, 3D GLOBE, AND RTS EXPANSION TESTS PASSED!');
}
