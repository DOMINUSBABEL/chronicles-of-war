/**
 * Verification Script for Chronicles of War
 * Checks file consistency, scenario configurations, unit definitions, and era mappings
 */

const fs = require('fs');
const path = require('path');

const baseDir = path.resolve(__dirname, '..');

console.log('🔍 Iniciando verificación de Chronicles of War...\n');

// 1. Check required files
const requiredFiles = [
  'index.html',
  'server.py',
  'css/style.css',
  'src/core/audio.js',
  'src/render/smoke_system.js',
  'src/simulation/ballistics.js',
  'src/simulation/eras.js',
  'src/simulation/unit.js',
  'src/map/map_renderer.js',
  'src/map/territory.js',
  'src/map/scenarios.js',
  'src/core/input.js',
  'src/core/engine.js'
];

let allExist = true;
requiredFiles.forEach(file => {
  const fullPath = path.join(baseDir, file);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    console.log(`  ✅ [OK] ${file} (${stats.size} bytes)`);
  } else {
    console.error(`  ❌ [FALTA] ${file}`);
    allExist = false;
  }
});

if (!allExist) {
  console.error('\n❌ Faltan archivos requeridos.');
  process.exit(1);
}

// 2. Mock environment to load and validate simulation logic
global.window = {};
global.document = {
  createElement: () => ({ getContext: () => ({ clearRect: () => {}, fillRect: () => {} }) })
};

try {
  eval(fs.readFileSync(path.join(baseDir, 'src/simulation/eras.js'), 'utf8'));
  eval(fs.readFileSync(path.join(baseDir, 'src/map/scenarios.js'), 'utf8'));

  const eras = global.window.ERAS || global.ERAS;
  const scenarios = global.window.SCENARIOS || global.SCENARIOS;

  console.log('\n🏛️ Validando Eras Históricas:');
  const expectedEras = ['antiquity', 'medieval', 'renaissance', 'modern', 'napoleonic'];
  expectedEras.forEach(eKey => {
    if (eras[eKey]) {
      const units = Object.keys(eras[eKey].units);
      console.log(`  ✅ Era: ${eras[eKey].name} (${eras[eKey].period}) -> ${units.length} unidades: [${units.join(', ')}]`);
    } else {
      console.error(`  ❌ Era faltante: ${eKey}`);
    }
  });

  console.log('\n🗺️ Validando Escenarios Históricos:');
  Object.keys(scenarios).forEach(sKey => {
    const sc = scenarios[sKey];
    console.log(`  ✅ Escenario: ${sc.name} (Era: ${sc.era}, Despliegues: ${sc.deployments.length} batallones)`);
    const eraUnits = eras[sc.era].units;
    sc.deployments.forEach((dep, idx) => {
      if (!eraUnits[dep.unitKey]) {
        throw new Error(`Unidad desconocida '${dep.unitKey}' en escenario '${sKey}' despliegue ${idx}`);
      }
    });
  });

  console.log('\n✨ ¡Todas las pruebas de integridad y consistencia pasaron satisfactoriamente!');
} catch (err) {
  console.error('\n❌ Error durante la validación:', err);
  process.exit(1);
}
