/**
 * Chronicles of War - Master Campaign Scenarios & Historical Dossiers
 * Defines playable theaters, starting years, epoch baselines, faction narratives, and victory conditions.
 */

var CAMPAIGN_SCENARIOS = {
  europe_200: {
    id: 'europe_200',
    name: 'Teatro Europeo & Mediterráneo',
    subtitle: 'Las Guerras Italianas & la Reforma (1525)',
    icon: '🏰',
    startingYear: 1525,
    startingEpoch: 'renaissance',
    provinceCountEstimate: 210,
    scope: 'Europa, Flandes, Islas Británicas, Danubio y Cuenca Mediterránea',
    difficulty: 'Equilibrada',
    desc: 'Escenario enfocado y de alta densidad territorial centrado en la lucha por la hegemonía continental europea entre los Habsburgo, la Corona de Francia, el Sacro Imperio y el avance otomano.',
    theatersAllowed: ['europe', 'spain', 'flanders', 'mena', 'middle east', 'africa'],
    cameraCenter: { x: 1150, y: 340, zoom: 1.8 },
    filterProvince: (p) => {
      const th = (p.theater || '').toLowerCase();
      if (['europe', 'spain', 'flanders'].includes(th)) return true;
      // Mediterranean rim and North Africa/Levant
      if (th === 'mena' && p.x >= 950 && p.x <= 1500 && p.y <= 500) return true;
      if (th === 'middle east' && p.x >= 1200 && p.x <= 1450 && p.y <= 480) return true;
      if (th === 'africa' && p.x >= 950 && p.x <= 1380 && p.y <= 470) return true;
      // Bordering western Russia / Poland
      if (th === 'eurasia' && p.x >= 1250 && p.x <= 1450 && p.y >= 200 && p.y <= 380) return true;
      return false;
    },
    recommendedFactions: ['spain', 'france', 'germany', 'britain', 'ottoman', 'rome', 'portugal', 'holland', 'sweden', 'poland']
  },

  global_550: {
    id: 'global_550',
    name: 'Gran Campaña Global',
    subtitle: 'El Orbe y la Era de los Descubrimientos (1525)',
    icon: '🌍',
    startingYear: 1525,
    startingEpoch: 'renaissance',
    provinceCountEstimate: 550,
    scope: 'Todo el Planeta (5 Continentes & Rutas Marítimas)',
    difficulty: 'Avanzada',
    desc: 'Campaña geopolítica a escala mundial sin restricciones. Coloniza el Nuevo Mundo, domina el comercio de especias, comanda dinastías en Asia Oriental y unifica el orbe bajo tu estandarte.',
    theatersAllowed: null, // all provinces
    cameraCenter: { x: 1200, y: 400, zoom: 1.15 },
    filterProvince: () => true,
    recommendedFactions: ['spain', 'france', 'britain', 'germany', 'ottoman', 'china', 'japan', 'russia', 'portugal', 'mughal', 'persia', 'aztec', 'inca']
  },

  thirty_years_war_1618: {
    id: 'thirty_years_war_1618',
    name: 'La Guerra de los Treinta Años',
    subtitle: 'El Conflicto Confesional en Europa Central (1618)',
    icon: '⚔️',
    startingYear: 1618,
    startingEpoch: 'modern', // Epoch IV: Enlightenment & Line Volleys
    provinceCountEstimate: 210,
    scope: 'Europa Central, Rin, Bohemia, Flandes y Países Bálticos',
    difficulty: 'Veterano',
    desc: 'Europa Central arde en llamas tras la Defenestración de Praga. Inicia directamente en la Época de la Ilustración con mosquetería masiva de salva, tercios tardíos y artillería pesada.',
    theatersAllowed: ['europe', 'spain', 'flanders', 'mena', 'middle east', 'africa'],
    cameraCenter: { x: 1180, y: 300, zoom: 2.2 },
    filterProvince: (p) => {
      const th = (p.theater || '').toLowerCase();
      if (['europe', 'spain', 'flanders'].includes(th)) return true;
      if (th === 'mena' && p.x >= 950 && p.x <= 1500 && p.y <= 500) return true;
      if (th === 'middle east' && p.x >= 1200 && p.x <= 1450 && p.y <= 480) return true;
      if (th === 'africa' && p.x >= 950 && p.x <= 1380 && p.y <= 470) return true;
      return false;
    },
    recommendedFactions: ['germany', 'spain', 'sweden', 'france', 'holland', 'britain', 'poland'],
    alliances: {
      catholicLeague: ['germany', 'spain', 'rome', 'poland'],
      protestantUnion: ['sweden', 'holland', 'france', 'britain']
    }
  },

  genesis_sandbox: {
    id: 'genesis_sandbox',
    name: 'Génesis de Civilizaciones',
    subtitle: 'Mundo Fragmentado & Evolución Tecnológica (Sandbox)',
    icon: '🏛️',
    startingYear: 1000,
    startingEpoch: 'antiquity', // Epoch I: Antiquity / Classic
    provinceCountEstimate: 550,
    scope: 'Mundo Entero (Ciudades-Estado Neutrales)',
    difficulty: 'Abierta / Personalizable',
    desc: 'Las naciones nacen desde cero. Todas las provincias (excepto tu capital) comienzan como ciudades-estado independientes. Desarrolla la tecnología desde la Antigüedad hasta la Pólvora.',
    theatersAllowed: null,
    cameraCenter: { x: 1150, y: 350, zoom: 1.2 },
    filterProvince: () => true,
    isSandbox: true,
    recommendedFactions: ['spain', 'france', 'britain', 'germany', 'rome', 'ottoman', 'china', 'japan', 'custom']
  }
};

