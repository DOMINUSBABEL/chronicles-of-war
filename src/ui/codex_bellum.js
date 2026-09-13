/**
 * Chronicles of War - Codex Bellum (Enciclopedia Histórica & Manual de Doctrina Militar)
 * An authentic Baroque treatises encyclopedia inspired by 16th-18th century military manuals
 * (Bernardino de Mendoza, Sancho de Londoño, Raimondo Montecuccoli & Mauricio de Nassau).
 */

const CODEX_VOLUMES = [
  {
    id: 'vol_tactics',
    title: 'Tomo I: Tratado de Armas Combinadas',
    badge: '⚔️',
    summary: 'Doctrinas tácticas de la era de la pica y el tiro (Pike & Shot), formaciones de batalla y balística.',
    chapters: [
      {
        id: 'tercio_doctrine',
        title: 'El Cuadro del Tercio Español',
        icon: '🚩',
        content: `
          <h4>La Síntesis Perfecta de Acero y Pólvora</h4>
          <p>El <strong>Tercio</strong> constituyó la cúspide militar del siglo XVI y XVII. A diferencia de las masas homogéneas de la antigüedad, el Tercio integró orgánicamente picas de cinco metros para repeler a la caballería y mangas móviles de arcabuceros en los cuatro ángulos para castigar al enemigo a distancia.</p>
          <div class="codex-tip-box">
            <strong>⚜️ Regla de Oro en el Combate:</strong> Mantén siempre a los arcabuceros a cubierto tras el erizo de picas. Si la caballería enemiga carga a galope tendido, los piqueros deben pasar a postura de guardia horizontal clavando las conteras en la tierra.
          </div>
          <p>En <em>Chronicles of War</em>, el Tercio dispone de una bonificación del <strong>+250% de daño defensivo</strong> contra cargas frontales de caballería cuando se encuentra en postura de picas caladas.</p>
        `
      },
      {
        id: 'countermarch',
        title: 'Contramarcha & Fuego en Salva',
        icon: '💥',
        content: `
          <h4>La Rotación Continua de Fuego</h4>
          <p>Desarrollada por Mauricio de Nassau e inspirada en las legiones romanas, la <em>contramarcha</em> divide el regimiento en filas. La primera fila se asoma, dispara al unísono su salva de pólvora, y de inmediato gira y retrocede por los pasillos entre hileras para cargar de nuevo su arma con baqueta y mecha, cediendo su lugar a la segunda fila.</p>
          <div class="codex-tip-box">
            <strong>💥 Efecto Psicológico & Supresión:</strong> Una salva coordinada no solo inflige daño físico masivo sino que drena drásticamente la moral del regimiento impactado (-7.5 puntos de moral instantánea), provocando con frecuencia la desbandada antes del choque cuerpo a cuerpo.
          </div>
        `
      },
      {
        id: 'cavalry_shock',
        title: 'La Carga de Caballería & Envolvimiento',
        icon: '🐎',
        content: `
          <h4>El Choque Inercial y el Ataque por los Flancos</h4>
          <p>La caballería acorazada (Gens d'Armes y Coraceros) posee una inercia devastadora capaz de quebrar cualquier línea de infantería dispersa o desprovista de picas. No obstante, una carga frontal contra picas formadas resulta suicida.</p>
          <p>La doctrina suprema exige maniobrar por los ángulos muertos del enemigo, buscando siempre el <strong>ataque de flanco (+45% daño)</strong> o el <strong>ataque por la espalda (+85% daño y penalización extrema de moral)</strong>.</p>
        `
      },
      {
        id: 'artillery_enfilade',
        title: 'Baterías de Campaña & Fuego en Enfilada',
        icon: '💣',
        content: `
          <h4>El Dominio de las Cotas Elevadas</h4>
          <p>Colocar cañones y culebrinas en <strong>colinas elevadas otorga un +25% de alcance balístico y +20% de daño</strong>. La trayectoria de la bala de bronce rebota en el suelo y causa estragos longitudinales atravesando múltiples filas enemigas (fuego de enfilada).</p>
          <p>A corta distancia (<140 píxeles), los cañones cambian automáticamente a <em>bote de metralla (canister shot)</em>, barriendo a los asaltantes con cientos de proyectiles de plomo.</p>
        `
      }
    ]
  },
  {
    id: 'vol_regiments',
    title: 'Tomo II: Compendio Ilustrado de Regimientos',
    badge: '👥',
    summary: 'Fichas técnicas, fortalezas, contramedidas y atributos históricos de todas las divisiones militares.',
    chapters: [
      {
        id: 'reg_tercio',
        title: 'Tercio Viejo Español',
        icon: '🇪🇸',
        content: `
          <div class="regiment-stat-grid">
            <div><strong>Categoría:</strong> Picas & Tiro Híbrido</div>
            <div><strong>Tropa:</strong> 56 infantes veteranos</div>
            <div><strong>Moral:</strong> 110 (Hierro)</div>
            <div><strong>Coste:</strong> 280 Florines</div>
          </div>
          <p>Infantería veterana invicta durante más de un siglo. Resiste las peores tempestades y cargas de caballeros sin retroceder. Su única debilidad es la lentitud de maniobra frente al fuego concentrado de artillería pesada.</p>
        `
      },
      {
        id: 'reg_arquebus',
        title: 'Manga de Arcabuceros & Mosqueteros',
        icon: '💥',
        content: `
          <div class="regiment-stat-grid">
            <div><strong>Categoría:</strong> Tiradores de Línea</div>
            <div><strong>Tropa:</strong> 36 tiradores</div>
            <div><strong>Alcance:</strong> 220 px</div>
            <div><strong>Coste:</strong> 180 Florines</div>
          </div>
          <p>Tiradores armados con arcabuces de mecha y pólvora fina. Perforan cotas de malla y corazas de acero a media distancia. Requieren protección frente al choque directo.</p>
        `
      },
      {
        id: 'reg_gendarmes',
        title: 'Gens d\'Armes & Caballeros Pesados',
        icon: '👑',
        content: `
          <div class="regiment-stat-grid">
            <div><strong>Categoría:</strong> Caballería Pesada de Choque</div>
            <div><strong>Tropa:</strong> 24 jinetes con armadura completa</div>
            <div><strong>Velocidad:</strong> 58 (Muy Alta en Carga)</div>
            <div><strong>Coste:</strong> 320 Florines</div>
          </div>
          <p>La fuerza de choque más temida de Europa. Al activar la doctrina de <em>Carga</em>, aplastan líneas enemigas con retroceso kinemático devastador.</p>
        `
      },
      {
        id: 'reg_landsknecht',
        title: 'Landsknechte & Doppelsöldner',
        icon: '⚔️',
        content: `
          <div class="regiment-stat-grid">
            <div><strong>Categoría:</strong> Piqueros & Mandobles</div>
            <div><strong>Tropa:</strong> 48 soldados suabos</div>
            <div><strong>Arma:</strong> Pica & Espadón Zweihänder</div>
            <div><strong>Coste:</strong> 260 Florines</div>
          </div>
          <p>Mercenarios alemanes de choque con vestimentas extravagantes. Sus espadachines de doble sueldo rompen las puntas de picas enemigas en la melé violenta ("mal viaje").</p>
        `
      },
      {
        id: 'reg_supply_train',
        title: 'Convoy de Bagajes y Tren de Pólvora',
        icon: '📦',
        content: `
          <div class="regiment-stat-grid">
            <div><strong>Categoría:</strong> Unidad Logística Vital</div>
            <div><strong>Radio de Suministro:</strong> 320 px</div>
            <div><strong>Capacidad:</strong> 4000 pts de pólvora/víveres</div>
            <div><strong>Controlable:</strong> Clic izquierdo / Clic derecho</div>
          </div>
          <p>El corazón latente de tu ejército. Si el enemigo lo captura o destruye, tus tropas quedarán en estado de <em>Aislamiento Logístico</em>, agotando su munición y perdiendo moral hasta la rendición.</p>
        `
      }
    ]
  },
  {
    id: 'vol_4x_empire',
    title: 'Tomo III: Gran Estrategia & Geopolítica 4X',
    badge: '🌍',
    summary: 'Doctrina imperial, administración provincial inspirada en Age of History 3, desarrollo de yermos y bienes comerciales.',
    chapters: [
      {
        id: 'trade_goods_system',
        title: 'Los 8 Bienes Estratégicos del Mundo',
        icon: '📦',
        content: `
          <p>Cada una de las 93 provincias del orbe produce un bien comercial específico que define su vocación económica y bélica:</p>
          <ul>
            <li><strong>🌾 Grano (Cereales):</strong> Imprescindible para alimentar a la población viva y mantener levas numerosas sin hambrunas.</li>
            <li><strong>🧶 Lana & Textiles:</strong> Aumenta la recaudación impositiva y el orden público local.</li>
            <li><strong>🪵 Madera de Construcción:</strong> Vital para erigir infraestructuras y armar flotas de galeones.</li>
            <li><strong>⛏️ Hierro de Forja:</strong> Reduce el coste de fundir cañones y equipar regimientos pesados.</li>
            <li><strong>🧂 Salitre de Pólvora:</strong> Acelera el progreso científico militar y potencia la balística.</li>
            <li><strong>🌶️ Especias de Ultramar:</strong> Genera enormes dividendos de oro en las rutas transoceánicas.</li>
            <li><strong>🥈 Plata Real:</strong> Riqueza monetaria directa proveniente de las minas de América.</li>
            <li><strong>🪙 Oro Imperial:</strong> El recurso soberano por excelencia para financiar campañas bélicas globales.</li>
          </ul>
          <div class="codex-tip-box">
            <strong>🌐 Bonificación de Monopolio Comercial:</strong> Si tu imperio logra controlar provincias con al menos <strong>4 tipos distintos de recursos</strong>, desbloquearás la bonificación pasiva permanente de <em>Red Comercial Soberana (+18% de ingresos netos de oro en todo el reino)</em>.
          </div>
        `
      },
      {
        id: 'dev_and_colonization',
        title: 'Desarrollo Provincial & Conversión de Yermos',
        icon: '🌱',
        content: `
          <h4>De Territorio Tribal a Metrópolis de Oro</h4>
          <p>En <em>Chronicles of War</em>, ninguna provincia es inútil a largo plazo. Un territorio que comienza como un yermo baldío de nivel de desarrollo 1 (e.g. Patagonia, Siberia, Grandes Llanuras) puede elevarse mediante la inversión continua de oro y ciencia hasta el nivel 10.</p>
          <p>Cada nivel de desarrollo multiplica la producción base de recursos en un <strong>+15% acumulativo</strong> y acelera el crecimiento de la población imponible.</p>
        `
      },
      {
        id: 'bastions_and_roads',
        title: 'Baluartes Abovedados & Red Vial',
        icon: '🛡️',
        content: `
          <h4>La Defensa en Profundidad (Trace Italienne)</h4>
          <p>Construir baluartes de nivel 3 o superior transforma la ciudad en una fortaleza estrellada infranqueable que resiste asedios prolongados y defiende automáticamente las provincias colindantes frente a incursiones enemigas.</p>
          <p>Mejorar la <em>Infraestructura</em> extiende caminos reales que aceleran la marcha de tus ejércitos a través de las fronteras.</p>
        `
      }
    ]
  },
  {
    id: 'vol_logistics',
    title: 'Tomo IV: El Arte de la Logística Militar',
    badge: '📡',
    summary: 'Líneas de suministro estilo Wargame, carros de bagajes maniobrables y puntos de mando.',
    chapters: [
      {
        id: 'supply_line_raycast',
        title: 'Líneas de Visión & Cerco Logístico',
        icon: '📍',
        content: `
          <h4>La Vulnerabilidad de la Línea de Retaguardia</h4>
          <p>Cada regimiento desplegado en el campo de batalla traza un vector directo de abastecimiento hacia su convoy de bagajes más cercano. Si una brigada enemiga se interpone físicamente cortando dicha línea, el regimiento entra inmediatamente en estado de <strong>Suministro Cortado</strong>.</p>
          <p>Tras 10 segundos de aislamiento, el regimiento entra en <em>Falla de Suministro</em>: no puede recargar pólvora, su fatiga aumenta drásticamente y su moral se desmorona día a día.</p>
        `
      },
      {
        id: 'command_points',
        title: 'Puntos de Mando (CP) & Refuerzos',
        icon: '📡',
        content: `
          <h4>Llamada de Tropas Frescas a la Batalla</h4>
          <p>Controlar los Puntos de Captura Estratégicos (cotas elevadas, vados de río y cruces de caminos) acelera la generación de <strong>Puntos de Mando (CP)</strong>.</p>
          <p>Gasta tus CP en el <em>Puesto de Mando Táctico</em> para ordenar la entrada inmediata de batallones de refresco, los cuales marcharán en columna desde el borde del mapa con tambores y estandartes hasta alcanzar el frente.</p>
        `
      }
    ]
  }
];

