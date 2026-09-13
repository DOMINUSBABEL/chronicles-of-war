/**
 * Chronicles of War - Global World Map Data
 * Calibrated for ultra-high-definition 2400x1162 historical world map relief
 * Based on Age of History 3 cartographic coordinate space & administrative mechanics.
 * 70+ historical provinces covering Americas, Europe, Eurasia, Middle East, Africa & Asia.
 */

const WORLD_PROVINCES = [
  {
    "id": "new_england",
    "name": "Nueva Inglaterra & Boston",
    "capitalName": "Boston",
    "owner": "england",
    "theater": "Americas",
    "x": 656,
    "y": 361,
    "radius": 26,
    "neighbors": [
      "virginia",
      "great_plains"
    ],
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 65000,
    "developmentLevel": 4,
    "economyValue": 45,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "polygon": [
      {
        "x": 630,
        "y": 340
      },
      {
        "x": 682,
        "y": 340
      },
      {
        "x": 682,
        "y": 382
      },
      {
        "x": 630,
        "y": 382
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "virginia",
    "name": "Virginia & Chesapeake",
    "capitalName": "Jamestown",
    "owner": "england",
    "theater": "Americas",
    "x": 605,
    "y": 405,
    "radius": 26,
    "neighbors": [
      "new_england",
      "florida",
      "mississippi"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 52000,
    "developmentLevel": 3,
    "economyValue": 40,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "polygon": [
      {
        "x": 579,
        "y": 384
      },
      {
        "x": 631,
        "y": 384
      },
      {
        "x": 631,
        "y": 426
      },
      {
        "x": 579,
        "y": 426
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "florida",
    "name": "La Florida & San Agustín",
    "capitalName": "San Agustín",
    "owner": "spain",
    "theater": "Americas",
    "x": 588,
    "y": 465,
    "radius": 26,
    "neighbors": [
      "virginia",
      "mississippi",
      "caribbean"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 28000,
    "developmentLevel": 2,
    "economyValue": 25,
    "infrastructureLevel": 1,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 562,
        "y": 444
      },
      {
        "x": 614,
        "y": 444
      },
      {
        "x": 614,
        "y": 486
      },
      {
        "x": 562,
        "y": 486
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ]
  },
  {
    "id": "mississippi",
    "name": "Luisiana & Misisipi",
    "capitalName": "Nueva Orleans",
    "owner": "france",
    "theater": "Americas",
    "x": 531,
    "y": 464,
    "radius": 28,
    "neighbors": [
      "virginia",
      "florida",
      "great_plains",
      "veracruz"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 34000,
    "developmentLevel": 2,
    "economyValue": 30,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "polygon": [
      {
        "x": 503,
        "y": 442
      },
      {
        "x": 559,
        "y": 442
      },
      {
        "x": 559,
        "y": 486
      },
      {
        "x": 503,
        "y": 486
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ]
  },
  {
    "id": "great_plains",
    "name": "Grandes Llanuras del Oeste",
    "capitalName": "Omaha / Territorio Siux",
    "owner": "neutral",
    "theater": "Americas",
    "x": 480,
    "y": 380,
    "radius": 32,
    "neighbors": [
      "new_england",
      "mississippi",
      "california"
    ],
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 1,
    "population": 18000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 0,
    "isColonizable": true,
    "polygon": [
      {
        "x": 448,
        "y": 354
      },
      {
        "x": 512,
        "y": 354
      },
      {
        "x": 512,
        "y": 406
      },
      {
        "x": 448,
        "y": 406
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ]
  },
  {
    "id": "california",
    "name": "Alta California & San Francisco",
    "capitalName": "San Francisco",
    "owner": "neutral",
    "theater": "Americas",
    "x": 318,
    "y": 401,
    "radius": 28,
    "neighbors": [
      "great_plains",
      "tenochtitlan"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 1,
    "population": 22000,
    "developmentLevel": 1,
    "economyValue": 20,
    "infrastructureLevel": 1,
    "defenseLevel": 0,
    "isColonizable": true,
    "polygon": [
      {
        "x": 290,
        "y": 379
      },
      {
        "x": 346,
        "y": 379
      },
      {
        "x": 346,
        "y": 423
      },
      {
        "x": 290,
        "y": 423
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ]
  },
  {
    "id": "tenochtitlan",
    "name": "Imperio Mexica / Tenochtitlan",
    "capitalName": "Tenochtitlan",
    "owner": "aztec",
    "theater": "Americas",
    "x": 471,
    "y": 544,
    "radius": 30,
    "neighbors": [
      "california",
      "veracruz",
      "guatemala"
    ],
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 3,
    "population": 320000,
    "developmentLevel": 6,
    "economyValue": 85,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 441,
        "y": 520
      },
      {
        "x": 501,
        "y": 520
      },
      {
        "x": 501,
        "y": 568
      },
      {
        "x": 441,
        "y": 568
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "veracruz",
    "name": "Sotavento & Veracruz",
    "capitalName": "Veracruz",
    "owner": "spain",
    "theater": "Americas",
    "x": 495,
    "y": 542,
    "radius": 24,
    "neighbors": [
      "mississippi",
      "tenochtitlan",
      "yucatan",
      "caribbean"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 75000,
    "developmentLevel": 4,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 471,
        "y": 523
      },
      {
        "x": 519,
        "y": 523
      },
      {
        "x": 519,
        "y": 561
      },
      {
        "x": 471,
        "y": 561
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "yucatan",
    "name": "Tierras Mayas & Yucatán",
    "capitalName": "Mérida",
    "owner": "neutral",
    "theater": "Americas",
    "x": 526,
    "y": 535,
    "radius": 24,
    "neighbors": [
      "veracruz",
      "guatemala",
      "caribbean"
    ],
    "terrain": "jungle",
    "hasPort": true,
    "cityLevel": 1,
    "population": 48000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "polygon": [
      {
        "x": 502,
        "y": 516
      },
      {
        "x": 550,
        "y": 516
      },
      {
        "x": 550,
        "y": 554
      },
      {
        "x": 502,
        "y": 554
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ]
  },
  {
    "id": "guatemala",
    "name": "Reino de Guatemala & Istmo",
    "capitalName": "Santiago de Guatemala",
    "owner": "spain",
    "theater": "Americas",
    "x": 515,
    "y": 575,
    "radius": 22,
    "neighbors": [
      "tenochtitlan",
      "yucatan",
      "nueva_granada"
    ],
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 60000,
    "developmentLevel": 3,
    "economyValue": 38,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "polygon": [
      {
        "x": 493,
        "y": 557
      },
      {
        "x": 537,
        "y": 557
      },
      {
        "x": 537,
        "y": 593
      },
      {
        "x": 493,
        "y": 593
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "caribbean",
    "name": "Mar Caribe & La Habana",
    "capitalName": "La Habana",
    "owner": "spain",
    "theater": "Americas",
    "x": 581,
    "y": 517,
    "radius": 28,
    "neighbors": [
      "florida",
      "veracruz",
      "yucatan",
      "caracas",
      "andalucia"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 95000,
    "developmentLevel": 5,
    "economyValue": 70,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 553,
        "y": 495
      },
      {
        "x": 609,
        "y": 495
      },
      {
        "x": 609,
        "y": 539
      },
      {
        "x": 553,
        "y": 539
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "caracas",
    "name": "Capitanía de Venezuela & Caracas",
    "capitalName": "Caracas",
    "owner": "spain",
    "theater": "Americas",
    "x": 670,
    "y": 625,
    "radius": 26,
    "neighbors": [
      "caribbean",
      "nueva_granada",
      "amazonas"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 58000,
    "developmentLevel": 3,
    "economyValue": 45,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "polygon": [
      {
        "x": 644,
        "y": 604
      },
      {
        "x": 696,
        "y": 604
      },
      {
        "x": 696,
        "y": 646
      },
      {
        "x": 644,
        "y": 646
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "nueva_granada",
    "name": "Nuevo Reino de Granada & Bogotá",
    "capitalName": "Santafé de Bogotá",
    "owner": "spain",
    "theater": "Americas",
    "x": 636,
    "y": 649,
    "radius": 28,
    "neighbors": [
      "guatemala",
      "caracas",
      "quito",
      "amazonas"
    ],
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 140000,
    "developmentLevel": 5,
    "economyValue": 65,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 608,
        "y": 627
      },
      {
        "x": 664,
        "y": 627
      },
      {
        "x": 664,
        "y": 671
      },
      {
        "x": 608,
        "y": 671
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "quito",
    "name": "Real Audiencia de Quito",
    "capitalName": "Quito",
    "owner": "inca",
    "theater": "Americas",
    "x": 612,
    "y": 690,
    "radius": 24,
    "neighbors": [
      "nueva_granada",
      "lima",
      "amazonas"
    ],
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 110000,
    "developmentLevel": 4,
    "economyValue": 50,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 588,
        "y": 671
      },
      {
        "x": 636,
        "y": 671
      },
      {
        "x": 636,
        "y": 709
      },
      {
        "x": 588,
        "y": 709
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "lima",
    "name": "Costa Central & Ciudad de los Reyes",
    "capitalName": "Lima",
    "owner": "spain",
    "theater": "Americas",
    "x": 617,
    "y": 766,
    "radius": 26,
    "neighbors": [
      "quito",
      "cuzco",
      "charcas"
    ],
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 3,
    "population": 125000,
    "developmentLevel": 6,
    "economyValue": 75,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 591,
        "y": 745
      },
      {
        "x": 643,
        "y": 745
      },
      {
        "x": 643,
        "y": 787
      },
      {
        "x": 591,
        "y": 787
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "cuzco",
    "name": "Imperio Inca & Tawantinsuyu",
    "capitalName": "Cuzco",
    "owner": "inca",
    "theater": "Americas",
    "x": 650,
    "y": 776,
    "radius": 30,
    "neighbors": [
      "lima",
      "charcas",
      "amazonas"
    ],
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 280000,
    "developmentLevel": 6,
    "economyValue": 80,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 620,
        "y": 752
      },
      {
        "x": 680,
        "y": 752
      },
      {
        "x": 680,
        "y": 800
      },
      {
        "x": 620,
        "y": 800
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "charcas",
    "name": "Audiencia de Charcas & Cerro Rico",
    "capitalName": "Potosí",
    "owner": "spain",
    "theater": "Americas",
    "x": 680,
    "y": 820,
    "radius": 26,
    "neighbors": [
      "cuzco",
      "lima",
      "chile",
      "rio_plata",
      "amazonas"
    ],
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 160000,
    "developmentLevel": 7,
    "economyValue": 110,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 654,
        "y": 799
      },
      {
        "x": 706,
        "y": 799
      },
      {
        "x": 706,
        "y": 841
      },
      {
        "x": 654,
        "y": 841
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "chile",
    "name": "Capitanía General de Chile",
    "capitalName": "Santiago de Chile",
    "owner": "neutral",
    "theater": "Americas",
    "x": 635,
    "y": 920,
    "radius": 26,
    "neighbors": [
      "charcas",
      "rio_plata"
    ],
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 3,
    "economyValue": 35,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": true,
    "polygon": [
      {
        "x": 609,
        "y": 899
      },
      {
        "x": 661,
        "y": 899
      },
      {
        "x": 661,
        "y": 941
      },
      {
        "x": 609,
        "y": 941
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "rio_plata",
    "name": "Gobernación del Río de la Plata",
    "capitalName": "Buenos Aires",
    "owner": "spain",
    "theater": "Americas",
    "x": 739,
    "y": 938,
    "radius": 28,
    "neighbors": [
      "chile",
      "charcas",
      "bahia"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 65000,
    "developmentLevel": 4,
    "economyValue": 45,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 711,
        "y": 916
      },
      {
        "x": 767,
        "y": 916
      },
      {
        "x": 767,
        "y": 960
      },
      {
        "x": 711,
        "y": 960
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "bahia",
    "name": "Estado do Brasil & Salvador",
    "capitalName": "Salvador da Bahia",
    "owner": "portugal",
    "theater": "Americas",
    "x": 845,
    "y": 780,
    "radius": 28,
    "neighbors": [
      "rio_plata",
      "pernambuco",
      "amazonas"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 95000,
    "developmentLevel": 5,
    "economyValue": 65,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 817,
        "y": 758
      },
      {
        "x": 873,
        "y": 758
      },
      {
        "x": 873,
        "y": 802
      },
      {
        "x": 817,
        "y": 802
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "pernambuco",
    "name": "Capitanía de Pernambuco & Olinda",
    "capitalName": "Recife",
    "owner": "portugal",
    "theater": "Americas",
    "x": 894,
    "y": 738,
    "radius": 26,
    "neighbors": [
      "bahia",
      "amazonas",
      "lisbon"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 70000,
    "developmentLevel": 4,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "polygon": [
      {
        "x": 868,
        "y": 717
      },
      {
        "x": 920,
        "y": 717
      },
      {
        "x": 920,
        "y": 759
      },
      {
        "x": 868,
        "y": 759
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "amazonas",
    "name": "Cuenca Amazónica & Selva Profunda",
    "capitalName": "Manaos / Frontera Selvática",
    "owner": "neutral",
    "theater": "Americas",
    "x": 729,
    "y": 703,
    "radius": 34,
    "neighbors": [
      "caracas",
      "nueva_granada",
      "quito",
      "cuzco",
      "charcas",
      "bahia",
      "pernambuco"
    ],
    "terrain": "jungle",
    "hasPort": false,
    "cityLevel": 1,
    "population": 25000,
    "developmentLevel": 1,
    "economyValue": 18,
    "infrastructureLevel": 1,
    "defenseLevel": 0,
    "isColonizable": true,
    "polygon": [
      {
        "x": 695,
        "y": 676
      },
      {
        "x": 763,
        "y": 676
      },
      {
        "x": 763,
        "y": 730
      },
      {
        "x": 695,
        "y": 730
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ]
  },
  {
    "id": "lisbon",
    "name": "Reino de Portugal & Lisboa",
    "capitalName": "Lisboa",
    "owner": "portugal",
    "theater": "Europe",
    "x": 1067,
    "y": 389,
    "radius": 24,
    "neighbors": [
      "castilla",
      "andalucia",
      "pernambuco"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 180000,
    "developmentLevel": 6,
    "economyValue": 75,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1043,
        "y": 370
      },
      {
        "x": 1091,
        "y": 370
      },
      {
        "x": 1091,
        "y": 408
      },
      {
        "x": 1043,
        "y": 408
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "castilla",
    "name": "Castilla la Vieja & León",
    "capitalName": "Madrid",
    "owner": "spain",
    "theater": "Europe",
    "x": 1103,
    "y": 375,
    "radius": 28,
    "neighbors": [
      "lisbon",
      "aragon",
      "andalucia",
      "bordeaux"
    ],
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 310000,
    "developmentLevel": 7,
    "economyValue": 85,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1075,
        "y": 353
      },
      {
        "x": 1131,
        "y": 353
      },
      {
        "x": 1131,
        "y": 397
      },
      {
        "x": 1075,
        "y": 397
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "aragon",
    "name": "Corona de Aragón & Cataluña",
    "capitalName": "Barcelona",
    "owner": "spain",
    "theater": "Europe",
    "x": 1142,
    "y": 366,
    "radius": 24,
    "neighbors": [
      "castilla",
      "bordeaux",
      "provence",
      "milan",
      "naples"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 175000,
    "developmentLevel": 6,
    "economyValue": 65,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1118,
        "y": 347
      },
      {
        "x": 1166,
        "y": 347
      },
      {
        "x": 1166,
        "y": 385
      },
      {
        "x": 1118,
        "y": 385
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "andalucia",
    "name": "Reino de Sevilla & Andalucía",
    "capitalName": "Sevilla",
    "owner": "spain",
    "theater": "Europe",
    "x": 1088,
    "y": 401,
    "radius": 26,
    "neighbors": [
      "lisbon",
      "castilla",
      "fes",
      "caribbean"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 220000,
    "developmentLevel": 7,
    "economyValue": 90,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1062,
        "y": 380
      },
      {
        "x": 1114,
        "y": 380
      },
      {
        "x": 1114,
        "y": 422
      },
      {
        "x": 1062,
        "y": 422
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "bordeaux",
    "name": "Ducado de Aquitania & Burdeos",
    "capitalName": "Burdeos",
    "owner": "france",
    "theater": "Europe",
    "x": 1124,
    "y": 335,
    "radius": 24,
    "neighbors": [
      "castilla",
      "aragon",
      "paris",
      "bretagne",
      "burgundy"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 150000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1100,
        "y": 316
      },
      {
        "x": 1148,
        "y": 316
      },
      {
        "x": 1148,
        "y": 354
      },
      {
        "x": 1100,
        "y": 354
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "bretagne",
    "name": "Ducado de Bretaña & Nantes",
    "capitalName": "Rennes / Nantes",
    "owner": "france",
    "theater": "Europe",
    "x": 1105,
    "y": 305,
    "radius": 22,
    "neighbors": [
      "bordeaux",
      "paris",
      "london"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 110000,
    "developmentLevel": 4,
    "economyValue": 45,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1083,
        "y": 287
      },
      {
        "x": 1127,
        "y": 287
      },
      {
        "x": 1127,
        "y": 323
      },
      {
        "x": 1083,
        "y": 323
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "paris",
    "name": "Île-de-France & Corona Francesa",
    "capitalName": "París",
    "owner": "france",
    "theater": "Europe",
    "x": 1143,
    "y": 296,
    "radius": 28,
    "neighbors": [
      "bretagne",
      "bordeaux",
      "burgundy",
      "flanders",
      "london"
    ],
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 420000,
    "developmentLevel": 8,
    "economyValue": 105,
    "infrastructureLevel": 4,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1115,
        "y": 274
      },
      {
        "x": 1171,
        "y": 274
      },
      {
        "x": 1171,
        "y": 318
      },
      {
        "x": 1115,
        "y": 318
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "burgundy",
    "name": "Baja Borgoña & Franco Condado",
    "capitalName": "Dijon",
    "owner": "france",
    "theater": "Europe",
    "x": 1162,
    "y": 320,
    "radius": 24,
    "neighbors": [
      "bordeaux",
      "paris",
      "provence",
      "rhineland",
      "milan"
    ],
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 135000,
    "developmentLevel": 5,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1138,
        "y": 301
      },
      {
        "x": 1186,
        "y": 301
      },
      {
        "x": 1186,
        "y": 339
      },
      {
        "x": 1138,
        "y": 339
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "provence",
    "name": "Condado de Provenza & Marsella",
    "capitalName": "Marsella",
    "owner": "france",
    "theater": "Europe",
    "x": 1168,
    "y": 352,
    "radius": 22,
    "neighbors": [
      "aragon",
      "burgundy",
      "milan"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 140000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1146,
        "y": 334
      },
      {
        "x": 1190,
        "y": 334
      },
      {
        "x": 1190,
        "y": 370
      },
      {
        "x": 1146,
        "y": 370
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "flanders",
    "name": "Flandes & Países Bajos Españoles",
    "capitalName": "Bruselas / Amberes",
    "owner": "spain",
    "theater": "Europe",
    "x": 1158,
    "y": 278,
    "radius": 22,
    "neighbors": [
      "paris",
      "holland",
      "rhineland",
      "london"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 260000,
    "developmentLevel": 7,
    "economyValue": 95,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1136,
        "y": 260
      },
      {
        "x": 1180,
        "y": 260
      },
      {
        "x": 1180,
        "y": 296
      },
      {
        "x": 1136,
        "y": 296
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "holland",
    "name": "Provincias Unidas de Holanda",
    "capitalName": "Ámsterdam",
    "owner": "holland",
    "theater": "Europe",
    "x": 1164,
    "y": 260,
    "radius": 22,
    "neighbors": [
      "flanders",
      "rhineland",
      "saxony",
      "london"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 210000,
    "developmentLevel": 7,
    "economyValue": 90,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1142,
        "y": 242
      },
      {
        "x": 1186,
        "y": 242
      },
      {
        "x": 1186,
        "y": 278
      },
      {
        "x": 1142,
        "y": 278
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "london",
    "name": "Reino de Inglaterra & Londres",
    "capitalName": "Londres",
    "owner": "england",
    "theater": "Europe",
    "x": 1127,
    "y": 269,
    "radius": 26,
    "neighbors": [
      "bretagne",
      "paris",
      "flanders",
      "holland",
      "york",
      "ireland"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 360000,
    "developmentLevel": 7,
    "economyValue": 95,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1101,
        "y": 248
      },
      {
        "x": 1153,
        "y": 248
      },
      {
        "x": 1153,
        "y": 290
      },
      {
        "x": 1101,
        "y": 290
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "york",
    "name": "Condados del Norte & York",
    "capitalName": "York",
    "owner": "england",
    "theater": "Europe",
    "x": 1121,
    "y": 242,
    "radius": 22,
    "neighbors": [
      "london",
      "scotland",
      "ireland"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 130000,
    "developmentLevel": 5,
    "economyValue": 50,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1099,
        "y": 224
      },
      {
        "x": 1143,
        "y": 224
      },
      {
        "x": 1143,
        "y": 260
      },
      {
        "x": 1099,
        "y": 260
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "scotland",
    "name": "Reino de Escocia & Tierras Altas",
    "capitalName": "Edimburgo",
    "owner": "england",
    "theater": "Europe",
    "x": 1115,
    "y": 215,
    "radius": 24,
    "neighbors": [
      "york",
      "ireland",
      "norway"
    ],
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 95000,
    "developmentLevel": 4,
    "economyValue": 40,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1091,
        "y": 196
      },
      {
        "x": 1139,
        "y": 196
      },
      {
        "x": 1139,
        "y": 234
      },
      {
        "x": 1091,
        "y": 234
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "ireland",
    "name": "Señorío de Irlanda & Dublín",
    "capitalName": "Dublín",
    "owner": "england",
    "theater": "Europe",
    "x": 1086,
    "y": 249,
    "radius": 24,
    "neighbors": [
      "london",
      "york",
      "scotland"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 85000,
    "developmentLevel": 3,
    "economyValue": 35,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1062,
        "y": 230
      },
      {
        "x": 1110,
        "y": 230
      },
      {
        "x": 1110,
        "y": 268
      },
      {
        "x": 1062,
        "y": 268
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "rhineland",
    "name": "Renania & Palatinado",
    "capitalName": "Frankfurt / Colonia",
    "owner": "hre",
    "theater": "Europe",
    "x": 1184,
    "y": 284,
    "radius": 24,
    "neighbors": [
      "burgundy",
      "flanders",
      "holland",
      "bavaria",
      "saxony"
    ],
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 190000,
    "developmentLevel": 6,
    "economyValue": 70,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1160,
        "y": 265
      },
      {
        "x": 1208,
        "y": 265
      },
      {
        "x": 1208,
        "y": 303
      },
      {
        "x": 1160,
        "y": 303
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "bavaria",
    "name": "Ducado de Baviera & Múnich",
    "capitalName": "Múnich",
    "owner": "hre",
    "theater": "Europe",
    "x": 1205,
    "y": 305,
    "radius": 24,
    "neighbors": [
      "rhineland",
      "saxony",
      "austria",
      "milan",
      "bohemia"
    ],
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 165000,
    "developmentLevel": 5,
    "economyValue": 65,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1181,
        "y": 286
      },
      {
        "x": 1229,
        "y": 286
      },
      {
        "x": 1229,
        "y": 324
      },
      {
        "x": 1181,
        "y": 324
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "saxony",
    "name": "Electorado de Sajonia",
    "capitalName": "Dresde",
    "owner": "hre",
    "theater": "Europe",
    "x": 1218,
    "y": 272,
    "radius": 22,
    "neighbors": [
      "holland",
      "rhineland",
      "bavaria",
      "prussia",
      "bohemia"
    ],
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 150000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1196,
        "y": 254
      },
      {
        "x": 1240,
        "y": 254
      },
      {
        "x": 1240,
        "y": 290
      },
      {
        "x": 1196,
        "y": 290
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "bohemia",
    "name": "Reino de Bohemia & Praga",
    "capitalName": "Praga",
    "owner": "hre",
    "theater": "Europe",
    "x": 1232,
    "y": 285,
    "radius": 22,
    "neighbors": [
      "saxony",
      "bavaria",
      "austria",
      "poland",
      "prussia"
    ],
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 170000,
    "developmentLevel": 6,
    "economyValue": 65,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1210,
        "y": 267
      },
      {
        "x": 1254,
        "y": 267
      },
      {
        "x": 1254,
        "y": 303
      },
      {
        "x": 1210,
        "y": 303
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "prussia",
    "name": "Brandeburgo & Prusia",
    "capitalName": "Berlín",
    "owner": "hre",
    "theater": "Europe",
    "x": 1238,
    "y": 252,
    "radius": 24,
    "neighbors": [
      "saxony",
      "bohemia",
      "denmark",
      "poland"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 195000,
    "developmentLevel": 6,
    "economyValue": 75,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1214,
        "y": 233
      },
      {
        "x": 1262,
        "y": 233
      },
      {
        "x": 1262,
        "y": 271
      },
      {
        "x": 1214,
        "y": 271
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "austria",
    "name": "Archiducado de Austria & Viena",
    "capitalName": "Viena",
    "owner": "hre",
    "theater": "Europe",
    "x": 1245,
    "y": 308,
    "radius": 26,
    "neighbors": [
      "bavaria",
      "bohemia",
      "poland",
      "hungary",
      "venice"
    ],
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 3,
    "population": 290000,
    "developmentLevel": 7,
    "economyValue": 85,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1219,
        "y": 287
      },
      {
        "x": 1271,
        "y": 287
      },
      {
        "x": 1271,
        "y": 329
      },
      {
        "x": 1219,
        "y": 329
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "hungary",
    "name": "Reino de Hungría & Danubio",
    "capitalName": "Buda / Pest",
    "owner": "hre",
    "theater": "Europe",
    "x": 1272,
    "y": 322,
    "radius": 24,
    "neighbors": [
      "austria",
      "poland",
      "balkans",
      "venice"
    ],
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 180000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1248,
        "y": 303
      },
      {
        "x": 1296,
        "y": 303
      },
      {
        "x": 1296,
        "y": 341
      },
      {
        "x": 1248,
        "y": 341
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "denmark",
    "name": "Reino de Dinamarca & Selandia",
    "capitalName": "Copenhague",
    "owner": "sweden",
    "theater": "Europe",
    "x": 1215,
    "y": 225,
    "radius": 22,
    "neighbors": [
      "prussia",
      "norway",
      "sweden"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 115000,
    "developmentLevel": 5,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1193,
        "y": 207
      },
      {
        "x": 1237,
        "y": 207
      },
      {
        "x": 1237,
        "y": 243
      },
      {
        "x": 1193,
        "y": 243
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "norway",
    "name": "Reino de Noruega & Fiordos",
    "capitalName": "Cristianía / Oslo",
    "owner": "sweden",
    "theater": "Europe",
    "x": 1199,
    "y": 170,
    "radius": 24,
    "neighbors": [
      "scotland",
      "denmark",
      "sweden"
    ],
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 75000,
    "developmentLevel": 4,
    "economyValue": 35,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1175,
        "y": 151
      },
      {
        "x": 1223,
        "y": 151
      },
      {
        "x": 1223,
        "y": 189
      },
      {
        "x": 1175,
        "y": 189
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "sweden",
    "name": "Imperio Sueco & Báltico",
    "capitalName": "Estocolmo",
    "owner": "sweden",
    "theater": "Europe",
    "x": 1247,
    "y": 178,
    "radius": 28,
    "neighbors": [
      "norway",
      "denmark",
      "poland",
      "lithuania",
      "novgorod"
    ],
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 3,
    "population": 160000,
    "developmentLevel": 6,
    "economyValue": 70,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1219,
        "y": 156
      },
      {
        "x": 1275,
        "y": 156
      },
      {
        "x": 1275,
        "y": 200
      },
      {
        "x": 1219,
        "y": 200
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "poland",
    "name": "Mancomunidad de Polonia & Cracovia",
    "capitalName": "Varsovia / Cracovia",
    "owner": "poland",
    "theater": "Europe",
    "x": 1266,
    "y": 262,
    "radius": 28,
    "neighbors": [
      "prussia",
      "bohemia",
      "austria",
      "hungary",
      "lithuania",
      "kyiv",
      "sweden"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 310000,
    "developmentLevel": 6,
    "economyValue": 80,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1238,
        "y": 240
      },
      {
        "x": 1294,
        "y": 240
      },
      {
        "x": 1294,
        "y": 284
      },
      {
        "x": 1238,
        "y": 284
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "lithuania",
    "name": "Gran Ducado de Lituania & Vilna",
    "capitalName": "Vilna",
    "owner": "poland",
    "theater": "Europe",
    "x": 1294,
    "y": 235,
    "radius": 26,
    "neighbors": [
      "sweden",
      "poland",
      "kyiv",
      "moscow",
      "novgorod"
    ],
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 190000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1268,
        "y": 214
      },
      {
        "x": 1320,
        "y": 214
      },
      {
        "x": 1320,
        "y": 256
      },
      {
        "x": 1268,
        "y": 256
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "milan",
    "name": "Ducado de Milán & Lombardía",
    "capitalName": "Milán",
    "owner": "spain",
    "theater": "Europe",
    "x": 1188,
    "y": 329,
    "radius": 22,
    "neighbors": [
      "aragon",
      "burgundy",
      "provence",
      "bavaria",
      "venice",
      "rome"
    ],
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 220000,
    "developmentLevel": 7,
    "economyValue": 85,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1166,
        "y": 311
      },
      {
        "x": 1210,
        "y": 311
      },
      {
        "x": 1210,
        "y": 347
      },
      {
        "x": 1166,
        "y": 347
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "venice",
    "name": "Serenísima República de Venecia",
    "capitalName": "Venecia",
    "owner": "hre",
    "theater": "Europe",
    "x": 1205,
    "y": 332,
    "radius": 22,
    "neighbors": [
      "austria",
      "hungary",
      "milan",
      "rome",
      "greece"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 200000,
    "developmentLevel": 7,
    "economyValue": 90,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1183,
        "y": 314
      },
      {
        "x": 1227,
        "y": 314
      },
      {
        "x": 1227,
        "y": 350
      },
      {
        "x": 1183,
        "y": 350
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "rome",
    "name": "Estados Pontificios & Roma",
    "capitalName": "Roma",
    "owner": "spain",
    "theater": "Europe",
    "x": 1210,
    "y": 362,
    "radius": 24,
    "neighbors": [
      "milan",
      "venice",
      "naples"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 210000,
    "developmentLevel": 7,
    "economyValue": 80,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1186,
        "y": 343
      },
      {
        "x": 1234,
        "y": 343
      },
      {
        "x": 1234,
        "y": 381
      },
      {
        "x": 1186,
        "y": 381
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "naples",
    "name": "Reino de Nápoles & Dos Sicilias",
    "capitalName": "Nápoles",
    "owner": "spain",
    "theater": "Europe",
    "x": 1221,
    "y": 371,
    "radius": 24,
    "neighbors": [
      "aragon",
      "rome",
      "sicily",
      "greece"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 250000,
    "developmentLevel": 6,
    "economyValue": 75,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1197,
        "y": 352
      },
      {
        "x": 1245,
        "y": 352
      },
      {
        "x": 1245,
        "y": 390
      },
      {
        "x": 1197,
        "y": 390
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "sicily",
    "name": "Reino de Sicilia & Palermo",
    "capitalName": "Palermo",
    "owner": "spain",
    "theater": "Europe",
    "x": 1215,
    "y": 395,
    "radius": 22,
    "neighbors": [
      "naples",
      "tripoli",
      "greece"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 145000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1193,
        "y": 377
      },
      {
        "x": 1237,
        "y": 377
      },
      {
        "x": 1237,
        "y": 413
      },
      {
        "x": 1193,
        "y": 413
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "balkans",
    "name": "Valaquia & Balcanes",
    "capitalName": "Belgrado / Sofía",
    "owner": "ottoman",
    "theater": "Europe",
    "x": 1285,
    "y": 348,
    "radius": 26,
    "neighbors": [
      "hungary",
      "greece",
      "constantinople",
      "crimea"
    ],
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 160000,
    "developmentLevel": 5,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1259,
        "y": 327
      },
      {
        "x": 1311,
        "y": 327
      },
      {
        "x": 1311,
        "y": 369
      },
      {
        "x": 1259,
        "y": 369
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "greece",
    "name": "Morea & Archipiélago Helénico",
    "capitalName": "Atenas",
    "owner": "ottoman",
    "theater": "Europe",
    "x": 1280,
    "y": 390,
    "radius": 24,
    "neighbors": [
      "venice",
      "naples",
      "sicily",
      "balkans",
      "constantinople"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 130000,
    "developmentLevel": 5,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1256,
        "y": 371
      },
      {
        "x": 1304,
        "y": 371
      },
      {
        "x": 1304,
        "y": 409
      },
      {
        "x": 1256,
        "y": 409
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "novgorod",
    "name": "República de Nóvgorod & Ladoga",
    "capitalName": "Nóvgorod",
    "owner": "russia",
    "theater": "Eurasia",
    "x": 1345,
    "y": 185,
    "radius": 26,
    "neighbors": [
      "sweden",
      "lithuania",
      "moscow"
    ],
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 120000,
    "developmentLevel": 5,
    "economyValue": 50,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1319,
        "y": 164
      },
      {
        "x": 1371,
        "y": 164
      },
      {
        "x": 1371,
        "y": 206
      },
      {
        "x": 1319,
        "y": 206
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "moscow",
    "name": "Zarato de Rusia & Moscovia",
    "capitalName": "Moscú",
    "owner": "russia",
    "theater": "Eurasia",
    "x": 1375,
    "y": 222,
    "radius": 30,
    "neighbors": [
      "novgorod",
      "lithuania",
      "kyiv",
      "kazan",
      "steppes"
    ],
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 3,
    "population": 340000,
    "developmentLevel": 7,
    "economyValue": 85,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1345,
        "y": 198
      },
      {
        "x": 1405,
        "y": 198
      },
      {
        "x": 1405,
        "y": 246
      },
      {
        "x": 1345,
        "y": 246
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "kyiv",
    "name": "Tierras Rutenas & Kiev",
    "capitalName": "Kiev",
    "owner": "poland",
    "theater": "Eurasia",
    "x": 1320,
    "y": 280,
    "radius": 26,
    "neighbors": [
      "poland",
      "lithuania",
      "moscow",
      "crimea",
      "steppes"
    ],
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 175000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1294,
        "y": 259
      },
      {
        "x": 1346,
        "y": 259
      },
      {
        "x": 1346,
        "y": 301
      },
      {
        "x": 1294,
        "y": 301
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "crimea",
    "name": "Kanato de Crimea & Mar Negro",
    "capitalName": "Bajtchisarái / Sebastopol",
    "owner": "ottoman",
    "theater": "Eurasia",
    "x": 1348,
    "y": 332,
    "radius": 24,
    "neighbors": [
      "balkans",
      "kyiv",
      "steppes",
      "constantinople"
    ],
    "terrain": "steppe",
    "hasPort": true,
    "cityLevel": 2,
    "population": 115000,
    "developmentLevel": 4,
    "economyValue": 48,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1324,
        "y": 313
      },
      {
        "x": 1372,
        "y": 313
      },
      {
        "x": 1372,
        "y": 351
      },
      {
        "x": 1324,
        "y": 351
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "kazan",
    "name": "Kanato de Kazán & Río Volga",
    "capitalName": "Kazán",
    "owner": "russia",
    "theater": "Eurasia",
    "x": 1452,
    "y": 222,
    "radius": 28,
    "neighbors": [
      "moscow",
      "steppes",
      "siberia"
    ],
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 150000,
    "developmentLevel": 4,
    "economyValue": 50,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1424,
        "y": 200
      },
      {
        "x": 1480,
        "y": 200
      },
      {
        "x": 1480,
        "y": 244
      },
      {
        "x": 1424,
        "y": 244
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "steppes",
    "name": "Estepas Pontocaspianas del Don",
    "capitalName": "Campamento Tártaro Nogai",
    "owner": "neutral",
    "theater": "Eurasia",
    "x": 1430,
    "y": 295,
    "radius": 32,
    "neighbors": [
      "moscow",
      "kyiv",
      "crimea",
      "kazan",
      "siberia",
      "isfahan"
    ],
    "terrain": "steppe",
    "hasPort": true,
    "cityLevel": 1,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 25,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "polygon": [
      {
        "x": 1398,
        "y": 269
      },
      {
        "x": 1462,
        "y": 269
      },
      {
        "x": 1462,
        "y": 321
      },
      {
        "x": 1398,
        "y": 321
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ]
  },
  {
    "id": "siberia",
    "name": "Siberia Occidental & Tobolsk",
    "capitalName": "Tobolsk",
    "owner": "neutral",
    "theater": "Eurasia",
    "x": 1578,
    "y": 192,
    "radius": 36,
    "neighbors": [
      "kazan",
      "steppes",
      "beijing"
    ],
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 20,
    "infrastructureLevel": 1,
    "defenseLevel": 0,
    "isColonizable": true,
    "polygon": [
      {
        "x": 1542,
        "y": 163
      },
      {
        "x": 1614,
        "y": 163
      },
      {
        "x": 1614,
        "y": 221
      },
      {
        "x": 1542,
        "y": 221
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ]
  },
  {
    "id": "constantinople",
    "name": "Sublime Puerta & Anatolia",
    "capitalName": "Constantinopla / Estambul",
    "owner": "ottoman",
    "theater": "Middle East",
    "x": 1338,
    "y": 365,
    "radius": 30,
    "neighbors": [
      "balkans",
      "greece",
      "crimea",
      "syria",
      "egypt"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 450000,
    "developmentLevel": 8,
    "economyValue": 115,
    "infrastructureLevel": 4,
    "defenseLevel": 4,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1308,
        "y": 341
      },
      {
        "x": 1368,
        "y": 341
      },
      {
        "x": 1368,
        "y": 389
      },
      {
        "x": 1308,
        "y": 389
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "syria",
    "name": "Siria & Levante",
    "capitalName": "Damasco",
    "owner": "ottoman",
    "theater": "Middle East",
    "x": 1367,
    "y": 432,
    "radius": 24,
    "neighbors": [
      "constantinople",
      "mesopotamia",
      "egypt",
      "mecca"
    ],
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 2,
    "population": 180000,
    "developmentLevel": 6,
    "economyValue": 65,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1343,
        "y": 413
      },
      {
        "x": 1391,
        "y": 413
      },
      {
        "x": 1391,
        "y": 451
      },
      {
        "x": 1343,
        "y": 451
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "mesopotamia",
    "name": "Mesopotamia & Río Tigris",
    "capitalName": "Bagdad",
    "owner": "ottoman",
    "theater": "Middle East",
    "x": 1420,
    "y": 433,
    "radius": 26,
    "neighbors": [
      "syria",
      "isfahan",
      "mecca"
    ],
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 195000,
    "developmentLevel": 6,
    "economyValue": 70,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1394,
        "y": 412
      },
      {
        "x": 1446,
        "y": 412
      },
      {
        "x": 1446,
        "y": 454
      },
      {
        "x": 1394,
        "y": 454
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "isfahan",
    "name": "Imperio Safávida & Persia",
    "capitalName": "Isfahán",
    "owner": "safavid",
    "theater": "Middle East",
    "x": 1468,
    "y": 439,
    "radius": 28,
    "neighbors": [
      "steppes",
      "mesopotamia",
      "delhi"
    ],
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 270000,
    "developmentLevel": 7,
    "economyValue": 85,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1440,
        "y": 417
      },
      {
        "x": 1496,
        "y": 417
      },
      {
        "x": 1496,
        "y": 461
      },
      {
        "x": 1440,
        "y": 461
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "mecca",
    "name": "Península Arábiga & Hedjaz",
    "capitalName": "La Meca",
    "owner": "ottoman",
    "theater": "Middle East",
    "x": 1390,
    "y": 522,
    "radius": 26,
    "neighbors": [
      "syria",
      "mesopotamia",
      "egypt",
      "gondar"
    ],
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 2,
    "population": 90000,
    "developmentLevel": 4,
    "economyValue": 45,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1364,
        "y": 501
      },
      {
        "x": 1416,
        "y": 501
      },
      {
        "x": 1416,
        "y": 543
      },
      {
        "x": 1364,
        "y": 543
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "egypt",
    "name": "Bajo Egipto & Río Nilo",
    "capitalName": "El Cairo",
    "owner": "ottoman",
    "theater": "Middle East",
    "x": 1333,
    "y": 460,
    "radius": 28,
    "neighbors": [
      "constantinople",
      "syria",
      "mecca",
      "tripoli",
      "nubia"
    ],
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 3,
    "population": 310000,
    "developmentLevel": 7,
    "economyValue": 90,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1305,
        "y": 438
      },
      {
        "x": 1361,
        "y": 438
      },
      {
        "x": 1361,
        "y": 482
      },
      {
        "x": 1305,
        "y": 482
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "tripoli",
    "name": "Regencia de Trípoli & Cirenaica",
    "capitalName": "Trípoli",
    "owner": "ottoman",
    "theater": "Africa",
    "x": 1250,
    "y": 445,
    "radius": 26,
    "neighbors": [
      "sicily",
      "egypt",
      "algiers"
    ],
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 2,
    "population": 80000,
    "developmentLevel": 4,
    "economyValue": 40,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1224,
        "y": 424
      },
      {
        "x": 1276,
        "y": 424
      },
      {
        "x": 1276,
        "y": 466
      },
      {
        "x": 1224,
        "y": 466
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "algiers",
    "name": "Regencia de Argel & Berbería",
    "capitalName": "Argel",
    "owner": "ottoman",
    "theater": "Africa",
    "x": 1162,
    "y": 420,
    "radius": 26,
    "neighbors": [
      "tripoli",
      "fes",
      "timbuktu"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 110000,
    "developmentLevel": 5,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1136,
        "y": 399
      },
      {
        "x": 1188,
        "y": 399
      },
      {
        "x": 1188,
        "y": 441
      },
      {
        "x": 1136,
        "y": 441
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "fes",
    "name": "Sultanato de Marruecos & Fez",
    "capitalName": "Fez / Marrakech",
    "owner": "morocco",
    "theater": "Africa",
    "x": 1095,
    "y": 427,
    "radius": 26,
    "neighbors": [
      "andalucia",
      "algiers",
      "timbuktu"
    ],
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 135000,
    "developmentLevel": 5,
    "economyValue": 50,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1069,
        "y": 406
      },
      {
        "x": 1121,
        "y": 406
      },
      {
        "x": 1121,
        "y": 448
      },
      {
        "x": 1069,
        "y": 448
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "timbuktu",
    "name": "Imperio Songhai & Tombuctú",
    "capitalName": "Tombuctú / Gao",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1108,
    "y": 562,
    "radius": 28,
    "neighbors": [
      "fes",
      "algiers",
      "guinea",
      "congo"
    ],
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 70000,
    "developmentLevel": 3,
    "economyValue": 45,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "polygon": [
      {
        "x": 1080,
        "y": 540
      },
      {
        "x": 1136,
        "y": 540
      },
      {
        "x": 1136,
        "y": 584
      },
      {
        "x": 1080,
        "y": 584
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "guinea",
    "name": "Golfo de Guinea & Costa de Oro",
    "capitalName": "Benín / Costa de Guinea",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1145,
    "y": 615,
    "radius": 28,
    "neighbors": [
      "timbuktu",
      "congo"
    ],
    "terrain": "jungle",
    "hasPort": true,
    "cityLevel": 1,
    "population": 60000,
    "developmentLevel": 2,
    "economyValue": 35,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "polygon": [
      {
        "x": 1117,
        "y": 593
      },
      {
        "x": 1173,
        "y": 593
      },
      {
        "x": 1173,
        "y": 637
      },
      {
        "x": 1117,
        "y": 637
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ]
  },
  {
    "id": "congo",
    "name": "Reino del Congo & Cuenca",
    "capitalName": "Mbanza Kongo / Kinshasa",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1228,
    "y": 714,
    "radius": 32,
    "neighbors": [
      "timbuktu",
      "guinea",
      "cape_town",
      "zanzibar"
    ],
    "terrain": "jungle",
    "hasPort": true,
    "cityLevel": 1,
    "population": 50000,
    "developmentLevel": 2,
    "economyValue": 30,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "polygon": [
      {
        "x": 1196,
        "y": 688
      },
      {
        "x": 1260,
        "y": 688
      },
      {
        "x": 1260,
        "y": 740
      },
      {
        "x": 1196,
        "y": 740
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ]
  },
  {
    "id": "nubia",
    "name": "Reinos de Nubia & Sennar",
    "capitalName": "Khartoum / Dongola",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1342,
    "y": 572,
    "radius": 26,
    "neighbors": [
      "egypt",
      "gondar",
      "zanzibar"
    ],
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 1,
    "population": 40000,
    "developmentLevel": 2,
    "economyValue": 25,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "polygon": [
      {
        "x": 1316,
        "y": 551
      },
      {
        "x": 1368,
        "y": 551
      },
      {
        "x": 1368,
        "y": 593
      },
      {
        "x": 1316,
        "y": 593
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ]
  },
  {
    "id": "gondar",
    "name": "Imperio Etíope & Gondar",
    "capitalName": "Gondar",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1374,
    "y": 593,
    "radius": 26,
    "neighbors": [
      "mecca",
      "nubia",
      "zanzibar"
    ],
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 75000,
    "developmentLevel": 3,
    "economyValue": 35,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": true,
    "polygon": [
      {
        "x": 1348,
        "y": 572
      },
      {
        "x": 1400,
        "y": 572
      },
      {
        "x": 1400,
        "y": 614
      },
      {
        "x": 1348,
        "y": 614
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "zanzibar",
    "name": "Costa Suajili & Zanzíbar",
    "capitalName": "Zanzíbar / Kilwa",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1386,
    "y": 727,
    "radius": 28,
    "neighbors": [
      "congo",
      "nubia",
      "gondar",
      "cape_town",
      "vijayanagara"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 55000,
    "developmentLevel": 3,
    "economyValue": 40,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": true,
    "polygon": [
      {
        "x": 1358,
        "y": 705
      },
      {
        "x": 1414,
        "y": 705
      },
      {
        "x": 1414,
        "y": 749
      },
      {
        "x": 1358,
        "y": 749
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "cape_town",
    "name": "Cabo de Buena Esperanza",
    "capitalName": "Cabo de Buena Esperanza",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1249,
    "y": 939,
    "radius": 28,
    "neighbors": [
      "congo",
      "zanzibar"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 1,
    "population": 15000,
    "developmentLevel": 1,
    "economyValue": 20,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "polygon": [
      {
        "x": 1221,
        "y": 917
      },
      {
        "x": 1277,
        "y": 917
      },
      {
        "x": 1277,
        "y": 961
      },
      {
        "x": 1221,
        "y": 961
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ]
  },
  {
    "id": "delhi",
    "name": "Imperio Mogol & Delhi",
    "capitalName": "Delhi / Agra",
    "owner": "mughal",
    "theater": "Asia",
    "x": 1636,
    "y": 469,
    "radius": 30,
    "neighbors": [
      "isfahan",
      "bengal",
      "vijayanagara"
    ],
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 390000,
    "developmentLevel": 7,
    "economyValue": 100,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1606,
        "y": 445
      },
      {
        "x": 1666,
        "y": 445
      },
      {
        "x": 1666,
        "y": 493
      },
      {
        "x": 1606,
        "y": 493
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "bengal",
    "name": "Subah de Bengala & Calcuta",
    "capitalName": "Calcuta / Dhaka",
    "owner": "mughal",
    "theater": "Asia",
    "x": 1710,
    "y": 514,
    "radius": 26,
    "neighbors": [
      "delhi",
      "vijayanagara",
      "siam"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 310000,
    "developmentLevel": 7,
    "economyValue": 95,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1684,
        "y": 493
      },
      {
        "x": 1736,
        "y": 493
      },
      {
        "x": 1736,
        "y": 535
      },
      {
        "x": 1684,
        "y": 535
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "vijayanagara",
    "name": "Imperio de Vijayanagara",
    "capitalName": "Hampi / Costa Malabar",
    "owner": "neutral",
    "theater": "Asia",
    "x": 1655,
    "y": 560,
    "radius": 28,
    "neighbors": [
      "zanzibar",
      "delhi",
      "bengal",
      "malacca"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 220000,
    "developmentLevel": 6,
    "economyValue": 75,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": true,
    "polygon": [
      {
        "x": 1627,
        "y": 538
      },
      {
        "x": 1683,
        "y": 538
      },
      {
        "x": 1683,
        "y": 582
      },
      {
        "x": 1627,
        "y": 582
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "beijing",
    "name": "Imperio Ming/Qing & Pekín",
    "capitalName": "Pekín",
    "owner": "china",
    "theater": "Asia",
    "x": 1894,
    "y": 379,
    "radius": 32,
    "neighbors": [
      "siberia",
      "manchuria",
      "korea",
      "chengdu",
      "guangzhou"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 480000,
    "developmentLevel": 8,
    "economyValue": 120,
    "infrastructureLevel": 4,
    "defenseLevel": 4,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1862,
        "y": 353
      },
      {
        "x": 1926,
        "y": 353
      },
      {
        "x": 1926,
        "y": 405
      },
      {
        "x": 1862,
        "y": 405
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "chengdu",
    "name": "Cuenca de Sichuan & Chengdu",
    "capitalName": "Chengdu",
    "owner": "china",
    "theater": "Asia",
    "x": 1813,
    "y": 455,
    "radius": 28,
    "neighbors": [
      "beijing",
      "guangzhou",
      "siam"
    ],
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 290000,
    "developmentLevel": 6,
    "economyValue": 80,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1785,
        "y": 433
      },
      {
        "x": 1841,
        "y": 433
      },
      {
        "x": 1841,
        "y": 477
      },
      {
        "x": 1785,
        "y": 477
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "guangzhou",
    "name": "Cantón & Delta del Río Perla",
    "capitalName": "Guangzhou / Cantón",
    "owner": "china",
    "theater": "Asia",
    "x": 1874,
    "y": 509,
    "radius": 28,
    "neighbors": [
      "beijing",
      "chengdu",
      "siam",
      "philippines"
    ],
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 360000,
    "developmentLevel": 7,
    "economyValue": 105,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1846,
        "y": 487
      },
      {
        "x": 1902,
        "y": 487
      },
      {
        "x": 1902,
        "y": 531
      },
      {
        "x": 1846,
        "y": 531
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "manchuria",
    "name": "Tierras Jurchen & Manchuria",
    "capitalName": "Shenyang",
    "owner": "neutral",
    "theater": "Asia",
    "x": 1940,
    "y": 363,
    "radius": 26,
    "neighbors": [
      "beijing",
      "korea"
    ],
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 85000,
    "developmentLevel": 3,
    "economyValue": 40,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": true,
    "polygon": [
      {
        "x": 1914,
        "y": 342
      },
      {
        "x": 1966,
        "y": 342
      },
      {
        "x": 1966,
        "y": 384
      },
      {
        "x": 1914,
        "y": 384
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "korea",
    "name": "Reino de Joseon & Hanseong",
    "capitalName": "Hanseong / Seúl",
    "owner": "neutral",
    "theater": "Asia",
    "x": 1964,
    "y": 399,
    "radius": 24,
    "neighbors": [
      "beijing",
      "manchuria",
      "kyoto"
    ],
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 160000,
    "developmentLevel": 6,
    "economyValue": 65,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1940,
        "y": 380
      },
      {
        "x": 1988,
        "y": 380
      },
      {
        "x": 1988,
        "y": 418
      },
      {
        "x": 1940,
        "y": 418
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "kyoto",
    "name": "Shogunato Ashikaga/Tokugawa",
    "capitalName": "Kioto / Edo",
    "owner": "japan",
    "theater": "Asia",
    "x": 2022,
    "y": 420,
    "radius": 28,
    "neighbors": [
      "korea",
      "kyushu"
    ],
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 310000,
    "developmentLevel": 7,
    "economyValue": 90,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1994,
        "y": 398
      },
      {
        "x": 2050,
        "y": 398
      },
      {
        "x": 2050,
        "y": 442
      },
      {
        "x": 1994,
        "y": 442
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ]
  },
  {
    "id": "kyushu",
    "name": "Feudo de Satsuma & Kyushu",
    "capitalName": "Fukuoka / Nagasaki",
    "owner": "japan",
    "theater": "Asia",
    "x": 1990,
    "y": 445,
    "radius": 22,
    "neighbors": [
      "kyoto",
      "philippines"
    ],
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 120000,
    "developmentLevel": 5,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1968,
        "y": 427
      },
      {
        "x": 2012,
        "y": 427
      },
      {
        "x": 2012,
        "y": 463
      },
      {
        "x": 1968,
        "y": 463
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "siam",
    "name": "Reino de Ayutthaya & Siam",
    "capitalName": "Ayutthaya / Bangkok",
    "owner": "neutral",
    "theater": "Asia",
    "x": 1789,
    "y": 576,
    "radius": 26,
    "neighbors": [
      "bengal",
      "chengdu",
      "guangzhou",
      "malacca"
    ],
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 140000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": true,
    "polygon": [
      {
        "x": 1763,
        "y": 555
      },
      {
        "x": 1815,
        "y": 555
      },
      {
        "x": 1815,
        "y": 597
      },
      {
        "x": 1763,
        "y": 597
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "malacca",
    "name": "Estrecho de Malaca & Singapur",
    "capitalName": "Malaca",
    "owner": "portugal",
    "theater": "Asia",
    "x": 1801,
    "y": 660,
    "radius": 24,
    "neighbors": [
      "vijayanagara",
      "siam",
      "java",
      "philippines"
    ],
    "terrain": "jungle",
    "hasPort": true,
    "cityLevel": 2,
    "population": 95000,
    "developmentLevel": 5,
    "economyValue": 70,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1777,
        "y": 641
      },
      {
        "x": 1825,
        "y": 641
      },
      {
        "x": 1825,
        "y": 679
      },
      {
        "x": 1777,
        "y": 679
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "philippines",
    "name": "Capitanía de Filipinas & Manila",
    "capitalName": "Manila",
    "owner": "spain",
    "theater": "Asia",
    "x": 1924,
    "y": 569,
    "radius": 26,
    "neighbors": [
      "guangzhou",
      "kyushu",
      "malacca",
      "java"
    ],
    "terrain": "islands",
    "hasPort": true,
    "cityLevel": 2,
    "population": 80000,
    "developmentLevel": 4,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "polygon": [
      {
        "x": 1898,
        "y": 548
      },
      {
        "x": 1950,
        "y": 548
      },
      {
        "x": 1950,
        "y": 590
      },
      {
        "x": 1898,
        "y": 590
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  },
  {
    "id": "java",
    "name": "Sultanato de Mataram & Batavia",
    "capitalName": "Batavia / Demak",
    "owner": "neutral",
    "theater": "Asia",
    "x": 1831,
    "y": 722,
    "radius": 26,
    "neighbors": [
      "malacca",
      "philippines"
    ],
    "terrain": "jungle",
    "hasPort": true,
    "cityLevel": 2,
    "population": 110000,
    "developmentLevel": 4,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": true,
    "polygon": [
      {
        "x": 1805,
        "y": 701
      },
      {
        "x": 1857,
        "y": 701
      },
      {
        "x": 1857,
        "y": 743
      },
      {
        "x": 1805,
        "y": 743
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ]
  }
];

if (typeof window !== 'undefined') {
  window.WORLD_PROVINCES = WORLD_PROVINCES;
}
if (typeof globalThis !== 'undefined') {
  globalThis.WORLD_PROVINCES = WORLD_PROVINCES;
}
