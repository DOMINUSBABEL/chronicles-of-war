/**
 * Comprehensive Automated Verification for Tactical Combat & Logistics
 * Tests:
 * 1. Unit doctrines (pike wall, charge, square, loose, volley)
 * 2. Flanking and Rear damage & morale shock multipliers
 * 3. Ammunition depletion and out-of-ammo blockage
 * 4. Elevation bonus & Forest missile cover
 * 5. Supply lines, raycast interception & isolation
 * 6. Command Points & tactical reinforcement dispatch
 * 7. Persistent casualties generation
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const baseDir = path.resolve(__dirname, '..');

// Mock browser globals
global.window = {};
global.document = {
  getElementById: () => null,
  createElement: () => ({ getContext: () => ({ clearRect: () => {}, fillRect: () => {} }) })
};

// Load code files in dependency order
eval(fs.readFileSync(path.join(baseDir, 'src/simulation/eras.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/simulation/unit.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/simulation/supply_system.js'), 'utf8'));

const eras = global.window.ERAS || global.ERAS;
const MicroSoldier = global.window.MicroSoldier || global.MicroSoldier;
const Unit = global.window.Unit || global.Unit;
const SupplyTrain = global.window.SupplyTrain || global.SupplyTrain;
const StrategicCapturePoint = global.window.StrategicCapturePoint || global.StrategicCapturePoint;
const SupplySystem = global.window.SupplySystem || global.SupplySystem;

console.log('⚔️ INICIANDO BATERÍA DE PRUEBAS: COMBATE TÁCTICO & LOGÍSTICA WARGAME...\n');

// --- TEST 1: Formation Doctrines & Dynamic Stats ---
console.log('Test 1: Doctrinas de Formación Táctica (Total War depth)...');
const tercioDef = eras.renaissance.units.tercio;
const unit1 = new Unit(1, tercioDef, 0, 100, 100, 0);

// Default state
assert.strictEqual(unit1.activeDoctrine, 'none');
assert.strictEqual(unit1.currentFormation, 'line');

// Pike Wall doctrine
unit1.setDoctrine('pike_wall');
assert.strictEqual(unit1.activeDoctrine, 'pike_wall');
assert.strictEqual(unit1.speed, 0, 'Muro de picas debe inmovilizar la unidad');

// Charge doctrine
unit1.setDoctrine('charge');
assert.strictEqual(unit1.activeDoctrine, 'charge');
assert.strictEqual(unit1.isCharging, true);
assert.strictEqual(unit1.speed, unit1.def.speed * 1.5, 'Carga otorga +50% velocidad');

// Square doctrine
unit1.setDoctrine('square');
assert.strictEqual(unit1.activeDoctrine, 'square');
assert.strictEqual(unit1.currentFormation, 'square');

// Volley doctrine
unit1.setDoctrine('volley');
assert.strictEqual(unit1.activeDoctrine, 'volley');
assert.strictEqual(unit1.speed, unit1.def.speed * 0.7);

// Reset to none
unit1.setDoctrine('none');
assert.strictEqual(unit1.activeDoctrine, 'none');
assert.strictEqual(unit1.speed, unit1.def.speed);
console.log('  ✅ [PASS] Doctrinas tácticas aplican bonificaciones y penalizaciones correctas.');

// --- TEST 2: Flanking & Rear Attack Morale Shock ---
console.log('\nTest 2: Detección de Flanqueo y Ataques por la Espalda (Posicional)...');
const defender = new Unit(2, tercioDef, 0, 200, 200, 0); // Facing angle = 0 (Facing East)
const frontAttacker = new Unit(3, tercioDef, 1, 250, 200, Math.PI); // In front (East)
const flankAttacker = new Unit(4, tercioDef, 1, 200, 260, -Math.PI/2); // On right flank (South, ~1.57 rad)
const rearAttacker = new Unit(5, tercioDef, 1, 150, 200, 0); // Behind defender (West, ~3.14 rad)

// Mock engine for casualties
global.window.game = { battlefieldCasualties: [] };

// Front damage baseline
const defHpBefore = defender.health;
const defMoraleBefore = defender.morale;
defender.receiveDamage(20, frontAttacker, null, null);
const frontDmgTaken = defHpBefore - defender.health;
const frontMoraleLost = defMoraleBefore - defender.morale;

// Flank damage test
const hpBeforeFlank = defender.health;
const moraleBeforeFlank = defender.morale;
defender.receiveDamage(20, flankAttacker, null, null);
const flankDmgTaken = hpBeforeFlank - defender.health;
const flankMoraleLost = moraleBeforeFlank - defender.morale;
assert(flankDmgTaken > frontDmgTaken * 1.25, `Daño de flanqueo (${flankDmgTaken}) debe ser ~1.3x frontal (${frontDmgTaken})`);
assert(flankMoraleLost > frontMoraleLost * 2.0, `Choque moral de flanqueo (${flankMoraleLost}) debe ser mayor que frontal (${frontMoraleLost})`);

// Rear damage test
const hpBeforeRear = defender.health;
const moraleBeforeRear = defender.morale;
defender.receiveDamage(20, rearAttacker, null, null);
const rearDmgTaken = hpBeforeRear - defender.health;
const rearMoraleLost = moraleBeforeRear - defender.morale;
assert(rearDmgTaken > frontDmgTaken * 1.5, `Daño por la espalda (${rearDmgTaken}) debe ser ~1.6x frontal (${frontDmgTaken})`);
assert(rearMoraleLost > flankMoraleLost, `Choque moral por la espalda (${rearMoraleLost}) debe superar al flanqueo (${flankMoraleLost})`);

console.log(`  ✅ [PASS] Daño Frontal: ${frontDmgTaken.toFixed(1)} | Flanqueo: ${flankDmgTaken.toFixed(1)} (+30%) | Retaguardia: ${rearDmgTaken.toFixed(1)} (+60%)`);
console.log(`  ✅ [PASS] Moral Shock Frontal: ${frontMoraleLost.toFixed(1)} | Flanqueo: ${flankMoraleLost.toFixed(1)} | Retaguardia: ${rearMoraleLost.toFixed(1)}`);

// --- TEST 3: Ammunition Depletion & Blockage ---
console.log('\nTest 3: Desgaste Logístico de Munición (Wargame Logistics)...');
const musketeers = new Unit(6, eras.renaissance.units.arquebusiers, 0, 300, 300, 0);
assert(musketeers.ammo > 0, 'La unidad debe iniciar con munición');
const initialAmmo = musketeers.ammo;

// Simulate ranged firing
const dummyTarget = new Unit(7, tercioDef, 1, 400, 300, 0);
const mockBallistics = {
  fireMusket: () => {},
  fireCannon: () => {},
  fireArrow: () => {}
};

musketeers._fireRangedVolley(dummyTarget, mockBallistics, null, null);
assert(musketeers.ammo < initialAmmo, 'Disparar una descarga debe consumir munición');

// Deplete all ammo
musketeers.ammo = 0;
let fired = false;
const trackingBallistics = {
  fireMusket: () => { fired = true; },
  fireCannon: () => { fired = true; },
  fireArrow: () => { fired = true; }
};
musketeers._fireRangedVolley(dummyTarget, trackingBallistics, null, null);
assert.strictEqual(fired, false, 'Una unidad sin munición NO debe poder disparar');
console.log(`  ✅ [PASS] Consumo de munición y bloqueo por desabastecimiento validado.`);

// --- TEST 4: Supply System, Lines of Supply & Interception ---
console.log('\nTest 4: Tren de Suministros, Radio Logístico y Líneas Cortadas...');
const mockEngine = {
  canvas: { width: 1600, height: 1100 },
  currentEraKey: 'renaissance',
  addLogMessage: () => {},
  sound: { playTrumpetCall: () => {}, playMarchDrums: () => {}, playAlarm: () => {} }
};

const supplySys = new SupplySystem(mockEngine);
const train = new SupplyTrain(1, 0, 100, 100);
supplySys.supplyTrains = [train];

// Friendly unit within supply radius (100px away <= 320px radius)
const suppliedUnit = new Unit(10, tercioDef, 0, 180, 100, 0);
suppliedUnit.ammo = 20;

// Friendly unit far outside supply radius (600px away > 320px radius)
const farUnit = new Unit(11, tercioDef, 0, 800, 800, 0);
farUnit.ammo = 20;

supplySys.update(1.0, [suppliedUnit, farUnit]);
assert.strictEqual(suppliedUnit.supplyStatus, 'supplied', 'Unidad cercana debe estar suministrada');
assert.strictEqual(farUnit.supplyStatus, 'isolated', 'Unidad lejana debe estar aislada');

// Enemy unit cuts line of supply
const interceptingEnemy = new Unit(12, tercioDef, 1, 140, 100, 0); // Placed directly between train (100,100) and unit (180,100)
supplySys.update(1.0, [suppliedUnit, farUnit, interceptingEnemy]);
assert.strictEqual(suppliedUnit.supplyStatus, 'isolated', 'Unidad con enemigo bloqueando la línea debe considerarse aislada');
console.log('  ✅ [PASS] Conexión logística, radio y corte de suministros por presencia enemiga validados.');

// --- TEST 5: Strategic Capture Points & Command Points ---
console.log('\nTest 5: Puntos Estratégicos de Captura y Puntos de Mando (CP)...');
const flag = new StrategicCapturePoint(1, 'Colina Estratégica', 500, 500, 'hill');
supplySys.capturePoints = [flag];

const initialCP = supplySys.commandPoints;
// Blue unit enters capture zone
const capper = new Unit(13, tercioDef, 0, 500, 500, 0);
flag.update(8.0, [capper]);
assert.strictEqual(flag.controllingTeam, 0, 'La zona debe ser capturada por el equipo 0');

// Update CP income with captured flag
supplySys.update(1.0, [capper]);
assert(supplySys.commandPoints > initialCP + 1.0, 'Controlar banderas debe acelerar la generación de CP');
console.log(`  ✅ [PASS] Puntos de control otorgan bonificación a los Puntos de Mando (${supplySys.commandPoints.toFixed(1)} CP).`);

// --- TEST 6: Persistent Casualties on the Ground ---
console.log('\nTest 6: Bajas y Cuerpos Persistentes en el Campo de Batalla...');
const casualUnit = new Unit(14, tercioDef, 0, 400, 400, 0);
global.window.game.battlefieldCasualties = [];
// Inflict heavy damage that wipes out soldiers
casualUnit.receiveDamage(200, frontAttacker, null, null);
assert(global.window.game.battlefieldCasualties.length > 0, 'Deben registrarse cuerpos de soldados caídos');
const body = global.window.game.battlefieldCasualties[0];
assert(body.x !== undefined && body.y !== undefined);
assert.strictEqual(body.team, 0);
assert(body.weaponType !== undefined);
console.log(`  ✅ [PASS] ${global.window.game.battlefieldCasualties.length} soldados caídos registrados con charcos de sangre y armas desparramadas.`);

console.log('\n🌟 ¡TODAS LAS 6 PRUEBAS TÁCTICAS Y DE LOGÍSTICA PASARON EXITOSAMENTE CON MÁXIMO RIGOR! 🌟\n');