class CodexBellumManager {
  constructor() {
    this.currentVolIdx = 0;
    this.currentChapIdx = 0;
  }

  open() {
    const modal = document.getElementById('codex-bellum-modal');
    if (modal) {
      modal.style.display = 'flex';
      this.render();
    }
  }

  close() {
    const modal = document.getElementById('codex-bellum-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  selectVolume(idx) {
    this.currentVolIdx = idx;
    this.currentChapIdx = 0;
    this.render();
  }

  selectChapter(idx) {
    this.currentChapIdx = idx;
    this.render();
  }

  render() {
    const vol = CODEX_VOLUMES[this.currentVolIdx];
    if (!vol) return;
    const chap = vol.chapters[this.currentChapIdx] || vol.chapters[0];

    // 1. Render Volume tabs
    const volNav = document.getElementById('codex-vol-nav');
    if (volNav) {
      volNav.innerHTML = CODEX_VOLUMES.map((v, idx) => `
        <button class="codex-vol-tab ${idx === this.currentVolIdx ? 'active' : ''}" onclick="window.codexBellum.selectVolume(${idx})">
          <span class="codex-vol-icon">${v.badge}</span>
          <span class="codex-vol-title">${v.title}</span>
        </button>
      `).join('');
    }

    // 2. Render Chapters sidebar
    const chapNav = document.getElementById('codex-chap-nav');
    if (chapNav) {
      chapNav.innerHTML = vol.chapters.map((c, idx) => `
        <button class="codex-chap-btn ${idx === this.currentChapIdx ? 'active' : ''}" onclick="window.codexBellum.selectChapter(${idx})">
          <span>${c.icon}</span>
          <span>${c.title}</span>
        </button>
      `).join('');
    }

    // 3. Render Reading Pane
    const contentPane = document.getElementById('codex-reading-content');
    if (contentPane && chap) {
      contentPane.innerHTML = `
        <div class="codex-parchment-header">
          <span class="codex-vol-badge">${vol.badge} ${vol.title}</span>
          <h2 class="codex-chap-title">${chap.icon} ${chap.title}</h2>
          <div class="codex-ornament">⚜️ • • • ⚔️ • • • ⚜️</div>
        </div>
        <div class="codex-chap-body">
          ${chap.content}
        </div>
      `;
    }
  }
}

// Global initialization
if (typeof window !== 'undefined') {
  window.codexBellum = new CodexBellumManager();
}
if (typeof globalThis !== 'undefined') {
  globalThis.codexBellum = window.codexBellum;
}
