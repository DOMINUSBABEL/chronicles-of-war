/**
 * Test Suite: 550 Provinces Dataset & Continuous Voronoi Geometry Verification
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('--- TEST: 550 Provinces Dataset & Geometry ---');

// Mock browser globals for world_map_data.js
global.window = {};

// Load world_map_data.js
const worldMapCode = fs.readFileSync(path.join(__dirname, '../src/campaign/world_map_data.js'), 'utf8');
eval(worldMapCode);

const mapData = global.window.WORLD_PROVINCES;
assert(mapData, 'WORLD_PROVINCES must be defined on window');

console.log(`✓ WORLD_PROVINCES loaded successfully with ${mapData.length} provinces.`);

// 1. Check exact province count
assert.strictEqual(mapData.length, 550, `Expected exactly 550 provinces, got ${mapData.length}`);
console.log('✓ Exactly 550 provinces present.');

// 2. Validate province structure and attributes
const idSet = new Set();
const regions = new Set();
const terrains = new Set();
const tradeGoods = new Set();

mapData.forEach((p, idx) => {
  assert(p.id, `Province #${idx} missing id`);
  assert(!idSet.has(p.id), `Duplicate province ID: ${p.id}`);
  idSet.add(p.id);

  assert(p.name, `Province ${p.id} missing name`);
  assert(typeof p.x === 'number' && p.x >= 0 && p.x <= 2400, `Province ${p.id} x out of bounds: ${p.x}`);
  assert(typeof p.y === 'number' && p.y >= 0 && p.y <= 1162, `Province ${p.id} y out of bounds: ${p.y}`);
  assert(p.terrain, `Province ${p.id} missing terrain`);
  assert(p.theater, `Province ${p.id} missing theater`);
  assert(p.tradeGood, `Province ${p.id} missing tradeGood`);
  assert(typeof p.economyValue === 'number' && p.economyValue >= 1, `Province ${p.id} invalid economyValue`);
  assert(typeof p.population === 'number' && p.population >= 1, `Province ${p.id} invalid population`);
  assert(typeof p.developmentLevel === 'number' && p.developmentLevel >= 1, `Province ${p.id} invalid developmentLevel`);

  regions.add(p.theater);
  terrains.add(p.terrain);
  tradeGoods.add(p.tradeGood);

  // Validate Voronoi polygon
  assert(Array.isArray(p.polygon), `Province ${p.id} polygon must be an array`);
  assert(p.polygon.length >= 3, `Province ${p.id} polygon has < 3 vertices (${p.polygon.length})`);
  p.polygon.forEach((pt, ptIdx) => {
    assert(typeof pt.x === 'number' && pt.x >= -10 && pt.x <= 2410, `Province ${p.id} vertex #${ptIdx} x out of bounds: ${pt.x}`);
    assert(typeof pt.y === 'number' && pt.y >= -10 && pt.y <= 1172, `Province ${p.id} vertex #${ptIdx} y out of bounds: ${pt.y}`);
  });

  // Validate neighbors array
  assert(Array.isArray(p.neighbors), `Province ${p.id} neighbors must be an array`);
});

console.log(`✓ All 550 provinces have valid coordinates, polygons (>=3 vertices), tax, and manpower.`);
console.log(`✓ Regions covered (${regions.size}):`, Array.from(regions).join(', '));
console.log(`✓ Terrains represented:`, Array.from(terrains).join(', '));
console.log(`✓ Trade goods represented (${tradeGoods.size}):`, Array.from(tradeGoods).join(', '));

// 3. Verify bidirectional graph topology
let neighborPairCount = 0;
mapData.forEach(p => {
  p.neighbors.forEach(nId => {
    const neighbor = mapData.find(other => other.id === nId);
    assert(neighbor, `Province ${p.id} lists non-existent neighbor ${nId}`);
    assert(neighbor.neighbors.includes(p.id), `Province ${p.id} has neighbor ${nId}, but ${nId} does not list ${p.id}`);
    neighborPairCount++;
  });
});

console.log(`✓ Bidirectional adjacency graph verified with ${neighborPairCount / 2} unique topological borders.`);
console.log('--- TEST PASSED: 550 Provinces Dataset & Geometry ---');
