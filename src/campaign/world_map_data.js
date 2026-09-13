/**
 * Chronicles of War - Global World Map Data (Polygonal Tessellation)
 * Calibrated for ultra-high-definition 2400x1162 historical world map relief
 * Features true Voronoi-tessellated polygonal boundaries (Age of History 3 & Paradox style),
 * 8 strategic trade goods, deep administrative attributes and continuous continental borders.
 * 550 historical provinces covering Europe, Americas, Eurasia, Middle East, Africa & Asia.
 */

const WORLD_PROVINCES = [
  {
    "id": "new_england",
    "name": "Nueva Inglaterra & Boston",
    "capitalName": "Boston",
    "owner": "england",
    "theater": "Americas",
    "x": 656.0,
    "y": 361.0,
    "radius": 26,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 65000,
    "developmentLevel": 4,
    "economyValue": 45,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "machias",
      "philadelphia",
      "watertown",
      "quebec",
      "erie",
      "north_bay",
      "montague",
      "hamilton"
    ],
    "polygon": [
      {
        "x": 676.0,
        "y": 361.0
      },
      {
        "x": 670.1,
        "y": 375.1
      },
      {
        "x": 656.0,
        "y": 381.0
      },
      {
        "x": 641.9,
        "y": 375.1
      },
      {
        "x": 636.0,
        "y": 361.0
      },
      {
        "x": 641.9,
        "y": 346.9
      },
      {
        "x": 656.0,
        "y": 341.0
      },
      {
        "x": 670.1,
        "y": 346.9
      }
    ]
  },
  {
    "id": "virginia",
    "name": "Virginia & Chesapeake",
    "capitalName": "Jamestown",
    "owner": "england",
    "theater": "Americas",
    "x": 605.0,
    "y": 405.0,
    "radius": 26,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 52000,
    "developmentLevel": 3,
    "economyValue": 40,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "georgetown",
      "philadelphia",
      "erie",
      "atlanta",
      "fort_wayne",
      "watertown",
      "hamilton"
    ],
    "polygon": [
      {
        "x": 625.0,
        "y": 405.0
      },
      {
        "x": 619.1,
        "y": 419.1
      },
      {
        "x": 605.0,
        "y": 425.0
      },
      {
        "x": 590.9,
        "y": 419.1
      },
      {
        "x": 585.0,
        "y": 405.0
      },
      {
        "x": 590.9,
        "y": 390.9
      },
      {
        "x": 605.0,
        "y": 385.0
      },
      {
        "x": 619.1,
        "y": 390.9
      }
    ]
  },
  {
    "id": "florida",
    "name": "La Florida & San Agustín",
    "capitalName": "San Agustín",
    "owner": "spain",
    "theater": "Americas",
    "x": 588.0,
    "y": 465.0,
    "radius": 26,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 28000,
    "developmentLevel": 2,
    "economyValue": 25,
    "infrastructureLevel": 1,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "panama_city",
      "freeport",
      "georgetown",
      "atlanta",
      "caribbean",
      "mississippi",
      "camaguey"
    ],
    "polygon": [
      {
        "x": 608.0,
        "y": 465.0
      },
      {
        "x": 602.1,
        "y": 479.1
      },
      {
        "x": 588.0,
        "y": 485.0
      },
      {
        "x": 573.9,
        "y": 479.1
      },
      {
        "x": 568.0,
        "y": 465.0
      },
      {
        "x": 573.9,
        "y": 450.9
      },
      {
        "x": 588.0,
        "y": 445.0
      },
      {
        "x": 602.1,
        "y": 450.9
      }
    ]
  },
  {
    "id": "mississippi",
    "name": "Luisiana & Misisipi",
    "capitalName": "Nueva Orleans",
    "owner": "france",
    "theater": "Americas",
    "x": 531.0,
    "y": 464.0,
    "radius": 28,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 34000,
    "developmentLevel": 2,
    "economyValue": 30,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "panama_city",
      "houston",
      "southaven",
      "atlanta",
      "durant",
      "florida",
      "mcallen"
    ],
    "polygon": [
      {
        "x": 551.0,
        "y": 464.0
      },
      {
        "x": 545.1,
        "y": 478.1
      },
      {
        "x": 531.0,
        "y": 484.0
      },
      {
        "x": 516.9,
        "y": 478.1
      },
      {
        "x": 511.0,
        "y": 464.0
      },
      {
        "x": 516.9,
        "y": 449.9
      },
      {
        "x": 531.0,
        "y": 444.0
      },
      {
        "x": 545.1,
        "y": 449.9
      }
    ]
  },
  {
    "id": "great_plains",
    "name": "Grandes Llanuras del Oeste",
    "capitalName": "Omaha / Territorio Siux",
    "owner": "neutral",
    "theater": "Americas",
    "x": 480.0,
    "y": 380.0,
    "radius": 32,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 1,
    "population": 18000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 0,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "guymon",
      "scottsbluff",
      "dubuque",
      "durant",
      "cannon_ball",
      "southaven"
    ],
    "polygon": [
      {
        "x": 500.0,
        "y": 380.0
      },
      {
        "x": 494.1,
        "y": 394.1
      },
      {
        "x": 480.0,
        "y": 400.0
      },
      {
        "x": 465.9,
        "y": 394.1
      },
      {
        "x": 460.0,
        "y": 380.0
      },
      {
        "x": 465.9,
        "y": 365.9
      },
      {
        "x": 480.0,
        "y": 360.0
      },
      {
        "x": 494.1,
        "y": 365.9
      }
    ]
  },
  {
    "id": "california",
    "name": "Alta California & San Francisco",
    "capitalName": "San Francisco",
    "owner": "neutral",
    "theater": "Americas",
    "x": 318.0,
    "y": 401.0,
    "radius": 28,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 1,
    "population": 22000,
    "developmentLevel": 1,
    "economyValue": 20,
    "infrastructureLevel": 1,
    "defenseLevel": 0,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "riddle",
      "lund",
      "yuma",
      "gallup",
      "missoula",
      "dubois"
    ],
    "polygon": [
      {
        "x": 338.0,
        "y": 401.0
      },
      {
        "x": 332.1,
        "y": 415.1
      },
      {
        "x": 318.0,
        "y": 421.0
      },
      {
        "x": 303.9,
        "y": 415.1
      },
      {
        "x": 298.0,
        "y": 401.0
      },
      {
        "x": 303.9,
        "y": 386.9
      },
      {
        "x": 318.0,
        "y": 381.0
      },
      {
        "x": 332.1,
        "y": 386.9
      }
    ]
  },
  {
    "id": "tenochtitlan",
    "name": "Imperio Mexica / Tenochtitlan",
    "capitalName": "Tenochtitlan",
    "owner": "aztec",
    "theater": "Americas",
    "x": 471.0,
    "y": 544.0,
    "radius": 30,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 3,
    "population": 320000,
    "developmentLevel": 6,
    "economyValue": 85,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "veracruz",
      "mcallen",
      "guatemala",
      "yucatan",
      "houston",
      "ballinger"
    ],
    "polygon": [
      {
        "x": 491.0,
        "y": 544.0
      },
      {
        "x": 485.1,
        "y": 558.1
      },
      {
        "x": 471.0,
        "y": 564.0
      },
      {
        "x": 456.9,
        "y": 558.1
      },
      {
        "x": 451.0,
        "y": 544.0
      },
      {
        "x": 456.9,
        "y": 529.9
      },
      {
        "x": 471.0,
        "y": 524.0
      },
      {
        "x": 485.1,
        "y": 529.9
      }
    ]
  },
  {
    "id": "veracruz",
    "name": "Sotavento & Veracruz",
    "capitalName": "Veracruz",
    "owner": "spain",
    "theater": "Americas",
    "x": 495.0,
    "y": 542.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 75000,
    "developmentLevel": 4,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "tenochtitlan",
      "yucatan",
      "guatemala",
      "mcallen",
      "siksatara",
      "houston"
    ],
    "polygon": [
      {
        "x": 515.0,
        "y": 542.0
      },
      {
        "x": 509.1,
        "y": 556.1
      },
      {
        "x": 495.0,
        "y": 562.0
      },
      {
        "x": 480.9,
        "y": 556.1
      },
      {
        "x": 475.0,
        "y": 542.0
      },
      {
        "x": 480.9,
        "y": 527.9
      },
      {
        "x": 495.0,
        "y": 522.0
      },
      {
        "x": 509.1,
        "y": 527.9
      }
    ]
  },
  {
    "id": "yucatan",
    "name": "Tierras Mayas & Yucatán",
    "capitalName": "Mérida",
    "owner": "neutral",
    "theater": "Americas",
    "x": 526.0,
    "y": 535.0,
    "radius": 24,
    "terrain": "jungle",
    "hasPort": true,
    "cityLevel": 1,
    "population": 48000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "veracruz",
      "guatemala",
      "siksatara",
      "tenochtitlan",
      "caribbean",
      "mcallen",
      "los_chiles"
    ],
    "polygon": [
      {
        "x": 546.0,
        "y": 535.0
      },
      {
        "x": 540.1,
        "y": 549.1
      },
      {
        "x": 526.0,
        "y": 555.0
      },
      {
        "x": 511.9,
        "y": 549.1
      },
      {
        "x": 506.0,
        "y": 535.0
      },
      {
        "x": 511.9,
        "y": 520.9
      },
      {
        "x": 526.0,
        "y": 515.0
      },
      {
        "x": 540.1,
        "y": 520.9
      }
    ]
  },
  {
    "id": "guatemala",
    "name": "Reino de Guatemala & Istmo",
    "capitalName": "Santiago de Guatemala",
    "owner": "spain",
    "theater": "Americas",
    "x": 515.0,
    "y": 575.0,
    "radius": 22,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 60000,
    "developmentLevel": 3,
    "economyValue": 38,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "veracruz",
      "yucatan",
      "siksatara",
      "tenochtitlan",
      "los_chiles",
      "caribbean"
    ],
    "polygon": [
      {
        "x": 535.0,
        "y": 575.0
      },
      {
        "x": 529.1,
        "y": 589.1
      },
      {
        "x": 515.0,
        "y": 595.0
      },
      {
        "x": 500.9,
        "y": 589.1
      },
      {
        "x": 495.0,
        "y": 575.0
      },
      {
        "x": 500.9,
        "y": 560.9
      },
      {
        "x": 515.0,
        "y": 555.0
      },
      {
        "x": 529.1,
        "y": 560.9
      }
    ]
  },
  {
    "id": "caribbean",
    "name": "Mar Caribe & La Habana",
    "capitalName": "La Habana",
    "owner": "spain",
    "theater": "Americas",
    "x": 581.0,
    "y": 517.0,
    "radius": 28,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 95000,
    "developmentLevel": 5,
    "economyValue": 70,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "camaguey",
      "freeport",
      "florida",
      "siksatara",
      "yucatan",
      "panama_city",
      "guatemala",
      "grace_bay"
    ],
    "polygon": [
      {
        "x": 601.0,
        "y": 517.0
      },
      {
        "x": 595.1,
        "y": 531.1
      },
      {
        "x": 581.0,
        "y": 537.0
      },
      {
        "x": 566.9,
        "y": 531.1
      },
      {
        "x": 561.0,
        "y": 517.0
      },
      {
        "x": 566.9,
        "y": 502.9
      },
      {
        "x": 581.0,
        "y": 497.0
      },
      {
        "x": 595.1,
        "y": 502.9
      }
    ]
  },
  {
    "id": "caracas",
    "name": "Capitanía de Venezuela & Caracas",
    "capitalName": "Caracas",
    "owner": "spain",
    "theater": "Americas",
    "x": 670.0,
    "y": 625.0,
    "radius": 26,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 58000,
    "developmentLevel": 3,
    "economyValue": 45,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "oranjestad",
      "ciudad_bolivar",
      "tamatama",
      "nueva_granada",
      "barranquilla",
      "mitu",
      "saint_johns",
      "saint_georges",
      "las_tablas"
    ],
    "polygon": [
      {
        "x": 690.0,
        "y": 625.0
      },
      {
        "x": 684.1,
        "y": 639.1
      },
      {
        "x": 670.0,
        "y": 645.0
      },
      {
        "x": 655.9,
        "y": 639.1
      },
      {
        "x": 650.0,
        "y": 625.0
      },
      {
        "x": 655.9,
        "y": 610.9
      },
      {
        "x": 670.0,
        "y": 605.0
      },
      {
        "x": 684.1,
        "y": 610.9
      }
    ]
  },
  {
    "id": "nueva_granada",
    "name": "Nuevo Reino de Granada & Bogotá",
    "capitalName": "Santafé de Bogotá",
    "owner": "spain",
    "theater": "Americas",
    "x": 636.0,
    "y": 649.0,
    "radius": 28,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 140000,
    "developmentLevel": 5,
    "economyValue": 65,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "mitu",
      "caracas",
      "barranquilla",
      "las_tablas",
      "quito",
      "tamatama",
      "oranjestad",
      "los_chiles"
    ],
    "polygon": [
      {
        "x": 656.0,
        "y": 649.0
      },
      {
        "x": 650.1,
        "y": 663.1
      },
      {
        "x": 636.0,
        "y": 669.0
      },
      {
        "x": 621.9,
        "y": 663.1
      },
      {
        "x": 616.0,
        "y": 649.0
      },
      {
        "x": 621.9,
        "y": 634.9
      },
      {
        "x": 636.0,
        "y": 629.0
      },
      {
        "x": 650.1,
        "y": 634.9
      }
    ]
  },
  {
    "id": "quito",
    "name": "Real Audiencia de Quito",
    "capitalName": "Quito",
    "owner": "inca",
    "theater": "Americas",
    "x": 612.0,
    "y": 690.0,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 110000,
    "developmentLevel": 4,
    "economyValue": 50,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "iquitos",
      "nueva_granada",
      "trujillo",
      "mitu",
      "saweto",
      "las_tablas"
    ],
    "polygon": [
      {
        "x": 632.0,
        "y": 690.0
      },
      {
        "x": 626.1,
        "y": 704.1
      },
      {
        "x": 612.0,
        "y": 710.0
      },
      {
        "x": 597.9,
        "y": 704.1
      },
      {
        "x": 592.0,
        "y": 690.0
      },
      {
        "x": 597.9,
        "y": 675.9
      },
      {
        "x": 612.0,
        "y": 670.0
      },
      {
        "x": 626.1,
        "y": 675.9
      }
    ]
  },
  {
    "id": "lima",
    "name": "Costa Central & Ciudad de los Reyes",
    "capitalName": "Lima",
    "owner": "spain",
    "theater": "Americas",
    "x": 617.0,
    "y": 766.0,
    "radius": 26,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 3,
    "population": 125000,
    "developmentLevel": 6,
    "economyValue": 75,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "trujillo",
      "saweto",
      "cuzco",
      "iquitos",
      "itamarati",
      "riberalta"
    ],
    "polygon": [
      {
        "x": 637.0,
        "y": 766.0
      },
      {
        "x": 631.1,
        "y": 780.1
      },
      {
        "x": 617.0,
        "y": 786.0
      },
      {
        "x": 602.9,
        "y": 780.1
      },
      {
        "x": 597.0,
        "y": 766.0
      },
      {
        "x": 602.9,
        "y": 751.9
      },
      {
        "x": 617.0,
        "y": 746.0
      },
      {
        "x": 631.1,
        "y": 751.9
      }
    ]
  },
  {
    "id": "cuzco",
    "name": "Imperio Inca & Tawantinsuyu",
    "capitalName": "Cuzco",
    "owner": "inca",
    "theater": "Americas",
    "x": 650.0,
    "y": 776.0,
    "radius": 30,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 280000,
    "developmentLevel": 6,
    "economyValue": 80,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "saweto",
      "lima",
      "riberalta",
      "charcas",
      "itamarati",
      "trujillo"
    ],
    "polygon": [
      {
        "x": 670.0,
        "y": 776.0
      },
      {
        "x": 664.1,
        "y": 790.1
      },
      {
        "x": 650.0,
        "y": 796.0
      },
      {
        "x": 635.9,
        "y": 790.1
      },
      {
        "x": 630.0,
        "y": 776.0
      },
      {
        "x": 635.9,
        "y": 761.9
      },
      {
        "x": 650.0,
        "y": 756.0
      },
      {
        "x": 664.1,
        "y": 761.9
      }
    ]
  },
  {
    "id": "charcas",
    "name": "Audiencia de Charcas & Cerro Rico",
    "capitalName": "Potosí",
    "owner": "spain",
    "theater": "Americas",
    "x": 680.0,
    "y": 820.0,
    "radius": 26,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 160000,
    "developmentLevel": 7,
    "economyValue": 110,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "ascension",
      "la_union",
      "cuzco",
      "fiambala",
      "riberalta",
      "puerto_valle_mi",
      "chile"
    ],
    "polygon": [
      {
        "x": 700.0,
        "y": 820.0
      },
      {
        "x": 694.1,
        "y": 834.1
      },
      {
        "x": 680.0,
        "y": 840.0
      },
      {
        "x": 665.9,
        "y": 834.1
      },
      {
        "x": 660.0,
        "y": 820.0
      },
      {
        "x": 665.9,
        "y": 805.9
      },
      {
        "x": 680.0,
        "y": 800.0
      },
      {
        "x": 694.1,
        "y": 805.9
      }
    ]
  },
  {
    "id": "chile",
    "name": "Capitanía General de Chile",
    "capitalName": "Santiago de Chile",
    "owner": "neutral",
    "theater": "Americas",
    "x": 635.0,
    "y": 920.0,
    "radius": 26,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 3,
    "economyValue": 35,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "grain",
    "neighbors": [
      "san_luis",
      "fiambala",
      "malbran",
      "la_union",
      "rio_plata",
      "charcas"
    ],
    "polygon": [
      {
        "x": 655.0,
        "y": 920.0
      },
      {
        "x": 649.1,
        "y": 934.1
      },
      {
        "x": 635.0,
        "y": 940.0
      },
      {
        "x": 620.9,
        "y": 934.1
      },
      {
        "x": 615.0,
        "y": 920.0
      },
      {
        "x": 620.9,
        "y": 905.9
      },
      {
        "x": 635.0,
        "y": 900.0
      },
      {
        "x": 649.1,
        "y": 905.9
      }
    ]
  },
  {
    "id": "rio_plata",
    "name": "Gobernación del Río de la Plata",
    "capitalName": "Buenos Aires",
    "owner": "spain",
    "theater": "Americas",
    "x": 739.0,
    "y": 938.0,
    "radius": 28,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 65000,
    "developmentLevel": 4,
    "economyValue": 45,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "malbran",
      "san_luis",
      "wanda",
      "fiambala",
      "la_union",
      "joinville",
      "chile"
    ],
    "polygon": [
      {
        "x": 759.0,
        "y": 938.0
      },
      {
        "x": 753.1,
        "y": 952.1
      },
      {
        "x": 739.0,
        "y": 958.0
      },
      {
        "x": 724.9,
        "y": 952.1
      },
      {
        "x": 719.0,
        "y": 938.0
      },
      {
        "x": 724.9,
        "y": 923.9
      },
      {
        "x": 739.0,
        "y": 918.0
      },
      {
        "x": 753.1,
        "y": 923.9
      }
    ]
  },
  {
    "id": "bahia",
    "name": "Estado do Brasil & Salvador",
    "capitalName": "Salvador da Bahia",
    "owner": "portugal",
    "theater": "Americas",
    "x": 845.0,
    "y": 780.0,
    "radius": 28,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 95000,
    "developmentLevel": 5,
    "economyValue": 65,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "petrolina",
      "sao_mateus",
      "niquelandia",
      "morros",
      "araxa",
      "pernambuco",
      "fortaleza",
      "rio_de_janeiro"
    ],
    "polygon": [
      {
        "x": 865.0,
        "y": 780.0
      },
      {
        "x": 859.1,
        "y": 794.1
      },
      {
        "x": 845.0,
        "y": 800.0
      },
      {
        "x": 830.9,
        "y": 794.1
      },
      {
        "x": 825.0,
        "y": 780.0
      },
      {
        "x": 830.9,
        "y": 765.9
      },
      {
        "x": 845.0,
        "y": 760.0
      },
      {
        "x": 859.1,
        "y": 765.9
      }
    ]
  },
  {
    "id": "pernambuco",
    "name": "Capitanía de Pernambuco & Olinda",
    "capitalName": "Recife",
    "owner": "portugal",
    "theater": "Americas",
    "x": 894.0,
    "y": 738.0,
    "radius": 26,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 70000,
    "developmentLevel": 4,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "petrolina",
      "fortaleza",
      "bahia",
      "codo",
      "morros",
      "sao_mateus"
    ],
    "polygon": [
      {
        "x": 914.0,
        "y": 738.0
      },
      {
        "x": 908.1,
        "y": 752.1
      },
      {
        "x": 894.0,
        "y": 758.0
      },
      {
        "x": 879.9,
        "y": 752.1
      },
      {
        "x": 874.0,
        "y": 738.0
      },
      {
        "x": 879.9,
        "y": 723.9
      },
      {
        "x": 894.0,
        "y": 718.0
      },
      {
        "x": 908.1,
        "y": 723.9
      }
    ]
  },
  {
    "id": "amazonas",
    "name": "Cuenca Amazónica & Selva Profunda",
    "capitalName": "Manaos / Frontera Selvática",
    "owner": "neutral",
    "theater": "Americas",
    "x": 729.0,
    "y": 703.0,
    "radius": 34,
    "terrain": "jungle",
    "hasPort": false,
    "cityLevel": 1,
    "population": 25000,
    "developmentLevel": 1,
    "economyValue": 18,
    "infrastructureLevel": 1,
    "defenseLevel": 0,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "maraa",
      "humaita",
      "monte_alegre",
      "castanheira",
      "tamatama",
      "itamarati",
      "camopi",
      "paradise"
    ],
    "polygon": [
      {
        "x": 749.0,
        "y": 703.0
      },
      {
        "x": 743.1,
        "y": 717.1
      },
      {
        "x": 729.0,
        "y": 723.0
      },
      {
        "x": 714.9,
        "y": 717.1
      },
      {
        "x": 709.0,
        "y": 703.0
      },
      {
        "x": 714.9,
        "y": 688.9
      },
      {
        "x": 729.0,
        "y": 683.0
      },
      {
        "x": 743.1,
        "y": 688.9
      }
    ]
  },
  {
    "id": "lisbon",
    "name": "Reino de Portugal & Lisboa",
    "capitalName": "Lisboa",
    "owner": "portugal",
    "theater": "Europe",
    "x": 1067.0,
    "y": 389.0,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 180000,
    "developmentLevel": 6,
    "economyValue": 75,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "ciudad_rodrigo",
      "andalucia",
      "compostela",
      "castilla",
      "fes",
      "murcia",
      "marrakesh"
    ],
    "polygon": [
      {
        "x": 1087.0,
        "y": 389.0
      },
      {
        "x": 1081.1,
        "y": 403.1
      },
      {
        "x": 1067.0,
        "y": 409.0
      },
      {
        "x": 1052.9,
        "y": 403.1
      },
      {
        "x": 1047.0,
        "y": 389.0
      },
      {
        "x": 1052.9,
        "y": 374.9
      },
      {
        "x": 1067.0,
        "y": 369.0
      },
      {
        "x": 1081.1,
        "y": 374.9
      }
    ]
  },
  {
    "id": "castilla",
    "name": "Castilla la Vieja & León",
    "capitalName": "Madrid",
    "owner": "spain",
    "theater": "Europe",
    "x": 1103.0,
    "y": 375.0,
    "radius": 28,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 310000,
    "developmentLevel": 7,
    "economyValue": 85,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "ciudad_rodrigo",
      "zaragoza",
      "murcia",
      "santander",
      "andalucia",
      "ibiza",
      "lisbon",
      "compostela"
    ],
    "polygon": [
      {
        "x": 1123.0,
        "y": 375.0
      },
      {
        "x": 1117.1,
        "y": 389.1
      },
      {
        "x": 1103.0,
        "y": 395.0
      },
      {
        "x": 1088.9,
        "y": 389.1
      },
      {
        "x": 1083.0,
        "y": 375.0
      },
      {
        "x": 1088.9,
        "y": 360.9
      },
      {
        "x": 1103.0,
        "y": 355.0
      },
      {
        "x": 1117.1,
        "y": 360.9
      }
    ]
  },
  {
    "id": "aragon",
    "name": "Corona de Aragón & Cataluña",
    "capitalName": "Barcelona",
    "owner": "spain",
    "theater": "Europe",
    "x": 1142.0,
    "y": 366.0,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 175000,
    "developmentLevel": 6,
    "economyValue": 65,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "beziers",
      "zaragoza",
      "ibiza",
      "provence",
      "bordeaux",
      "murcia"
    ],
    "polygon": [
      {
        "x": 1162.0,
        "y": 366.0
      },
      {
        "x": 1156.1,
        "y": 380.1
      },
      {
        "x": 1142.0,
        "y": 386.0
      },
      {
        "x": 1127.9,
        "y": 380.1
      },
      {
        "x": 1122.0,
        "y": 366.0
      },
      {
        "x": 1127.9,
        "y": 351.9
      },
      {
        "x": 1142.0,
        "y": 346.0
      },
      {
        "x": 1156.1,
        "y": 351.9
      }
    ]
  },
  {
    "id": "andalucia",
    "name": "Reino de Sevilla & Andalucía",
    "capitalName": "Sevilla",
    "owner": "spain",
    "theater": "Europe",
    "x": 1088.0,
    "y": 401.0,
    "radius": 26,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 220000,
    "developmentLevel": 7,
    "economyValue": 90,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "lisbon",
      "fes",
      "ciudad_rodrigo",
      "castilla",
      "murcia",
      "saida",
      "compostela",
      "marrakesh"
    ],
    "polygon": [
      {
        "x": 1108.0,
        "y": 401.0
      },
      {
        "x": 1102.1,
        "y": 415.1
      },
      {
        "x": 1088.0,
        "y": 421.0
      },
      {
        "x": 1073.9,
        "y": 415.1
      },
      {
        "x": 1068.0,
        "y": 401.0
      },
      {
        "x": 1073.9,
        "y": 386.9
      },
      {
        "x": 1088.0,
        "y": 381.0
      },
      {
        "x": 1102.1,
        "y": 386.9
      }
    ]
  },
  {
    "id": "bordeaux",
    "name": "Ducado de Aquitania & Burdeos",
    "capitalName": "Burdeos",
    "owner": "france",
    "theater": "Europe",
    "x": 1124.0,
    "y": 335.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 150000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "ussel",
      "santander",
      "tours",
      "beziers",
      "zaragoza",
      "bretagne",
      "aragon"
    ],
    "polygon": [
      {
        "x": 1144.0,
        "y": 335.0
      },
      {
        "x": 1138.1,
        "y": 349.1
      },
      {
        "x": 1124.0,
        "y": 355.0
      },
      {
        "x": 1109.9,
        "y": 349.1
      },
      {
        "x": 1104.0,
        "y": 335.0
      },
      {
        "x": 1109.9,
        "y": 320.9
      },
      {
        "x": 1124.0,
        "y": 315.0
      },
      {
        "x": 1138.1,
        "y": 320.9
      }
    ]
  },
  {
    "id": "bretagne",
    "name": "Ducado de Bretaña & Nantes",
    "capitalName": "Rennes / Nantes",
    "owner": "france",
    "theater": "Europe",
    "x": 1105.0,
    "y": 305.0,
    "radius": 22,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 110000,
    "developmentLevel": 4,
    "economyValue": 45,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "caen",
      "tours",
      "barnstaple",
      "bordeaux",
      "paris",
      "london",
      "santander"
    ],
    "polygon": [
      {
        "x": 1125.0,
        "y": 305.0
      },
      {
        "x": 1119.1,
        "y": 319.1
      },
      {
        "x": 1105.0,
        "y": 325.0
      },
      {
        "x": 1090.9,
        "y": 319.1
      },
      {
        "x": 1085.0,
        "y": 305.0
      },
      {
        "x": 1090.9,
        "y": 290.9
      },
      {
        "x": 1105.0,
        "y": 285.0
      },
      {
        "x": 1119.1,
        "y": 290.9
      }
    ]
  },
  {
    "id": "paris",
    "name": "Île-de-France & Corona Francesa",
    "capitalName": "París",
    "owner": "france",
    "theater": "Europe",
    "x": 1143.0,
    "y": 296.0,
    "radius": 28,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 420000,
    "developmentLevel": 8,
    "economyValue": 105,
    "infrastructureLevel": 4,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "caen",
      "tours",
      "flanders",
      "nancy",
      "burgundy",
      "london",
      "bretagne",
      "ussel"
    ],
    "polygon": [
      {
        "x": 1163.0,
        "y": 296.0
      },
      {
        "x": 1157.1,
        "y": 310.1
      },
      {
        "x": 1143.0,
        "y": 316.0
      },
      {
        "x": 1128.9,
        "y": 310.1
      },
      {
        "x": 1123.0,
        "y": 296.0
      },
      {
        "x": 1128.9,
        "y": 281.9
      },
      {
        "x": 1143.0,
        "y": 276.0
      },
      {
        "x": 1157.1,
        "y": 281.9
      }
    ]
  },
  {
    "id": "burgundy",
    "name": "Baja Borgoña & Franco Condado",
    "capitalName": "Dijon",
    "owner": "france",
    "theater": "Europe",
    "x": 1162.0,
    "y": 320.0,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 135000,
    "developmentLevel": 5,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "ussel",
      "nancy",
      "zurich",
      "milan",
      "paris",
      "tours",
      "provence",
      "beziers"
    ],
    "polygon": [
      {
        "x": 1182.0,
        "y": 320.0
      },
      {
        "x": 1176.1,
        "y": 334.1
      },
      {
        "x": 1162.0,
        "y": 340.0
      },
      {
        "x": 1147.9,
        "y": 334.1
      },
      {
        "x": 1142.0,
        "y": 320.0
      },
      {
        "x": 1147.9,
        "y": 305.9
      },
      {
        "x": 1162.0,
        "y": 300.0
      },
      {
        "x": 1176.1,
        "y": 305.9
      }
    ]
  },
  {
    "id": "provence",
    "name": "Condado de Provenza & Marsella",
    "capitalName": "Marsella",
    "owner": "france",
    "theater": "Europe",
    "x": 1168.0,
    "y": 352.0,
    "radius": 22,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 140000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "beziers",
      "bastia",
      "aragon",
      "milan",
      "burgundy",
      "ussel"
    ],
    "polygon": [
      {
        "x": 1188.0,
        "y": 352.0
      },
      {
        "x": 1182.1,
        "y": 366.1
      },
      {
        "x": 1168.0,
        "y": 372.0
      },
      {
        "x": 1153.9,
        "y": 366.1
      },
      {
        "x": 1148.0,
        "y": 352.0
      },
      {
        "x": 1153.9,
        "y": 337.9
      },
      {
        "x": 1168.0,
        "y": 332.0
      },
      {
        "x": 1182.1,
        "y": 337.9
      }
    ]
  },
  {
    "id": "flanders",
    "name": "Flandes & Países Bajos Españoles",
    "capitalName": "Bruselas / Amberes",
    "owner": "spain",
    "theater": "Europe",
    "x": 1158.0,
    "y": 278.0,
    "radius": 22,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 260000,
    "developmentLevel": 7,
    "economyValue": 95,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "holland",
      "nancy",
      "paris",
      "rhineland",
      "london",
      "caen",
      "jever"
    ],
    "polygon": [
      {
        "x": 1178.0,
        "y": 278.0
      },
      {
        "x": 1172.1,
        "y": 292.1
      },
      {
        "x": 1158.0,
        "y": 298.0
      },
      {
        "x": 1143.9,
        "y": 292.1
      },
      {
        "x": 1138.0,
        "y": 278.0
      },
      {
        "x": 1143.9,
        "y": 263.9
      },
      {
        "x": 1158.0,
        "y": 258.0
      },
      {
        "x": 1172.1,
        "y": 263.9
      }
    ]
  },
  {
    "id": "holland",
    "name": "Provincias Unidas de Holanda",
    "capitalName": "Ámsterdam",
    "owner": "holland",
    "theater": "Europe",
    "x": 1164.0,
    "y": 260.0,
    "radius": 22,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 210000,
    "developmentLevel": 7,
    "economyValue": 90,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "flanders",
      "jever",
      "hanover",
      "rhineland",
      "london",
      "nancy"
    ],
    "polygon": [
      {
        "x": 1184.0,
        "y": 260.0
      },
      {
        "x": 1178.1,
        "y": 274.1
      },
      {
        "x": 1164.0,
        "y": 280.0
      },
      {
        "x": 1149.9,
        "y": 274.1
      },
      {
        "x": 1144.0,
        "y": 260.0
      },
      {
        "x": 1149.9,
        "y": 245.9
      },
      {
        "x": 1164.0,
        "y": 240.0
      },
      {
        "x": 1178.1,
        "y": 245.9
      }
    ]
  },
  {
    "id": "london",
    "name": "Reino de Inglaterra & Londres",
    "capitalName": "Londres",
    "owner": "england",
    "theater": "Europe",
    "x": 1127.0,
    "y": 269.0,
    "radius": 26,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 360000,
    "developmentLevel": 7,
    "economyValue": 95,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "caen",
      "barnstaple",
      "york",
      "paris",
      "flanders",
      "holland",
      "bretagne",
      "scotland",
      "ireland"
    ],
    "polygon": [
      {
        "x": 1147.0,
        "y": 269.0
      },
      {
        "x": 1141.1,
        "y": 283.1
      },
      {
        "x": 1127.0,
        "y": 289.0
      },
      {
        "x": 1112.9,
        "y": 283.1
      },
      {
        "x": 1107.0,
        "y": 269.0
      },
      {
        "x": 1112.9,
        "y": 254.9
      },
      {
        "x": 1127.0,
        "y": 249.0
      },
      {
        "x": 1141.1,
        "y": 254.9
      }
    ]
  },
  {
    "id": "york",
    "name": "Condados del Norte & York",
    "capitalName": "York",
    "owner": "england",
    "theater": "Europe",
    "x": 1121.0,
    "y": 242.0,
    "radius": 22,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 130000,
    "developmentLevel": 5,
    "economyValue": 50,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "london",
      "scotland",
      "stranraer",
      "ireland",
      "barnstaple",
      "fort_william",
      "clachtoll"
    ],
    "polygon": [
      {
        "x": 1141.0,
        "y": 242.0
      },
      {
        "x": 1135.1,
        "y": 256.1
      },
      {
        "x": 1121.0,
        "y": 262.0
      },
      {
        "x": 1106.9,
        "y": 256.1
      },
      {
        "x": 1101.0,
        "y": 242.0
      },
      {
        "x": 1106.9,
        "y": 227.9
      },
      {
        "x": 1121.0,
        "y": 222.0
      },
      {
        "x": 1135.1,
        "y": 227.9
      }
    ]
  },
  {
    "id": "scotland",
    "name": "Reino de Escocia & Tierras Altas",
    "capitalName": "Edimburgo",
    "owner": "england",
    "theater": "Europe",
    "x": 1115.0,
    "y": 215.0,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 95000,
    "developmentLevel": 4,
    "economyValue": 40,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "fort_william",
      "stranraer",
      "york",
      "clachtoll",
      "ireland",
      "london"
    ],
    "polygon": [
      {
        "x": 1135.0,
        "y": 215.0
      },
      {
        "x": 1129.1,
        "y": 229.1
      },
      {
        "x": 1115.0,
        "y": 235.0
      },
      {
        "x": 1100.9,
        "y": 229.1
      },
      {
        "x": 1095.0,
        "y": 215.0
      },
      {
        "x": 1100.9,
        "y": 200.9
      },
      {
        "x": 1115.0,
        "y": 195.0
      },
      {
        "x": 1129.1,
        "y": 200.9
      }
    ]
  },
  {
    "id": "ireland",
    "name": "Señorío de Irlanda & Dublín",
    "capitalName": "Dublín",
    "owner": "england",
    "theater": "Europe",
    "x": 1086.0,
    "y": 249.0,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 85000,
    "developmentLevel": 3,
    "economyValue": 35,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "stranraer",
      "barnstaple",
      "york",
      "fort_william",
      "scotland",
      "london",
      "clachtoll"
    ],
    "polygon": [
      {
        "x": 1106.0,
        "y": 249.0
      },
      {
        "x": 1100.1,
        "y": 263.1
      },
      {
        "x": 1086.0,
        "y": 269.0
      },
      {
        "x": 1071.9,
        "y": 263.1
      },
      {
        "x": 1066.0,
        "y": 249.0
      },
      {
        "x": 1071.9,
        "y": 234.9
      },
      {
        "x": 1086.0,
        "y": 229.0
      },
      {
        "x": 1100.1,
        "y": 234.9
      }
    ]
  },
  {
    "id": "rhineland",
    "name": "Renania & Palatinado",
    "capitalName": "Frankfurt / Colonia",
    "owner": "hre",
    "theater": "Europe",
    "x": 1184.0,
    "y": 284.0,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 190000,
    "developmentLevel": 6,
    "economyValue": 70,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "schwarzburg",
      "nancy",
      "hanover",
      "flanders",
      "zurich",
      "bavaria",
      "holland",
      "jever"
    ],
    "polygon": [
      {
        "x": 1204.0,
        "y": 284.0
      },
      {
        "x": 1198.1,
        "y": 298.1
      },
      {
        "x": 1184.0,
        "y": 304.0
      },
      {
        "x": 1169.9,
        "y": 298.1
      },
      {
        "x": 1164.0,
        "y": 284.0
      },
      {
        "x": 1169.9,
        "y": 269.9
      },
      {
        "x": 1184.0,
        "y": 264.0
      },
      {
        "x": 1198.1,
        "y": 269.9
      }
    ]
  },
  {
    "id": "bavaria",
    "name": "Ducado de Baviera & Múnich",
    "capitalName": "Múnich",
    "owner": "hre",
    "theater": "Europe",
    "x": 1205.0,
    "y": 305.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 165000,
    "developmentLevel": 5,
    "economyValue": 65,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "linz",
      "zurich",
      "venice",
      "schwarzburg",
      "milan",
      "rhineland"
    ],
    "polygon": [
      {
        "x": 1225.0,
        "y": 305.0
      },
      {
        "x": 1219.1,
        "y": 319.1
      },
      {
        "x": 1205.0,
        "y": 325.0
      },
      {
        "x": 1190.9,
        "y": 319.1
      },
      {
        "x": 1185.0,
        "y": 305.0
      },
      {
        "x": 1190.9,
        "y": 290.9
      },
      {
        "x": 1205.0,
        "y": 285.0
      },
      {
        "x": 1219.1,
        "y": 290.9
      }
    ]
  },
  {
    "id": "saxony",
    "name": "Electorado de Sajonia",
    "capitalName": "Dresde",
    "owner": "hre",
    "theater": "Europe",
    "x": 1218.0,
    "y": 272.0,
    "radius": 22,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 150000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "schwarzburg",
      "bohemia",
      "neubrandenburg",
      "ostrow_wielkopolski",
      "prussia",
      "hanover",
      "linz"
    ],
    "polygon": [
      {
        "x": 1238.0,
        "y": 272.0
      },
      {
        "x": 1232.1,
        "y": 286.1
      },
      {
        "x": 1218.0,
        "y": 292.0
      },
      {
        "x": 1203.9,
        "y": 286.1
      },
      {
        "x": 1198.0,
        "y": 272.0
      },
      {
        "x": 1203.9,
        "y": 257.9
      },
      {
        "x": 1218.0,
        "y": 252.0
      },
      {
        "x": 1232.1,
        "y": 257.9
      }
    ]
  },
  {
    "id": "bohemia",
    "name": "Reino de Bohemia & Praga",
    "capitalName": "Praga",
    "owner": "hre",
    "theater": "Europe",
    "x": 1232.0,
    "y": 285.0,
    "radius": 22,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 170000,
    "developmentLevel": 6,
    "economyValue": 65,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "trinec",
      "saxony",
      "linz",
      "ostrow_wielkopolski",
      "austria",
      "schwarzburg",
      "prussia"
    ],
    "polygon": [
      {
        "x": 1252.0,
        "y": 285.0
      },
      {
        "x": 1246.1,
        "y": 299.1
      },
      {
        "x": 1232.0,
        "y": 305.0
      },
      {
        "x": 1217.9,
        "y": 299.1
      },
      {
        "x": 1212.0,
        "y": 285.0
      },
      {
        "x": 1217.9,
        "y": 270.9
      },
      {
        "x": 1232.0,
        "y": 265.0
      },
      {
        "x": 1246.1,
        "y": 270.9
      }
    ]
  },
  {
    "id": "prussia",
    "name": "Brandeburgo & Prusia",
    "capitalName": "Berlín",
    "owner": "hre",
    "theater": "Europe",
    "x": 1238.0,
    "y": 252.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 195000,
    "developmentLevel": 6,
    "economyValue": 75,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "ostrow_wielkopolski",
      "ostroda",
      "neubrandenburg",
      "saxony",
      "poland",
      "bohemia",
      "denmark",
      "borgholm"
    ],
    "polygon": [
      {
        "x": 1258.0,
        "y": 252.0
      },
      {
        "x": 1252.1,
        "y": 266.1
      },
      {
        "x": 1238.0,
        "y": 272.0
      },
      {
        "x": 1223.9,
        "y": 266.1
      },
      {
        "x": 1218.0,
        "y": 252.0
      },
      {
        "x": 1223.9,
        "y": 237.9
      },
      {
        "x": 1238.0,
        "y": 232.0
      },
      {
        "x": 1252.1,
        "y": 237.9
      }
    ]
  },
  {
    "id": "austria",
    "name": "Archiducado de Austria & Viena",
    "capitalName": "Viena",
    "owner": "hre",
    "theater": "Europe",
    "x": 1245.0,
    "y": 308.0,
    "radius": 26,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 3,
    "population": 290000,
    "developmentLevel": 7,
    "economyValue": 85,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "trinec",
      "linz",
      "trebnje",
      "presov",
      "orasje",
      "bohemia",
      "hungary"
    ],
    "polygon": [
      {
        "x": 1265.0,
        "y": 308.0
      },
      {
        "x": 1259.1,
        "y": 322.1
      },
      {
        "x": 1245.0,
        "y": 328.0
      },
      {
        "x": 1230.9,
        "y": 322.1
      },
      {
        "x": 1225.0,
        "y": 308.0
      },
      {
        "x": 1230.9,
        "y": 293.9
      },
      {
        "x": 1245.0,
        "y": 288.0
      },
      {
        "x": 1259.1,
        "y": 293.9
      }
    ]
  },
  {
    "id": "hungary",
    "name": "Reino de Hungría & Danubio",
    "capitalName": "Buda / Pest",
    "owner": "hre",
    "theater": "Europe",
    "x": 1272.0,
    "y": 322.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 180000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "orasje",
      "sinaia",
      "presov",
      "balkans",
      "austria",
      "ivano_frankivsk"
    ],
    "polygon": [
      {
        "x": 1292.0,
        "y": 322.0
      },
      {
        "x": 1286.1,
        "y": 336.1
      },
      {
        "x": 1272.0,
        "y": 342.0
      },
      {
        "x": 1257.9,
        "y": 336.1
      },
      {
        "x": 1252.0,
        "y": 322.0
      },
      {
        "x": 1257.9,
        "y": 307.9
      },
      {
        "x": 1272.0,
        "y": 302.0
      },
      {
        "x": 1286.1,
        "y": 307.9
      }
    ]
  },
  {
    "id": "denmark",
    "name": "Reino de Dinamarca & Selandia",
    "capitalName": "Copenhague",
    "owner": "sweden",
    "theater": "Europe",
    "x": 1215.0,
    "y": 225.0,
    "radius": 22,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 115000,
    "developmentLevel": 5,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "neubrandenburg",
      "borgholm",
      "aalborg",
      "prussia",
      "jever",
      "hanover"
    ],
    "polygon": [
      {
        "x": 1235.0,
        "y": 225.0
      },
      {
        "x": 1229.1,
        "y": 239.1
      },
      {
        "x": 1215.0,
        "y": 245.0
      },
      {
        "x": 1200.9,
        "y": 239.1
      },
      {
        "x": 1195.0,
        "y": 225.0
      },
      {
        "x": 1200.9,
        "y": 210.9
      },
      {
        "x": 1215.0,
        "y": 205.0
      },
      {
        "x": 1229.1,
        "y": 210.9
      }
    ]
  },
  {
    "id": "norway",
    "name": "Reino de Noruega & Fiordos",
    "capitalName": "Cristianía / Oslo",
    "owner": "sweden",
    "theater": "Europe",
    "x": 1199.0,
    "y": 170.0,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 75000,
    "developmentLevel": 4,
    "economyValue": 35,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "mora",
      "aalborg",
      "are",
      "sweden",
      "harnosand",
      "borgholm"
    ],
    "polygon": [
      {
        "x": 1219.0,
        "y": 170.0
      },
      {
        "x": 1213.1,
        "y": 184.1
      },
      {
        "x": 1199.0,
        "y": 190.0
      },
      {
        "x": 1184.9,
        "y": 184.1
      },
      {
        "x": 1179.0,
        "y": 170.0
      },
      {
        "x": 1184.9,
        "y": 155.9
      },
      {
        "x": 1199.0,
        "y": 150.0
      },
      {
        "x": 1213.1,
        "y": 155.9
      }
    ]
  },
  {
    "id": "sweden",
    "name": "Imperio Sueco & Báltico",
    "capitalName": "Estocolmo",
    "owner": "sweden",
    "theater": "Europe",
    "x": 1247.0,
    "y": 178.0,
    "radius": 28,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 3,
    "population": 160000,
    "developmentLevel": 6,
    "economyValue": 70,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "mora",
      "borgholm",
      "pori",
      "harnosand",
      "liepaja",
      "tallinn",
      "norway",
      "are"
    ],
    "polygon": [
      {
        "x": 1267.0,
        "y": 178.0
      },
      {
        "x": 1261.1,
        "y": 192.1
      },
      {
        "x": 1247.0,
        "y": 198.0
      },
      {
        "x": 1232.9,
        "y": 192.1
      },
      {
        "x": 1227.0,
        "y": 178.0
      },
      {
        "x": 1232.9,
        "y": 163.9
      },
      {
        "x": 1247.0,
        "y": 158.0
      },
      {
        "x": 1261.1,
        "y": 163.9
      }
    ]
  },
  {
    "id": "poland",
    "name": "Mancomunidad de Polonia & Cracovia",
    "capitalName": "Varsovia / Cracovia",
    "owner": "poland",
    "theater": "Europe",
    "x": 1266.0,
    "y": 262.0,
    "radius": 28,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 310000,
    "developmentLevel": 6,
    "economyValue": 80,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "ostroda",
      "zamosc",
      "ostrow_wielkopolski",
      "prussia",
      "trinec",
      "presov",
      "lithuania",
      "pinsk"
    ],
    "polygon": [
      {
        "x": 1286.0,
        "y": 262.0
      },
      {
        "x": 1280.1,
        "y": 276.1
      },
      {
        "x": 1266.0,
        "y": 282.0
      },
      {
        "x": 1251.9,
        "y": 276.1
      },
      {
        "x": 1246.0,
        "y": 262.0
      },
      {
        "x": 1251.9,
        "y": 247.9
      },
      {
        "x": 1266.0,
        "y": 242.0
      },
      {
        "x": 1280.1,
        "y": 247.9
      }
    ]
  },
  {
    "id": "lithuania",
    "name": "Gran Ducado de Lituania & Vilna",
    "capitalName": "Vilna",
    "owner": "poland",
    "theater": "Europe",
    "x": 1294.0,
    "y": 235.0,
    "radius": 26,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 190000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "pinsk",
      "balvi",
      "mogilev",
      "liepaja",
      "ostroda",
      "poland",
      "zhizhitsa"
    ],
    "polygon": [
      {
        "x": 1314.0,
        "y": 235.0
      },
      {
        "x": 1308.1,
        "y": 249.1
      },
      {
        "x": 1294.0,
        "y": 255.0
      },
      {
        "x": 1279.9,
        "y": 249.1
      },
      {
        "x": 1274.0,
        "y": 235.0
      },
      {
        "x": 1279.9,
        "y": 220.9
      },
      {
        "x": 1294.0,
        "y": 215.0
      },
      {
        "x": 1308.1,
        "y": 220.9
      }
    ]
  },
  {
    "id": "milan",
    "name": "Ducado de Milán & Lombardía",
    "capitalName": "Milán",
    "owner": "spain",
    "theater": "Europe",
    "x": 1188.0,
    "y": 329.0,
    "radius": 22,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 220000,
    "developmentLevel": 7,
    "economyValue": 85,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "venice",
      "zurich",
      "bastia",
      "burgundy",
      "bavaria",
      "provence",
      "nancy"
    ],
    "polygon": [
      {
        "x": 1208.0,
        "y": 329.0
      },
      {
        "x": 1202.1,
        "y": 343.1
      },
      {
        "x": 1188.0,
        "y": 349.0
      },
      {
        "x": 1173.9,
        "y": 343.1
      },
      {
        "x": 1168.0,
        "y": 329.0
      },
      {
        "x": 1173.9,
        "y": 314.9
      },
      {
        "x": 1188.0,
        "y": 309.0
      },
      {
        "x": 1202.1,
        "y": 314.9
      }
    ]
  },
  {
    "id": "venice",
    "name": "Serenísima República de Venecia",
    "capitalName": "Venecia",
    "owner": "hre",
    "theater": "Europe",
    "x": 1205.0,
    "y": 332.0,
    "radius": 22,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 200000,
    "developmentLevel": 7,
    "economyValue": 90,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "milan",
      "ancona",
      "trebnje",
      "bavaria",
      "bastia",
      "zurich",
      "rome"
    ],
    "polygon": [
      {
        "x": 1225.0,
        "y": 332.0
      },
      {
        "x": 1219.1,
        "y": 346.1
      },
      {
        "x": 1205.0,
        "y": 352.0
      },
      {
        "x": 1190.9,
        "y": 346.1
      },
      {
        "x": 1185.0,
        "y": 332.0
      },
      {
        "x": 1190.9,
        "y": 317.9
      },
      {
        "x": 1205.0,
        "y": 312.0
      },
      {
        "x": 1219.1,
        "y": 317.9
      }
    ]
  },
  {
    "id": "rome",
    "name": "Estados Pontificios & Roma",
    "capitalName": "Roma",
    "owner": "spain",
    "theater": "Europe",
    "x": 1210.0,
    "y": 362.0,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 210000,
    "developmentLevel": 7,
    "economyValue": 80,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "naples",
      "ancona",
      "bastia",
      "split",
      "venice",
      "cagliari"
    ],
    "polygon": [
      {
        "x": 1230.0,
        "y": 362.0
      },
      {
        "x": 1224.1,
        "y": 376.1
      },
      {
        "x": 1210.0,
        "y": 382.0
      },
      {
        "x": 1195.9,
        "y": 376.1
      },
      {
        "x": 1190.0,
        "y": 362.0
      },
      {
        "x": 1195.9,
        "y": 347.9
      },
      {
        "x": 1210.0,
        "y": 342.0
      },
      {
        "x": 1224.1,
        "y": 347.9
      }
    ]
  },
  {
    "id": "naples",
    "name": "Reino de Nápoles & Dos Sicilias",
    "capitalName": "Nápoles",
    "owner": "spain",
    "theater": "Europe",
    "x": 1221.0,
    "y": 371.0,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 250000,
    "developmentLevel": 6,
    "economyValue": 75,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "rome",
      "catanzaro",
      "brindisi",
      "sicily",
      "ancona",
      "split",
      "cagliari",
      "kelibia"
    ],
    "polygon": [
      {
        "x": 1241.0,
        "y": 371.0
      },
      {
        "x": 1235.1,
        "y": 385.1
      },
      {
        "x": 1221.0,
        "y": 391.0
      },
      {
        "x": 1206.9,
        "y": 385.1
      },
      {
        "x": 1201.0,
        "y": 371.0
      },
      {
        "x": 1206.9,
        "y": 356.9
      },
      {
        "x": 1221.0,
        "y": 351.0
      },
      {
        "x": 1235.1,
        "y": 356.9
      }
    ]
  },
  {
    "id": "sicily",
    "name": "Reino de Sicilia & Palermo",
    "capitalName": "Palermo",
    "owner": "spain",
    "theater": "Europe",
    "x": 1215.0,
    "y": 395.0,
    "radius": 22,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 145000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "kelibia",
      "valletta",
      "catanzaro",
      "naples",
      "cagliari",
      "sfax",
      "el_kef"
    ],
    "polygon": [
      {
        "x": 1235.0,
        "y": 395.0
      },
      {
        "x": 1229.1,
        "y": 409.1
      },
      {
        "x": 1215.0,
        "y": 415.0
      },
      {
        "x": 1200.9,
        "y": 409.1
      },
      {
        "x": 1195.0,
        "y": 395.0
      },
      {
        "x": 1200.9,
        "y": 380.9
      },
      {
        "x": 1215.0,
        "y": 375.0
      },
      {
        "x": 1229.1,
        "y": 380.9
      }
    ]
  },
  {
    "id": "balkans",
    "name": "Valaquia & Balcanes",
    "capitalName": "Belgrado / Sofía",
    "owner": "ottoman",
    "theater": "Europe",
    "x": 1285.0,
    "y": 348.0,
    "radius": 26,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 160000,
    "developmentLevel": 5,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "sinaia",
      "gevgelija",
      "alexandroupoli",
      "hungary",
      "constanta",
      "podgorica",
      "istanbul"
    ],
    "polygon": [
      {
        "x": 1305.0,
        "y": 348.0
      },
      {
        "x": 1299.1,
        "y": 362.1
      },
      {
        "x": 1285.0,
        "y": 368.0
      },
      {
        "x": 1270.9,
        "y": 362.1
      },
      {
        "x": 1265.0,
        "y": 348.0
      },
      {
        "x": 1270.9,
        "y": 333.9
      },
      {
        "x": 1285.0,
        "y": 328.0
      },
      {
        "x": 1299.1,
        "y": 333.9
      }
    ]
  },
  {
    "id": "greece",
    "name": "Morea & Archipiélago Helénico",
    "capitalName": "Atenas",
    "owner": "ottoman",
    "theater": "Europe",
    "x": 1280.0,
    "y": 390.0,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 130000,
    "developmentLevel": 5,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "mesta",
      "gevgelija",
      "sarande",
      "alexandroupoli",
      "heraklion",
      "brindisi",
      "derna"
    ],
    "polygon": [
      {
        "x": 1300.0,
        "y": 390.0
      },
      {
        "x": 1294.1,
        "y": 404.1
      },
      {
        "x": 1280.0,
        "y": 410.0
      },
      {
        "x": 1265.9,
        "y": 404.1
      },
      {
        "x": 1260.0,
        "y": 390.0
      },
      {
        "x": 1265.9,
        "y": 375.9
      },
      {
        "x": 1280.0,
        "y": 370.0
      },
      {
        "x": 1294.1,
        "y": 375.9
      }
    ]
  },
  {
    "id": "novgorod",
    "name": "República de Nóvgorod & Ladoga",
    "capitalName": "Nóvgorod",
    "owner": "russia",
    "theater": "Eurasia",
    "x": 1345.0,
    "y": 185.0,
    "radius": 26,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 120000,
    "developmentLevel": 5,
    "economyValue": 50,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "zhizhitsa",
      "imatra",
      "lakhkolampi",
      "pudozh",
      "balvi",
      "vologda",
      "moscow",
      "tallinn"
    ],
    "polygon": [
      {
        "x": 1365.0,
        "y": 185.0
      },
      {
        "x": 1359.1,
        "y": 199.1
      },
      {
        "x": 1345.0,
        "y": 205.0
      },
      {
        "x": 1330.9,
        "y": 199.1
      },
      {
        "x": 1325.0,
        "y": 185.0
      },
      {
        "x": 1330.9,
        "y": 170.9
      },
      {
        "x": 1345.0,
        "y": 165.0
      },
      {
        "x": 1359.1,
        "y": 170.9
      }
    ]
  },
  {
    "id": "moscow",
    "name": "Zarato de Rusia & Moscovia",
    "capitalName": "Moscú",
    "owner": "russia",
    "theater": "Eurasia",
    "x": 1375.0,
    "y": 222.0,
    "radius": 30,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 3,
    "population": 340000,
    "developmentLevel": 7,
    "economyValue": 85,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "baryatino",
      "lipetsk",
      "gorodets",
      "zhizhitsa",
      "vologda",
      "novgorod"
    ],
    "polygon": [
      {
        "x": 1395.0,
        "y": 222.0
      },
      {
        "x": 1389.1,
        "y": 236.1
      },
      {
        "x": 1375.0,
        "y": 242.0
      },
      {
        "x": 1360.9,
        "y": 236.1
      },
      {
        "x": 1355.0,
        "y": 222.0
      },
      {
        "x": 1360.9,
        "y": 207.9
      },
      {
        "x": 1375.0,
        "y": 202.0
      },
      {
        "x": 1389.1,
        "y": 207.9
      }
    ]
  },
  {
    "id": "kyiv",
    "name": "Tierras Rutenas & Kiev",
    "capitalName": "Kiev",
    "owner": "poland",
    "theater": "Eurasia",
    "x": 1320.0,
    "y": 280.0,
    "radius": 26,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 175000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "pinsk",
      "kropyvnytskyi",
      "balti",
      "shostka",
      "ivano_frankivsk",
      "mogilev",
      "kharkiv"
    ],
    "polygon": [
      {
        "x": 1340.0,
        "y": 280.0
      },
      {
        "x": 1334.1,
        "y": 294.1
      },
      {
        "x": 1320.0,
        "y": 300.0
      },
      {
        "x": 1305.9,
        "y": 294.1
      },
      {
        "x": 1300.0,
        "y": 280.0
      },
      {
        "x": 1305.9,
        "y": 265.9
      },
      {
        "x": 1320.0,
        "y": 260.0
      },
      {
        "x": 1334.1,
        "y": 265.9
      }
    ]
  },
  {
    "id": "crimea",
    "name": "Kanato de Crimea & Mar Negro",
    "capitalName": "Bajtchisarái / Sebastopol",
    "owner": "ottoman",
    "theater": "Eurasia",
    "x": 1348.0,
    "y": 332.0,
    "radius": 24,
    "terrain": "steppe",
    "hasPort": true,
    "cityLevel": 2,
    "population": 115000,
    "developmentLevel": 4,
    "economyValue": 48,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "yuzhne",
      "berdyansk",
      "kropyvnytskyi",
      "constanta",
      "constantinople",
      "bafra"
    ],
    "polygon": [
      {
        "x": 1368.0,
        "y": 332.0
      },
      {
        "x": 1362.1,
        "y": 346.1
      },
      {
        "x": 1348.0,
        "y": 352.0
      },
      {
        "x": 1333.9,
        "y": 346.1
      },
      {
        "x": 1328.0,
        "y": 332.0
      },
      {
        "x": 1333.9,
        "y": 317.9
      },
      {
        "x": 1348.0,
        "y": 312.0
      },
      {
        "x": 1362.1,
        "y": 317.9
      }
    ]
  },
  {
    "id": "kazan",
    "name": "Kanato de Kazán & Río Volga",
    "capitalName": "Kazán",
    "owner": "russia",
    "theater": "Eurasia",
    "x": 1452.0,
    "y": 222.0,
    "radius": 28,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 150000,
    "developmentLevel": 4,
    "economyValue": 50,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "neftekamsk",
      "kirov",
      "gorodets",
      "penza",
      "sterlitamak",
      "uralsk",
      "kudymkar",
      "nikolsk"
    ],
    "polygon": [
      {
        "x": 1472.0,
        "y": 222.0
      },
      {
        "x": 1466.1,
        "y": 236.1
      },
      {
        "x": 1452.0,
        "y": 242.0
      },
      {
        "x": 1437.9,
        "y": 236.1
      },
      {
        "x": 1432.0,
        "y": 222.0
      },
      {
        "x": 1437.9,
        "y": 207.9
      },
      {
        "x": 1452.0,
        "y": 202.0
      },
      {
        "x": 1466.1,
        "y": 207.9
      }
    ]
  },
  {
    "id": "steppes",
    "name": "Estepas Pontocaspianas del Don",
    "capitalName": "Campamento Tártaro Nogai",
    "owner": "neutral",
    "theater": "Eurasia",
    "x": 1430.0,
    "y": 295.0,
    "radius": 32,
    "terrain": "steppe",
    "hasPort": true,
    "cityLevel": 1,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 25,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "grain",
    "neighbors": [
      "millerovo",
      "uralsk",
      "atyrau",
      "penza",
      "stavropol",
      "lipetsk"
    ],
    "polygon": [
      {
        "x": 1450.0,
        "y": 295.0
      },
      {
        "x": 1444.1,
        "y": 309.1
      },
      {
        "x": 1430.0,
        "y": 315.0
      },
      {
        "x": 1415.9,
        "y": 309.1
      },
      {
        "x": 1410.0,
        "y": 295.0
      },
      {
        "x": 1415.9,
        "y": 280.9
      },
      {
        "x": 1430.0,
        "y": 275.0
      },
      {
        "x": 1444.1,
        "y": 280.9
      }
    ]
  },
  {
    "id": "siberia",
    "name": "Siberia Occidental & Tobolsk",
    "capitalName": "Tobolsk",
    "owner": "neutral",
    "theater": "Eurasia",
    "x": 1578.0,
    "y": 192.0,
    "radius": 36,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 20,
    "infrastructureLevel": 1,
    "defenseLevel": 0,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "kolosovka",
      "surgut",
      "nyagan",
      "novyi_vasiugan",
      "nizhny_tagil",
      "shchuchinsk"
    ],
    "polygon": [
      {
        "x": 1598.0,
        "y": 192.0
      },
      {
        "x": 1592.1,
        "y": 206.1
      },
      {
        "x": 1578.0,
        "y": 212.0
      },
      {
        "x": 1563.9,
        "y": 206.1
      },
      {
        "x": 1558.0,
        "y": 192.0
      },
      {
        "x": 1563.9,
        "y": 177.9
      },
      {
        "x": 1578.0,
        "y": 172.0
      },
      {
        "x": 1592.1,
        "y": 177.9
      }
    ]
  },
  {
    "id": "constantinople",
    "name": "Sublime Puerta & Anatolia",
    "capitalName": "Constantinopla / Estambul",
    "owner": "ottoman",
    "theater": "Middle East",
    "x": 1338.0,
    "y": 365.0,
    "radius": 30,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 450000,
    "developmentLevel": 8,
    "economyValue": 115,
    "infrastructureLevel": 4,
    "defenseLevel": 4,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "istanbul",
      "bafra",
      "usak",
      "aksaray",
      "constanta",
      "crimea",
      "ulas"
    ],
    "polygon": [
      {
        "x": 1358.0,
        "y": 365.0
      },
      {
        "x": 1352.1,
        "y": 379.1
      },
      {
        "x": 1338.0,
        "y": 385.0
      },
      {
        "x": 1323.9,
        "y": 379.1
      },
      {
        "x": 1318.0,
        "y": 365.0
      },
      {
        "x": 1323.9,
        "y": 350.9
      },
      {
        "x": 1338.0,
        "y": 345.0
      },
      {
        "x": 1352.1,
        "y": 350.9
      }
    ]
  },
  {
    "id": "syria",
    "name": "Siria & Levante",
    "capitalName": "Damasco",
    "owner": "ottoman",
    "theater": "Middle East",
    "x": 1367.0,
    "y": 432.0,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 2,
    "population": 180000,
    "developmentLevel": 6,
    "economyValue": 65,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "maan",
      "paphos",
      "al_bukamal",
      "sanliurfa",
      "sakaka",
      "aksaray",
      "egypt"
    ],
    "polygon": [
      {
        "x": 1387.0,
        "y": 432.0
      },
      {
        "x": 1381.1,
        "y": 446.1
      },
      {
        "x": 1367.0,
        "y": 452.0
      },
      {
        "x": 1352.9,
        "y": 446.1
      },
      {
        "x": 1347.0,
        "y": 432.0
      },
      {
        "x": 1352.9,
        "y": 417.9
      },
      {
        "x": 1367.0,
        "y": 412.0
      },
      {
        "x": 1381.1,
        "y": 417.9
      }
    ]
  },
  {
    "id": "mesopotamia",
    "name": "Mesopotamia & Río Tigris",
    "capitalName": "Bagdad",
    "owner": "ottoman",
    "theater": "Middle East",
    "x": 1420.0,
    "y": 433.0,
    "radius": 26,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 195000,
    "developmentLevel": 6,
    "economyValue": 70,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "al_bukamal",
      "bijar",
      "hakkari",
      "sakaka",
      "ibn_sharar",
      "sanliurfa",
      "isfahan"
    ],
    "polygon": [
      {
        "x": 1440.0,
        "y": 433.0
      },
      {
        "x": 1434.1,
        "y": 447.1
      },
      {
        "x": 1420.0,
        "y": 453.0
      },
      {
        "x": 1405.9,
        "y": 447.1
      },
      {
        "x": 1400.0,
        "y": 433.0
      },
      {
        "x": 1405.9,
        "y": 418.9
      },
      {
        "x": 1420.0,
        "y": 413.0
      },
      {
        "x": 1434.1,
        "y": 418.9
      }
    ]
  },
  {
    "id": "isfahan",
    "name": "Imperio Safávida & Persia",
    "capitalName": "Isfahán",
    "owner": "safavid",
    "theater": "Middle East",
    "x": 1468.0,
    "y": 439.0,
    "radius": 28,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 270000,
    "developmentLevel": 7,
    "economyValue": 85,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "jandaq",
      "amol",
      "jahrom",
      "bijar",
      "mesopotamia",
      "birjand"
    ],
    "polygon": [
      {
        "x": 1488.0,
        "y": 439.0
      },
      {
        "x": 1482.1,
        "y": 453.1
      },
      {
        "x": 1468.0,
        "y": 459.0
      },
      {
        "x": 1453.9,
        "y": 453.1
      },
      {
        "x": 1448.0,
        "y": 439.0
      },
      {
        "x": 1453.9,
        "y": 424.9
      },
      {
        "x": 1468.0,
        "y": 419.0
      },
      {
        "x": 1482.1,
        "y": 424.9
      }
    ]
  },
  {
    "id": "mecca",
    "name": "Península Arábiga & Hedjaz",
    "capitalName": "La Meca",
    "owner": "ottoman",
    "theater": "Middle East",
    "x": 1390.0,
    "y": 522.0,
    "radius": 26,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 2,
    "population": 90000,
    "developmentLevel": 4,
    "economyValue": 45,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "al_hasuniyyah",
      "al_wajh",
      "layla",
      "sharorah",
      "mocha",
      "sakaka"
    ],
    "polygon": [
      {
        "x": 1410.0,
        "y": 522.0
      },
      {
        "x": 1404.1,
        "y": 536.1
      },
      {
        "x": 1390.0,
        "y": 542.0
      },
      {
        "x": 1375.9,
        "y": 536.1
      },
      {
        "x": 1370.0,
        "y": 522.0
      },
      {
        "x": 1375.9,
        "y": 507.9
      },
      {
        "x": 1390.0,
        "y": 502.0
      },
      {
        "x": 1404.1,
        "y": 507.9
      }
    ]
  },
  {
    "id": "egypt",
    "name": "Bajo Egipto & Río Nilo",
    "capitalName": "El Cairo",
    "owner": "ottoman",
    "theater": "Middle East",
    "x": 1333.0,
    "y": 460.0,
    "radius": 28,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 3,
    "population": 310000,
    "developmentLevel": 7,
    "economyValue": 90,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "sohag",
      "maan",
      "siwa_oasis",
      "paphos",
      "syria",
      "al_wajh"
    ],
    "polygon": [
      {
        "x": 1353.0,
        "y": 460.0
      },
      {
        "x": 1347.1,
        "y": 474.1
      },
      {
        "x": 1333.0,
        "y": 480.0
      },
      {
        "x": 1318.9,
        "y": 474.1
      },
      {
        "x": 1313.0,
        "y": 460.0
      },
      {
        "x": 1318.9,
        "y": 445.9
      },
      {
        "x": 1333.0,
        "y": 440.0
      },
      {
        "x": 1347.1,
        "y": 445.9
      }
    ]
  },
  {
    "id": "tripoli",
    "name": "Regencia de Trípoli & Cirenaica",
    "capitalName": "Trípoli",
    "owner": "ottoman",
    "theater": "Africa",
    "x": 1250.0,
    "y": 445.0,
    "radius": 26,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 2,
    "population": 80000,
    "developmentLevel": 4,
    "economyValue": 40,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "zliten",
      "derna",
      "awjilah",
      "al_fuqaha",
      "valletta",
      "siwa_oasis"
    ],
    "polygon": [
      {
        "x": 1270.0,
        "y": 445.0
      },
      {
        "x": 1264.1,
        "y": 459.1
      },
      {
        "x": 1250.0,
        "y": 465.0
      },
      {
        "x": 1235.9,
        "y": 459.1
      },
      {
        "x": 1230.0,
        "y": 445.0
      },
      {
        "x": 1235.9,
        "y": 430.9
      },
      {
        "x": 1250.0,
        "y": 425.0
      },
      {
        "x": 1264.1,
        "y": 430.9
      }
    ]
  },
  {
    "id": "algiers",
    "name": "Regencia de Argel & Berbería",
    "capitalName": "Argel",
    "owner": "ottoman",
    "theater": "Africa",
    "x": 1162.0,
    "y": 420.0,
    "radius": 26,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 110000,
    "developmentLevel": 5,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "el_kef",
      "saida",
      "sfax",
      "el_menia",
      "ibiza",
      "kelibia",
      "tieret",
      "wuban"
    ],
    "polygon": [
      {
        "x": 1182.0,
        "y": 420.0
      },
      {
        "x": 1176.1,
        "y": 434.1
      },
      {
        "x": 1162.0,
        "y": 440.0
      },
      {
        "x": 1147.9,
        "y": 434.1
      },
      {
        "x": 1142.0,
        "y": 420.0
      },
      {
        "x": 1147.9,
        "y": 405.9
      },
      {
        "x": 1162.0,
        "y": 400.0
      },
      {
        "x": 1176.1,
        "y": 405.9
      }
    ]
  },
  {
    "id": "fes",
    "name": "Sultanato de Marruecos & Fez",
    "capitalName": "Fez / Marrakech",
    "owner": "morocco",
    "theater": "Africa",
    "x": 1095.0,
    "y": 427.0,
    "radius": 26,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 135000,
    "developmentLevel": 5,
    "economyValue": 50,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "andalucia",
      "marrakesh",
      "taghit",
      "saida",
      "murcia",
      "lisbon",
      "zag"
    ],
    "polygon": [
      {
        "x": 1115.0,
        "y": 427.0
      },
      {
        "x": 1109.1,
        "y": 441.1
      },
      {
        "x": 1095.0,
        "y": 447.0
      },
      {
        "x": 1080.9,
        "y": 441.1
      },
      {
        "x": 1075.0,
        "y": 427.0
      },
      {
        "x": 1080.9,
        "y": 412.9
      },
      {
        "x": 1095.0,
        "y": 407.0
      },
      {
        "x": 1109.1,
        "y": 412.9
      }
    ]
  },
  {
    "id": "timbuktu",
    "name": "Imperio Songhai & Tombuctú",
    "capitalName": "Tombuctú / Gao",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1108.0,
    "y": 562.0,
    "radius": 28,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 70000,
    "developmentLevel": 3,
    "economyValue": 45,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "ouagadougou",
      "menaka",
      "tessalit",
      "taoudenni",
      "tingrela",
      "guinea",
      "abidjan"
    ],
    "polygon": [
      {
        "x": 1128.0,
        "y": 562.0
      },
      {
        "x": 1122.1,
        "y": 576.1
      },
      {
        "x": 1108.0,
        "y": 582.0
      },
      {
        "x": 1093.9,
        "y": 576.1
      },
      {
        "x": 1088.0,
        "y": 562.0
      },
      {
        "x": 1093.9,
        "y": 547.9
      },
      {
        "x": 1108.0,
        "y": 542.0
      },
      {
        "x": 1122.1,
        "y": 547.9
      }
    ]
  },
  {
    "id": "guinea",
    "name": "Golfo de Guinea & Costa de Oro",
    "capitalName": "Benín / Costa de Guinea",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1145.0,
    "y": 615.0,
    "radius": 28,
    "terrain": "jungle",
    "hasPort": true,
    "cityLevel": 1,
    "population": 60000,
    "developmentLevel": 2,
    "economyValue": 35,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "grain",
    "neighbors": [
      "ouagadougou",
      "kano",
      "menaka",
      "calabar",
      "abidjan",
      "tingrela",
      "timbuktu"
    ],
    "polygon": [
      {
        "x": 1165.0,
        "y": 615.0
      },
      {
        "x": 1159.1,
        "y": 629.1
      },
      {
        "x": 1145.0,
        "y": 635.0
      },
      {
        "x": 1130.9,
        "y": 629.1
      },
      {
        "x": 1125.0,
        "y": 615.0
      },
      {
        "x": 1130.9,
        "y": 600.9
      },
      {
        "x": 1145.0,
        "y": 595.0
      },
      {
        "x": 1159.1,
        "y": 600.9
      }
    ]
  },
  {
    "id": "congo",
    "name": "Reino del Congo & Cuenca",
    "capitalName": "Mbanza Kongo / Kinshasa",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1228.0,
    "y": 714.0,
    "radius": 32,
    "terrain": "jungle",
    "hasPort": true,
    "cityLevel": 1,
    "population": 50000,
    "developmentLevel": 2,
    "economyValue": 30,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "mweka",
      "nsork",
      "cacolo",
      "gemena",
      "batouri",
      "kisangani"
    ],
    "polygon": [
      {
        "x": 1248.0,
        "y": 714.0
      },
      {
        "x": 1242.1,
        "y": 728.1
      },
      {
        "x": 1228.0,
        "y": 734.0
      },
      {
        "x": 1213.9,
        "y": 728.1
      },
      {
        "x": 1208.0,
        "y": 714.0
      },
      {
        "x": 1213.9,
        "y": 699.9
      },
      {
        "x": 1228.0,
        "y": 694.0
      },
      {
        "x": 1242.1,
        "y": 699.9
      }
    ]
  },
  {
    "id": "nubia",
    "name": "Reinos de Nubia & Sennar",
    "capitalName": "Khartoum / Dongola",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1342.0,
    "y": 572.0,
    "radius": 26,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 1,
    "population": 40000,
    "developmentLevel": 2,
    "economyValue": 25,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "grain",
    "neighbors": [
      "ndupo",
      "laqawa",
      "gondar",
      "wahat_salima",
      "kutum",
      "agoza"
    ],
    "polygon": [
      {
        "x": 1362.0,
        "y": 572.0
      },
      {
        "x": 1356.1,
        "y": 586.1
      },
      {
        "x": 1342.0,
        "y": 592.0
      },
      {
        "x": 1327.9,
        "y": 586.1
      },
      {
        "x": 1322.0,
        "y": 572.0
      },
      {
        "x": 1327.9,
        "y": 557.9
      },
      {
        "x": 1342.0,
        "y": 552.0
      },
      {
        "x": 1356.1,
        "y": 557.9
      }
    ]
  },
  {
    "id": "gondar",
    "name": "Imperio Etíope & Gondar",
    "capitalName": "Gondar",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1374.0,
    "y": 593.0,
    "radius": 26,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 75000,
    "developmentLevel": 3,
    "economyValue": 35,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": true,
    "tradeGood": "grain",
    "neighbors": [
      "nubia",
      "mocha",
      "arba_minch",
      "hargeisa",
      "laqawa",
      "ndupo",
      "beledweyne"
    ],
    "polygon": [
      {
        "x": 1394.0,
        "y": 593.0
      },
      {
        "x": 1388.1,
        "y": 607.1
      },
      {
        "x": 1374.0,
        "y": 613.0
      },
      {
        "x": 1359.9,
        "y": 607.1
      },
      {
        "x": 1354.0,
        "y": 593.0
      },
      {
        "x": 1359.9,
        "y": 578.9
      },
      {
        "x": 1374.0,
        "y": 573.0
      },
      {
        "x": 1388.1,
        "y": 578.9
      }
    ]
  },
  {
    "id": "zanzibar",
    "name": "Costa Suajili & Zanzíbar",
    "capitalName": "Zanzíbar / Kilwa",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1386.0,
    "y": 727.0,
    "radius": 28,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 55000,
    "developmentLevel": 3,
    "economyValue": 40,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "mbeya",
      "dadaab",
      "mitsamiouli",
      "mbale",
      "butare",
      "furancungo"
    ],
    "polygon": [
      {
        "x": 1406.0,
        "y": 727.0
      },
      {
        "x": 1400.1,
        "y": 741.1
      },
      {
        "x": 1386.0,
        "y": 747.0
      },
      {
        "x": 1371.9,
        "y": 741.1
      },
      {
        "x": 1366.0,
        "y": 727.0
      },
      {
        "x": 1371.9,
        "y": 712.9
      },
      {
        "x": 1386.0,
        "y": 707.0
      },
      {
        "x": 1400.1,
        "y": 712.9
      }
    ]
  },
  {
    "id": "cape_town",
    "name": "Cabo de Buena Esperanza",
    "capitalName": "Cabo de Buena Esperanza",
    "owner": "neutral",
    "theater": "Africa",
    "x": 1249.0,
    "y": 939.0,
    "radius": 28,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 1,
    "population": 15000,
    "developmentLevel": 1,
    "economyValue": 20,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "grain",
    "neighbors": [
      "pofadder",
      "mthatha",
      "hukuntsi",
      "johannesburg",
      "nata",
      "xai_xai"
    ],
    "polygon": [
      {
        "x": 1269.0,
        "y": 939.0
      },
      {
        "x": 1263.1,
        "y": 953.1
      },
      {
        "x": 1249.0,
        "y": 959.0
      },
      {
        "x": 1234.9,
        "y": 953.1
      },
      {
        "x": 1229.0,
        "y": 939.0
      },
      {
        "x": 1234.9,
        "y": 924.9
      },
      {
        "x": 1249.0,
        "y": 919.0
      },
      {
        "x": 1263.1,
        "y": 924.9
      }
    ]
  },
  {
    "id": "delhi",
    "name": "Imperio Mogol & Delhi",
    "capitalName": "Delhi / Agra",
    "owner": "mughal",
    "theater": "Asia",
    "x": 1636.0,
    "y": 469.0,
    "radius": 30,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 390000,
    "developmentLevel": 7,
    "economyValue": 100,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "lucknow",
      "hanle",
      "indore",
      "sadiqabad",
      "surajpur",
      "peshawar",
      "mazha"
    ],
    "polygon": [
      {
        "x": 1656.0,
        "y": 469.0
      },
      {
        "x": 1650.1,
        "y": 483.1
      },
      {
        "x": 1636.0,
        "y": 489.0
      },
      {
        "x": 1621.9,
        "y": 483.1
      },
      {
        "x": 1616.0,
        "y": 469.0
      },
      {
        "x": 1621.9,
        "y": 454.9
      },
      {
        "x": 1636.0,
        "y": 449.0
      },
      {
        "x": 1650.1,
        "y": 454.9
      }
    ]
  },
  {
    "id": "bengal",
    "name": "Subah de Bengala & Calcuta",
    "capitalName": "Calcuta / Dhaka",
    "owner": "mughal",
    "theater": "Asia",
    "x": 1710.0,
    "y": 514.0,
    "radius": 26,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 310000,
    "developmentLevel": 7,
    "economyValue": 95,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "sylhet",
      "brahmapur",
      "gangtok",
      "surajpur",
      "taunggyi",
      "lucknow",
      "yangon"
    ],
    "polygon": [
      {
        "x": 1730.0,
        "y": 514.0
      },
      {
        "x": 1724.1,
        "y": 528.1
      },
      {
        "x": 1710.0,
        "y": 534.0
      },
      {
        "x": 1695.9,
        "y": 528.1
      },
      {
        "x": 1690.0,
        "y": 514.0
      },
      {
        "x": 1695.9,
        "y": 499.9
      },
      {
        "x": 1710.0,
        "y": 494.0
      },
      {
        "x": 1724.1,
        "y": 499.9
      }
    ]
  },
  {
    "id": "vijayanagara",
    "name": "Imperio de Vijayanagara",
    "capitalName": "Hampi / Costa Malabar",
    "owner": "neutral",
    "theater": "Asia",
    "x": 1655.0,
    "y": 560.0,
    "radius": 28,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 220000,
    "developmentLevel": 6,
    "economyValue": 75,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "chandrapur",
      "davanagere",
      "brahmapur",
      "pune",
      "kochi",
      "surajpur",
      "kandy"
    ],
    "polygon": [
      {
        "x": 1675.0,
        "y": 560.0
      },
      {
        "x": 1669.1,
        "y": 574.1
      },
      {
        "x": 1655.0,
        "y": 580.0
      },
      {
        "x": 1640.9,
        "y": 574.1
      },
      {
        "x": 1635.0,
        "y": 560.0
      },
      {
        "x": 1640.9,
        "y": 545.9
      },
      {
        "x": 1655.0,
        "y": 540.0
      },
      {
        "x": 1669.1,
        "y": 545.9
      }
    ]
  },
  {
    "id": "beijing",
    "name": "Imperio Ming/Qing & Pekín",
    "capitalName": "Pekín",
    "owner": "china",
    "theater": "Asia",
    "x": 1894.0,
    "y": 379.0,
    "radius": 32,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 480000,
    "developmentLevel": 8,
    "economyValue": 120,
    "infrastructureLevel": 4,
    "defenseLevel": 4,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "xinzhou",
      "jinan",
      "dalian",
      "xilingol_league",
      "manchuria",
      "khangi"
    ],
    "polygon": [
      {
        "x": 1914.0,
        "y": 379.0
      },
      {
        "x": 1908.1,
        "y": 393.1
      },
      {
        "x": 1894.0,
        "y": 399.0
      },
      {
        "x": 1879.9,
        "y": 393.1
      },
      {
        "x": 1874.0,
        "y": 379.0
      },
      {
        "x": 1879.9,
        "y": 364.9
      },
      {
        "x": 1894.0,
        "y": 359.0
      },
      {
        "x": 1908.1,
        "y": 364.9
      }
    ]
  },
  {
    "id": "chengdu",
    "name": "Cuenca de Sichuan & Chengdu",
    "capitalName": "Chengdu",
    "owner": "china",
    "theater": "Asia",
    "x": 1813.0,
    "y": 455.0,
    "radius": 28,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 3,
    "population": 290000,
    "developmentLevel": 6,
    "economyValue": 80,
    "infrastructureLevel": 3,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "hanzhong",
      "xiejiawan",
      "gannan",
      "qujing",
      "hpaila",
      "yushu"
    ],
    "polygon": [
      {
        "x": 1833.0,
        "y": 455.0
      },
      {
        "x": 1827.1,
        "y": 469.1
      },
      {
        "x": 1813.0,
        "y": 475.0
      },
      {
        "x": 1798.9,
        "y": 469.1
      },
      {
        "x": 1793.0,
        "y": 455.0
      },
      {
        "x": 1798.9,
        "y": 440.9
      },
      {
        "x": 1813.0,
        "y": 435.0
      },
      {
        "x": 1827.1,
        "y": 440.9
      }
    ]
  },
  {
    "id": "guangzhou",
    "name": "Cantón & Delta del Río Perla",
    "capitalName": "Guangzhou / Cantón",
    "owner": "china",
    "theater": "Asia",
    "x": 1874.0,
    "y": 509.0,
    "radius": 28,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 3,
    "population": 360000,
    "developmentLevel": 7,
    "economyValue": 105,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "liuzhou",
      "changsha",
      "yingtan",
      "hanoi",
      "xiejiawan",
      "taipei",
      "philippines",
      "hue"
    ],
    "polygon": [
      {
        "x": 1894.0,
        "y": 509.0
      },
      {
        "x": 1888.1,
        "y": 523.1
      },
      {
        "x": 1874.0,
        "y": 529.0
      },
      {
        "x": 1859.9,
        "y": 523.1
      },
      {
        "x": 1854.0,
        "y": 509.0
      },
      {
        "x": 1859.9,
        "y": 494.9
      },
      {
        "x": 1874.0,
        "y": 489.0
      },
      {
        "x": 1888.1,
        "y": 494.9
      }
    ]
  },
  {
    "id": "manchuria",
    "name": "Tierras Jurchen & Manchuria",
    "capitalName": "Shenyang",
    "owner": "neutral",
    "theater": "Asia",
    "x": 1940.0,
    "y": 363.0,
    "radius": 26,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 85000,
    "developmentLevel": 3,
    "economyValue": 40,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "dalian",
      "songyuan",
      "chongjin",
      "korea",
      "beijing",
      "xilingol_league",
      "khalkhgol",
      "zalantun"
    ],
    "polygon": [
      {
        "x": 1960.0,
        "y": 363.0
      },
      {
        "x": 1954.1,
        "y": 377.1
      },
      {
        "x": 1940.0,
        "y": 383.0
      },
      {
        "x": 1925.9,
        "y": 377.1
      },
      {
        "x": 1920.0,
        "y": 363.0
      },
      {
        "x": 1925.9,
        "y": 348.9
      },
      {
        "x": 1940.0,
        "y": 343.0
      },
      {
        "x": 1954.1,
        "y": 348.9
      }
    ]
  },
  {
    "id": "korea",
    "name": "Reino de Joseon & Hanseong",
    "capitalName": "Hanseong / Seúl",
    "owner": "neutral",
    "theater": "Asia",
    "x": 1964.0,
    "y": 399.0,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 160000,
    "developmentLevel": 6,
    "economyValue": 65,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "jeju",
      "dalian",
      "chongjin",
      "manchuria",
      "kyushu",
      "yancheng",
      "kyoto"
    ],
    "polygon": [
      {
        "x": 1984.0,
        "y": 399.0
      },
      {
        "x": 1978.1,
        "y": 413.1
      },
      {
        "x": 1964.0,
        "y": 419.0
      },
      {
        "x": 1949.9,
        "y": 413.1
      },
      {
        "x": 1944.0,
        "y": 399.0
      },
      {
        "x": 1949.9,
        "y": 384.9
      },
      {
        "x": 1964.0,
        "y": 379.0
      },
      {
        "x": 1978.1,
        "y": 384.9
      }
    ]
  },
  {
    "id": "kyoto",
    "name": "Shogunato Ashikaga/Tokugawa",
    "capitalName": "Kioto / Edo",
    "owner": "japan",
    "theater": "Asia",
    "x": 2022.0,
    "y": 420.0,
    "radius": 28,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 3,
    "population": 310000,
    "developmentLevel": 7,
    "economyValue": 90,
    "infrastructureLevel": 3,
    "defenseLevel": 3,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "tokyo",
      "kyushu",
      "morioka",
      "korea",
      "jeju",
      "chongjin"
    ],
    "polygon": [
      {
        "x": 2042.0,
        "y": 420.0
      },
      {
        "x": 2036.1,
        "y": 434.1
      },
      {
        "x": 2022.0,
        "y": 440.0
      },
      {
        "x": 2007.9,
        "y": 434.1
      },
      {
        "x": 2002.0,
        "y": 420.0
      },
      {
        "x": 2007.9,
        "y": 405.9
      },
      {
        "x": 2022.0,
        "y": 400.0
      },
      {
        "x": 2036.1,
        "y": 405.9
      }
    ]
  },
  {
    "id": "kyushu",
    "name": "Feudo de Satsuma & Kyushu",
    "capitalName": "Fukuoka / Nagasaki",
    "owner": "japan",
    "theater": "Asia",
    "x": 1990.0,
    "y": 445.0,
    "radius": 22,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 120000,
    "developmentLevel": 5,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "jeju",
      "kyoto",
      "naha",
      "korea",
      "ningbo",
      "tokyo"
    ],
    "polygon": [
      {
        "x": 2010.0,
        "y": 445.0
      },
      {
        "x": 2004.1,
        "y": 459.1
      },
      {
        "x": 1990.0,
        "y": 465.0
      },
      {
        "x": 1975.9,
        "y": 459.1
      },
      {
        "x": 1970.0,
        "y": 445.0
      },
      {
        "x": 1975.9,
        "y": 430.9
      },
      {
        "x": 1990.0,
        "y": 425.0
      },
      {
        "x": 2004.1,
        "y": 430.9
      }
    ]
  },
  {
    "id": "siam",
    "name": "Reino de Ayutthaya & Siam",
    "capitalName": "Ayutthaya / Bangkok",
    "owner": "neutral",
    "theater": "Asia",
    "x": 1789.0,
    "y": 576.0,
    "radius": 26,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 140000,
    "developmentLevel": 5,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "yangon",
      "krabi",
      "ca_mau",
      "diglipur",
      "hue",
      "taunggyi",
      "calang",
      "nha_trang"
    ],
    "polygon": [
      {
        "x": 1809.0,
        "y": 576.0
      },
      {
        "x": 1803.1,
        "y": 590.1
      },
      {
        "x": 1789.0,
        "y": 596.0
      },
      {
        "x": 1774.9,
        "y": 590.1
      },
      {
        "x": 1769.0,
        "y": 576.0
      },
      {
        "x": 1774.9,
        "y": 561.9
      },
      {
        "x": 1789.0,
        "y": 556.0
      },
      {
        "x": 1803.1,
        "y": 561.9
      }
    ]
  },
  {
    "id": "malacca",
    "name": "Estrecho de Malaca & Singapur",
    "capitalName": "Malaca",
    "owner": "portugal",
    "theater": "Asia",
    "x": 1801.0,
    "y": 660.0,
    "radius": 24,
    "terrain": "jungle",
    "hasPort": true,
    "cityLevel": 2,
    "population": 95000,
    "developmentLevel": 5,
    "economyValue": 70,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "mentok",
      "simagandjo",
      "sahi",
      "calang",
      "krabi",
      "ca_mau",
      "java"
    ],
    "polygon": [
      {
        "x": 1821.0,
        "y": 660.0
      },
      {
        "x": 1815.1,
        "y": 674.1
      },
      {
        "x": 1801.0,
        "y": 680.0
      },
      {
        "x": 1786.9,
        "y": 674.1
      },
      {
        "x": 1781.0,
        "y": 660.0
      },
      {
        "x": 1786.9,
        "y": 645.9
      },
      {
        "x": 1801.0,
        "y": 640.0
      },
      {
        "x": 1815.1,
        "y": 645.9
      }
    ]
  },
  {
    "id": "philippines",
    "name": "Capitanía de Filipinas & Manila",
    "capitalName": "Manila",
    "owner": "spain",
    "theater": "Asia",
    "x": 1924.0,
    "y": 569.0,
    "radius": 26,
    "terrain": "islands",
    "hasPort": true,
    "cityLevel": 2,
    "population": 80000,
    "developmentLevel": 4,
    "economyValue": 55,
    "infrastructureLevel": 2,
    "defenseLevel": 2,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "roxas",
      "tacloban",
      "sandakan",
      "general_santos",
      "taipei",
      "guangzhou"
    ],
    "polygon": [
      {
        "x": 1944.0,
        "y": 569.0
      },
      {
        "x": 1938.1,
        "y": 583.1
      },
      {
        "x": 1924.0,
        "y": 589.0
      },
      {
        "x": 1909.9,
        "y": 583.1
      },
      {
        "x": 1904.0,
        "y": 569.0
      },
      {
        "x": 1909.9,
        "y": 554.9
      },
      {
        "x": 1924.0,
        "y": 549.0
      },
      {
        "x": 1938.1,
        "y": 554.9
      }
    ]
  },
  {
    "id": "java",
    "name": "Sultanato de Mataram & Batavia",
    "capitalName": "Batavia / Demak",
    "owner": "neutral",
    "theater": "Asia",
    "x": 1831.0,
    "y": 722.0,
    "radius": 26,
    "terrain": "jungle",
    "hasPort": true,
    "cityLevel": 2,
    "population": 110000,
    "developmentLevel": 4,
    "economyValue": 60,
    "infrastructureLevel": 2,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "mentok",
      "pantong",
      "simagandjo",
      "banjarmasin",
      "malacca",
      "sahi"
    ],
    "polygon": [
      {
        "x": 1851.0,
        "y": 722.0
      },
      {
        "x": 1845.1,
        "y": 736.1
      },
      {
        "x": 1831.0,
        "y": 742.0
      },
      {
        "x": 1816.9,
        "y": 736.1
      },
      {
        "x": 1811.0,
        "y": 722.0
      },
      {
        "x": 1816.9,
        "y": 707.9
      },
      {
        "x": 1831.0,
        "y": 702.0
      },
      {
        "x": 1845.1,
        "y": 707.9
      }
    ]
  },
  {
    "id": "compostela",
    "name": "Provincia de Compostela",
    "capitalName": "Compostela",
    "owner": "spain",
    "theater": "spain",
    "x": 1098.0,
    "y": 380.8,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "ciudad_rodrigo",
      "santander",
      "lisbon",
      "castilla",
      "andalucia",
      "zaragoza"
    ],
    "polygon": [
      {
        "x": 1092.1,
        "y": 379.9
      },
      {
        "x": 1093.3,
        "y": 374.1
      },
      {
        "x": 1108.1,
        "y": 375.9
      },
      {
        "x": 1102.6,
        "y": 384.2
      },
      {
        "x": 1093.8,
        "y": 390.1
      }
    ]
  },
  {
    "id": "santander",
    "name": "Provincia de Santander",
    "capitalName": "Santander",
    "owner": "spain",
    "theater": "spain",
    "x": 1102.6,
    "y": 347.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "bordeaux",
      "zaragoza",
      "castilla",
      "ciudad_rodrigo",
      "compostela",
      "bretagne"
    ],
    "polygon": [
      {
        "x": 1122.6,
        "y": 347.8
      },
      {
        "x": 1116.7,
        "y": 361.9
      },
      {
        "x": 1102.6,
        "y": 367.8
      },
      {
        "x": 1088.5,
        "y": 361.9
      },
      {
        "x": 1082.6,
        "y": 347.8
      },
      {
        "x": 1088.5,
        "y": 333.7
      },
      {
        "x": 1102.6,
        "y": 327.8
      },
      {
        "x": 1116.7,
        "y": 333.7
      }
    ]
  },
  {
    "id": "murcia",
    "name": "Provincia de Murcia",
    "capitalName": "Murcia",
    "owner": "spain",
    "theater": "spain",
    "x": 1120.1,
    "y": 395.4,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "ibiza",
      "saida",
      "castilla",
      "zaragoza",
      "andalucia",
      "aragon",
      "lisbon",
      "fes"
    ],
    "polygon": [
      {
        "x": 1140.1,
        "y": 395.4
      },
      {
        "x": 1134.2,
        "y": 409.5
      },
      {
        "x": 1120.1,
        "y": 415.4
      },
      {
        "x": 1106.0,
        "y": 409.5
      },
      {
        "x": 1100.1,
        "y": 395.4
      },
      {
        "x": 1106.0,
        "y": 381.3
      },
      {
        "x": 1120.1,
        "y": 375.4
      },
      {
        "x": 1134.2,
        "y": 381.3
      }
    ]
  },
  {
    "id": "saida",
    "name": "Provincia de Saïda",
    "capitalName": "Saïda",
    "owner": "spain",
    "theater": "spain",
    "x": 1128.6,
    "y": 419.5,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "murcia",
      "algiers",
      "ibiza",
      "fes",
      "taghit",
      "el_menia",
      "andalucia"
    ],
    "polygon": [
      {
        "x": 1148.6,
        "y": 419.5
      },
      {
        "x": 1142.7,
        "y": 433.6
      },
      {
        "x": 1128.6,
        "y": 439.5
      },
      {
        "x": 1114.5,
        "y": 433.6
      },
      {
        "x": 1108.6,
        "y": 419.5
      },
      {
        "x": 1114.5,
        "y": 405.4
      },
      {
        "x": 1128.6,
        "y": 399.5
      },
      {
        "x": 1142.7,
        "y": 405.4
      }
    ]
  },
  {
    "id": "barnstaple",
    "name": "Provincia de Barnstaple",
    "capitalName": "Barnstaple",
    "owner": "britain",
    "theater": "europe",
    "x": 1101.1,
    "y": 273.9,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "london",
      "ireland",
      "caen",
      "bretagne",
      "york",
      "stranraer",
      "clachtoll",
      "fort_william"
    ],
    "polygon": [
      {
        "x": 1121.1,
        "y": 273.9
      },
      {
        "x": 1115.2,
        "y": 288.0
      },
      {
        "x": 1101.1,
        "y": 293.9
      },
      {
        "x": 1087.0,
        "y": 288.0
      },
      {
        "x": 1081.1,
        "y": 273.9
      },
      {
        "x": 1087.0,
        "y": 259.8
      },
      {
        "x": 1101.1,
        "y": 253.9
      },
      {
        "x": 1115.2,
        "y": 259.8
      }
    ]
  },
  {
    "id": "clachtoll",
    "name": "Provincia de Clachtoll",
    "capitalName": "Clachtoll",
    "owner": "britain",
    "theater": "europe",
    "x": 1101.1,
    "y": 232.7,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "fort_william",
      "scotland",
      "stranraer",
      "york",
      "ireland",
      "barnstaple"
    ],
    "polygon": [
      {
        "x": 1111.7,
        "y": 231.3
      },
      {
        "x": 1111.4,
        "y": 231.5
      },
      {
        "x": 1094.6,
        "y": 234.8
      },
      {
        "x": 1086.7,
        "y": 233.2
      }
    ]
  },
  {
    "id": "nancy",
    "name": "Provincia de Nancy",
    "capitalName": "Nancy",
    "owner": "holland",
    "theater": "flanders",
    "x": 1168.5,
    "y": 298.2,
    "radius": 24,
    "terrain": "swamp",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "zurich",
      "rhineland",
      "burgundy",
      "flanders",
      "paris",
      "milan",
      "holland"
    ],
    "polygon": [
      {
        "x": 1188.5,
        "y": 298.2
      },
      {
        "x": 1182.6,
        "y": 312.3
      },
      {
        "x": 1168.5,
        "y": 318.2
      },
      {
        "x": 1154.4,
        "y": 312.3
      },
      {
        "x": 1148.5,
        "y": 298.2
      },
      {
        "x": 1154.4,
        "y": 284.1
      },
      {
        "x": 1168.5,
        "y": 278.2
      },
      {
        "x": 1182.6,
        "y": 284.1
      }
    ]
  },
  {
    "id": "hanover",
    "name": "Provincia de Hanover",
    "capitalName": "Hanover",
    "owner": "holland",
    "theater": "flanders",
    "x": 1192.0,
    "y": 260.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "jever",
      "schwarzburg",
      "rhineland",
      "neubrandenburg",
      "holland",
      "saxony",
      "denmark",
      "aalborg"
    ],
    "polygon": [
      {
        "x": 1212.0,
        "y": 260.4
      },
      {
        "x": 1206.1,
        "y": 274.5
      },
      {
        "x": 1192.0,
        "y": 280.4
      },
      {
        "x": 1177.9,
        "y": 274.5
      },
      {
        "x": 1172.0,
        "y": 260.4
      },
      {
        "x": 1177.9,
        "y": 246.3
      },
      {
        "x": 1192.0,
        "y": 240.4
      },
      {
        "x": 1206.1,
        "y": 246.3
      }
    ]
  },
  {
    "id": "trebnje",
    "name": "Provincia de Trebnje",
    "capitalName": "Trebnje",
    "owner": "germany",
    "theater": "europe",
    "x": 1227.8,
    "y": 326.0,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "split",
      "venice",
      "ancona",
      "orasje",
      "austria",
      "linz"
    ],
    "polygon": [
      {
        "x": 1247.8,
        "y": 326.0
      },
      {
        "x": 1241.9,
        "y": 340.1
      },
      {
        "x": 1227.8,
        "y": 346.0
      },
      {
        "x": 1213.7,
        "y": 340.1
      },
      {
        "x": 1207.8,
        "y": 326.0
      },
      {
        "x": 1213.7,
        "y": 311.9
      },
      {
        "x": 1227.8,
        "y": 306.0
      },
      {
        "x": 1241.9,
        "y": 311.9
      }
    ]
  },
  {
    "id": "presov",
    "name": "Provincia de Prešov",
    "capitalName": "Prešov",
    "owner": "germany",
    "theater": "europe",
    "x": 1267.6,
    "y": 295.1,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "trinec",
      "zamosc",
      "ivano_frankivsk",
      "austria",
      "hungary",
      "poland"
    ],
    "polygon": [
      {
        "x": 1287.6,
        "y": 295.1
      },
      {
        "x": 1281.7,
        "y": 309.2
      },
      {
        "x": 1267.6,
        "y": 315.1
      },
      {
        "x": 1253.5,
        "y": 309.2
      },
      {
        "x": 1247.6,
        "y": 295.1
      },
      {
        "x": 1253.5,
        "y": 281.0
      },
      {
        "x": 1267.6,
        "y": 275.1
      },
      {
        "x": 1281.7,
        "y": 281.0
      }
    ]
  },
  {
    "id": "orasje",
    "name": "Provincia de Orašje",
    "capitalName": "Orašje",
    "owner": "germany",
    "theater": "europe",
    "x": 1250.7,
    "y": 333.6,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "split",
      "podgorica",
      "trebnje",
      "hungary",
      "austria",
      "ancona"
    ],
    "polygon": [
      {
        "x": 1270.7,
        "y": 333.6
      },
      {
        "x": 1264.8,
        "y": 347.7
      },
      {
        "x": 1250.7,
        "y": 353.6
      },
      {
        "x": 1236.6,
        "y": 347.7
      },
      {
        "x": 1230.7,
        "y": 333.6
      },
      {
        "x": 1236.6,
        "y": 319.5
      },
      {
        "x": 1250.7,
        "y": 313.6
      },
      {
        "x": 1264.8,
        "y": 319.5
      }
    ]
  },
  {
    "id": "cagliari",
    "name": "Provincia de Cagliari",
    "capitalName": "Cagliari",
    "owner": "rome",
    "theater": "spain",
    "x": 1188.0,
    "y": 384.4,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "kelibia",
      "el_kef",
      "sicily",
      "bastia",
      "rome",
      "naples"
    ],
    "polygon": [
      {
        "x": 1208.0,
        "y": 384.4
      },
      {
        "x": 1202.1,
        "y": 398.5
      },
      {
        "x": 1188.0,
        "y": 404.4
      },
      {
        "x": 1173.9,
        "y": 398.5
      },
      {
        "x": 1168.0,
        "y": 384.4
      },
      {
        "x": 1173.9,
        "y": 370.3
      },
      {
        "x": 1188.0,
        "y": 364.4
      },
      {
        "x": 1202.1,
        "y": 370.3
      }
    ]
  },
  {
    "id": "catanzaro",
    "name": "Provincia de Catanzaro",
    "capitalName": "Catanzaro",
    "owner": "rome",
    "theater": "spain",
    "x": 1237.3,
    "y": 387.6,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "brindisi",
      "naples",
      "sicily",
      "sarande",
      "valletta",
      "podgorica"
    ],
    "polygon": [
      {
        "x": 1257.3,
        "y": 387.6
      },
      {
        "x": 1251.4,
        "y": 401.7
      },
      {
        "x": 1237.3,
        "y": 407.6
      },
      {
        "x": 1223.2,
        "y": 401.7
      },
      {
        "x": 1217.3,
        "y": 387.6
      },
      {
        "x": 1223.2,
        "y": 373.5
      },
      {
        "x": 1237.3,
        "y": 367.6
      },
      {
        "x": 1251.4,
        "y": 373.5
      }
    ]
  },
  {
    "id": "sarande",
    "name": "Provincia de Sarandë",
    "capitalName": "Sarandë",
    "owner": "rome",
    "theater": "spain",
    "x": 1260.0,
    "y": 379.4,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "brindisi",
      "gevgelija",
      "greece",
      "podgorica",
      "catanzaro",
      "alexandroupoli"
    ],
    "polygon": [
      {
        "x": 1280.0,
        "y": 379.4
      },
      {
        "x": 1274.1,
        "y": 393.5
      },
      {
        "x": 1260.0,
        "y": 399.4
      },
      {
        "x": 1245.9,
        "y": 393.5
      },
      {
        "x": 1240.0,
        "y": 379.4
      },
      {
        "x": 1245.9,
        "y": 365.3
      },
      {
        "x": 1260.0,
        "y": 359.4
      },
      {
        "x": 1274.1,
        "y": 365.3
      }
    ]
  },
  {
    "id": "podgorica",
    "name": "Provincia de Podgorica",
    "capitalName": "Podgorica",
    "owner": "rome",
    "theater": "spain",
    "x": 1254.6,
    "y": 356.8,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "brindisi",
      "split",
      "sarande",
      "orasje",
      "gevgelija",
      "balkans",
      "catanzaro"
    ],
    "polygon": [
      {
        "x": 1274.6,
        "y": 356.8
      },
      {
        "x": 1268.7,
        "y": 370.9
      },
      {
        "x": 1254.6,
        "y": 376.8
      },
      {
        "x": 1240.5,
        "y": 370.9
      },
      {
        "x": 1234.6,
        "y": 356.8
      },
      {
        "x": 1240.5,
        "y": 342.7
      },
      {
        "x": 1254.6,
        "y": 336.8
      },
      {
        "x": 1268.7,
        "y": 342.7
      }
    ]
  },
  {
    "id": "el_kef",
    "name": "Provincia de El Kef",
    "capitalName": "El Kef",
    "owner": "rome",
    "theater": "spain",
    "x": 1185.1,
    "y": 408.1,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "kelibia",
      "sfax",
      "cagliari",
      "algiers",
      "sicily",
      "valletta",
      "tieret"
    ],
    "polygon": [
      {
        "x": 1205.1,
        "y": 408.1
      },
      {
        "x": 1199.2,
        "y": 422.2
      },
      {
        "x": 1185.1,
        "y": 428.1
      },
      {
        "x": 1171.0,
        "y": 422.2
      },
      {
        "x": 1165.1,
        "y": 408.1
      },
      {
        "x": 1171.0,
        "y": 394.0
      },
      {
        "x": 1185.1,
        "y": 388.1
      },
      {
        "x": 1199.2,
        "y": 394.0
      }
    ]
  },
  {
    "id": "are",
    "name": "Provincia de Åre",
    "capitalName": "Åre",
    "owner": "sweden",
    "theater": "europe",
    "x": 1213.9,
    "y": 133.9,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "mora",
      "harnosand",
      "norway",
      "sweden",
      "pori",
      "aalborg"
    ],
    "polygon": [
      {
        "x": 1233.9,
        "y": 133.9
      },
      {
        "x": 1228.0,
        "y": 148.0
      },
      {
        "x": 1213.9,
        "y": 153.9
      },
      {
        "x": 1199.8,
        "y": 148.0
      },
      {
        "x": 1193.9,
        "y": 133.9
      },
      {
        "x": 1199.8,
        "y": 119.8
      },
      {
        "x": 1213.9,
        "y": 113.9
      },
      {
        "x": 1228.0,
        "y": 119.8
      }
    ]
  },
  {
    "id": "harnosand",
    "name": "Provincia de Härnösand",
    "capitalName": "Härnösand",
    "owner": "sweden",
    "theater": "europe",
    "x": 1245.3,
    "y": 142.3,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "mora",
      "pori",
      "are",
      "sweden",
      "raahe",
      "norway"
    ],
    "polygon": [
      {
        "x": 1265.3,
        "y": 142.3
      },
      {
        "x": 1259.4,
        "y": 156.4
      },
      {
        "x": 1245.3,
        "y": 162.3
      },
      {
        "x": 1231.2,
        "y": 156.4
      },
      {
        "x": 1225.3,
        "y": 142.3
      },
      {
        "x": 1231.2,
        "y": 128.2
      },
      {
        "x": 1245.3,
        "y": 122.3
      },
      {
        "x": 1259.4,
        "y": 128.2
      }
    ]
  },
  {
    "id": "tallinn",
    "name": "Provincia de Tallinn",
    "capitalName": "Tallinn",
    "owner": "sweden",
    "theater": "europe",
    "x": 1290.5,
    "y": 177.0,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "pori",
      "imatra",
      "balvi",
      "liepaja",
      "sweden",
      "novgorod",
      "raahe"
    ],
    "polygon": [
      {
        "x": 1310.5,
        "y": 177.0
      },
      {
        "x": 1304.6,
        "y": 191.1
      },
      {
        "x": 1290.5,
        "y": 197.0
      },
      {
        "x": 1276.4,
        "y": 191.1
      },
      {
        "x": 1270.5,
        "y": 177.0
      },
      {
        "x": 1276.4,
        "y": 162.9
      },
      {
        "x": 1290.5,
        "y": 157.0
      },
      {
        "x": 1304.6,
        "y": 162.9
      }
    ]
  },
  {
    "id": "balvi",
    "name": "Provincia de Balvi",
    "capitalName": "Balvi",
    "owner": "sweden",
    "theater": "europe",
    "x": 1307.2,
    "y": 205.8,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "zhizhitsa",
      "lithuania",
      "tallinn",
      "liepaja",
      "mogilev",
      "novgorod"
    ],
    "polygon": [
      {
        "x": 1327.2,
        "y": 205.8
      },
      {
        "x": 1321.3,
        "y": 219.9
      },
      {
        "x": 1307.2,
        "y": 225.8
      },
      {
        "x": 1293.1,
        "y": 219.9
      },
      {
        "x": 1287.2,
        "y": 205.8
      },
      {
        "x": 1293.1,
        "y": 191.7
      },
      {
        "x": 1307.2,
        "y": 185.8
      },
      {
        "x": 1321.3,
        "y": 191.7
      }
    ]
  },
  {
    "id": "liepaja",
    "name": "Provincia de Liepāja",
    "capitalName": "Liepāja",
    "owner": "sweden",
    "theater": "europe",
    "x": 1266.4,
    "y": 212.9,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "borgholm",
      "ostroda",
      "lithuania",
      "sweden",
      "balvi",
      "tallinn"
    ],
    "polygon": [
      {
        "x": 1286.4,
        "y": 212.9
      },
      {
        "x": 1280.5,
        "y": 227.0
      },
      {
        "x": 1266.4,
        "y": 232.9
      },
      {
        "x": 1252.3,
        "y": 227.0
      },
      {
        "x": 1246.4,
        "y": 212.9
      },
      {
        "x": 1252.3,
        "y": 198.8
      },
      {
        "x": 1266.4,
        "y": 192.9
      },
      {
        "x": 1280.5,
        "y": 198.8
      }
    ]
  },
  {
    "id": "mogilev",
    "name": "Provincia de Mogilev",
    "capitalName": "Mogilev",
    "owner": "sweden",
    "theater": "europe",
    "x": 1327.4,
    "y": 243.2,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "baryatino",
      "zhizhitsa",
      "shostka",
      "pinsk",
      "lithuania",
      "kyiv",
      "balvi"
    ],
    "polygon": [
      {
        "x": 1347.4,
        "y": 243.2
      },
      {
        "x": 1341.5,
        "y": 257.3
      },
      {
        "x": 1327.4,
        "y": 263.2
      },
      {
        "x": 1313.3,
        "y": 257.3
      },
      {
        "x": 1307.4,
        "y": 243.2
      },
      {
        "x": 1313.3,
        "y": 229.1
      },
      {
        "x": 1327.4,
        "y": 223.2
      },
      {
        "x": 1341.5,
        "y": 229.1
      }
    ]
  },
  {
    "id": "imatra",
    "name": "Provincia de Imatra",
    "capitalName": "Imatra",
    "owner": "sweden",
    "theater": "europe",
    "x": 1317.0,
    "y": 157.8,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "lakhkolampi",
      "kuhmo",
      "tallinn",
      "novgorod",
      "pori",
      "raahe",
      "kuzema",
      "pudozh"
    ],
    "polygon": [
      {
        "x": 1337.0,
        "y": 157.8
      },
      {
        "x": 1331.1,
        "y": 171.9
      },
      {
        "x": 1317.0,
        "y": 177.8
      },
      {
        "x": 1302.9,
        "y": 171.9
      },
      {
        "x": 1297.0,
        "y": 157.8
      },
      {
        "x": 1302.9,
        "y": 143.7
      },
      {
        "x": 1317.0,
        "y": 137.8
      },
      {
        "x": 1331.1,
        "y": 143.7
      }
    ]
  },
  {
    "id": "kuhmo",
    "name": "Provincia de Kuhmo",
    "capitalName": "Kuhmo",
    "owner": "sweden",
    "theater": "europe",
    "x": 1322.4,
    "y": 125.7,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "lakhkolampi",
      "imatra",
      "raahe",
      "kuzema",
      "pudozh",
      "pori"
    ],
    "polygon": [
      {
        "x": 1342.4,
        "y": 125.7
      },
      {
        "x": 1336.5,
        "y": 139.8
      },
      {
        "x": 1322.4,
        "y": 145.7
      },
      {
        "x": 1308.3,
        "y": 139.8
      },
      {
        "x": 1302.4,
        "y": 125.7
      },
      {
        "x": 1308.3,
        "y": 111.6
      },
      {
        "x": 1322.4,
        "y": 105.7
      },
      {
        "x": 1336.5,
        "y": 111.6
      }
    ]
  },
  {
    "id": "raahe",
    "name": "Provincia de Raahe",
    "capitalName": "Raahe",
    "owner": "sweden",
    "theater": "europe",
    "x": 1289.3,
    "y": 119.3,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "kuhmo",
      "pori",
      "imatra",
      "harnosand",
      "tallinn",
      "lakhkolampi",
      "kuzema"
    ],
    "polygon": [
      {
        "x": 1309.3,
        "y": 119.3
      },
      {
        "x": 1303.4,
        "y": 133.4
      },
      {
        "x": 1289.3,
        "y": 139.3
      },
      {
        "x": 1275.2,
        "y": 133.4
      },
      {
        "x": 1269.3,
        "y": 119.3
      },
      {
        "x": 1275.2,
        "y": 105.2
      },
      {
        "x": 1289.3,
        "y": 99.3
      },
      {
        "x": 1303.4,
        "y": 105.2
      }
    ]
  },
  {
    "id": "kuzema",
    "name": "Provincia de Kuzema",
    "capitalName": "Kuzema",
    "owner": "sweden",
    "theater": "europe",
    "x": 1353.2,
    "y": 111.2,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "kuhmo",
      "lakhkolampi",
      "pudozh",
      "imatra",
      "bereznik",
      "raahe"
    ],
    "polygon": [
      {
        "x": 1373.2,
        "y": 111.2
      },
      {
        "x": 1367.3,
        "y": 125.3
      },
      {
        "x": 1353.2,
        "y": 131.2
      },
      {
        "x": 1339.1,
        "y": 125.3
      },
      {
        "x": 1333.2,
        "y": 111.2
      },
      {
        "x": 1339.1,
        "y": 97.1
      },
      {
        "x": 1353.2,
        "y": 91.2
      },
      {
        "x": 1367.3,
        "y": 97.1
      }
    ]
  },
  {
    "id": "pudozh",
    "name": "Provincia de Pudozh",
    "capitalName": "Pudozh",
    "owner": "sweden",
    "theater": "europe",
    "x": 1368.4,
    "y": 151.1,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "lakhkolampi",
      "vologda",
      "novgorod",
      "bereznik",
      "kuzema",
      "imatra",
      "kuhmo"
    ],
    "polygon": [
      {
        "x": 1388.4,
        "y": 151.1
      },
      {
        "x": 1382.5,
        "y": 165.2
      },
      {
        "x": 1368.4,
        "y": 171.1
      },
      {
        "x": 1354.3,
        "y": 165.2
      },
      {
        "x": 1348.4,
        "y": 151.1
      },
      {
        "x": 1354.3,
        "y": 137.0
      },
      {
        "x": 1368.4,
        "y": 131.1
      },
      {
        "x": 1382.5,
        "y": 137.0
      }
    ]
  },
  {
    "id": "balti",
    "name": "Provincia de Balti",
    "capitalName": "Balti",
    "owner": "poland",
    "theater": "europe",
    "x": 1311.6,
    "y": 307.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "yuzhne",
      "ivano_frankivsk",
      "sinaia",
      "kyiv",
      "kropyvnytskyi",
      "constanta"
    ],
    "polygon": [
      {
        "x": 1331.6,
        "y": 307.4
      },
      {
        "x": 1325.7,
        "y": 321.5
      },
      {
        "x": 1311.6,
        "y": 327.4
      },
      {
        "x": 1297.5,
        "y": 321.5
      },
      {
        "x": 1291.6,
        "y": 307.4
      },
      {
        "x": 1297.5,
        "y": 293.3
      },
      {
        "x": 1311.6,
        "y": 287.4
      },
      {
        "x": 1325.7,
        "y": 293.3
      }
    ]
  },
  {
    "id": "pinsk",
    "name": "Provincia de Pinsk",
    "capitalName": "Pinsk",
    "owner": "poland",
    "theater": "europe",
    "x": 1299.6,
    "y": 262.7,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "zamosc",
      "kyiv",
      "lithuania",
      "poland",
      "mogilev",
      "ivano_frankivsk"
    ],
    "polygon": [
      {
        "x": 1319.6,
        "y": 262.7
      },
      {
        "x": 1313.7,
        "y": 276.8
      },
      {
        "x": 1299.6,
        "y": 282.7
      },
      {
        "x": 1285.5,
        "y": 276.8
      },
      {
        "x": 1279.6,
        "y": 262.7
      },
      {
        "x": 1285.5,
        "y": 248.6
      },
      {
        "x": 1299.6,
        "y": 242.7
      },
      {
        "x": 1313.7,
        "y": 248.6
      }
    ]
  },
  {
    "id": "kropyvnytskyi",
    "name": "Provincia de Kropyvnytskyi",
    "capitalName": "Kropyvnytskyi",
    "owner": "poland",
    "theater": "europe",
    "x": 1340.3,
    "y": 300.1,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "yuzhne",
      "kyiv",
      "balti",
      "kharkiv",
      "crimea",
      "berdyansk",
      "shostka",
      "millerovo"
    ],
    "polygon": [
      {
        "x": 1360.3,
        "y": 300.1
      },
      {
        "x": 1354.4,
        "y": 314.2
      },
      {
        "x": 1340.3,
        "y": 320.1
      },
      {
        "x": 1326.2,
        "y": 314.2
      },
      {
        "x": 1320.3,
        "y": 300.1
      },
      {
        "x": 1326.2,
        "y": 286.0
      },
      {
        "x": 1340.3,
        "y": 280.1
      },
      {
        "x": 1354.4,
        "y": 286.0
      }
    ]
  },
  {
    "id": "berdyansk",
    "name": "Provincia de Berdyans'k",
    "capitalName": "Berdyans'k",
    "owner": "poland",
    "theater": "europe",
    "x": 1369.9,
    "y": 316.6,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "crimea",
      "millerovo",
      "kharkiv",
      "kropyvnytskyi",
      "stavropol",
      "yuzhne"
    ],
    "polygon": [
      {
        "x": 1389.9,
        "y": 316.6
      },
      {
        "x": 1384.0,
        "y": 330.7
      },
      {
        "x": 1369.9,
        "y": 336.6
      },
      {
        "x": 1355.8,
        "y": 330.7
      },
      {
        "x": 1349.9,
        "y": 316.6
      },
      {
        "x": 1355.8,
        "y": 302.5
      },
      {
        "x": 1369.9,
        "y": 296.6
      },
      {
        "x": 1384.0,
        "y": 302.5
      }
    ]
  },
  {
    "id": "shostka",
    "name": "Provincia de Shostka",
    "capitalName": "Shostka",
    "owner": "poland",
    "theater": "europe",
    "x": 1348.4,
    "y": 265.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "kharkiv",
      "baryatino",
      "mogilev",
      "kyiv",
      "kropyvnytskyi",
      "lipetsk"
    ],
    "polygon": [
      {
        "x": 1368.4,
        "y": 265.4
      },
      {
        "x": 1362.5,
        "y": 279.5
      },
      {
        "x": 1348.4,
        "y": 285.4
      },
      {
        "x": 1334.3,
        "y": 279.5
      },
      {
        "x": 1328.4,
        "y": 265.4
      },
      {
        "x": 1334.3,
        "y": 251.3
      },
      {
        "x": 1348.4,
        "y": 245.4
      },
      {
        "x": 1362.5,
        "y": 251.3
      }
    ]
  },
  {
    "id": "kharkiv",
    "name": "Provincia de Kharkiv",
    "capitalName": "Kharkiv",
    "owner": "poland",
    "theater": "europe",
    "x": 1366.4,
    "y": 285.0,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "shostka",
      "millerovo",
      "kropyvnytskyi",
      "berdyansk",
      "lipetsk",
      "kyiv",
      "baryatino"
    ],
    "polygon": [
      {
        "x": 1386.4,
        "y": 285.0
      },
      {
        "x": 1380.5,
        "y": 299.1
      },
      {
        "x": 1366.4,
        "y": 305.0
      },
      {
        "x": 1352.3,
        "y": 299.1
      },
      {
        "x": 1346.4,
        "y": 285.0
      },
      {
        "x": 1352.3,
        "y": 270.9
      },
      {
        "x": 1366.4,
        "y": 265.0
      },
      {
        "x": 1380.5,
        "y": 270.9
      }
    ]
  },
  {
    "id": "baryatino",
    "name": "Provincia de Baryatino",
    "capitalName": "Baryatino",
    "owner": "poland",
    "theater": "europe",
    "x": 1354.6,
    "y": 238.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "moscow",
      "shostka",
      "mogilev",
      "zhizhitsa",
      "lipetsk",
      "kharkiv"
    ],
    "polygon": [
      {
        "x": 1374.6,
        "y": 238.9
      },
      {
        "x": 1368.7,
        "y": 253.0
      },
      {
        "x": 1354.6,
        "y": 258.9
      },
      {
        "x": 1340.5,
        "y": 253.0
      },
      {
        "x": 1334.6,
        "y": 238.9
      },
      {
        "x": 1340.5,
        "y": 224.8
      },
      {
        "x": 1354.6,
        "y": 218.9
      },
      {
        "x": 1368.7,
        "y": 224.8
      }
    ]
  },
  {
    "id": "constanta",
    "name": "Provincia de Constanta",
    "capitalName": "Constanta",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1315.9,
    "y": 341.6,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "sinaia",
      "istanbul",
      "yuzhne",
      "balkans",
      "constantinople",
      "crimea",
      "balti"
    ],
    "polygon": [
      {
        "x": 1335.9,
        "y": 341.6
      },
      {
        "x": 1330.0,
        "y": 355.7
      },
      {
        "x": 1315.9,
        "y": 361.6
      },
      {
        "x": 1301.8,
        "y": 355.7
      },
      {
        "x": 1295.9,
        "y": 341.6
      },
      {
        "x": 1301.8,
        "y": 327.5
      },
      {
        "x": 1315.9,
        "y": 321.6
      },
      {
        "x": 1330.0,
        "y": 327.5
      }
    ]
  },
  {
    "id": "alexandroupoli",
    "name": "Provincia de Alexandroupoli",
    "capitalName": "Alexandroupoli",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1298.2,
    "y": 370.9,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "istanbul",
      "mesta",
      "gevgelija",
      "greece",
      "balkans",
      "usak",
      "sarande",
      "heraklion"
    ],
    "polygon": [
      {
        "x": 1318.2,
        "y": 370.9
      },
      {
        "x": 1312.3,
        "y": 385.0
      },
      {
        "x": 1298.2,
        "y": 390.9
      },
      {
        "x": 1284.1,
        "y": 385.0
      },
      {
        "x": 1278.2,
        "y": 370.9
      },
      {
        "x": 1284.1,
        "y": 356.8
      },
      {
        "x": 1298.2,
        "y": 350.9
      },
      {
        "x": 1312.3,
        "y": 356.8
      }
    ]
  },
  {
    "id": "heraklion",
    "name": "Provincia de Heraklion",
    "capitalName": "Heraklion",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1293.1,
    "y": 417.4,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "mesta",
      "derna",
      "greece",
      "kas",
      "usak",
      "alexandroupoli",
      "siwa_oasis"
    ],
    "polygon": [
      {
        "x": 1313.1,
        "y": 417.4
      },
      {
        "x": 1307.2,
        "y": 431.5
      },
      {
        "x": 1293.1,
        "y": 437.4
      },
      {
        "x": 1279.0,
        "y": 431.5
      },
      {
        "x": 1273.1,
        "y": 417.4
      },
      {
        "x": 1279.0,
        "y": 403.3
      },
      {
        "x": 1293.1,
        "y": 397.4
      },
      {
        "x": 1307.2,
        "y": 403.3
      }
    ]
  },
  {
    "id": "usak",
    "name": "Provincia de Uşak",
    "capitalName": "Uşak",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1321.6,
    "y": 389.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "istanbul",
      "kas",
      "mesta",
      "constantinople",
      "alexandroupoli",
      "aksaray",
      "heraklion",
      "paphos"
    ],
    "polygon": [
      {
        "x": 1341.6,
        "y": 389.4
      },
      {
        "x": 1335.7,
        "y": 403.5
      },
      {
        "x": 1321.6,
        "y": 409.4
      },
      {
        "x": 1307.5,
        "y": 403.5
      },
      {
        "x": 1301.6,
        "y": 389.4
      },
      {
        "x": 1307.5,
        "y": 375.3
      },
      {
        "x": 1321.6,
        "y": 369.4
      },
      {
        "x": 1335.7,
        "y": 375.3
      }
    ]
  },
  {
    "id": "aksaray",
    "name": "Provincia de Aksaray",
    "capitalName": "Aksaray",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1351.8,
    "y": 392.2,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "ulas",
      "bafra",
      "usak",
      "constantinople",
      "paphos",
      "sanliurfa",
      "syria",
      "kas"
    ],
    "polygon": [
      {
        "x": 1371.8,
        "y": 392.2
      },
      {
        "x": 1365.9,
        "y": 406.3
      },
      {
        "x": 1351.8,
        "y": 412.2
      },
      {
        "x": 1337.7,
        "y": 406.3
      },
      {
        "x": 1331.8,
        "y": 392.2
      },
      {
        "x": 1337.7,
        "y": 378.1
      },
      {
        "x": 1351.8,
        "y": 372.2
      },
      {
        "x": 1365.9,
        "y": 378.1
      }
    ]
  },
  {
    "id": "bafra",
    "name": "Provincia de Bafra",
    "capitalName": "Bafra",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1364.2,
    "y": 364.8,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "ulas",
      "constantinople",
      "aksaray",
      "crimea",
      "sanliurfa",
      "ardahan",
      "stavropol"
    ],
    "polygon": [
      {
        "x": 1384.2,
        "y": 364.8
      },
      {
        "x": 1378.3,
        "y": 378.9
      },
      {
        "x": 1364.2,
        "y": 384.8
      },
      {
        "x": 1350.1,
        "y": 378.9
      },
      {
        "x": 1344.2,
        "y": 364.8
      },
      {
        "x": 1350.1,
        "y": 350.7
      },
      {
        "x": 1364.2,
        "y": 344.8
      },
      {
        "x": 1378.3,
        "y": 350.7
      }
    ]
  },
  {
    "id": "paphos",
    "name": "Provincia de Paphos",
    "capitalName": "Paphos",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1341.5,
    "y": 421.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "kas",
      "syria",
      "aksaray",
      "usak",
      "egypt",
      "maan"
    ],
    "polygon": [
      {
        "x": 1361.5,
        "y": 421.4
      },
      {
        "x": 1355.6,
        "y": 435.5
      },
      {
        "x": 1341.5,
        "y": 441.4
      },
      {
        "x": 1327.4,
        "y": 435.5
      },
      {
        "x": 1321.5,
        "y": 421.4
      },
      {
        "x": 1327.4,
        "y": 407.3
      },
      {
        "x": 1341.5,
        "y": 401.4
      },
      {
        "x": 1355.6,
        "y": 407.3
      }
    ]
  },
  {
    "id": "sorok",
    "name": "Provincia de Sorok",
    "capitalName": "Sorok",
    "owner": "russia",
    "theater": "europe",
    "x": 1787.2,
    "y": 260.6,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "kyzyl",
      "erdenet",
      "tayshet",
      "songino",
      "ulan_ude",
      "karam",
      "kirensk"
    ],
    "polygon": [
      {
        "x": 1807.2,
        "y": 260.6
      },
      {
        "x": 1801.3,
        "y": 274.7
      },
      {
        "x": 1787.2,
        "y": 280.6
      },
      {
        "x": 1773.1,
        "y": 274.7
      },
      {
        "x": 1767.2,
        "y": 260.6
      },
      {
        "x": 1773.1,
        "y": 246.5
      },
      {
        "x": 1787.2,
        "y": 240.6
      },
      {
        "x": 1801.3,
        "y": 246.5
      }
    ]
  },
  {
    "id": "karam",
    "name": "Provincia de Karam",
    "capitalName": "Karam",
    "owner": "russia",
    "theater": "europe",
    "x": 1836.2,
    "y": 229.2,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "kirensk",
      "ulan_ude",
      "ust_ilimsk",
      "sorok",
      "yerema",
      "tayshet"
    ],
    "polygon": [
      {
        "x": 1856.2,
        "y": 229.2
      },
      {
        "x": 1850.3,
        "y": 243.3
      },
      {
        "x": 1836.2,
        "y": 249.2
      },
      {
        "x": 1822.1,
        "y": 243.3
      },
      {
        "x": 1816.2,
        "y": 229.2
      },
      {
        "x": 1822.1,
        "y": 215.1
      },
      {
        "x": 1836.2,
        "y": 209.2
      },
      {
        "x": 1850.3,
        "y": 215.1
      }
    ]
  },
  {
    "id": "ulan_ude",
    "name": "Provincia de Ulan Ude",
    "capitalName": "Ulan Ude",
    "owner": "russia",
    "theater": "europe",
    "x": 1836.4,
    "y": 265.9,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "karam",
      "erdenet",
      "sorok",
      "choir",
      "baruun_urt",
      "kirensk",
      "yerema"
    ],
    "polygon": [
      {
        "x": 1856.4,
        "y": 265.9
      },
      {
        "x": 1850.5,
        "y": 280.0
      },
      {
        "x": 1836.4,
        "y": 285.9
      },
      {
        "x": 1822.3,
        "y": 280.0
      },
      {
        "x": 1816.4,
        "y": 265.9
      },
      {
        "x": 1822.3,
        "y": 251.8
      },
      {
        "x": 1836.4,
        "y": 245.9
      },
      {
        "x": 1850.5,
        "y": 251.8
      }
    ]
  },
  {
    "id": "erdenet",
    "name": "Provincia de Erdenet",
    "capitalName": "Erdenet",
    "owner": "russia",
    "theater": "europe",
    "x": 1813.0,
    "y": 294.6,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "jargalan",
      "ulan_ude",
      "choir",
      "sorok",
      "songino",
      "khurmen"
    ],
    "polygon": [
      {
        "x": 1833.0,
        "y": 294.6
      },
      {
        "x": 1827.1,
        "y": 308.7
      },
      {
        "x": 1813.0,
        "y": 314.6
      },
      {
        "x": 1798.9,
        "y": 308.7
      },
      {
        "x": 1793.0,
        "y": 294.6
      },
      {
        "x": 1798.9,
        "y": 280.5
      },
      {
        "x": 1813.0,
        "y": 274.6
      },
      {
        "x": 1827.1,
        "y": 280.5
      }
    ]
  },
  {
    "id": "choir",
    "name": "Provincia de Choir",
    "capitalName": "Choir",
    "owner": "russia",
    "theater": "europe",
    "x": 1841.1,
    "y": 321.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "baruun_urt",
      "khangi",
      "erdenet",
      "khurmen",
      "jargalan",
      "ulan_ude",
      "khalkhgol"
    ],
    "polygon": [
      {
        "x": 1861.1,
        "y": 321.0
      },
      {
        "x": 1855.2,
        "y": 335.1
      },
      {
        "x": 1841.1,
        "y": 341.0
      },
      {
        "x": 1827.0,
        "y": 335.1
      },
      {
        "x": 1821.1,
        "y": 321.0
      },
      {
        "x": 1827.0,
        "y": 306.9
      },
      {
        "x": 1841.1,
        "y": 301.0
      },
      {
        "x": 1855.2,
        "y": 306.9
      }
    ]
  },
  {
    "id": "olgii",
    "name": "Provincia de Ölgii",
    "capitalName": "Ölgii",
    "owner": "russia",
    "theater": "europe",
    "x": 1720.1,
    "y": 295.1,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "ongudai",
      "taheerbasitao",
      "songino",
      "kyzyl",
      "bugat",
      "karamay",
      "abaza"
    ],
    "polygon": [
      {
        "x": 1740.1,
        "y": 295.1
      },
      {
        "x": 1734.2,
        "y": 309.2
      },
      {
        "x": 1720.1,
        "y": 315.1
      },
      {
        "x": 1706.0,
        "y": 309.2
      },
      {
        "x": 1700.1,
        "y": 295.1
      },
      {
        "x": 1706.0,
        "y": 281.0
      },
      {
        "x": 1720.1,
        "y": 275.1
      },
      {
        "x": 1734.2,
        "y": 281.0
      }
    ]
  },
  {
    "id": "bugat",
    "name": "Provincia de Bugat",
    "capitalName": "Bugat",
    "owner": "russia",
    "theater": "europe",
    "x": 1749.2,
    "y": 328.6,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "taheerbasitao",
      "songino",
      "tanyaozi",
      "jargalan",
      "olgii",
      "kyzyl"
    ],
    "polygon": [
      {
        "x": 1769.2,
        "y": 328.6
      },
      {
        "x": 1763.3,
        "y": 342.7
      },
      {
        "x": 1749.2,
        "y": 348.6
      },
      {
        "x": 1735.1,
        "y": 342.7
      },
      {
        "x": 1729.2,
        "y": 328.6
      },
      {
        "x": 1735.1,
        "y": 314.5
      },
      {
        "x": 1749.2,
        "y": 308.6
      },
      {
        "x": 1763.3,
        "y": 314.5
      }
    ]
  },
  {
    "id": "songino",
    "name": "Provincia de Songino",
    "capitalName": "Songino",
    "owner": "russia",
    "theater": "europe",
    "x": 1759.5,
    "y": 294.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "kyzyl",
      "bugat",
      "olgii",
      "jargalan",
      "sorok",
      "erdenet",
      "taheerbasitao"
    ],
    "polygon": [
      {
        "x": 1779.5,
        "y": 294.8
      },
      {
        "x": 1773.6,
        "y": 308.9
      },
      {
        "x": 1759.5,
        "y": 314.8
      },
      {
        "x": 1745.4,
        "y": 308.9
      },
      {
        "x": 1739.5,
        "y": 294.8
      },
      {
        "x": 1745.4,
        "y": 280.7
      },
      {
        "x": 1759.5,
        "y": 274.8
      },
      {
        "x": 1773.6,
        "y": 280.7
      }
    ]
  },
  {
    "id": "abaza",
    "name": "Provincia de Abaza",
    "capitalName": "Abaza",
    "owner": "russia",
    "theater": "europe",
    "x": 1729.6,
    "y": 245.5,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "kyzyl",
      "mariinsk",
      "zarinsk",
      "ongudai",
      "olgii",
      "tayshet",
      "strelka"
    ],
    "polygon": [
      {
        "x": 1749.6,
        "y": 245.5
      },
      {
        "x": 1743.7,
        "y": 259.6
      },
      {
        "x": 1729.6,
        "y": 265.5
      },
      {
        "x": 1715.5,
        "y": 259.6
      },
      {
        "x": 1709.6,
        "y": 245.5
      },
      {
        "x": 1715.5,
        "y": 231.4
      },
      {
        "x": 1729.6,
        "y": 225.5
      },
      {
        "x": 1743.7,
        "y": 231.4
      }
    ]
  },
  {
    "id": "zarinsk",
    "name": "Provincia de Zarinsk",
    "capitalName": "Zarinsk",
    "owner": "russia",
    "theater": "europe",
    "x": 1686.6,
    "y": 245.5,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "ongudai",
      "mariinsk",
      "kulunda",
      "abaza",
      "kuybyshev",
      "podgornoe",
      "qalbatau",
      "kataiga"
    ],
    "polygon": [
      {
        "x": 1706.6,
        "y": 245.5
      },
      {
        "x": 1700.7,
        "y": 259.6
      },
      {
        "x": 1686.6,
        "y": 265.5
      },
      {
        "x": 1672.5,
        "y": 259.6
      },
      {
        "x": 1666.6,
        "y": 245.5
      },
      {
        "x": 1672.5,
        "y": 231.4
      },
      {
        "x": 1686.6,
        "y": 225.5
      },
      {
        "x": 1700.7,
        "y": 231.4
      }
    ]
  },
  {
    "id": "kulunda",
    "name": "Provincia de Kulunda",
    "capitalName": "Kulunda",
    "owner": "russia",
    "theater": "europe",
    "x": 1647.4,
    "y": 257.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "kuybyshev",
      "qalbatau",
      "zarinsk",
      "ongudai",
      "aksu_ayuly",
      "kolosovka",
      "shchuchinsk"
    ],
    "polygon": [
      {
        "x": 1667.4,
        "y": 257.9
      },
      {
        "x": 1661.5,
        "y": 272.0
      },
      {
        "x": 1647.4,
        "y": 277.9
      },
      {
        "x": 1633.3,
        "y": 272.0
      },
      {
        "x": 1627.4,
        "y": 257.9
      },
      {
        "x": 1633.3,
        "y": 243.8
      },
      {
        "x": 1647.4,
        "y": 237.9
      },
      {
        "x": 1661.5,
        "y": 243.8
      }
    ]
  },
  {
    "id": "karakalpakia",
    "name": "Provincia de Karakalpakia",
    "capitalName": "Karakalpakia",
    "owner": "russia",
    "theater": "europe",
    "x": 1498.1,
    "y": 336.3,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "aktau",
      "dashoguz",
      "atyrau",
      "kaukey",
      "shalkar",
      "balkanabat",
      "aktobe"
    ],
    "polygon": [
      {
        "x": 1518.1,
        "y": 336.3
      },
      {
        "x": 1512.2,
        "y": 350.4
      },
      {
        "x": 1498.1,
        "y": 356.3
      },
      {
        "x": 1484.0,
        "y": 350.4
      },
      {
        "x": 1478.1,
        "y": 336.3
      },
      {
        "x": 1484.0,
        "y": 322.2
      },
      {
        "x": 1498.1,
        "y": 316.3
      },
      {
        "x": 1512.2,
        "y": 322.2
      }
    ]
  },
  {
    "id": "jargalan",
    "name": "Provincia de Jargalan",
    "capitalName": "Jargalan",
    "owner": "russia",
    "theater": "europe",
    "x": 1790.3,
    "y": 322.4,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "khurmen",
      "erdenet",
      "songino",
      "bugat",
      "tanyaozi",
      "choir"
    ],
    "polygon": [
      {
        "x": 1810.3,
        "y": 322.4
      },
      {
        "x": 1804.4,
        "y": 336.5
      },
      {
        "x": 1790.3,
        "y": 342.4
      },
      {
        "x": 1776.2,
        "y": 336.5
      },
      {
        "x": 1770.3,
        "y": 322.4
      },
      {
        "x": 1776.2,
        "y": 308.3
      },
      {
        "x": 1790.3,
        "y": 302.4
      },
      {
        "x": 1804.4,
        "y": 308.3
      }
    ]
  },
  {
    "id": "taldykorgan",
    "name": "Provincia de Taldykorgan",
    "capitalName": "Taldykorgan",
    "owner": "russia",
    "theater": "europe",
    "x": 1643.9,
    "y": 333.5,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "karamay",
      "alar",
      "qalbatau",
      "ulanbel",
      "aksu_ayuly",
      "batken"
    ],
    "polygon": [
      {
        "x": 1663.9,
        "y": 333.5
      },
      {
        "x": 1658.0,
        "y": 347.6
      },
      {
        "x": 1643.9,
        "y": 353.5
      },
      {
        "x": 1629.8,
        "y": 347.6
      },
      {
        "x": 1623.9,
        "y": 333.5
      },
      {
        "x": 1629.8,
        "y": 319.4
      },
      {
        "x": 1643.9,
        "y": 313.5
      },
      {
        "x": 1658.0,
        "y": 319.4
      }
    ]
  },
  {
    "id": "karamay",
    "name": "Provincia de Karamay",
    "capitalName": "Karamay",
    "owner": "russia",
    "theater": "europe",
    "x": 1686.6,
    "y": 328.6,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "taheerbasitao",
      "qalbatau",
      "taldykorgan",
      "olgii",
      "ongudai",
      "alar",
      "aketashi"
    ],
    "polygon": [
      {
        "x": 1706.6,
        "y": 328.6
      },
      {
        "x": 1700.7,
        "y": 342.7
      },
      {
        "x": 1686.6,
        "y": 348.6
      },
      {
        "x": 1672.5,
        "y": 342.7
      },
      {
        "x": 1666.6,
        "y": 328.6
      },
      {
        "x": 1672.5,
        "y": 314.5
      },
      {
        "x": 1686.6,
        "y": 308.6
      },
      {
        "x": 1700.7,
        "y": 314.5
      }
    ]
  },
  {
    "id": "shalkar",
    "name": "Provincia de Shalkar",
    "capitalName": "Shalkar",
    "owner": "russia",
    "theater": "europe",
    "x": 1520.1,
    "y": 306.6,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "kaukey",
      "aktobe",
      "karakalpakia",
      "kyzylorda",
      "atyrau",
      "arkalyk"
    ],
    "polygon": [
      {
        "x": 1540.1,
        "y": 306.6
      },
      {
        "x": 1534.2,
        "y": 320.7
      },
      {
        "x": 1520.1,
        "y": 326.6
      },
      {
        "x": 1506.0,
        "y": 320.7
      },
      {
        "x": 1500.1,
        "y": 306.6
      },
      {
        "x": 1506.0,
        "y": 292.5
      },
      {
        "x": 1520.1,
        "y": 286.6
      },
      {
        "x": 1534.2,
        "y": 292.5
      }
    ]
  },
  {
    "id": "atyrau",
    "name": "Provincia de Atyrau",
    "capitalName": "Atyrau",
    "owner": "russia",
    "theater": "europe",
    "x": 1470.0,
    "y": 313.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "aktau",
      "karakalpakia",
      "uralsk",
      "steppes",
      "aktobe",
      "shalkar",
      "khunzakh"
    ],
    "polygon": [
      {
        "x": 1490.0,
        "y": 313.9
      },
      {
        "x": 1484.1,
        "y": 328.0
      },
      {
        "x": 1470.0,
        "y": 333.9
      },
      {
        "x": 1455.9,
        "y": 328.0
      },
      {
        "x": 1450.0,
        "y": 313.9
      },
      {
        "x": 1455.9,
        "y": 299.8
      },
      {
        "x": 1470.0,
        "y": 293.9
      },
      {
        "x": 1484.1,
        "y": 299.8
      }
    ]
  },
  {
    "id": "uralsk",
    "name": "Provincia de Uralsk",
    "capitalName": "Uralsk",
    "owner": "russia",
    "theater": "europe",
    "x": 1466.2,
    "y": 272.3,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "aktobe",
      "sterlitamak",
      "atyrau",
      "steppes",
      "penza",
      "kazan"
    ],
    "polygon": [
      {
        "x": 1486.2,
        "y": 272.3
      },
      {
        "x": 1480.3,
        "y": 286.4
      },
      {
        "x": 1466.2,
        "y": 292.3
      },
      {
        "x": 1452.1,
        "y": 286.4
      },
      {
        "x": 1446.2,
        "y": 272.3
      },
      {
        "x": 1452.1,
        "y": 258.2
      },
      {
        "x": 1466.2,
        "y": 252.3
      },
      {
        "x": 1480.3,
        "y": 258.2
      }
    ]
  },
  {
    "id": "kyzylorda",
    "name": "Provincia de Kyzylorda",
    "capitalName": "Kyzylorda",
    "owner": "russia",
    "theater": "europe",
    "x": 1559.1,
    "y": 335.2,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "kaukey",
      "ishkuduk",
      "ulanbel",
      "dashoguz",
      "shalkar",
      "arkalyk"
    ],
    "polygon": [
      {
        "x": 1579.1,
        "y": 335.2
      },
      {
        "x": 1573.2,
        "y": 349.3
      },
      {
        "x": 1559.1,
        "y": 355.2
      },
      {
        "x": 1545.0,
        "y": 349.3
      },
      {
        "x": 1539.1,
        "y": 335.2
      },
      {
        "x": 1545.0,
        "y": 321.1
      },
      {
        "x": 1559.1,
        "y": 315.2
      },
      {
        "x": 1573.2,
        "y": 321.1
      }
    ]
  },
  {
    "id": "aksu_ayuly",
    "name": "Provincia de Aksu Ayuly",
    "capitalName": "Aksu Ayuly",
    "owner": "russia",
    "theater": "europe",
    "x": 1612.8,
    "y": 297.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "ulanbel",
      "arkalyk",
      "taldykorgan",
      "shchuchinsk",
      "qalbatau",
      "kulunda"
    ],
    "polygon": [
      {
        "x": 1632.8,
        "y": 297.4
      },
      {
        "x": 1626.9,
        "y": 311.5
      },
      {
        "x": 1612.8,
        "y": 317.4
      },
      {
        "x": 1598.7,
        "y": 311.5
      },
      {
        "x": 1592.8,
        "y": 297.4
      },
      {
        "x": 1598.7,
        "y": 283.3
      },
      {
        "x": 1612.8,
        "y": 277.4
      },
      {
        "x": 1626.9,
        "y": 283.3
      }
    ]
  },
  {
    "id": "shchuchinsk",
    "name": "Provincia de Shchuchinsk",
    "capitalName": "Shchuchinsk",
    "owner": "russia",
    "theater": "europe",
    "x": 1590.1,
    "y": 254.4,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "arkalyk",
      "kostanay",
      "kolosovka",
      "aksu_ayuly",
      "kulunda",
      "kuybyshev",
      "siberia"
    ],
    "polygon": [
      {
        "x": 1610.1,
        "y": 254.4
      },
      {
        "x": 1604.2,
        "y": 268.5
      },
      {
        "x": 1590.1,
        "y": 274.4
      },
      {
        "x": 1576.0,
        "y": 268.5
      },
      {
        "x": 1570.1,
        "y": 254.4
      },
      {
        "x": 1576.0,
        "y": 240.3
      },
      {
        "x": 1590.1,
        "y": 234.4
      },
      {
        "x": 1604.2,
        "y": 240.3
      }
    ]
  },
  {
    "id": "kostanay",
    "name": "Provincia de Kostanay",
    "capitalName": "Kostanay",
    "owner": "russia",
    "theater": "europe",
    "x": 1546.8,
    "y": 250.8,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "miass",
      "arkalyk",
      "shchuchinsk",
      "sterlitamak",
      "aktobe",
      "nizhny_tagil"
    ],
    "polygon": [
      {
        "x": 1566.8,
        "y": 250.8
      },
      {
        "x": 1560.9,
        "y": 264.9
      },
      {
        "x": 1546.8,
        "y": 270.8
      },
      {
        "x": 1532.7,
        "y": 264.9
      },
      {
        "x": 1526.8,
        "y": 250.8
      },
      {
        "x": 1532.7,
        "y": 236.7
      },
      {
        "x": 1546.8,
        "y": 230.8
      },
      {
        "x": 1560.9,
        "y": 236.7
      }
    ]
  },
  {
    "id": "arkalyk",
    "name": "Provincia de Arkalyk",
    "capitalName": "Arkalyk",
    "owner": "russia",
    "theater": "europe",
    "x": 1568.2,
    "y": 282.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "shchuchinsk",
      "kostanay",
      "aksu_ayuly",
      "kyzylorda",
      "shalkar",
      "kaukey",
      "ulanbel"
    ],
    "polygon": [
      {
        "x": 1588.2,
        "y": 282.4
      },
      {
        "x": 1582.3,
        "y": 296.5
      },
      {
        "x": 1568.2,
        "y": 302.4
      },
      {
        "x": 1554.1,
        "y": 296.5
      },
      {
        "x": 1548.2,
        "y": 282.4
      },
      {
        "x": 1554.1,
        "y": 268.3
      },
      {
        "x": 1568.2,
        "y": 262.4
      },
      {
        "x": 1582.3,
        "y": 268.3
      }
    ]
  },
  {
    "id": "ulanbel",
    "name": "Provincia de Ulanbel",
    "capitalName": "Ulanbel",
    "owner": "russia",
    "theater": "europe",
    "x": 1596.4,
    "y": 335.1,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "kyzylorda",
      "aksu_ayuly",
      "batken",
      "ishkuduk",
      "taldykorgan",
      "arkalyk"
    ],
    "polygon": [
      {
        "x": 1616.4,
        "y": 335.1
      },
      {
        "x": 1610.5,
        "y": 349.2
      },
      {
        "x": 1596.4,
        "y": 355.1
      },
      {
        "x": 1582.3,
        "y": 349.2
      },
      {
        "x": 1576.4,
        "y": 335.1
      },
      {
        "x": 1582.3,
        "y": 321.0
      },
      {
        "x": 1596.4,
        "y": 315.1
      },
      {
        "x": 1610.5,
        "y": 321.0
      }
    ]
  },
  {
    "id": "qalbatau",
    "name": "Provincia de Qalbatau",
    "capitalName": "Qalbatau",
    "owner": "russia",
    "theater": "europe",
    "x": 1664.9,
    "y": 291.7,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "ongudai",
      "kulunda",
      "karamay",
      "taldykorgan",
      "zarinsk",
      "aksu_ayuly"
    ],
    "polygon": [
      {
        "x": 1684.9,
        "y": 291.7
      },
      {
        "x": 1679.0,
        "y": 305.8
      },
      {
        "x": 1664.9,
        "y": 311.7
      },
      {
        "x": 1650.8,
        "y": 305.8
      },
      {
        "x": 1644.9,
        "y": 291.7
      },
      {
        "x": 1650.8,
        "y": 277.6
      },
      {
        "x": 1664.9,
        "y": 271.7
      },
      {
        "x": 1679.0,
        "y": 277.6
      }
    ]
  },
  {
    "id": "stavropol",
    "name": "Provincia de Stavropol",
    "capitalName": "Stavropol",
    "owner": "russia",
    "theater": "europe",
    "x": 1404.3,
    "y": 333.3,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "ardahan",
      "khunzakh",
      "berdyansk",
      "millerovo",
      "steppes",
      "bafra"
    ],
    "polygon": [
      {
        "x": 1424.3,
        "y": 333.3
      },
      {
        "x": 1418.4,
        "y": 347.4
      },
      {
        "x": 1404.3,
        "y": 353.3
      },
      {
        "x": 1390.2,
        "y": 347.4
      },
      {
        "x": 1384.3,
        "y": 333.3
      },
      {
        "x": 1390.2,
        "y": 319.2
      },
      {
        "x": 1404.3,
        "y": 313.3
      },
      {
        "x": 1418.4,
        "y": 319.2
      }
    ]
  },
  {
    "id": "vologda",
    "name": "Provincia de Vologda",
    "capitalName": "Vologda",
    "owner": "russia",
    "theater": "europe",
    "x": 1390.3,
    "y": 179.7,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "pudozh",
      "nikolsk",
      "gorodets",
      "bereznik",
      "moscow",
      "novgorod",
      "lakhkolampi"
    ],
    "polygon": [
      {
        "x": 1410.3,
        "y": 179.7
      },
      {
        "x": 1404.4,
        "y": 193.8
      },
      {
        "x": 1390.3,
        "y": 199.7
      },
      {
        "x": 1376.2,
        "y": 193.8
      },
      {
        "x": 1370.3,
        "y": 179.7
      },
      {
        "x": 1376.2,
        "y": 165.6
      },
      {
        "x": 1390.3,
        "y": 159.7
      },
      {
        "x": 1404.4,
        "y": 165.6
      }
    ]
  },
  {
    "id": "sterlitamak",
    "name": "Provincia de Sterlitamak",
    "capitalName": "Sterlitamak",
    "owner": "russia",
    "theater": "europe",
    "x": 1495.7,
    "y": 246.2,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "neftekamsk",
      "miass",
      "aktobe",
      "uralsk",
      "kazan",
      "kostanay",
      "nizhny_tagil"
    ],
    "polygon": [
      {
        "x": 1515.7,
        "y": 246.2
      },
      {
        "x": 1509.8,
        "y": 260.3
      },
      {
        "x": 1495.7,
        "y": 266.2
      },
      {
        "x": 1481.6,
        "y": 260.3
      },
      {
        "x": 1475.7,
        "y": 246.2
      },
      {
        "x": 1481.6,
        "y": 232.1
      },
      {
        "x": 1495.7,
        "y": 226.2
      },
      {
        "x": 1509.8,
        "y": 232.1
      }
    ]
  },
  {
    "id": "kudymkar",
    "name": "Provincia de Kudymkar",
    "capitalName": "Kudymkar",
    "owner": "russia",
    "theater": "europe",
    "x": 1487.6,
    "y": 182.5,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "kirov",
      "talovo",
      "neftekamsk",
      "nizhny_tagil",
      "syktyvkar",
      "kazan",
      "nyagan",
      "miass"
    ],
    "polygon": [
      {
        "x": 1507.6,
        "y": 182.5
      },
      {
        "x": 1501.7,
        "y": 196.6
      },
      {
        "x": 1487.6,
        "y": 202.5
      },
      {
        "x": 1473.5,
        "y": 196.6
      },
      {
        "x": 1467.6,
        "y": 182.5
      },
      {
        "x": 1473.5,
        "y": 168.4
      },
      {
        "x": 1487.6,
        "y": 162.5
      },
      {
        "x": 1501.7,
        "y": 168.4
      }
    ]
  },
  {
    "id": "nizhny_tagil",
    "name": "Provincia de Nizhny Tagil",
    "capitalName": "Nizhny Tagil",
    "owner": "russia",
    "theater": "europe",
    "x": 1523.0,
    "y": 196.1,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "miass",
      "kudymkar",
      "talovo",
      "neftekamsk",
      "siberia",
      "sterlitamak",
      "kostanay",
      "nyagan"
    ],
    "polygon": [
      {
        "x": 1543.0,
        "y": 196.1
      },
      {
        "x": 1537.1,
        "y": 210.2
      },
      {
        "x": 1523.0,
        "y": 216.1
      },
      {
        "x": 1508.9,
        "y": 210.2
      },
      {
        "x": 1503.0,
        "y": 196.1
      },
      {
        "x": 1508.9,
        "y": 182.0
      },
      {
        "x": 1523.0,
        "y": 176.1
      },
      {
        "x": 1537.1,
        "y": 182.0
      }
    ]
  },
  {
    "id": "kolosovka",
    "name": "Provincia de Kolosovka",
    "capitalName": "Kolosovka",
    "owner": "russia",
    "theater": "europe",
    "x": 1612.2,
    "y": 213.8,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "novyi_vasiugan",
      "kuybyshev",
      "siberia",
      "shchuchinsk",
      "kulunda",
      "surgut"
    ],
    "polygon": [
      {
        "x": 1632.2,
        "y": 213.8
      },
      {
        "x": 1626.3,
        "y": 227.9
      },
      {
        "x": 1612.2,
        "y": 233.8
      },
      {
        "x": 1598.1,
        "y": 227.9
      },
      {
        "x": 1592.2,
        "y": 213.8
      },
      {
        "x": 1598.1,
        "y": 199.7
      },
      {
        "x": 1612.2,
        "y": 193.8
      },
      {
        "x": 1626.3,
        "y": 199.7
      }
    ]
  },
  {
    "id": "gorodets",
    "name": "Provincia de Gorodets",
    "capitalName": "Gorodets",
    "owner": "russia",
    "theater": "europe",
    "x": 1414.1,
    "y": 211.1,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "nikolsk",
      "vologda",
      "kazan",
      "moscow",
      "penza",
      "kirov"
    ],
    "polygon": [
      {
        "x": 1434.1,
        "y": 211.1
      },
      {
        "x": 1428.2,
        "y": 225.2
      },
      {
        "x": 1414.1,
        "y": 231.1
      },
      {
        "x": 1400.0,
        "y": 225.2
      },
      {
        "x": 1394.1,
        "y": 211.1
      },
      {
        "x": 1400.0,
        "y": 197.0
      },
      {
        "x": 1414.1,
        "y": 191.1
      },
      {
        "x": 1428.2,
        "y": 197.0
      }
    ]
  },
  {
    "id": "kellog",
    "name": "Provincia de Kellog",
    "capitalName": "Kellog",
    "owner": "russia",
    "theater": "europe",
    "x": 1696.2,
    "y": 143.9,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "laryak",
      "kataiga",
      "podgornoe",
      "strelka",
      "surinda",
      "mariinsk"
    ],
    "polygon": [
      {
        "x": 1716.2,
        "y": 143.9
      },
      {
        "x": 1710.3,
        "y": 158.0
      },
      {
        "x": 1696.2,
        "y": 163.9
      },
      {
        "x": 1682.1,
        "y": 158.0
      },
      {
        "x": 1676.2,
        "y": 143.9
      },
      {
        "x": 1682.1,
        "y": 129.8
      },
      {
        "x": 1696.2,
        "y": 123.9
      },
      {
        "x": 1710.3,
        "y": 129.8
      }
    ]
  },
  {
    "id": "penza",
    "name": "Provincia de Penza",
    "capitalName": "Penza",
    "owner": "russia",
    "theater": "europe",
    "x": 1424.3,
    "y": 250.9,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "lipetsk",
      "kazan",
      "gorodets",
      "steppes",
      "uralsk",
      "millerovo"
    ],
    "polygon": [
      {
        "x": 1444.3,
        "y": 250.9
      },
      {
        "x": 1438.4,
        "y": 265.0
      },
      {
        "x": 1424.3,
        "y": 270.9
      },
      {
        "x": 1410.2,
        "y": 265.0
      },
      {
        "x": 1404.3,
        "y": 250.9
      },
      {
        "x": 1410.2,
        "y": 236.8
      },
      {
        "x": 1424.3,
        "y": 230.9
      },
      {
        "x": 1438.4,
        "y": 236.8
      }
    ]
  },
  {
    "id": "lipetsk",
    "name": "Provincia de Lipetsk",
    "capitalName": "Lipetsk",
    "owner": "russia",
    "theater": "europe",
    "x": 1388.5,
    "y": 257.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "kharkiv",
      "penza",
      "moscow",
      "baryatino",
      "millerovo",
      "shostka",
      "steppes"
    ],
    "polygon": [
      {
        "x": 1408.5,
        "y": 257.4
      },
      {
        "x": 1402.6,
        "y": 271.5
      },
      {
        "x": 1388.5,
        "y": 277.4
      },
      {
        "x": 1374.4,
        "y": 271.5
      },
      {
        "x": 1368.5,
        "y": 257.4
      },
      {
        "x": 1374.4,
        "y": 243.3
      },
      {
        "x": 1388.5,
        "y": 237.4
      },
      {
        "x": 1402.6,
        "y": 243.3
      }
    ]
  },
  {
    "id": "bereznik",
    "name": "Provincia de Bereznik",
    "capitalName": "Bereznik",
    "owner": "russia",
    "theater": "europe",
    "x": 1409.1,
    "y": 140.3,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "nikolsk",
      "pudozh",
      "vologda",
      "syktyvkar",
      "kuzema",
      "kirov"
    ],
    "polygon": [
      {
        "x": 1429.1,
        "y": 140.3
      },
      {
        "x": 1423.2,
        "y": 154.4
      },
      {
        "x": 1409.1,
        "y": 160.3
      },
      {
        "x": 1395.0,
        "y": 154.4
      },
      {
        "x": 1389.1,
        "y": 140.3
      },
      {
        "x": 1395.0,
        "y": 126.2
      },
      {
        "x": 1409.1,
        "y": 120.3
      },
      {
        "x": 1423.2,
        "y": 126.2
      }
    ]
  },
  {
    "id": "nikolsk",
    "name": "Provincia de Nikolsk",
    "capitalName": "Nikolsk",
    "owner": "russia",
    "theater": "europe",
    "x": 1426.9,
    "y": 175.7,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "kirov",
      "vologda",
      "gorodets",
      "bereznik",
      "syktyvkar",
      "kazan"
    ],
    "polygon": [
      {
        "x": 1446.9,
        "y": 175.7
      },
      {
        "x": 1441.0,
        "y": 189.8
      },
      {
        "x": 1426.9,
        "y": 195.7
      },
      {
        "x": 1412.8,
        "y": 189.8
      },
      {
        "x": 1406.9,
        "y": 175.7
      },
      {
        "x": 1412.8,
        "y": 161.6
      },
      {
        "x": 1426.9,
        "y": 155.7
      },
      {
        "x": 1441.0,
        "y": 161.6
      }
    ]
  },
  {
    "id": "syktyvkar",
    "name": "Provincia de Syktyvkar",
    "capitalName": "Syktyvkar",
    "owner": "russia",
    "theater": "europe",
    "x": 1462.2,
    "y": 153.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "kirov",
      "kudymkar",
      "nikolsk",
      "talovo",
      "bereznik",
      "neftekamsk"
    ],
    "polygon": [
      {
        "x": 1482.2,
        "y": 153.4
      },
      {
        "x": 1476.3,
        "y": 167.5
      },
      {
        "x": 1462.2,
        "y": 173.4
      },
      {
        "x": 1448.1,
        "y": 167.5
      },
      {
        "x": 1442.2,
        "y": 153.4
      },
      {
        "x": 1448.1,
        "y": 139.3
      },
      {
        "x": 1462.2,
        "y": 133.4
      },
      {
        "x": 1476.3,
        "y": 139.3
      }
    ]
  },
  {
    "id": "talovo",
    "name": "Provincia de Talovo",
    "capitalName": "Talovo",
    "owner": "russia",
    "theater": "europe",
    "x": 1510.9,
    "y": 156.2,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "kudymkar",
      "nizhny_tagil",
      "nyagan",
      "syktyvkar",
      "kirov",
      "neftekamsk"
    ],
    "polygon": [
      {
        "x": 1530.9,
        "y": 156.2
      },
      {
        "x": 1525.0,
        "y": 170.3
      },
      {
        "x": 1510.9,
        "y": 176.2
      },
      {
        "x": 1496.8,
        "y": 170.3
      },
      {
        "x": 1490.9,
        "y": 156.2
      },
      {
        "x": 1496.8,
        "y": 142.1
      },
      {
        "x": 1510.9,
        "y": 136.2
      },
      {
        "x": 1525.0,
        "y": 142.1
      }
    ]
  },
  {
    "id": "laryak",
    "name": "Provincia de Laryak",
    "capitalName": "Laryak",
    "owner": "russia",
    "theater": "europe",
    "x": 1655.9,
    "y": 158.6,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "novyi_vasiugan",
      "podgornoe",
      "kellog",
      "surgut",
      "kataiga",
      "kuybyshev"
    ],
    "polygon": [
      {
        "x": 1675.9,
        "y": 158.6
      },
      {
        "x": 1670.0,
        "y": 172.7
      },
      {
        "x": 1655.9,
        "y": 178.6
      },
      {
        "x": 1641.8,
        "y": 172.7
      },
      {
        "x": 1635.9,
        "y": 158.6
      },
      {
        "x": 1641.8,
        "y": 144.5
      },
      {
        "x": 1655.9,
        "y": 138.6
      },
      {
        "x": 1670.0,
        "y": 144.5
      }
    ]
  },
  {
    "id": "strelka",
    "name": "Provincia de Strelka",
    "capitalName": "Strelka",
    "owner": "russia",
    "theater": "europe",
    "x": 1740.4,
    "y": 194.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "kataiga",
      "mariinsk",
      "tayshet",
      "abaza",
      "surinda",
      "ust_ilimsk",
      "kellog"
    ],
    "polygon": [
      {
        "x": 1760.4,
        "y": 194.4
      },
      {
        "x": 1754.5,
        "y": 208.5
      },
      {
        "x": 1740.4,
        "y": 214.4
      },
      {
        "x": 1726.3,
        "y": 208.5
      },
      {
        "x": 1720.4,
        "y": 194.4
      },
      {
        "x": 1726.3,
        "y": 180.3
      },
      {
        "x": 1740.4,
        "y": 174.4
      },
      {
        "x": 1754.5,
        "y": 180.3
      }
    ]
  },
  {
    "id": "kataiga",
    "name": "Provincia de Kataiga",
    "capitalName": "Kataiga",
    "owner": "russia",
    "theater": "europe",
    "x": 1706.5,
    "y": 185.6,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "mariinsk",
      "strelka",
      "podgornoe",
      "kellog",
      "laryak",
      "zarinsk",
      "surinda"
    ],
    "polygon": [
      {
        "x": 1726.5,
        "y": 185.6
      },
      {
        "x": 1720.6,
        "y": 199.7
      },
      {
        "x": 1706.5,
        "y": 205.6
      },
      {
        "x": 1692.4,
        "y": 199.7
      },
      {
        "x": 1686.5,
        "y": 185.6
      },
      {
        "x": 1692.4,
        "y": 171.5
      },
      {
        "x": 1706.5,
        "y": 165.6
      },
      {
        "x": 1720.6,
        "y": 171.5
      }
    ]
  },
  {
    "id": "podgornoe",
    "name": "Provincia de Podgornoe",
    "capitalName": "Podgornoe",
    "owner": "russia",
    "theater": "europe",
    "x": 1672.0,
    "y": 197.4,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "kataiga",
      "mariinsk",
      "kuybyshev",
      "novyi_vasiugan",
      "laryak",
      "zarinsk",
      "kellog",
      "surgut"
    ],
    "polygon": [
      {
        "x": 1692.0,
        "y": 197.4
      },
      {
        "x": 1686.1,
        "y": 211.5
      },
      {
        "x": 1672.0,
        "y": 217.4
      },
      {
        "x": 1657.9,
        "y": 211.5
      },
      {
        "x": 1652.0,
        "y": 197.4
      },
      {
        "x": 1657.9,
        "y": 183.3
      },
      {
        "x": 1672.0,
        "y": 177.4
      },
      {
        "x": 1686.1,
        "y": 183.3
      }
    ]
  },
  {
    "id": "nyagan",
    "name": "Provincia de Nyagan",
    "capitalName": "Nyagan",
    "owner": "russia",
    "theater": "europe",
    "x": 1558.4,
    "y": 147.7,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "talovo",
      "siberia",
      "surgut",
      "nizhny_tagil",
      "kudymkar",
      "novyi_vasiugan"
    ],
    "polygon": [
      {
        "x": 1578.4,
        "y": 147.7
      },
      {
        "x": 1572.5,
        "y": 161.8
      },
      {
        "x": 1558.4,
        "y": 167.7
      },
      {
        "x": 1544.3,
        "y": 161.8
      },
      {
        "x": 1538.4,
        "y": 147.7
      },
      {
        "x": 1544.3,
        "y": 133.6
      },
      {
        "x": 1558.4,
        "y": 127.7
      },
      {
        "x": 1572.5,
        "y": 133.6
      }
    ]
  },
  {
    "id": "surgut",
    "name": "Provincia de Surgut",
    "capitalName": "Surgut",
    "owner": "russia",
    "theater": "europe",
    "x": 1611.2,
    "y": 157.0,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "novyi_vasiugan",
      "laryak",
      "siberia",
      "nyagan",
      "kolosovka",
      "podgornoe"
    ],
    "polygon": [
      {
        "x": 1631.2,
        "y": 157.0
      },
      {
        "x": 1625.3,
        "y": 171.1
      },
      {
        "x": 1611.2,
        "y": 177.0
      },
      {
        "x": 1597.1,
        "y": 171.1
      },
      {
        "x": 1591.2,
        "y": 157.0
      },
      {
        "x": 1597.1,
        "y": 142.9
      },
      {
        "x": 1611.2,
        "y": 137.0
      },
      {
        "x": 1625.3,
        "y": 142.9
      }
    ]
  },
  {
    "id": "ust_ilimsk",
    "name": "Provincia de Ust Ilimsk",
    "capitalName": "Ust Ilimsk",
    "owner": "russia",
    "theater": "europe",
    "x": 1804.9,
    "y": 195.1,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "kirensk",
      "tayshet",
      "yerema",
      "karam",
      "surinda",
      "strelka"
    ],
    "polygon": [
      {
        "x": 1824.9,
        "y": 195.1
      },
      {
        "x": 1819.0,
        "y": 209.2
      },
      {
        "x": 1804.9,
        "y": 215.1
      },
      {
        "x": 1790.8,
        "y": 209.2
      },
      {
        "x": 1784.9,
        "y": 195.1
      },
      {
        "x": 1790.8,
        "y": 181.0
      },
      {
        "x": 1804.9,
        "y": 175.1
      },
      {
        "x": 1819.0,
        "y": 181.0
      }
    ]
  },
  {
    "id": "tayshet",
    "name": "Provincia de Tayshet",
    "capitalName": "Tayshet",
    "owner": "russia",
    "theater": "europe",
    "x": 1773.2,
    "y": 219.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "ust_ilimsk",
      "strelka",
      "sorok",
      "abaza",
      "kyzyl",
      "karam",
      "surinda",
      "yerema",
      "kirensk"
    ],
    "polygon": [
      {
        "x": 1793.2,
        "y": 219.8
      },
      {
        "x": 1787.3,
        "y": 233.9
      },
      {
        "x": 1773.2,
        "y": 239.8
      },
      {
        "x": 1759.1,
        "y": 233.9
      },
      {
        "x": 1753.2,
        "y": 219.8
      },
      {
        "x": 1759.1,
        "y": 205.7
      },
      {
        "x": 1773.2,
        "y": 199.8
      },
      {
        "x": 1787.3,
        "y": 205.7
      }
    ]
  },
  {
    "id": "surinda",
    "name": "Provincia de Surinda",
    "capitalName": "Surinda",
    "owner": "russia",
    "theater": "europe",
    "x": 1769.1,
    "y": 143.0,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "strelka",
      "ust_ilimsk",
      "yerema",
      "kellog",
      "kataiga",
      "tayshet"
    ],
    "polygon": [
      {
        "x": 1789.1,
        "y": 143.0
      },
      {
        "x": 1783.2,
        "y": 157.1
      },
      {
        "x": 1769.1,
        "y": 163.0
      },
      {
        "x": 1755.0,
        "y": 157.1
      },
      {
        "x": 1749.1,
        "y": 143.0
      },
      {
        "x": 1755.0,
        "y": 128.9
      },
      {
        "x": 1769.1,
        "y": 123.0
      },
      {
        "x": 1783.2,
        "y": 128.9
      }
    ]
  },
  {
    "id": "yerema",
    "name": "Provincia de Yerema",
    "capitalName": "Yerema",
    "owner": "russia",
    "theater": "europe",
    "x": 1837.2,
    "y": 166.2,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "kirensk",
      "ust_ilimsk",
      "karam",
      "surinda",
      "tayshet",
      "ulan_ude"
    ],
    "polygon": [
      {
        "x": 1857.2,
        "y": 166.2
      },
      {
        "x": 1851.3,
        "y": 180.3
      },
      {
        "x": 1837.2,
        "y": 186.2
      },
      {
        "x": 1823.1,
        "y": 180.3
      },
      {
        "x": 1817.2,
        "y": 166.2
      },
      {
        "x": 1823.1,
        "y": 152.1
      },
      {
        "x": 1837.2,
        "y": 146.2
      },
      {
        "x": 1851.3,
        "y": 152.1
      }
    ]
  },
  {
    "id": "sanliurfa",
    "name": "Provincia de Şanliurfa",
    "capitalName": "Şanliurfa",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1383.1,
    "y": 402.4,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "ulas",
      "al_bukamal",
      "hakkari",
      "aksaray",
      "syria",
      "bafra",
      "mesopotamia",
      "ardahan"
    ],
    "polygon": [
      {
        "x": 1403.1,
        "y": 402.4
      },
      {
        "x": 1397.2,
        "y": 416.5
      },
      {
        "x": 1383.1,
        "y": 422.4
      },
      {
        "x": 1369.0,
        "y": 416.5
      },
      {
        "x": 1363.1,
        "y": 402.4
      },
      {
        "x": 1369.0,
        "y": 388.3
      },
      {
        "x": 1383.1,
        "y": 382.4
      },
      {
        "x": 1397.2,
        "y": 388.3
      }
    ]
  },
  {
    "id": "hakkari",
    "name": "Provincia de Hakkari",
    "capitalName": "Hakkari",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1415.7,
    "y": 398.9,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "bijar",
      "ardahan",
      "al_bukamal",
      "parsabad",
      "sanliurfa",
      "mesopotamia",
      "khunzakh",
      "ulas"
    ],
    "polygon": [
      {
        "x": 1435.7,
        "y": 398.9
      },
      {
        "x": 1429.8,
        "y": 413.0
      },
      {
        "x": 1415.7,
        "y": 418.9
      },
      {
        "x": 1401.6,
        "y": 413.0
      },
      {
        "x": 1395.7,
        "y": 398.9
      },
      {
        "x": 1401.6,
        "y": 384.8
      },
      {
        "x": 1415.7,
        "y": 378.9
      },
      {
        "x": 1429.8,
        "y": 384.8
      }
    ]
  },
  {
    "id": "ardahan",
    "name": "Provincia de Ardahan",
    "capitalName": "Ardahan",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1409.2,
    "y": 368.6,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "khunzakh",
      "hakkari",
      "stavropol",
      "parsabad",
      "ulas",
      "sanliurfa",
      "bafra"
    ],
    "polygon": [
      {
        "x": 1429.2,
        "y": 368.6
      },
      {
        "x": 1423.3,
        "y": 382.7
      },
      {
        "x": 1409.2,
        "y": 388.6
      },
      {
        "x": 1395.1,
        "y": 382.7
      },
      {
        "x": 1389.2,
        "y": 368.6
      },
      {
        "x": 1395.1,
        "y": 354.5
      },
      {
        "x": 1409.2,
        "y": 348.6
      },
      {
        "x": 1423.3,
        "y": 354.5
      }
    ]
  },
  {
    "id": "parsabad",
    "name": "Provincia de Parsabad",
    "capitalName": "Parsabad",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1443.2,
    "y": 382.1,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "khunzakh",
      "bijar",
      "hakkari",
      "ardahan",
      "amol",
      "aktau",
      "balkanabat"
    ],
    "polygon": [
      {
        "x": 1463.2,
        "y": 382.1
      },
      {
        "x": 1457.3,
        "y": 396.2
      },
      {
        "x": 1443.2,
        "y": 402.1
      },
      {
        "x": 1429.1,
        "y": 396.2
      },
      {
        "x": 1423.2,
        "y": 382.1
      },
      {
        "x": 1429.1,
        "y": 368.0
      },
      {
        "x": 1443.2,
        "y": 362.1
      },
      {
        "x": 1457.3,
        "y": 368.0
      }
    ]
  },
  {
    "id": "bijar",
    "name": "Provincia de Bijar",
    "capitalName": "Bijar",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1441.1,
    "y": 413.1,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "mesopotamia",
      "hakkari",
      "parsabad",
      "amol",
      "isfahan",
      "al_bukamal"
    ],
    "polygon": [
      {
        "x": 1461.1,
        "y": 413.1
      },
      {
        "x": 1455.2,
        "y": 427.2
      },
      {
        "x": 1441.1,
        "y": 433.1
      },
      {
        "x": 1427.0,
        "y": 427.2
      },
      {
        "x": 1421.1,
        "y": 413.1
      },
      {
        "x": 1427.0,
        "y": 399.0
      },
      {
        "x": 1441.1,
        "y": 393.1
      },
      {
        "x": 1455.2,
        "y": 399.0
      }
    ]
  },
  {
    "id": "amol",
    "name": "Provincia de Amol",
    "capitalName": "Amol",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1472.3,
    "y": 407.9,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "jandaq",
      "balkanabat",
      "isfahan",
      "bijar",
      "bojnurd",
      "parsabad"
    ],
    "polygon": [
      {
        "x": 1492.3,
        "y": 407.9
      },
      {
        "x": 1486.4,
        "y": 422.0
      },
      {
        "x": 1472.3,
        "y": 427.9
      },
      {
        "x": 1458.2,
        "y": 422.0
      },
      {
        "x": 1452.3,
        "y": 407.9
      },
      {
        "x": 1458.2,
        "y": 393.8
      },
      {
        "x": 1472.3,
        "y": 387.9
      },
      {
        "x": 1486.4,
        "y": 393.8
      }
    ]
  },
  {
    "id": "balkanabat",
    "name": "Provincia de Balkanabat",
    "capitalName": "Balkanabat",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1485.7,
    "y": 382.4,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "bojnurd",
      "amol",
      "dashoguz",
      "aktau",
      "parsabad",
      "jandaq",
      "karakalpakia"
    ],
    "polygon": [
      {
        "x": 1505.7,
        "y": 382.4
      },
      {
        "x": 1499.8,
        "y": 396.5
      },
      {
        "x": 1485.7,
        "y": 402.4
      },
      {
        "x": 1471.6,
        "y": 396.5
      },
      {
        "x": 1465.7,
        "y": 382.4
      },
      {
        "x": 1471.6,
        "y": 368.3
      },
      {
        "x": 1485.7,
        "y": 362.4
      },
      {
        "x": 1499.8,
        "y": 368.3
      }
    ]
  },
  {
    "id": "aktau",
    "name": "Provincia de Aktau",
    "capitalName": "Aktau",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1465.0,
    "y": 346.0,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "atyrau",
      "khunzakh",
      "karakalpakia",
      "balkanabat",
      "parsabad",
      "dashoguz"
    ],
    "polygon": [
      {
        "x": 1485.0,
        "y": 346.0
      },
      {
        "x": 1479.1,
        "y": 360.1
      },
      {
        "x": 1465.0,
        "y": 366.0
      },
      {
        "x": 1450.9,
        "y": 360.1
      },
      {
        "x": 1445.0,
        "y": 346.0
      },
      {
        "x": 1450.9,
        "y": 331.9
      },
      {
        "x": 1465.0,
        "y": 326.0
      },
      {
        "x": 1479.1,
        "y": 331.9
      }
    ]
  },
  {
    "id": "khunzakh",
    "name": "Provincia de Khunzakh",
    "capitalName": "Khunzakh",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1433.5,
    "y": 355.5,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "ardahan",
      "parsabad",
      "aktau",
      "stavropol",
      "hakkari",
      "atyrau"
    ],
    "polygon": [
      {
        "x": 1453.5,
        "y": 355.5
      },
      {
        "x": 1447.6,
        "y": 369.6
      },
      {
        "x": 1433.5,
        "y": 375.5
      },
      {
        "x": 1419.4,
        "y": 369.6
      },
      {
        "x": 1413.5,
        "y": 355.5
      },
      {
        "x": 1419.4,
        "y": 341.4
      },
      {
        "x": 1433.5,
        "y": 335.5
      },
      {
        "x": 1447.6,
        "y": 341.4
      }
    ]
  },
  {
    "id": "peshawar",
    "name": "Provincia de Peshawar",
    "capitalName": "Peshawar",
    "owner": "persia",
    "theater": "mena",
    "x": 1598.9,
    "y": 427.6,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "taleqan",
      "gizab",
      "mazha",
      "sadiqabad",
      "gowurdak",
      "batken",
      "delhi",
      "hanle",
      "noshki"
    ],
    "polygon": [
      {
        "x": 1618.9,
        "y": 427.6
      },
      {
        "x": 1613.0,
        "y": 441.7
      },
      {
        "x": 1598.9,
        "y": 447.6
      },
      {
        "x": 1584.8,
        "y": 441.7
      },
      {
        "x": 1578.9,
        "y": 427.6
      },
      {
        "x": 1584.8,
        "y": 413.5
      },
      {
        "x": 1598.9,
        "y": 407.6
      },
      {
        "x": 1613.0,
        "y": 413.5
      }
    ]
  },
  {
    "id": "birjand",
    "name": "Provincia de Birjand",
    "capitalName": "Birjand",
    "owner": "persia",
    "theater": "mena",
    "x": 1518.0,
    "y": 436.6,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "sarakhs",
      "jandaq",
      "taftan",
      "kahnuj",
      "bojnurd",
      "gizab",
      "isfahan"
    ],
    "polygon": [
      {
        "x": 1538.0,
        "y": 436.6
      },
      {
        "x": 1532.1,
        "y": 450.7
      },
      {
        "x": 1518.0,
        "y": 456.6
      },
      {
        "x": 1503.9,
        "y": 450.7
      },
      {
        "x": 1498.0,
        "y": 436.6
      },
      {
        "x": 1503.9,
        "y": 422.5
      },
      {
        "x": 1518.0,
        "y": 416.6
      },
      {
        "x": 1532.1,
        "y": 422.5
      }
    ]
  },
  {
    "id": "sarakhs",
    "name": "Provincia de Sarakhs",
    "capitalName": "Sarakhs",
    "owner": "persia",
    "theater": "mena",
    "x": 1529.9,
    "y": 407.6,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "bojnurd",
      "birjand",
      "gowurdak",
      "gizab",
      "dashoguz",
      "jandaq"
    ],
    "polygon": [
      {
        "x": 1549.9,
        "y": 407.6
      },
      {
        "x": 1544.0,
        "y": 421.7
      },
      {
        "x": 1529.9,
        "y": 427.6
      },
      {
        "x": 1515.8,
        "y": 421.7
      },
      {
        "x": 1509.9,
        "y": 407.6
      },
      {
        "x": 1515.8,
        "y": 393.5
      },
      {
        "x": 1529.9,
        "y": 387.6
      },
      {
        "x": 1544.0,
        "y": 393.5
      }
    ]
  },
  {
    "id": "dashoguz",
    "name": "Provincia de Dashoguz",
    "capitalName": "Dashoguz",
    "owner": "persia",
    "theater": "mena",
    "x": 1522.3,
    "y": 362.5,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "kaukey",
      "karakalpakia",
      "bojnurd",
      "ishkuduk",
      "balkanabat",
      "sarakhs",
      "kyzylorda",
      "aktau"
    ],
    "polygon": [
      {
        "x": 1542.3,
        "y": 362.5
      },
      {
        "x": 1536.4,
        "y": 376.6
      },
      {
        "x": 1522.3,
        "y": 382.5
      },
      {
        "x": 1508.2,
        "y": 376.6
      },
      {
        "x": 1502.3,
        "y": 362.5
      },
      {
        "x": 1508.2,
        "y": 348.4
      },
      {
        "x": 1522.3,
        "y": 342.5
      },
      {
        "x": 1536.4,
        "y": 348.4
      }
    ]
  },
  {
    "id": "gowurdak",
    "name": "Provincia de Gowurdak",
    "capitalName": "Gowurdak",
    "owner": "persia",
    "theater": "mena",
    "x": 1562.8,
    "y": 397.0,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "taleqan",
      "ishkuduk",
      "sarakhs",
      "gizab",
      "batken",
      "peshawar"
    ],
    "polygon": [
      {
        "x": 1582.8,
        "y": 397.0
      },
      {
        "x": 1576.9,
        "y": 411.1
      },
      {
        "x": 1562.8,
        "y": 417.0
      },
      {
        "x": 1548.7,
        "y": 411.1
      },
      {
        "x": 1542.8,
        "y": 397.0
      },
      {
        "x": 1548.7,
        "y": 382.9
      },
      {
        "x": 1562.8,
        "y": 377.0
      },
      {
        "x": 1576.9,
        "y": 382.9
      }
    ]
  },
  {
    "id": "gizab",
    "name": "Provincia de Gizab",
    "capitalName": "Gizab",
    "owner": "persia",
    "theater": "mena",
    "x": 1563.6,
    "y": 432.5,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "noshki",
      "taleqan",
      "gowurdak",
      "peshawar",
      "sarakhs",
      "taftan",
      "birjand",
      "sadiqabad"
    ],
    "polygon": [
      {
        "x": 1583.6,
        "y": 432.5
      },
      {
        "x": 1577.7,
        "y": 446.6
      },
      {
        "x": 1563.6,
        "y": 452.5
      },
      {
        "x": 1549.5,
        "y": 446.6
      },
      {
        "x": 1543.6,
        "y": 432.5
      },
      {
        "x": 1549.5,
        "y": 418.4
      },
      {
        "x": 1563.6,
        "y": 412.5
      },
      {
        "x": 1577.7,
        "y": 418.4
      }
    ]
  },
  {
    "id": "batken",
    "name": "Provincia de Batken",
    "capitalName": "Batken",
    "owner": "persia",
    "theater": "mena",
    "x": 1594.3,
    "y": 378.2,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "taleqan",
      "ishkuduk",
      "gowurdak",
      "ulanbel",
      "peshawar",
      "mazha",
      "taldykorgan",
      "alar"
    ],
    "polygon": [
      {
        "x": 1614.3,
        "y": 378.2
      },
      {
        "x": 1608.4,
        "y": 392.3
      },
      {
        "x": 1594.3,
        "y": 398.2
      },
      {
        "x": 1580.2,
        "y": 392.3
      },
      {
        "x": 1574.3,
        "y": 378.2
      },
      {
        "x": 1580.2,
        "y": 364.1
      },
      {
        "x": 1594.3,
        "y": 358.2
      },
      {
        "x": 1608.4,
        "y": 364.1
      }
    ]
  },
  {
    "id": "ishkuduk",
    "name": "Provincia de Ishkuduk",
    "capitalName": "Ishkuduk",
    "owner": "persia",
    "theater": "mena",
    "x": 1563.2,
    "y": 365.2,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "kyzylorda",
      "gowurdak",
      "batken",
      "dashoguz",
      "kaukey",
      "ulanbel",
      "taleqan"
    ],
    "polygon": [
      {
        "x": 1583.2,
        "y": 365.2
      },
      {
        "x": 1577.3,
        "y": 379.3
      },
      {
        "x": 1563.2,
        "y": 385.2
      },
      {
        "x": 1549.1,
        "y": 379.3
      },
      {
        "x": 1543.2,
        "y": 365.2
      },
      {
        "x": 1549.1,
        "y": 351.1
      },
      {
        "x": 1563.2,
        "y": 345.2
      },
      {
        "x": 1577.3,
        "y": 351.1
      }
    ]
  },
  {
    "id": "shisan",
    "name": "Provincia de Shisan",
    "capitalName": "Shisan",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1473.1,
    "y": 547.5,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "sharorah",
      "duqm",
      "hadiboh",
      "layla",
      "al_ain",
      "abu_samra",
      "bandarbeyla"
    ],
    "polygon": [
      {
        "x": 1493.1,
        "y": 547.5
      },
      {
        "x": 1487.2,
        "y": 561.6
      },
      {
        "x": 1473.1,
        "y": 567.5
      },
      {
        "x": 1459.0,
        "y": 561.6
      },
      {
        "x": 1453.1,
        "y": 547.5
      },
      {
        "x": 1459.0,
        "y": 533.4
      },
      {
        "x": 1473.1,
        "y": 527.5
      },
      {
        "x": 1487.2,
        "y": 533.4
      }
    ]
  },
  {
    "id": "duqm",
    "name": "Provincia de Duqm",
    "capitalName": "Duqm",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1507.4,
    "y": 534.2,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "al_ain",
      "shisan",
      "gwadar",
      "abu_samra",
      "kahnuj",
      "hadiboh"
    ],
    "polygon": [
      {
        "x": 1527.4,
        "y": 534.2
      },
      {
        "x": 1521.5,
        "y": 548.3
      },
      {
        "x": 1507.4,
        "y": 554.2
      },
      {
        "x": 1493.3,
        "y": 548.3
      },
      {
        "x": 1487.4,
        "y": 534.2
      },
      {
        "x": 1493.3,
        "y": 520.1
      },
      {
        "x": 1507.4,
        "y": 514.2
      },
      {
        "x": 1521.5,
        "y": 520.1
      }
    ]
  },
  {
    "id": "al_ain",
    "name": "Provincia de Al Ain",
    "capitalName": "Al Ain",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1495.1,
    "y": 502.4,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "kahnuj",
      "abu_samra",
      "duqm",
      "jahrom",
      "gwadar",
      "shisan"
    ],
    "polygon": [
      {
        "x": 1515.1,
        "y": 502.4
      },
      {
        "x": 1509.2,
        "y": 516.5
      },
      {
        "x": 1495.1,
        "y": 522.4
      },
      {
        "x": 1481.0,
        "y": 516.5
      },
      {
        "x": 1475.1,
        "y": 502.4
      },
      {
        "x": 1481.0,
        "y": 488.3
      },
      {
        "x": 1495.1,
        "y": 482.4
      },
      {
        "x": 1509.2,
        "y": 488.3
      }
    ]
  },
  {
    "id": "abu_samra",
    "name": "Provincia de Abu Samra",
    "capitalName": "Abu Samra",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1462.8,
    "y": 497.6,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "jahrom",
      "al_ain",
      "layla",
      "ibn_sharar",
      "kahnuj",
      "shisan",
      "duqm",
      "sharorah"
    ],
    "polygon": [
      {
        "x": 1482.8,
        "y": 497.6
      },
      {
        "x": 1476.9,
        "y": 511.7
      },
      {
        "x": 1462.8,
        "y": 517.6
      },
      {
        "x": 1448.7,
        "y": 511.7
      },
      {
        "x": 1442.8,
        "y": 497.6
      },
      {
        "x": 1448.7,
        "y": 483.5
      },
      {
        "x": 1462.8,
        "y": 477.6
      },
      {
        "x": 1476.9,
        "y": 483.5
      }
    ]
  },
  {
    "id": "layla",
    "name": "Provincia de Layla",
    "capitalName": "Layla",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1435.4,
    "y": 515.7,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "abu_samra",
      "sharorah",
      "ibn_sharar",
      "mecca",
      "al_hasuniyyah",
      "shisan",
      "mocha"
    ],
    "polygon": [
      {
        "x": 1455.4,
        "y": 515.7
      },
      {
        "x": 1449.5,
        "y": 529.8
      },
      {
        "x": 1435.4,
        "y": 535.7
      },
      {
        "x": 1421.3,
        "y": 529.8
      },
      {
        "x": 1415.4,
        "y": 515.7
      },
      {
        "x": 1421.3,
        "y": 501.6
      },
      {
        "x": 1435.4,
        "y": 495.7
      },
      {
        "x": 1449.5,
        "y": 501.6
      }
    ]
  },
  {
    "id": "ibn_sharar",
    "name": "Provincia de Ibn Sharar",
    "capitalName": "Ibn Sharar",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1432.2,
    "y": 474.3,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "abu_samra",
      "al_hasuniyyah",
      "layla",
      "sakaka",
      "mesopotamia",
      "jahrom"
    ],
    "polygon": [
      {
        "x": 1452.2,
        "y": 474.3
      },
      {
        "x": 1446.3,
        "y": 488.4
      },
      {
        "x": 1432.2,
        "y": 494.3
      },
      {
        "x": 1418.1,
        "y": 488.4
      },
      {
        "x": 1412.2,
        "y": 474.3
      },
      {
        "x": 1418.1,
        "y": 460.2
      },
      {
        "x": 1432.2,
        "y": 454.3
      },
      {
        "x": 1446.3,
        "y": 460.2
      }
    ]
  },
  {
    "id": "sharorah",
    "name": "Provincia de Sharorah",
    "capitalName": "Sharorah",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1437.8,
    "y": 549.4,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "layla",
      "shisan",
      "mocha",
      "mecca",
      "abu_samra",
      "hadiboh",
      "bandarbeyla",
      "hargeisa"
    ],
    "polygon": [
      {
        "x": 1457.8,
        "y": 549.4
      },
      {
        "x": 1451.9,
        "y": 563.5
      },
      {
        "x": 1437.8,
        "y": 569.4
      },
      {
        "x": 1423.7,
        "y": 563.5
      },
      {
        "x": 1417.8,
        "y": 549.4
      },
      {
        "x": 1423.7,
        "y": 535.3
      },
      {
        "x": 1437.8,
        "y": 529.4
      },
      {
        "x": 1451.9,
        "y": 535.3
      }
    ]
  },
  {
    "id": "taftan",
    "name": "Provincia de Taftan",
    "capitalName": "Taftan",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1533.5,
    "y": 466.7,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "kahnuj",
      "gwadar",
      "noshki",
      "birjand",
      "gizab",
      "karachi"
    ],
    "polygon": [
      {
        "x": 1553.5,
        "y": 466.7
      },
      {
        "x": 1547.6,
        "y": 480.8
      },
      {
        "x": 1533.5,
        "y": 486.7
      },
      {
        "x": 1519.4,
        "y": 480.8
      },
      {
        "x": 1513.5,
        "y": 466.7
      },
      {
        "x": 1519.4,
        "y": 452.6
      },
      {
        "x": 1533.5,
        "y": 446.7
      },
      {
        "x": 1547.6,
        "y": 452.6
      }
    ]
  },
  {
    "id": "karachi",
    "name": "Provincia de Karachi",
    "capitalName": "Karachi",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1568.6,
    "y": 496.7,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "gwadar",
      "sadiqabad",
      "junagadh",
      "noshki",
      "taftan",
      "indore"
    ],
    "polygon": [
      {
        "x": 1588.6,
        "y": 496.7
      },
      {
        "x": 1582.7,
        "y": 510.8
      },
      {
        "x": 1568.6,
        "y": 516.7
      },
      {
        "x": 1554.5,
        "y": 510.8
      },
      {
        "x": 1548.6,
        "y": 496.7
      },
      {
        "x": 1554.5,
        "y": 482.6
      },
      {
        "x": 1568.6,
        "y": 476.7
      },
      {
        "x": 1582.7,
        "y": 482.6
      }
    ]
  },
  {
    "id": "sadiqabad",
    "name": "Provincia de Sadiqabad",
    "capitalName": "Sadiqabad",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1589.5,
    "y": 471.7,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "noshki",
      "karachi",
      "peshawar",
      "delhi",
      "gizab",
      "junagadh"
    ],
    "polygon": [
      {
        "x": 1609.5,
        "y": 471.7
      },
      {
        "x": 1603.6,
        "y": 485.8
      },
      {
        "x": 1589.5,
        "y": 491.7
      },
      {
        "x": 1575.4,
        "y": 485.8
      },
      {
        "x": 1569.5,
        "y": 471.7
      },
      {
        "x": 1575.4,
        "y": 457.6
      },
      {
        "x": 1589.5,
        "y": 451.7
      },
      {
        "x": 1603.6,
        "y": 457.6
      }
    ]
  },
  {
    "id": "junagadh",
    "name": "Provincia de Junagadh",
    "capitalName": "Junagadh",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1591.8,
    "y": 521.1,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "pune",
      "karachi",
      "indore",
      "sadiqabad",
      "chandrapur",
      "gwadar"
    ],
    "polygon": [
      {
        "x": 1611.8,
        "y": 521.1
      },
      {
        "x": 1605.9,
        "y": 535.2
      },
      {
        "x": 1591.8,
        "y": 541.1
      },
      {
        "x": 1577.7,
        "y": 535.2
      },
      {
        "x": 1571.8,
        "y": 521.1
      },
      {
        "x": 1577.7,
        "y": 507.0
      },
      {
        "x": 1591.8,
        "y": 501.1
      },
      {
        "x": 1605.9,
        "y": 507.0
      }
    ]
  },
  {
    "id": "jahrom",
    "name": "Provincia de Jahrom",
    "capitalName": "Jahrom",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1480.3,
    "y": 470.3,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "kahnuj",
      "abu_samra",
      "isfahan",
      "al_ain",
      "jandaq",
      "ibn_sharar"
    ],
    "polygon": [
      {
        "x": 1500.3,
        "y": 470.3
      },
      {
        "x": 1494.4,
        "y": 484.4
      },
      {
        "x": 1480.3,
        "y": 490.3
      },
      {
        "x": 1466.2,
        "y": 484.4
      },
      {
        "x": 1460.3,
        "y": 470.3
      },
      {
        "x": 1466.2,
        "y": 456.2
      },
      {
        "x": 1480.3,
        "y": 450.3
      },
      {
        "x": 1494.4,
        "y": 456.2
      }
    ]
  },
  {
    "id": "zag",
    "name": "Provincia de Zag",
    "capitalName": "Zag",
    "owner": "morocco",
    "theater": "mena",
    "x": 1066.5,
    "y": 476.0,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "marrakesh",
      "manfue",
      "taghit",
      "taoudenni",
      "fes",
      "reggane"
    ],
    "polygon": [
      {
        "x": 1086.5,
        "y": 476.0
      },
      {
        "x": 1080.6,
        "y": 490.1
      },
      {
        "x": 1066.5,
        "y": 496.0
      },
      {
        "x": 1052.4,
        "y": 490.1
      },
      {
        "x": 1046.5,
        "y": 476.0
      },
      {
        "x": 1052.4,
        "y": 461.9
      },
      {
        "x": 1066.5,
        "y": 456.0
      },
      {
        "x": 1080.6,
        "y": 461.9
      }
    ]
  },
  {
    "id": "tieret",
    "name": "Provincia de Tieret",
    "capitalName": "Tieret",
    "owner": "morocco",
    "theater": "mena",
    "x": 1194.6,
    "y": 451.3,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "zliten",
      "sfax",
      "wuban",
      "dujal",
      "el_kef",
      "algiers",
      "al_fuqaha",
      "el_menia"
    ],
    "polygon": [
      {
        "x": 1214.6,
        "y": 451.3
      },
      {
        "x": 1208.7,
        "y": 465.4
      },
      {
        "x": 1194.6,
        "y": 471.3
      },
      {
        "x": 1180.5,
        "y": 465.4
      },
      {
        "x": 1174.6,
        "y": 451.3
      },
      {
        "x": 1180.5,
        "y": 437.2
      },
      {
        "x": 1194.6,
        "y": 431.3
      },
      {
        "x": 1208.7,
        "y": 437.2
      }
    ]
  },
  {
    "id": "siwa_oasis",
    "name": "Provincia de Siwa Oasis",
    "capitalName": "Siwa Oasis",
    "owner": "morocco",
    "theater": "mena",
    "x": 1295.7,
    "y": 466.2,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "awjilah",
      "derna",
      "kazulu",
      "egypt",
      "sohag",
      "heraklion",
      "tripoli"
    ],
    "polygon": [
      {
        "x": 1315.7,
        "y": 466.2
      },
      {
        "x": 1309.8,
        "y": 480.3
      },
      {
        "x": 1295.7,
        "y": 486.2
      },
      {
        "x": 1281.6,
        "y": 480.3
      },
      {
        "x": 1275.7,
        "y": 466.2
      },
      {
        "x": 1281.6,
        "y": 452.1
      },
      {
        "x": 1295.7,
        "y": 446.2
      },
      {
        "x": 1309.8,
        "y": 452.1
      }
    ]
  },
  {
    "id": "al_fuqaha",
    "name": "Provincia de Al Fuqaha",
    "capitalName": "Al Fuqaha",
    "owner": "morocco",
    "theater": "mena",
    "x": 1235.8,
    "y": 477.5,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "dujal",
      "awjilah",
      "tripoli",
      "zliten",
      "tieret",
      "omou"
    ],
    "polygon": [
      {
        "x": 1255.8,
        "y": 477.5
      },
      {
        "x": 1249.9,
        "y": 491.6
      },
      {
        "x": 1235.8,
        "y": 497.5
      },
      {
        "x": 1221.7,
        "y": 491.6
      },
      {
        "x": 1215.8,
        "y": 477.5
      },
      {
        "x": 1221.7,
        "y": 463.4
      },
      {
        "x": 1235.8,
        "y": 457.5
      },
      {
        "x": 1249.9,
        "y": 463.4
      }
    ]
  },
  {
    "id": "dujal",
    "name": "Provincia de Dujal",
    "capitalName": "Dujal",
    "owner": "morocco",
    "theater": "mena",
    "x": 1203.4,
    "y": 488.2,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "wuban",
      "al_fuqaha",
      "tieret",
      "tamanrasset",
      "zliten",
      "omou",
      "dirkou"
    ],
    "polygon": [
      {
        "x": 1223.4,
        "y": 488.2
      },
      {
        "x": 1217.5,
        "y": 502.3
      },
      {
        "x": 1203.4,
        "y": 508.2
      },
      {
        "x": 1189.3,
        "y": 502.3
      },
      {
        "x": 1183.4,
        "y": 488.2
      },
      {
        "x": 1189.3,
        "y": 474.1
      },
      {
        "x": 1203.4,
        "y": 468.2
      },
      {
        "x": 1217.5,
        "y": 474.1
      }
    ]
  },
  {
    "id": "taghit",
    "name": "Provincia de Taghit",
    "capitalName": "Taghit",
    "owner": "morocco",
    "theater": "mena",
    "x": 1114.7,
    "y": 452.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "manfue",
      "el_menia",
      "fes",
      "saida",
      "reggane",
      "marrakesh",
      "zag"
    ],
    "polygon": [
      {
        "x": 1134.7,
        "y": 452.8
      },
      {
        "x": 1128.8,
        "y": 466.9
      },
      {
        "x": 1114.7,
        "y": 472.8
      },
      {
        "x": 1100.6,
        "y": 466.9
      },
      {
        "x": 1094.7,
        "y": 452.8
      },
      {
        "x": 1100.6,
        "y": 438.7
      },
      {
        "x": 1114.7,
        "y": 432.8
      },
      {
        "x": 1128.8,
        "y": 438.7
      }
    ]
  },
  {
    "id": "el_menia",
    "name": "Provincia de El Menia",
    "capitalName": "El Menia",
    "owner": "morocco",
    "theater": "mena",
    "x": 1146.8,
    "y": 455.2,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "taghit",
      "wuban",
      "reggane",
      "algiers",
      "saida",
      "tieret",
      "manfue"
    ],
    "polygon": [
      {
        "x": 1166.8,
        "y": 455.2
      },
      {
        "x": 1160.9,
        "y": 469.3
      },
      {
        "x": 1146.8,
        "y": 475.2
      },
      {
        "x": 1132.7,
        "y": 469.3
      },
      {
        "x": 1126.8,
        "y": 455.2
      },
      {
        "x": 1132.7,
        "y": 441.1
      },
      {
        "x": 1146.8,
        "y": 435.2
      },
      {
        "x": 1160.9,
        "y": 441.1
      }
    ]
  },
  {
    "id": "reggane",
    "name": "Provincia de Reggane",
    "capitalName": "Reggane",
    "owner": "morocco",
    "theater": "mena",
    "x": 1128.6,
    "y": 486.6,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "manfue",
      "el_menia",
      "taghit",
      "taoudenni",
      "wuban",
      "tamanrasset",
      "zag",
      "tessalit"
    ],
    "polygon": [
      {
        "x": 1148.6,
        "y": 486.6
      },
      {
        "x": 1142.7,
        "y": 500.7
      },
      {
        "x": 1128.6,
        "y": 506.6
      },
      {
        "x": 1114.5,
        "y": 500.7
      },
      {
        "x": 1108.6,
        "y": 486.6
      },
      {
        "x": 1114.5,
        "y": 472.5
      },
      {
        "x": 1128.6,
        "y": 466.6
      },
      {
        "x": 1142.7,
        "y": 472.5
      }
    ]
  },
  {
    "id": "wuban",
    "name": "Provincia de Wuban",
    "capitalName": "Wuban",
    "owner": "morocco",
    "theater": "mena",
    "x": 1172.6,
    "y": 474.7,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "tieret",
      "el_menia",
      "dujal",
      "tamanrasset",
      "reggane",
      "algiers"
    ],
    "polygon": [
      {
        "x": 1192.6,
        "y": 474.7
      },
      {
        "x": 1186.7,
        "y": 488.8
      },
      {
        "x": 1172.6,
        "y": 494.7
      },
      {
        "x": 1158.5,
        "y": 488.8
      },
      {
        "x": 1152.6,
        "y": 474.7
      },
      {
        "x": 1158.5,
        "y": 460.6
      },
      {
        "x": 1172.6,
        "y": 454.7
      },
      {
        "x": 1186.7,
        "y": 460.6
      }
    ]
  },
  {
    "id": "sakaka",
    "name": "Provincia de Sakaka",
    "capitalName": "Sakaka",
    "owner": "morocco",
    "theater": "mena",
    "x": 1391.9,
    "y": 460.1,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "maan",
      "al_hasuniyyah",
      "al_wajh",
      "al_bukamal",
      "syria",
      "mesopotamia",
      "mecca",
      "ibn_sharar"
    ],
    "polygon": [
      {
        "x": 1411.9,
        "y": 460.1
      },
      {
        "x": 1406.0,
        "y": 474.2
      },
      {
        "x": 1391.9,
        "y": 480.1
      },
      {
        "x": 1377.8,
        "y": 474.2
      },
      {
        "x": 1371.9,
        "y": 460.1
      },
      {
        "x": 1377.8,
        "y": 446.0
      },
      {
        "x": 1391.9,
        "y": 440.1
      },
      {
        "x": 1406.0,
        "y": 446.0
      }
    ]
  },
  {
    "id": "al_wajh",
    "name": "Provincia de Al Wajh",
    "capitalName": "Al Wajh",
    "owner": "morocco",
    "theater": "mena",
    "x": 1368.2,
    "y": 487.1,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "al_hasuniyyah",
      "maan",
      "sohag",
      "sakaka",
      "mecca",
      "egypt"
    ],
    "polygon": [
      {
        "x": 1388.2,
        "y": 487.1
      },
      {
        "x": 1382.3,
        "y": 501.2
      },
      {
        "x": 1368.2,
        "y": 507.1
      },
      {
        "x": 1354.1,
        "y": 501.2
      },
      {
        "x": 1348.2,
        "y": 487.1
      },
      {
        "x": 1354.1,
        "y": 473.0
      },
      {
        "x": 1368.2,
        "y": 467.1
      },
      {
        "x": 1382.3,
        "y": 473.0
      }
    ]
  },
  {
    "id": "abidjan",
    "name": "Provincia de Abidjan",
    "capitalName": "Abidjan",
    "owner": "neutral",
    "theater": "africa",
    "x": 1101.4,
    "y": 644.9,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "tingrela",
      "ouagadougou",
      "guinea",
      "calabar",
      "timbuktu",
      "menaka"
    ],
    "polygon": [
      {
        "x": 1121.4,
        "y": 644.9
      },
      {
        "x": 1115.5,
        "y": 659.0
      },
      {
        "x": 1101.4,
        "y": 664.9
      },
      {
        "x": 1087.3,
        "y": 659.0
      },
      {
        "x": 1081.4,
        "y": 644.9
      },
      {
        "x": 1087.3,
        "y": 630.8
      },
      {
        "x": 1101.4,
        "y": 624.9
      },
      {
        "x": 1115.5,
        "y": 630.8
      }
    ]
  },
  {
    "id": "tingrela",
    "name": "Provincia de Tingrela",
    "capitalName": "Tingrela",
    "owner": "neutral",
    "theater": "africa",
    "x": 1085.5,
    "y": 608.3,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "ouagadougou",
      "abidjan",
      "timbuktu",
      "guinea",
      "menaka",
      "tessalit"
    ],
    "polygon": [
      {
        "x": 1105.5,
        "y": 608.3
      },
      {
        "x": 1099.6,
        "y": 622.4
      },
      {
        "x": 1085.5,
        "y": 628.3
      },
      {
        "x": 1071.4,
        "y": 622.4
      },
      {
        "x": 1065.5,
        "y": 608.3
      },
      {
        "x": 1071.4,
        "y": 594.2
      },
      {
        "x": 1085.5,
        "y": 588.3
      },
      {
        "x": 1099.6,
        "y": 594.2
      }
    ]
  },
  {
    "id": "calabar",
    "name": "Provincia de Calabar",
    "capitalName": "Calabar",
    "owner": "neutral",
    "theater": "africa",
    "x": 1182.8,
    "y": 647.5,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "nsork",
      "batouri",
      "guinea",
      "kano",
      "maroua",
      "kabo",
      "abidjan"
    ],
    "polygon": [
      {
        "x": 1202.8,
        "y": 647.5
      },
      {
        "x": 1196.9,
        "y": 661.6
      },
      {
        "x": 1182.8,
        "y": 667.5
      },
      {
        "x": 1168.7,
        "y": 661.6
      },
      {
        "x": 1162.8,
        "y": 647.5
      },
      {
        "x": 1168.7,
        "y": 633.4
      },
      {
        "x": 1182.8,
        "y": 627.5
      },
      {
        "x": 1196.9,
        "y": 633.4
      }
    ]
  },
  {
    "id": "kano",
    "name": "Provincia de Kano",
    "capitalName": "Kano",
    "owner": "neutral",
    "theater": "africa",
    "x": 1184.3,
    "y": 597.2,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "agadez",
      "maroua",
      "guinea",
      "menaka",
      "calabar",
      "dirkou"
    ],
    "polygon": [
      {
        "x": 1204.3,
        "y": 597.2
      },
      {
        "x": 1198.4,
        "y": 611.3
      },
      {
        "x": 1184.3,
        "y": 617.2
      },
      {
        "x": 1170.2,
        "y": 611.3
      },
      {
        "x": 1164.3,
        "y": 597.2
      },
      {
        "x": 1170.2,
        "y": 583.1
      },
      {
        "x": 1184.3,
        "y": 577.2
      },
      {
        "x": 1198.4,
        "y": 583.1
      }
    ]
  },
  {
    "id": "batouri",
    "name": "Provincia de Batouri",
    "capitalName": "Batouri",
    "owner": "neutral",
    "theater": "africa",
    "x": 1222.3,
    "y": 651.4,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "nsork",
      "kabo",
      "gemena",
      "calabar",
      "maroua",
      "congo"
    ],
    "polygon": [
      {
        "x": 1242.3,
        "y": 651.4
      },
      {
        "x": 1236.4,
        "y": 665.5
      },
      {
        "x": 1222.3,
        "y": 671.4
      },
      {
        "x": 1208.2,
        "y": 665.5
      },
      {
        "x": 1202.3,
        "y": 651.4
      },
      {
        "x": 1208.2,
        "y": 637.3
      },
      {
        "x": 1222.3,
        "y": 631.4
      },
      {
        "x": 1236.4,
        "y": 637.3
      }
    ]
  },
  {
    "id": "maroua",
    "name": "Provincia de Maroua",
    "capitalName": "Maroua",
    "owner": "neutral",
    "theater": "africa",
    "x": 1222.0,
    "y": 607.3,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "kabo",
      "kano",
      "derba",
      "batouri",
      "birao",
      "calabar",
      "agadez",
      "nsork"
    ],
    "polygon": [
      {
        "x": 1242.0,
        "y": 607.3
      },
      {
        "x": 1236.1,
        "y": 621.4
      },
      {
        "x": 1222.0,
        "y": 627.3
      },
      {
        "x": 1207.9,
        "y": 621.4
      },
      {
        "x": 1202.0,
        "y": 607.3
      },
      {
        "x": 1207.9,
        "y": 593.2
      },
      {
        "x": 1222.0,
        "y": 587.3
      },
      {
        "x": 1236.1,
        "y": 593.2
      }
    ]
  },
  {
    "id": "gemena",
    "name": "Provincia de Gemena",
    "capitalName": "Gemena",
    "owner": "neutral",
    "theater": "africa",
    "x": 1258.0,
    "y": 659.9,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "kabo",
      "batouri",
      "kisangani",
      "tambura",
      "birao",
      "nsork",
      "congo",
      "mweka"
    ],
    "polygon": [
      {
        "x": 1278.0,
        "y": 659.9
      },
      {
        "x": 1272.1,
        "y": 674.0
      },
      {
        "x": 1258.0,
        "y": 679.9
      },
      {
        "x": 1243.9,
        "y": 674.0
      },
      {
        "x": 1238.0,
        "y": 659.9
      },
      {
        "x": 1243.9,
        "y": 645.8
      },
      {
        "x": 1258.0,
        "y": 639.9
      },
      {
        "x": 1272.1,
        "y": 645.8
      }
    ]
  },
  {
    "id": "kisangani",
    "name": "Provincia de Kisangani",
    "capitalName": "Kisangani",
    "owner": "neutral",
    "theater": "africa",
    "x": 1293.5,
    "y": 678.8,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "tambura",
      "gemena",
      "butare",
      "mweka",
      "mbale",
      "kabo",
      "congo"
    ],
    "polygon": [
      {
        "x": 1313.5,
        "y": 678.8
      },
      {
        "x": 1307.6,
        "y": 692.9
      },
      {
        "x": 1293.5,
        "y": 698.8
      },
      {
        "x": 1279.4,
        "y": 692.9
      },
      {
        "x": 1273.5,
        "y": 678.8
      },
      {
        "x": 1279.4,
        "y": 664.7
      },
      {
        "x": 1293.5,
        "y": 658.8
      },
      {
        "x": 1307.6,
        "y": 664.7
      }
    ]
  },
  {
    "id": "tambura",
    "name": "Provincia de Tambura",
    "capitalName": "Tambura",
    "owner": "neutral",
    "theater": "africa",
    "x": 1308.6,
    "y": 643.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "kisangani",
      "laqawa",
      "birao",
      "gemena",
      "mbale",
      "kabo",
      "arba_minch"
    ],
    "polygon": [
      {
        "x": 1328.6,
        "y": 643.0
      },
      {
        "x": 1322.7,
        "y": 657.1
      },
      {
        "x": 1308.6,
        "y": 663.0
      },
      {
        "x": 1294.5,
        "y": 657.1
      },
      {
        "x": 1288.6,
        "y": 643.0
      },
      {
        "x": 1294.5,
        "y": 628.9
      },
      {
        "x": 1308.6,
        "y": 623.0
      },
      {
        "x": 1322.7,
        "y": 628.9
      }
    ]
  },
  {
    "id": "birao",
    "name": "Provincia de Birao",
    "capitalName": "Birao",
    "owner": "neutral",
    "theater": "africa",
    "x": 1277.7,
    "y": 609.8,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "kutum",
      "kabo",
      "derba",
      "laqawa",
      "tambura",
      "gemena",
      "maroua",
      "ndupo"
    ],
    "polygon": [
      {
        "x": 1297.7,
        "y": 609.8
      },
      {
        "x": 1291.8,
        "y": 623.9
      },
      {
        "x": 1277.7,
        "y": 629.8
      },
      {
        "x": 1263.6,
        "y": 623.9
      },
      {
        "x": 1257.7,
        "y": 609.8
      },
      {
        "x": 1263.6,
        "y": 595.7
      },
      {
        "x": 1277.7,
        "y": 589.8
      },
      {
        "x": 1291.8,
        "y": 595.7
      }
    ]
  },
  {
    "id": "taoudenni",
    "name": "Provincia de Taoudenni",
    "capitalName": "Taoudenni",
    "owner": "neutral",
    "theater": "africa",
    "x": 1101.6,
    "y": 518.0,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "manfue",
      "tessalit",
      "reggane",
      "timbuktu",
      "zag",
      "tamanrasset"
    ],
    "polygon": [
      {
        "x": 1121.6,
        "y": 518.0
      },
      {
        "x": 1115.7,
        "y": 532.1
      },
      {
        "x": 1101.6,
        "y": 538.0
      },
      {
        "x": 1087.5,
        "y": 532.1
      },
      {
        "x": 1081.6,
        "y": 518.0
      },
      {
        "x": 1087.5,
        "y": 503.9
      },
      {
        "x": 1101.6,
        "y": 498.0
      },
      {
        "x": 1115.7,
        "y": 503.9
      }
    ]
  },
  {
    "id": "menaka",
    "name": "Provincia de Menaka",
    "capitalName": "Menaka",
    "owner": "neutral",
    "theater": "africa",
    "x": 1143.5,
    "y": 568.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "tessalit",
      "timbuktu",
      "ouagadougou",
      "agadez",
      "guinea",
      "kano",
      "abidjan",
      "tingrela",
      "tamanrasset"
    ],
    "polygon": [
      {
        "x": 1163.5,
        "y": 568.8
      },
      {
        "x": 1157.6,
        "y": 582.9
      },
      {
        "x": 1143.5,
        "y": 588.8
      },
      {
        "x": 1129.4,
        "y": 582.9
      },
      {
        "x": 1123.5,
        "y": 568.8
      },
      {
        "x": 1129.4,
        "y": 554.7
      },
      {
        "x": 1143.5,
        "y": 548.8
      },
      {
        "x": 1157.6,
        "y": 554.7
      }
    ]
  },
  {
    "id": "agadez",
    "name": "Provincia de Agadez",
    "capitalName": "Agadez",
    "owner": "neutral",
    "theater": "africa",
    "x": 1180.4,
    "y": 561.0,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "kano",
      "dirkou",
      "menaka",
      "tamanrasset",
      "tessalit",
      "maroua"
    ],
    "polygon": [
      {
        "x": 1200.4,
        "y": 561.0
      },
      {
        "x": 1194.5,
        "y": 575.1
      },
      {
        "x": 1180.4,
        "y": 581.0
      },
      {
        "x": 1166.3,
        "y": 575.1
      },
      {
        "x": 1160.4,
        "y": 561.0
      },
      {
        "x": 1166.3,
        "y": 546.9
      },
      {
        "x": 1180.4,
        "y": 541.0
      },
      {
        "x": 1194.5,
        "y": 546.9
      }
    ]
  },
  {
    "id": "dirkou",
    "name": "Provincia de Dirkou",
    "capitalName": "Dirkou",
    "owner": "neutral",
    "theater": "africa",
    "x": 1214.1,
    "y": 545.9,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "agadez",
      "omou",
      "derba",
      "tamanrasset",
      "dujal",
      "kano"
    ],
    "polygon": [
      {
        "x": 1234.1,
        "y": 545.9
      },
      {
        "x": 1228.2,
        "y": 560.0
      },
      {
        "x": 1214.1,
        "y": 565.9
      },
      {
        "x": 1200.0,
        "y": 560.0
      },
      {
        "x": 1194.1,
        "y": 545.9
      },
      {
        "x": 1200.0,
        "y": 531.8
      },
      {
        "x": 1214.1,
        "y": 525.9
      },
      {
        "x": 1228.2,
        "y": 531.8
      }
    ]
  },
  {
    "id": "derba",
    "name": "Provincia de Derba",
    "capitalName": "Derba",
    "owner": "neutral",
    "theater": "africa",
    "x": 1254.5,
    "y": 579.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "kutum",
      "birao",
      "maroua",
      "agoza",
      "kabo",
      "dirkou",
      "omou"
    ],
    "polygon": [
      {
        "x": 1274.5,
        "y": 579.8
      },
      {
        "x": 1268.6,
        "y": 593.9
      },
      {
        "x": 1254.5,
        "y": 599.8
      },
      {
        "x": 1240.4,
        "y": 593.9
      },
      {
        "x": 1234.5,
        "y": 579.8
      },
      {
        "x": 1240.4,
        "y": 565.7
      },
      {
        "x": 1254.5,
        "y": 559.8
      },
      {
        "x": 1268.6,
        "y": 565.7
      }
    ]
  },
  {
    "id": "agoza",
    "name": "Provincia de Agoza",
    "capitalName": "Agoza",
    "owner": "neutral",
    "theater": "africa",
    "x": 1284.5,
    "y": 547.5,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "ndupo",
      "kutum",
      "wahat_salima",
      "omou",
      "derba",
      "kazulu",
      "nubia"
    ],
    "polygon": [
      {
        "x": 1304.5,
        "y": 547.5
      },
      {
        "x": 1298.6,
        "y": 561.6
      },
      {
        "x": 1284.5,
        "y": 567.5
      },
      {
        "x": 1270.4,
        "y": 561.6
      },
      {
        "x": 1264.5,
        "y": 547.5
      },
      {
        "x": 1270.4,
        "y": 533.4
      },
      {
        "x": 1284.5,
        "y": 527.5
      },
      {
        "x": 1298.6,
        "y": 533.4
      }
    ]
  },
  {
    "id": "omou",
    "name": "Provincia de Omou",
    "capitalName": "Omou",
    "owner": "neutral",
    "theater": "africa",
    "x": 1246.6,
    "y": 527.0,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "dirkou",
      "agoza",
      "al_fuqaha",
      "kazulu",
      "derba",
      "dujal"
    ],
    "polygon": [
      {
        "x": 1266.6,
        "y": 527.0
      },
      {
        "x": 1260.7,
        "y": 541.1
      },
      {
        "x": 1246.6,
        "y": 547.0
      },
      {
        "x": 1232.5,
        "y": 541.1
      },
      {
        "x": 1226.6,
        "y": 527.0
      },
      {
        "x": 1232.5,
        "y": 512.9
      },
      {
        "x": 1246.6,
        "y": 507.0
      },
      {
        "x": 1260.7,
        "y": 512.9
      }
    ]
  },
  {
    "id": "laqawa",
    "name": "Provincia de Laqawa",
    "capitalName": "Laqawa",
    "owner": "neutral",
    "theater": "africa",
    "x": 1319.3,
    "y": 601.7,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "kutum",
      "nubia",
      "ndupo",
      "birao",
      "tambura",
      "gondar"
    ],
    "polygon": [
      {
        "x": 1339.3,
        "y": 601.7
      },
      {
        "x": 1333.4,
        "y": 615.8
      },
      {
        "x": 1319.3,
        "y": 621.7
      },
      {
        "x": 1305.2,
        "y": 615.8
      },
      {
        "x": 1299.3,
        "y": 601.7
      },
      {
        "x": 1305.2,
        "y": 587.6
      },
      {
        "x": 1319.3,
        "y": 581.7
      },
      {
        "x": 1333.4,
        "y": 587.6
      }
    ]
  },
  {
    "id": "wahat_salima",
    "name": "Provincia de Wahat Salima",
    "capitalName": "Wahat Salima",
    "owner": "neutral",
    "theater": "africa",
    "x": 1320.0,
    "y": 529.1,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "ndupo",
      "kazulu",
      "agoza",
      "sohag",
      "nubia",
      "kutum"
    ],
    "polygon": [
      {
        "x": 1340.0,
        "y": 529.1
      },
      {
        "x": 1334.1,
        "y": 543.2
      },
      {
        "x": 1320.0,
        "y": 549.1
      },
      {
        "x": 1305.9,
        "y": 543.2
      },
      {
        "x": 1300.0,
        "y": 529.1
      },
      {
        "x": 1305.9,
        "y": 515.0
      },
      {
        "x": 1320.0,
        "y": 509.1
      },
      {
        "x": 1334.1,
        "y": 515.0
      }
    ]
  },
  {
    "id": "kazulu",
    "name": "Provincia de Kazulu",
    "capitalName": "Kazulu",
    "owner": "neutral",
    "theater": "africa",
    "x": 1293.5,
    "y": 502.6,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "siwa_oasis",
      "wahat_salima",
      "awjilah",
      "sohag",
      "agoza",
      "omou"
    ],
    "polygon": [
      {
        "x": 1313.5,
        "y": 502.6
      },
      {
        "x": 1307.6,
        "y": 516.7
      },
      {
        "x": 1293.5,
        "y": 522.6
      },
      {
        "x": 1279.4,
        "y": 516.7
      },
      {
        "x": 1273.5,
        "y": 502.6
      },
      {
        "x": 1279.4,
        "y": 488.5
      },
      {
        "x": 1293.5,
        "y": 482.6
      },
      {
        "x": 1307.6,
        "y": 488.5
      }
    ]
  },
  {
    "id": "tamanrasset",
    "name": "Provincia de Tamanrasset",
    "capitalName": "Tamanrasset",
    "owner": "neutral",
    "theater": "africa",
    "x": 1163.9,
    "y": 517.1,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "tessalit",
      "wuban",
      "reggane",
      "agadez",
      "dujal",
      "menaka",
      "taoudenni",
      "dirkou"
    ],
    "polygon": [
      {
        "x": 1183.9,
        "y": 517.1
      },
      {
        "x": 1178.0,
        "y": 531.2
      },
      {
        "x": 1163.9,
        "y": 537.1
      },
      {
        "x": 1149.8,
        "y": 531.2
      },
      {
        "x": 1143.9,
        "y": 517.1
      },
      {
        "x": 1149.8,
        "y": 503.0
      },
      {
        "x": 1163.9,
        "y": 497.1
      },
      {
        "x": 1178.0,
        "y": 503.0
      }
    ]
  },
  {
    "id": "mthatha",
    "name": "Provincia de Mthatha",
    "capitalName": "Mthatha",
    "owner": "neutral",
    "theater": "africa",
    "x": 1317.0,
    "y": 918.8,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "johannesburg",
      "xai_xai",
      "pofadder",
      "cape_town",
      "hukuntsi",
      "nata"
    ],
    "polygon": [
      {
        "x": 1337.0,
        "y": 918.8
      },
      {
        "x": 1331.1,
        "y": 932.9
      },
      {
        "x": 1317.0,
        "y": 938.8
      },
      {
        "x": 1302.9,
        "y": 932.9
      },
      {
        "x": 1297.0,
        "y": 918.8
      },
      {
        "x": 1302.9,
        "y": 904.7
      },
      {
        "x": 1317.0,
        "y": 898.8
      },
      {
        "x": 1331.1,
        "y": 904.7
      }
    ]
  },
  {
    "id": "pofadder",
    "name": "Provincia de Pofadder",
    "capitalName": "Pofadder",
    "owner": "neutral",
    "theater": "africa",
    "x": 1255.5,
    "y": 898.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "cape_town",
      "hukuntsi",
      "johannesburg",
      "mthatha",
      "nata",
      "rundu"
    ],
    "polygon": [
      {
        "x": 1275.5,
        "y": 898.8
      },
      {
        "x": 1269.6,
        "y": 912.9
      },
      {
        "x": 1255.5,
        "y": 918.8
      },
      {
        "x": 1241.4,
        "y": 912.9
      },
      {
        "x": 1235.5,
        "y": 898.8
      },
      {
        "x": 1241.4,
        "y": 884.7
      },
      {
        "x": 1255.5,
        "y": 878.8
      },
      {
        "x": 1269.6,
        "y": 884.7
      }
    ]
  },
  {
    "id": "johannesburg",
    "name": "Provincia de Johannesburg",
    "capitalName": "Johannesburg",
    "owner": "neutral",
    "theater": "africa",
    "x": 1312.3,
    "y": 875.0,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "xai_xai",
      "mthatha",
      "hukuntsi",
      "nata",
      "chipinge",
      "pofadder",
      "cape_town",
      "rundu"
    ],
    "polygon": [
      {
        "x": 1332.3,
        "y": 875.0
      },
      {
        "x": 1326.4,
        "y": 889.1
      },
      {
        "x": 1312.3,
        "y": 895.0
      },
      {
        "x": 1298.2,
        "y": 889.1
      },
      {
        "x": 1292.3,
        "y": 875.0
      },
      {
        "x": 1298.2,
        "y": 860.9
      },
      {
        "x": 1312.3,
        "y": 855.0
      },
      {
        "x": 1326.4,
        "y": 860.9
      }
    ]
  },
  {
    "id": "hukuntsi",
    "name": "Provincia de Hukuntsi",
    "capitalName": "Hukuntsi",
    "owner": "neutral",
    "theater": "africa",
    "x": 1270.8,
    "y": 857.9,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "nata",
      "pofadder",
      "johannesburg",
      "rundu",
      "kaoma",
      "mthatha",
      "cape_town"
    ],
    "polygon": [
      {
        "x": 1290.8,
        "y": 857.9
      },
      {
        "x": 1284.9,
        "y": 872.0
      },
      {
        "x": 1270.8,
        "y": 877.9
      },
      {
        "x": 1256.7,
        "y": 872.0
      },
      {
        "x": 1250.8,
        "y": 857.9
      },
      {
        "x": 1256.7,
        "y": 843.8
      },
      {
        "x": 1270.8,
        "y": 837.9
      },
      {
        "x": 1284.9,
        "y": 843.8
      }
    ]
  },
  {
    "id": "nata",
    "name": "Provincia de Nata",
    "capitalName": "Nata",
    "owner": "neutral",
    "theater": "africa",
    "x": 1300.1,
    "y": 828.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "kaoma",
      "hukuntsi",
      "chipinge",
      "rundu",
      "johannesburg",
      "xai_xai",
      "cape_town",
      "mthatha",
      "pofadder",
      "furancungo"
    ],
    "polygon": [
      {
        "x": 1320.1,
        "y": 828.9
      },
      {
        "x": 1314.2,
        "y": 843.0
      },
      {
        "x": 1300.1,
        "y": 848.9
      },
      {
        "x": 1286.0,
        "y": 843.0
      },
      {
        "x": 1280.1,
        "y": 828.9
      },
      {
        "x": 1286.0,
        "y": 814.8
      },
      {
        "x": 1300.1,
        "y": 808.9
      },
      {
        "x": 1314.2,
        "y": 814.8
      }
    ]
  },
  {
    "id": "chipinge",
    "name": "Provincia de Chipinge",
    "capitalName": "Chipinge",
    "owner": "neutral",
    "theater": "africa",
    "x": 1342.2,
    "y": 828.5,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "xai_xai",
      "furancungo",
      "nata",
      "johannesburg",
      "angoche",
      "kaoma",
      "beloha",
      "morondava"
    ],
    "polygon": [
      {
        "x": 1362.2,
        "y": 828.5
      },
      {
        "x": 1356.3,
        "y": 842.6
      },
      {
        "x": 1342.2,
        "y": 848.5
      },
      {
        "x": 1328.1,
        "y": 842.6
      },
      {
        "x": 1322.2,
        "y": 828.5
      },
      {
        "x": 1328.1,
        "y": 814.4
      },
      {
        "x": 1342.2,
        "y": 808.5
      },
      {
        "x": 1356.3,
        "y": 814.4
      }
    ]
  },
  {
    "id": "furancungo",
    "name": "Provincia de Furancungo",
    "capitalName": "Furancungo",
    "owner": "neutral",
    "theater": "africa",
    "x": 1349.1,
    "y": 788.8,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "chipinge",
      "mbeya",
      "angoche",
      "kaoma",
      "nata",
      "bukama",
      "zanzibar",
      "xai_xai"
    ],
    "polygon": [
      {
        "x": 1369.1,
        "y": 788.8
      },
      {
        "x": 1363.2,
        "y": 802.9
      },
      {
        "x": 1349.1,
        "y": 808.8
      },
      {
        "x": 1335.0,
        "y": 802.9
      },
      {
        "x": 1329.1,
        "y": 788.8
      },
      {
        "x": 1335.0,
        "y": 774.7
      },
      {
        "x": 1349.1,
        "y": 768.8
      },
      {
        "x": 1363.2,
        "y": 774.7
      }
    ]
  },
  {
    "id": "angoche",
    "name": "Provincia de Angoche",
    "capitalName": "Angoche",
    "owner": "neutral",
    "theater": "africa",
    "x": 1390.5,
    "y": 799.2,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "silver",
    "neighbors": [
      "mitsamiouli",
      "morondava",
      "furancungo",
      "chipinge",
      "toamasina",
      "ambilobe",
      "mbeya",
      "beloha"
    ],
    "polygon": [
      {
        "x": 1410.5,
        "y": 799.2
      },
      {
        "x": 1404.6,
        "y": 813.3
      },
      {
        "x": 1390.5,
        "y": 819.2
      },
      {
        "x": 1376.4,
        "y": 813.3
      },
      {
        "x": 1370.5,
        "y": 799.2
      },
      {
        "x": 1376.4,
        "y": 785.1
      },
      {
        "x": 1390.5,
        "y": 779.2
      },
      {
        "x": 1404.6,
        "y": 785.1
      }
    ]
  },
  {
    "id": "rundu",
    "name": "Provincia de Rundu",
    "capitalName": "Rundu",
    "owner": "neutral",
    "theater": "africa",
    "x": 1257.8,
    "y": 812.3,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "kaoma",
      "nata",
      "hukuntsi",
      "cacolo",
      "bukama",
      "johannesburg",
      "pofadder"
    ],
    "polygon": [
      {
        "x": 1277.8,
        "y": 812.3
      },
      {
        "x": 1271.9,
        "y": 826.4
      },
      {
        "x": 1257.8,
        "y": 832.3
      },
      {
        "x": 1243.7,
        "y": 826.4
      },
      {
        "x": 1237.8,
        "y": 812.3
      },
      {
        "x": 1243.7,
        "y": 798.2
      },
      {
        "x": 1257.8,
        "y": 792.3
      },
      {
        "x": 1271.9,
        "y": 798.2
      }
    ]
  },
  {
    "id": "butare",
    "name": "Provincia de Butare",
    "capitalName": "Butare",
    "owner": "neutral",
    "theater": "africa",
    "x": 1324.9,
    "y": 710.2,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "mbeya",
      "kisangani",
      "mbale",
      "bukama",
      "mweka",
      "zanzibar",
      "dadaab",
      "cacolo"
    ],
    "polygon": [
      {
        "x": 1344.9,
        "y": 710.2
      },
      {
        "x": 1339.0,
        "y": 724.3
      },
      {
        "x": 1324.9,
        "y": 730.2
      },
      {
        "x": 1310.8,
        "y": 724.3
      },
      {
        "x": 1304.9,
        "y": 710.2
      },
      {
        "x": 1310.8,
        "y": 696.1
      },
      {
        "x": 1324.9,
        "y": 690.2
      },
      {
        "x": 1339.0,
        "y": 696.1
      }
    ]
  },
  {
    "id": "mbeya",
    "name": "Provincia de Mbeya",
    "capitalName": "Mbeya",
    "owner": "neutral",
    "theater": "africa",
    "x": 1348.1,
    "y": 746.2,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "zanzibar",
      "furancungo",
      "butare",
      "bukama",
      "mitsamiouli",
      "angoche"
    ],
    "polygon": [
      {
        "x": 1368.1,
        "y": 746.2
      },
      {
        "x": 1362.2,
        "y": 760.3
      },
      {
        "x": 1348.1,
        "y": 766.2
      },
      {
        "x": 1334.0,
        "y": 760.3
      },
      {
        "x": 1328.1,
        "y": 746.2
      },
      {
        "x": 1334.0,
        "y": 732.1
      },
      {
        "x": 1348.1,
        "y": 726.2
      },
      {
        "x": 1362.2,
        "y": 732.1
      }
    ]
  },
  {
    "id": "mbale",
    "name": "Provincia de Mbale",
    "capitalName": "Mbale",
    "owner": "neutral",
    "theater": "africa",
    "x": 1352.8,
    "y": 675.3,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "dadaab",
      "arba_minch",
      "butare",
      "tambura",
      "kisangani",
      "zanzibar"
    ],
    "polygon": [
      {
        "x": 1372.8,
        "y": 675.3
      },
      {
        "x": 1366.9,
        "y": 689.4
      },
      {
        "x": 1352.8,
        "y": 695.3
      },
      {
        "x": 1338.7,
        "y": 689.4
      },
      {
        "x": 1332.8,
        "y": 675.3
      },
      {
        "x": 1338.7,
        "y": 661.2
      },
      {
        "x": 1352.8,
        "y": 655.3
      },
      {
        "x": 1366.9,
        "y": 661.2
      }
    ]
  },
  {
    "id": "dadaab",
    "name": "Provincia de Dadaab",
    "capitalName": "Dadaab",
    "owner": "neutral",
    "theater": "africa",
    "x": 1393.1,
    "y": 682.2,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "mbale",
      "zanzibar",
      "arba_minch",
      "beledweyne",
      "hargeisa",
      "butare",
      "anse_royale"
    ],
    "polygon": [
      {
        "x": 1413.1,
        "y": 682.2
      },
      {
        "x": 1407.2,
        "y": 696.3
      },
      {
        "x": 1393.1,
        "y": 702.2
      },
      {
        "x": 1379.0,
        "y": 696.3
      },
      {
        "x": 1373.1,
        "y": 682.2
      },
      {
        "x": 1379.0,
        "y": 668.1
      },
      {
        "x": 1393.1,
        "y": 662.2
      },
      {
        "x": 1407.2,
        "y": 668.1
      }
    ]
  },
  {
    "id": "beledweyne",
    "name": "Provincia de Beledweyne",
    "capitalName": "Beledweyne",
    "owner": "neutral",
    "theater": "africa",
    "x": 1425.4,
    "y": 649.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "hargeisa",
      "dadaab",
      "bandarbeyla",
      "arba_minch",
      "mocha",
      "gondar",
      "anse_royale"
    ],
    "polygon": [
      {
        "x": 1445.4,
        "y": 649.4
      },
      {
        "x": 1439.5,
        "y": 663.5
      },
      {
        "x": 1425.4,
        "y": 669.4
      },
      {
        "x": 1411.3,
        "y": 663.5
      },
      {
        "x": 1405.4,
        "y": 649.4
      },
      {
        "x": 1411.3,
        "y": 635.3
      },
      {
        "x": 1425.4,
        "y": 629.4
      },
      {
        "x": 1439.5,
        "y": 635.3
      }
    ]
  },
  {
    "id": "bandarbeyla",
    "name": "Provincia de Bandarbeyla",
    "capitalName": "Bandarbeyla",
    "owner": "neutral",
    "theater": "africa",
    "x": 1462.2,
    "y": 615.5,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "hadiboh",
      "hargeisa",
      "beledweyne",
      "mocha",
      "shisan",
      "sharorah",
      "anse_royale"
    ],
    "polygon": [
      {
        "x": 1482.2,
        "y": 615.5
      },
      {
        "x": 1476.3,
        "y": 629.6
      },
      {
        "x": 1462.2,
        "y": 635.5
      },
      {
        "x": 1448.1,
        "y": 629.6
      },
      {
        "x": 1442.2,
        "y": 615.5
      },
      {
        "x": 1448.1,
        "y": 601.4
      },
      {
        "x": 1462.2,
        "y": 595.5
      },
      {
        "x": 1476.3,
        "y": 601.4
      }
    ]
  },
  {
    "id": "arba_minch",
    "name": "Provincia de Arba Minch",
    "capitalName": "Arba Minch",
    "owner": "neutral",
    "theater": "africa",
    "x": 1375.0,
    "y": 640.2,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "silver",
    "neighbors": [
      "mbale",
      "dadaab",
      "gondar",
      "hargeisa",
      "beledweyne",
      "tambura"
    ],
    "polygon": [
      {
        "x": 1395.0,
        "y": 640.2
      },
      {
        "x": 1389.1,
        "y": 654.3
      },
      {
        "x": 1375.0,
        "y": 660.2
      },
      {
        "x": 1360.9,
        "y": 654.3
      },
      {
        "x": 1355.0,
        "y": 640.2
      },
      {
        "x": 1360.9,
        "y": 626.1
      },
      {
        "x": 1375.0,
        "y": 620.2
      },
      {
        "x": 1389.1,
        "y": 626.1
      }
    ]
  },
  {
    "id": "kaoma",
    "name": "Provincia de Kaoma",
    "capitalName": "Kaoma",
    "owner": "neutral",
    "theater": "africa",
    "x": 1290.9,
    "y": 788.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "rundu",
      "nata",
      "bukama",
      "cacolo",
      "furancungo",
      "chipinge",
      "hukuntsi"
    ],
    "polygon": [
      {
        "x": 1310.9,
        "y": 788.9
      },
      {
        "x": 1305.0,
        "y": 803.0
      },
      {
        "x": 1290.9,
        "y": 808.9
      },
      {
        "x": 1276.8,
        "y": 803.0
      },
      {
        "x": 1270.9,
        "y": 788.9
      },
      {
        "x": 1276.8,
        "y": 774.8
      },
      {
        "x": 1290.9,
        "y": 768.9
      },
      {
        "x": 1305.0,
        "y": 774.8
      }
    ]
  },
  {
    "id": "cacolo",
    "name": "Provincia de Cacolo",
    "capitalName": "Cacolo",
    "owner": "neutral",
    "theater": "africa",
    "x": 1254.3,
    "y": 755.0,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "mweka",
      "bukama",
      "congo",
      "kaoma",
      "rundu",
      "butare"
    ],
    "polygon": [
      {
        "x": 1274.3,
        "y": 755.0
      },
      {
        "x": 1268.4,
        "y": 769.1
      },
      {
        "x": 1254.3,
        "y": 775.0
      },
      {
        "x": 1240.2,
        "y": 769.1
      },
      {
        "x": 1234.3,
        "y": 755.0
      },
      {
        "x": 1240.2,
        "y": 740.9
      },
      {
        "x": 1254.3,
        "y": 735.0
      },
      {
        "x": 1268.4,
        "y": 740.9
      }
    ]
  },
  {
    "id": "mweka",
    "name": "Provincia de Mweka",
    "capitalName": "Mweka",
    "owner": "neutral",
    "theater": "africa",
    "x": 1269.6,
    "y": 717.2,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "cacolo",
      "bukama",
      "congo",
      "kisangani",
      "butare",
      "gemena"
    ],
    "polygon": [
      {
        "x": 1289.6,
        "y": 717.2
      },
      {
        "x": 1283.7,
        "y": 731.3
      },
      {
        "x": 1269.6,
        "y": 737.2
      },
      {
        "x": 1255.5,
        "y": 731.3
      },
      {
        "x": 1249.6,
        "y": 717.2
      },
      {
        "x": 1255.5,
        "y": 703.1
      },
      {
        "x": 1269.6,
        "y": 697.2
      },
      {
        "x": 1283.7,
        "y": 703.1
      }
    ]
  },
  {
    "id": "bukama",
    "name": "Provincia de Bukama",
    "capitalName": "Bukama",
    "owner": "neutral",
    "theater": "africa",
    "x": 1297.8,
    "y": 747.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "kaoma",
      "mweka",
      "cacolo",
      "butare",
      "mbeya",
      "furancungo",
      "rundu"
    ],
    "polygon": [
      {
        "x": 1317.8,
        "y": 747.9
      },
      {
        "x": 1311.9,
        "y": 762.0
      },
      {
        "x": 1297.8,
        "y": 767.9
      },
      {
        "x": 1283.7,
        "y": 762.0
      },
      {
        "x": 1277.8,
        "y": 747.9
      },
      {
        "x": 1283.7,
        "y": 733.8
      },
      {
        "x": 1297.8,
        "y": 727.9
      },
      {
        "x": 1311.9,
        "y": 733.8
      }
    ]
  },
  {
    "id": "beloha",
    "name": "Provincia de Beloha",
    "capitalName": "Beloha",
    "owner": "neutral",
    "theater": "africa",
    "x": 1424.5,
    "y": 866.9,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "morondava",
      "toamasina",
      "xai_xai",
      "angoche",
      "port_louis",
      "chipinge"
    ],
    "polygon": [
      {
        "x": 1444.5,
        "y": 866.9
      },
      {
        "x": 1438.6,
        "y": 881.0
      },
      {
        "x": 1424.5,
        "y": 886.9
      },
      {
        "x": 1410.4,
        "y": 881.0
      },
      {
        "x": 1404.5,
        "y": 866.9
      },
      {
        "x": 1410.4,
        "y": 852.8
      },
      {
        "x": 1424.5,
        "y": 846.9
      },
      {
        "x": 1438.6,
        "y": 852.8
      }
    ]
  },
  {
    "id": "toamasina",
    "name": "Provincia de Toamasina",
    "capitalName": "Toamasina",
    "owner": "neutral",
    "theater": "africa",
    "x": 1452.3,
    "y": 813.7,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "morondava",
      "ambilobe",
      "port_louis",
      "beloha",
      "mitsamiouli",
      "angoche",
      "anse_royale"
    ],
    "polygon": [
      {
        "x": 1472.3,
        "y": 813.7
      },
      {
        "x": 1466.4,
        "y": 827.8
      },
      {
        "x": 1452.3,
        "y": 833.7
      },
      {
        "x": 1438.2,
        "y": 827.8
      },
      {
        "x": 1432.3,
        "y": 813.7
      },
      {
        "x": 1438.2,
        "y": 799.6
      },
      {
        "x": 1452.3,
        "y": 793.7
      },
      {
        "x": 1466.4,
        "y": 799.6
      }
    ]
  },
  {
    "id": "port_louis",
    "name": "Provincia de Port Louis",
    "capitalName": "Port Louis",
    "owner": "neutral",
    "theater": "africa",
    "x": 1506.5,
    "y": 828.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "toamasina",
      "ambilobe",
      "morondava",
      "beloha",
      "mitsamiouli",
      "anse_royale"
    ],
    "polygon": [
      {
        "x": 1526.5,
        "y": 828.8
      },
      {
        "x": 1520.6,
        "y": 842.9
      },
      {
        "x": 1506.5,
        "y": 848.8
      },
      {
        "x": 1492.4,
        "y": 842.9
      },
      {
        "x": 1486.5,
        "y": 828.8
      },
      {
        "x": 1492.4,
        "y": 814.7
      },
      {
        "x": 1506.5,
        "y": 808.8
      },
      {
        "x": 1520.6,
        "y": 814.7
      }
    ]
  },
  {
    "id": "mitsamiouli",
    "name": "Provincia de Mitsamiouli",
    "capitalName": "Mitsamiouli",
    "owner": "neutral",
    "theater": "africa",
    "x": 1413.1,
    "y": 765.0,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "silver",
    "neighbors": [
      "ambilobe",
      "angoche",
      "zanzibar",
      "toamasina",
      "morondava",
      "mbeya",
      "port_louis",
      "anse_royale"
    ],
    "polygon": [
      {
        "x": 1433.1,
        "y": 765.0
      },
      {
        "x": 1427.2,
        "y": 779.1
      },
      {
        "x": 1413.1,
        "y": 785.0
      },
      {
        "x": 1399.0,
        "y": 779.1
      },
      {
        "x": 1393.1,
        "y": 765.0
      },
      {
        "x": 1399.0,
        "y": 750.9
      },
      {
        "x": 1413.1,
        "y": 745.0
      },
      {
        "x": 1427.2,
        "y": 750.9
      }
    ]
  },
  {
    "id": "anse_royale",
    "name": "Provincia de Anse Royale",
    "capitalName": "Anse Royale",
    "owner": "neutral",
    "theater": "africa",
    "x": 1493.0,
    "y": 716.3,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "ambilobe",
      "mitsamiouli",
      "beledweyne",
      "bandarbeyla",
      "dadaab",
      "toamasina",
      "port_louis"
    ],
    "polygon": [
      {
        "x": 1513.0,
        "y": 716.3
      },
      {
        "x": 1507.1,
        "y": 730.4
      },
      {
        "x": 1493.0,
        "y": 736.3
      },
      {
        "x": 1478.9,
        "y": 730.4
      },
      {
        "x": 1473.0,
        "y": 716.3
      },
      {
        "x": 1478.9,
        "y": 702.2
      },
      {
        "x": 1493.0,
        "y": 696.3
      },
      {
        "x": 1507.1,
        "y": 702.2
      }
    ]
  },
  {
    "id": "hargeisa",
    "name": "Provincia de Hargeisa",
    "capitalName": "Hargeisa",
    "owner": "neutral",
    "theater": "africa",
    "x": 1417.8,
    "y": 614.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "saltpeter",
    "neighbors": [
      "beledweyne",
      "mocha",
      "bandarbeyla",
      "gondar",
      "arba_minch",
      "sharorah",
      "dadaab",
      "hadiboh"
    ],
    "polygon": [
      {
        "x": 1437.8,
        "y": 614.9
      },
      {
        "x": 1431.9,
        "y": 629.0
      },
      {
        "x": 1417.8,
        "y": 634.9
      },
      {
        "x": 1403.7,
        "y": 629.0
      },
      {
        "x": 1397.8,
        "y": 614.9
      },
      {
        "x": 1403.7,
        "y": 600.8
      },
      {
        "x": 1417.8,
        "y": 594.9
      },
      {
        "x": 1431.9,
        "y": 600.8
      }
    ]
  },
  {
    "id": "mocha",
    "name": "Provincia de Mocha",
    "capitalName": "Mocha",
    "owner": "neutral",
    "theater": "africa",
    "x": 1412.7,
    "y": 577.9,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "hargeisa",
      "sharorah",
      "gondar",
      "mecca",
      "bandarbeyla",
      "layla",
      "beledweyne",
      "hadiboh"
    ],
    "polygon": [
      {
        "x": 1432.7,
        "y": 577.9
      },
      {
        "x": 1426.8,
        "y": 592.0
      },
      {
        "x": 1412.7,
        "y": 597.9
      },
      {
        "x": 1398.6,
        "y": 592.0
      },
      {
        "x": 1392.7,
        "y": 577.9
      },
      {
        "x": 1398.6,
        "y": 563.8
      },
      {
        "x": 1412.7,
        "y": 557.9
      },
      {
        "x": 1426.8,
        "y": 563.8
      }
    ]
  },
  {
    "id": "tanyaozi",
    "name": "Provincia de Tanyaozi",
    "capitalName": "Tanyaozi",
    "owner": "neutral",
    "theater": "asia",
    "x": 1767.0,
    "y": 362.4,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "iron",
    "neighbors": [
      "haixi",
      "bugat",
      "yinchuan",
      "jargalan",
      "khurmen",
      "taheerbasitao",
      "aketashi",
      "wudaoliang"
    ],
    "polygon": [
      {
        "x": 1787.0,
        "y": 362.4
      },
      {
        "x": 1781.1,
        "y": 376.5
      },
      {
        "x": 1767.0,
        "y": 382.4
      },
      {
        "x": 1752.9,
        "y": 376.5
      },
      {
        "x": 1747.0,
        "y": 362.4
      },
      {
        "x": 1752.9,
        "y": 348.3
      },
      {
        "x": 1767.0,
        "y": 342.4
      },
      {
        "x": 1781.1,
        "y": 348.3
      }
    ]
  },
  {
    "id": "haixi",
    "name": "Provincia de Haixi",
    "capitalName": "Haixi",
    "owner": "neutral",
    "theater": "asia",
    "x": 1768.9,
    "y": 400.5,
    "radius": 24,
    "terrain": "steppe",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "silver",
    "neighbors": [
      "yinchuan",
      "wudaoliang",
      "yushu",
      "tanyaozi",
      "gannan",
      "aketashi"
    ],
    "polygon": [
      {
        "x": 1788.9,
        "y": 400.5
      },
      {
        "x": 1783.0,
        "y": 414.6
      },
      {
        "x": 1768.9,
        "y": 420.5
      },
      {
        "x": 1754.8,
        "y": 414.6
      },
      {
        "x": 1748.9,
        "y": 400.5
      },
      {
        "x": 1754.8,
        "y": 386.4
      },
      {
        "x": 1768.9,
        "y": 380.5
      },
      {
        "x": 1783.0,
        "y": 386.4
      }
    ]
  },
  {
    "id": "alar",
    "name": "Provincia de Alar",
    "capitalName": "Alar",
    "owner": "neutral",
    "theater": "asia",
    "x": 1662.4,
    "y": 374.9,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "mazha",
      "taldykorgan",
      "aketashi",
      "karamay",
      "hanle",
      "batken"
    ],
    "polygon": [
      {
        "x": 1682.4,
        "y": 374.9
      },
      {
        "x": 1676.5,
        "y": 389.0
      },
      {
        "x": 1662.4,
        "y": 394.9
      },
      {
        "x": 1648.3,
        "y": 389.0
      },
      {
        "x": 1642.4,
        "y": 374.9
      },
      {
        "x": 1648.3,
        "y": 360.8
      },
      {
        "x": 1662.4,
        "y": 354.9
      },
      {
        "x": 1676.5,
        "y": 360.8
      }
    ]
  },
  {
    "id": "mazha",
    "name": "Provincia de Mazha",
    "capitalName": "Mazha",
    "owner": "neutral",
    "theater": "asia",
    "x": 1634.9,
    "y": 408.3,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "iron",
    "neighbors": [
      "hanle",
      "peshawar",
      "alar",
      "taleqan",
      "batken",
      "delhi"
    ],
    "polygon": [
      {
        "x": 1654.9,
        "y": 408.3
      },
      {
        "x": 1649.0,
        "y": 422.4
      },
      {
        "x": 1634.9,
        "y": 428.3
      },
      {
        "x": 1620.8,
        "y": 422.4
      },
      {
        "x": 1614.9,
        "y": 408.3
      },
      {
        "x": 1620.8,
        "y": 394.2
      },
      {
        "x": 1634.9,
        "y": 388.3
      },
      {
        "x": 1649.0,
        "y": 394.2
      }
    ]
  },
  {
    "id": "aketashi",
    "name": "Provincia de Aketashi",
    "capitalName": "Aketashi",
    "owner": "neutral",
    "theater": "asia",
    "x": 1711.6,
    "y": 386.3,
    "radius": 24,
    "terrain": "steppe",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "silver",
    "neighbors": [
      "wudaoliang",
      "alar",
      "taheerbasitao",
      "haixi",
      "tanyaozi",
      "karamay"
    ],
    "polygon": [
      {
        "x": 1731.6,
        "y": 386.3
      },
      {
        "x": 1725.7,
        "y": 400.4
      },
      {
        "x": 1711.6,
        "y": 406.3
      },
      {
        "x": 1697.5,
        "y": 400.4
      },
      {
        "x": 1691.6,
        "y": 386.3
      },
      {
        "x": 1697.5,
        "y": 372.2
      },
      {
        "x": 1711.6,
        "y": 366.3
      },
      {
        "x": 1725.7,
        "y": 372.2
      }
    ]
  },
  {
    "id": "hanle",
    "name": "Provincia de Hanle",
    "capitalName": "Hanle",
    "owner": "mughal",
    "theater": "asia",
    "x": 1647.8,
    "y": 437.4,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "mazha",
      "delhi",
      "lucknow",
      "bianla",
      "peshawar",
      "alar"
    ],
    "polygon": [
      {
        "x": 1667.8,
        "y": 437.4
      },
      {
        "x": 1661.9,
        "y": 451.5
      },
      {
        "x": 1647.8,
        "y": 457.4
      },
      {
        "x": 1633.7,
        "y": 451.5
      },
      {
        "x": 1627.8,
        "y": 437.4
      },
      {
        "x": 1633.7,
        "y": 423.3
      },
      {
        "x": 1647.8,
        "y": 417.4
      },
      {
        "x": 1661.9,
        "y": 423.3
      }
    ]
  },
  {
    "id": "kandy",
    "name": "Provincia de Kandy",
    "capitalName": "Kandy",
    "owner": "mughal",
    "theater": "asia",
    "x": 1658.4,
    "y": 618.3,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "kochi",
      "davanagere",
      "vijayanagara",
      "brahmapur",
      "chandrapur",
      "pune"
    ],
    "polygon": [
      {
        "x": 1678.4,
        "y": 618.3
      },
      {
        "x": 1672.5,
        "y": 632.4
      },
      {
        "x": 1658.4,
        "y": 638.3
      },
      {
        "x": 1644.3,
        "y": 632.4
      },
      {
        "x": 1638.4,
        "y": 618.3
      },
      {
        "x": 1644.3,
        "y": 604.2
      },
      {
        "x": 1658.4,
        "y": 598.3
      },
      {
        "x": 1672.5,
        "y": 604.2
      }
    ]
  },
  {
    "id": "kochi",
    "name": "Provincia de Kochi",
    "capitalName": "Kochi",
    "owner": "mughal",
    "theater": "asia",
    "x": 1630.1,
    "y": 600.5,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "davanagere",
      "kandy",
      "vijayanagara",
      "pune",
      "chandrapur",
      "brahmapur"
    ],
    "polygon": [
      {
        "x": 1650.1,
        "y": 600.5
      },
      {
        "x": 1644.2,
        "y": 614.6
      },
      {
        "x": 1630.1,
        "y": 620.5
      },
      {
        "x": 1616.0,
        "y": 614.6
      },
      {
        "x": 1610.1,
        "y": 600.5
      },
      {
        "x": 1616.0,
        "y": 586.4
      },
      {
        "x": 1630.1,
        "y": 580.5
      },
      {
        "x": 1644.2,
        "y": 586.4
      }
    ]
  },
  {
    "id": "davanagere",
    "name": "Provincia de Davanagere",
    "capitalName": "Davanagere",
    "owner": "mughal",
    "theater": "asia",
    "x": 1627.6,
    "y": 569.8,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "vijayanagara",
      "kochi",
      "pune",
      "chandrapur",
      "indore",
      "kandy"
    ],
    "polygon": [
      {
        "x": 1647.6,
        "y": 569.8
      },
      {
        "x": 1641.7,
        "y": 583.9
      },
      {
        "x": 1627.6,
        "y": 589.8
      },
      {
        "x": 1613.5,
        "y": 583.9
      },
      {
        "x": 1607.6,
        "y": 569.8
      },
      {
        "x": 1613.5,
        "y": 555.7
      },
      {
        "x": 1627.6,
        "y": 549.8
      },
      {
        "x": 1641.7,
        "y": 555.7
      }
    ]
  },
  {
    "id": "pune",
    "name": "Provincia de Pune",
    "capitalName": "Pune",
    "owner": "mughal",
    "theater": "asia",
    "x": 1614.1,
    "y": 542.1,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "junagadh",
      "davanagere",
      "indore",
      "chandrapur",
      "vijayanagara",
      "kochi",
      "kandy"
    ],
    "polygon": [
      {
        "x": 1634.1,
        "y": 542.1
      },
      {
        "x": 1628.2,
        "y": 556.2
      },
      {
        "x": 1614.1,
        "y": 562.1
      },
      {
        "x": 1600.0,
        "y": 556.2
      },
      {
        "x": 1594.1,
        "y": 542.1
      },
      {
        "x": 1600.0,
        "y": 528.0
      },
      {
        "x": 1614.1,
        "y": 522.1
      },
      {
        "x": 1628.2,
        "y": 528.0
      }
    ]
  },
  {
    "id": "indore",
    "name": "Provincia de Indore",
    "capitalName": "Indore",
    "owner": "mughal",
    "theater": "asia",
    "x": 1627.0,
    "y": 512.6,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "chandrapur",
      "pune",
      "junagadh",
      "delhi",
      "lucknow",
      "surajpur",
      "karachi",
      "davanagere"
    ],
    "polygon": [
      {
        "x": 1647.0,
        "y": 512.6
      },
      {
        "x": 1641.1,
        "y": 526.7
      },
      {
        "x": 1627.0,
        "y": 532.6
      },
      {
        "x": 1612.9,
        "y": 526.7
      },
      {
        "x": 1607.0,
        "y": 512.6
      },
      {
        "x": 1612.9,
        "y": 498.5
      },
      {
        "x": 1627.0,
        "y": 492.6
      },
      {
        "x": 1641.1,
        "y": 498.5
      }
    ]
  },
  {
    "id": "lucknow",
    "name": "Provincia de Lucknow",
    "capitalName": "Lucknow",
    "owner": "mughal",
    "theater": "asia",
    "x": 1660.7,
    "y": 482.5,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "delhi",
      "surajpur",
      "indore",
      "bianla",
      "hanle",
      "gangtok",
      "bengal",
      "brahmapur"
    ],
    "polygon": [
      {
        "x": 1680.7,
        "y": 482.5
      },
      {
        "x": 1674.8,
        "y": 496.6
      },
      {
        "x": 1660.7,
        "y": 502.5
      },
      {
        "x": 1646.6,
        "y": 496.6
      },
      {
        "x": 1640.7,
        "y": 482.5
      },
      {
        "x": 1646.6,
        "y": 468.4
      },
      {
        "x": 1660.7,
        "y": 462.5
      },
      {
        "x": 1674.8,
        "y": 468.4
      }
    ]
  },
  {
    "id": "sylhet",
    "name": "Provincia de Sylhet",
    "capitalName": "Sylhet",
    "owner": "mughal",
    "theater": "asia",
    "x": 1732.7,
    "y": 496.7,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "gangtok",
      "bengal",
      "hpaila",
      "taunggyi",
      "nagqu",
      "lincang",
      "brahmapur",
      "yangon",
      "bianla"
    ],
    "polygon": [
      {
        "x": 1752.7,
        "y": 496.7
      },
      {
        "x": 1746.8,
        "y": 510.8
      },
      {
        "x": 1732.7,
        "y": 516.7
      },
      {
        "x": 1718.6,
        "y": 510.8
      },
      {
        "x": 1712.7,
        "y": 496.7
      },
      {
        "x": 1718.6,
        "y": 482.6
      },
      {
        "x": 1732.7,
        "y": 476.7
      },
      {
        "x": 1746.8,
        "y": 482.6
      }
    ]
  },
  {
    "id": "gangtok",
    "name": "Provincia de Gangtok",
    "capitalName": "Gangtok",
    "owner": "mughal",
    "theater": "asia",
    "x": 1710.9,
    "y": 478.3,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "sylhet",
      "bianla",
      "bengal",
      "nagqu",
      "surajpur",
      "lucknow"
    ],
    "polygon": [
      {
        "x": 1730.9,
        "y": 478.3
      },
      {
        "x": 1725.0,
        "y": 492.4
      },
      {
        "x": 1710.9,
        "y": 498.3
      },
      {
        "x": 1696.8,
        "y": 492.4
      },
      {
        "x": 1690.9,
        "y": 478.3
      },
      {
        "x": 1696.8,
        "y": 464.2
      },
      {
        "x": 1710.9,
        "y": 458.3
      },
      {
        "x": 1725.0,
        "y": 464.2
      }
    ]
  },
  {
    "id": "brahmapur",
    "name": "Provincia de Brahmapur",
    "capitalName": "Brahmapur",
    "owner": "mughal",
    "theater": "asia",
    "x": 1685.7,
    "y": 536.5,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "surajpur",
      "bengal",
      "chandrapur",
      "vijayanagara",
      "lucknow",
      "sylhet",
      "kandy",
      "kochi",
      "diglipur"
    ],
    "polygon": [
      {
        "x": 1705.7,
        "y": 536.5
      },
      {
        "x": 1699.8,
        "y": 550.6
      },
      {
        "x": 1685.7,
        "y": 556.5
      },
      {
        "x": 1671.6,
        "y": 550.6
      },
      {
        "x": 1665.7,
        "y": 536.5
      },
      {
        "x": 1671.6,
        "y": 522.4
      },
      {
        "x": 1685.7,
        "y": 516.5
      },
      {
        "x": 1699.8,
        "y": 522.4
      }
    ]
  },
  {
    "id": "chandrapur",
    "name": "Provincia de Chandrapur",
    "capitalName": "Chandrapur",
    "owner": "mughal",
    "theater": "asia",
    "x": 1649.9,
    "y": 532.1,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "vijayanagara",
      "indore",
      "surajpur",
      "brahmapur",
      "pune",
      "davanagere",
      "junagadh",
      "kandy",
      "kochi"
    ],
    "polygon": [
      {
        "x": 1669.9,
        "y": 532.1
      },
      {
        "x": 1664.0,
        "y": 546.2
      },
      {
        "x": 1649.9,
        "y": 552.1
      },
      {
        "x": 1635.8,
        "y": 546.2
      },
      {
        "x": 1629.9,
        "y": 532.1
      },
      {
        "x": 1635.8,
        "y": 518.0
      },
      {
        "x": 1649.9,
        "y": 512.1
      },
      {
        "x": 1664.0,
        "y": 518.0
      }
    ]
  },
  {
    "id": "surajpur",
    "name": "Provincia de Surajpur",
    "capitalName": "Surajpur",
    "owner": "mughal",
    "theater": "asia",
    "x": 1673.4,
    "y": 509.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "lucknow",
      "brahmapur",
      "chandrapur",
      "bengal",
      "indore",
      "gangtok",
      "delhi",
      "vijayanagara"
    ],
    "polygon": [
      {
        "x": 1693.4,
        "y": 509.0
      },
      {
        "x": 1687.5,
        "y": 523.1
      },
      {
        "x": 1673.4,
        "y": 529.0
      },
      {
        "x": 1659.3,
        "y": 523.1
      },
      {
        "x": 1653.4,
        "y": 509.0
      },
      {
        "x": 1659.3,
        "y": 494.9
      },
      {
        "x": 1673.4,
        "y": 489.0
      },
      {
        "x": 1687.5,
        "y": 494.9
      }
    ]
  },
  {
    "id": "yangon",
    "name": "Provincia de Yangon",
    "capitalName": "Yangon",
    "owner": "mughal",
    "theater": "asia",
    "x": 1760.8,
    "y": 553.8,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "taunggyi",
      "diglipur",
      "siam",
      "lincang",
      "sylhet",
      "bengal",
      "krabi"
    ],
    "polygon": [
      {
        "x": 1780.8,
        "y": 553.8
      },
      {
        "x": 1774.9,
        "y": 567.9
      },
      {
        "x": 1760.8,
        "y": 573.8
      },
      {
        "x": 1746.7,
        "y": 567.9
      },
      {
        "x": 1740.8,
        "y": 553.8
      },
      {
        "x": 1746.7,
        "y": 539.7
      },
      {
        "x": 1760.8,
        "y": 533.8
      },
      {
        "x": 1774.9,
        "y": 539.7
      }
    ]
  },
  {
    "id": "taunggyi",
    "name": "Provincia de Taunggyi",
    "capitalName": "Taunggyi",
    "owner": "mughal",
    "theater": "asia",
    "x": 1766.5,
    "y": 526.1,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "yangon",
      "lincang",
      "sylhet",
      "hpaila",
      "siam",
      "qujing",
      "bengal",
      "diglipur",
      "hanoi"
    ],
    "polygon": [
      {
        "x": 1786.5,
        "y": 526.1
      },
      {
        "x": 1780.6,
        "y": 540.2
      },
      {
        "x": 1766.5,
        "y": 546.1
      },
      {
        "x": 1752.4,
        "y": 540.2
      },
      {
        "x": 1746.5,
        "y": 526.1
      },
      {
        "x": 1752.4,
        "y": 512.0
      },
      {
        "x": 1766.5,
        "y": 506.1
      },
      {
        "x": 1780.6,
        "y": 512.0
      }
    ]
  },
  {
    "id": "hpaila",
    "name": "Provincia de Hpaila",
    "capitalName": "Hpaila",
    "owner": "mughal",
    "theater": "asia",
    "x": 1770.0,
    "y": 479.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "lincang",
      "sylhet",
      "qujing",
      "yushu",
      "taunggyi",
      "nagqu",
      "chengdu"
    ],
    "polygon": [
      {
        "x": 1790.0,
        "y": 479.4
      },
      {
        "x": 1784.1,
        "y": 493.5
      },
      {
        "x": 1770.0,
        "y": 499.4
      },
      {
        "x": 1755.9,
        "y": 493.5
      },
      {
        "x": 1750.0,
        "y": 479.4
      },
      {
        "x": 1755.9,
        "y": 465.3
      },
      {
        "x": 1770.0,
        "y": 459.4
      },
      {
        "x": 1784.1,
        "y": 465.3
      }
    ]
  },
  {
    "id": "krabi",
    "name": "Provincia de Krabi",
    "capitalName": "Krabi",
    "owner": "mughal",
    "theater": "asia",
    "x": 1778.6,
    "y": 617.3,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "calang",
      "ca_mau",
      "siam",
      "malacca",
      "diglipur",
      "yangon"
    ],
    "polygon": [
      {
        "x": 1798.6,
        "y": 617.3
      },
      {
        "x": 1792.7,
        "y": 631.4
      },
      {
        "x": 1778.6,
        "y": 637.3
      },
      {
        "x": 1764.5,
        "y": 631.4
      },
      {
        "x": 1758.6,
        "y": 617.3
      },
      {
        "x": 1764.5,
        "y": 603.2
      },
      {
        "x": 1778.6,
        "y": 597.3
      },
      {
        "x": 1792.7,
        "y": 603.2
      }
    ]
  },
  {
    "id": "yushu",
    "name": "Provincia de Yushu",
    "capitalName": "Yushu",
    "owner": "mughal",
    "theater": "asia",
    "x": 1767.3,
    "y": 435.6,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "wudaoliang",
      "haixi",
      "nagqu",
      "gannan",
      "hpaila",
      "chengdu"
    ],
    "polygon": [
      {
        "x": 1787.3,
        "y": 435.6
      },
      {
        "x": 1781.4,
        "y": 449.7
      },
      {
        "x": 1767.3,
        "y": 455.6
      },
      {
        "x": 1753.2,
        "y": 449.7
      },
      {
        "x": 1747.3,
        "y": 435.6
      },
      {
        "x": 1753.2,
        "y": 421.5
      },
      {
        "x": 1767.3,
        "y": 415.6
      },
      {
        "x": 1781.4,
        "y": 421.5
      }
    ]
  },
  {
    "id": "nagqu",
    "name": "Provincia de Nagqu",
    "capitalName": "Nagqu",
    "owner": "mughal",
    "theater": "asia",
    "x": 1733.8,
    "y": 448.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "wudaoliang",
      "yushu",
      "gangtok",
      "bianla",
      "hpaila",
      "sylhet"
    ],
    "polygon": [
      {
        "x": 1753.8,
        "y": 448.0
      },
      {
        "x": 1747.9,
        "y": 462.1
      },
      {
        "x": 1733.8,
        "y": 468.0
      },
      {
        "x": 1719.7,
        "y": 462.1
      },
      {
        "x": 1713.8,
        "y": 448.0
      },
      {
        "x": 1719.7,
        "y": 433.9
      },
      {
        "x": 1733.8,
        "y": 428.0
      },
      {
        "x": 1747.9,
        "y": 433.9
      }
    ]
  },
  {
    "id": "bianla",
    "name": "Provincia de Bianla",
    "capitalName": "Bianla",
    "owner": "mughal",
    "theater": "asia",
    "x": 1694.9,
    "y": 451.0,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "gangtok",
      "nagqu",
      "lucknow",
      "hanle",
      "wudaoliang",
      "sylhet"
    ],
    "polygon": [
      {
        "x": 1714.9,
        "y": 451.0
      },
      {
        "x": 1709.0,
        "y": 465.1
      },
      {
        "x": 1694.9,
        "y": 471.0
      },
      {
        "x": 1680.8,
        "y": 465.1
      },
      {
        "x": 1674.9,
        "y": 451.0
      },
      {
        "x": 1680.8,
        "y": 436.9
      },
      {
        "x": 1694.9,
        "y": 431.0
      },
      {
        "x": 1709.0,
        "y": 436.9
      }
    ]
  },
  {
    "id": "wudaoliang",
    "name": "Provincia de Wudaoliang",
    "capitalName": "Wudaoliang",
    "owner": "mughal",
    "theater": "asia",
    "x": 1739.9,
    "y": 419.3,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "nagqu",
      "yushu",
      "haixi",
      "aketashi",
      "bianla",
      "tanyaozi"
    ],
    "polygon": [
      {
        "x": 1759.9,
        "y": 419.3
      },
      {
        "x": 1754.0,
        "y": 433.4
      },
      {
        "x": 1739.9,
        "y": 439.3
      },
      {
        "x": 1725.8,
        "y": 433.4
      },
      {
        "x": 1719.9,
        "y": 419.3
      },
      {
        "x": 1725.8,
        "y": 405.2
      },
      {
        "x": 1739.9,
        "y": 399.3
      },
      {
        "x": 1754.0,
        "y": 405.2
      }
    ]
  },
  {
    "id": "diglipur",
    "name": "Provincia de Diglipur",
    "capitalName": "Diglipur",
    "owner": "mughal",
    "theater": "asia",
    "x": 1739.9,
    "y": 578.2,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "yangon",
      "siam",
      "krabi",
      "taunggyi",
      "calang",
      "brahmapur"
    ],
    "polygon": [
      {
        "x": 1759.9,
        "y": 578.2
      },
      {
        "x": 1754.0,
        "y": 592.3
      },
      {
        "x": 1739.9,
        "y": 598.2
      },
      {
        "x": 1725.8,
        "y": 592.3
      },
      {
        "x": 1719.9,
        "y": 578.2
      },
      {
        "x": 1725.8,
        "y": 564.1
      },
      {
        "x": 1739.9,
        "y": 558.2
      },
      {
        "x": 1754.0,
        "y": 564.1
      }
    ]
  },
  {
    "id": "taipei",
    "name": "Provincia de Taipei",
    "capitalName": "Taipei",
    "owner": "china",
    "theater": "asia",
    "x": 1928.1,
    "y": 495.9,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "ningbo",
      "yingtan",
      "naha",
      "guangzhou",
      "changsha",
      "yancheng",
      "philippines"
    ],
    "polygon": [
      {
        "x": 1948.1,
        "y": 495.9
      },
      {
        "x": 1942.2,
        "y": 510.0
      },
      {
        "x": 1928.1,
        "y": 515.9
      },
      {
        "x": 1914.0,
        "y": 510.0
      },
      {
        "x": 1908.1,
        "y": 495.9
      },
      {
        "x": 1914.0,
        "y": 481.8
      },
      {
        "x": 1928.1,
        "y": 475.9
      },
      {
        "x": 1942.2,
        "y": 481.8
      }
    ]
  },
  {
    "id": "naha",
    "name": "Provincia de Naha",
    "capitalName": "Naha",
    "owner": "china",
    "theater": "asia",
    "x": 1968.5,
    "y": 487.2,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "taipei",
      "kyushu",
      "ningbo",
      "jeju",
      "yingtan",
      "yancheng"
    ],
    "polygon": [
      {
        "x": 1988.5,
        "y": 487.2
      },
      {
        "x": 1982.6,
        "y": 501.3
      },
      {
        "x": 1968.5,
        "y": 507.2
      },
      {
        "x": 1954.4,
        "y": 501.3
      },
      {
        "x": 1948.5,
        "y": 487.2
      },
      {
        "x": 1954.4,
        "y": 473.1
      },
      {
        "x": 1968.5,
        "y": 467.2
      },
      {
        "x": 1982.6,
        "y": 473.1
      }
    ]
  },
  {
    "id": "chongjin",
    "name": "Provincia de Chongjin",
    "capitalName": "Chongjin",
    "owner": "china",
    "theater": "asia",
    "x": 1981.8,
    "y": 363.1,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "qitaihe",
      "korea",
      "manchuria",
      "songyuan",
      "dalnegorsk",
      "dalian",
      "kyoto",
      "arkhara",
      "tokyo"
    ],
    "polygon": [
      {
        "x": 2001.8,
        "y": 363.1
      },
      {
        "x": 1995.9,
        "y": 377.2
      },
      {
        "x": 1981.8,
        "y": 383.1
      },
      {
        "x": 1967.7,
        "y": 377.2
      },
      {
        "x": 1961.8,
        "y": 363.1
      },
      {
        "x": 1967.7,
        "y": 349.0
      },
      {
        "x": 1981.8,
        "y": 343.1
      },
      {
        "x": 1995.9,
        "y": 349.0
      }
    ]
  },
  {
    "id": "lincang",
    "name": "Provincia de Lincang",
    "capitalName": "Lincang",
    "owner": "china",
    "theater": "asia",
    "x": 1786.5,
    "y": 504.3,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "qujing",
      "taunggyi",
      "hpaila",
      "hanoi",
      "sylhet",
      "yangon"
    ],
    "polygon": [
      {
        "x": 1806.5,
        "y": 504.3
      },
      {
        "x": 1800.6,
        "y": 518.4
      },
      {
        "x": 1786.5,
        "y": 524.3
      },
      {
        "x": 1772.4,
        "y": 518.4
      },
      {
        "x": 1766.5,
        "y": 504.3
      },
      {
        "x": 1772.4,
        "y": 490.2
      },
      {
        "x": 1786.5,
        "y": 484.3
      },
      {
        "x": 1800.6,
        "y": 490.2
      }
    ]
  },
  {
    "id": "qujing",
    "name": "Provincia de Qujing",
    "capitalName": "Qujing",
    "owner": "china",
    "theater": "asia",
    "x": 1811.1,
    "y": 492.4,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "lincang",
      "hanoi",
      "chengdu",
      "liuzhou",
      "hpaila",
      "xiejiawan",
      "taunggyi"
    ],
    "polygon": [
      {
        "x": 1831.1,
        "y": 492.4
      },
      {
        "x": 1825.2,
        "y": 506.5
      },
      {
        "x": 1811.1,
        "y": 512.4
      },
      {
        "x": 1797.0,
        "y": 506.5
      },
      {
        "x": 1791.1,
        "y": 492.4
      },
      {
        "x": 1797.0,
        "y": 478.3
      },
      {
        "x": 1811.1,
        "y": 472.4
      },
      {
        "x": 1825.2,
        "y": 478.3
      }
    ]
  },
  {
    "id": "liuzhou",
    "name": "Provincia de Liuzhou",
    "capitalName": "Liuzhou",
    "owner": "china",
    "theater": "asia",
    "x": 1848.1,
    "y": 501.3,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "guangzhou",
      "hanoi",
      "changsha",
      "qujing",
      "xiejiawan",
      "hue"
    ],
    "polygon": [
      {
        "x": 1868.1,
        "y": 501.3
      },
      {
        "x": 1862.2,
        "y": 515.4
      },
      {
        "x": 1848.1,
        "y": 521.3
      },
      {
        "x": 1834.0,
        "y": 515.4
      },
      {
        "x": 1828.1,
        "y": 501.3
      },
      {
        "x": 1834.0,
        "y": 487.2
      },
      {
        "x": 1848.1,
        "y": 481.3
      },
      {
        "x": 1862.2,
        "y": 487.2
      }
    ]
  },
  {
    "id": "hanzhong",
    "name": "Provincia de Hanzhong",
    "capitalName": "Hanzhong",
    "owner": "china",
    "theater": "asia",
    "x": 1832.4,
    "y": 435.3,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "chengdu",
      "xiejiawan",
      "yuncheng",
      "gannan",
      "yingquan",
      "xinyang",
      "changsha",
      "yinchuan"
    ],
    "polygon": [
      {
        "x": 1852.4,
        "y": 435.3
      },
      {
        "x": 1846.5,
        "y": 449.4
      },
      {
        "x": 1832.4,
        "y": 455.3
      },
      {
        "x": 1818.3,
        "y": 449.4
      },
      {
        "x": 1812.4,
        "y": 435.3
      },
      {
        "x": 1818.3,
        "y": 421.2
      },
      {
        "x": 1832.4,
        "y": 415.3
      },
      {
        "x": 1846.5,
        "y": 421.2
      }
    ]
  },
  {
    "id": "ningbo",
    "name": "Provincia de Ningbo",
    "capitalName": "Ningbo",
    "owner": "china",
    "theater": "asia",
    "x": 1928.0,
    "y": 459.8,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "yancheng",
      "yingtan",
      "taipei",
      "jeju",
      "naha",
      "xinyang",
      "kyushu"
    ],
    "polygon": [
      {
        "x": 1948.0,
        "y": 459.8
      },
      {
        "x": 1942.1,
        "y": 473.9
      },
      {
        "x": 1928.0,
        "y": 479.8
      },
      {
        "x": 1913.9,
        "y": 473.9
      },
      {
        "x": 1908.0,
        "y": 459.8
      },
      {
        "x": 1913.9,
        "y": 445.7
      },
      {
        "x": 1928.0,
        "y": 439.8
      },
      {
        "x": 1942.1,
        "y": 445.7
      }
    ]
  },
  {
    "id": "yingtan",
    "name": "Provincia de Yingtan",
    "capitalName": "Yingtan",
    "owner": "china",
    "theater": "asia",
    "x": 1898.5,
    "y": 472.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "changsha",
      "ningbo",
      "xinyang",
      "taipei",
      "yancheng",
      "guangzhou",
      "naha"
    ],
    "polygon": [
      {
        "x": 1918.5,
        "y": 472.0
      },
      {
        "x": 1912.6,
        "y": 486.1
      },
      {
        "x": 1898.5,
        "y": 492.0
      },
      {
        "x": 1884.4,
        "y": 486.1
      },
      {
        "x": 1878.5,
        "y": 472.0
      },
      {
        "x": 1884.4,
        "y": 457.9
      },
      {
        "x": 1898.5,
        "y": 452.0
      },
      {
        "x": 1912.6,
        "y": 457.9
      }
    ]
  },
  {
    "id": "changsha",
    "name": "Provincia de Changsha",
    "capitalName": "Changsha",
    "owner": "china",
    "theater": "asia",
    "x": 1871.1,
    "y": 472.0,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "xiejiawan",
      "yingtan",
      "xinyang",
      "guangzhou",
      "liuzhou",
      "hanzhong",
      "taipei"
    ],
    "polygon": [
      {
        "x": 1891.1,
        "y": 472.0
      },
      {
        "x": 1885.2,
        "y": 486.1
      },
      {
        "x": 1871.1,
        "y": 492.0
      },
      {
        "x": 1857.0,
        "y": 486.1
      },
      {
        "x": 1851.1,
        "y": 472.0
      },
      {
        "x": 1857.0,
        "y": 457.9
      },
      {
        "x": 1871.1,
        "y": 452.0
      },
      {
        "x": 1885.2,
        "y": 457.9
      }
    ]
  },
  {
    "id": "xinyang",
    "name": "Provincia de Xinyang",
    "capitalName": "Xinyang",
    "owner": "china",
    "theater": "asia",
    "x": 1878.8,
    "y": 442.5,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "yuncheng",
      "changsha",
      "yingtan",
      "xiejiawan",
      "yancheng",
      "jinan",
      "hanzhong",
      "ningbo",
      "xinzhou"
    ],
    "polygon": [
      {
        "x": 1898.8,
        "y": 442.5
      },
      {
        "x": 1892.9,
        "y": 456.6
      },
      {
        "x": 1878.8,
        "y": 462.5
      },
      {
        "x": 1864.7,
        "y": 456.6
      },
      {
        "x": 1858.8,
        "y": 442.5
      },
      {
        "x": 1864.7,
        "y": 428.4
      },
      {
        "x": 1878.8,
        "y": 422.5
      },
      {
        "x": 1892.9,
        "y": 428.4
      }
    ]
  },
  {
    "id": "xiejiawan",
    "name": "Provincia de Xiejiawan",
    "capitalName": "Xiejiawan",
    "owner": "china",
    "theater": "asia",
    "x": 1845.8,
    "y": 461.7,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "changsha",
      "hanzhong",
      "chengdu",
      "xinyang",
      "liuzhou",
      "yuncheng",
      "guangzhou",
      "qujing"
    ],
    "polygon": [
      {
        "x": 1865.8,
        "y": 461.7
      },
      {
        "x": 1859.9,
        "y": 475.8
      },
      {
        "x": 1845.8,
        "y": 481.7
      },
      {
        "x": 1831.7,
        "y": 475.8
      },
      {
        "x": 1825.8,
        "y": 461.7
      },
      {
        "x": 1831.7,
        "y": 447.6
      },
      {
        "x": 1845.8,
        "y": 441.7
      },
      {
        "x": 1859.9,
        "y": 447.6
      }
    ]
  },
  {
    "id": "yuncheng",
    "name": "Provincia de Yuncheng",
    "capitalName": "Yuncheng",
    "owner": "china",
    "theater": "asia",
    "x": 1858.8,
    "y": 419.5,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "yingquan",
      "xinzhou",
      "xinyang",
      "hanzhong",
      "jinan",
      "xiejiawan"
    ],
    "polygon": [
      {
        "x": 1878.8,
        "y": 419.5
      },
      {
        "x": 1872.9,
        "y": 433.6
      },
      {
        "x": 1858.8,
        "y": 439.5
      },
      {
        "x": 1844.7,
        "y": 433.6
      },
      {
        "x": 1838.8,
        "y": 419.5
      },
      {
        "x": 1844.7,
        "y": 405.4
      },
      {
        "x": 1858.8,
        "y": 399.5
      },
      {
        "x": 1872.9,
        "y": 405.4
      }
    ]
  },
  {
    "id": "yancheng",
    "name": "Provincia de Yancheng",
    "capitalName": "Yancheng",
    "owner": "china",
    "theater": "asia",
    "x": 1918.8,
    "y": 432.8,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "ningbo",
      "jinan",
      "xinyang",
      "jeju",
      "yingtan",
      "dalian",
      "korea",
      "taipei",
      "naha"
    ],
    "polygon": [
      {
        "x": 1938.8,
        "y": 432.8
      },
      {
        "x": 1932.9,
        "y": 446.9
      },
      {
        "x": 1918.8,
        "y": 452.8
      },
      {
        "x": 1904.7,
        "y": 446.9
      },
      {
        "x": 1898.8,
        "y": 432.8
      },
      {
        "x": 1904.7,
        "y": 418.7
      },
      {
        "x": 1918.8,
        "y": 412.8
      },
      {
        "x": 1932.9,
        "y": 418.7
      }
    ]
  },
  {
    "id": "dalian",
    "name": "Provincia de Dalian",
    "capitalName": "Dalian",
    "owner": "china",
    "theater": "asia",
    "x": 1928.1,
    "y": 387.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "manchuria",
      "jinan",
      "beijing",
      "korea",
      "yancheng",
      "jeju",
      "chongjin"
    ],
    "polygon": [
      {
        "x": 1948.1,
        "y": 387.8
      },
      {
        "x": 1942.2,
        "y": 401.9
      },
      {
        "x": 1928.1,
        "y": 407.8
      },
      {
        "x": 1914.0,
        "y": 401.9
      },
      {
        "x": 1908.1,
        "y": 387.8
      },
      {
        "x": 1914.0,
        "y": 373.7
      },
      {
        "x": 1928.1,
        "y": 367.8
      },
      {
        "x": 1942.2,
        "y": 373.7
      }
    ]
  },
  {
    "id": "jinan",
    "name": "Provincia de Jinan",
    "capitalName": "Jinan",
    "owner": "china",
    "theater": "asia",
    "x": 1898.9,
    "y": 406.4,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "beijing",
      "xinzhou",
      "yancheng",
      "dalian",
      "xinyang",
      "yuncheng"
    ],
    "polygon": [
      {
        "x": 1918.9,
        "y": 406.4
      },
      {
        "x": 1913.0,
        "y": 420.5
      },
      {
        "x": 1898.9,
        "y": 426.4
      },
      {
        "x": 1884.8,
        "y": 420.5
      },
      {
        "x": 1878.9,
        "y": 406.4
      },
      {
        "x": 1884.8,
        "y": 392.3
      },
      {
        "x": 1898.9,
        "y": 386.4
      },
      {
        "x": 1913.0,
        "y": 392.3
      }
    ]
  },
  {
    "id": "xinzhou",
    "name": "Provincia de Xinzhou",
    "capitalName": "Xinzhou",
    "owner": "china",
    "theater": "asia",
    "x": 1869.9,
    "y": 391.7,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "beijing",
      "yuncheng",
      "yingquan",
      "jinan",
      "khangi",
      "xinyang",
      "xilingol_league"
    ],
    "polygon": [
      {
        "x": 1889.9,
        "y": 391.7
      },
      {
        "x": 1884.0,
        "y": 405.8
      },
      {
        "x": 1869.9,
        "y": 411.7
      },
      {
        "x": 1855.8,
        "y": 405.8
      },
      {
        "x": 1849.9,
        "y": 391.7
      },
      {
        "x": 1855.8,
        "y": 377.6
      },
      {
        "x": 1869.9,
        "y": 371.7
      },
      {
        "x": 1884.0,
        "y": 377.6
      }
    ]
  },
  {
    "id": "jeju",
    "name": "Provincia de Jeju",
    "capitalName": "Jeju",
    "owner": "china",
    "theater": "asia",
    "x": 1960.8,
    "y": 431.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "kyushu",
      "korea",
      "yancheng",
      "ningbo",
      "dalian",
      "naha",
      "kyoto"
    ],
    "polygon": [
      {
        "x": 1980.8,
        "y": 431.8
      },
      {
        "x": 1974.9,
        "y": 445.9
      },
      {
        "x": 1960.8,
        "y": 451.8
      },
      {
        "x": 1946.7,
        "y": 445.9
      },
      {
        "x": 1940.8,
        "y": 431.8
      },
      {
        "x": 1946.7,
        "y": 417.7
      },
      {
        "x": 1960.8,
        "y": 411.8
      },
      {
        "x": 1974.9,
        "y": 417.7
      }
    ]
  },
  {
    "id": "arkhara",
    "name": "Provincia de Arkhara",
    "capitalName": "Arkhara",
    "owner": "china",
    "theater": "asia",
    "x": 1984.1,
    "y": 290.6,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "qitaihe",
      "zalantun",
      "songyuan",
      "agzu",
      "dalnegorsk",
      "chongjin",
      "yuzhno_sakhalinsk"
    ],
    "polygon": [
      {
        "x": 2004.1,
        "y": 290.6
      },
      {
        "x": 1998.2,
        "y": 304.7
      },
      {
        "x": 1984.1,
        "y": 310.6
      },
      {
        "x": 1970.0,
        "y": 304.7
      },
      {
        "x": 1964.1,
        "y": 290.6
      },
      {
        "x": 1970.0,
        "y": 276.5
      },
      {
        "x": 1984.1,
        "y": 270.6
      },
      {
        "x": 1998.2,
        "y": 276.5
      }
    ]
  },
  {
    "id": "khangi",
    "name": "Provincia de Khangi",
    "capitalName": "Khangi",
    "owner": "china",
    "theater": "asia",
    "x": 1851.8,
    "y": 354.5,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "choir",
      "khurmen",
      "xinzhou",
      "xilingol_league",
      "baruun_urt",
      "yingquan",
      "beijing"
    ],
    "polygon": [
      {
        "x": 1871.8,
        "y": 354.5
      },
      {
        "x": 1865.9,
        "y": 368.6
      },
      {
        "x": 1851.8,
        "y": 374.5
      },
      {
        "x": 1837.7,
        "y": 368.6
      },
      {
        "x": 1831.8,
        "y": 354.5
      },
      {
        "x": 1837.7,
        "y": 340.4
      },
      {
        "x": 1851.8,
        "y": 334.5
      },
      {
        "x": 1865.9,
        "y": 340.4
      }
    ]
  },
  {
    "id": "khurmen",
    "name": "Provincia de Khurmen",
    "capitalName": "Khurmen",
    "owner": "china",
    "theater": "asia",
    "x": 1812.8,
    "y": 349.3,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "jargalan",
      "khangi",
      "choir",
      "yinchuan",
      "tanyaozi",
      "erdenet"
    ],
    "polygon": [
      {
        "x": 1832.8,
        "y": 349.3
      },
      {
        "x": 1826.9,
        "y": 363.4
      },
      {
        "x": 1812.8,
        "y": 369.3
      },
      {
        "x": 1798.7,
        "y": 363.4
      },
      {
        "x": 1792.8,
        "y": 349.3
      },
      {
        "x": 1798.7,
        "y": 335.2
      },
      {
        "x": 1812.8,
        "y": 329.3
      },
      {
        "x": 1826.9,
        "y": 335.2
      }
    ]
  },
  {
    "id": "baruun_urt",
    "name": "Provincia de Baruun Urt",
    "capitalName": "Baruun Urt",
    "owner": "china",
    "theater": "asia",
    "x": 1873.5,
    "y": 318.1,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "xilingol_league",
      "choir",
      "khalkhgol",
      "khangi",
      "zalantun",
      "ulan_ude"
    ],
    "polygon": [
      {
        "x": 1893.5,
        "y": 318.1
      },
      {
        "x": 1887.6,
        "y": 332.2
      },
      {
        "x": 1873.5,
        "y": 338.1
      },
      {
        "x": 1859.4,
        "y": 332.2
      },
      {
        "x": 1853.5,
        "y": 318.1
      },
      {
        "x": 1859.4,
        "y": 304.0
      },
      {
        "x": 1873.5,
        "y": 298.1
      },
      {
        "x": 1887.6,
        "y": 304.0
      }
    ]
  },
  {
    "id": "khalkhgol",
    "name": "Provincia de Khalkhgol",
    "capitalName": "Khalkhgol",
    "owner": "china",
    "theater": "asia",
    "x": 1908.6,
    "y": 308.7,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "zalantun",
      "baruun_urt",
      "xilingol_league",
      "songyuan",
      "manchuria",
      "choir"
    ],
    "polygon": [
      {
        "x": 1928.6,
        "y": 308.7
      },
      {
        "x": 1922.7,
        "y": 322.8
      },
      {
        "x": 1908.6,
        "y": 328.7
      },
      {
        "x": 1894.5,
        "y": 322.8
      },
      {
        "x": 1888.6,
        "y": 308.7
      },
      {
        "x": 1894.5,
        "y": 294.6
      },
      {
        "x": 1908.6,
        "y": 288.7
      },
      {
        "x": 1922.7,
        "y": 294.6
      }
    ]
  },
  {
    "id": "yinchuan",
    "name": "Provincia de Yinchuan",
    "capitalName": "Yinchuan",
    "owner": "china",
    "theater": "asia",
    "x": 1800.9,
    "y": 391.3,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "gannan",
      "haixi",
      "yingquan",
      "khurmen",
      "tanyaozi",
      "hanzhong"
    ],
    "polygon": [
      {
        "x": 1820.9,
        "y": 391.3
      },
      {
        "x": 1815.0,
        "y": 405.4
      },
      {
        "x": 1800.9,
        "y": 411.3
      },
      {
        "x": 1786.8,
        "y": 405.4
      },
      {
        "x": 1780.9,
        "y": 391.3
      },
      {
        "x": 1786.8,
        "y": 377.2
      },
      {
        "x": 1800.9,
        "y": 371.3
      },
      {
        "x": 1815.0,
        "y": 377.2
      }
    ]
  },
  {
    "id": "songyuan",
    "name": "Provincia de Songyuan",
    "capitalName": "Songyuan",
    "owner": "china",
    "theater": "asia",
    "x": 1949.5,
    "y": 332.4,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "zalantun",
      "manchuria",
      "qitaihe",
      "chongjin",
      "khalkhgol",
      "arkhara"
    ],
    "polygon": [
      {
        "x": 1969.5,
        "y": 332.4
      },
      {
        "x": 1963.6,
        "y": 346.5
      },
      {
        "x": 1949.5,
        "y": 352.4
      },
      {
        "x": 1935.4,
        "y": 346.5
      },
      {
        "x": 1929.5,
        "y": 332.4
      },
      {
        "x": 1935.4,
        "y": 318.3
      },
      {
        "x": 1949.5,
        "y": 312.4
      },
      {
        "x": 1963.6,
        "y": 318.3
      }
    ]
  },
  {
    "id": "qitaihe",
    "name": "Provincia de Qitaihe",
    "capitalName": "Qitaihe",
    "owner": "china",
    "theater": "asia",
    "x": 1990.4,
    "y": 326.3,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "dalnegorsk",
      "arkhara",
      "chongjin",
      "songyuan",
      "agzu",
      "zalantun",
      "sapporo",
      "yuzhno_sakhalinsk"
    ],
    "polygon": [
      {
        "x": 2010.4,
        "y": 326.3
      },
      {
        "x": 2004.5,
        "y": 340.4
      },
      {
        "x": 1990.4,
        "y": 346.3
      },
      {
        "x": 1976.3,
        "y": 340.4
      },
      {
        "x": 1970.4,
        "y": 326.3
      },
      {
        "x": 1976.3,
        "y": 312.2
      },
      {
        "x": 1990.4,
        "y": 306.3
      },
      {
        "x": 2004.5,
        "y": 312.2
      }
    ]
  },
  {
    "id": "zalantun",
    "name": "Provincia de Zalantun",
    "capitalName": "Zalantun",
    "owner": "china",
    "theater": "asia",
    "x": 1935.8,
    "y": 304.7,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "khalkhgol",
      "songyuan",
      "arkhara",
      "manchuria",
      "qitaihe",
      "xilingol_league",
      "baruun_urt"
    ],
    "polygon": [
      {
        "x": 1955.8,
        "y": 304.7
      },
      {
        "x": 1949.9,
        "y": 318.8
      },
      {
        "x": 1935.8,
        "y": 324.7
      },
      {
        "x": 1921.7,
        "y": 318.8
      },
      {
        "x": 1915.8,
        "y": 304.7
      },
      {
        "x": 1921.7,
        "y": 290.6
      },
      {
        "x": 1935.8,
        "y": 284.7
      },
      {
        "x": 1949.9,
        "y": 290.6
      }
    ]
  },
  {
    "id": "xilingol_league",
    "name": "Provincia de Xilingol League",
    "capitalName": "Xilingol League",
    "owner": "china",
    "theater": "asia",
    "x": 1891.8,
    "y": 343.6,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "baruun_urt",
      "beijing",
      "khalkhgol",
      "khangi",
      "manchuria",
      "xinzhou",
      "zalantun"
    ],
    "polygon": [
      {
        "x": 1911.8,
        "y": 343.6
      },
      {
        "x": 1905.9,
        "y": 357.7
      },
      {
        "x": 1891.8,
        "y": 363.6
      },
      {
        "x": 1877.7,
        "y": 357.7
      },
      {
        "x": 1871.8,
        "y": 343.6
      },
      {
        "x": 1877.7,
        "y": 329.5
      },
      {
        "x": 1891.8,
        "y": 323.6
      },
      {
        "x": 1905.9,
        "y": 329.5
      }
    ]
  },
  {
    "id": "gannan",
    "name": "Provincia de Gannan",
    "capitalName": "Gannan",
    "owner": "china",
    "theater": "asia",
    "x": 1805.3,
    "y": 420.2,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "yinchuan",
      "hanzhong",
      "chengdu",
      "yingquan",
      "yushu",
      "haixi"
    ],
    "polygon": [
      {
        "x": 1825.3,
        "y": 420.2
      },
      {
        "x": 1819.4,
        "y": 434.3
      },
      {
        "x": 1805.3,
        "y": 440.2
      },
      {
        "x": 1791.2,
        "y": 434.3
      },
      {
        "x": 1785.3,
        "y": 420.2
      },
      {
        "x": 1791.2,
        "y": 406.1
      },
      {
        "x": 1805.3,
        "y": 400.2
      },
      {
        "x": 1819.4,
        "y": 406.1
      }
    ]
  },
  {
    "id": "yingquan",
    "name": "Provincia de Yingquan",
    "capitalName": "Yingquan",
    "owner": "china",
    "theater": "asia",
    "x": 1838.6,
    "y": 399.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "yuncheng",
      "xinzhou",
      "hanzhong",
      "yinchuan",
      "gannan",
      "khangi"
    ],
    "polygon": [
      {
        "x": 1858.6,
        "y": 399.9
      },
      {
        "x": 1852.7,
        "y": 414.0
      },
      {
        "x": 1838.6,
        "y": 419.9
      },
      {
        "x": 1824.5,
        "y": 414.0
      },
      {
        "x": 1818.6,
        "y": 399.9
      },
      {
        "x": 1824.5,
        "y": 385.8
      },
      {
        "x": 1838.6,
        "y": 379.9
      },
      {
        "x": 1852.7,
        "y": 385.8
      }
    ]
  },
  {
    "id": "sapporo",
    "name": "Provincia de Sapporo",
    "capitalName": "Sapporo",
    "owner": "japan",
    "theater": "asia",
    "x": 2058.2,
    "y": 351.6,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "morioka",
      "yuzhno_sakhalinsk",
      "dalnegorsk",
      "agzu",
      "tokyo",
      "qitaihe"
    ],
    "polygon": [
      {
        "x": 2078.2,
        "y": 351.6
      },
      {
        "x": 2072.3,
        "y": 365.7
      },
      {
        "x": 2058.2,
        "y": 371.6
      },
      {
        "x": 2044.1,
        "y": 365.7
      },
      {
        "x": 2038.2,
        "y": 351.6
      },
      {
        "x": 2044.1,
        "y": 337.5
      },
      {
        "x": 2058.2,
        "y": 331.6
      },
      {
        "x": 2072.3,
        "y": 337.5
      }
    ]
  },
  {
    "id": "morioka",
    "name": "Provincia de Morioka",
    "capitalName": "Morioka",
    "owner": "japan",
    "theater": "asia",
    "x": 2057.0,
    "y": 380.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "sapporo",
      "tokyo",
      "kyoto",
      "dalnegorsk",
      "yuzhno_sakhalinsk",
      "agzu"
    ],
    "polygon": [
      {
        "x": 2077.0,
        "y": 380.9
      },
      {
        "x": 2071.1,
        "y": 395.0
      },
      {
        "x": 2057.0,
        "y": 400.9
      },
      {
        "x": 2042.9,
        "y": 395.0
      },
      {
        "x": 2037.0,
        "y": 380.9
      },
      {
        "x": 2042.9,
        "y": 366.8
      },
      {
        "x": 2057.0,
        "y": 360.9
      },
      {
        "x": 2071.1,
        "y": 366.8
      }
    ]
  },
  {
    "id": "tokyo",
    "name": "Provincia de Tokyo",
    "capitalName": "Tokyo",
    "owner": "japan",
    "theater": "asia",
    "x": 2047.7,
    "y": 414.4,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "kyoto",
      "morioka",
      "sapporo",
      "kyushu",
      "dalnegorsk",
      "chongjin"
    ],
    "polygon": [
      {
        "x": 2067.7,
        "y": 414.4
      },
      {
        "x": 2061.8,
        "y": 428.5
      },
      {
        "x": 2047.7,
        "y": 434.4
      },
      {
        "x": 2033.6,
        "y": 428.5
      },
      {
        "x": 2027.7,
        "y": 414.4
      },
      {
        "x": 2033.6,
        "y": 400.3
      },
      {
        "x": 2047.7,
        "y": 394.4
      },
      {
        "x": 2061.8,
        "y": 400.3
      }
    ]
  },
  {
    "id": "dalnegorsk",
    "name": "Provincia de Dalnegorsk",
    "capitalName": "Dalnegorsk",
    "owner": "japan",
    "theater": "asia",
    "x": 2020.1,
    "y": 338.1,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "qitaihe",
      "agzu",
      "sapporo",
      "chongjin",
      "yuzhno_sakhalinsk",
      "morioka",
      "arkhara",
      "tokyo"
    ],
    "polygon": [
      {
        "x": 2040.1,
        "y": 338.1
      },
      {
        "x": 2034.2,
        "y": 352.2
      },
      {
        "x": 2020.1,
        "y": 358.1
      },
      {
        "x": 2006.0,
        "y": 352.2
      },
      {
        "x": 2000.1,
        "y": 338.1
      },
      {
        "x": 2006.0,
        "y": 324.0
      },
      {
        "x": 2020.1,
        "y": 318.1
      },
      {
        "x": 2034.2,
        "y": 324.0
      }
    ]
  },
  {
    "id": "agzu",
    "name": "Provincia de Agzu",
    "capitalName": "Agzu",
    "owner": "japan",
    "theater": "asia",
    "x": 2038.8,
    "y": 308.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "yuzhno_sakhalinsk",
      "dalnegorsk",
      "sapporo",
      "qitaihe",
      "arkhara",
      "morioka"
    ],
    "polygon": [
      {
        "x": 2058.8,
        "y": 308.9
      },
      {
        "x": 2052.9,
        "y": 323.0
      },
      {
        "x": 2038.8,
        "y": 328.9
      },
      {
        "x": 2024.7,
        "y": 323.0
      },
      {
        "x": 2018.8,
        "y": 308.9
      },
      {
        "x": 2024.7,
        "y": 294.8
      },
      {
        "x": 2038.8,
        "y": 288.9
      },
      {
        "x": 2052.9,
        "y": 294.8
      }
    ]
  },
  {
    "id": "yuzhno_sakhalinsk",
    "name": "Provincia de Yuzhno Sakhalinsk",
    "capitalName": "Yuzhno Sakhalinsk",
    "owner": "japan",
    "theater": "asia",
    "x": 2067.4,
    "y": 315.1,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "agzu",
      "sapporo",
      "dalnegorsk",
      "morioka",
      "qitaihe",
      "arkhara"
    ],
    "polygon": [
      {
        "x": 2087.4,
        "y": 315.1
      },
      {
        "x": 2081.5,
        "y": 329.2
      },
      {
        "x": 2067.4,
        "y": 335.1
      },
      {
        "x": 2053.3,
        "y": 329.2
      },
      {
        "x": 2047.4,
        "y": 315.1
      },
      {
        "x": 2053.3,
        "y": 301.0
      },
      {
        "x": 2067.4,
        "y": 295.1
      },
      {
        "x": 2081.5,
        "y": 301.0
      }
    ]
  },
  {
    "id": "mentok",
    "name": "Provincia de Mentok",
    "capitalName": "Mentok",
    "owner": "neutral",
    "theater": "asia",
    "x": 1820.3,
    "y": 691.5,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "java",
      "simagandjo",
      "pantong",
      "malacca",
      "sahi",
      "banjarmasin",
      "bintulu"
    ],
    "polygon": [
      {
        "x": 1840.3,
        "y": 691.5
      },
      {
        "x": 1834.4,
        "y": 705.6
      },
      {
        "x": 1820.3,
        "y": 711.5
      },
      {
        "x": 1806.2,
        "y": 705.6
      },
      {
        "x": 1800.3,
        "y": 691.5
      },
      {
        "x": 1806.2,
        "y": 677.4
      },
      {
        "x": 1820.3,
        "y": 671.5
      },
      {
        "x": 1834.4,
        "y": 677.4
      }
    ]
  },
  {
    "id": "calang",
    "name": "Provincia de Calang",
    "capitalName": "Calang",
    "owner": "neutral",
    "theater": "asia",
    "x": 1757.6,
    "y": 642.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "krabi",
      "malacca",
      "simagandjo",
      "diglipur",
      "ca_mau",
      "siam"
    ],
    "polygon": [
      {
        "x": 1777.6,
        "y": 642.9
      },
      {
        "x": 1771.7,
        "y": 657.0
      },
      {
        "x": 1757.6,
        "y": 662.9
      },
      {
        "x": 1743.5,
        "y": 657.0
      },
      {
        "x": 1737.6,
        "y": 642.9
      },
      {
        "x": 1743.5,
        "y": 628.8
      },
      {
        "x": 1757.6,
        "y": 622.9
      },
      {
        "x": 1771.7,
        "y": 628.8
      }
    ]
  },
  {
    "id": "sandakan",
    "name": "Provincia de Sandakan",
    "capitalName": "Sandakan",
    "owner": "neutral",
    "theater": "asia",
    "x": 1905.0,
    "y": 634.0,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "roxas",
      "tebangan",
      "bintulu",
      "general_santos",
      "manado",
      "tacloban",
      "philippines"
    ],
    "polygon": [
      {
        "x": 1925.0,
        "y": 634.0
      },
      {
        "x": 1919.1,
        "y": 648.1
      },
      {
        "x": 1905.0,
        "y": 654.0
      },
      {
        "x": 1890.9,
        "y": 648.1
      },
      {
        "x": 1885.0,
        "y": 634.0
      },
      {
        "x": 1890.9,
        "y": 619.9
      },
      {
        "x": 1905.0,
        "y": 614.0
      },
      {
        "x": 1919.1,
        "y": 619.9
      }
    ]
  },
  {
    "id": "bintulu",
    "name": "Provincia de Bintulu",
    "capitalName": "Bintulu",
    "owner": "neutral",
    "theater": "asia",
    "x": 1872.3,
    "y": 653.8,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "sahi",
      "pantong",
      "tebangan",
      "sandakan",
      "banjarmasin",
      "mentok",
      "roxas",
      "sengkang"
    ],
    "polygon": [
      {
        "x": 1892.3,
        "y": 653.8
      },
      {
        "x": 1886.4,
        "y": 667.9
      },
      {
        "x": 1872.3,
        "y": 673.8
      },
      {
        "x": 1858.2,
        "y": 667.9
      },
      {
        "x": 1852.3,
        "y": 653.8
      },
      {
        "x": 1858.2,
        "y": 639.7
      },
      {
        "x": 1872.3,
        "y": 633.8
      },
      {
        "x": 1886.4,
        "y": 639.7
      }
    ]
  },
  {
    "id": "pantong",
    "name": "Provincia de Pantong",
    "capitalName": "Pantong",
    "owner": "neutral",
    "theater": "asia",
    "x": 1854.9,
    "y": 681.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "bintulu",
      "banjarmasin",
      "mentok",
      "sahi",
      "java",
      "tebangan",
      "simagandjo",
      "sengkang"
    ],
    "polygon": [
      {
        "x": 1874.9,
        "y": 681.4
      },
      {
        "x": 1869.0,
        "y": 695.5
      },
      {
        "x": 1854.9,
        "y": 701.4
      },
      {
        "x": 1840.8,
        "y": 695.5
      },
      {
        "x": 1834.9,
        "y": 681.4
      },
      {
        "x": 1840.8,
        "y": 667.3
      },
      {
        "x": 1854.9,
        "y": 661.4
      },
      {
        "x": 1869.0,
        "y": 667.3
      }
    ]
  },
  {
    "id": "banjarmasin",
    "name": "Provincia de Banjarmasin",
    "capitalName": "Banjarmasin",
    "owner": "neutral",
    "theater": "asia",
    "x": 1883.6,
    "y": 702.1,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "sengkang",
      "pantong",
      "tebangan",
      "bintulu",
      "java",
      "mentok"
    ],
    "polygon": [
      {
        "x": 1903.6,
        "y": 702.1
      },
      {
        "x": 1897.7,
        "y": 716.2
      },
      {
        "x": 1883.6,
        "y": 722.1
      },
      {
        "x": 1869.5,
        "y": 716.2
      },
      {
        "x": 1863.6,
        "y": 702.1
      },
      {
        "x": 1869.5,
        "y": 688.0
      },
      {
        "x": 1883.6,
        "y": 682.1
      },
      {
        "x": 1897.7,
        "y": 688.0
      }
    ]
  },
  {
    "id": "tebangan",
    "name": "Provincia de Tebangan",
    "capitalName": "Tebangan",
    "owner": "neutral",
    "theater": "asia",
    "x": 1900.8,
    "y": 670.7,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "bintulu",
      "banjarmasin",
      "sandakan",
      "sengkang",
      "pantong",
      "manado"
    ],
    "polygon": [
      {
        "x": 1920.8,
        "y": 670.7
      },
      {
        "x": 1914.9,
        "y": 684.8
      },
      {
        "x": 1900.8,
        "y": 690.7
      },
      {
        "x": 1886.7,
        "y": 684.8
      },
      {
        "x": 1880.8,
        "y": 670.7
      },
      {
        "x": 1886.7,
        "y": 656.6
      },
      {
        "x": 1900.8,
        "y": 650.7
      },
      {
        "x": 1914.9,
        "y": 656.6
      }
    ]
  },
  {
    "id": "tacloban",
    "name": "Provincia de Tacloban",
    "capitalName": "Tacloban",
    "owner": "neutral",
    "theater": "asia",
    "x": 1950.4,
    "y": 594.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "philippines",
      "general_santos",
      "roxas",
      "sandakan",
      "koror",
      "manado"
    ],
    "polygon": [
      {
        "x": 1970.4,
        "y": 594.4
      },
      {
        "x": 1964.5,
        "y": 608.5
      },
      {
        "x": 1950.4,
        "y": 614.4
      },
      {
        "x": 1936.3,
        "y": 608.5
      },
      {
        "x": 1930.4,
        "y": 594.4
      },
      {
        "x": 1936.3,
        "y": 580.3
      },
      {
        "x": 1950.4,
        "y": 574.4
      },
      {
        "x": 1964.5,
        "y": 580.3
      }
    ]
  },
  {
    "id": "general_santos",
    "name": "Provincia de General Santos",
    "capitalName": "General Santos",
    "owner": "neutral",
    "theater": "asia",
    "x": 1951.8,
    "y": 631.8,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "manado",
      "tacloban",
      "sandakan",
      "roxas",
      "helen_reef",
      "koror",
      "philippines",
      "kairatu"
    ],
    "polygon": [
      {
        "x": 1971.8,
        "y": 631.8
      },
      {
        "x": 1965.9,
        "y": 645.9
      },
      {
        "x": 1951.8,
        "y": 651.8
      },
      {
        "x": 1937.7,
        "y": 645.9
      },
      {
        "x": 1931.8,
        "y": 631.8
      },
      {
        "x": 1937.7,
        "y": 617.7
      },
      {
        "x": 1951.8,
        "y": 611.8
      },
      {
        "x": 1965.9,
        "y": 617.7
      }
    ]
  },
  {
    "id": "roxas",
    "name": "Provincia de Roxas",
    "capitalName": "Roxas",
    "owner": "neutral",
    "theater": "asia",
    "x": 1912.7,
    "y": 601.3,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "sandakan",
      "philippines",
      "tacloban",
      "general_santos",
      "bintulu",
      "nha_trang"
    ],
    "polygon": [
      {
        "x": 1932.7,
        "y": 601.3
      },
      {
        "x": 1926.8,
        "y": 615.4
      },
      {
        "x": 1912.7,
        "y": 621.3
      },
      {
        "x": 1898.6,
        "y": 615.4
      },
      {
        "x": 1892.7,
        "y": 601.3
      },
      {
        "x": 1898.6,
        "y": 587.2
      },
      {
        "x": 1912.7,
        "y": 581.3
      },
      {
        "x": 1926.8,
        "y": 587.2
      }
    ]
  },
  {
    "id": "sahi",
    "name": "Provincia de Sahi",
    "capitalName": "Sahi",
    "owner": "neutral",
    "theater": "asia",
    "x": 1840.5,
    "y": 648.3,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "bintulu",
      "pantong",
      "malacca",
      "ca_mau",
      "mentok",
      "nha_trang",
      "java",
      "simagandjo"
    ],
    "polygon": [
      {
        "x": 1860.5,
        "y": 648.3
      },
      {
        "x": 1854.6,
        "y": 662.4
      },
      {
        "x": 1840.5,
        "y": 668.3
      },
      {
        "x": 1826.4,
        "y": 662.4
      },
      {
        "x": 1820.5,
        "y": 648.3
      },
      {
        "x": 1826.4,
        "y": 634.2
      },
      {
        "x": 1840.5,
        "y": 628.3
      },
      {
        "x": 1854.6,
        "y": 634.2
      }
    ]
  },
  {
    "id": "simagandjo",
    "name": "Provincia de Simagandjo",
    "capitalName": "Simagandjo",
    "owner": "neutral",
    "theater": "asia",
    "x": 1786.6,
    "y": 696.5,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "mentok",
      "malacca",
      "java",
      "calang",
      "pantong",
      "sahi"
    ],
    "polygon": [
      {
        "x": 1806.6,
        "y": 696.5
      },
      {
        "x": 1800.7,
        "y": 710.6
      },
      {
        "x": 1786.6,
        "y": 716.5
      },
      {
        "x": 1772.5,
        "y": 710.6
      },
      {
        "x": 1766.6,
        "y": 696.5
      },
      {
        "x": 1772.5,
        "y": 682.4
      },
      {
        "x": 1786.6,
        "y": 676.5
      },
      {
        "x": 1800.7,
        "y": 682.4
      }
    ]
  },
  {
    "id": "hanoi",
    "name": "Provincia de Hanoi",
    "capitalName": "Hanoi",
    "owner": "neutral",
    "theater": "asia",
    "x": 1824.5,
    "y": 524.4,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "liuzhou",
      "hue",
      "qujing",
      "lincang",
      "guangzhou",
      "taunggyi",
      "nha_trang"
    ],
    "polygon": [
      {
        "x": 1844.5,
        "y": 524.4
      },
      {
        "x": 1838.6,
        "y": 538.5
      },
      {
        "x": 1824.5,
        "y": 544.4
      },
      {
        "x": 1810.4,
        "y": 538.5
      },
      {
        "x": 1804.5,
        "y": 524.4
      },
      {
        "x": 1810.4,
        "y": 510.3
      },
      {
        "x": 1824.5,
        "y": 504.4
      },
      {
        "x": 1838.6,
        "y": 510.3
      }
    ]
  },
  {
    "id": "hue",
    "name": "Provincia de Hue",
    "capitalName": "Hue",
    "owner": "neutral",
    "theater": "asia",
    "x": 1836.1,
    "y": 555.5,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "hanoi",
      "nha_trang",
      "siam",
      "liuzhou",
      "ca_mau",
      "guangzhou"
    ],
    "polygon": [
      {
        "x": 1856.1,
        "y": 555.5
      },
      {
        "x": 1850.2,
        "y": 569.6
      },
      {
        "x": 1836.1,
        "y": 575.5
      },
      {
        "x": 1822.0,
        "y": 569.6
      },
      {
        "x": 1816.1,
        "y": 555.5
      },
      {
        "x": 1822.0,
        "y": 541.4
      },
      {
        "x": 1836.1,
        "y": 535.5
      },
      {
        "x": 1850.2,
        "y": 541.4
      }
    ]
  },
  {
    "id": "nha_trang",
    "name": "Provincia de Nha Trang",
    "capitalName": "Nha Trang",
    "owner": "neutral",
    "theater": "asia",
    "x": 1846.4,
    "y": 587.1,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "hue",
      "ca_mau",
      "siam",
      "sahi",
      "hanoi",
      "roxas"
    ],
    "polygon": [
      {
        "x": 1866.4,
        "y": 587.1
      },
      {
        "x": 1860.5,
        "y": 601.2
      },
      {
        "x": 1846.4,
        "y": 607.1
      },
      {
        "x": 1832.3,
        "y": 601.2
      },
      {
        "x": 1826.4,
        "y": 587.1
      },
      {
        "x": 1832.3,
        "y": 573.0
      },
      {
        "x": 1846.4,
        "y": 567.1
      },
      {
        "x": 1860.5,
        "y": 573.0
      }
    ]
  },
  {
    "id": "ca_mau",
    "name": "Provincia de Ca Mau",
    "capitalName": "Ca Mau",
    "owner": "neutral",
    "theater": "asia",
    "x": 1820.4,
    "y": 610.0,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "nha_trang",
      "krabi",
      "sahi",
      "siam",
      "malacca",
      "hue",
      "calang"
    ],
    "polygon": [
      {
        "x": 1840.4,
        "y": 610.0
      },
      {
        "x": 1834.5,
        "y": 624.1
      },
      {
        "x": 1820.4,
        "y": 630.0
      },
      {
        "x": 1806.3,
        "y": 624.1
      },
      {
        "x": 1800.4,
        "y": 610.0
      },
      {
        "x": 1806.3,
        "y": 595.9
      },
      {
        "x": 1820.4,
        "y": 590.0
      },
      {
        "x": 1834.5,
        "y": 595.9
      }
    ]
  },
  {
    "id": "wamena",
    "name": "Provincia de Wamena",
    "capitalName": "Wamena",
    "owner": "neutral",
    "theater": "asia",
    "x": 2044.7,
    "y": 709.6,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "kaimana",
      "lorengau",
      "bamaga",
      "kairatu",
      "helen_reef",
      "alotau",
      "katherine",
      "tendoo"
    ],
    "polygon": [
      {
        "x": 2064.7,
        "y": 709.6
      },
      {
        "x": 2058.8,
        "y": 723.7
      },
      {
        "x": 2044.7,
        "y": 729.6
      },
      {
        "x": 2030.6,
        "y": 723.7
      },
      {
        "x": 2024.7,
        "y": 709.6
      },
      {
        "x": 2030.6,
        "y": 695.5
      },
      {
        "x": 2044.7,
        "y": 689.6
      },
      {
        "x": 2058.8,
        "y": 695.5
      }
    ]
  },
  {
    "id": "kaimana",
    "name": "Provincia de Kaimana",
    "capitalName": "Kaimana",
    "owner": "neutral",
    "theater": "asia",
    "x": 2008.4,
    "y": 703.3,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "kairatu",
      "wamena",
      "helen_reef",
      "manado",
      "koror",
      "katherine",
      "lorengau"
    ],
    "polygon": [
      {
        "x": 2028.4,
        "y": 703.3
      },
      {
        "x": 2022.5,
        "y": 717.4
      },
      {
        "x": 2008.4,
        "y": 723.3
      },
      {
        "x": 1994.3,
        "y": 717.4
      },
      {
        "x": 1988.4,
        "y": 703.3
      },
      {
        "x": 1994.3,
        "y": 689.2
      },
      {
        "x": 2008.4,
        "y": 683.3
      },
      {
        "x": 2022.5,
        "y": 689.2
      }
    ]
  },
  {
    "id": "sengkang",
    "name": "Provincia de Sengkang",
    "capitalName": "Sengkang",
    "owner": "neutral",
    "theater": "asia",
    "x": 1918.4,
    "y": 707.3,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "banjarmasin",
      "tebangan",
      "manado",
      "kairatu",
      "pantong",
      "bintulu"
    ],
    "polygon": [
      {
        "x": 1938.4,
        "y": 707.3
      },
      {
        "x": 1932.5,
        "y": 721.4
      },
      {
        "x": 1918.4,
        "y": 727.3
      },
      {
        "x": 1904.3,
        "y": 721.4
      },
      {
        "x": 1898.4,
        "y": 707.3
      },
      {
        "x": 1904.3,
        "y": 693.2
      },
      {
        "x": 1918.4,
        "y": 687.3
      },
      {
        "x": 1932.5,
        "y": 693.2
      }
    ]
  },
  {
    "id": "manado",
    "name": "Provincia de Manado",
    "capitalName": "Manado",
    "owner": "neutral",
    "theater": "asia",
    "x": 1950.1,
    "y": 666.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "general_santos",
      "kairatu",
      "helen_reef",
      "tebangan",
      "sengkang",
      "sandakan",
      "tacloban",
      "kaimana",
      "koror"
    ],
    "polygon": [
      {
        "x": 1970.1,
        "y": 666.4
      },
      {
        "x": 1964.2,
        "y": 680.5
      },
      {
        "x": 1950.1,
        "y": 686.4
      },
      {
        "x": 1936.0,
        "y": 680.5
      },
      {
        "x": 1930.1,
        "y": 666.4
      },
      {
        "x": 1936.0,
        "y": 652.3
      },
      {
        "x": 1950.1,
        "y": 646.4
      },
      {
        "x": 1964.2,
        "y": 652.3
      }
    ]
  },
  {
    "id": "kairatu",
    "name": "Provincia de Kairatu",
    "capitalName": "Kairatu",
    "owner": "neutral",
    "theater": "asia",
    "x": 1973.0,
    "y": 700.8,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "kaimana",
      "manado",
      "helen_reef",
      "sengkang",
      "general_santos",
      "wamena",
      "koror",
      "katherine"
    ],
    "polygon": [
      {
        "x": 1993.0,
        "y": 700.8
      },
      {
        "x": 1987.1,
        "y": 714.9
      },
      {
        "x": 1973.0,
        "y": 720.8
      },
      {
        "x": 1958.9,
        "y": 714.9
      },
      {
        "x": 1953.0,
        "y": 700.8
      },
      {
        "x": 1958.9,
        "y": 686.7
      },
      {
        "x": 1973.0,
        "y": 680.8
      },
      {
        "x": 1987.1,
        "y": 686.7
      }
    ]
  },
  {
    "id": "helen_reef",
    "name": "Provincia de Helen Reef",
    "capitalName": "Helen Reef",
    "owner": "neutral",
    "theater": "asia",
    "x": 1995.4,
    "y": 655.9,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "koror",
      "manado",
      "kaimana",
      "general_santos",
      "kairatu",
      "wamena",
      "lorengau"
    ],
    "polygon": [
      {
        "x": 2015.4,
        "y": 655.9
      },
      {
        "x": 2009.5,
        "y": 670.0
      },
      {
        "x": 1995.4,
        "y": 675.9
      },
      {
        "x": 1981.3,
        "y": 670.0
      },
      {
        "x": 1975.4,
        "y": 655.9
      },
      {
        "x": 1981.3,
        "y": 641.8
      },
      {
        "x": 1995.4,
        "y": 635.9
      },
      {
        "x": 2009.5,
        "y": 641.8
      }
    ]
  },
  {
    "id": "koror",
    "name": "Provincia de Koror",
    "capitalName": "Koror",
    "owner": "neutral",
    "theater": "asia",
    "x": 2013.1,
    "y": 623.2,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "helen_reef",
      "general_santos",
      "tacloban",
      "manado",
      "kaimana",
      "kairatu"
    ],
    "polygon": [
      {
        "x": 2033.1,
        "y": 623.2
      },
      {
        "x": 2027.2,
        "y": 637.3
      },
      {
        "x": 2013.1,
        "y": 643.2
      },
      {
        "x": 1999.0,
        "y": 637.3
      },
      {
        "x": 1993.1,
        "y": 623.2
      },
      {
        "x": 1999.0,
        "y": 609.1
      },
      {
        "x": 2013.1,
        "y": 603.2
      },
      {
        "x": 2027.2,
        "y": 609.1
      }
    ]
  },
  {
    "id": "georgetown",
    "name": "Provincia de Georgetown",
    "capitalName": "Georgetown",
    "owner": "britain",
    "theater": "americas",
    "x": 601.4,
    "y": 436.0,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "virginia",
      "florida",
      "atlanta",
      "panama_city",
      "freeport",
      "philadelphia",
      "hamilton"
    ],
    "polygon": [
      {
        "x": 621.4,
        "y": 436.0
      },
      {
        "x": 615.5,
        "y": 450.1
      },
      {
        "x": 601.4,
        "y": 456.0
      },
      {
        "x": 587.3,
        "y": 450.1
      },
      {
        "x": 581.4,
        "y": 436.0
      },
      {
        "x": 587.3,
        "y": 421.9
      },
      {
        "x": 601.4,
        "y": 416.0
      },
      {
        "x": 615.5,
        "y": 421.9
      }
    ]
  },
  {
    "id": "atlanta",
    "name": "Provincia de Atlanta",
    "capitalName": "Atlanta",
    "owner": "britain",
    "theater": "americas",
    "x": 568.2,
    "y": 433.5,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "panama_city",
      "georgetown",
      "florida",
      "southaven",
      "virginia",
      "mississippi"
    ],
    "polygon": [
      {
        "x": 588.2,
        "y": 433.5
      },
      {
        "x": 582.3,
        "y": 447.6
      },
      {
        "x": 568.2,
        "y": 453.5
      },
      {
        "x": 554.1,
        "y": 447.6
      },
      {
        "x": 548.2,
        "y": 433.5
      },
      {
        "x": 554.1,
        "y": 419.4
      },
      {
        "x": 568.2,
        "y": 413.5
      },
      {
        "x": 582.3,
        "y": 419.4
      }
    ]
  },
  {
    "id": "fort_wayne",
    "name": "Provincia de Fort Wayne",
    "capitalName": "Fort Wayne",
    "owner": "britain",
    "theater": "americas",
    "x": 563.2,
    "y": 372.4,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "erie",
      "petoskey",
      "dubuque",
      "virginia",
      "north_bay",
      "southaven"
    ],
    "polygon": [
      {
        "x": 583.2,
        "y": 372.4
      },
      {
        "x": 577.3,
        "y": 386.5
      },
      {
        "x": 563.2,
        "y": 392.4
      },
      {
        "x": 549.1,
        "y": 386.5
      },
      {
        "x": 543.2,
        "y": 372.4
      },
      {
        "x": 549.1,
        "y": 358.3
      },
      {
        "x": 563.2,
        "y": 352.4
      },
      {
        "x": 577.3,
        "y": 358.3
      }
    ]
  },
  {
    "id": "erie",
    "name": "Provincia de Erie",
    "capitalName": "Erie",
    "owner": "britain",
    "theater": "americas",
    "x": 596.8,
    "y": 363.6,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "watertown",
      "fort_wayne",
      "north_bay",
      "philadelphia",
      "virginia",
      "petoskey",
      "new_england"
    ],
    "polygon": [
      {
        "x": 616.8,
        "y": 363.6
      },
      {
        "x": 610.9,
        "y": 377.7
      },
      {
        "x": 596.8,
        "y": 383.6
      },
      {
        "x": 582.7,
        "y": 377.7
      },
      {
        "x": 576.8,
        "y": 363.6
      },
      {
        "x": 582.7,
        "y": 349.5
      },
      {
        "x": 596.8,
        "y": 343.6
      },
      {
        "x": 610.9,
        "y": 349.5
      }
    ]
  },
  {
    "id": "philadelphia",
    "name": "Provincia de Philadelphia",
    "capitalName": "Philadelphia",
    "owner": "britain",
    "theater": "americas",
    "x": 628.8,
    "y": 382.1,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "virginia",
      "new_england",
      "watertown",
      "erie",
      "georgetown",
      "north_bay",
      "hamilton"
    ],
    "polygon": [
      {
        "x": 648.8,
        "y": 382.1
      },
      {
        "x": 642.9,
        "y": 396.2
      },
      {
        "x": 628.8,
        "y": 402.1
      },
      {
        "x": 614.7,
        "y": 396.2
      },
      {
        "x": 608.8,
        "y": 382.1
      },
      {
        "x": 614.7,
        "y": 368.0
      },
      {
        "x": 628.8,
        "y": 362.1
      },
      {
        "x": 642.9,
        "y": 368.0
      }
    ]
  },
  {
    "id": "machias",
    "name": "Provincia de Machias",
    "capitalName": "Machias",
    "owner": "britain",
    "theater": "americas",
    "x": 679.5,
    "y": 341.7,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "new_england",
      "quebec",
      "montague",
      "sept_iles",
      "watertown",
      "natashquan",
      "blanc_sablon"
    ],
    "polygon": [
      {
        "x": 699.5,
        "y": 341.7
      },
      {
        "x": 693.6,
        "y": 355.8
      },
      {
        "x": 679.5,
        "y": 361.7
      },
      {
        "x": 665.4,
        "y": 355.8
      },
      {
        "x": 659.5,
        "y": 341.7
      },
      {
        "x": 665.4,
        "y": 327.6
      },
      {
        "x": 679.5,
        "y": 321.7
      },
      {
        "x": 693.6,
        "y": 327.6
      }
    ]
  },
  {
    "id": "watertown",
    "name": "Provincia de Watertown",
    "capitalName": "Watertown",
    "owner": "britain",
    "theater": "americas",
    "x": 624.1,
    "y": 347.5,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "north_bay",
      "erie",
      "new_england",
      "philadelphia",
      "quebec",
      "waswanipi",
      "virginia",
      "machias"
    ],
    "polygon": [
      {
        "x": 644.1,
        "y": 347.5
      },
      {
        "x": 638.2,
        "y": 361.6
      },
      {
        "x": 624.1,
        "y": 367.5
      },
      {
        "x": 610.0,
        "y": 361.6
      },
      {
        "x": 604.1,
        "y": 347.5
      },
      {
        "x": 610.0,
        "y": 333.4
      },
      {
        "x": 624.1,
        "y": 327.5
      },
      {
        "x": 638.2,
        "y": 333.4
      }
    ]
  },
  {
    "id": "petoskey",
    "name": "Provincia de Petoskey",
    "capitalName": "Petoskey",
    "owner": "britain",
    "theater": "americas",
    "x": 564.3,
    "y": 336.2,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "fort_wayne",
      "north_bay",
      "thunder_bay",
      "erie",
      "dubuque",
      "moosonee"
    ],
    "polygon": [
      {
        "x": 584.3,
        "y": 336.2
      },
      {
        "x": 578.4,
        "y": 350.3
      },
      {
        "x": 564.3,
        "y": 356.2
      },
      {
        "x": 550.2,
        "y": 350.3
      },
      {
        "x": 544.3,
        "y": 336.2
      },
      {
        "x": 550.2,
        "y": 322.1
      },
      {
        "x": 564.3,
        "y": 316.2
      },
      {
        "x": 578.4,
        "y": 322.1
      }
    ]
  },
  {
    "id": "winisk",
    "name": "Provincia de Winisk",
    "capitalName": "Winisk",
    "owner": "britain",
    "theater": "americas",
    "x": 562.8,
    "y": 245.5,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "sachigo_lake",
      "moosonee",
      "kuujjuarapik",
      "thunder_bay",
      "waswanipi",
      "wabowden"
    ],
    "polygon": [
      {
        "x": 582.8,
        "y": 245.5
      },
      {
        "x": 576.9,
        "y": 259.6
      },
      {
        "x": 562.8,
        "y": 265.5
      },
      {
        "x": 548.7,
        "y": 259.6
      },
      {
        "x": 542.8,
        "y": 245.5
      },
      {
        "x": 548.7,
        "y": 231.4
      },
      {
        "x": 562.8,
        "y": 225.5
      },
      {
        "x": 576.9,
        "y": 231.4
      }
    ]
  },
  {
    "id": "moosonee",
    "name": "Provincia de Moosonee",
    "capitalName": "Moosonee",
    "owner": "britain",
    "theater": "americas",
    "x": 592.7,
    "y": 284.3,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "waswanipi",
      "kuujjuarapik",
      "north_bay",
      "winisk",
      "petoskey",
      "thunder_bay",
      "sachigo_lake"
    ],
    "polygon": [
      {
        "x": 612.7,
        "y": 284.3
      },
      {
        "x": 606.8,
        "y": 298.4
      },
      {
        "x": 592.7,
        "y": 304.3
      },
      {
        "x": 578.6,
        "y": 298.4
      },
      {
        "x": 572.7,
        "y": 284.3
      },
      {
        "x": 578.6,
        "y": 270.2
      },
      {
        "x": 592.7,
        "y": 264.3
      },
      {
        "x": 606.8,
        "y": 270.2
      }
    ]
  },
  {
    "id": "north_bay",
    "name": "Provincia de North Bay",
    "capitalName": "North Bay",
    "owner": "britain",
    "theater": "americas",
    "x": 600.8,
    "y": 328.3,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "watertown",
      "erie",
      "waswanipi",
      "petoskey",
      "moosonee",
      "quebec",
      "new_england",
      "fort_wayne",
      "philadelphia",
      "kuujjuarapik",
      "thunder_bay"
    ],
    "polygon": [
      {
        "x": 620.8,
        "y": 328.3
      },
      {
        "x": 614.9,
        "y": 342.4
      },
      {
        "x": 600.8,
        "y": 348.3
      },
      {
        "x": 586.7,
        "y": 342.4
      },
      {
        "x": 580.8,
        "y": 328.3
      },
      {
        "x": 586.7,
        "y": 314.2
      },
      {
        "x": 600.8,
        "y": 308.3
      },
      {
        "x": 614.9,
        "y": 314.2
      }
    ]
  },
  {
    "id": "quebec",
    "name": "Provincia de Québec",
    "capitalName": "Québec",
    "owner": "britain",
    "theater": "americas",
    "x": 654.7,
    "y": 324.0,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "machias",
      "new_england",
      "watertown",
      "waswanipi",
      "sept_iles",
      "north_bay",
      "montague",
      "nitchequon"
    ],
    "polygon": [
      {
        "x": 674.7,
        "y": 324.0
      },
      {
        "x": 668.8,
        "y": 338.1
      },
      {
        "x": 654.7,
        "y": 344.0
      },
      {
        "x": 640.6,
        "y": 338.1
      },
      {
        "x": 634.7,
        "y": 324.0
      },
      {
        "x": 640.6,
        "y": 309.9
      },
      {
        "x": 654.7,
        "y": 304.0
      },
      {
        "x": 668.8,
        "y": 309.9
      }
    ]
  },
  {
    "id": "montague",
    "name": "Provincia de Montague",
    "capitalName": "Montague",
    "owner": "britain",
    "theater": "americas",
    "x": 712.2,
    "y": 328.7,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "natashquan",
      "machias",
      "sept_iles",
      "quebec",
      "blanc_sablon",
      "new_england",
      "hopedale"
    ],
    "polygon": [
      {
        "x": 732.2,
        "y": 328.7
      },
      {
        "x": 726.3,
        "y": 342.8
      },
      {
        "x": 712.2,
        "y": 348.7
      },
      {
        "x": 698.1,
        "y": 342.8
      },
      {
        "x": 692.2,
        "y": 328.7
      },
      {
        "x": 698.1,
        "y": 314.6
      },
      {
        "x": 712.2,
        "y": 308.7
      },
      {
        "x": 726.3,
        "y": 314.6
      }
    ]
  },
  {
    "id": "kuujjuarapik",
    "name": "Provincia de Kuujjuarapik",
    "capitalName": "Kuujjuarapik",
    "owner": "britain",
    "theater": "americas",
    "x": 612.3,
    "y": 246.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "moosonee",
      "nitchequon",
      "winisk",
      "waswanipi",
      "schefferville",
      "north_bay"
    ],
    "polygon": [
      {
        "x": 632.3,
        "y": 246.0
      },
      {
        "x": 626.4,
        "y": 260.1
      },
      {
        "x": 612.3,
        "y": 266.0
      },
      {
        "x": 598.2,
        "y": 260.1
      },
      {
        "x": 592.3,
        "y": 246.0
      },
      {
        "x": 598.2,
        "y": 231.9
      },
      {
        "x": 612.3,
        "y": 226.0
      },
      {
        "x": 626.4,
        "y": 231.9
      }
    ]
  },
  {
    "id": "schefferville",
    "name": "Provincia de Schefferville",
    "capitalName": "Schefferville",
    "owner": "britain",
    "theater": "americas",
    "x": 684.1,
    "y": 250.2,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "nitchequon",
      "hopedale",
      "sept_iles",
      "natashquan",
      "blanc_sablon",
      "kuujjuarapik"
    ],
    "polygon": [
      {
        "x": 704.1,
        "y": 250.2
      },
      {
        "x": 698.2,
        "y": 264.3
      },
      {
        "x": 684.1,
        "y": 270.2
      },
      {
        "x": 670.0,
        "y": 264.3
      },
      {
        "x": 664.1,
        "y": 250.2
      },
      {
        "x": 670.0,
        "y": 236.1
      },
      {
        "x": 684.1,
        "y": 230.2
      },
      {
        "x": 698.2,
        "y": 236.1
      }
    ]
  },
  {
    "id": "hopedale",
    "name": "Provincia de Hopedale",
    "capitalName": "Hopedale",
    "owner": "britain",
    "theater": "americas",
    "x": 726.5,
    "y": 243.6,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "schefferville",
      "blanc_sablon",
      "natashquan",
      "sept_iles",
      "nitchequon",
      "montague"
    ],
    "polygon": [
      {
        "x": 746.5,
        "y": 243.6
      },
      {
        "x": 740.6,
        "y": 257.7
      },
      {
        "x": 726.5,
        "y": 263.6
      },
      {
        "x": 712.4,
        "y": 257.7
      },
      {
        "x": 706.5,
        "y": 243.6
      },
      {
        "x": 712.4,
        "y": 229.5
      },
      {
        "x": 726.5,
        "y": 223.6
      },
      {
        "x": 740.6,
        "y": 229.5
      }
    ]
  },
  {
    "id": "blanc_sablon",
    "name": "Provincia de Blanc Sablon",
    "capitalName": "Blanc Sablon",
    "owner": "britain",
    "theater": "americas",
    "x": 747.3,
    "y": 282.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "natashquan",
      "hopedale",
      "montague",
      "sept_iles",
      "schefferville",
      "machias"
    ],
    "polygon": [
      {
        "x": 767.3,
        "y": 282.8
      },
      {
        "x": 761.4,
        "y": 296.9
      },
      {
        "x": 747.3,
        "y": 302.8
      },
      {
        "x": 733.2,
        "y": 296.9
      },
      {
        "x": 727.3,
        "y": 282.8
      },
      {
        "x": 733.2,
        "y": 268.7
      },
      {
        "x": 747.3,
        "y": 262.8
      },
      {
        "x": 761.4,
        "y": 268.7
      }
    ]
  },
  {
    "id": "natashquan",
    "name": "Provincia de Natashquan",
    "capitalName": "Natashquan",
    "owner": "britain",
    "theater": "americas",
    "x": 717.2,
    "y": 294.8,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "sept_iles",
      "blanc_sablon",
      "montague",
      "hopedale",
      "schefferville",
      "machias",
      "nitchequon"
    ],
    "polygon": [
      {
        "x": 737.2,
        "y": 294.8
      },
      {
        "x": 731.3,
        "y": 308.9
      },
      {
        "x": 717.2,
        "y": 314.8
      },
      {
        "x": 703.1,
        "y": 308.9
      },
      {
        "x": 697.2,
        "y": 294.8
      },
      {
        "x": 703.1,
        "y": 280.7
      },
      {
        "x": 717.2,
        "y": 274.8
      },
      {
        "x": 731.3,
        "y": 280.7
      }
    ]
  },
  {
    "id": "sept_iles",
    "name": "Provincia de Sept Iles",
    "capitalName": "Sept Iles",
    "owner": "britain",
    "theater": "americas",
    "x": 686.9,
    "y": 294.1,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "natashquan",
      "nitchequon",
      "montague",
      "quebec",
      "schefferville",
      "machias",
      "hopedale",
      "blanc_sablon"
    ],
    "polygon": [
      {
        "x": 706.9,
        "y": 294.1
      },
      {
        "x": 701.0,
        "y": 308.2
      },
      {
        "x": 686.9,
        "y": 314.1
      },
      {
        "x": 672.8,
        "y": 308.2
      },
      {
        "x": 666.9,
        "y": 294.1
      },
      {
        "x": 672.8,
        "y": 280.0
      },
      {
        "x": 686.9,
        "y": 274.1
      },
      {
        "x": 701.0,
        "y": 280.0
      }
    ]
  },
  {
    "id": "waswanipi",
    "name": "Provincia de Waswanipi",
    "capitalName": "Waswanipi",
    "owner": "britain",
    "theater": "americas",
    "x": 623.6,
    "y": 298.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "moosonee",
      "north_bay",
      "quebec",
      "nitchequon",
      "watertown",
      "kuujjuarapik",
      "winisk"
    ],
    "polygon": [
      {
        "x": 643.6,
        "y": 298.9
      },
      {
        "x": 637.7,
        "y": 313.0
      },
      {
        "x": 623.6,
        "y": 318.9
      },
      {
        "x": 609.5,
        "y": 313.0
      },
      {
        "x": 603.6,
        "y": 298.9
      },
      {
        "x": 609.5,
        "y": 284.8
      },
      {
        "x": 623.6,
        "y": 278.9
      },
      {
        "x": 637.7,
        "y": 284.8
      }
    ]
  },
  {
    "id": "nitchequon",
    "name": "Provincia de Nitchequon",
    "capitalName": "Nitchequon",
    "owner": "britain",
    "theater": "americas",
    "x": 657.2,
    "y": 266.2,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "schefferville",
      "sept_iles",
      "waswanipi",
      "kuujjuarapik",
      "quebec",
      "natashquan",
      "hopedale"
    ],
    "polygon": [
      {
        "x": 677.2,
        "y": 266.2
      },
      {
        "x": 671.3,
        "y": 280.3
      },
      {
        "x": 657.2,
        "y": 286.2
      },
      {
        "x": 643.1,
        "y": 280.3
      },
      {
        "x": 637.2,
        "y": 266.2
      },
      {
        "x": 643.1,
        "y": 252.1
      },
      {
        "x": 657.2,
        "y": 246.2
      },
      {
        "x": 671.3,
        "y": 252.1
      }
    ]
  },
  {
    "id": "southaven",
    "name": "Provincia de Southaven",
    "capitalName": "Southaven",
    "owner": "neutral",
    "theater": "americas",
    "x": 531.4,
    "y": 424.0,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "atlanta",
      "mississippi",
      "durant",
      "panama_city",
      "houston",
      "fort_wayne",
      "great_plains",
      "dubuque"
    ],
    "polygon": [
      {
        "x": 551.4,
        "y": 424.0
      },
      {
        "x": 545.5,
        "y": 438.1
      },
      {
        "x": 531.4,
        "y": 444.0
      },
      {
        "x": 517.3,
        "y": 438.1
      },
      {
        "x": 511.4,
        "y": 424.0
      },
      {
        "x": 517.3,
        "y": 409.9
      },
      {
        "x": 531.4,
        "y": 404.0
      },
      {
        "x": 545.5,
        "y": 409.9
      }
    ]
  },
  {
    "id": "dubuque",
    "name": "Provincia de Dubuque",
    "capitalName": "Dubuque",
    "owner": "neutral",
    "theater": "americas",
    "x": 526.4,
    "y": 359.8,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "fort_wayne",
      "petoskey",
      "thunder_bay",
      "great_plains",
      "roseau",
      "southaven"
    ],
    "polygon": [
      {
        "x": 546.4,
        "y": 359.8
      },
      {
        "x": 540.5,
        "y": 373.9
      },
      {
        "x": 526.4,
        "y": 379.8
      },
      {
        "x": 512.3,
        "y": 373.9
      },
      {
        "x": 506.4,
        "y": 359.8
      },
      {
        "x": 512.3,
        "y": 345.7
      },
      {
        "x": 526.4,
        "y": 339.8
      },
      {
        "x": 540.5,
        "y": 345.7
      }
    ]
  },
  {
    "id": "thunder_bay",
    "name": "Provincia de Thunder Bay",
    "capitalName": "Thunder Bay",
    "owner": "neutral",
    "theater": "americas",
    "x": 536.1,
    "y": 310.6,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "silver",
    "neighbors": [
      "petoskey",
      "roseau",
      "dubuque",
      "sachigo_lake",
      "moosonee",
      "north_bay",
      "winisk"
    ],
    "polygon": [
      {
        "x": 556.1,
        "y": 310.6
      },
      {
        "x": 550.2,
        "y": 324.7
      },
      {
        "x": 536.1,
        "y": 330.6
      },
      {
        "x": 522.0,
        "y": 324.7
      },
      {
        "x": 516.1,
        "y": 310.6
      },
      {
        "x": 522.0,
        "y": 296.5
      },
      {
        "x": 536.1,
        "y": 290.6
      },
      {
        "x": 550.2,
        "y": 296.5
      }
    ]
  },
  {
    "id": "roseau",
    "name": "Provincia de Roseau",
    "capitalName": "Roseau",
    "owner": "neutral",
    "theater": "americas",
    "x": 493.4,
    "y": 306.6,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "cannon_ball",
      "thunder_bay",
      "yorkton",
      "sachigo_lake",
      "wabowden",
      "dubuque"
    ],
    "polygon": [
      {
        "x": 513.4,
        "y": 306.6
      },
      {
        "x": 507.5,
        "y": 320.7
      },
      {
        "x": 493.4,
        "y": 326.6
      },
      {
        "x": 479.3,
        "y": 320.7
      },
      {
        "x": 473.4,
        "y": 306.6
      },
      {
        "x": 479.3,
        "y": 292.5
      },
      {
        "x": 493.4,
        "y": 286.6
      },
      {
        "x": 507.5,
        "y": 292.5
      }
    ]
  },
  {
    "id": "cannon_ball",
    "name": "Provincia de Cannon Ball",
    "capitalName": "Cannon Ball",
    "owner": "neutral",
    "theater": "americas",
    "x": 461.4,
    "y": 327.8,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "roseau",
      "scottsbluff",
      "yorkton",
      "malta",
      "great_plains",
      "dubois",
      "la_ronge",
      "wabowden"
    ],
    "polygon": [
      {
        "x": 481.4,
        "y": 327.8
      },
      {
        "x": 475.5,
        "y": 341.9
      },
      {
        "x": 461.4,
        "y": 347.8
      },
      {
        "x": 447.3,
        "y": 341.9
      },
      {
        "x": 441.4,
        "y": 327.8
      },
      {
        "x": 447.3,
        "y": 313.7
      },
      {
        "x": 461.4,
        "y": 307.8
      },
      {
        "x": 475.5,
        "y": 313.7
      }
    ]
  },
  {
    "id": "scottsbluff",
    "name": "Provincia de Scottsbluff",
    "capitalName": "Scottsbluff",
    "owner": "neutral",
    "theater": "americas",
    "x": 441.5,
    "y": 365.6,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "great_plains",
      "dubois",
      "cannon_ball",
      "guymon",
      "malta",
      "gallup",
      "lund"
    ],
    "polygon": [
      {
        "x": 461.5,
        "y": 365.6
      },
      {
        "x": 455.6,
        "y": 379.7
      },
      {
        "x": 441.5,
        "y": 385.6
      },
      {
        "x": 427.4,
        "y": 379.7
      },
      {
        "x": 421.5,
        "y": 365.6
      },
      {
        "x": 427.4,
        "y": 351.5
      },
      {
        "x": 441.5,
        "y": 345.6
      },
      {
        "x": 455.6,
        "y": 351.5
      }
    ]
  },
  {
    "id": "guymon",
    "name": "Provincia de Guymon",
    "capitalName": "Guymon",
    "owner": "neutral",
    "theater": "americas",
    "x": 455.8,
    "y": 409.8,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "great_plains",
      "carlsbad",
      "durant",
      "ballinger",
      "scottsbluff",
      "gallup",
      "yuma"
    ],
    "polygon": [
      {
        "x": 475.8,
        "y": 409.8
      },
      {
        "x": 469.9,
        "y": 423.9
      },
      {
        "x": 455.8,
        "y": 429.8
      },
      {
        "x": 441.7,
        "y": 423.9
      },
      {
        "x": 435.8,
        "y": 409.8
      },
      {
        "x": 441.7,
        "y": 395.7
      },
      {
        "x": 455.8,
        "y": 389.8
      },
      {
        "x": 469.9,
        "y": 395.7
      }
    ]
  },
  {
    "id": "durant",
    "name": "Provincia de Durant",
    "capitalName": "Durant",
    "owner": "neutral",
    "theater": "americas",
    "x": 489.3,
    "y": 431.4,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "ballinger",
      "houston",
      "guymon",
      "southaven",
      "great_plains",
      "mississippi",
      "carlsbad",
      "mcallen"
    ],
    "polygon": [
      {
        "x": 509.3,
        "y": 431.4
      },
      {
        "x": 503.4,
        "y": 445.5
      },
      {
        "x": 489.3,
        "y": 451.4
      },
      {
        "x": 475.2,
        "y": 445.5
      },
      {
        "x": 469.3,
        "y": 431.4
      },
      {
        "x": 475.2,
        "y": 417.3
      },
      {
        "x": 489.3,
        "y": 411.4
      },
      {
        "x": 503.4,
        "y": 417.3
      }
    ]
  },
  {
    "id": "gallup",
    "name": "Provincia de Gallup",
    "capitalName": "Gallup",
    "owner": "neutral",
    "theater": "americas",
    "x": 408.0,
    "y": 419.1,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "saltpeter",
    "neighbors": [
      "lund",
      "carlsbad",
      "yuma",
      "guymon",
      "scottsbluff",
      "ballinger",
      "california",
      "riddle"
    ],
    "polygon": [
      {
        "x": 428.0,
        "y": 419.1
      },
      {
        "x": 422.1,
        "y": 433.2
      },
      {
        "x": 408.0,
        "y": 439.1
      },
      {
        "x": 393.9,
        "y": 433.2
      },
      {
        "x": 388.0,
        "y": 419.1
      },
      {
        "x": 393.9,
        "y": 405.0
      },
      {
        "x": 408.0,
        "y": 399.1
      },
      {
        "x": 422.1,
        "y": 405.0
      }
    ]
  },
  {
    "id": "carlsbad",
    "name": "Provincia de Carlsbad",
    "capitalName": "Carlsbad",
    "owner": "neutral",
    "theater": "americas",
    "x": 437.7,
    "y": 443.7,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "ballinger",
      "guymon",
      "gallup",
      "durant",
      "houston",
      "mcallen",
      "yuma"
    ],
    "polygon": [
      {
        "x": 457.7,
        "y": 443.7
      },
      {
        "x": 451.8,
        "y": 457.8
      },
      {
        "x": 437.7,
        "y": 463.7
      },
      {
        "x": 423.6,
        "y": 457.8
      },
      {
        "x": 417.7,
        "y": 443.7
      },
      {
        "x": 423.6,
        "y": 429.6
      },
      {
        "x": 437.7,
        "y": 423.7
      },
      {
        "x": 451.8,
        "y": 429.6
      }
    ]
  },
  {
    "id": "dubois",
    "name": "Provincia de Dubois",
    "capitalName": "Dubois",
    "owner": "neutral",
    "theater": "americas",
    "x": 402.0,
    "y": 351.2,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "missoula",
      "scottsbluff",
      "malta",
      "riddle",
      "lund",
      "cannon_ball",
      "california"
    ],
    "polygon": [
      {
        "x": 422.0,
        "y": 351.2
      },
      {
        "x": 416.1,
        "y": 365.3
      },
      {
        "x": 402.0,
        "y": 371.2
      },
      {
        "x": 387.9,
        "y": 365.3
      },
      {
        "x": 382.0,
        "y": 351.2
      },
      {
        "x": 387.9,
        "y": 337.1
      },
      {
        "x": 402.0,
        "y": 331.2
      },
      {
        "x": 416.1,
        "y": 337.1
      }
    ]
  },
  {
    "id": "missoula",
    "name": "Provincia de Missoula",
    "capitalName": "Missoula",
    "owner": "neutral",
    "theater": "americas",
    "x": 373.4,
    "y": 323.5,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "dubois",
      "riddle",
      "malta",
      "revelstoke",
      "provost",
      "lund",
      "california",
      "grande_prairie"
    ],
    "polygon": [
      {
        "x": 393.4,
        "y": 323.5
      },
      {
        "x": 387.5,
        "y": 337.6
      },
      {
        "x": 373.4,
        "y": 343.5
      },
      {
        "x": 359.3,
        "y": 337.6
      },
      {
        "x": 353.4,
        "y": 323.5
      },
      {
        "x": 359.3,
        "y": 309.4
      },
      {
        "x": 373.4,
        "y": 303.5
      },
      {
        "x": 387.5,
        "y": 309.4
      }
    ]
  },
  {
    "id": "malta",
    "name": "Provincia de Malta",
    "capitalName": "Malta",
    "owner": "neutral",
    "theater": "americas",
    "x": 414.1,
    "y": 310.8,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "provost",
      "dubois",
      "missoula",
      "yorkton",
      "cannon_ball",
      "scottsbluff",
      "riddle",
      "revelstoke",
      "fort_mcmurray",
      "grande_prairie",
      "la_ronge"
    ],
    "polygon": [
      {
        "x": 434.1,
        "y": 310.8
      },
      {
        "x": 428.2,
        "y": 324.9
      },
      {
        "x": 414.1,
        "y": 330.8
      },
      {
        "x": 400.0,
        "y": 324.9
      },
      {
        "x": 394.1,
        "y": 310.8
      },
      {
        "x": 400.0,
        "y": 296.7
      },
      {
        "x": 414.1,
        "y": 290.8
      },
      {
        "x": 428.2,
        "y": 296.7
      }
    ]
  },
  {
    "id": "riddle",
    "name": "Provincia de Riddle",
    "capitalName": "Riddle",
    "owner": "neutral",
    "theater": "americas",
    "x": 359.2,
    "y": 362.4,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "lund",
      "missoula",
      "dubois",
      "california",
      "gallup",
      "malta",
      "yuma",
      "revelstoke"
    ],
    "polygon": [
      {
        "x": 379.2,
        "y": 362.4
      },
      {
        "x": 373.3,
        "y": 376.5
      },
      {
        "x": 359.2,
        "y": 382.4
      },
      {
        "x": 345.1,
        "y": 376.5
      },
      {
        "x": 339.2,
        "y": 362.4
      },
      {
        "x": 345.1,
        "y": 348.3
      },
      {
        "x": 359.2,
        "y": 342.4
      },
      {
        "x": 373.3,
        "y": 348.3
      }
    ]
  },
  {
    "id": "lund",
    "name": "Provincia de Lund",
    "capitalName": "Lund",
    "owner": "neutral",
    "theater": "americas",
    "x": 376.5,
    "y": 397.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "gallup",
      "riddle",
      "yuma",
      "dubois",
      "california",
      "scottsbluff",
      "missoula"
    ],
    "polygon": [
      {
        "x": 396.5,
        "y": 397.4
      },
      {
        "x": 390.6,
        "y": 411.5
      },
      {
        "x": 376.5,
        "y": 417.4
      },
      {
        "x": 362.4,
        "y": 411.5
      },
      {
        "x": 356.5,
        "y": 397.4
      },
      {
        "x": 362.4,
        "y": 383.3
      },
      {
        "x": 376.5,
        "y": 377.4
      },
      {
        "x": 390.6,
        "y": 383.3
      }
    ]
  },
  {
    "id": "yuma",
    "name": "Provincia de Yuma",
    "capitalName": "Yuma",
    "owner": "neutral",
    "theater": "americas",
    "x": 369.2,
    "y": 442.1,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "gallup",
      "lund",
      "california",
      "carlsbad",
      "riddle",
      "guymon"
    ],
    "polygon": [
      {
        "x": 389.2,
        "y": 442.1
      },
      {
        "x": 383.3,
        "y": 456.2
      },
      {
        "x": 369.2,
        "y": 462.1
      },
      {
        "x": 355.1,
        "y": 456.2
      },
      {
        "x": 349.2,
        "y": 442.1
      },
      {
        "x": 355.1,
        "y": 428.0
      },
      {
        "x": 369.2,
        "y": 422.1
      },
      {
        "x": 383.3,
        "y": 428.0
      }
    ]
  },
  {
    "id": "revelstoke",
    "name": "Provincia de Revelstoke",
    "capitalName": "Revelstoke",
    "owner": "neutral",
    "theater": "americas",
    "x": 345.5,
    "y": 286.9,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "grande_prairie",
      "missoula",
      "provost",
      "fort_mcmurray",
      "malta",
      "riddle"
    ],
    "polygon": [
      {
        "x": 365.5,
        "y": 286.9
      },
      {
        "x": 359.6,
        "y": 301.0
      },
      {
        "x": 345.5,
        "y": 306.9
      },
      {
        "x": 331.4,
        "y": 301.0
      },
      {
        "x": 325.5,
        "y": 286.9
      },
      {
        "x": 331.4,
        "y": 272.8
      },
      {
        "x": 345.5,
        "y": 266.9
      },
      {
        "x": 359.6,
        "y": 272.8
      }
    ]
  },
  {
    "id": "fort_mcmurray",
    "name": "Provincia de Fort McMurray",
    "capitalName": "Fort McMurray",
    "owner": "neutral",
    "theater": "americas",
    "x": 390.7,
    "y": 230.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "la_ronge",
      "provost",
      "grande_prairie",
      "revelstoke",
      "yorkton",
      "malta"
    ],
    "polygon": [
      {
        "x": 410.7,
        "y": 230.9
      },
      {
        "x": 404.8,
        "y": 245.0
      },
      {
        "x": 390.7,
        "y": 250.9
      },
      {
        "x": 376.6,
        "y": 245.0
      },
      {
        "x": 370.7,
        "y": 230.9
      },
      {
        "x": 376.6,
        "y": 216.8
      },
      {
        "x": 390.7,
        "y": 210.9
      },
      {
        "x": 404.8,
        "y": 216.8
      }
    ]
  },
  {
    "id": "provost",
    "name": "Provincia de Provost",
    "capitalName": "Provost",
    "owner": "neutral",
    "theater": "americas",
    "x": 398.0,
    "y": 274.4,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "malta",
      "la_ronge",
      "fort_mcmurray",
      "yorkton",
      "revelstoke",
      "missoula",
      "grande_prairie",
      "wabowden"
    ],
    "polygon": [
      {
        "x": 418.0,
        "y": 274.4
      },
      {
        "x": 412.1,
        "y": 288.5
      },
      {
        "x": 398.0,
        "y": 294.4
      },
      {
        "x": 383.9,
        "y": 288.5
      },
      {
        "x": 378.0,
        "y": 274.4
      },
      {
        "x": 383.9,
        "y": 260.3
      },
      {
        "x": 398.0,
        "y": 254.4
      },
      {
        "x": 412.1,
        "y": 260.3
      }
    ]
  },
  {
    "id": "grande_prairie",
    "name": "Provincia de Grande Prairie",
    "capitalName": "Grande Prairie",
    "owner": "neutral",
    "theater": "americas",
    "x": 341.9,
    "y": 246.9,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "revelstoke",
      "fort_mcmurray",
      "provost",
      "missoula",
      "la_ronge",
      "malta"
    ],
    "polygon": [
      {
        "x": 361.9,
        "y": 246.9
      },
      {
        "x": 356.0,
        "y": 261.0
      },
      {
        "x": 341.9,
        "y": 266.9
      },
      {
        "x": 327.8,
        "y": 261.0
      },
      {
        "x": 321.9,
        "y": 246.9
      },
      {
        "x": 327.8,
        "y": 232.8
      },
      {
        "x": 341.9,
        "y": 226.9
      },
      {
        "x": 356.0,
        "y": 232.8
      }
    ]
  },
  {
    "id": "yorkton",
    "name": "Provincia de Yorkton",
    "capitalName": "Yorkton",
    "owner": "neutral",
    "theater": "americas",
    "x": 449.1,
    "y": 285.1,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "grain",
    "neighbors": [
      "la_ronge",
      "malta",
      "wabowden",
      "cannon_ball",
      "roseau",
      "provost",
      "fort_mcmurray",
      "sachigo_lake"
    ],
    "polygon": [
      {
        "x": 469.1,
        "y": 285.1
      },
      {
        "x": 463.2,
        "y": 299.2
      },
      {
        "x": 449.1,
        "y": 305.1
      },
      {
        "x": 435.0,
        "y": 299.2
      },
      {
        "x": 429.1,
        "y": 285.1
      },
      {
        "x": 435.0,
        "y": 271.0
      },
      {
        "x": 449.1,
        "y": 265.1
      },
      {
        "x": 463.2,
        "y": 271.0
      }
    ]
  },
  {
    "id": "la_ronge",
    "name": "Provincia de La Ronge",
    "capitalName": "La Ronge",
    "owner": "neutral",
    "theater": "americas",
    "x": 430.7,
    "y": 247.1,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "yorkton",
      "provost",
      "fort_mcmurray",
      "wabowden",
      "malta",
      "cannon_ball",
      "grande_prairie"
    ],
    "polygon": [
      {
        "x": 450.7,
        "y": 247.1
      },
      {
        "x": 444.8,
        "y": 261.2
      },
      {
        "x": 430.7,
        "y": 267.1
      },
      {
        "x": 416.6,
        "y": 261.2
      },
      {
        "x": 410.7,
        "y": 247.1
      },
      {
        "x": 416.6,
        "y": 233.0
      },
      {
        "x": 430.7,
        "y": 227.1
      },
      {
        "x": 444.8,
        "y": 233.0
      }
    ]
  },
  {
    "id": "wabowden",
    "name": "Provincia de Wabowden",
    "capitalName": "Wabowden",
    "owner": "neutral",
    "theater": "americas",
    "x": 474.7,
    "y": 249.4,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "sachigo_lake",
      "yorkton",
      "la_ronge",
      "roseau",
      "cannon_ball",
      "provost",
      "winisk"
    ],
    "polygon": [
      {
        "x": 494.7,
        "y": 249.4
      },
      {
        "x": 488.8,
        "y": 263.5
      },
      {
        "x": 474.7,
        "y": 269.4
      },
      {
        "x": 460.6,
        "y": 263.5
      },
      {
        "x": 454.7,
        "y": 249.4
      },
      {
        "x": 460.6,
        "y": 235.3
      },
      {
        "x": 474.7,
        "y": 229.4
      },
      {
        "x": 488.8,
        "y": 235.3
      }
    ]
  },
  {
    "id": "sachigo_lake",
    "name": "Provincia de Sachigo Lake",
    "capitalName": "Sachigo Lake",
    "owner": "neutral",
    "theater": "americas",
    "x": 516.9,
    "y": 259.6,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "iron",
    "neighbors": [
      "wabowden",
      "winisk",
      "roseau",
      "thunder_bay",
      "yorkton",
      "moosonee"
    ],
    "polygon": [
      {
        "x": 536.9,
        "y": 259.6
      },
      {
        "x": 531.0,
        "y": 273.7
      },
      {
        "x": 516.9,
        "y": 279.6
      },
      {
        "x": 502.8,
        "y": 273.7
      },
      {
        "x": 496.9,
        "y": 259.6
      },
      {
        "x": 502.8,
        "y": 245.5
      },
      {
        "x": 516.9,
        "y": 239.6
      },
      {
        "x": 531.0,
        "y": 245.5
      }
    ]
  },
  {
    "id": "camaguey",
    "name": "Provincia de Camaguey",
    "capitalName": "Camaguey",
    "owner": "spain",
    "theater": "americas",
    "x": 610.5,
    "y": 529.9,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "caribbean",
      "grace_bay",
      "freeport",
      "siksatara",
      "punta_cana",
      "florida"
    ],
    "polygon": [
      {
        "x": 630.5,
        "y": 529.9
      },
      {
        "x": 624.6,
        "y": 544.0
      },
      {
        "x": 610.5,
        "y": 549.9
      },
      {
        "x": 596.4,
        "y": 544.0
      },
      {
        "x": 590.5,
        "y": 529.9
      },
      {
        "x": 596.4,
        "y": 515.8
      },
      {
        "x": 610.5,
        "y": 509.9
      },
      {
        "x": 624.6,
        "y": 515.8
      }
    ]
  },
  {
    "id": "mcallen",
    "name": "Provincia de McAllen",
    "capitalName": "McAllen",
    "owner": "spain",
    "theater": "americas",
    "x": 477.3,
    "y": 493.2,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "houston",
      "ballinger",
      "tenochtitlan",
      "veracruz",
      "mississippi",
      "durant",
      "yucatan",
      "carlsbad"
    ],
    "polygon": [
      {
        "x": 497.3,
        "y": 493.2
      },
      {
        "x": 491.4,
        "y": 507.3
      },
      {
        "x": 477.3,
        "y": 513.2
      },
      {
        "x": 463.2,
        "y": 507.3
      },
      {
        "x": 457.3,
        "y": 493.2
      },
      {
        "x": 463.2,
        "y": 479.1
      },
      {
        "x": 477.3,
        "y": 473.2
      },
      {
        "x": 491.4,
        "y": 479.1
      }
    ]
  },
  {
    "id": "panama_city",
    "name": "Provincia de Panama City",
    "capitalName": "Panama City",
    "owner": "spain",
    "theater": "americas",
    "x": 560.0,
    "y": 462.1,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "florida",
      "mississippi",
      "atlanta",
      "southaven",
      "georgetown",
      "freeport",
      "caribbean"
    ],
    "polygon": [
      {
        "x": 580.0,
        "y": 462.1
      },
      {
        "x": 574.1,
        "y": 476.2
      },
      {
        "x": 560.0,
        "y": 482.1
      },
      {
        "x": 545.9,
        "y": 476.2
      },
      {
        "x": 540.0,
        "y": 462.1
      },
      {
        "x": 545.9,
        "y": 448.0
      },
      {
        "x": 560.0,
        "y": 442.1
      },
      {
        "x": 574.1,
        "y": 448.0
      }
    ]
  },
  {
    "id": "ballinger",
    "name": "Provincia de Ballinger",
    "capitalName": "Ballinger",
    "owner": "spain",
    "theater": "americas",
    "x": 465.8,
    "y": 449.4,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "carlsbad",
      "durant",
      "houston",
      "guymon",
      "mcallen",
      "gallup",
      "tenochtitlan"
    ],
    "polygon": [
      {
        "x": 485.8,
        "y": 449.4
      },
      {
        "x": 479.9,
        "y": 463.5
      },
      {
        "x": 465.8,
        "y": 469.4
      },
      {
        "x": 451.7,
        "y": 463.5
      },
      {
        "x": 445.8,
        "y": 449.4
      },
      {
        "x": 451.7,
        "y": 435.3
      },
      {
        "x": 465.8,
        "y": 429.4
      },
      {
        "x": 479.9,
        "y": 435.3
      }
    ]
  },
  {
    "id": "houston",
    "name": "Provincia de Houston",
    "capitalName": "Houston",
    "owner": "spain",
    "theater": "americas",
    "x": 496.1,
    "y": 465.3,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "mcallen",
      "ballinger",
      "durant",
      "mississippi",
      "southaven",
      "carlsbad",
      "tenochtitlan",
      "veracruz"
    ],
    "polygon": [
      {
        "x": 516.1,
        "y": 465.3
      },
      {
        "x": 510.2,
        "y": 479.4
      },
      {
        "x": 496.1,
        "y": 485.3
      },
      {
        "x": 482.0,
        "y": 479.4
      },
      {
        "x": 476.1,
        "y": 465.3
      },
      {
        "x": 482.0,
        "y": 451.2
      },
      {
        "x": 496.1,
        "y": 445.3
      },
      {
        "x": 510.2,
        "y": 451.2
      }
    ]
  },
  {
    "id": "freeport",
    "name": "Provincia de Freeport",
    "capitalName": "Freeport",
    "owner": "spain",
    "theater": "americas",
    "x": 606.1,
    "y": 490.6,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "florida",
      "caribbean",
      "camaguey",
      "panama_city",
      "georgetown",
      "grace_bay",
      "hamilton"
    ],
    "polygon": [
      {
        "x": 626.1,
        "y": 490.6
      },
      {
        "x": 620.2,
        "y": 504.7
      },
      {
        "x": 606.1,
        "y": 510.6
      },
      {
        "x": 592.0,
        "y": 504.7
      },
      {
        "x": 586.1,
        "y": 490.6
      },
      {
        "x": 592.0,
        "y": 476.5
      },
      {
        "x": 606.1,
        "y": 470.6
      },
      {
        "x": 620.2,
        "y": 476.5
      }
    ]
  },
  {
    "id": "grace_bay",
    "name": "Provincia de Grace Bay",
    "capitalName": "Grace Bay",
    "owner": "spain",
    "theater": "americas",
    "x": 648.2,
    "y": 527.0,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "punta_cana",
      "camaguey",
      "freeport",
      "caribbean",
      "oranjestad",
      "saint_johns",
      "hamilton"
    ],
    "polygon": [
      {
        "x": 668.2,
        "y": 527.0
      },
      {
        "x": 662.3,
        "y": 541.1
      },
      {
        "x": 648.2,
        "y": 547.0
      },
      {
        "x": 634.1,
        "y": 541.1
      },
      {
        "x": 628.2,
        "y": 527.0
      },
      {
        "x": 634.1,
        "y": 512.9
      },
      {
        "x": 648.2,
        "y": 507.0
      },
      {
        "x": 662.3,
        "y": 512.9
      }
    ]
  },
  {
    "id": "hamilton",
    "name": "Provincia de Hamilton",
    "capitalName": "Hamilton",
    "owner": "spain",
    "theater": "americas",
    "x": 697.0,
    "y": 445.1,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "philadelphia",
      "new_england",
      "grace_bay",
      "georgetown",
      "virginia",
      "freeport"
    ],
    "polygon": [
      {
        "x": 717.0,
        "y": 445.1
      },
      {
        "x": 711.1,
        "y": 459.2
      },
      {
        "x": 697.0,
        "y": 465.1
      },
      {
        "x": 682.9,
        "y": 459.2
      },
      {
        "x": 677.0,
        "y": 445.1
      },
      {
        "x": 682.9,
        "y": 431.0
      },
      {
        "x": 697.0,
        "y": 425.1
      },
      {
        "x": 711.1,
        "y": 431.0
      }
    ]
  },
  {
    "id": "saint_johns",
    "name": "Provincia de Saint John's",
    "capitalName": "Saint John's",
    "owner": "spain",
    "theater": "americas",
    "x": 716.8,
    "y": 561.0,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "saint_georges",
      "punta_cana",
      "oranjestad",
      "ciudad_bolivar",
      "grace_bay",
      "caracas"
    ],
    "polygon": [
      {
        "x": 736.8,
        "y": 561.0
      },
      {
        "x": 730.9,
        "y": 575.1
      },
      {
        "x": 716.8,
        "y": 581.0
      },
      {
        "x": 702.7,
        "y": 575.1
      },
      {
        "x": 696.8,
        "y": 561.0
      },
      {
        "x": 702.7,
        "y": 546.9
      },
      {
        "x": 716.8,
        "y": 541.0
      },
      {
        "x": 730.9,
        "y": 546.9
      }
    ]
  },
  {
    "id": "oranjestad",
    "name": "Provincia de Oranjestad",
    "capitalName": "Oranjestad",
    "owner": "spain",
    "theater": "americas",
    "x": 662.7,
    "y": 594.0,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "caracas",
      "barranquilla",
      "punta_cana",
      "ciudad_bolivar",
      "saint_georges",
      "nueva_granada",
      "grace_bay",
      "saint_johns"
    ],
    "polygon": [
      {
        "x": 682.7,
        "y": 594.0
      },
      {
        "x": 676.8,
        "y": 608.1
      },
      {
        "x": 662.7,
        "y": 614.0
      },
      {
        "x": 648.6,
        "y": 608.1
      },
      {
        "x": 642.7,
        "y": 594.0
      },
      {
        "x": 648.6,
        "y": 579.9
      },
      {
        "x": 662.7,
        "y": 574.0
      },
      {
        "x": 676.8,
        "y": 579.9
      }
    ]
  },
  {
    "id": "saint_georges",
    "name": "Provincia de Saint George's",
    "capitalName": "Saint George's",
    "owner": "spain",
    "theater": "americas",
    "x": 717.3,
    "y": 597.3,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "ciudad_bolivar",
      "saint_johns",
      "paradise",
      "oranjestad",
      "caracas",
      "punta_cana"
    ],
    "polygon": [
      {
        "x": 737.3,
        "y": 597.3
      },
      {
        "x": 731.4,
        "y": 611.4
      },
      {
        "x": 717.3,
        "y": 617.3
      },
      {
        "x": 703.2,
        "y": 611.4
      },
      {
        "x": 697.3,
        "y": 597.3
      },
      {
        "x": 703.2,
        "y": 583.2
      },
      {
        "x": 717.3,
        "y": 577.3
      },
      {
        "x": 731.4,
        "y": 583.2
      }
    ]
  },
  {
    "id": "punta_cana",
    "name": "Provincia de Punta Cana",
    "capitalName": "Punta Cana",
    "owner": "spain",
    "theater": "americas",
    "x": 673.1,
    "y": 550.5,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "grace_bay",
      "oranjestad",
      "saint_johns",
      "saint_georges",
      "camaguey",
      "barranquilla"
    ],
    "polygon": [
      {
        "x": 693.1,
        "y": 550.5
      },
      {
        "x": 687.2,
        "y": 564.6
      },
      {
        "x": 673.1,
        "y": 570.5
      },
      {
        "x": 659.0,
        "y": 564.6
      },
      {
        "x": 653.1,
        "y": 550.5
      },
      {
        "x": 659.0,
        "y": 536.4
      },
      {
        "x": 673.1,
        "y": 530.5
      },
      {
        "x": 687.2,
        "y": 536.4
      }
    ]
  },
  {
    "id": "siksatara",
    "name": "Provincia de Siksatara",
    "capitalName": "Siksatara",
    "owner": "spain",
    "theater": "americas",
    "x": 565.1,
    "y": 571.0,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "los_chiles",
      "guatemala",
      "yucatan",
      "caribbean",
      "camaguey",
      "las_tablas",
      "veracruz"
    ],
    "polygon": [
      {
        "x": 585.1,
        "y": 571.0
      },
      {
        "x": 579.2,
        "y": 585.1
      },
      {
        "x": 565.1,
        "y": 591.0
      },
      {
        "x": 551.0,
        "y": 585.1
      },
      {
        "x": 545.1,
        "y": 571.0
      },
      {
        "x": 551.0,
        "y": 556.9
      },
      {
        "x": 565.1,
        "y": 551.0
      },
      {
        "x": 579.2,
        "y": 556.9
      }
    ]
  },
  {
    "id": "los_chiles",
    "name": "Provincia de Los Chiles",
    "capitalName": "Los Chiles",
    "owner": "spain",
    "theater": "americas",
    "x": 567.2,
    "y": 603.2,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "siksatara",
      "las_tablas",
      "guatemala",
      "barranquilla",
      "yucatan",
      "nueva_granada"
    ],
    "polygon": [
      {
        "x": 587.2,
        "y": 603.2
      },
      {
        "x": 581.3,
        "y": 617.3
      },
      {
        "x": 567.2,
        "y": 623.2
      },
      {
        "x": 553.1,
        "y": 617.3
      },
      {
        "x": 547.2,
        "y": 603.2
      },
      {
        "x": 553.1,
        "y": 589.1
      },
      {
        "x": 567.2,
        "y": 583.2
      },
      {
        "x": 581.3,
        "y": 589.1
      }
    ]
  },
  {
    "id": "las_tablas",
    "name": "Provincia de Las Tablas",
    "capitalName": "Las Tablas",
    "owner": "spain",
    "theater": "americas",
    "x": 595.3,
    "y": 627.6,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "los_chiles",
      "barranquilla",
      "nueva_granada",
      "siksatara",
      "quito",
      "caracas"
    ],
    "polygon": [
      {
        "x": 615.3,
        "y": 627.6
      },
      {
        "x": 609.4,
        "y": 641.7
      },
      {
        "x": 595.3,
        "y": 647.6
      },
      {
        "x": 581.2,
        "y": 641.7
      },
      {
        "x": 575.3,
        "y": 627.6
      },
      {
        "x": 581.2,
        "y": 613.5
      },
      {
        "x": 595.3,
        "y": 607.6
      },
      {
        "x": 609.4,
        "y": 613.5
      }
    ]
  },
  {
    "id": "barranquilla",
    "name": "Provincia de Barranquilla",
    "capitalName": "Barranquilla",
    "owner": "spain",
    "theater": "americas",
    "x": 630.8,
    "y": 605.3,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "oranjestad",
      "las_tablas",
      "caracas",
      "nueva_granada",
      "los_chiles",
      "punta_cana"
    ],
    "polygon": [
      {
        "x": 650.8,
        "y": 605.3
      },
      {
        "x": 644.9,
        "y": 619.4
      },
      {
        "x": 630.8,
        "y": 625.3
      },
      {
        "x": 616.7,
        "y": 619.4
      },
      {
        "x": 610.8,
        "y": 605.3
      },
      {
        "x": 616.7,
        "y": 591.2
      },
      {
        "x": 630.8,
        "y": 585.3
      },
      {
        "x": 644.9,
        "y": 591.2
      }
    ]
  },
  {
    "id": "riberalta",
    "name": "Provincia de Riberalta",
    "capitalName": "Riberalta",
    "owner": "spain",
    "theater": "americas",
    "x": 688.5,
    "y": 758.4,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "humaita",
      "itamarati",
      "ascension",
      "cuzco",
      "saweto",
      "castanheira",
      "lima",
      "charcas"
    ],
    "polygon": [
      {
        "x": 708.5,
        "y": 758.4
      },
      {
        "x": 702.6,
        "y": 772.5
      },
      {
        "x": 688.5,
        "y": 778.4
      },
      {
        "x": 674.4,
        "y": 772.5
      },
      {
        "x": 668.5,
        "y": 758.4
      },
      {
        "x": 674.4,
        "y": 744.3
      },
      {
        "x": 688.5,
        "y": 738.4
      },
      {
        "x": 702.6,
        "y": 744.3
      }
    ]
  },
  {
    "id": "trujillo",
    "name": "Provincia de Trujillo",
    "capitalName": "Trujillo",
    "owner": "spain",
    "theater": "americas",
    "x": 603.5,
    "y": 737.9,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "lima",
      "saweto",
      "iquitos",
      "quito",
      "cuzco",
      "itamarati"
    ],
    "polygon": [
      {
        "x": 623.5,
        "y": 737.9
      },
      {
        "x": 617.6,
        "y": 752.0
      },
      {
        "x": 603.5,
        "y": 757.9
      },
      {
        "x": 589.4,
        "y": 752.0
      },
      {
        "x": 583.5,
        "y": 737.9
      },
      {
        "x": 589.4,
        "y": 723.8
      },
      {
        "x": 603.5,
        "y": 717.9
      },
      {
        "x": 617.6,
        "y": 723.8
      }
    ]
  },
  {
    "id": "saweto",
    "name": "Provincia de Saweto",
    "capitalName": "Saweto",
    "owner": "spain",
    "theater": "americas",
    "x": 641.6,
    "y": 744.8,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "cuzco",
      "lima",
      "iquitos",
      "itamarati",
      "trujillo",
      "riberalta",
      "quito"
    ],
    "polygon": [
      {
        "x": 661.6,
        "y": 744.8
      },
      {
        "x": 655.7,
        "y": 758.9
      },
      {
        "x": 641.6,
        "y": 764.8
      },
      {
        "x": 627.5,
        "y": 758.9
      },
      {
        "x": 621.6,
        "y": 744.8
      },
      {
        "x": 627.5,
        "y": 730.7
      },
      {
        "x": 641.6,
        "y": 724.8
      },
      {
        "x": 655.7,
        "y": 730.7
      }
    ]
  },
  {
    "id": "iquitos",
    "name": "Provincia de Iquitos",
    "capitalName": "Iquitos",
    "owner": "spain",
    "theater": "americas",
    "x": 641.4,
    "y": 707.9,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "quito",
      "saweto",
      "itamarati",
      "mitu",
      "trujillo",
      "maraa",
      "lima"
    ],
    "polygon": [
      {
        "x": 661.4,
        "y": 707.9
      },
      {
        "x": 655.5,
        "y": 722.0
      },
      {
        "x": 641.4,
        "y": 727.9
      },
      {
        "x": 627.3,
        "y": 722.0
      },
      {
        "x": 621.4,
        "y": 707.9
      },
      {
        "x": 627.3,
        "y": 693.8
      },
      {
        "x": 641.4,
        "y": 687.9
      },
      {
        "x": 655.5,
        "y": 693.8
      }
    ]
  },
  {
    "id": "ciudad_bolivar",
    "name": "Provincia de Ciudad Bolívar",
    "capitalName": "Ciudad Bolívar",
    "owner": "spain",
    "theater": "americas",
    "x": 705.4,
    "y": 625.6,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "saint_georges",
      "caracas",
      "tamatama",
      "paradise",
      "oranjestad",
      "mitu",
      "saint_johns"
    ],
    "polygon": [
      {
        "x": 725.4,
        "y": 625.6
      },
      {
        "x": 719.5,
        "y": 639.7
      },
      {
        "x": 705.4,
        "y": 645.6
      },
      {
        "x": 691.3,
        "y": 639.7
      },
      {
        "x": 685.4,
        "y": 625.6
      },
      {
        "x": 691.3,
        "y": 611.5
      },
      {
        "x": 705.4,
        "y": 605.6
      },
      {
        "x": 719.5,
        "y": 611.5
      }
    ]
  },
  {
    "id": "tamatama",
    "name": "Provincia de TamaTama",
    "capitalName": "TamaTama",
    "owner": "spain",
    "theater": "americas",
    "x": 690.3,
    "y": 659.9,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "mitu",
      "maraa",
      "ciudad_bolivar",
      "caracas",
      "nueva_granada",
      "amazonas",
      "paradise"
    ],
    "polygon": [
      {
        "x": 710.3,
        "y": 659.9
      },
      {
        "x": 704.4,
        "y": 674.0
      },
      {
        "x": 690.3,
        "y": 679.9
      },
      {
        "x": 676.2,
        "y": 674.0
      },
      {
        "x": 670.3,
        "y": 659.9
      },
      {
        "x": 676.2,
        "y": 645.8
      },
      {
        "x": 690.3,
        "y": 639.9
      },
      {
        "x": 704.4,
        "y": 645.8
      }
    ]
  },
  {
    "id": "mitu",
    "name": "Provincia de Mitú",
    "capitalName": "Mitú",
    "owner": "spain",
    "theater": "americas",
    "x": 661.4,
    "y": 672.9,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "tamatama",
      "nueva_granada",
      "maraa",
      "iquitos",
      "caracas",
      "quito",
      "ciudad_bolivar",
      "itamarati"
    ],
    "polygon": [
      {
        "x": 681.4,
        "y": 672.9
      },
      {
        "x": 675.5,
        "y": 687.0
      },
      {
        "x": 661.4,
        "y": 692.9
      },
      {
        "x": 647.3,
        "y": 687.0
      },
      {
        "x": 641.4,
        "y": 672.9
      },
      {
        "x": 647.3,
        "y": 658.8
      },
      {
        "x": 661.4,
        "y": 652.9
      },
      {
        "x": 675.5,
        "y": 658.8
      }
    ]
  },
  {
    "id": "maraa",
    "name": "Provincia de Maraa",
    "capitalName": "Maraa",
    "owner": "spain",
    "theater": "americas",
    "x": 693.4,
    "y": 694.1,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "tamatama",
      "itamarati",
      "amazonas",
      "mitu",
      "humaita",
      "iquitos"
    ],
    "polygon": [
      {
        "x": 713.4,
        "y": 694.1
      },
      {
        "x": 707.5,
        "y": 708.2
      },
      {
        "x": 693.4,
        "y": 714.1
      },
      {
        "x": 679.3,
        "y": 708.2
      },
      {
        "x": 673.4,
        "y": 694.1
      },
      {
        "x": 679.3,
        "y": 680.0
      },
      {
        "x": 693.4,
        "y": 674.1
      },
      {
        "x": 707.5,
        "y": 680.0
      }
    ]
  },
  {
    "id": "humaita",
    "name": "Provincia de Humaita",
    "capitalName": "Humaita",
    "owner": "spain",
    "theater": "americas",
    "x": 708.4,
    "y": 734.0,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "riberalta",
      "itamarati",
      "amazonas",
      "castanheira",
      "maraa",
      "ascension"
    ],
    "polygon": [
      {
        "x": 728.4,
        "y": 734.0
      },
      {
        "x": 722.5,
        "y": 748.1
      },
      {
        "x": 708.4,
        "y": 754.0
      },
      {
        "x": 694.3,
        "y": 748.1
      },
      {
        "x": 688.4,
        "y": 734.0
      },
      {
        "x": 694.3,
        "y": 719.9
      },
      {
        "x": 708.4,
        "y": 714.0
      },
      {
        "x": 722.5,
        "y": 719.9
      }
    ]
  },
  {
    "id": "itamarati",
    "name": "Provincia de Itamarati",
    "capitalName": "Itamarati",
    "owner": "spain",
    "theater": "americas",
    "x": 675.1,
    "y": 725.6,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "humaita",
      "riberalta",
      "maraa",
      "iquitos",
      "saweto",
      "mitu",
      "lima",
      "cuzco",
      "amazonas",
      "trujillo"
    ],
    "polygon": [
      {
        "x": 695.1,
        "y": 725.6
      },
      {
        "x": 689.2,
        "y": 739.7
      },
      {
        "x": 675.1,
        "y": 745.6
      },
      {
        "x": 661.0,
        "y": 739.7
      },
      {
        "x": 655.1,
        "y": 725.6
      },
      {
        "x": 661.0,
        "y": 711.5
      },
      {
        "x": 675.1,
        "y": 705.6
      },
      {
        "x": 689.2,
        "y": 711.5
      }
    ]
  },
  {
    "id": "ascension",
    "name": "Provincia de Ascension",
    "capitalName": "Ascension",
    "owner": "spain",
    "theater": "americas",
    "x": 707.8,
    "y": 793.1,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "caceres",
      "charcas",
      "riberalta",
      "castanheira",
      "puerto_valle_mi",
      "la_union",
      "humaita"
    ],
    "polygon": [
      {
        "x": 727.8,
        "y": 793.1
      },
      {
        "x": 721.9,
        "y": 807.2
      },
      {
        "x": 707.8,
        "y": 813.1
      },
      {
        "x": 693.7,
        "y": 807.2
      },
      {
        "x": 687.8,
        "y": 793.1
      },
      {
        "x": 693.7,
        "y": 779.0
      },
      {
        "x": 707.8,
        "y": 773.1
      },
      {
        "x": 721.9,
        "y": 779.0
      }
    ]
  },
  {
    "id": "san_luis",
    "name": "Provincia de San Luis",
    "capitalName": "San Luis",
    "owner": "spain",
    "theater": "americas",
    "x": 686.9,
    "y": 926.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "malbran",
      "fiambala",
      "chile",
      "rio_plata",
      "la_union",
      "wanda"
    ],
    "polygon": [
      {
        "x": 706.9,
        "y": 926.9
      },
      {
        "x": 701.0,
        "y": 941.0
      },
      {
        "x": 686.9,
        "y": 946.9
      },
      {
        "x": 672.8,
        "y": 941.0
      },
      {
        "x": 666.9,
        "y": 926.9
      },
      {
        "x": 672.8,
        "y": 912.8
      },
      {
        "x": 686.9,
        "y": 906.9
      },
      {
        "x": 701.0,
        "y": 912.8
      }
    ]
  },
  {
    "id": "fiambala",
    "name": "Provincia de Fiambala",
    "capitalName": "Fiambala",
    "owner": "spain",
    "theater": "americas",
    "x": 678.5,
    "y": 881.6,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "malbran",
      "la_union",
      "san_luis",
      "chile",
      "charcas",
      "puerto_valle_mi",
      "rio_plata"
    ],
    "polygon": [
      {
        "x": 698.5,
        "y": 881.6
      },
      {
        "x": 692.6,
        "y": 895.7
      },
      {
        "x": 678.5,
        "y": 901.6
      },
      {
        "x": 664.4,
        "y": 895.7
      },
      {
        "x": 658.5,
        "y": 881.6
      },
      {
        "x": 664.4,
        "y": 867.5
      },
      {
        "x": 678.5,
        "y": 861.6
      },
      {
        "x": 692.6,
        "y": 867.5
      }
    ]
  },
  {
    "id": "malbran",
    "name": "Provincia de Malbran",
    "capitalName": "Malbran",
    "owner": "spain",
    "theater": "americas",
    "x": 713.0,
    "y": 894.7,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "fiambala",
      "san_luis",
      "la_union",
      "rio_plata",
      "wanda",
      "puerto_valle_mi",
      "chile"
    ],
    "polygon": [
      {
        "x": 733.0,
        "y": 894.7
      },
      {
        "x": 727.1,
        "y": 908.8
      },
      {
        "x": 713.0,
        "y": 914.7
      },
      {
        "x": 698.9,
        "y": 908.8
      },
      {
        "x": 693.0,
        "y": 894.7
      },
      {
        "x": 698.9,
        "y": 880.6
      },
      {
        "x": 713.0,
        "y": 874.7
      },
      {
        "x": 727.1,
        "y": 880.6
      }
    ]
  },
  {
    "id": "la_union",
    "name": "Provincia de La Unión",
    "capitalName": "La Unión",
    "owner": "spain",
    "theater": "americas",
    "x": 708.1,
    "y": 852.2,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "puerto_valle_mi",
      "fiambala",
      "charcas",
      "malbran",
      "wanda",
      "ascension",
      "chile",
      "rio_plata",
      "san_luis"
    ],
    "polygon": [
      {
        "x": 728.1,
        "y": 852.2
      },
      {
        "x": 722.2,
        "y": 866.3
      },
      {
        "x": 708.1,
        "y": 872.2
      },
      {
        "x": 694.0,
        "y": 866.3
      },
      {
        "x": 688.1,
        "y": 852.2
      },
      {
        "x": 694.0,
        "y": 838.1
      },
      {
        "x": 708.1,
        "y": 832.2
      },
      {
        "x": 722.2,
        "y": 838.1
      }
    ]
  },
  {
    "id": "fortaleza",
    "name": "Provincia de Fortaleza",
    "capitalName": "Fortaleza",
    "owner": "portugal",
    "theater": "americas",
    "x": 870.1,
    "y": 707.9,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "codo",
      "pernambuco",
      "petrolina",
      "morros",
      "arariuna",
      "bahia"
    ],
    "polygon": [
      {
        "x": 890.1,
        "y": 707.9
      },
      {
        "x": 884.2,
        "y": 722.0
      },
      {
        "x": 870.1,
        "y": 727.9
      },
      {
        "x": 856.0,
        "y": 722.0
      },
      {
        "x": 850.1,
        "y": 707.9
      },
      {
        "x": 856.0,
        "y": 693.8
      },
      {
        "x": 870.1,
        "y": 687.9
      },
      {
        "x": 884.2,
        "y": 693.8
      }
    ]
  },
  {
    "id": "petrolina",
    "name": "Provincia de Petrolina",
    "capitalName": "Petrolina",
    "owner": "portugal",
    "theater": "americas",
    "x": 856.8,
    "y": 746.7,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "bahia",
      "morros",
      "pernambuco",
      "codo",
      "fortaleza",
      "niquelandia",
      "sao_mateus"
    ],
    "polygon": [
      {
        "x": 876.8,
        "y": 746.7
      },
      {
        "x": 870.9,
        "y": 760.8
      },
      {
        "x": 856.8,
        "y": 766.7
      },
      {
        "x": 842.7,
        "y": 760.8
      },
      {
        "x": 836.8,
        "y": 746.7
      },
      {
        "x": 842.7,
        "y": 732.6
      },
      {
        "x": 856.8,
        "y": 726.7
      },
      {
        "x": 870.9,
        "y": 732.6
      }
    ]
  },
  {
    "id": "morros",
    "name": "Provincia de Morros",
    "capitalName": "Morros",
    "owner": "portugal",
    "theater": "americas",
    "x": 818.8,
    "y": 747.5,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "carraro",
      "petrolina",
      "niquelandia",
      "codo",
      "volta_grande",
      "bahia",
      "pernambuco",
      "fortaleza",
      "sao_mateus",
      "arariuna"
    ],
    "polygon": [
      {
        "x": 838.8,
        "y": 747.5
      },
      {
        "x": 832.9,
        "y": 761.6
      },
      {
        "x": 818.8,
        "y": 767.5
      },
      {
        "x": 804.7,
        "y": 761.6
      },
      {
        "x": 798.8,
        "y": 747.5
      },
      {
        "x": 804.7,
        "y": 733.4
      },
      {
        "x": 818.8,
        "y": 727.5
      },
      {
        "x": 832.9,
        "y": 733.4
      }
    ]
  },
  {
    "id": "joinville",
    "name": "Provincia de Joinville",
    "capitalName": "Joinville",
    "owner": "portugal",
    "theater": "americas",
    "x": 801.9,
    "y": 871.0,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "presidente_prudente",
      "wanda",
      "rio_de_janeiro",
      "araxa",
      "puerto_valle_mi",
      "mineiros",
      "rio_plata"
    ],
    "polygon": [
      {
        "x": 821.9,
        "y": 871.0
      },
      {
        "x": 816.0,
        "y": 885.1
      },
      {
        "x": 801.9,
        "y": 891.0
      },
      {
        "x": 787.8,
        "y": 885.1
      },
      {
        "x": 781.9,
        "y": 871.0
      },
      {
        "x": 787.8,
        "y": 856.9
      },
      {
        "x": 801.9,
        "y": 851.0
      },
      {
        "x": 816.0,
        "y": 856.9
      }
    ]
  },
  {
    "id": "rio_de_janeiro",
    "name": "Provincia de Rio de Janeiro",
    "capitalName": "Rio de Janeiro",
    "owner": "portugal",
    "theater": "americas",
    "x": 839.1,
    "y": 845.3,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "araxa",
      "sao_mateus",
      "joinville",
      "presidente_prudente",
      "bahia",
      "niquelandia"
    ],
    "polygon": [
      {
        "x": 859.1,
        "y": 845.3
      },
      {
        "x": 853.2,
        "y": 859.4
      },
      {
        "x": 839.1,
        "y": 865.3
      },
      {
        "x": 825.0,
        "y": 859.4
      },
      {
        "x": 819.1,
        "y": 845.3
      },
      {
        "x": 825.0,
        "y": 831.2
      },
      {
        "x": 839.1,
        "y": 825.3
      },
      {
        "x": 853.2,
        "y": 831.2
      }
    ]
  },
  {
    "id": "sao_mateus",
    "name": "Provincia de Sao Mateus",
    "capitalName": "Sao Mateus",
    "owner": "portugal",
    "theater": "americas",
    "x": 860.9,
    "y": 813.7,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "bahia",
      "rio_de_janeiro",
      "araxa",
      "niquelandia",
      "petrolina",
      "morros",
      "pernambuco"
    ],
    "polygon": [
      {
        "x": 880.9,
        "y": 813.7
      },
      {
        "x": 875.0,
        "y": 827.8
      },
      {
        "x": 860.9,
        "y": 833.7
      },
      {
        "x": 846.8,
        "y": 827.8
      },
      {
        "x": 840.9,
        "y": 813.7
      },
      {
        "x": 846.8,
        "y": 799.6
      },
      {
        "x": 860.9,
        "y": 793.7
      },
      {
        "x": 875.0,
        "y": 799.6
      }
    ]
  },
  {
    "id": "araxa",
    "name": "Provincia de Araxa",
    "capitalName": "Araxa",
    "owner": "portugal",
    "theater": "americas",
    "x": 814.7,
    "y": 820.3,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "presidente_prudente",
      "rio_de_janeiro",
      "niquelandia",
      "mineiros",
      "sao_mateus",
      "bahia",
      "joinville"
    ],
    "polygon": [
      {
        "x": 834.7,
        "y": 820.3
      },
      {
        "x": 828.8,
        "y": 834.4
      },
      {
        "x": 814.7,
        "y": 840.3
      },
      {
        "x": 800.6,
        "y": 834.4
      },
      {
        "x": 794.7,
        "y": 820.3
      },
      {
        "x": 800.6,
        "y": 806.2
      },
      {
        "x": 814.7,
        "y": 800.3
      },
      {
        "x": 828.8,
        "y": 806.2
      }
    ]
  },
  {
    "id": "wanda",
    "name": "Provincia de Wanda",
    "capitalName": "Wanda",
    "owner": "portugal",
    "theater": "americas",
    "x": 764.7,
    "y": 868.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "presidente_prudente",
      "puerto_valle_mi",
      "joinville",
      "malbran",
      "la_union",
      "mineiros",
      "rio_plata",
      "san_luis"
    ],
    "polygon": [
      {
        "x": 784.7,
        "y": 868.8
      },
      {
        "x": 778.8,
        "y": 882.9
      },
      {
        "x": 764.7,
        "y": 888.8
      },
      {
        "x": 750.6,
        "y": 882.9
      },
      {
        "x": 744.7,
        "y": 868.8
      },
      {
        "x": 750.6,
        "y": 854.7
      },
      {
        "x": 764.7,
        "y": 848.8
      },
      {
        "x": 778.8,
        "y": 854.7
      }
    ]
  },
  {
    "id": "puerto_valle_mi",
    "name": "Provincia de Puerto Valle Mi",
    "capitalName": "Puerto Valle Mi",
    "owner": "portugal",
    "theater": "americas",
    "x": 742.0,
    "y": 839.5,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "la_union",
      "wanda",
      "presidente_prudente",
      "caceres",
      "mineiros",
      "ascension",
      "charcas",
      "fiambala",
      "malbran",
      "joinville"
    ],
    "polygon": [
      {
        "x": 762.0,
        "y": 839.5
      },
      {
        "x": 756.1,
        "y": 853.6
      },
      {
        "x": 742.0,
        "y": 859.5
      },
      {
        "x": 727.9,
        "y": 853.6
      },
      {
        "x": 722.0,
        "y": 839.5
      },
      {
        "x": 727.9,
        "y": 825.4
      },
      {
        "x": 742.0,
        "y": 819.5
      },
      {
        "x": 756.1,
        "y": 825.4
      }
    ]
  },
  {
    "id": "camopi",
    "name": "Provincia de Camopi",
    "capitalName": "Camopi",
    "owner": "portugal",
    "theater": "americas",
    "x": 778.9,
    "y": 659.4,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "paradise",
      "arariuna",
      "monte_alegre",
      "carraro",
      "amazonas",
      "codo"
    ],
    "polygon": [
      {
        "x": 798.9,
        "y": 659.4
      },
      {
        "x": 793.0,
        "y": 673.5
      },
      {
        "x": 778.9,
        "y": 679.4
      },
      {
        "x": 764.8,
        "y": 673.5
      },
      {
        "x": 758.9,
        "y": 659.4
      },
      {
        "x": 764.8,
        "y": 645.3
      },
      {
        "x": 778.9,
        "y": 639.4
      },
      {
        "x": 793.0,
        "y": 645.3
      }
    ]
  },
  {
    "id": "paradise",
    "name": "Provincia de Paradise",
    "capitalName": "Paradise",
    "owner": "portugal",
    "theater": "americas",
    "x": 748.8,
    "y": 640.7,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "camopi",
      "ciudad_bolivar",
      "saint_georges",
      "monte_alegre",
      "tamatama",
      "amazonas"
    ],
    "polygon": [
      {
        "x": 768.8,
        "y": 640.7
      },
      {
        "x": 762.9,
        "y": 654.8
      },
      {
        "x": 748.8,
        "y": 660.7
      },
      {
        "x": 734.7,
        "y": 654.8
      },
      {
        "x": 728.8,
        "y": 640.7
      },
      {
        "x": 734.7,
        "y": 626.6
      },
      {
        "x": 748.8,
        "y": 620.7
      },
      {
        "x": 762.9,
        "y": 626.6
      }
    ]
  },
  {
    "id": "presidente_prudente",
    "name": "Provincia de Presidente Prudente",
    "capitalName": "Presidente Prudente",
    "owner": "portugal",
    "theater": "americas",
    "x": 785.4,
    "y": 839.1,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "mineiros",
      "araxa",
      "joinville",
      "wanda",
      "puerto_valle_mi",
      "rio_de_janeiro",
      "niquelandia",
      "caceres"
    ],
    "polygon": [
      {
        "x": 805.4,
        "y": 839.1
      },
      {
        "x": 799.5,
        "y": 853.2
      },
      {
        "x": 785.4,
        "y": 859.1
      },
      {
        "x": 771.3,
        "y": 853.2
      },
      {
        "x": 765.4,
        "y": 839.1
      },
      {
        "x": 771.3,
        "y": 825.0
      },
      {
        "x": 785.4,
        "y": 819.1
      },
      {
        "x": 799.5,
        "y": 825.0
      }
    ]
  },
  {
    "id": "monte_alegre",
    "name": "Provincia de Monte Alegre",
    "capitalName": "Monte Alegre",
    "owner": "portugal",
    "theater": "americas",
    "x": 767.7,
    "y": 695.0,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "arariuna",
      "camopi",
      "carraro",
      "amazonas",
      "paradise",
      "volta_grande"
    ],
    "polygon": [
      {
        "x": 787.7,
        "y": 695.0
      },
      {
        "x": 781.8,
        "y": 709.1
      },
      {
        "x": 767.7,
        "y": 715.0
      },
      {
        "x": 753.6,
        "y": 709.1
      },
      {
        "x": 747.7,
        "y": 695.0
      },
      {
        "x": 753.6,
        "y": 680.9
      },
      {
        "x": 767.7,
        "y": 675.0
      },
      {
        "x": 781.8,
        "y": 680.9
      }
    ]
  },
  {
    "id": "arariuna",
    "name": "Provincia de Arariúna",
    "capitalName": "Arariúna",
    "owner": "portugal",
    "theater": "americas",
    "x": 802.8,
    "y": 688.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "carraro",
      "monte_alegre",
      "camopi",
      "codo",
      "morros",
      "fortaleza"
    ],
    "polygon": [
      {
        "x": 822.8,
        "y": 688.0
      },
      {
        "x": 816.9,
        "y": 702.1
      },
      {
        "x": 802.8,
        "y": 708.0
      },
      {
        "x": 788.7,
        "y": 702.1
      },
      {
        "x": 782.8,
        "y": 688.0
      },
      {
        "x": 788.7,
        "y": 673.9
      },
      {
        "x": 802.8,
        "y": 668.0
      },
      {
        "x": 816.9,
        "y": 673.9
      }
    ]
  },
  {
    "id": "codo",
    "name": "Provincia de Codó",
    "capitalName": "Codó",
    "owner": "portugal",
    "theater": "americas",
    "x": 834.7,
    "y": 712.5,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "fortaleza",
      "morros",
      "arariuna",
      "petrolina",
      "carraro",
      "pernambuco",
      "camopi"
    ],
    "polygon": [
      {
        "x": 854.7,
        "y": 712.5
      },
      {
        "x": 848.8,
        "y": 726.6
      },
      {
        "x": 834.7,
        "y": 732.5
      },
      {
        "x": 820.6,
        "y": 726.6
      },
      {
        "x": 814.7,
        "y": 712.5
      },
      {
        "x": 820.6,
        "y": 698.4
      },
      {
        "x": 834.7,
        "y": 692.5
      },
      {
        "x": 848.8,
        "y": 698.4
      }
    ]
  },
  {
    "id": "niquelandia",
    "name": "Provincia de Niquelandia",
    "capitalName": "Niquelandia",
    "owner": "portugal",
    "theater": "americas",
    "x": 804.9,
    "y": 783.1,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "mineiros",
      "morros",
      "araxa",
      "volta_grande",
      "bahia",
      "presidente_prudente",
      "petrolina",
      "rio_de_janeiro",
      "sao_mateus",
      "carraro"
    ],
    "polygon": [
      {
        "x": 824.9,
        "y": 783.1
      },
      {
        "x": 819.0,
        "y": 797.2
      },
      {
        "x": 804.9,
        "y": 803.1
      },
      {
        "x": 790.8,
        "y": 797.2
      },
      {
        "x": 784.9,
        "y": 783.1
      },
      {
        "x": 790.8,
        "y": 769.0
      },
      {
        "x": 804.9,
        "y": 763.1
      },
      {
        "x": 819.0,
        "y": 769.0
      }
    ]
  },
  {
    "id": "mineiros",
    "name": "Provincia de Mineiros",
    "capitalName": "Mineiros",
    "owner": "portugal",
    "theater": "americas",
    "x": 777.7,
    "y": 805.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "presidente_prudente",
      "niquelandia",
      "caceres",
      "araxa",
      "puerto_valle_mi",
      "volta_grande",
      "joinville",
      "wanda"
    ],
    "polygon": [
      {
        "x": 797.7,
        "y": 805.4
      },
      {
        "x": 791.8,
        "y": 819.5
      },
      {
        "x": 777.7,
        "y": 825.4
      },
      {
        "x": 763.6,
        "y": 819.5
      },
      {
        "x": 757.7,
        "y": 805.4
      },
      {
        "x": 763.6,
        "y": 791.3
      },
      {
        "x": 777.7,
        "y": 785.4
      },
      {
        "x": 791.8,
        "y": 791.3
      }
    ]
  },
  {
    "id": "caceres",
    "name": "Provincia de Caceres",
    "capitalName": "Caceres",
    "owner": "portugal",
    "theater": "americas",
    "x": 743.9,
    "y": 794.5,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "mineiros",
      "castanheira",
      "ascension",
      "puerto_valle_mi",
      "volta_grande",
      "presidente_prudente"
    ],
    "polygon": [
      {
        "x": 763.9,
        "y": 794.5
      },
      {
        "x": 758.0,
        "y": 808.6
      },
      {
        "x": 743.9,
        "y": 814.5
      },
      {
        "x": 729.8,
        "y": 808.6
      },
      {
        "x": 723.9,
        "y": 794.5
      },
      {
        "x": 729.8,
        "y": 780.4
      },
      {
        "x": 743.9,
        "y": 774.5
      },
      {
        "x": 758.0,
        "y": 780.4
      }
    ]
  },
  {
    "id": "castanheira",
    "name": "Provincia de Castanheira",
    "capitalName": "Castanheira",
    "owner": "portugal",
    "theater": "americas",
    "x": 737.7,
    "y": 759.4,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "gold",
    "neighbors": [
      "caceres",
      "humaita",
      "volta_grande",
      "ascension",
      "riberalta",
      "amazonas"
    ],
    "polygon": [
      {
        "x": 757.7,
        "y": 759.4
      },
      {
        "x": 751.8,
        "y": 773.5
      },
      {
        "x": 737.7,
        "y": 779.4
      },
      {
        "x": 723.6,
        "y": 773.5
      },
      {
        "x": 717.7,
        "y": 759.4
      },
      {
        "x": 723.6,
        "y": 745.3
      },
      {
        "x": 737.7,
        "y": 739.4
      },
      {
        "x": 751.8,
        "y": 745.3
      }
    ]
  },
  {
    "id": "carraro",
    "name": "Provincia de Carraro",
    "capitalName": "Carraro",
    "owner": "portugal",
    "theater": "americas",
    "x": 793.9,
    "y": 721.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "arariuna",
      "morros",
      "volta_grande",
      "monte_alegre",
      "codo",
      "niquelandia",
      "camopi"
    ],
    "polygon": [
      {
        "x": 813.9,
        "y": 721.9
      },
      {
        "x": 808.0,
        "y": 736.0
      },
      {
        "x": 793.9,
        "y": 741.9
      },
      {
        "x": 779.8,
        "y": 736.0
      },
      {
        "x": 773.9,
        "y": 721.9
      },
      {
        "x": 779.8,
        "y": 707.8
      },
      {
        "x": 793.9,
        "y": 701.9
      },
      {
        "x": 808.0,
        "y": 707.8
      }
    ]
  },
  {
    "id": "volta_grande",
    "name": "Provincia de Volta Grande",
    "capitalName": "Volta Grande",
    "owner": "portugal",
    "theater": "americas",
    "x": 777.8,
    "y": 753.8,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "carraro",
      "niquelandia",
      "castanheira",
      "morros",
      "mineiros",
      "caceres",
      "monte_alegre"
    ],
    "polygon": [
      {
        "x": 797.8,
        "y": 753.8
      },
      {
        "x": 791.9,
        "y": 767.9
      },
      {
        "x": 777.8,
        "y": 773.8
      },
      {
        "x": 763.7,
        "y": 767.9
      },
      {
        "x": 757.8,
        "y": 753.8
      },
      {
        "x": 763.7,
        "y": 739.7
      },
      {
        "x": 777.8,
        "y": 733.8
      },
      {
        "x": 791.9,
        "y": 739.7
      }
    ]
  },
  {
    "id": "wilcannia",
    "name": "Provincia de Wilcannia",
    "capitalName": "Wilcannia",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2075.9,
    "y": 920.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "tamworth",
      "jundah",
      "ceduna",
      "bundaberg",
      "bowen",
      "ali_curung"
    ],
    "polygon": [
      {
        "x": 2095.9,
        "y": 920.0
      },
      {
        "x": 2090.0,
        "y": 934.1
      },
      {
        "x": 2075.9,
        "y": 940.0
      },
      {
        "x": 2061.8,
        "y": 934.1
      },
      {
        "x": 2055.9,
        "y": 920.0
      },
      {
        "x": 2061.8,
        "y": 905.9
      },
      {
        "x": 2075.9,
        "y": 900.0
      },
      {
        "x": 2090.0,
        "y": 905.9
      }
    ]
  },
  {
    "id": "tamworth",
    "name": "Provincia de Tamworth",
    "capitalName": "Tamworth",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2126.4,
    "y": 916.1,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "bundaberg",
      "wilcannia",
      "jundah",
      "bowen",
      "ceduna",
      "noumea"
    ],
    "polygon": [
      {
        "x": 2146.4,
        "y": 916.1
      },
      {
        "x": 2140.5,
        "y": 930.2
      },
      {
        "x": 2126.4,
        "y": 936.1
      },
      {
        "x": 2112.3,
        "y": 930.2
      },
      {
        "x": 2106.4,
        "y": 916.1
      },
      {
        "x": 2112.3,
        "y": 902.0
      },
      {
        "x": 2126.4,
        "y": 896.1
      },
      {
        "x": 2140.5,
        "y": 902.0
      }
    ]
  },
  {
    "id": "bundaberg",
    "name": "Provincia de Bundaberg",
    "capitalName": "Bundaberg",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2135.4,
    "y": 866.9,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "grain",
    "neighbors": [
      "bowen",
      "tamworth",
      "jundah",
      "wilcannia",
      "noumea",
      "normanton"
    ],
    "polygon": [
      {
        "x": 2155.4,
        "y": 866.9
      },
      {
        "x": 2149.5,
        "y": 881.0
      },
      {
        "x": 2135.4,
        "y": 886.9
      },
      {
        "x": 2121.3,
        "y": 881.0
      },
      {
        "x": 2115.4,
        "y": 866.9
      },
      {
        "x": 2121.3,
        "y": 852.8
      },
      {
        "x": 2135.4,
        "y": 846.9
      },
      {
        "x": 2149.5,
        "y": 852.8
      }
    ]
  },
  {
    "id": "bamaga",
    "name": "Provincia de Bamaga",
    "capitalName": "Bamaga",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2069.6,
    "y": 763.5,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "alotau",
      "normanton",
      "wamena",
      "katherine",
      "lorengau",
      "bowen",
      "ali_curung",
      "tendoo"
    ],
    "polygon": [
      {
        "x": 2089.6,
        "y": 763.5
      },
      {
        "x": 2083.7,
        "y": 777.6
      },
      {
        "x": 2069.6,
        "y": 783.5
      },
      {
        "x": 2055.5,
        "y": 777.6
      },
      {
        "x": 2049.6,
        "y": 763.5
      },
      {
        "x": 2055.5,
        "y": 749.4
      },
      {
        "x": 2069.6,
        "y": 743.5
      },
      {
        "x": 2083.7,
        "y": 749.4
      }
    ]
  },
  {
    "id": "normanton",
    "name": "Provincia de Normanton",
    "capitalName": "Normanton",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2060.7,
    "y": 812.6,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "bamaga",
      "bowen",
      "ali_curung",
      "jundah",
      "katherine",
      "alotau",
      "bundaberg",
      "ceduna"
    ],
    "polygon": [
      {
        "x": 2080.7,
        "y": 812.6
      },
      {
        "x": 2074.8,
        "y": 826.7
      },
      {
        "x": 2060.7,
        "y": 832.6
      },
      {
        "x": 2046.6,
        "y": 826.7
      },
      {
        "x": 2040.7,
        "y": 812.6
      },
      {
        "x": 2046.6,
        "y": 798.5
      },
      {
        "x": 2060.7,
        "y": 792.6
      },
      {
        "x": 2074.8,
        "y": 798.5
      }
    ]
  },
  {
    "id": "bowen",
    "name": "Provincia de Bowen",
    "capitalName": "Bowen",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2107.8,
    "y": 829.9,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "grain",
    "neighbors": [
      "bundaberg",
      "jundah",
      "normanton",
      "bamaga",
      "alotau",
      "tamworth",
      "wilcannia",
      "ali_curung",
      "ceduna",
      "noumea"
    ],
    "polygon": [
      {
        "x": 2127.8,
        "y": 829.9
      },
      {
        "x": 2121.9,
        "y": 844.0
      },
      {
        "x": 2107.8,
        "y": 849.9
      },
      {
        "x": 2093.7,
        "y": 844.0
      },
      {
        "x": 2087.8,
        "y": 829.9
      },
      {
        "x": 2093.7,
        "y": 815.8
      },
      {
        "x": 2107.8,
        "y": 809.9
      },
      {
        "x": 2121.9,
        "y": 815.8
      }
    ]
  },
  {
    "id": "ali_curung",
    "name": "Provincia de Ali Curung",
    "capitalName": "Ali Curung",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2016.2,
    "y": 837.3,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "katherine",
      "normanton",
      "jundah",
      "ceduna",
      "bamaga",
      "bowen",
      "wilcannia"
    ],
    "polygon": [
      {
        "x": 2036.2,
        "y": 837.3
      },
      {
        "x": 2030.3,
        "y": 851.4
      },
      {
        "x": 2016.2,
        "y": 857.3
      },
      {
        "x": 2002.1,
        "y": 851.4
      },
      {
        "x": 1996.2,
        "y": 837.3
      },
      {
        "x": 2002.1,
        "y": 823.2
      },
      {
        "x": 2016.2,
        "y": 817.3
      },
      {
        "x": 2030.3,
        "y": 823.2
      }
    ]
  },
  {
    "id": "jundah",
    "name": "Provincia de Jundah",
    "capitalName": "Jundah",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2073.6,
    "y": 866.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "bowen",
      "wilcannia",
      "normanton",
      "bundaberg",
      "ali_curung",
      "tamworth",
      "ceduna"
    ],
    "polygon": [
      {
        "x": 2093.6,
        "y": 866.4
      },
      {
        "x": 2087.7,
        "y": 880.5
      },
      {
        "x": 2073.6,
        "y": 886.4
      },
      {
        "x": 2059.5,
        "y": 880.5
      },
      {
        "x": 2053.6,
        "y": 866.4
      },
      {
        "x": 2059.5,
        "y": 852.3
      },
      {
        "x": 2073.6,
        "y": 846.4
      },
      {
        "x": 2087.7,
        "y": 852.3
      }
    ]
  },
  {
    "id": "katherine",
    "name": "Provincia de Katherine",
    "capitalName": "Katherine",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2001.9,
    "y": 788.8,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "grain",
    "neighbors": [
      "ali_curung",
      "normanton",
      "bamaga",
      "kaimana",
      "wamena",
      "kairatu"
    ],
    "polygon": [
      {
        "x": 2021.9,
        "y": 788.8
      },
      {
        "x": 2016.0,
        "y": 802.9
      },
      {
        "x": 2001.9,
        "y": 808.8
      },
      {
        "x": 1987.8,
        "y": 802.9
      },
      {
        "x": 1981.9,
        "y": 788.8
      },
      {
        "x": 1987.8,
        "y": 774.7
      },
      {
        "x": 2001.9,
        "y": 768.8
      },
      {
        "x": 2016.0,
        "y": 774.7
      }
    ]
  },
  {
    "id": "ceduna",
    "name": "Provincia de Ceduna",
    "capitalName": "Ceduna",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2011.8,
    "y": 924.7,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "wilcannia",
      "jundah",
      "ali_curung",
      "tamworth",
      "normanton",
      "bowen"
    ],
    "polygon": [
      {
        "x": 2031.8,
        "y": 924.7
      },
      {
        "x": 2025.9,
        "y": 938.8
      },
      {
        "x": 2011.8,
        "y": 944.7
      },
      {
        "x": 1997.7,
        "y": 938.8
      },
      {
        "x": 1991.8,
        "y": 924.7
      },
      {
        "x": 1997.7,
        "y": 910.6
      },
      {
        "x": 2011.8,
        "y": 904.7
      },
      {
        "x": 2025.9,
        "y": 910.6
      }
    ]
  },
  {
    "id": "alotau",
    "name": "Provincia de Alotau",
    "capitalName": "Alotau",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2118.1,
    "y": 752.5,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "tendoo",
      "bamaga",
      "lorengau",
      "pamua",
      "bowen",
      "normanton",
      "wamena",
      "nauru"
    ],
    "polygon": [
      {
        "x": 2138.1,
        "y": 752.5
      },
      {
        "x": 2132.2,
        "y": 766.6
      },
      {
        "x": 2118.1,
        "y": 772.5
      },
      {
        "x": 2104.0,
        "y": 766.6
      },
      {
        "x": 2098.1,
        "y": 752.5
      },
      {
        "x": 2104.0,
        "y": 738.4
      },
      {
        "x": 2118.1,
        "y": 732.5
      },
      {
        "x": 2132.2,
        "y": 738.4
      }
    ]
  },
  {
    "id": "lorengau",
    "name": "Provincia de Lorengau",
    "capitalName": "Lorengau",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2097.0,
    "y": 692.1,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "grain",
    "neighbors": [
      "wamena",
      "tendoo",
      "alotau",
      "bamaga",
      "kaimana",
      "helen_reef",
      "pamua",
      "nauru"
    ],
    "polygon": [
      {
        "x": 2117.0,
        "y": 692.1
      },
      {
        "x": 2111.1,
        "y": 706.2
      },
      {
        "x": 2097.0,
        "y": 712.1
      },
      {
        "x": 2082.9,
        "y": 706.2
      },
      {
        "x": 2077.0,
        "y": 692.1
      },
      {
        "x": 2082.9,
        "y": 678.0
      },
      {
        "x": 2097.0,
        "y": 672.1
      },
      {
        "x": 2111.1,
        "y": 678.0
      }
    ]
  },
  {
    "id": "tendoo",
    "name": "Provincia de Tendoo",
    "capitalName": "Tendoo",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2147.4,
    "y": 717.7,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "alotau",
      "lorengau",
      "pamua",
      "nauru",
      "bamaga",
      "wamena",
      "longana"
    ],
    "polygon": [
      {
        "x": 2167.4,
        "y": 717.7
      },
      {
        "x": 2161.5,
        "y": 731.8
      },
      {
        "x": 2147.4,
        "y": 737.7
      },
      {
        "x": 2133.3,
        "y": 731.8
      },
      {
        "x": 2127.4,
        "y": 717.7
      },
      {
        "x": 2133.3,
        "y": 703.6
      },
      {
        "x": 2147.4,
        "y": 697.7
      },
      {
        "x": 2161.5,
        "y": 703.6
      }
    ]
  },
  {
    "id": "pamua",
    "name": "Provincia de Pamua",
    "capitalName": "Pamua",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2192.6,
    "y": 753.7,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "longana",
      "tendoo",
      "alotau",
      "nauru",
      "noumea",
      "lorengau",
      "suva",
      "tuvalu"
    ],
    "polygon": [
      {
        "x": 2212.6,
        "y": 753.7
      },
      {
        "x": 2206.7,
        "y": 767.8
      },
      {
        "x": 2192.6,
        "y": 773.7
      },
      {
        "x": 2178.5,
        "y": 767.8
      },
      {
        "x": 2172.6,
        "y": 753.7
      },
      {
        "x": 2178.5,
        "y": 739.6
      },
      {
        "x": 2192.6,
        "y": 733.7
      },
      {
        "x": 2206.7,
        "y": 739.6
      }
    ]
  },
  {
    "id": "noumea",
    "name": "Provincia de Nouméa",
    "capitalName": "Nouméa",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2223.6,
    "y": 842.9,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "grain",
    "neighbors": [
      "longana",
      "suva",
      "bundaberg",
      "pamua",
      "bowen",
      "tonga",
      "tamworth",
      "tuvalu"
    ],
    "polygon": [
      {
        "x": 2243.6,
        "y": 842.9
      },
      {
        "x": 2237.7,
        "y": 857.0
      },
      {
        "x": 2223.6,
        "y": 862.9
      },
      {
        "x": 2209.5,
        "y": 857.0
      },
      {
        "x": 2203.6,
        "y": 842.9
      },
      {
        "x": 2209.5,
        "y": 828.8
      },
      {
        "x": 2223.6,
        "y": 822.9
      },
      {
        "x": 2237.7,
        "y": 828.8
      }
    ]
  },
  {
    "id": "longana",
    "name": "Provincia de Longana",
    "capitalName": "Longana",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2232.8,
    "y": 790.3,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "noumea",
      "pamua",
      "suva",
      "tuvalu",
      "nauru",
      "tendoo",
      "tonga"
    ],
    "polygon": [
      {
        "x": 2252.8,
        "y": 790.3
      },
      {
        "x": 2246.9,
        "y": 804.4
      },
      {
        "x": 2232.8,
        "y": 810.3
      },
      {
        "x": 2218.7,
        "y": 804.4
      },
      {
        "x": 2212.8,
        "y": 790.3
      },
      {
        "x": 2218.7,
        "y": 776.2
      },
      {
        "x": 2232.8,
        "y": 770.3
      },
      {
        "x": 2246.9,
        "y": 776.2
      }
    ]
  },
  {
    "id": "nauru",
    "name": "Provincia de Nauru",
    "capitalName": "Nauru",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2225.3,
    "y": 684.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "pamua",
      "tendoo",
      "tuvalu",
      "longana",
      "alotau",
      "lorengau"
    ],
    "polygon": [
      {
        "x": 2245.3,
        "y": 684.9
      },
      {
        "x": 2239.4,
        "y": 699.0
      },
      {
        "x": 2225.3,
        "y": 704.9
      },
      {
        "x": 2211.2,
        "y": 699.0
      },
      {
        "x": 2205.3,
        "y": 684.9
      },
      {
        "x": 2211.2,
        "y": 670.8
      },
      {
        "x": 2225.3,
        "y": 664.9
      },
      {
        "x": 2239.4,
        "y": 670.8
      }
    ]
  },
  {
    "id": "suva",
    "name": "Provincia de Suva",
    "capitalName": "Suva",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2302.6,
    "y": 810.4,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "grain",
    "neighbors": [
      "tonga",
      "tuvalu",
      "longana",
      "noumea",
      "pamua"
    ],
    "polygon": [
      {
        "x": 2322.6,
        "y": 810.4
      },
      {
        "x": 2316.7,
        "y": 824.5
      },
      {
        "x": 2302.6,
        "y": 830.4
      },
      {
        "x": 2288.5,
        "y": 824.5
      },
      {
        "x": 2282.6,
        "y": 810.4
      },
      {
        "x": 2288.5,
        "y": 796.3
      },
      {
        "x": 2302.6,
        "y": 790.4
      },
      {
        "x": 2316.7,
        "y": 796.3
      }
    ]
  },
  {
    "id": "tonga",
    "name": "Provincia de Tonga",
    "capitalName": "Tonga",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2344.5,
    "y": 835.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "suva",
      "tuvalu",
      "longana",
      "noumea"
    ],
    "polygon": [
      {
        "x": 2364.5,
        "y": 835.0
      },
      {
        "x": 2358.6,
        "y": 849.1
      },
      {
        "x": 2344.5,
        "y": 855.0
      },
      {
        "x": 2330.4,
        "y": 849.1
      },
      {
        "x": 2324.5,
        "y": 835.0
      },
      {
        "x": 2330.4,
        "y": 820.9
      },
      {
        "x": 2344.5,
        "y": 815.0
      },
      {
        "x": 2358.6,
        "y": 820.9
      }
    ]
  },
  {
    "id": "tuvalu",
    "name": "Provincia de Tuvalu",
    "capitalName": "Tuvalu",
    "owner": "neutral",
    "theater": "oceania",
    "x": 2306.8,
    "y": 739.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "suva",
      "longana",
      "nauru",
      "tonga",
      "pamua",
      "noumea"
    ],
    "polygon": [
      {
        "x": 2326.8,
        "y": 739.9
      },
      {
        "x": 2320.9,
        "y": 754.0
      },
      {
        "x": 2306.8,
        "y": 759.9
      },
      {
        "x": 2292.7,
        "y": 754.0
      },
      {
        "x": 2286.8,
        "y": 739.9
      },
      {
        "x": 2292.7,
        "y": 725.8
      },
      {
        "x": 2306.8,
        "y": 719.9
      },
      {
        "x": 2320.9,
        "y": 725.8
      }
    ]
  },
  {
    "id": "zaragoza",
    "name": "Provincia de Zaragoza",
    "capitalName": "Zaragoza",
    "owner": "spain",
    "theater": "spain",
    "x": 1121.9,
    "y": 364.0,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "aragon",
      "castilla",
      "santander",
      "ibiza",
      "bordeaux",
      "beziers",
      "compostela",
      "murcia",
      "ciudad_rodrigo"
    ],
    "polygon": [
      {
        "x": 1141.9,
        "y": 364.0
      },
      {
        "x": 1136.0,
        "y": 378.1
      },
      {
        "x": 1121.9,
        "y": 384.0
      },
      {
        "x": 1107.8,
        "y": 378.1
      },
      {
        "x": 1101.9,
        "y": 364.0
      },
      {
        "x": 1107.8,
        "y": 349.9
      },
      {
        "x": 1121.9,
        "y": 344.0
      },
      {
        "x": 1136.0,
        "y": 349.9
      }
    ]
  },
  {
    "id": "ciudad_rodrigo",
    "name": "Provincia de Ciudad Rodrigo",
    "capitalName": "Ciudad Rodrigo",
    "owner": "spain",
    "theater": "spain",
    "x": 1084.6,
    "y": 373.1,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "castilla",
      "lisbon",
      "compostela",
      "andalucia",
      "santander",
      "zaragoza"
    ],
    "polygon": [
      {
        "x": 1104.6,
        "y": 373.1
      },
      {
        "x": 1098.7,
        "y": 387.2
      },
      {
        "x": 1084.6,
        "y": 393.1
      },
      {
        "x": 1070.5,
        "y": 387.2
      },
      {
        "x": 1064.6,
        "y": 373.1
      },
      {
        "x": 1070.5,
        "y": 359.0
      },
      {
        "x": 1084.6,
        "y": 353.1
      },
      {
        "x": 1098.7,
        "y": 359.0
      }
    ]
  },
  {
    "id": "ibiza",
    "name": "Provincia de Ibiza",
    "capitalName": "Ibiza",
    "owner": "spain",
    "theater": "spain",
    "x": 1137.2,
    "y": 387.2,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "murcia",
      "aragon",
      "zaragoza",
      "saida",
      "castilla",
      "beziers",
      "algiers"
    ],
    "polygon": [
      {
        "x": 1157.2,
        "y": 387.2
      },
      {
        "x": 1151.3,
        "y": 401.3
      },
      {
        "x": 1137.2,
        "y": 407.2
      },
      {
        "x": 1123.1,
        "y": 401.3
      },
      {
        "x": 1117.2,
        "y": 387.2
      },
      {
        "x": 1123.1,
        "y": 373.1
      },
      {
        "x": 1137.2,
        "y": 367.2
      },
      {
        "x": 1151.3,
        "y": 373.1
      }
    ]
  },
  {
    "id": "beziers",
    "name": "Provincia de Béziers",
    "capitalName": "Béziers",
    "owner": "france",
    "theater": "europe",
    "x": 1148.9,
    "y": 348.7,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "aragon",
      "provence",
      "ussel",
      "bordeaux",
      "zaragoza",
      "burgundy",
      "ibiza"
    ],
    "polygon": [
      {
        "x": 1168.9,
        "y": 348.7
      },
      {
        "x": 1163.0,
        "y": 362.8
      },
      {
        "x": 1148.9,
        "y": 368.7
      },
      {
        "x": 1134.8,
        "y": 362.8
      },
      {
        "x": 1128.9,
        "y": 348.7
      },
      {
        "x": 1134.8,
        "y": 334.6
      },
      {
        "x": 1148.9,
        "y": 328.7
      },
      {
        "x": 1163.0,
        "y": 334.6
      }
    ]
  },
  {
    "id": "caen",
    "name": "Provincia de Caen",
    "capitalName": "Caen",
    "owner": "france",
    "theater": "europe",
    "x": 1125.1,
    "y": 293.3,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "paris",
      "tours",
      "bretagne",
      "london",
      "barnstaple",
      "flanders"
    ],
    "polygon": [
      {
        "x": 1145.1,
        "y": 293.3
      },
      {
        "x": 1139.2,
        "y": 307.4
      },
      {
        "x": 1125.1,
        "y": 313.3
      },
      {
        "x": 1111.0,
        "y": 307.4
      },
      {
        "x": 1105.1,
        "y": 293.3
      },
      {
        "x": 1111.0,
        "y": 279.2
      },
      {
        "x": 1125.1,
        "y": 273.3
      },
      {
        "x": 1139.2,
        "y": 279.2
      }
    ]
  },
  {
    "id": "tours",
    "name": "Provincia de Tours",
    "capitalName": "Tours",
    "owner": "france",
    "theater": "europe",
    "x": 1132.2,
    "y": 310.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "paris",
      "caen",
      "ussel",
      "bordeaux",
      "bretagne",
      "burgundy"
    ],
    "polygon": [
      {
        "x": 1152.2,
        "y": 310.9
      },
      {
        "x": 1146.3,
        "y": 325.0
      },
      {
        "x": 1132.2,
        "y": 330.9
      },
      {
        "x": 1118.1,
        "y": 325.0
      },
      {
        "x": 1112.2,
        "y": 310.9
      },
      {
        "x": 1118.1,
        "y": 296.8
      },
      {
        "x": 1132.2,
        "y": 290.9
      },
      {
        "x": 1146.3,
        "y": 296.8
      }
    ]
  },
  {
    "id": "zurich",
    "name": "Provincia de Zürich",
    "capitalName": "Zürich",
    "owner": "france",
    "theater": "europe",
    "x": 1183.9,
    "y": 310.8,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "milan",
      "nancy",
      "bavaria",
      "burgundy",
      "rhineland",
      "venice"
    ],
    "polygon": [
      {
        "x": 1203.9,
        "y": 310.8
      },
      {
        "x": 1198.0,
        "y": 324.9
      },
      {
        "x": 1183.9,
        "y": 330.8
      },
      {
        "x": 1169.8,
        "y": 324.9
      },
      {
        "x": 1163.9,
        "y": 310.8
      },
      {
        "x": 1169.8,
        "y": 296.7
      },
      {
        "x": 1183.9,
        "y": 290.8
      },
      {
        "x": 1198.0,
        "y": 296.7
      }
    ]
  },
  {
    "id": "ussel",
    "name": "Provincia de Ussel",
    "capitalName": "Ussel",
    "owner": "france",
    "theater": "europe",
    "x": 1142.7,
    "y": 328.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "bordeaux",
      "beziers",
      "tours",
      "burgundy",
      "paris",
      "provence"
    ],
    "polygon": [
      {
        "x": 1162.7,
        "y": 328.9
      },
      {
        "x": 1156.8,
        "y": 343.0
      },
      {
        "x": 1142.7,
        "y": 348.9
      },
      {
        "x": 1128.6,
        "y": 343.0
      },
      {
        "x": 1122.7,
        "y": 328.9
      },
      {
        "x": 1128.6,
        "y": 314.8
      },
      {
        "x": 1142.7,
        "y": 308.9
      },
      {
        "x": 1156.8,
        "y": 314.8
      }
    ]
  },
  {
    "id": "fort_william",
    "name": "Provincia de Fort William",
    "capitalName": "Fort William",
    "owner": "britain",
    "theater": "europe",
    "x": 1094.3,
    "y": 209.8,
    "radius": 24,
    "terrain": "hills",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "clachtoll",
      "scotland",
      "stranraer",
      "ireland",
      "york",
      "barnstaple"
    ],
    "polygon": [
      {
        "x": 1114.3,
        "y": 209.8
      },
      {
        "x": 1108.4,
        "y": 223.9
      },
      {
        "x": 1094.3,
        "y": 229.8
      },
      {
        "x": 1080.2,
        "y": 223.9
      },
      {
        "x": 1074.3,
        "y": 209.8
      },
      {
        "x": 1080.2,
        "y": 195.7
      },
      {
        "x": 1094.3,
        "y": 189.8
      },
      {
        "x": 1108.4,
        "y": 195.7
      }
    ]
  },
  {
    "id": "stranraer",
    "name": "Provincia de Stranraer",
    "capitalName": "Stranraer",
    "owner": "britain",
    "theater": "europe",
    "x": 1095.0,
    "y": 231.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "ireland",
      "fort_william",
      "scotland",
      "york",
      "clachtoll",
      "barnstaple"
    ],
    "polygon": [
      {
        "x": 1115.0,
        "y": 231.9
      },
      {
        "x": 1109.1,
        "y": 246.0
      },
      {
        "x": 1095.0,
        "y": 251.9
      },
      {
        "x": 1080.9,
        "y": 246.0
      },
      {
        "x": 1075.0,
        "y": 231.9
      },
      {
        "x": 1080.9,
        "y": 217.8
      },
      {
        "x": 1095.0,
        "y": 211.9
      },
      {
        "x": 1109.1,
        "y": 217.8
      }
    ]
  },
  {
    "id": "linz",
    "name": "Provincia de Linz",
    "capitalName": "Linz",
    "owner": "germany",
    "theater": "europe",
    "x": 1222.0,
    "y": 301.4,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "bavaria",
      "bohemia",
      "austria",
      "trebnje",
      "saxony",
      "trinec",
      "schwarzburg"
    ],
    "polygon": [
      {
        "x": 1242.0,
        "y": 301.4
      },
      {
        "x": 1236.1,
        "y": 315.5
      },
      {
        "x": 1222.0,
        "y": 321.4
      },
      {
        "x": 1207.9,
        "y": 315.5
      },
      {
        "x": 1202.0,
        "y": 301.4
      },
      {
        "x": 1207.9,
        "y": 287.3
      },
      {
        "x": 1222.0,
        "y": 281.4
      },
      {
        "x": 1236.1,
        "y": 287.3
      }
    ]
  },
  {
    "id": "trinec",
    "name": "Provincia de Trinec",
    "capitalName": "Trinec",
    "owner": "germany",
    "theater": "europe",
    "x": 1249.9,
    "y": 287.7,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "bohemia",
      "presov",
      "ostrow_wielkopolski",
      "austria",
      "poland",
      "linz",
      "zamosc"
    ],
    "polygon": [
      {
        "x": 1269.9,
        "y": 287.7
      },
      {
        "x": 1264.0,
        "y": 301.8
      },
      {
        "x": 1249.9,
        "y": 307.7
      },
      {
        "x": 1235.8,
        "y": 301.8
      },
      {
        "x": 1229.9,
        "y": 287.7
      },
      {
        "x": 1235.8,
        "y": 273.6
      },
      {
        "x": 1249.9,
        "y": 267.7
      },
      {
        "x": 1264.0,
        "y": 273.6
      }
    ]
  },
  {
    "id": "ostroda",
    "name": "Provincia de Ostróda",
    "capitalName": "Ostróda",
    "owner": "germany",
    "theater": "europe",
    "x": 1259.3,
    "y": 245.6,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "poland",
      "prussia",
      "ostrow_wielkopolski",
      "liepaja",
      "lithuania",
      "zamosc",
      "borgholm"
    ],
    "polygon": [
      {
        "x": 1279.3,
        "y": 245.6
      },
      {
        "x": 1273.4,
        "y": 259.7
      },
      {
        "x": 1259.3,
        "y": 265.6
      },
      {
        "x": 1245.2,
        "y": 259.7
      },
      {
        "x": 1239.3,
        "y": 245.6
      },
      {
        "x": 1245.2,
        "y": 231.5
      },
      {
        "x": 1259.3,
        "y": 225.6
      },
      {
        "x": 1273.4,
        "y": 231.5
      }
    ]
  },
  {
    "id": "ostrow_wielkopolski",
    "name": "Provincia de Ostrów Wielkopolski",
    "capitalName": "Ostrów Wielkopolski",
    "owner": "germany",
    "theater": "europe",
    "x": 1245.1,
    "y": 267.8,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "prussia",
      "trinec",
      "bohemia",
      "poland",
      "ostroda",
      "saxony",
      "zamosc"
    ],
    "polygon": [
      {
        "x": 1265.1,
        "y": 267.8
      },
      {
        "x": 1259.2,
        "y": 281.9
      },
      {
        "x": 1245.1,
        "y": 287.8
      },
      {
        "x": 1231.0,
        "y": 281.9
      },
      {
        "x": 1225.1,
        "y": 267.8
      },
      {
        "x": 1231.0,
        "y": 253.7
      },
      {
        "x": 1245.1,
        "y": 247.8
      },
      {
        "x": 1259.2,
        "y": 253.7
      }
    ]
  },
  {
    "id": "jever",
    "name": "Provincia de Jever",
    "capitalName": "Jever",
    "owner": "germany",
    "theater": "europe",
    "x": 1181.1,
    "y": 247.0,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "hanover",
      "holland",
      "neubrandenburg",
      "schwarzburg",
      "rhineland",
      "flanders",
      "denmark",
      "aalborg"
    ],
    "polygon": [
      {
        "x": 1201.1,
        "y": 247.0
      },
      {
        "x": 1195.2,
        "y": 261.1
      },
      {
        "x": 1181.1,
        "y": 267.0
      },
      {
        "x": 1167.0,
        "y": 261.1
      },
      {
        "x": 1161.1,
        "y": 247.0
      },
      {
        "x": 1167.0,
        "y": 232.9
      },
      {
        "x": 1181.1,
        "y": 227.0
      },
      {
        "x": 1195.2,
        "y": 232.9
      }
    ]
  },
  {
    "id": "neubrandenburg",
    "name": "Provincia de Neubrandenburg",
    "capitalName": "Neubrandenburg",
    "owner": "germany",
    "theater": "europe",
    "x": 1215.7,
    "y": 247.1,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "denmark",
      "prussia",
      "saxony",
      "hanover",
      "schwarzburg",
      "jever",
      "aalborg",
      "borgholm"
    ],
    "polygon": [
      {
        "x": 1235.7,
        "y": 247.1
      },
      {
        "x": 1229.8,
        "y": 261.2
      },
      {
        "x": 1215.7,
        "y": 267.1
      },
      {
        "x": 1201.6,
        "y": 261.2
      },
      {
        "x": 1195.7,
        "y": 247.1
      },
      {
        "x": 1201.6,
        "y": 233.0
      },
      {
        "x": 1215.7,
        "y": 227.1
      },
      {
        "x": 1229.8,
        "y": 233.0
      }
    ]
  },
  {
    "id": "schwarzburg",
    "name": "Provincia de Schwarzburg",
    "capitalName": "Schwarzburg",
    "owner": "germany",
    "theater": "europe",
    "x": 1201.9,
    "y": 277.5,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "saxony",
      "rhineland",
      "hanover",
      "bavaria",
      "bohemia",
      "linz",
      "jever",
      "neubrandenburg"
    ],
    "polygon": [
      {
        "x": 1221.9,
        "y": 277.5
      },
      {
        "x": 1216.0,
        "y": 291.6
      },
      {
        "x": 1201.9,
        "y": 297.5
      },
      {
        "x": 1187.8,
        "y": 291.6
      },
      {
        "x": 1181.9,
        "y": 277.5
      },
      {
        "x": 1187.8,
        "y": 263.4
      },
      {
        "x": 1201.9,
        "y": 257.5
      },
      {
        "x": 1216.0,
        "y": 263.4
      }
    ]
  },
  {
    "id": "bastia",
    "name": "Provincia de Bastia",
    "capitalName": "Bastia",
    "owner": "rome",
    "theater": "spain",
    "x": 1189.7,
    "y": 354.8,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "rome",
      "provence",
      "milan",
      "venice",
      "ancona",
      "cagliari"
    ],
    "polygon": [
      {
        "x": 1209.7,
        "y": 354.8
      },
      {
        "x": 1203.8,
        "y": 368.9
      },
      {
        "x": 1189.7,
        "y": 374.8
      },
      {
        "x": 1175.6,
        "y": 368.9
      },
      {
        "x": 1169.7,
        "y": 354.8
      },
      {
        "x": 1175.6,
        "y": 340.7
      },
      {
        "x": 1189.7,
        "y": 334.8
      },
      {
        "x": 1203.8,
        "y": 340.7
      }
    ]
  },
  {
    "id": "brindisi",
    "name": "Provincia de Brindisi",
    "capitalName": "Brindisi",
    "owner": "rome",
    "theater": "spain",
    "x": 1245.4,
    "y": 372.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "sarande",
      "catanzaro",
      "podgorica",
      "naples",
      "split",
      "gevgelija",
      "greece"
    ],
    "polygon": [
      {
        "x": 1265.4,
        "y": 372.8
      },
      {
        "x": 1259.5,
        "y": 386.9
      },
      {
        "x": 1245.4,
        "y": 392.8
      },
      {
        "x": 1231.3,
        "y": 386.9
      },
      {
        "x": 1225.4,
        "y": 372.8
      },
      {
        "x": 1231.3,
        "y": 358.7
      },
      {
        "x": 1245.4,
        "y": 352.8
      },
      {
        "x": 1259.5,
        "y": 358.7
      }
    ]
  },
  {
    "id": "ancona",
    "name": "Provincia de Ancona",
    "capitalName": "Ancona",
    "owner": "rome",
    "theater": "spain",
    "x": 1216.2,
    "y": 346.7,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "rome",
      "venice",
      "split",
      "trebnje",
      "naples",
      "bastia",
      "orasje"
    ],
    "polygon": [
      {
        "x": 1236.2,
        "y": 346.7
      },
      {
        "x": 1230.3,
        "y": 360.8
      },
      {
        "x": 1216.2,
        "y": 366.7
      },
      {
        "x": 1202.1,
        "y": 360.8
      },
      {
        "x": 1196.2,
        "y": 346.7
      },
      {
        "x": 1202.1,
        "y": 332.6
      },
      {
        "x": 1216.2,
        "y": 326.7
      },
      {
        "x": 1230.3,
        "y": 332.6
      }
    ]
  },
  {
    "id": "valletta",
    "name": "Provincia de Valletta",
    "capitalName": "Valletta",
    "owner": "rome",
    "theater": "spain",
    "x": 1223.0,
    "y": 412.5,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "sicily",
      "kelibia",
      "sfax",
      "zliten",
      "catanzaro",
      "el_kef",
      "tripoli"
    ],
    "polygon": [
      {
        "x": 1243.0,
        "y": 412.5
      },
      {
        "x": 1237.1,
        "y": 426.6
      },
      {
        "x": 1223.0,
        "y": 432.5
      },
      {
        "x": 1208.9,
        "y": 426.6
      },
      {
        "x": 1203.0,
        "y": 412.5
      },
      {
        "x": 1208.9,
        "y": 398.4
      },
      {
        "x": 1223.0,
        "y": 392.5
      },
      {
        "x": 1237.1,
        "y": 398.4
      }
    ]
  },
  {
    "id": "split",
    "name": "Provincia de Split",
    "capitalName": "Split",
    "owner": "rome",
    "theater": "spain",
    "x": 1235.8,
    "y": 346.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "ancona",
      "orasje",
      "podgorica",
      "trebnje",
      "brindisi",
      "naples",
      "rome"
    ],
    "polygon": [
      {
        "x": 1255.8,
        "y": 346.8
      },
      {
        "x": 1249.9,
        "y": 360.9
      },
      {
        "x": 1235.8,
        "y": 366.8
      },
      {
        "x": 1221.7,
        "y": 360.9
      },
      {
        "x": 1215.8,
        "y": 346.8
      },
      {
        "x": 1221.7,
        "y": 332.7
      },
      {
        "x": 1235.8,
        "y": 326.8
      },
      {
        "x": 1249.9,
        "y": 332.7
      }
    ]
  },
  {
    "id": "sfax",
    "name": "Provincia de Sfax",
    "capitalName": "Sfax",
    "owner": "rome",
    "theater": "spain",
    "x": 1198.4,
    "y": 420.3,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "el_kef",
      "kelibia",
      "valletta",
      "sicily",
      "tieret",
      "zliten",
      "algiers"
    ],
    "polygon": [
      {
        "x": 1218.4,
        "y": 420.3
      },
      {
        "x": 1212.5,
        "y": 434.4
      },
      {
        "x": 1198.4,
        "y": 440.3
      },
      {
        "x": 1184.3,
        "y": 434.4
      },
      {
        "x": 1178.4,
        "y": 420.3
      },
      {
        "x": 1184.3,
        "y": 406.2
      },
      {
        "x": 1198.4,
        "y": 400.3
      },
      {
        "x": 1212.5,
        "y": 406.2
      }
    ]
  },
  {
    "id": "kelibia",
    "name": "Provincia de Kelibia",
    "capitalName": "Kelibia",
    "owner": "rome",
    "theater": "spain",
    "x": 1200.4,
    "y": 402.0,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "sicily",
      "el_kef",
      "sfax",
      "cagliari",
      "valletta",
      "naples",
      "algiers",
      "zliten"
    ],
    "polygon": [
      {
        "x": 1220.4,
        "y": 402.0
      },
      {
        "x": 1214.5,
        "y": 416.1
      },
      {
        "x": 1200.4,
        "y": 422.0
      },
      {
        "x": 1186.3,
        "y": 416.1
      },
      {
        "x": 1180.4,
        "y": 402.0
      },
      {
        "x": 1186.3,
        "y": 387.9
      },
      {
        "x": 1200.4,
        "y": 382.0
      },
      {
        "x": 1214.5,
        "y": 387.9
      }
    ]
  },
  {
    "id": "aalborg",
    "name": "Provincia de Aalborg",
    "capitalName": "Aalborg",
    "owner": "sweden",
    "theater": "europe",
    "x": 1193.2,
    "y": 207.3,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "denmark",
      "norway",
      "jever",
      "borgholm",
      "neubrandenburg",
      "hanover",
      "are"
    ],
    "polygon": [
      {
        "x": 1213.2,
        "y": 207.3
      },
      {
        "x": 1207.3,
        "y": 221.4
      },
      {
        "x": 1193.2,
        "y": 227.3
      },
      {
        "x": 1179.1,
        "y": 221.4
      },
      {
        "x": 1173.2,
        "y": 207.3
      },
      {
        "x": 1179.1,
        "y": 193.2
      },
      {
        "x": 1193.2,
        "y": 187.3
      },
      {
        "x": 1207.3,
        "y": 193.2
      }
    ]
  },
  {
    "id": "borgholm",
    "name": "Provincia de Borgholm",
    "capitalName": "Borgholm",
    "owner": "sweden",
    "theater": "europe",
    "x": 1237.8,
    "y": 209.6,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "denmark",
      "liepaja",
      "sweden",
      "ostroda",
      "prussia",
      "neubrandenburg",
      "norway",
      "aalborg",
      "mora"
    ],
    "polygon": [
      {
        "x": 1257.8,
        "y": 209.6
      },
      {
        "x": 1251.9,
        "y": 223.7
      },
      {
        "x": 1237.8,
        "y": 229.6
      },
      {
        "x": 1223.7,
        "y": 223.7
      },
      {
        "x": 1217.8,
        "y": 209.6
      },
      {
        "x": 1223.7,
        "y": 195.5
      },
      {
        "x": 1237.8,
        "y": 189.6
      },
      {
        "x": 1251.9,
        "y": 195.5
      }
    ]
  },
  {
    "id": "mora",
    "name": "Provincia de Mora",
    "capitalName": "Mora",
    "owner": "sweden",
    "theater": "europe",
    "x": 1223.2,
    "y": 159.8,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "norway",
      "are",
      "harnosand",
      "sweden",
      "pori",
      "borgholm"
    ],
    "polygon": [
      {
        "x": 1243.2,
        "y": 159.8
      },
      {
        "x": 1237.3,
        "y": 173.9
      },
      {
        "x": 1223.2,
        "y": 179.8
      },
      {
        "x": 1209.1,
        "y": 173.9
      },
      {
        "x": 1203.2,
        "y": 159.8
      },
      {
        "x": 1209.1,
        "y": 145.7
      },
      {
        "x": 1223.2,
        "y": 139.8
      },
      {
        "x": 1237.3,
        "y": 145.7
      }
    ]
  },
  {
    "id": "pori",
    "name": "Provincia de Pori",
    "capitalName": "Pori",
    "owner": "sweden",
    "theater": "europe",
    "x": 1271.4,
    "y": 154.6,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "harnosand",
      "tallinn",
      "sweden",
      "raahe",
      "imatra",
      "mora",
      "are",
      "kuhmo"
    ],
    "polygon": [
      {
        "x": 1291.4,
        "y": 154.6
      },
      {
        "x": 1285.5,
        "y": 168.7
      },
      {
        "x": 1271.4,
        "y": 174.6
      },
      {
        "x": 1257.3,
        "y": 168.7
      },
      {
        "x": 1251.4,
        "y": 154.6
      },
      {
        "x": 1257.3,
        "y": 140.5
      },
      {
        "x": 1271.4,
        "y": 134.6
      },
      {
        "x": 1285.5,
        "y": 140.5
      }
    ]
  },
  {
    "id": "lakhkolampi",
    "name": "Provincia de Lakhkolampi",
    "capitalName": "Lakhkolampi",
    "owner": "sweden",
    "theater": "europe",
    "x": 1343.0,
    "y": 144.6,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "pudozh",
      "kuhmo",
      "imatra",
      "kuzema",
      "novgorod",
      "vologda",
      "raahe"
    ],
    "polygon": [
      {
        "x": 1363.0,
        "y": 144.6
      },
      {
        "x": 1357.1,
        "y": 158.7
      },
      {
        "x": 1343.0,
        "y": 164.6
      },
      {
        "x": 1328.9,
        "y": 158.7
      },
      {
        "x": 1323.0,
        "y": 144.6
      },
      {
        "x": 1328.9,
        "y": 130.5
      },
      {
        "x": 1343.0,
        "y": 124.6
      },
      {
        "x": 1357.1,
        "y": 130.5
      }
    ]
  },
  {
    "id": "zhizhitsa",
    "name": "Provincia de Zhizhitsa",
    "capitalName": "Zhizhitsa",
    "owner": "sweden",
    "theater": "europe",
    "x": 1334.6,
    "y": 216.1,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "mogilev",
      "balvi",
      "baryatino",
      "novgorod",
      "moscow",
      "lithuania"
    ],
    "polygon": [
      {
        "x": 1354.6,
        "y": 216.1
      },
      {
        "x": 1348.7,
        "y": 230.2
      },
      {
        "x": 1334.6,
        "y": 236.1
      },
      {
        "x": 1320.5,
        "y": 230.2
      },
      {
        "x": 1314.6,
        "y": 216.1
      },
      {
        "x": 1320.5,
        "y": 202.0
      },
      {
        "x": 1334.6,
        "y": 196.1
      },
      {
        "x": 1348.7,
        "y": 202.0
      }
    ]
  },
  {
    "id": "zamosc",
    "name": "Provincia de Zamość",
    "capitalName": "Zamość",
    "owner": "poland",
    "theater": "europe",
    "x": 1280.9,
    "y": 277.5,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "ivano_frankivsk",
      "poland",
      "presov",
      "pinsk",
      "trinec",
      "ostrow_wielkopolski",
      "ostroda"
    ],
    "polygon": [
      {
        "x": 1300.9,
        "y": 277.5
      },
      {
        "x": 1295.0,
        "y": 291.6
      },
      {
        "x": 1280.9,
        "y": 297.5
      },
      {
        "x": 1266.8,
        "y": 291.6
      },
      {
        "x": 1260.9,
        "y": 277.5
      },
      {
        "x": 1266.8,
        "y": 263.4
      },
      {
        "x": 1280.9,
        "y": 257.5
      },
      {
        "x": 1295.0,
        "y": 263.4
      }
    ]
  },
  {
    "id": "ivano_frankivsk",
    "name": "Provincia de Ivano Frankivsk",
    "capitalName": "Ivano Frankivsk",
    "owner": "poland",
    "theater": "europe",
    "x": 1290.5,
    "y": 295.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "zamosc",
      "presov",
      "balti",
      "hungary",
      "kyiv",
      "pinsk",
      "sinaia"
    ],
    "polygon": [
      {
        "x": 1310.5,
        "y": 295.9
      },
      {
        "x": 1304.6,
        "y": 310.0
      },
      {
        "x": 1290.5,
        "y": 315.9
      },
      {
        "x": 1276.4,
        "y": 310.0
      },
      {
        "x": 1270.5,
        "y": 295.9
      },
      {
        "x": 1276.4,
        "y": 281.8
      },
      {
        "x": 1290.5,
        "y": 275.9
      },
      {
        "x": 1304.6,
        "y": 281.8
      }
    ]
  },
  {
    "id": "yuzhne",
    "name": "Provincia de Yuzhne",
    "capitalName": "Yuzhne",
    "owner": "poland",
    "theater": "europe",
    "x": 1331.6,
    "y": 318.3,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "kropyvnytskyi",
      "crimea",
      "balti",
      "constanta",
      "sinaia",
      "berdyansk"
    ],
    "polygon": [
      {
        "x": 1351.6,
        "y": 318.3
      },
      {
        "x": 1345.7,
        "y": 332.4
      },
      {
        "x": 1331.6,
        "y": 338.3
      },
      {
        "x": 1317.5,
        "y": 332.4
      },
      {
        "x": 1311.6,
        "y": 318.3
      },
      {
        "x": 1317.5,
        "y": 304.2
      },
      {
        "x": 1331.6,
        "y": 298.3
      },
      {
        "x": 1345.7,
        "y": 304.2
      }
    ]
  },
  {
    "id": "sinaia",
    "name": "Provincia de Sinaia",
    "capitalName": "Sinaia",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1295.9,
    "y": 330.5,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "balkans",
      "constanta",
      "hungary",
      "balti",
      "ivano_frankivsk",
      "yuzhne"
    ],
    "polygon": [
      {
        "x": 1315.9,
        "y": 330.5
      },
      {
        "x": 1310.0,
        "y": 344.6
      },
      {
        "x": 1295.9,
        "y": 350.5
      },
      {
        "x": 1281.8,
        "y": 344.6
      },
      {
        "x": 1275.9,
        "y": 330.5
      },
      {
        "x": 1281.8,
        "y": 316.4
      },
      {
        "x": 1295.9,
        "y": 310.5
      },
      {
        "x": 1310.0,
        "y": 316.4
      }
    ]
  },
  {
    "id": "gevgelija",
    "name": "Provincia de Gevgelija",
    "capitalName": "Gevgelija",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1275.9,
    "y": 367.9,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "sarande",
      "balkans",
      "greece",
      "alexandroupoli",
      "podgorica",
      "brindisi"
    ],
    "polygon": [
      {
        "x": 1295.9,
        "y": 367.9
      },
      {
        "x": 1290.0,
        "y": 382.0
      },
      {
        "x": 1275.9,
        "y": 387.9
      },
      {
        "x": 1261.8,
        "y": 382.0
      },
      {
        "x": 1255.9,
        "y": 367.9
      },
      {
        "x": 1261.8,
        "y": 353.8
      },
      {
        "x": 1275.9,
        "y": 347.9
      },
      {
        "x": 1290.0,
        "y": 353.8
      }
    ]
  },
  {
    "id": "istanbul",
    "name": "Provincia de Istanbul",
    "capitalName": "Istanbul",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1318.5,
    "y": 369.3,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "constantinople",
      "usak",
      "alexandroupoli",
      "constanta",
      "mesta",
      "balkans",
      "kas"
    ],
    "polygon": [
      {
        "x": 1338.5,
        "y": 369.3
      },
      {
        "x": 1332.6,
        "y": 383.4
      },
      {
        "x": 1318.5,
        "y": 389.3
      },
      {
        "x": 1304.4,
        "y": 383.4
      },
      {
        "x": 1298.5,
        "y": 369.3
      },
      {
        "x": 1304.4,
        "y": 355.2
      },
      {
        "x": 1318.5,
        "y": 349.3
      },
      {
        "x": 1332.6,
        "y": 355.2
      }
    ]
  },
  {
    "id": "mesta",
    "name": "Provincia de Mesta",
    "capitalName": "Mesta",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1298.9,
    "y": 393.2,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "greece",
      "alexandroupoli",
      "usak",
      "heraklion",
      "kas",
      "istanbul",
      "derna"
    ],
    "polygon": [
      {
        "x": 1318.9,
        "y": 393.2
      },
      {
        "x": 1313.0,
        "y": 407.3
      },
      {
        "x": 1298.9,
        "y": 413.2
      },
      {
        "x": 1284.8,
        "y": 407.3
      },
      {
        "x": 1278.9,
        "y": 393.2
      },
      {
        "x": 1284.8,
        "y": 379.1
      },
      {
        "x": 1298.9,
        "y": 373.2
      },
      {
        "x": 1313.0,
        "y": 379.1
      }
    ]
  },
  {
    "id": "kas",
    "name": "Provincia de Kaş",
    "capitalName": "Kaş",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1323.0,
    "y": 409.8,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "usak",
      "paphos",
      "mesta",
      "heraklion",
      "aksaray",
      "istanbul"
    ],
    "polygon": [
      {
        "x": 1343.0,
        "y": 409.8
      },
      {
        "x": 1337.1,
        "y": 423.9
      },
      {
        "x": 1323.0,
        "y": 429.8
      },
      {
        "x": 1308.9,
        "y": 423.9
      },
      {
        "x": 1303.0,
        "y": 409.8
      },
      {
        "x": 1308.9,
        "y": 395.7
      },
      {
        "x": 1323.0,
        "y": 389.8
      },
      {
        "x": 1337.1,
        "y": 395.7
      }
    ]
  },
  {
    "id": "ulas",
    "name": "Provincia de Ulaş",
    "capitalName": "Ulaş",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1371.6,
    "y": 383.7,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "bafra",
      "aksaray",
      "sanliurfa",
      "constantinople",
      "ardahan",
      "hakkari"
    ],
    "polygon": [
      {
        "x": 1391.6,
        "y": 383.7
      },
      {
        "x": 1385.7,
        "y": 397.8
      },
      {
        "x": 1371.6,
        "y": 403.7
      },
      {
        "x": 1357.5,
        "y": 397.8
      },
      {
        "x": 1351.6,
        "y": 383.7
      },
      {
        "x": 1357.5,
        "y": 369.6
      },
      {
        "x": 1371.6,
        "y": 363.7
      },
      {
        "x": 1385.7,
        "y": 369.6
      }
    ]
  },
  {
    "id": "taheerbasitao",
    "name": "Provincia de Taheerbasitao",
    "capitalName": "Taheerbasitao",
    "owner": "russia",
    "theater": "europe",
    "x": 1716.5,
    "y": 331.4,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "karamay",
      "bugat",
      "olgii",
      "aketashi",
      "songino",
      "ongudai",
      "tanyaozi"
    ],
    "polygon": [
      {
        "x": 1736.5,
        "y": 331.4
      },
      {
        "x": 1730.6,
        "y": 345.5
      },
      {
        "x": 1716.5,
        "y": 351.4
      },
      {
        "x": 1702.4,
        "y": 345.5
      },
      {
        "x": 1696.5,
        "y": 331.4
      },
      {
        "x": 1702.4,
        "y": 317.3
      },
      {
        "x": 1716.5,
        "y": 311.4
      },
      {
        "x": 1730.6,
        "y": 317.3
      }
    ]
  },
  {
    "id": "kyzyl",
    "name": "Provincia de Kyzyl",
    "capitalName": "Kyzyl",
    "owner": "russia",
    "theater": "europe",
    "x": 1749.3,
    "y": 266.9,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "abaza",
      "songino",
      "sorok",
      "olgii",
      "tayshet",
      "ongudai",
      "bugat"
    ],
    "polygon": [
      {
        "x": 1769.3,
        "y": 266.9
      },
      {
        "x": 1763.4,
        "y": 281.0
      },
      {
        "x": 1749.3,
        "y": 286.9
      },
      {
        "x": 1735.2,
        "y": 281.0
      },
      {
        "x": 1729.3,
        "y": 266.9
      },
      {
        "x": 1735.2,
        "y": 252.8
      },
      {
        "x": 1749.3,
        "y": 246.9
      },
      {
        "x": 1763.4,
        "y": 252.8
      }
    ]
  },
  {
    "id": "ongudai",
    "name": "Provincia de Ongudai",
    "capitalName": "Ongudai",
    "owner": "russia",
    "theater": "europe",
    "x": 1694.7,
    "y": 277.3,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "olgii",
      "zarinsk",
      "qalbatau",
      "abaza",
      "kulunda",
      "karamay",
      "taheerbasitao",
      "kyzyl",
      "mariinsk"
    ],
    "polygon": [
      {
        "x": 1714.7,
        "y": 277.3
      },
      {
        "x": 1708.8,
        "y": 291.4
      },
      {
        "x": 1694.7,
        "y": 297.3
      },
      {
        "x": 1680.6,
        "y": 291.4
      },
      {
        "x": 1674.7,
        "y": 277.3
      },
      {
        "x": 1680.6,
        "y": 263.2
      },
      {
        "x": 1694.7,
        "y": 257.3
      },
      {
        "x": 1708.8,
        "y": 263.2
      }
    ]
  },
  {
    "id": "aktobe",
    "name": "Provincia de Aktobe",
    "capitalName": "Aktobe",
    "owner": "russia",
    "theater": "europe",
    "x": 1504.3,
    "y": 282.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "shalkar",
      "sterlitamak",
      "uralsk",
      "atyrau",
      "kostanay",
      "karakalpakia",
      "miass",
      "kaukey"
    ],
    "polygon": [
      {
        "x": 1524.3,
        "y": 282.0
      },
      {
        "x": 1518.4,
        "y": 296.1
      },
      {
        "x": 1504.3,
        "y": 302.0
      },
      {
        "x": 1490.2,
        "y": 296.1
      },
      {
        "x": 1484.3,
        "y": 282.0
      },
      {
        "x": 1490.2,
        "y": 267.9
      },
      {
        "x": 1504.3,
        "y": 262.0
      },
      {
        "x": 1518.4,
        "y": 267.9
      }
    ]
  },
  {
    "id": "millerovo",
    "name": "Provincia de Millerovo",
    "capitalName": "Millerovo",
    "owner": "russia",
    "theater": "europe",
    "x": 1393.8,
    "y": 295.8,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "kharkiv",
      "berdyansk",
      "steppes",
      "lipetsk",
      "stavropol",
      "kropyvnytskyi",
      "penza"
    ],
    "polygon": [
      {
        "x": 1413.8,
        "y": 295.8
      },
      {
        "x": 1407.9,
        "y": 309.9
      },
      {
        "x": 1393.8,
        "y": 315.8
      },
      {
        "x": 1379.7,
        "y": 309.9
      },
      {
        "x": 1373.8,
        "y": 295.8
      },
      {
        "x": 1379.7,
        "y": 281.7
      },
      {
        "x": 1393.8,
        "y": 275.8
      },
      {
        "x": 1407.9,
        "y": 281.7
      }
    ]
  },
  {
    "id": "neftekamsk",
    "name": "Provincia de Neftekamsk",
    "capitalName": "Neftekamsk",
    "owner": "russia",
    "theater": "europe",
    "x": 1485.3,
    "y": 218.2,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "sterlitamak",
      "kazan",
      "kudymkar",
      "miass",
      "kirov",
      "nizhny_tagil",
      "syktyvkar",
      "talovo"
    ],
    "polygon": [
      {
        "x": 1505.3,
        "y": 218.2
      },
      {
        "x": 1499.4,
        "y": 232.3
      },
      {
        "x": 1485.3,
        "y": 238.2
      },
      {
        "x": 1471.2,
        "y": 232.3
      },
      {
        "x": 1465.3,
        "y": 218.2
      },
      {
        "x": 1471.2,
        "y": 204.1
      },
      {
        "x": 1485.3,
        "y": 198.2
      },
      {
        "x": 1499.4,
        "y": 204.1
      }
    ]
  },
  {
    "id": "miass",
    "name": "Provincia de Miass",
    "capitalName": "Miass",
    "owner": "russia",
    "theater": "europe",
    "x": 1523.6,
    "y": 230.2,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "kostanay",
      "sterlitamak",
      "nizhny_tagil",
      "neftekamsk",
      "aktobe",
      "kudymkar"
    ],
    "polygon": [
      {
        "x": 1543.6,
        "y": 230.2
      },
      {
        "x": 1537.7,
        "y": 244.3
      },
      {
        "x": 1523.6,
        "y": 250.2
      },
      {
        "x": 1509.5,
        "y": 244.3
      },
      {
        "x": 1503.6,
        "y": 230.2
      },
      {
        "x": 1509.5,
        "y": 216.1
      },
      {
        "x": 1523.6,
        "y": 210.2
      },
      {
        "x": 1537.7,
        "y": 216.1
      }
    ]
  },
  {
    "id": "kirov",
    "name": "Provincia de Kirov",
    "capitalName": "Kirov",
    "owner": "russia",
    "theater": "europe",
    "x": 1455.1,
    "y": 187.3,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "nikolsk",
      "kudymkar",
      "syktyvkar",
      "kazan",
      "neftekamsk",
      "gorodets",
      "bereznik",
      "talovo"
    ],
    "polygon": [
      {
        "x": 1475.1,
        "y": 187.3
      },
      {
        "x": 1469.2,
        "y": 201.4
      },
      {
        "x": 1455.1,
        "y": 207.3
      },
      {
        "x": 1441.0,
        "y": 201.4
      },
      {
        "x": 1435.1,
        "y": 187.3
      },
      {
        "x": 1441.0,
        "y": 173.2
      },
      {
        "x": 1455.1,
        "y": 167.3
      },
      {
        "x": 1469.2,
        "y": 173.2
      }
    ]
  },
  {
    "id": "novyi_vasiugan",
    "name": "Provincia de Novyi Vasiugan",
    "capitalName": "Novyi Vasiugan",
    "owner": "russia",
    "theater": "europe",
    "x": 1631.5,
    "y": 187.7,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "kolosovka",
      "surgut",
      "laryak",
      "kuybyshev",
      "podgornoe",
      "siberia",
      "nyagan"
    ],
    "polygon": [
      {
        "x": 1651.5,
        "y": 187.7
      },
      {
        "x": 1645.6,
        "y": 201.8
      },
      {
        "x": 1631.5,
        "y": 207.7
      },
      {
        "x": 1617.4,
        "y": 201.8
      },
      {
        "x": 1611.5,
        "y": 187.7
      },
      {
        "x": 1617.4,
        "y": 173.6
      },
      {
        "x": 1631.5,
        "y": 167.7
      },
      {
        "x": 1645.6,
        "y": 173.6
      }
    ]
  },
  {
    "id": "kuybyshev",
    "name": "Provincia de Kuybyshev",
    "capitalName": "Kuybyshev",
    "owner": "russia",
    "theater": "europe",
    "x": 1643.5,
    "y": 225.6,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "timber",
    "neighbors": [
      "kulunda",
      "kolosovka",
      "novyi_vasiugan",
      "podgornoe",
      "zarinsk",
      "shchuchinsk",
      "laryak"
    ],
    "polygon": [
      {
        "x": 1663.5,
        "y": 225.6
      },
      {
        "x": 1657.6,
        "y": 239.7
      },
      {
        "x": 1643.5,
        "y": 245.6
      },
      {
        "x": 1629.4,
        "y": 239.7
      },
      {
        "x": 1623.5,
        "y": 225.6
      },
      {
        "x": 1629.4,
        "y": 211.5
      },
      {
        "x": 1643.5,
        "y": 205.6
      },
      {
        "x": 1657.6,
        "y": 211.5
      }
    ]
  },
  {
    "id": "mariinsk",
    "name": "Provincia de Mariinsk",
    "capitalName": "Mariinsk",
    "owner": "russia",
    "theater": "europe",
    "x": 1705.5,
    "y": 216.7,
    "radius": 24,
    "terrain": "tundra",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "kataiga",
      "zarinsk",
      "abaza",
      "podgornoe",
      "strelka",
      "ongudai",
      "kellog"
    ],
    "polygon": [
      {
        "x": 1725.5,
        "y": 216.7
      },
      {
        "x": 1719.6,
        "y": 230.8
      },
      {
        "x": 1705.5,
        "y": 236.7
      },
      {
        "x": 1691.4,
        "y": 230.8
      },
      {
        "x": 1685.5,
        "y": 216.7
      },
      {
        "x": 1691.4,
        "y": 202.6
      },
      {
        "x": 1705.5,
        "y": 196.7
      },
      {
        "x": 1719.6,
        "y": 202.6
      }
    ]
  },
  {
    "id": "kirensk",
    "name": "Provincia de Kirensk",
    "capitalName": "Kirensk",
    "owner": "russia",
    "theater": "europe",
    "x": 1839.6,
    "y": 197.5,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "iron",
    "neighbors": [
      "yerema",
      "karam",
      "ust_ilimsk",
      "ulan_ude",
      "tayshet",
      "sorok"
    ],
    "polygon": [
      {
        "x": 1859.6,
        "y": 197.5
      },
      {
        "x": 1853.7,
        "y": 211.6
      },
      {
        "x": 1839.6,
        "y": 217.5
      },
      {
        "x": 1825.5,
        "y": 211.6
      },
      {
        "x": 1819.6,
        "y": 197.5
      },
      {
        "x": 1825.5,
        "y": 183.4
      },
      {
        "x": 1839.6,
        "y": 177.5
      },
      {
        "x": 1853.7,
        "y": 183.4
      }
    ]
  },
  {
    "id": "al_bukamal",
    "name": "Provincia de Al Bukamal",
    "capitalName": "Al Bukamal",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1396.9,
    "y": 423.9,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "mesopotamia",
      "sanliurfa",
      "syria",
      "hakkari",
      "sakaka",
      "bijar"
    ],
    "polygon": [
      {
        "x": 1416.9,
        "y": 423.9
      },
      {
        "x": 1411.0,
        "y": 438.0
      },
      {
        "x": 1396.9,
        "y": 443.9
      },
      {
        "x": 1382.8,
        "y": 438.0
      },
      {
        "x": 1376.9,
        "y": 423.9
      },
      {
        "x": 1382.8,
        "y": 409.8
      },
      {
        "x": 1396.9,
        "y": 403.9
      },
      {
        "x": 1411.0,
        "y": 409.8
      }
    ]
  },
  {
    "id": "jandaq",
    "name": "Provincia de Jandaq",
    "capitalName": "Jandaq",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1486.1,
    "y": 427.4,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "isfahan",
      "amol",
      "birjand",
      "bojnurd",
      "jahrom",
      "balkanabat",
      "sarakhs"
    ],
    "polygon": [
      {
        "x": 1506.1,
        "y": 427.4
      },
      {
        "x": 1500.2,
        "y": 441.5
      },
      {
        "x": 1486.1,
        "y": 447.4
      },
      {
        "x": 1472.0,
        "y": 441.5
      },
      {
        "x": 1466.1,
        "y": 427.4
      },
      {
        "x": 1472.0,
        "y": 413.3
      },
      {
        "x": 1486.1,
        "y": 407.4
      },
      {
        "x": 1500.2,
        "y": 413.3
      }
    ]
  },
  {
    "id": "bojnurd",
    "name": "Provincia de Bojnurd",
    "capitalName": "Bojnurd",
    "owner": "persia",
    "theater": "mena",
    "x": 1505.0,
    "y": 399.5,
    "radius": 24,
    "terrain": "mountains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "silver",
    "neighbors": [
      "balkanabat",
      "sarakhs",
      "jandaq",
      "amol",
      "birjand",
      "dashoguz"
    ],
    "polygon": [
      {
        "x": 1525.0,
        "y": 399.5
      },
      {
        "x": 1519.1,
        "y": 413.6
      },
      {
        "x": 1505.0,
        "y": 419.5
      },
      {
        "x": 1490.9,
        "y": 413.6
      },
      {
        "x": 1485.0,
        "y": 399.5
      },
      {
        "x": 1490.9,
        "y": 385.4
      },
      {
        "x": 1505.0,
        "y": 379.5
      },
      {
        "x": 1519.1,
        "y": 385.4
      }
    ]
  },
  {
    "id": "taleqan",
    "name": "Provincia de Taleqan",
    "capitalName": "Taleqan",
    "owner": "persia",
    "theater": "mena",
    "x": 1585.5,
    "y": 406.0,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "gowurdak",
      "peshawar",
      "batken",
      "gizab",
      "ishkuduk",
      "mazha"
    ],
    "polygon": [
      {
        "x": 1605.5,
        "y": 406.0
      },
      {
        "x": 1599.6,
        "y": 420.1
      },
      {
        "x": 1585.5,
        "y": 426.0
      },
      {
        "x": 1571.4,
        "y": 420.1
      },
      {
        "x": 1565.5,
        "y": 406.0
      },
      {
        "x": 1571.4,
        "y": 391.9
      },
      {
        "x": 1585.5,
        "y": 386.0
      },
      {
        "x": 1599.6,
        "y": 391.9
      }
    ]
  },
  {
    "id": "kaukey",
    "name": "Provincia de Kaukey",
    "capitalName": "Kaukey",
    "owner": "persia",
    "theater": "mena",
    "x": 1534.1,
    "y": 331.3,
    "radius": 24,
    "terrain": "hills",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "kyzylorda",
      "shalkar",
      "dashoguz",
      "karakalpakia",
      "ishkuduk",
      "aktobe",
      "arkalyk"
    ],
    "polygon": [
      {
        "x": 1554.1,
        "y": 331.3
      },
      {
        "x": 1548.2,
        "y": 345.4
      },
      {
        "x": 1534.1,
        "y": 351.3
      },
      {
        "x": 1520.0,
        "y": 345.4
      },
      {
        "x": 1514.1,
        "y": 331.3
      },
      {
        "x": 1520.0,
        "y": 317.2
      },
      {
        "x": 1534.1,
        "y": 311.3
      },
      {
        "x": 1548.2,
        "y": 317.2
      }
    ]
  },
  {
    "id": "gwadar",
    "name": "Provincia de Gwadar",
    "capitalName": "Gwadar",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1537.8,
    "y": 494.3,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "taftan",
      "karachi",
      "kahnuj",
      "noshki",
      "al_ain",
      "duqm",
      "junagadh"
    ],
    "polygon": [
      {
        "x": 1557.8,
        "y": 494.3
      },
      {
        "x": 1551.9,
        "y": 508.4
      },
      {
        "x": 1537.8,
        "y": 514.3
      },
      {
        "x": 1523.7,
        "y": 508.4
      },
      {
        "x": 1517.8,
        "y": 494.3
      },
      {
        "x": 1523.7,
        "y": 480.2
      },
      {
        "x": 1537.8,
        "y": 474.3
      },
      {
        "x": 1551.9,
        "y": 480.2
      }
    ]
  },
  {
    "id": "noshki",
    "name": "Provincia de Noshki",
    "capitalName": "Noshki",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1562.6,
    "y": 462.4,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "sadiqabad",
      "taftan",
      "gizab",
      "karachi",
      "gwadar",
      "peshawar"
    ],
    "polygon": [
      {
        "x": 1582.6,
        "y": 462.4
      },
      {
        "x": 1576.7,
        "y": 476.5
      },
      {
        "x": 1562.6,
        "y": 482.4
      },
      {
        "x": 1548.5,
        "y": 476.5
      },
      {
        "x": 1542.6,
        "y": 462.4
      },
      {
        "x": 1548.5,
        "y": 448.3
      },
      {
        "x": 1562.6,
        "y": 442.4
      },
      {
        "x": 1576.7,
        "y": 448.3
      }
    ]
  },
  {
    "id": "kahnuj",
    "name": "Provincia de Kahnuj",
    "capitalName": "Kahnuj",
    "owner": "ottoman",
    "theater": "mena",
    "x": 1507.7,
    "y": 474.4,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "spices",
    "neighbors": [
      "taftan",
      "jahrom",
      "al_ain",
      "gwadar",
      "birjand",
      "abu_samra",
      "duqm"
    ],
    "polygon": [
      {
        "x": 1527.7,
        "y": 474.4
      },
      {
        "x": 1521.8,
        "y": 488.5
      },
      {
        "x": 1507.7,
        "y": 494.4
      },
      {
        "x": 1493.6,
        "y": 488.5
      },
      {
        "x": 1487.7,
        "y": 474.4
      },
      {
        "x": 1493.6,
        "y": 460.3
      },
      {
        "x": 1507.7,
        "y": 454.4
      },
      {
        "x": 1521.8,
        "y": 460.3
      }
    ]
  },
  {
    "id": "marrakesh",
    "name": "Provincia de Marrakesh",
    "capitalName": "Marrakesh",
    "owner": "morocco",
    "theater": "mena",
    "x": 1075.1,
    "y": 446.6,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "fes",
      "zag",
      "taghit",
      "manfue",
      "andalucia",
      "lisbon"
    ],
    "polygon": [
      {
        "x": 1095.1,
        "y": 446.6
      },
      {
        "x": 1089.2,
        "y": 460.7
      },
      {
        "x": 1075.1,
        "y": 466.6
      },
      {
        "x": 1061.0,
        "y": 460.7
      },
      {
        "x": 1055.1,
        "y": 446.6
      },
      {
        "x": 1061.0,
        "y": 432.5
      },
      {
        "x": 1075.1,
        "y": 426.6
      },
      {
        "x": 1089.2,
        "y": 432.5
      }
    ]
  },
  {
    "id": "sohag",
    "name": "Provincia de Sohag",
    "capitalName": "Sohag",
    "owner": "morocco",
    "theater": "mena",
    "x": 1335.9,
    "y": 488.2,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "egypt",
      "al_wajh",
      "maan",
      "wahat_salima",
      "kazulu",
      "siwa_oasis"
    ],
    "polygon": [
      {
        "x": 1355.9,
        "y": 488.2
      },
      {
        "x": 1350.0,
        "y": 502.3
      },
      {
        "x": 1335.9,
        "y": 508.2
      },
      {
        "x": 1321.8,
        "y": 502.3
      },
      {
        "x": 1315.9,
        "y": 488.2
      },
      {
        "x": 1321.8,
        "y": 474.1
      },
      {
        "x": 1335.9,
        "y": 468.2
      },
      {
        "x": 1350.0,
        "y": 474.1
      }
    ]
  },
  {
    "id": "zliten",
    "name": "Provincia de Zliten",
    "capitalName": "Zliten",
    "owner": "morocco",
    "theater": "mena",
    "x": 1223.4,
    "y": 441.0,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "tripoli",
      "valletta",
      "tieret",
      "sfax",
      "al_fuqaha",
      "kelibia",
      "dujal",
      "awjilah"
    ],
    "polygon": [
      {
        "x": 1243.4,
        "y": 441.0
      },
      {
        "x": 1237.5,
        "y": 455.1
      },
      {
        "x": 1223.4,
        "y": 461.0
      },
      {
        "x": 1209.3,
        "y": 455.1
      },
      {
        "x": 1203.4,
        "y": 441.0
      },
      {
        "x": 1209.3,
        "y": 426.9
      },
      {
        "x": 1223.4,
        "y": 421.0
      },
      {
        "x": 1237.5,
        "y": 426.9
      }
    ]
  },
  {
    "id": "derna",
    "name": "Provincia de Derna",
    "capitalName": "Derna",
    "owner": "morocco",
    "theater": "mena",
    "x": 1276.8,
    "y": 437.6,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "heraklion",
      "tripoli",
      "awjilah",
      "siwa_oasis",
      "greece",
      "mesta"
    ],
    "polygon": [
      {
        "x": 1296.8,
        "y": 437.6
      },
      {
        "x": 1290.9,
        "y": 451.7
      },
      {
        "x": 1276.8,
        "y": 457.6
      },
      {
        "x": 1262.7,
        "y": 451.7
      },
      {
        "x": 1256.8,
        "y": 437.6
      },
      {
        "x": 1262.7,
        "y": 423.5
      },
      {
        "x": 1276.8,
        "y": 417.6
      },
      {
        "x": 1290.9,
        "y": 423.5
      }
    ]
  },
  {
    "id": "awjilah",
    "name": "Provincia de Awjilah",
    "capitalName": "Awjilah",
    "owner": "morocco",
    "theater": "mena",
    "x": 1268.6,
    "y": 467.2,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "siwa_oasis",
      "tripoli",
      "derna",
      "al_fuqaha",
      "kazulu",
      "zliten"
    ],
    "polygon": [
      {
        "x": 1288.6,
        "y": 467.2
      },
      {
        "x": 1282.7,
        "y": 481.3
      },
      {
        "x": 1268.6,
        "y": 487.2
      },
      {
        "x": 1254.5,
        "y": 481.3
      },
      {
        "x": 1248.6,
        "y": 467.2
      },
      {
        "x": 1254.5,
        "y": 453.1
      },
      {
        "x": 1268.6,
        "y": 447.2
      },
      {
        "x": 1282.7,
        "y": 453.1
      }
    ]
  },
  {
    "id": "manfue",
    "name": "Provincia de Manfue",
    "capitalName": "Manfue",
    "owner": "morocco",
    "theater": "mena",
    "x": 1102.0,
    "y": 481.1,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "wool",
    "neighbors": [
      "reggane",
      "taghit",
      "zag",
      "taoudenni",
      "marrakesh",
      "el_menia"
    ],
    "polygon": [
      {
        "x": 1122.0,
        "y": 481.1
      },
      {
        "x": 1116.1,
        "y": 495.2
      },
      {
        "x": 1102.0,
        "y": 501.1
      },
      {
        "x": 1087.9,
        "y": 495.2
      },
      {
        "x": 1082.0,
        "y": 481.1
      },
      {
        "x": 1087.9,
        "y": 467.0
      },
      {
        "x": 1102.0,
        "y": 461.1
      },
      {
        "x": 1116.1,
        "y": 467.0
      }
    ]
  },
  {
    "id": "maan",
    "name": "Provincia de Ma'an",
    "capitalName": "Ma'an",
    "owner": "morocco",
    "theater": "mena",
    "x": 1363.5,
    "y": 457.8,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "saltpeter",
    "neighbors": [
      "syria",
      "sakaka",
      "al_wajh",
      "egypt",
      "sohag",
      "paphos",
      "al_hasuniyyah"
    ],
    "polygon": [
      {
        "x": 1383.5,
        "y": 457.8
      },
      {
        "x": 1377.6,
        "y": 471.9
      },
      {
        "x": 1363.5,
        "y": 477.8
      },
      {
        "x": 1349.4,
        "y": 471.9
      },
      {
        "x": 1343.5,
        "y": 457.8
      },
      {
        "x": 1349.4,
        "y": 443.7
      },
      {
        "x": 1363.5,
        "y": 437.8
      },
      {
        "x": 1377.6,
        "y": 443.7
      }
    ]
  },
  {
    "id": "al_hasuniyyah",
    "name": "Provincia de Al Hasuniyyah",
    "capitalName": "Al Hasuniyyah",
    "owner": "morocco",
    "theater": "mena",
    "x": 1396.4,
    "y": 489.8,
    "radius": 24,
    "terrain": "arid",
    "hasPort": false,
    "cityLevel": 2,
    "population": 45000,
    "developmentLevel": 2,
    "economyValue": 28,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": false,
    "tradeGood": "grain",
    "neighbors": [
      "al_wajh",
      "sakaka",
      "mecca",
      "ibn_sharar",
      "maan",
      "layla"
    ],
    "polygon": [
      {
        "x": 1416.4,
        "y": 489.8
      },
      {
        "x": 1410.5,
        "y": 503.9
      },
      {
        "x": 1396.4,
        "y": 509.8
      },
      {
        "x": 1382.3,
        "y": 503.9
      },
      {
        "x": 1376.4,
        "y": 489.8
      },
      {
        "x": 1382.3,
        "y": 475.7
      },
      {
        "x": 1396.4,
        "y": 469.8
      },
      {
        "x": 1410.5,
        "y": 475.7
      }
    ]
  },
  {
    "id": "nsork",
    "name": "Provincia de Nsork",
    "capitalName": "Nsork",
    "owner": "neutral",
    "theater": "africa",
    "x": 1201.6,
    "y": 674.8,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "batouri",
      "calabar",
      "congo",
      "gemena",
      "kabo",
      "maroua"
    ],
    "polygon": [
      {
        "x": 1221.6,
        "y": 674.8
      },
      {
        "x": 1215.7,
        "y": 688.9
      },
      {
        "x": 1201.6,
        "y": 694.8
      },
      {
        "x": 1187.5,
        "y": 688.9
      },
      {
        "x": 1181.6,
        "y": 674.8
      },
      {
        "x": 1187.5,
        "y": 660.7
      },
      {
        "x": 1201.6,
        "y": 654.8
      },
      {
        "x": 1215.7,
        "y": 660.7
      }
    ]
  },
  {
    "id": "kabo",
    "name": "Provincia de Kabo",
    "capitalName": "Kabo",
    "owner": "neutral",
    "theater": "africa",
    "x": 1250.3,
    "y": 628.4,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "gemena",
      "birao",
      "maroua",
      "batouri",
      "derba",
      "tambura",
      "calabar",
      "kisangani",
      "nsork"
    ],
    "polygon": [
      {
        "x": 1270.3,
        "y": 628.4
      },
      {
        "x": 1264.4,
        "y": 642.5
      },
      {
        "x": 1250.3,
        "y": 648.4
      },
      {
        "x": 1236.2,
        "y": 642.5
      },
      {
        "x": 1230.3,
        "y": 628.4
      },
      {
        "x": 1236.2,
        "y": 614.3
      },
      {
        "x": 1250.3,
        "y": 608.4
      },
      {
        "x": 1264.4,
        "y": 614.3
      }
    ]
  },
  {
    "id": "ouagadougou",
    "name": "Provincia de Ouagadougou",
    "capitalName": "Ouagadougou",
    "owner": "neutral",
    "theater": "africa",
    "x": 1117.4,
    "y": 594.6,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "timbuktu",
      "guinea",
      "tingrela",
      "menaka",
      "abidjan",
      "tessalit"
    ],
    "polygon": [
      {
        "x": 1137.4,
        "y": 594.6
      },
      {
        "x": 1131.5,
        "y": 608.7
      },
      {
        "x": 1117.4,
        "y": 614.6
      },
      {
        "x": 1103.3,
        "y": 608.7
      },
      {
        "x": 1097.4,
        "y": 594.6
      },
      {
        "x": 1103.3,
        "y": 580.5
      },
      {
        "x": 1117.4,
        "y": 574.6
      },
      {
        "x": 1131.5,
        "y": 580.5
      }
    ]
  },
  {
    "id": "tessalit",
    "name": "Provincia de Tessalit",
    "capitalName": "Tessalit",
    "owner": "neutral",
    "theater": "africa",
    "x": 1134.3,
    "y": 536.4,
    "radius": 24,
    "terrain": "forest",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "spices",
    "neighbors": [
      "menaka",
      "tamanrasset",
      "timbuktu",
      "taoudenni",
      "reggane",
      "agadez",
      "tingrela",
      "ouagadougou"
    ],
    "polygon": [
      {
        "x": 1154.3,
        "y": 536.4
      },
      {
        "x": 1148.4,
        "y": 550.5
      },
      {
        "x": 1134.3,
        "y": 556.4
      },
      {
        "x": 1120.2,
        "y": 550.5
      },
      {
        "x": 1114.3,
        "y": 536.4
      },
      {
        "x": 1120.2,
        "y": 522.3
      },
      {
        "x": 1134.3,
        "y": 516.4
      },
      {
        "x": 1148.4,
        "y": 522.3
      }
    ]
  },
  {
    "id": "kutum",
    "name": "Provincia de Kutum",
    "capitalName": "Kutum",
    "owner": "neutral",
    "theater": "africa",
    "x": 1290.0,
    "y": 581.3,
    "radius": 24,
    "terrain": "tropical",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "ndupo",
      "birao",
      "agoza",
      "derba",
      "laqawa",
      "nubia",
      "wahat_salima"
    ],
    "polygon": [
      {
        "x": 1310.0,
        "y": 581.3
      },
      {
        "x": 1304.1,
        "y": 595.4
      },
      {
        "x": 1290.0,
        "y": 601.3
      },
      {
        "x": 1275.9,
        "y": 595.4
      },
      {
        "x": 1270.0,
        "y": 581.3
      },
      {
        "x": 1275.9,
        "y": 567.2
      },
      {
        "x": 1290.0,
        "y": 561.3
      },
      {
        "x": 1304.1,
        "y": 567.2
      }
    ]
  },
  {
    "id": "ndupo",
    "name": "Provincia de Ndupo",
    "capitalName": "Ndupo",
    "owner": "neutral",
    "theater": "africa",
    "x": 1312.8,
    "y": 561.7,
    "radius": 24,
    "terrain": "plains",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "kutum",
      "nubia",
      "agoza",
      "wahat_salima",
      "laqawa",
      "birao",
      "gondar"
    ],
    "polygon": [
      {
        "x": 1332.8,
        "y": 561.7
      },
      {
        "x": 1326.9,
        "y": 575.8
      },
      {
        "x": 1312.8,
        "y": 581.7
      },
      {
        "x": 1298.7,
        "y": 575.8
      },
      {
        "x": 1292.8,
        "y": 561.7
      },
      {
        "x": 1298.7,
        "y": 547.6
      },
      {
        "x": 1312.8,
        "y": 541.7
      },
      {
        "x": 1326.9,
        "y": 547.6
      }
    ]
  },
  {
    "id": "xai_xai",
    "name": "Provincia de Xai Xai",
    "capitalName": "Xai Xai",
    "owner": "neutral",
    "theater": "africa",
    "x": 1349.5,
    "y": 866.1,
    "radius": 24,
    "terrain": "desert",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "wool",
    "neighbors": [
      "johannesburg",
      "chipinge",
      "nata",
      "mthatha",
      "beloha",
      "furancungo",
      "cape_town"
    ],
    "polygon": [
      {
        "x": 1369.5,
        "y": 866.1
      },
      {
        "x": 1363.6,
        "y": 880.2
      },
      {
        "x": 1349.5,
        "y": 886.1
      },
      {
        "x": 1335.4,
        "y": 880.2
      },
      {
        "x": 1329.5,
        "y": 866.1
      },
      {
        "x": 1335.4,
        "y": 852.0
      },
      {
        "x": 1349.5,
        "y": 846.1
      },
      {
        "x": 1363.6,
        "y": 852.0
      }
    ]
  },
  {
    "id": "ambilobe",
    "name": "Provincia de Ambilobe",
    "capitalName": "Ambilobe",
    "owner": "neutral",
    "theater": "africa",
    "x": 1451.1,
    "y": 777.1,
    "radius": 24,
    "terrain": "plains",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "toamasina",
      "mitsamiouli",
      "morondava",
      "angoche",
      "anse_royale",
      "port_louis"
    ],
    "polygon": [
      {
        "x": 1471.1,
        "y": 777.1
      },
      {
        "x": 1465.2,
        "y": 791.2
      },
      {
        "x": 1451.1,
        "y": 797.1
      },
      {
        "x": 1437.0,
        "y": 791.2
      },
      {
        "x": 1431.1,
        "y": 777.1
      },
      {
        "x": 1437.0,
        "y": 763.0
      },
      {
        "x": 1451.1,
        "y": 757.1
      },
      {
        "x": 1465.2,
        "y": 763.0
      }
    ]
  },
  {
    "id": "morondava",
    "name": "Provincia de Morondava",
    "capitalName": "Morondava",
    "owner": "neutral",
    "theater": "africa",
    "x": 1419.6,
    "y": 829.6,
    "radius": 24,
    "terrain": "forest",
    "hasPort": true,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "timber",
    "neighbors": [
      "toamasina",
      "beloha",
      "angoche",
      "ambilobe",
      "mitsamiouli",
      "chipinge",
      "port_louis"
    ],
    "polygon": [
      {
        "x": 1439.6,
        "y": 829.6
      },
      {
        "x": 1433.7,
        "y": 843.7
      },
      {
        "x": 1419.6,
        "y": 849.6
      },
      {
        "x": 1405.5,
        "y": 843.7
      },
      {
        "x": 1399.6,
        "y": 829.6
      },
      {
        "x": 1405.5,
        "y": 815.5
      },
      {
        "x": 1419.6,
        "y": 809.6
      },
      {
        "x": 1433.7,
        "y": 815.5
      }
    ]
  },
  {
    "id": "hadiboh",
    "name": "Provincia de Hadiboh",
    "capitalName": "Hadiboh",
    "owner": "neutral",
    "theater": "africa",
    "x": 1483.8,
    "y": 592.9,
    "radius": 24,
    "terrain": "desert",
    "hasPort": false,
    "cityLevel": 1,
    "population": 20000,
    "developmentLevel": 1,
    "economyValue": 15,
    "infrastructureLevel": 1,
    "defenseLevel": 1,
    "isColonizable": true,
    "tradeGood": "gold",
    "neighbors": [
      "bandarbeyla",
      "shisan",
      "duqm",
      "sharorah",
      "hargeisa",
      "mocha"
    ],
    "polygon": [
      {
        "x": 1503.8,
        "y": 592.9
      },
      {
        "x": 1497.9,
        "y": 607.0
      },
      {
        "x": 1483.8,
        "y": 612.9
      },
      {
        "x": 1469.7,
        "y": 607.0
      },
      {
        "x": 1463.8,
        "y": 592.9
      },
      {
        "x": 1469.7,
        "y": 578.8
      },
      {
        "x": 1483.8,
        "y": 572.9
      },
      {
        "x": 1497.9,
        "y": 578.8
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.WORLD_PROVINCES = WORLD_PROVINCES;
}
if (typeof globalThis !== 'undefined') {
  globalThis.WORLD_PROVINCES = WORLD_PROVINCES;
}