/**
 * Historical Narratives, Sovereign Briefings & Victory Goals
 */
var FACTION_HISTORICAL_DOSSIERS = {
  spain: {
    id: 'spain',
    title: 'Rey de las Españas y Emperador de los Dos Mundos',
    leader: 'Carlos I de España y V del Sacro Imperio',
    quote: '«En mi imperio nunca se pone el sol.»',
    historicalBriefing: 'Heredero de los Reyes Católicos y de la Casa de Borgoña, Carlos I gobierna un orbe gigantesco. En Italia, las tropas imperiales se baten contra las huestes del rey Francisco I de Francia por la llave de Milán, mientras los tercios de Flandes afianzan la frontera en el Rin y las flotas de galeones traen el oro de las Indias.',
    doctrinesText: 'Supremacía de Tercios de Picas & Arcabuces (-15% coste, +20% moral), Flota de Indias (+25% oro comercial), Baluartes de Pavía (-30% bajas en asedio).',
    capital: 'castilla',
    victoryGoals: {
      military: 'Conquistar Milán, Flandes, Nápoles y dominar al menos 35 provincias.',
      economic: 'Acumular un Tesoro Imperial de 25,000 Oro y controlar 8 puertos marítimos.',
      scientific: 'Alcanzar la Época de la Ilustración y erigir la Real Academia Imperial.'
    }
  },

  france: {
    id: 'france',
    title: 'Rey Cristianísimo de Francia & Señor del Renacimiento',
    leader: 'Francisco I de Valois',
    quote: '«Todo se ha perdido, menos el honor.»',
    historicalBriefing: 'Rodeado por las posesiones de la Casa de Austria, Francisco I busca romper el cerco que asfixia a Francia. Con una formidable caballería de choque de gendarmes y regimientos mercenarios de lansquenetes suizos, la corona gala marcha sobre Lombardía para disputar el Milanesado y reivindicar su hegemonía en Europa.',
    doctrinesText: 'Carga de Gendarmes (+25% daño de choque), Granero Fértil (+30% alimento en llanuras), Élan Militar (-20% tiempo de reclutamiento).',
    capital: 'paris',
    victoryGoals: {
      military: 'Capturar el Ducado de Milán, Flandes y expandir el reino a 35 provincias.',
      economic: 'Alcanzar 22,000 Oro y desarrollar cosechas en 15 provincias agrícolas.',
      scientific: 'Investigar la Metalurgia Avanzada y la Doctrina de Fuego en Salva.'
    }
  },

  britain: {
    id: 'britain',
    title: 'Soberano de Inglaterra, Señor de Irlanda & Defensor de la Fe',
    leader: 'Enrique VIII Tudor',
    quote: '«Quien domina las olas, domina el comercio del mundo.»',
    historicalBriefing: 'Tras poner fin a las Guerras de las Rosas, los Tudor consolidan un reino insular inexpugnable. Con arqueros de tiro largo que doblegaron caballeros en Agincourt y una armada de astilleros que empieza a desafiar las rutas del Atlántico, Inglaterra actúa como árbitro supremo del equilibrio de poder continental.',
    doctrinesText: 'Maestros del Tiro Largo (+15% alcance y precisión), Comercio Marítimo (+20% oro en costas), Cuadro Inquebrantable (-40% daño recibido en cuadro).',
    capital: 'london',
    victoryGoals: {
      military: 'Unificar las Islas Británicas, asegurar Calais y dominar 30 provincias costeras.',
      economic: 'Monopolizar 10 rutas marítimas con 30,000 Oro en las arcas reales.',
      scientific: 'Desarrollar la Real Sociedad Científica y la Navegación Astronómica.'
    }
  },

  germany: {
    id: 'germany',
    title: 'Emperador Electo de los Romanos & Archiduque de Austria',
    leader: 'Maximiliano I / Casa de Habsburgo',
    quote: '«Bella gerant alii, tu felix Austria nube.» (Que otros hagan la guerra; tú, feliz Austria, cásate).',
    historicalBriefing: 'El Sacro Imperio es un mosaico de príncipes electores, ciudades libres imperiales y fundiciones del Rin. Los temidos regimientos de lansquenetes armados con espadas a dos manos (Doppelsöldners) y la avanzada artillería de bronce convierten a los ejércitos germánicos en una máquina bélica formidable.',
    doctrinesText: 'Furia Lansquenete (+25% penetración contra picas), Fundiciones del Rin (+35% producción de hierro), Disciplina Artillera (+20% cadencia de cañones).',
    capital: 'bavaria',
    victoryGoals: {
      military: 'Subyugar los principados rebeldes y controlar 35 provincias en Europa Central.',
      economic: 'Producir más de 2,000 Hierro por turno y amasar 20,000 Oro.',
      scientific: 'Investigar la Gran Bombarda y la Fundición de Cañones de Asedio.'
    }
  },

  ottoman: {
    id: 'ottoman',
    title: 'Padishah, Sultán de Sultanes & Conquistador de Bizancio',
    leader: 'Suleimán el Magnífico',
    quote: '«Soy el soberano de los horizontes de Oriente y Occidente.»',
    historicalBriefing: 'Desde la sublime Constantinopla, el Imperio Otomano extiende sus alas sobre los Balcanes, Hungría, el norte de África y Oriente Medio. Con el disciplinado cuerpo de élite de los Jenízaros y las colosales bombardas de asedio de bronce de Urbano, los ejércitos de la Media Luna amenazan con derribar las puertas de Viena.',
    doctrinesText: 'Cuerpo de Jenízaros (Moral inquebrantable), Bombardas de Asedio (+30% daño contra fortalezas), Encrucijada de Rutas (+35% comercio terrestre).',
    capital: 'constantinople',
    victoryGoals: {
      military: 'Conquistar Belgrado, Budapest y Viena, sumando 40 provincias al sultanato.',
      economic: 'Controlar el Estrecho del Bósforo y el comercio del Levante con 28,000 Oro.',
      scientific: 'Completar las ciencias de balística y fortificaciones de traza italiana.'
    }
  },

  russia: {
    id: 'russia',
    title: 'Zar de Todas las Rusias & Gran Príncipe de Moscovia',
    leader: 'Iván IV «El Terrible»',
    quote: '«El cetro del zar no teme a los boyardos ni a los tártaros.»',
    historicalBriefing: 'Habiendo sacudido el yugo de la Horda de Oro, Moscovia forja un imperio continental en las estepas boreales. Con los regimientos de infantería Streltsí armados con hachas barbudas y mosquetes, y la resistencia sobrehumana al invierno ruso, el Zarato se expande hacia el Báltico y las inmensidades de Siberia.',
    doctrinesText: 'Guardia Streltsí (Resistencia al frío e infantería pesada), Inmensidad Esteparia (-25% coste de reclutamiento), Ferocidad Boyarda (+15% daño en carga).',
    capital: 'moscow',
    victoryGoals: {
      military: 'Anexionar Nóvgorod, Kazán y los puertos del Báltico con 40 provincias bajo el zar.',
      economic: 'Dominar las rutas de pieles y metales con 20,000 Oro y 1,500 Hierro.',
      scientific: 'Establecer el Arsenal de Moscú y ascender a la Ilustración.'
    }
  },

  china: {
    id: 'china',
    title: 'Hijo del Cielo & Emperador de la Gran Dinastía Ming',
    leader: 'Emperador Yongle',
    quote: '«Bajo el cielo no hay tierra que no pertenezca al Emperador.»',
    historicalBriefing: 'La Dinastía Ming representa la cumbre demográfica y científica del planeta. Desde la Ciudad Prohibida de Beijing, la armada de gigantescos navíos del tesoro del almirante Zheng He navega por el Índico, mientras la Gran Muralla y las armas de pólvora protegen el Imperio del Medio.',
    doctrinesText: 'Cuna de la Pólvora (-30% coste de investigación balística), Gran Muralla (+40% defensa de fortalezas), Ruta de la Seda (+40% oro comercial).',
    capital: 'beijing',
    victoryGoals: {
      military: 'Asegurar las fronteras de China y someter 45 provincias orientales.',
      economic: 'Atesorar 40,000 de Oro provenientes del tributo y comercio de porcelana y seda.',
      scientific: 'Investigar la Pólvora Celestial y el Gran Tratado de Ciencias Ming.'
    }
  },

  japan: {
    id: 'japan',
    title: 'Shōgun Supremo & Pacificador de las Tierras del Sol Naciente',
    leader: 'Tokugawa Ieyasu / Oda Nobunaga',
    quote: '«Tenka Fubu: El reino unificado bajo la espada y el arcabuz.»',
    historicalBriefing: 'Tras más de un siglo de guerra civil ininterrumpida durante el periodo Sengoku, los daimios combinan el código samurái con letales salvas de arcabuces Tanegashima. Con castillos inexpugnables de piedra y guerreros que prefieren el seppuku a la deshonra, Japón se apresta a consolidar un shogunato eterno.',
    doctrinesText: 'Código Bushido (Infantería inmune al pánico), Salvas Tanegashima (+25% cadencia de arcabuces en 3 filas rotativas), Castillos Hirajiro (-35% daño recibido).',
    capital: 'kyoto',
    victoryGoals: {
      military: 'Unificar los clanes de Japón y proyectar el poder samurái a 30 provincias.',
      economic: 'Desarrollar minas de plata y armerías con 20,000 Oro acumulados.',
      scientific: 'Perfeccionar la forja de acero Tamahagane y la artillería de sitio.'
    }
  },

  rome: {
    id: 'rome',
    title: 'Sumo Pontífice & Defensor de la Ciudad Eterna',
    leader: 'Papa Julio II «El Terrible»',
    quote: '«Si la pluma no basta, que hablen las espadas de la Iglesia.»',
    historicalBriefing: 'El Papa Guerrero comanda personalmente los ejércitos de la Santa Sede. Respaldado por la Guardia Suiza, la riqueza de la cristiandad y el redescubrimiento de los tratados militares de la antigua Roma, el Papado busca unificar Italia y desterrar a los ejércitos extranjeros de la península.',
    doctrinesText: 'Vías Consulares (+30% puntos de movimiento estratégico), Legiones Pontificias (-50% penalización de flanco), Guardia Suiza (Moral de hierro).',
    capital: 'rome',
    victoryGoals: {
      military: 'Unificar toda Italia desde Milán hasta Sicilia bajo el mandato pontificio.',
      economic: 'Alcanzar 25,000 Oro en las arcas vaticanas mediante tributos.',
      scientific: 'Construir la Basílica de San Pedro y culminar el Renacimiento cultural.'
    }
  },

  sweden: {
    id: 'sweden',
    title: 'León del Norte & Defensor de la Reforma Evangélica',
    leader: 'Gustavo Adolfo II',
    quote: '«No temo al peligro; la victoria nace de la audacia y la disciplina.»',
    historicalBriefing: 'El rey de Suecia revolucionó el arte de la guerra con la doctrina militar más moderna de su siglo. Combinando salvas devastadoras de mosquetería a quemarropa con cañones ligeros de cuero y cargas furiosas de caballería sable en mano, Suecia marcha sobre el Sacro Imperio.',
    doctrinesText: 'Doctrina de Salva Rápida (+30% letalidad de mosqueteros), Artillería Ligera Regimental (+20% velocidad de cañones), Disciplina Nórdica (Alta resistencia a fatiga).',
    capital: 'sweden',
    victoryGoals: {
      military: 'Dominar el Mar Báltico (Dominium Maris Baltici) y 30 provincias centroeuropeas.',
      economic: 'Monopolizar el comercio del hierro y brea con 22,000 Oro en tesorería.',
      scientific: 'Alcanzar la Época de la Ilustración y modernizar todas las academias militares.'
    }
  },

  holland: {
    id: 'holland',
    title: 'Estatúder de las Provincias Unidas & Almirante del Mar del Norte',
    leader: 'Mauricio de Nassau',
    quote: '«Je Maintiendrai: La libertad se conquista en el mar y en las trincheras.»',
    historicalBriefing: 'Tras rebelarse contra la corona hispánica en la Guerra de los Ochenta Años, los holandeses aplican la geometría militar y la contramarcha en el combate. Con la Compañía de las Indias Orientales (VOC), Ámsterdam se convierte en el corazón financiero del mundo.',
    doctrinesText: 'Fuego en Contramarcha (+25% cadencia de mosquetes), Compañía de las Indias (+50% oro en comercio marítimo), Diques y Asedios (+30% defensa territorial).',
    capital: 'holland',
    victoryGoals: {
      military: 'Asegurar la independencia total y controlar 25 provincias comerciales clave.',
      economic: 'Monopolizar el comercio global con 35,000 Oro en el Banco de Ámsterdam.',
      scientific: 'Investigar la Economía Bancaria Moderna y la Cartografía Holandesa.'
    }
  },

  poland: {
    id: 'poland',
    title: 'Rey de Polonia & Gran Duque de Lituania',
    leader: 'Segismundo II / Jan III Sobieski',
    quote: '«Vinimus, vidimus, Deus vicit: Con nosotros cabalgan los ángeles de hierro.»',
    historicalBriefing: 'La Mancomunidad domina el este de Europa con la caballería más temida del continente: los Húsares Alados. Con sus alas de plumas de águila y lanzas huecas de cinco metros, barren formaciones enteras de infantería en cargas que deciden el destino de naciones.',
    doctrinesText: 'Húsares Alados (La carga de choque más letal del juego), Libertad Dorada (+25% moral en caballería), Fortaleza Tártara (+20% defensa en llanuras).',
    capital: 'poland',
    victoryGoals: {
      military: 'Controlar Europa del Este desde el Báltico hasta el Mar Negro (35 provincias).',
      economic: 'Alcanzar 22,000 Oro y liderar la producción de grano en 12 provincias.',
      scientific: 'Desarrollar la Táctica Combinada de Húsares y Artillería Móvil.'
    }
  },

  custom: {
    id: 'custom',
    title: 'Gran Mariscal & Fundador del Imperio Soberano',
    leader: 'Soberano Personalizado',
    quote: '«El destino de nuestra patria se forja con la voluntad y el acero.»',
    historicalBriefing: 'Una nueva potencia asciende en el tablero mundial, forjada según las doctrinas, la heráldica y los talentos de civilización configurados por el comandante.',
    doctrinesText: 'Personalizada según los talentos asignados en el Forjador de Civilizaciones (Empire Earth).',
    capital: 'castilla',
    victoryGoals: {
      military: 'Conquistar 35 provincias y 3 capitales imperiales.',
      economic: 'Acumular 25,000 Oro en el Tesoro Soberano.',
      scientific: 'Avanzar a la Época de la Ilustración y construir la Maravilla Soberana.'
    }
  }
};

