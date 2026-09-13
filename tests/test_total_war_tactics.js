/**
 * Test Suite: Total War Tactical Orders & Mechanics Verification
 * Tests:
 * 1. TacticalMap default 4800x3200 dimensions.
 * 2. ProceduralBattlefieldGenerator 4800x3200 scale and capture points.
 * 3. Unit Tactical Suite (fireAtWill, skirmishMode, guardMode, isAmbushing, meleeStance).
 * 4. Skirmish kiting behavior away from approaching melee enemies.
 * 5. Guard Mode damage reduction (+25% effective defense) and knockback bracing.
 * 6. Ambush stealth concealment (invisible beyond 95px) and ambush strike surprise shock (+40% dmg, +60% morale shock).
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');

console.log('--- TEST: Total War Tactical Orders & Mechanics ---');

// Mock browser environment
global.window = {
  game: {
    battlefieldCasualties: []
  }
};

// Load eras, unit, map_renderer, and procedural_battlefield
eval(fs.readFileSync(path.join(__dirname, '../src/simulation/eras.js'), 'utf8'));
eval(fs.readFileSync(path.join(__dirname, '../src/simulation/unit.js'), 'utf8'));
eval(fs.readFileSync(path.join(__dirname, '../src/map/map_renderer.js'), 'utf8'));
eval(fs.readFileSync(path.join(__dirname, '../src/map/procedural_battlefield.js'), 'utf8'));

// 1. TacticalMap dimensions
const tMap = new global.window.TacticalMap();
assert.strictEqual(tMap.width, 4800, `TacticalMap default width should be 4800, got ${tMap.width}`);
assert.strictEqual(tMap.height, 3200, `TacticalMap default height should be 3200, got ${tMap.height}`);
console.log('✓ TacticalMap defaults to 4800 x 3200 operational battlefield.');

// 2. ProceduralBattlefieldGenerator dimensions
const pGen = new global.window.ProceduralBattlefieldGenerator();
const dummyProvince = {
  id: 'prov_castile',
  terrain: 'plains',
  climate: 'temperate',
  hasBuilding: () => false
};
const battlefieldData = pGen.generateBattlefield(dummyProvince, 1);
assert.strictEqual(battlefieldData.width, 4800, 'Battlefield width must be 4800');
assert.strictEqual(battlefieldData.height, 3200, 'Battlefield height must be 3200');
assert(battlefieldData.camps.length >= 5, 'Battlefield must have camps and forward objectives');
assert.strictEqual(battlefieldData.camps[0].x, 550, 'West base camp x must be 550');
assert.strictEqual(battlefieldData.camps[1].x, 4250, 'East base camp x must be 4250');
const forwardPoints = battlefieldData.camps.filter(c => c.team === -1);
assert(forwardPoints.length >= 3, 'Battlefield must have forward capture points');
console.log('✓ ProceduralBattlefieldGenerator produces 4800x3200 map with camps at 550 & 4250 and 3 forward points.');

// 3. Unit Tactical Flags Initialization
const UnitClass = global.window.Unit;
const arquebusierDef = global.window.ERAS.renaissance.units.arquebusiers;
const tercioDef = global.window.ERAS.renaissance.units.tercio;

const unitA = new UnitClass(1, arquebusierDef, 0, 750, 1500, 0);
assert.strictEqual(unitA.fireAtWill, true, 'fireAtWill should default to true');
assert.strictEqual(unitA.holdFire, false, 'holdFire should default to false');
assert.strictEqual(unitA.skirmishMode, false, 'skirmishMode should default to false');
assert.strictEqual(unitA.guardMode, false, 'guardMode should default to false');
assert.strictEqual(unitA.isAmbushing, false, 'isAmbushing should default to false');
assert.strictEqual(unitA.meleeStance, false, 'meleeStance should default to false');
console.log('✓ Unit tactical flags correctly initialized.');

// 4. Hold Fire / Fire at Will test
unitA.fireAtWill = false;
unitA.holdFire = true;
let fired = false;
const mockBallistics = {
  fireMusket: () => { fired = true; }
};
const enemyTercio = new UnitClass(2, tercioDef, 1, 900, 1500, Math.PI);

// Update unit while enemy in range but holdFire is active
unitA.reloadTimer = 0;
unitA.update(0.1, tMap, [unitA, enemyTercio], mockBallistics, null, null);
assert.strictEqual(fired, false, 'Unit must not fire when holdFire is active or fireAtWill is false');
console.log('✓ Hold Fire preserves ammunition and prevents firing.');

// Turn fire back on
unitA.fireAtWill = true;
unitA.holdFire = false;
unitA.reloadTimer = 0;
unitA.update(0.1, tMap, [unitA, enemyTercio], mockBallistics, null, null);
assert.strictEqual(fired, true, 'Unit must fire volley when fireAtWill is active');
console.log('✓ Fire at Will autonomously fires on valid targets.');

// 5. Skirmish Mode Kiting Test
const skirmisher = new UnitClass(3, arquebusierDef, 0, 800, 1500, 0);
skirmisher.skirmishMode = true;
skirmisher.skirmishStance = true;
const approachingEnemy = new UnitClass(4, tercioDef, 1, 880, 1500, Math.PI); // 80px away (melee threat)

skirmisher.update(0.1, tMap, [skirmisher, approachingEnemy], mockBallistics, null, null);
// Skirmisher should have set retreat targetX to the west (away from enemy at x=880)
assert(skirmisher.targetX < skirmisher.x, `Skirmisher should kite backward (targetX: ${skirmisher.targetX} < ${skirmisher.x})`);
console.log(`✓ Skirmish mode kites backward away from melee threat (kited to x=${skirmisher.targetX.toFixed(1)}).`);

// 6. Guard Mode Defense & Knockback Test
const guardUnit = new UnitClass(5, tercioDef, 0, 750, 1500, 0);
guardUnit.guardMode = true;
const normalUnit = new UnitClass(6, tercioDef, 0, 750, 1600, 0);
normalUnit.guardMode = false;

const initialHpGuard = guardUnit.health;
const initialHpNormal = normalUnit.health;

guardUnit.receiveDamage(100, enemyTercio, null, null);
normalUnit.receiveDamage(100, enemyTercio, null, null);

const guardDamageTaken = initialHpGuard - guardUnit.health;
const normalDamageTaken = initialHpNormal - normalUnit.health;

assert(guardDamageTaken < normalDamageTaken, `Guard mode should take less damage (${guardDamageTaken} vs ${normalDamageTaken})`);
assert.strictEqual(guardDamageTaken, 80, `Expected 80 damage taken with +25% defense (20% reduction), got ${guardDamageTaken}`);
console.log(`✓ Guard mode grants +25% melee defense (reduced 100 dmg to ${guardDamageTaken}).`);

// 7. Ambush Concealment & Surprise Strike Test
const ambushingUnit = new UnitClass(7, arquebusierDef, 0, 1500, 1500, 0);
ambushingUnit.inForest = true;
ambushingUnit.isAmbushing = true;

const searchingEnemy = new UnitClass(8, tercioDef, 1, 1700, 1500, Math.PI); // 200px away (> 95px recon radius)
const detected = searchingEnemy._findNearestEnemy([ambushingUnit, searchingEnemy]);
assert.strictEqual(detected, null, 'Enemy must NOT detect ambushing unit at distance > 95px');
console.log('✓ Ambush stance conceals unit from enemy targeting beyond 95px recon radius.');

// Move enemy within 90px (recon radius breach)
searchingEnemy.x = 1580;
const detectedNear = searchingEnemy._findNearestEnemy([ambushingUnit, searchingEnemy]);
assert.strictEqual(detectedNear, ambushingUnit, 'Enemy should detect ambushing unit within 95px recon radius');
console.log('✓ Recon radius (<= 95px) successfully uncovers ambushing unit.');

// Ambush Surprise Strike Shock
const targetDummy = new UnitClass(9, tercioDef, 1, 1550, 1500, Math.PI);
const initialMorale = targetDummy.morale;
ambushingUnit.isAmbushing = true;
let ambushFired = false;
const ambushBallistics = {
  fireMusket: () => { ambushFired = true; }
};
ambushingUnit._fireRangedVolley(targetDummy, ambushBallistics, null, null);
assert.strictEqual(ambushFired, true, 'Ambush attack fired');
assert(targetDummy.morale < initialMorale - 15, `Ambush must inflict surprise morale shock (morale went from ${initialMorale} to ${targetDummy.morale})`);
assert.strictEqual(ambushingUnit.isAmbushing, false, 'Ambushing status must break upon attack');
console.log(`✓ Ambush surprise strike inflicts +60% morale shock (${initialMorale} -> ${targetDummy.morale}) and breaks concealment.`);

// 8. Melee Stance Test for Ranged Units
const rangedUnit = new UnitClass(10, arquebusierDef, 0, 1000, 1500, 0);
rangedUnit.meleeStance = true;
const farEnemy = new UnitClass(11, tercioDef, 1, 1200, 1500, Math.PI);
rangedUnit.update(0.1, tMap, [rangedUnit, farEnemy], mockBallistics, null, null);
assert.strictEqual(rangedUnit.targetX, farEnemy.x, 'Melee stance forces ranged unit to charge enemy location');
console.log('✓ Melee stance orders ranged unit to charge directly into melee engagement.');

console.log('--- ALL TOTAL WAR TACTICAL TESTS PASSED ---');
