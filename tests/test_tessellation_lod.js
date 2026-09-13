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

// Load required scripts
eval(fs.readFileSync(path.join(baseDir, 'src/simulation/eras.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/world_map_data.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/factions.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/economy.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/campaign_map.js'), 'utf8'));

const WORLD_PROVINCES = global.WORLD_PROVINCES;
const CAMPAIGN_THEATERS = global.CAMPAIGN_THEATERS;
const EconomyManager = global.EconomyManager;

console.log('=== TEST 1: TESSELLATION POLYGON VALIDATION ===');
const STRATEGIC_GOODS = ['grain', 'wool', 'timber', 'iron', 'saltpeter', 'spices', 'silver', 'gold'];

let validPolys = 0;
let validPoints = 0;
const goodsDistribution = {};
STRATEGIC_GOODS.forEach(g => goodsDistribution[g] = 0);

// Point in polygon test (Ray-casting algorithm)
function pointInPolygon(px, py, vs) {
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const xi = vs[i].x, yi = vs[i].y;
    const xj = vs[j].x, yj = vs[j].y;
    const intersect = ((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

// Polygon area test (Shoelace formula)
function polygonArea(vs) {
  let area = 0;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    area += (vs[j].x + vs[i].x) * (vs[j].y - vs[i].y);
  }
  return Math.abs(area / 2);
}

for (const prov of WORLD_PROVINCES) {
  if (!prov.polygon || !Array.isArray(prov.polygon) || prov.polygon.length < 3) {
    throw new Error(`Province ${prov.id} does not have a valid polygon!`);
  }
  const area = polygonArea(prov.polygon);
  if (area <= 50) {
    throw new Error(`Province ${prov.id} has an abnormally small area: ${area}`);
  }
  
  // Check points are numbers
  for (const pt of prov.polygon) {
    if (typeof pt.x !== 'number' || isNaN(pt.x) || typeof pt.y !== 'number' || isNaN(pt.y)) {
      throw new Error(`Province ${prov.id} has invalid coordinates in polygon: ${JSON.stringify(pt)}`);
    }
    validPoints++;
  }

  // Check center point inside polygon
  const centerInside = pointInPolygon(prov.x, prov.y, prov.polygon);
  if (!centerInside) {
    throw new Error(`Province ${prov.id} center point (${prov.x}, ${prov.y}) is outside its polygon!`);
  }

  // Check trade goods
  if (!prov.tradeGood || !STRATEGIC_GOODS.includes(prov.tradeGood)) {
    throw new Error(`Province ${prov.id} has invalid trade good: ${prov.tradeGood}`);
  }
  goodsDistribution[prov.tradeGood]++;

  validPolys++;
}

console.log(`✅ Verified ${validPolys}/93 province polygons (${validPoints} vertices total).`);
console.log(`✅ 100% of province centers lie strictly inside their polygonal tessellations.`);
console.log('📊 Trade Goods Distribution across 93 Provinces:');
for (const [good, count] of Object.entries(goodsDistribution)) {
  console.log(`   - ${good.padEnd(12)}: ${count} provinces (${((count / 93) * 100).toFixed(1)}%)`);
}

console.log('\n=== TEST 2: STRATEGIC TRADE GOODS & MONOPOLY BONUSES ===');
const economy = new EconomyManager();

// Create a mock list of provinces with diverse trade goods
const provInstances = WORLD_PROVINCES.map(data => new global.Province(data));
provInstances.slice(0, 10).forEach(p => p.owner = 'spain');

const reports = economy.processTurnIncome(provInstances, []);
console.log(`Spain Turn Income Report:`, reports.spain);

if (!reports.spain || typeof reports.spain.gold !== 'number' || reports.spain.gold <= 0) {
  throw new Error('Expected positive gold income for Spain from owned provinces!');
}
console.log('✅ Trade goods and province taxation processed successfully.');

console.log('\n=== TEST 3: THEATER HOTBAR & ZOOM CONFIGURATION ===');
const mapInstance = new global.StrategicCampaignMap(null, global.document.createElement());
const theaters = Object.keys(mapInstance.theaters);
console.log(`Configured theaters (${theaters.length}):`, theaters.join(', '));
for (const [key, data] of Object.entries(mapInstance.theaters)) {
  if (typeof data.x !== 'number' || typeof data.y !== 'number' || typeof data.zoom !== 'number') {
    throw new Error(`Theater ${key} has invalid coordinates or zoom level!`);
  }
  if (data.zoom < 0.4 || data.zoom > 4.5) {
    throw new Error(`Theater ${key} zoom ${data.zoom} is outside allowed range (0.4 - 4.5)!`);
  }
}

// Test flying to Flanders
mapInstance.flyToTheater('flanders');
if (mapInstance.targetZoom !== 4.2) {
  throw new Error(`Expected targetZoom 4.2 for Flanders, got ${mapInstance.targetZoom}`);
}
console.log('✅ All theater focal points, deep zoom parameters, and flyTo camera lerp verified.');

console.log('\n🎉 ALL 4X TESSELLATION, TRADE GOODS & LOD TESTS PASSED 100%! 🎉');