/**
 * Helper to get a scenario's filtered provinces list and rebuild neighbor connectivity
 */
var getScenarioProvinces = function(scenarioKey, customCivData = null) {
  const scenario = CAMPAIGN_SCENARIOS[scenarioKey] || CAMPAIGN_SCENARIOS['europe_200'];
  const allProvs = (typeof WORLD_PROVINCES !== 'undefined') ? WORLD_PROVINCES : [];

  // Filter raw data
  let filtered = allProvs.filter(scenario.filterProvince);

  // Deep clone to allow safe mutating without contaminating global dataset
  let result = filtered.map(p => JSON.parse(JSON.stringify(p)));
  const validIds = new Set(result.map(p => p.id));

  // Fix neighbor adjacency to only reference active provinces
  result.forEach(p => {
    if (p.neighbors && Array.isArray(p.neighbors)) {
      p.neighbors = p.neighbors.filter(nid => validIds.has(nid));
    }
  });

  // Scenario specific modifications
  if (scenarioKey === 'genesis_sandbox') {
    // In genesis sandbox, all provinces start neutral except known faction capitals
    const knownCapitals = new Map();
    const activeFactions = (typeof FACTIONS !== 'undefined') ? FACTIONS : {};
    for (const [fKey, fDef] of Object.entries(activeFactions)) {
      if (fDef.capitalProvince && validIds.has(fDef.capitalProvince)) {
        knownCapitals.set(fDef.capitalProvince, fKey);
      }
    }
    if (customCivData && customCivData.capitalProvince && validIds.has(customCivData.capitalProvince)) {
      knownCapitals.set(customCivData.capitalProvince, 'custom');
    }

    result.forEach(p => {
      if (knownCapitals.has(p.id)) {
        p.owner = knownCapitals.get(p.id);
        p.cityLevel = 2;
        p.developmentLevel = 3;
      } else {
        p.owner = 'neutral';
        p.cityLevel = 1;
        p.developmentLevel = 1;
        p.garrison = ['militia'];
      }
    });
  } else if (scenarioKey === 'thirty_years_war_1618') {
    // 1618 Historical Setup
    result.forEach(p => {
      p.cityLevel = Math.max(2, p.cityLevel || 2);
      p.developmentLevel = Math.max(3, p.developmentLevel || 3);
      // Historical territory adjustments: Bohemia/Prague contested, Protestant Union, etc.
      if (p.id === 'bohemia' || p.id === 'prague') {
        p.owner = 'germany'; // Contested HRE core
        p.defenseLevel = 3;
      }
    });
  }

  // If custom civ is active, ensure its capital belongs to it
  if (customCivData && customCivData.capitalProvince) {
    const cap = result.find(p => p.id === customCivData.capitalProvince);
    if (cap) {
      cap.owner = 'custom';
    }
  }

  return result;
};

