/**
 * Chronicles of War - Automated Test Suite for Campaign Scenarios & Faction Selection
 */

const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');

console.log('🏛️ Iniciando verificación de Escenarios de Campaña y Selección de Facciones...\n');

// Mock browser globals
global.window = {};
global.document = {
  getElementById: (id) => ({
    style: {},
    innerHTML: '',
    innerText: '',
    title: '',
    classList: { toggle: () => {} },
    getContext: () => ({ clearRect: () => {}, fillRect: () => {}, drawImage: () => {} })
  }),
  createElement: () => ({
    getContext: () => ({ clearRect: () => {}, fillRect: () => {}, drawImage: () => {} }),
    width: 1600,
    height: 1100
  })
};

// Load dependencies
eval(fs.readFileSync(path.join(baseDir, 'src/simulation/eras.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/map/scenarios.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/world_map_data.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/factions.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/civ_builder.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/army_strategic.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/campaign_scenarios.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/economy.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/tech_tree.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/map/procedural_battlefield.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/campaign_map.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/battle_bridge.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/campaign_manager.js'), 'utf8'));
Object.assign(global, global.window);

const scenariosObj = global.window.CAMPAIGN_SCENARIOS;
const dossiersObj = global.window.FACTION_HISTORICAL_DOSSIERS;
const getProvsFn = global.window.getScenarioProvinces;
const getArmiesFn = global.window.getScenarioStartingArmies;
const StrategicCampaignMap = global.window.StrategicCampaignMap;
const CampaignManager = global.window.CampaignManager;

// 1. Test Scenario Definitions & Counts
console.log('1. Verificando Definición de Escenarios:');
const scenarios = Object.keys(scenariosObj);
console.log(`  ✅ Escenarios registrados (${scenarios.length}): ${scenarios.join(', ')}`);

const euroProvs = getProvsFn('europe_200');
console.log(`  ✅ 'europe_200' provincias filtradas: ${euroProvs.length} (esperado ~210)`);
if (euroProvs.length < 180 || euroProvs.length > 250) {
  throw new Error(`Contador fuera de rango en europe_200: ${euroProvs.length}`);
}

const globalProvs = getProvsFn('global_550');
console.log(`  ✅ 'global_550' provincias totales: ${globalProvs.length} (esperado 550)`);
if (globalProvs.length !== 550) {
  throw new Error(`Contador incorrecto en global_550: ${globalProvs.length}`);
}

const war1618Provs = getProvsFn('thirty_years_war_1618');
console.log(`  ✅ 'thirty_years_war_1618' provincias: ${war1618Provs.length}`);

const sandboxProvs = getProvsFn('genesis_sandbox');
const neutralCount = sandboxProvs.filter(p => p.owner === 'neutral').length;
console.log(`  ✅ 'genesis_sandbox' neutrales: ${neutralCount} de ${sandboxProvs.length}`);
if (neutralCount < 500) {
  throw new Error(`En sandbox la inmensa mayoría debe ser neutral. Neutrales: ${neutralCount}`);
}

// 2. Test Neighbor Continuity in Filtered Scenarios
console.log('\n2. Verificando Continuidad de Grafos de Vecindad:');
const euroIds = new Set(euroProvs.map(p => p.id));
let invalidNeighborCount = 0;
euroProvs.forEach(p => {
  p.neighbors.forEach(nid => {
    if (!euroIds.has(nid)) invalidNeighborCount++;
  });
});
console.log(`  ✅ Enlaces vecinos inválidos en europe_200: ${invalidNeighborCount} (debe ser 0)`);
if (invalidNeighborCount !== 0) {
  throw new Error(`Grafo roto con vecinos colgantes: ${invalidNeighborCount}`);
}

// 3. Test Starting Armies per Scenario
console.log('\n3. Verificando Ejércitos Iniciales por Escenario:');
const euroArmies = getArmiesFn('europe_200', 'spain');
console.log(`  ✅ europe_200 ejércitos generados: ${euroArmies.length}`);

const war1618Armies = getArmiesFn('thirty_years_war_1618', 'sweden');
console.log(`  ✅ 1618 ejércitos generados con Suecia: ${war1618Armies.length}`);
const swedenArmy = war1618Armies.find(a => a.faction === 'sweden');
if (!swedenArmy) throw new Error('Ejército de Suecia no encontrado en 1618');
console.log(`  ✅ Comandante sueco: ${swedenArmy.commanderName} en ${swedenArmy.provinceId}`);

const sandboxArmies = getArmiesFn('genesis_sandbox', 'france');
console.log(`  ✅ genesis_sandbox ejércitos pioneros: ${sandboxArmies.length}`);

// 4. Test CampaignManager Dynamic Launching
console.log('\n4. Verificando Lanzamiento Dinámico en CampaignManager:');
const mockEngine = {
  canvas: { width: 1600, height: 900 },
  sound: { playMarchDrums: () => {}, playTrumpetCall: () => {} },
  addLogMessage: (msg) => console.log(`    📜 Log: ${msg}`)
};

const mgr = new CampaignManager(mockEngine);

// Launch 1: France in Europe 200
console.log('  ⚡ Iniciando campaña: Francia en europe_200...');
mgr.startCampaign('europe_200', 'france');
if (mgr.playerFaction !== 'france') throw new Error('playerFaction no se actualizó a francia');
if (mgr.map.provinces.length !== euroProvs.length) throw new Error('Mapa no cargó las provincias filtradas');
if (mgr.year !== 1525) throw new Error('Año incorrecto para 1525');
console.log(`  ✅ Facción activa: ${mgr.playerFaction}, Provincias en mapa: ${mgr.map.provinces.length}`);

// Launch 2: Germany/HRE in Thirty Years War (1618)
console.log('  ⚡ Iniciando campaña: Sacro Imperio en thirty_years_war_1618...');
mgr.startCampaign('thirty_years_war_1618', 'germany');
if (mgr.playerFaction !== 'germany') throw new Error('playerFaction no se actualizó a germany');
if (mgr.year !== 1618) throw new Error('Año incorrecto para 1618');
const curEpoch = mgr.techTree.getCurrentEpoch('germany');
console.log(`  ✅ Época tecnológica Sacro Imperio: ${curEpoch.name} (esperado Ilustración)`);
if (curEpoch.id !== 'modern') throw new Error('1618 debe arrancar en época de la Ilustración (modern)');

// Launch 3: Custom Civ in Genesis Sandbox
console.log('  ⚡ Iniciando campaña: Civilización Personalizada en genesis_sandbox...');
const customCiv = {
  id: 'custom',
  name: 'Sacro Reino de la Concordia',
  leader: 'Emperador Belisario',
  capitalProvince: 'rome',
  startingResources: { gold: 2000, food: 1500, iron: 800, science: 250 }
};
mgr.startCampaign('genesis_sandbox', 'custom', customCiv);
if (mgr.playerFaction !== 'custom') throw new Error('playerFaction no se actualizó a custom');
const customRes = mgr.economy.getResources('custom');
console.log(`  ✅ Recursos de Custom Civ: Oro=${customRes.gold}, Hierro=${customRes.iron}`);
if (customRes.gold !== 2000) throw new Error('Recursos de custom civ no asignados correctamente');

console.log('\n✨ ¡Todas las pruebas de Escenarios y Facciones pasaron con éxito rotundo!');
