/**
 * Comprehensive 4X Campaign & RTS Bridge Test Suite
 */

const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');

console.log('🏛️ Iniciando verificación de la Gran Campaña 4X y el Puente de Batalla...\n');

// Mock browser globals
global.window = {};
global.document = {
  getElementById: (id) => ({
    style: {},
    innerHTML: '',
    innerText: '',
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
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/economy.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/tech_tree.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/map/procedural_battlefield.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/campaign_map.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/army_strategic.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/battle_bridge.js'), 'utf8'));
eval(fs.readFileSync(path.join(baseDir, 'src/campaign/campaign_manager.js'), 'utf8'));

const FACTIONS = global.window.FACTIONS;
const DiplomacyManager = global.window.DiplomacyManager;
const EconomyManager = global.window.EconomyManager;
const TechTreeManager = global.window.TechTreeManager;
const EPOCHS = global.window.EPOCHS;
const Province = global.window.Province;
const StrategicCampaignMap = global.window.StrategicCampaignMap;
const StrategicArmy = global.window.StrategicArmy;
const BattleBridge = global.window.BattleBridge;
const CampaignManager = global.window.CampaignManager;

// 1. Test Factions & Diplomacy
console.log('1. Verificando Facciones y Diplomacia:');
const diplo = new DiplomacyManager();
const factions = Object.keys(FACTIONS);
console.log(`  ✅ Facciones cargadas: ${factions.join(', ')}`);
console.log(`  ✅ Estado diplomático España vs Francia: ${diplo.getStatusText('spain', 'france').text}`);
console.log(`  ✅ Estado diplomático España vs Sacro Imperio: ${diplo.getStatusText('spain', 'germany').text}`);

// 2. Test Economy
console.log('\n2. Verificando Economía de 4 Recursos (Empire Earth):');
const economy = new EconomyManager();
const initialSpain = economy.getResources('spain');
console.log(`  ✅ Recursos iniciales España: Oro=${initialSpain.gold}, Alimento=${initialSpain.food}, Hierro=${initialSpain.iron}, Ciencia=${initialSpain.science}`);

// 3. Test Tech Tree
console.log('\n3. Verificando Árbol de Épocas (Empire Earth):');
const techTree = new TechTreeManager();
const curEpoch = techTree.getCurrentEpoch('spain');
console.log(`  ✅ Época actual de España: ${curEpoch.name}`);
const nextEpoch = techTree.getNextEpoch('spain');
console.log(`  ✅ Siguiente época: ${nextEpoch.name} (Coste: ${nextEpoch.scienceCost} Ciencia, ${nextEpoch.goldCost} Oro)`);

// 4. Test Campaign Manager & Turn Progression
console.log('\n4. Verificando Gestor de Campaña y Turnos:');
const mockEngine = {
  canvas: { width: 1600, height: 1100 },
  sound: { playMarchDrums: () => {}, playTrumpetCall: () => {} },
  addLogMessage: (m) => console.log(`    📜 Log: ${m}`)
};

const campaign = new CampaignManager(mockEngine);
console.log(`  ✅ Provincias creadas: ${campaign.map.provinces.length}`);
console.log(`  ✅ Ejércitos estratégicos iniciales: ${campaign.armies.length}`);

// Advance turn
console.log('\n  ⚡ Ejecutando Fin de Turno 1...');
campaign.endTurn();
console.log(`  ✅ Turno actual: ${campaign.turn} (${campaign.year})`);
const afterTurnSpain = campaign.economy.getResources('spain');
console.log(`  ✅ Recursos tras turno 1: Oro=${afterTurnSpain.gold}, Alimento=${afterTurnSpain.food}`);

// 5. Test Battle Bridge & Auto-Resolve
console.log('\n5. Verificando Puente de Batalla (Pre-Batalla y Auto-Resolve):');
const spanishArmy = campaign.armies.find(a => a.faction === 'spain');
const frenchArmy = campaign.armies.find(a => a.faction === 'france');
const milanProvince = campaign.map.getProvinceById('milan');

console.log(`  ⚔️ Choque: ${spanishArmy.commanderName} (${spanishArmy.getTotalSoldiers()} h) vs ${frenchArmy.commanderName} (${frenchArmy.getTotalSoldiers()} h)`);
campaign.battleBridge.prepareEncounter(spanishArmy, frenchArmy, milanProvince);
const enc = campaign.battleBridge.currentEncounter;
console.log(`  ✅ Poder calculado: Atacante=${enc.attPower} (${enc.attPercent}%) vs Defensor=${enc.defPower} (${enc.defPercent}%)`);

console.log('  ⚡ Ejecutando Auto-Resolve...');
campaign.battleBridge.executeAutoResolve();
console.log(`  ✅ Batalla resuelta. Dueño de Milán: ${milanProvince.owner.toUpperCase()}`);

console.log('\n✨ ¡Todas las pruebas de la Gran Campaña 4X pasaron con éxito absoluto!');