/**
 * Generate Scenario Starting Armies
 */
var getScenarioStartingArmies = function(scenarioKey, playerFaction, customCivData = null) {
  const ArmyClass = (typeof StrategicArmy !== 'undefined') ? StrategicArmy : ((typeof globalThis !== 'undefined' && globalThis.StrategicArmy) ? globalThis.StrategicArmy : ((typeof window !== 'undefined' && window.StrategicArmy) ? window.StrategicArmy : null));
  const scenario = CAMPAIGN_SCENARIOS[scenarioKey] || CAMPAIGN_SCENARIOS['europe_200'];
  let armies = [];
  let nextArmyId = 1;

  if (scenarioKey === 'genesis_sandbox') {
    // Sandbox: Each faction present gets 1 pioneer army at its capital
    const activeFactions = ['spain', 'france', 'germany', 'britain', 'ottoman', 'rome'];
    if (playerFaction && !activeFactions.includes(playerFaction)) {
      activeFactions.push(playerFaction);
    }
    if (playerFaction === 'custom') {
      activeFactions.push('custom');
    }

    activeFactions.forEach(fac => {
      const activeFactionsMap = (typeof FACTIONS !== 'undefined') ? FACTIONS : {};
      const fDef = (fac === 'custom' && customCivData) ? customCivData : (activeFactionsMap[fac] || activeFactionsMap['spain'] || { leader: 'Pionero', capitalProvince: 'castilla' });
      const capId = fDef.capitalProvince || 'castilla';
      const army = new ArmyClass(
        nextArmyId++,
        fac,
        `${fDef.leader} (Hueste Pionera)`,
        capId,
        [
          { unitKey: 'phalanx', soldiers: 40, maxSoldiers: 40 },
          { unitKey: 'archers', soldiers: 30, maxSoldiers: 30 }
        ]
      );
      armies.push(army);
    });

    return armies;
  }

  if (scenarioKey === 'thirty_years_war_1618') {
    // 1618 Advanced armies: Imperial Tercios, Swedish Volley Infantry, French Musketeers
    armies = [
      new ArmyClass(nextArmyId++, 'germany', 'Conde de Tilly (Liga Católica)', 'bavaria', [
        { unitKey: 'tercio', soldiers: 60, maxSoldiers: 60 },
        { unitKey: 'arquebusiers', soldiers: 48, maxSoldiers: 48 },
        { unitKey: 'culverin', soldiers: 12, maxSoldiers: 12 },
        { unitKey: 'landsknecht', soldiers: 40, maxSoldiers: 40 }
      ]),
      new ArmyClass(nextArmyId++, 'spain', 'Ambrosio Spínola (Tercio Viejo)', 'flanders', [
        { unitKey: 'tercio', soldiers: 60, maxSoldiers: 60 },
        { unitKey: 'tercio', soldiers: 60, maxSoldiers: 60 },
        { unitKey: 'arquebusiers', soldiers: 48, maxSoldiers: 48 },
        { unitKey: 'culverin', soldiers: 8, maxSoldiers: 8 }
      ]),
      new ArmyClass(nextArmyId++, 'sweden', 'Gustavo Adolfo (Rey de Suecia)', 'sweden', [
        { unitKey: 'arquebusiers', soldiers: 48, maxSoldiers: 48 },
        { unitKey: 'arquebusiers', soldiers: 48, maxSoldiers: 48 },
        { unitKey: 'culverin', soldiers: 12, maxSoldiers: 12 },
        { unitKey: 'knights', soldiers: 32, maxSoldiers: 32 }
      ]),
      new ArmyClass(nextArmyId++, 'france', 'Cardenal Richelieu / Turenne', 'paris', [
        { unitKey: 'tercio', soldiers: 56, maxSoldiers: 56 },
        { unitKey: 'arquebusiers', soldiers: 40, maxSoldiers: 40 },
        { unitKey: 'knights', soldiers: 28, maxSoldiers: 28 }
      ]),
      new ArmyClass(nextArmyId++, 'holland', 'Mauricio de Nassau (Provincias Unidas)', 'holland', [
        { unitKey: 'arquebusiers', soldiers: 48, maxSoldiers: 48 },
        { unitKey: 'tercio', soldiers: 48, maxSoldiers: 48 },
        { unitKey: 'culverin', soldiers: 8, maxSoldiers: 8 }
      ]),
      new ArmyClass(nextArmyId++, 'britain', 'Lord Fairfax', 'london', [
        { unitKey: 'longbow', soldiers: 40, maxSoldiers: 40 },
        { unitKey: 'men_at_arms', soldiers: 48, maxSoldiers: 48 },
        { unitKey: 'arquebusiers', soldiers: 36, maxSoldiers: 36 }
      ])
    ];

    // If player chose a faction not in default armies, spawn their national host
    const playerHasArmy = armies.some(a => a.faction === playerFaction);
    if (!playerHasArmy) {
      const activeFactionsMap = (typeof FACTIONS !== 'undefined') ? FACTIONS : {};
      const fDef = (playerFaction === 'custom' && customCivData) ? customCivData : (activeFactionsMap[playerFaction] || activeFactionsMap['spain']);
      const capId = fDef.capitalProvince || 'rome';
      armies.unshift(new ArmyClass(
        nextArmyId++,
        playerFaction,
        `${fDef.leader} (Ejército Imperial)`,
        capId,
        [
          { unitKey: 'tercio', soldiers: 60, maxSoldiers: 60 },
          { unitKey: 'arquebusiers', soldiers: 48, maxSoldiers: 48 },
          { unitKey: 'culverin', soldiers: 10, maxSoldiers: 10 }
        ]
      ));
    }

    return armies;
  }

  // Default: 1525 (Europe 200 or Global 550)
  armies = [
    // Spain: Imperial Army at Milan/Pavia
    new ArmyClass(nextArmyId++, 'spain', 'Fernando de Ávalos (Marqués de Pescara)', 'milan', [
      { unitKey: 'tercio', soldiers: 56, maxSoldiers: 56 },
      { unitKey: 'tercio', soldiers: 56, maxSoldiers: 56 },
      { unitKey: 'arquebusiers', soldiers: 36, maxSoldiers: 36 },
      { unitKey: 'arquebusiers', soldiers: 36, maxSoldiers: 36 },
      { unitKey: 'culverin', soldiers: 8, maxSoldiers: 8 }
    ]),
    // Spain: Army in Castile
    new ArmyClass(nextArmyId++, 'spain', 'Duque de Alba', 'castilla', [
      { unitKey: 'tercio', soldiers: 56, maxSoldiers: 56 },
      { unitKey: 'landsknecht', soldiers: 40, maxSoldiers: 40 },
      { unitKey: 'arquebusiers', soldiers: 36, maxSoldiers: 36 }
    ]),
    // France: Royal Army at Burgundy / Italy Border
    new ArmyClass(nextArmyId++, 'france', 'Francisco I de Francia', 'burgundy', [
      { unitKey: 'landsknecht', soldiers: 40, maxSoldiers: 40 },
      { unitKey: 'landsknecht', soldiers: 40, maxSoldiers: 40 },
      { unitKey: 'tercio', soldiers: 56, maxSoldiers: 56 },
      { unitKey: 'arquebusiers', soldiers: 36, maxSoldiers: 36 },
      { unitKey: 'culverin', soldiers: 8, maxSoldiers: 8 }
    ]),
    // Britain: Royal Army in London
    new ArmyClass(nextArmyId++, 'britain', 'Duque de Norfolk', 'london', [
      { unitKey: 'longbow', soldiers: 40, maxSoldiers: 40 },
      { unitKey: 'men_at_arms', soldiers: 48, maxSoldiers: 48 },
      { unitKey: 'knights', soldiers: 24, maxSoldiers: 24 }
    ]),
    // Germany: Imperial Lansquenet Host in Bavaria
    new ArmyClass(nextArmyId++, 'germany', 'Georg von Frundsberg', 'bavaria', [
      { unitKey: 'landsknecht', soldiers: 40, maxSoldiers: 40 },
      { unitKey: 'landsknecht', soldiers: 40, maxSoldiers: 40 },
      { unitKey: 'culverin', soldiers: 8, maxSoldiers: 8 }
    ]),
    // Ottoman Empire: Army in Constantinople / Balkans
    new ArmyClass(nextArmyId++, 'ottoman', 'Ibrahim Pasha (Gran Visir)', 'constantinople', [
      { unitKey: 'arquebusiers', soldiers: 48, maxSoldiers: 48 },
      { unitKey: 'tercio', soldiers: 48, maxSoldiers: 48 },
      { unitKey: 'culverin', soldiers: 12, maxSoldiers: 12 }
    ]),
    // Rome: Papal Guard
    new ArmyClass(nextArmyId++, 'rome', 'Prospero Colonna', 'rome', [
      { unitKey: 'legion', soldiers: 48, maxSoldiers: 48 },
      { unitKey: 'phalanx', soldiers: 48, maxSoldiers: 48 }
    ])
  ];

  // If player chose a nation not present, add their royal army at their capital
  const playerHasArmy = armies.some(a => a.faction === playerFaction);
  if (!playerHasArmy) {
    const activeFactionsMap = (typeof FACTIONS !== 'undefined') ? FACTIONS : {};
    const fDef = (playerFaction === 'custom' && customCivData) ? customCivData : (activeFactionsMap[playerFaction] || activeFactionsMap['spain']);
    const capId = fDef.capitalProvince || 'castilla';
    armies.unshift(new ArmyClass(
      nextArmyId++,
      playerFaction,
      `${fDef.leader} (Hueste Real)`,
      capId,
      [
        { unitKey: 'tercio', soldiers: 56, maxSoldiers: 56 },
        { unitKey: 'arquebusiers', soldiers: 40, maxSoldiers: 40 },
        { unitKey: 'culverin', soldiers: 8, maxSoldiers: 8 }
      ]
    ));
  }

  return armies;
}

// Global browser / node export
if (typeof window !== 'undefined') {
  window.CAMPAIGN_SCENARIOS = CAMPAIGN_SCENARIOS;
  window.FACTION_HISTORICAL_DOSSIERS = FACTION_HISTORICAL_DOSSIERS;
  window.getScenarioProvinces = getScenarioProvinces;
  window.getScenarioStartingArmies = getScenarioStartingArmies;
}
if (typeof globalThis !== 'undefined') {
  globalThis.CAMPAIGN_SCENARIOS = CAMPAIGN_SCENARIOS;
  globalThis.FACTION_HISTORICAL_DOSSIERS = FACTION_HISTORICAL_DOSSIERS;
  globalThis.getScenarioProvinces = getScenarioProvinces;
  globalThis.getScenarioStartingArmies = getScenarioStartingArmies;
}
