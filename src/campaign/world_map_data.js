/**
 * Chronicles of War - Global World Map Data (Polygonal Tessellation)
 * Calibrated for ultra-high-definition 2400x1162 historical world map relief
 * Features true Voronoi-tessellated polygonal boundaries (Age of History 3 & Paradox style),
 * 8 strategic trade goods, deep administrative attributes and continuous continental borders.
 * 93 historical provinces covering Europe, Americas, Eurasia, Middle East, Africa & Asia.
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
        "x": 696.3,
        "y": 361.0
      },
      {
        "x": 694.9,
        "y": 371.4
      },
      {
        "x": 690.9,
        "y": 381.1
      },
      {
        "x": 684.5,
        "y": 389.5
      },
      {
        "x": 676.1,
        "y": 395.9
      },
      {
        "x": 666.4,
        "y": 399.9
      },
      {
        "x": 656.0,
        "y": 401.3
      },
      {
        "x": 645.6,
        "y": 399.9
      },
      {
        "x": 616.5,
        "y": 366.7
      },
      {
        "x": 615.7,
        "y": 361.0
      },
      {
        "x": 617.1,
        "y": 350.6
      },
      {
        "x": 621.1,
        "y": 340.9
      },
      {
        "x": 627.5,
        "y": 332.5
      },
      {
        "x": 635.9,
        "y": 326.1
      },
      {
        "x": 645.6,
        "y": 322.1
      },
      {
        "x": 656.0,
        "y": 320.7
      },
      {
        "x": 666.4,
        "y": 322.1
      },
      {
        "x": 676.1,
        "y": 326.1
      },
      {
        "x": 684.5,
        "y": 332.5
      },
      {
        "x": 690.9,
        "y": 340.8
      },
      {
        "x": 694.9,
        "y": 350.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "timber"
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
        "x": 644.5,
        "y": 399.3
      },
      {
        "x": 645.3,
        "y": 405.0
      },
      {
        "x": 643.9,
        "y": 415.4
      },
      {
        "x": 639.9,
        "y": 425.1
      },
      {
        "x": 633.5,
        "y": 433.5
      },
      {
        "x": 625.1,
        "y": 439.9
      },
      {
        "x": 620.5,
        "y": 441.8
      },
      {
        "x": 572.4,
        "y": 428.2
      },
      {
        "x": 570.1,
        "y": 425.1
      },
      {
        "x": 566.1,
        "y": 415.4
      },
      {
        "x": 564.7,
        "y": 405.0
      },
      {
        "x": 566.1,
        "y": 394.6
      },
      {
        "x": 570.1,
        "y": 384.9
      },
      {
        "x": 576.5,
        "y": 376.5
      },
      {
        "x": 584.9,
        "y": 370.1
      },
      {
        "x": 594.6,
        "y": 366.1
      },
      {
        "x": 605.0,
        "y": 364.7
      },
      {
        "x": 615.4,
        "y": 366.1
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "grain"
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
        "x": 628.3,
        "y": 465.0
      },
      {
        "x": 626.9,
        "y": 475.4
      },
      {
        "x": 622.9,
        "y": 485.1
      },
      {
        "x": 616.5,
        "y": 493.5
      },
      {
        "x": 560.2,
        "y": 486.7
      },
      {
        "x": 561.1,
        "y": 435.3
      },
      {
        "x": 567.9,
        "y": 430.1
      },
      {
        "x": 572.5,
        "y": 428.2
      },
      {
        "x": 620.6,
        "y": 441.8
      },
      {
        "x": 622.9,
        "y": 444.8
      },
      {
        "x": 626.9,
        "y": 454.6
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ],
    "tradeGood": "timber"
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
        "x": 560.2,
        "y": 486.6
      },
      {
        "x": 542.5,
        "y": 503.2
      },
      {
        "x": 508.3,
        "y": 500.8
      },
      {
        "x": 500.3,
        "y": 494.7
      },
      {
        "x": 493.4,
        "y": 485.7
      },
      {
        "x": 489.1,
        "y": 475.2
      },
      {
        "x": 487.6,
        "y": 464.0
      },
      {
        "x": 489.1,
        "y": 452.8
      },
      {
        "x": 493.4,
        "y": 442.3
      },
      {
        "x": 500.3,
        "y": 433.3
      },
      {
        "x": 509.3,
        "y": 426.4
      },
      {
        "x": 519.8,
        "y": 422.1
      },
      {
        "x": 531.0,
        "y": 420.6
      },
      {
        "x": 542.2,
        "y": 422.1
      },
      {
        "x": 552.7,
        "y": 426.4
      },
      {
        "x": 561.1,
        "y": 432.9
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ],
    "tradeGood": "grain"
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
        "x": 529.6,
        "y": 380.0
      },
      {
        "x": 527.9,
        "y": 392.8
      },
      {
        "x": 523.0,
        "y": 404.8
      },
      {
        "x": 515.1,
        "y": 415.1
      },
      {
        "x": 504.8,
        "y": 423.0
      },
      {
        "x": 492.8,
        "y": 427.9
      },
      {
        "x": 480.0,
        "y": 429.6
      },
      {
        "x": 467.2,
        "y": 427.9
      },
      {
        "x": 455.2,
        "y": 423.0
      },
      {
        "x": 444.9,
        "y": 415.1
      },
      {
        "x": 437.0,
        "y": 404.8
      },
      {
        "x": 432.1,
        "y": 392.8
      },
      {
        "x": 430.4,
        "y": 380.0
      },
      {
        "x": 432.1,
        "y": 367.2
      },
      {
        "x": 437.0,
        "y": 355.2
      },
      {
        "x": 444.9,
        "y": 344.9
      },
      {
        "x": 455.2,
        "y": 337.0
      },
      {
        "x": 467.2,
        "y": 332.1
      },
      {
        "x": 480.0,
        "y": 330.4
      },
      {
        "x": 492.8,
        "y": 332.1
      },
      {
        "x": 504.8,
        "y": 337.0
      },
      {
        "x": 515.1,
        "y": 344.9
      },
      {
        "x": 523.0,
        "y": 355.2
      },
      {
        "x": 527.9,
        "y": 367.2
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ],
    "tradeGood": "wool"
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
        "x": 361.4,
        "y": 401.0
      },
      {
        "x": 359.9,
        "y": 412.2
      },
      {
        "x": 355.6,
        "y": 422.7
      },
      {
        "x": 348.7,
        "y": 431.7
      },
      {
        "x": 339.7,
        "y": 438.6
      },
      {
        "x": 329.2,
        "y": 442.9
      },
      {
        "x": 318.0,
        "y": 444.4
      },
      {
        "x": 306.8,
        "y": 442.9
      },
      {
        "x": 296.3,
        "y": 438.6
      },
      {
        "x": 287.3,
        "y": 431.7
      },
      {
        "x": 280.4,
        "y": 422.7
      },
      {
        "x": 276.1,
        "y": 412.2
      },
      {
        "x": 274.6,
        "y": 401.0
      },
      {
        "x": 276.1,
        "y": 389.8
      },
      {
        "x": 280.4,
        "y": 379.3
      },
      {
        "x": 287.3,
        "y": 370.3
      },
      {
        "x": 296.3,
        "y": 363.4
      },
      {
        "x": 306.8,
        "y": 359.1
      },
      {
        "x": 318.0,
        "y": 357.6
      },
      {
        "x": 329.2,
        "y": 359.1
      },
      {
        "x": 339.7,
        "y": 363.4
      },
      {
        "x": 348.7,
        "y": 370.3
      },
      {
        "x": 355.6,
        "y": 379.3
      },
      {
        "x": 359.9,
        "y": 389.8
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ],
    "tradeGood": "gold"
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
        "x": 487.0,
        "y": 575.2
      },
      {
        "x": 476.8,
        "y": 589.7
      },
      {
        "x": 471.0,
        "y": 590.5
      },
      {
        "x": 459.0,
        "y": 588.9
      },
      {
        "x": 447.8,
        "y": 584.3
      },
      {
        "x": 438.1,
        "y": 576.9
      },
      {
        "x": 430.7,
        "y": 567.2
      },
      {
        "x": 426.1,
        "y": 556.0
      },
      {
        "x": 424.5,
        "y": 544.0
      },
      {
        "x": 426.1,
        "y": 532.0
      },
      {
        "x": 430.7,
        "y": 520.8
      },
      {
        "x": 438.1,
        "y": 511.1
      },
      {
        "x": 447.8,
        "y": 503.7
      },
      {
        "x": 459.0,
        "y": 499.1
      },
      {
        "x": 471.0,
        "y": 497.5
      },
      {
        "x": 480.7,
        "y": 498.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "silver"
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
        "x": 514.0,
        "y": 554.0
      },
      {
        "x": 486.6,
        "y": 570.6
      },
      {
        "x": 481.4,
        "y": 507.7
      },
      {
        "x": 485.4,
        "y": 506.1
      },
      {
        "x": 495.0,
        "y": 504.8
      },
      {
        "x": 503.1,
        "y": 505.9
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "silver"
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
        "x": 559.3,
        "y": 550.9
      },
      {
        "x": 558.2,
        "y": 553.6
      },
      {
        "x": 552.3,
        "y": 561.3
      },
      {
        "x": 549.1,
        "y": 563.8
      },
      {
        "x": 514.0,
        "y": 554.2
      },
      {
        "x": 503.2,
        "y": 506.0
      },
      {
        "x": 507.4,
        "y": 502.8
      },
      {
        "x": 511.6,
        "y": 501.1
      },
      {
        "x": 543.7,
        "y": 503.3
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ],
    "tradeGood": "timber"
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
        "x": 549.1,
        "y": 575.0
      },
      {
        "x": 547.9,
        "y": 583.8
      },
      {
        "x": 544.5,
        "y": 592.0
      },
      {
        "x": 539.1,
        "y": 599.1
      },
      {
        "x": 532.0,
        "y": 604.5
      },
      {
        "x": 523.8,
        "y": 607.9
      },
      {
        "x": 515.0,
        "y": 609.1
      },
      {
        "x": 506.2,
        "y": 607.9
      },
      {
        "x": 497.9,
        "y": 604.5
      },
      {
        "x": 490.9,
        "y": 599.1
      },
      {
        "x": 485.5,
        "y": 592.0
      },
      {
        "x": 482.1,
        "y": 583.8
      },
      {
        "x": 492.9,
        "y": 566.8
      },
      {
        "x": 513.9,
        "y": 554.1
      },
      {
        "x": 546.7,
        "y": 563.1
      },
      {
        "x": 547.9,
        "y": 566.2
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "spices"
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
        "x": 624.4,
        "y": 517.0
      },
      {
        "x": 622.9,
        "y": 528.2
      },
      {
        "x": 618.6,
        "y": 538.7
      },
      {
        "x": 611.7,
        "y": 547.7
      },
      {
        "x": 602.7,
        "y": 554.6
      },
      {
        "x": 592.2,
        "y": 558.9
      },
      {
        "x": 581.0,
        "y": 560.4
      },
      {
        "x": 569.8,
        "y": 558.9
      },
      {
        "x": 560.7,
        "y": 555.2
      },
      {
        "x": 543.4,
        "y": 502.4
      },
      {
        "x": 560.0,
        "y": 486.7
      },
      {
        "x": 618.0,
        "y": 494.5
      },
      {
        "x": 622.9,
        "y": 505.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "spices"
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
        "x": 710.3,
        "y": 625.0
      },
      {
        "x": 708.9,
        "y": 635.4
      },
      {
        "x": 704.9,
        "y": 645.1
      },
      {
        "x": 698.5,
        "y": 653.5
      },
      {
        "x": 690.1,
        "y": 659.9
      },
      {
        "x": 680.4,
        "y": 663.9
      },
      {
        "x": 673.6,
        "y": 664.8
      },
      {
        "x": 633.7,
        "y": 608.3
      },
      {
        "x": 635.1,
        "y": 604.9
      },
      {
        "x": 641.5,
        "y": 596.5
      },
      {
        "x": 649.9,
        "y": 590.1
      },
      {
        "x": 659.6,
        "y": 586.1
      },
      {
        "x": 670.0,
        "y": 584.7
      },
      {
        "x": 680.4,
        "y": 586.1
      },
      {
        "x": 690.1,
        "y": 590.1
      },
      {
        "x": 698.5,
        "y": 596.5
      },
      {
        "x": 704.9,
        "y": 604.9
      },
      {
        "x": 708.9,
        "y": 614.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "spices"
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
        "x": 675.1,
        "y": 667.0
      },
      {
        "x": 673.6,
        "y": 670.7
      },
      {
        "x": 666.7,
        "y": 679.7
      },
      {
        "x": 657.7,
        "y": 686.6
      },
      {
        "x": 652.9,
        "y": 688.6
      },
      {
        "x": 593.2,
        "y": 653.6
      },
      {
        "x": 592.6,
        "y": 649.0
      },
      {
        "x": 594.1,
        "y": 637.8
      },
      {
        "x": 598.4,
        "y": 627.3
      },
      {
        "x": 605.3,
        "y": 618.3
      },
      {
        "x": 614.3,
        "y": 611.4
      },
      {
        "x": 624.8,
        "y": 607.1
      },
      {
        "x": 632.1,
        "y": 606.1
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "grain"
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
        "x": 648.7,
        "y": 686.1
      },
      {
        "x": 649.2,
        "y": 690.0
      },
      {
        "x": 647.9,
        "y": 699.6
      },
      {
        "x": 644.2,
        "y": 708.6
      },
      {
        "x": 638.3,
        "y": 716.3
      },
      {
        "x": 630.6,
        "y": 722.2
      },
      {
        "x": 621.6,
        "y": 725.9
      },
      {
        "x": 609.2,
        "y": 726.8
      },
      {
        "x": 602.4,
        "y": 725.9
      },
      {
        "x": 593.4,
        "y": 722.2
      },
      {
        "x": 585.7,
        "y": 716.3
      },
      {
        "x": 579.8,
        "y": 708.6
      },
      {
        "x": 576.1,
        "y": 699.6
      },
      {
        "x": 574.8,
        "y": 690.0
      },
      {
        "x": 576.1,
        "y": 680.4
      },
      {
        "x": 579.8,
        "y": 671.4
      },
      {
        "x": 585.7,
        "y": 663.7
      },
      {
        "x": 593.4,
        "y": 657.8
      },
      {
        "x": 597.5,
        "y": 656.1
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "gold"
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
        "x": 621.7,
        "y": 805.7
      },
      {
        "x": 617.0,
        "y": 806.3
      },
      {
        "x": 606.6,
        "y": 804.9
      },
      {
        "x": 596.9,
        "y": 800.9
      },
      {
        "x": 588.5,
        "y": 794.5
      },
      {
        "x": 582.1,
        "y": 786.1
      },
      {
        "x": 578.1,
        "y": 776.4
      },
      {
        "x": 576.7,
        "y": 766.0
      },
      {
        "x": 578.1,
        "y": 755.6
      },
      {
        "x": 582.1,
        "y": 745.9
      },
      {
        "x": 588.5,
        "y": 737.5
      },
      {
        "x": 596.9,
        "y": 731.1
      },
      {
        "x": 606.6,
        "y": 727.1
      },
      {
        "x": 620.1,
        "y": 726.1
      },
      {
        "x": 627.4,
        "y": 727.1
      },
      {
        "x": 637.1,
        "y": 731.1
      },
      {
        "x": 643.0,
        "y": 735.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "silver"
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
        "x": 696.5,
        "y": 776.0
      },
      {
        "x": 696.1,
        "y": 779.1
      },
      {
        "x": 636.0,
        "y": 820.1
      },
      {
        "x": 626.8,
        "y": 816.3
      },
      {
        "x": 620.1,
        "y": 811.1
      },
      {
        "x": 644.6,
        "y": 730.2
      },
      {
        "x": 650.0,
        "y": 729.5
      },
      {
        "x": 662.0,
        "y": 731.1
      },
      {
        "x": 673.2,
        "y": 735.7
      },
      {
        "x": 682.9,
        "y": 743.1
      },
      {
        "x": 690.3,
        "y": 752.8
      },
      {
        "x": 694.9,
        "y": 764.0
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "gold"
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
        "x": 720.3,
        "y": 820.0
      },
      {
        "x": 718.9,
        "y": 830.4
      },
      {
        "x": 714.9,
        "y": 840.1
      },
      {
        "x": 708.5,
        "y": 848.5
      },
      {
        "x": 700.1,
        "y": 854.9
      },
      {
        "x": 690.4,
        "y": 858.9
      },
      {
        "x": 680.0,
        "y": 860.3
      },
      {
        "x": 669.6,
        "y": 858.9
      },
      {
        "x": 659.9,
        "y": 854.9
      },
      {
        "x": 651.5,
        "y": 848.5
      },
      {
        "x": 645.1,
        "y": 840.1
      },
      {
        "x": 641.1,
        "y": 830.4
      },
      {
        "x": 639.7,
        "y": 820.0
      },
      {
        "x": 640.1,
        "y": 817.3
      },
      {
        "x": 692.2,
        "y": 781.8
      },
      {
        "x": 700.1,
        "y": 785.1
      },
      {
        "x": 708.5,
        "y": 791.5
      },
      {
        "x": 714.9,
        "y": 799.9
      },
      {
        "x": 718.9,
        "y": 809.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "grain"
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
        "x": 675.3,
        "y": 920.0
      },
      {
        "x": 673.9,
        "y": 930.4
      },
      {
        "x": 669.9,
        "y": 940.1
      },
      {
        "x": 663.5,
        "y": 948.5
      },
      {
        "x": 655.1,
        "y": 954.9
      },
      {
        "x": 645.4,
        "y": 958.9
      },
      {
        "x": 635.0,
        "y": 960.3
      },
      {
        "x": 624.6,
        "y": 958.9
      },
      {
        "x": 614.9,
        "y": 954.9
      },
      {
        "x": 606.5,
        "y": 948.5
      },
      {
        "x": 600.1,
        "y": 940.1
      },
      {
        "x": 596.1,
        "y": 930.4
      },
      {
        "x": 594.7,
        "y": 920.0
      },
      {
        "x": 596.1,
        "y": 909.6
      },
      {
        "x": 600.1,
        "y": 899.9
      },
      {
        "x": 606.5,
        "y": 891.5
      },
      {
        "x": 614.9,
        "y": 885.1
      },
      {
        "x": 624.6,
        "y": 881.1
      },
      {
        "x": 635.0,
        "y": 879.7
      },
      {
        "x": 645.4,
        "y": 881.1
      },
      {
        "x": 655.1,
        "y": 885.1
      },
      {
        "x": 663.5,
        "y": 891.5
      },
      {
        "x": 669.9,
        "y": 899.9
      },
      {
        "x": 673.9,
        "y": 909.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "grain"
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
        "x": 782.4,
        "y": 938.0
      },
      {
        "x": 780.9,
        "y": 949.2
      },
      {
        "x": 776.6,
        "y": 959.7
      },
      {
        "x": 769.7,
        "y": 968.7
      },
      {
        "x": 760.7,
        "y": 975.6
      },
      {
        "x": 750.2,
        "y": 979.9
      },
      {
        "x": 739.0,
        "y": 981.4
      },
      {
        "x": 727.8,
        "y": 979.9
      },
      {
        "x": 717.3,
        "y": 975.6
      },
      {
        "x": 708.3,
        "y": 968.7
      },
      {
        "x": 701.4,
        "y": 959.7
      },
      {
        "x": 697.1,
        "y": 949.2
      },
      {
        "x": 695.6,
        "y": 938.0
      },
      {
        "x": 697.1,
        "y": 926.8
      },
      {
        "x": 701.4,
        "y": 916.3
      },
      {
        "x": 708.3,
        "y": 907.3
      },
      {
        "x": 717.3,
        "y": 900.4
      },
      {
        "x": 727.8,
        "y": 896.1
      },
      {
        "x": 739.0,
        "y": 894.6
      },
      {
        "x": 750.2,
        "y": 896.1
      },
      {
        "x": 760.7,
        "y": 900.4
      },
      {
        "x": 769.7,
        "y": 907.3
      },
      {
        "x": 776.6,
        "y": 916.3
      },
      {
        "x": 780.9,
        "y": 926.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "grain"
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
        "x": 888.3,
        "y": 779.1
      },
      {
        "x": 886.9,
        "y": 791.2
      },
      {
        "x": 882.6,
        "y": 801.7
      },
      {
        "x": 875.7,
        "y": 810.7
      },
      {
        "x": 866.7,
        "y": 817.6
      },
      {
        "x": 856.2,
        "y": 821.9
      },
      {
        "x": 845.0,
        "y": 823.4
      },
      {
        "x": 833.8,
        "y": 821.9
      },
      {
        "x": 823.3,
        "y": 817.6
      },
      {
        "x": 814.3,
        "y": 810.7
      },
      {
        "x": 807.4,
        "y": 801.7
      },
      {
        "x": 803.1,
        "y": 791.2
      },
      {
        "x": 801.6,
        "y": 780.0
      },
      {
        "x": 803.1,
        "y": 768.8
      },
      {
        "x": 807.4,
        "y": 758.3
      },
      {
        "x": 814.3,
        "y": 749.3
      },
      {
        "x": 823.3,
        "y": 742.4
      },
      {
        "x": 833.8,
        "y": 738.1
      },
      {
        "x": 845.0,
        "y": 736.6
      },
      {
        "x": 852.7,
        "y": 737.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "spices"
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
        "x": 934.3,
        "y": 738.0
      },
      {
        "x": 932.9,
        "y": 748.4
      },
      {
        "x": 928.9,
        "y": 758.1
      },
      {
        "x": 922.5,
        "y": 766.5
      },
      {
        "x": 914.1,
        "y": 772.9
      },
      {
        "x": 904.4,
        "y": 776.9
      },
      {
        "x": 894.0,
        "y": 778.3
      },
      {
        "x": 886.8,
        "y": 777.4
      },
      {
        "x": 853.8,
        "y": 738.9
      },
      {
        "x": 855.1,
        "y": 727.6
      },
      {
        "x": 859.1,
        "y": 717.9
      },
      {
        "x": 865.5,
        "y": 709.5
      },
      {
        "x": 873.9,
        "y": 703.1
      },
      {
        "x": 883.6,
        "y": 699.1
      },
      {
        "x": 894.0,
        "y": 697.7
      },
      {
        "x": 904.4,
        "y": 699.1
      },
      {
        "x": 914.1,
        "y": 703.1
      },
      {
        "x": 922.5,
        "y": 709.5
      },
      {
        "x": 928.9,
        "y": 717.9
      },
      {
        "x": 932.9,
        "y": 727.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "spices"
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
        "x": 781.7,
        "y": 703.0
      },
      {
        "x": 779.9,
        "y": 716.6
      },
      {
        "x": 774.6,
        "y": 729.4
      },
      {
        "x": 766.3,
        "y": 740.3
      },
      {
        "x": 755.4,
        "y": 748.6
      },
      {
        "x": 742.6,
        "y": 753.9
      },
      {
        "x": 729.0,
        "y": 755.7
      },
      {
        "x": 715.4,
        "y": 753.9
      },
      {
        "x": 702.6,
        "y": 748.6
      },
      {
        "x": 691.7,
        "y": 740.3
      },
      {
        "x": 683.4,
        "y": 729.4
      },
      {
        "x": 678.1,
        "y": 716.6
      },
      {
        "x": 676.3,
        "y": 703.0
      },
      {
        "x": 678.1,
        "y": 689.4
      },
      {
        "x": 683.4,
        "y": 676.6
      },
      {
        "x": 691.7,
        "y": 665.7
      },
      {
        "x": 702.6,
        "y": 657.4
      },
      {
        "x": 715.4,
        "y": 652.1
      },
      {
        "x": 729.0,
        "y": 650.3
      },
      {
        "x": 742.6,
        "y": 652.1
      },
      {
        "x": 755.4,
        "y": 657.4
      },
      {
        "x": 766.3,
        "y": 665.7
      },
      {
        "x": 774.6,
        "y": 676.6
      },
      {
        "x": 779.9,
        "y": 689.4
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ],
    "tradeGood": "timber"
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
        "x": 1083.8,
        "y": 383.0
      },
      {
        "x": 1062.3,
        "y": 420.6
      },
      {
        "x": 1056.8,
        "y": 424.7
      },
      {
        "x": 1048.4,
        "y": 421.2
      },
      {
        "x": 1040.7,
        "y": 415.3
      },
      {
        "x": 1034.8,
        "y": 407.6
      },
      {
        "x": 1031.1,
        "y": 398.6
      },
      {
        "x": 1029.8,
        "y": 389.0
      },
      {
        "x": 1031.1,
        "y": 379.4
      },
      {
        "x": 1034.8,
        "y": 370.4
      },
      {
        "x": 1040.7,
        "y": 362.7
      },
      {
        "x": 1048.4,
        "y": 356.8
      },
      {
        "x": 1057.4,
        "y": 353.1
      },
      {
        "x": 1067.0,
        "y": 351.8
      },
      {
        "x": 1071.9,
        "y": 352.4
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "spices"
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
        "x": 1121.0,
        "y": 357.0
      },
      {
        "x": 1131.2,
        "y": 401.4
      },
      {
        "x": 1127.5,
        "y": 406.4
      },
      {
        "x": 1125.8,
        "y": 406.1
      },
      {
        "x": 1083.2,
        "y": 381.6
      },
      {
        "x": 1069.9,
        "y": 347.4
      },
      {
        "x": 1072.3,
        "y": 344.3
      },
      {
        "x": 1081.3,
        "y": 337.4
      },
      {
        "x": 1082.7,
        "y": 336.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "wool"
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
        "x": 1169.8,
        "y": 385.2
      },
      {
        "x": 1130.8,
        "y": 399.6
      },
      {
        "x": 1121.1,
        "y": 357.4
      },
      {
        "x": 1146.8,
        "y": 342.5
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "iron"
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
        "x": 1124.2,
        "y": 405.2
      },
      {
        "x": 1061.5,
        "y": 422.1
      },
      {
        "x": 1084.3,
        "y": 382.2
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "silver"
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
        "x": 1140.3,
        "y": 320.7
      },
      {
        "x": 1148.2,
        "y": 340.7
      },
      {
        "x": 1121.4,
        "y": 357.2
      },
      {
        "x": 1087.4,
        "y": 339.3
      },
      {
        "x": 1087.0,
        "y": 336.5
      },
      {
        "x": 1124.3,
        "y": 312.9
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "grain"
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
        "x": 1097.4,
        "y": 277.7
      },
      {
        "x": 1119.4,
        "y": 291.1
      },
      {
        "x": 1124.5,
        "y": 312.8
      },
      {
        "x": 1089.3,
        "y": 335.1
      },
      {
        "x": 1080.9,
        "y": 329.1
      },
      {
        "x": 1075.5,
        "y": 322.1
      },
      {
        "x": 1072.1,
        "y": 313.8
      },
      {
        "x": 1070.9,
        "y": 305.0
      },
      {
        "x": 1072.1,
        "y": 296.2
      },
      {
        "x": 1075.5,
        "y": 287.9
      },
      {
        "x": 1078.4,
        "y": 284.2
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "timber"
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
        "x": 1141.7,
        "y": 277.8
      },
      {
        "x": 1166.4,
        "y": 298.5
      },
      {
        "x": 1139.1,
        "y": 320.1
      },
      {
        "x": 1124.6,
        "y": 313.0
      },
      {
        "x": 1119.4,
        "y": 291.1
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "grain"
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
        "x": 1181.6,
        "y": 307.3
      },
      {
        "x": 1171.8,
        "y": 335.4
      },
      {
        "x": 1147.9,
        "y": 339.9
      },
      {
        "x": 1139.8,
        "y": 319.5
      },
      {
        "x": 1166.8,
        "y": 298.2
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "wool"
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
        "x": 1189.6,
        "y": 350.6
      },
      {
        "x": 1181.9,
        "y": 382.8
      },
      {
        "x": 1178.3,
        "y": 384.3
      },
      {
        "x": 1168.9,
        "y": 383.5
      },
      {
        "x": 1147.2,
        "y": 343.2
      },
      {
        "x": 1148.5,
        "y": 339.8
      },
      {
        "x": 1172.1,
        "y": 335.4
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "spices"
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
        "x": 1146.6,
        "y": 264.2
      },
      {
        "x": 1172.3,
        "y": 272.8
      },
      {
        "x": 1166.6,
        "y": 297.4
      },
      {
        "x": 1142.5,
        "y": 278.5
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "wool"
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
        "x": 1194.6,
        "y": 249.9
      },
      {
        "x": 1193.5,
        "y": 254.9
      },
      {
        "x": 1172.1,
        "y": 272.7
      },
      {
        "x": 1147.1,
        "y": 264.4
      },
      {
        "x": 1143.4,
        "y": 249.0
      },
      {
        "x": 1152.0,
        "y": 228.4
      },
      {
        "x": 1155.2,
        "y": 227.1
      },
      {
        "x": 1164.0,
        "y": 225.9
      },
      {
        "x": 1172.8,
        "y": 227.1
      },
      {
        "x": 1181.0,
        "y": 230.5
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "spices"
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
        "x": 1105.8,
        "y": 258.4
      },
      {
        "x": 1143.6,
        "y": 250.0
      },
      {
        "x": 1146.9,
        "y": 263.3
      },
      {
        "x": 1142.8,
        "y": 277.2
      },
      {
        "x": 1119.3,
        "y": 291.1
      },
      {
        "x": 1096.6,
        "y": 277.2
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "wool"
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
        "x": 1142.9,
        "y": 250.1
      },
      {
        "x": 1106.8,
        "y": 258.1
      },
      {
        "x": 1101.7,
        "y": 232.7
      },
      {
        "x": 1148.5,
        "y": 222.3
      },
      {
        "x": 1150.5,
        "y": 224.9
      },
      {
        "x": 1152.0,
        "y": 228.4
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "iron"
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
        "x": 1152.2,
        "y": 215.0
      },
      {
        "x": 1151.3,
        "y": 221.7
      },
      {
        "x": 1101.4,
        "y": 232.8
      },
      {
        "x": 1078.1,
        "y": 212.9
      },
      {
        "x": 1079.1,
        "y": 205.4
      },
      {
        "x": 1082.8,
        "y": 196.4
      },
      {
        "x": 1088.7,
        "y": 188.7
      },
      {
        "x": 1096.4,
        "y": 182.8
      },
      {
        "x": 1105.4,
        "y": 179.1
      },
      {
        "x": 1115.0,
        "y": 177.8
      },
      {
        "x": 1124.6,
        "y": 179.1
      },
      {
        "x": 1133.6,
        "y": 182.8
      },
      {
        "x": 1141.3,
        "y": 188.7
      },
      {
        "x": 1147.2,
        "y": 196.4
      },
      {
        "x": 1150.9,
        "y": 205.4
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "wool"
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
        "x": 1101.8,
        "y": 233.1
      },
      {
        "x": 1106.6,
        "y": 256.8
      },
      {
        "x": 1096.1,
        "y": 278.1
      },
      {
        "x": 1076.3,
        "y": 284.9
      },
      {
        "x": 1067.4,
        "y": 281.2
      },
      {
        "x": 1059.7,
        "y": 275.3
      },
      {
        "x": 1053.8,
        "y": 267.6
      },
      {
        "x": 1050.1,
        "y": 258.6
      },
      {
        "x": 1048.8,
        "y": 249.0
      },
      {
        "x": 1050.1,
        "y": 239.4
      },
      {
        "x": 1053.8,
        "y": 230.4
      },
      {
        "x": 1059.7,
        "y": 222.7
      },
      {
        "x": 1067.4,
        "y": 216.8
      },
      {
        "x": 1076.4,
        "y": 213.1
      },
      {
        "x": 1078.0,
        "y": 212.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "grain"
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
        "x": 1204.2,
        "y": 284.8
      },
      {
        "x": 1181.7,
        "y": 307.3
      },
      {
        "x": 1167.8,
        "y": 298.8
      },
      {
        "x": 1167.0,
        "y": 296.0
      },
      {
        "x": 1172.4,
        "y": 272.5
      },
      {
        "x": 1193.6,
        "y": 254.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "iron"
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
        "x": 1215.0,
        "y": 289.1
      },
      {
        "x": 1224.5,
        "y": 301.9
      },
      {
        "x": 1223.3,
        "y": 319.1
      },
      {
        "x": 1198.3,
        "y": 319.1
      },
      {
        "x": 1181.7,
        "y": 307.3
      },
      {
        "x": 1204.2,
        "y": 284.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "grain"
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
        "x": 1213.8,
        "y": 248.7
      },
      {
        "x": 1234.0,
        "y": 268.8
      },
      {
        "x": 1215.1,
        "y": 289.1
      },
      {
        "x": 1204.2,
        "y": 284.8
      },
      {
        "x": 1193.5,
        "y": 254.5
      },
      {
        "x": 1194.6,
        "y": 249.9
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "silver"
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
        "x": 1254.6,
        "y": 286.1
      },
      {
        "x": 1225.2,
        "y": 302.8
      },
      {
        "x": 1215.1,
        "y": 289.2
      },
      {
        "x": 1233.8,
        "y": 269.0
      },
      {
        "x": 1244.3,
        "y": 270.9
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "iron"
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
        "x": 1260.6,
        "y": 229.6
      },
      {
        "x": 1245.7,
        "y": 271.2
      },
      {
        "x": 1234.2,
        "y": 269.1
      },
      {
        "x": 1213.6,
        "y": 248.5
      },
      {
        "x": 1248.6,
        "y": 218.6
      },
      {
        "x": 1256.0,
        "y": 219.5
      },
      {
        "x": 1257.9,
        "y": 220.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "timber"
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
        "x": 1270.6,
        "y": 292.9
      },
      {
        "x": 1243.6,
        "y": 345.0
      },
      {
        "x": 1236.2,
        "y": 342.1
      },
      {
        "x": 1223.1,
        "y": 320.7
      },
      {
        "x": 1224.4,
        "y": 303.2
      },
      {
        "x": 1255.1,
        "y": 285.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "silver"
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
        "x": 1308.6,
        "y": 317.3
      },
      {
        "x": 1308.8,
        "y": 319.2
      },
      {
        "x": 1249.0,
        "y": 349.1
      },
      {
        "x": 1244.1,
        "y": 344.0
      },
      {
        "x": 1270.0,
        "y": 294.2
      },
      {
        "x": 1286.9,
        "y": 292.5
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "grain"
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
        "x": 1248.1,
        "y": 217.3
      },
      {
        "x": 1248.3,
        "y": 218.9
      },
      {
        "x": 1213.3,
        "y": 248.7
      },
      {
        "x": 1194.6,
        "y": 249.9
      },
      {
        "x": 1181.7,
        "y": 231.1
      },
      {
        "x": 1180.9,
        "y": 225.0
      },
      {
        "x": 1182.1,
        "y": 216.2
      },
      {
        "x": 1185.5,
        "y": 207.9
      },
      {
        "x": 1188.3,
        "y": 204.2
      },
      {
        "x": 1216.8,
        "y": 195.9
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "timber"
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
        "x": 1217.5,
        "y": 195.7
      },
      {
        "x": 1186.5,
        "y": 204.8
      },
      {
        "x": 1180.4,
        "y": 202.2
      },
      {
        "x": 1172.7,
        "y": 196.3
      },
      {
        "x": 1166.8,
        "y": 188.6
      },
      {
        "x": 1163.1,
        "y": 179.6
      },
      {
        "x": 1161.8,
        "y": 170.0
      },
      {
        "x": 1163.1,
        "y": 160.4
      },
      {
        "x": 1166.8,
        "y": 151.4
      },
      {
        "x": 1172.7,
        "y": 143.7
      },
      {
        "x": 1180.4,
        "y": 137.8
      },
      {
        "x": 1189.4,
        "y": 134.1
      },
      {
        "x": 1199.0,
        "y": 132.8
      },
      {
        "x": 1208.6,
        "y": 134.1
      },
      {
        "x": 1217.6,
        "y": 137.8
      },
      {
        "x": 1225.3,
        "y": 143.7
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "timber"
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
        "x": 1290.4,
        "y": 178.0
      },
      {
        "x": 1288.9,
        "y": 189.2
      },
      {
        "x": 1286.5,
        "y": 195.1
      },
      {
        "x": 1256.7,
        "y": 219.6
      },
      {
        "x": 1250.4,
        "y": 218.9
      },
      {
        "x": 1217.4,
        "y": 196.4
      },
      {
        "x": 1226.8,
        "y": 139.8
      },
      {
        "x": 1235.8,
        "y": 136.1
      },
      {
        "x": 1247.0,
        "y": 134.6
      },
      {
        "x": 1258.2,
        "y": 136.1
      },
      {
        "x": 1268.7,
        "y": 140.4
      },
      {
        "x": 1277.7,
        "y": 147.3
      },
      {
        "x": 1284.6,
        "y": 156.3
      },
      {
        "x": 1288.9,
        "y": 166.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "iron"
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
        "x": 1296.3,
        "y": 264.4
      },
      {
        "x": 1286.9,
        "y": 292.5
      },
      {
        "x": 1272.8,
        "y": 293.9
      },
      {
        "x": 1254.1,
        "y": 285.4
      },
      {
        "x": 1245.3,
        "y": 272.4
      },
      {
        "x": 1261.2,
        "y": 227.9
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "grain"
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
        "x": 1333.5,
        "y": 240.9
      },
      {
        "x": 1295.9,
        "y": 263.9
      },
      {
        "x": 1259.5,
        "y": 226.2
      },
      {
        "x": 1257.4,
        "y": 219.1
      },
      {
        "x": 1285.6,
        "y": 195.8
      },
      {
        "x": 1294.0,
        "y": 194.7
      },
      {
        "x": 1304.4,
        "y": 196.1
      },
      {
        "x": 1306.8,
        "y": 197.1
      },
      {
        "x": 1330.3,
        "y": 221.1
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "timber"
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
        "x": 1198.5,
        "y": 319.2
      },
      {
        "x": 1193.4,
        "y": 348.2
      },
      {
        "x": 1189.7,
        "y": 350.7
      },
      {
        "x": 1171.9,
        "y": 335.2
      },
      {
        "x": 1181.4,
        "y": 307.9
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "iron"
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
        "x": 1235.5,
        "y": 341.3
      },
      {
        "x": 1233.9,
        "y": 341.9
      },
      {
        "x": 1193.3,
        "y": 348.7
      },
      {
        "x": 1198.5,
        "y": 319.1
      },
      {
        "x": 1222.2,
        "y": 319.1
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "spices"
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
        "x": 1204.0,
        "y": 380.5
      },
      {
        "x": 1181.6,
        "y": 383.9
      },
      {
        "x": 1189.5,
        "y": 350.8
      },
      {
        "x": 1192.4,
        "y": 348.8
      },
      {
        "x": 1235.4,
        "y": 341.7
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "grain"
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
        "x": 1254.6,
        "y": 367.9
      },
      {
        "x": 1247.2,
        "y": 390.8
      },
      {
        "x": 1204.3,
        "y": 380.1
      },
      {
        "x": 1235.6,
        "y": 341.9
      },
      {
        "x": 1245.9,
        "y": 345.8
      },
      {
        "x": 1247.1,
        "y": 347.1
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "grain"
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
        "x": 1245.9,
        "y": 390.5
      },
      {
        "x": 1247.1,
        "y": 405.8
      },
      {
        "x": 1215.1,
        "y": 429.1
      },
      {
        "x": 1206.2,
        "y": 427.9
      },
      {
        "x": 1199.5,
        "y": 425.2
      },
      {
        "x": 1181.9,
        "y": 387.7
      },
      {
        "x": 1182.1,
        "y": 386.2
      },
      {
        "x": 1183.1,
        "y": 383.7
      },
      {
        "x": 1205.2,
        "y": 380.3
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "grain"
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
        "x": 1316.5,
        "y": 334.5
      },
      {
        "x": 1304.3,
        "y": 372.4
      },
      {
        "x": 1254.1,
        "y": 366.5
      },
      {
        "x": 1248.0,
        "y": 349.6
      },
      {
        "x": 1310.7,
        "y": 318.2
      },
      {
        "x": 1312.6,
        "y": 319.2
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "iron"
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
        "x": 1315.3,
        "y": 401.1
      },
      {
        "x": 1312.2,
        "y": 408.6
      },
      {
        "x": 1306.3,
        "y": 416.3
      },
      {
        "x": 1298.6,
        "y": 422.2
      },
      {
        "x": 1289.6,
        "y": 425.9
      },
      {
        "x": 1284.4,
        "y": 426.6
      },
      {
        "x": 1247.1,
        "y": 406.3
      },
      {
        "x": 1246.2,
        "y": 393.9
      },
      {
        "x": 1255.0,
        "y": 366.6
      },
      {
        "x": 1302.9,
        "y": 372.3
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "spices"
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
        "x": 1384.8,
        "y": 181.2
      },
      {
        "x": 1332.9,
        "y": 223.3
      },
      {
        "x": 1306.7,
        "y": 196.9
      },
      {
        "x": 1306.1,
        "y": 195.4
      },
      {
        "x": 1304.7,
        "y": 185.0
      },
      {
        "x": 1306.1,
        "y": 174.6
      },
      {
        "x": 1310.1,
        "y": 164.8
      },
      {
        "x": 1316.5,
        "y": 156.5
      },
      {
        "x": 1324.8,
        "y": 150.1
      },
      {
        "x": 1334.6,
        "y": 146.1
      },
      {
        "x": 1345.0,
        "y": 144.7
      },
      {
        "x": 1355.4,
        "y": 146.1
      },
      {
        "x": 1365.2,
        "y": 150.1
      },
      {
        "x": 1373.5,
        "y": 156.5
      },
      {
        "x": 1379.9,
        "y": 164.8
      },
      {
        "x": 1383.9,
        "y": 174.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "timber"
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
        "x": 1414.8,
        "y": 245.8
      },
      {
        "x": 1412.0,
        "y": 249.5
      },
      {
        "x": 1391.1,
        "y": 265.2
      },
      {
        "x": 1387.0,
        "y": 266.9
      },
      {
        "x": 1375.0,
        "y": 268.5
      },
      {
        "x": 1363.0,
        "y": 266.9
      },
      {
        "x": 1357.9,
        "y": 264.8
      },
      {
        "x": 1333.7,
        "y": 241.8
      },
      {
        "x": 1330.9,
        "y": 224.9
      },
      {
        "x": 1388.9,
        "y": 177.9
      },
      {
        "x": 1398.2,
        "y": 181.7
      },
      {
        "x": 1407.9,
        "y": 189.1
      },
      {
        "x": 1414.8,
        "y": 198.2
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "timber"
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
        "x": 1360.3,
        "y": 280.0
      },
      {
        "x": 1358.9,
        "y": 290.4
      },
      {
        "x": 1357.1,
        "y": 294.9
      },
      {
        "x": 1312.3,
        "y": 319.0
      },
      {
        "x": 1308.3,
        "y": 317.0
      },
      {
        "x": 1286.9,
        "y": 292.6
      },
      {
        "x": 1296.6,
        "y": 263.5
      },
      {
        "x": 1333.3,
        "y": 242.3
      },
      {
        "x": 1334.8,
        "y": 242.9
      },
      {
        "x": 1356.3,
        "y": 263.3
      },
      {
        "x": 1358.9,
        "y": 269.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "grain"
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
        "x": 1385.2,
        "y": 332.0
      },
      {
        "x": 1383.9,
        "y": 341.6
      },
      {
        "x": 1380.2,
        "y": 350.6
      },
      {
        "x": 1375.7,
        "y": 356.4
      },
      {
        "x": 1317.5,
        "y": 338.8
      },
      {
        "x": 1312.9,
        "y": 320.4
      },
      {
        "x": 1313.8,
        "y": 318.2
      },
      {
        "x": 1355.5,
        "y": 295.8
      },
      {
        "x": 1357.6,
        "y": 296.1
      },
      {
        "x": 1366.6,
        "y": 299.8
      },
      {
        "x": 1374.3,
        "y": 305.7
      },
      {
        "x": 1380.2,
        "y": 313.4
      },
      {
        "x": 1383.9,
        "y": 322.4
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "saltpeter"
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
        "x": 1495.4,
        "y": 222.0
      },
      {
        "x": 1493.9,
        "y": 233.2
      },
      {
        "x": 1489.6,
        "y": 243.7
      },
      {
        "x": 1482.7,
        "y": 252.7
      },
      {
        "x": 1473.7,
        "y": 259.6
      },
      {
        "x": 1465.2,
        "y": 263.1
      },
      {
        "x": 1418.5,
        "y": 249.1
      },
      {
        "x": 1414.8,
        "y": 244.2
      },
      {
        "x": 1414.8,
        "y": 199.8
      },
      {
        "x": 1421.3,
        "y": 191.3
      },
      {
        "x": 1430.3,
        "y": 184.4
      },
      {
        "x": 1440.8,
        "y": 180.1
      },
      {
        "x": 1452.0,
        "y": 178.6
      },
      {
        "x": 1463.2,
        "y": 180.1
      },
      {
        "x": 1473.7,
        "y": 184.4
      },
      {
        "x": 1482.7,
        "y": 191.3
      },
      {
        "x": 1489.6,
        "y": 200.3
      },
      {
        "x": 1493.9,
        "y": 210.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "wool"
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
        "x": 1479.6,
        "y": 295.0
      },
      {
        "x": 1477.9,
        "y": 307.8
      },
      {
        "x": 1473.0,
        "y": 319.8
      },
      {
        "x": 1465.1,
        "y": 330.1
      },
      {
        "x": 1454.8,
        "y": 338.0
      },
      {
        "x": 1442.8,
        "y": 342.9
      },
      {
        "x": 1430.0,
        "y": 344.6
      },
      {
        "x": 1417.2,
        "y": 342.9
      },
      {
        "x": 1405.2,
        "y": 338.0
      },
      {
        "x": 1394.9,
        "y": 330.1
      },
      {
        "x": 1387.0,
        "y": 319.8
      },
      {
        "x": 1382.1,
        "y": 307.8
      },
      {
        "x": 1380.4,
        "y": 295.0
      },
      {
        "x": 1382.1,
        "y": 282.2
      },
      {
        "x": 1387.0,
        "y": 270.2
      },
      {
        "x": 1390.5,
        "y": 265.7
      },
      {
        "x": 1412.8,
        "y": 248.9
      },
      {
        "x": 1415.0,
        "y": 248.0
      },
      {
        "x": 1468.2,
        "y": 264.1
      },
      {
        "x": 1473.0,
        "y": 270.2
      },
      {
        "x": 1477.9,
        "y": 282.2
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ],
    "tradeGood": "grain"
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
        "x": 1633.8,
        "y": 192.0
      },
      {
        "x": 1631.9,
        "y": 206.4
      },
      {
        "x": 1626.3,
        "y": 219.9
      },
      {
        "x": 1617.5,
        "y": 231.5
      },
      {
        "x": 1605.9,
        "y": 240.3
      },
      {
        "x": 1592.4,
        "y": 245.9
      },
      {
        "x": 1578.0,
        "y": 247.8
      },
      {
        "x": 1563.6,
        "y": 245.9
      },
      {
        "x": 1550.1,
        "y": 240.3
      },
      {
        "x": 1538.5,
        "y": 231.5
      },
      {
        "x": 1529.7,
        "y": 219.9
      },
      {
        "x": 1524.1,
        "y": 206.4
      },
      {
        "x": 1522.2,
        "y": 192.0
      },
      {
        "x": 1524.1,
        "y": 177.6
      },
      {
        "x": 1529.7,
        "y": 164.1
      },
      {
        "x": 1538.5,
        "y": 152.5
      },
      {
        "x": 1550.1,
        "y": 143.7
      },
      {
        "x": 1563.6,
        "y": 138.1
      },
      {
        "x": 1578.0,
        "y": 136.2
      },
      {
        "x": 1592.4,
        "y": 138.1
      },
      {
        "x": 1605.9,
        "y": 143.7
      },
      {
        "x": 1617.5,
        "y": 152.5
      },
      {
        "x": 1626.3,
        "y": 164.1
      },
      {
        "x": 1631.9,
        "y": 177.6
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ],
    "tradeGood": "timber"
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
        "x": 1383.7,
        "y": 358.8
      },
      {
        "x": 1384.5,
        "y": 365.0
      },
      {
        "x": 1382.9,
        "y": 377.0
      },
      {
        "x": 1378.3,
        "y": 388.2
      },
      {
        "x": 1374.2,
        "y": 393.5
      },
      {
        "x": 1333.9,
        "y": 411.0
      },
      {
        "x": 1326.0,
        "y": 409.9
      },
      {
        "x": 1317.7,
        "y": 406.5
      },
      {
        "x": 1303.7,
        "y": 374.2
      },
      {
        "x": 1315.3,
        "y": 338.1
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "spices"
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
        "x": 1391.9,
        "y": 459.4
      },
      {
        "x": 1385.6,
        "y": 464.2
      },
      {
        "x": 1376.6,
        "y": 467.9
      },
      {
        "x": 1370.9,
        "y": 468.7
      },
      {
        "x": 1331.6,
        "y": 421.0
      },
      {
        "x": 1334.8,
        "y": 413.4
      },
      {
        "x": 1338.0,
        "y": 409.2
      },
      {
        "x": 1370.3,
        "y": 395.2
      },
      {
        "x": 1376.6,
        "y": 396.1
      },
      {
        "x": 1385.6,
        "y": 399.8
      },
      {
        "x": 1393.0,
        "y": 405.4
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "spices"
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
        "x": 1439.1,
        "y": 468.4
      },
      {
        "x": 1430.4,
        "y": 471.9
      },
      {
        "x": 1420.0,
        "y": 473.3
      },
      {
        "x": 1409.6,
        "y": 471.9
      },
      {
        "x": 1399.8,
        "y": 467.9
      },
      {
        "x": 1391.9,
        "y": 461.8
      },
      {
        "x": 1393.0,
        "y": 403.4
      },
      {
        "x": 1399.8,
        "y": 398.1
      },
      {
        "x": 1409.6,
        "y": 394.1
      },
      {
        "x": 1420.0,
        "y": 392.7
      },
      {
        "x": 1430.4,
        "y": 394.1
      },
      {
        "x": 1440.2,
        "y": 398.1
      },
      {
        "x": 1447.2,
        "y": 403.5
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "grain"
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
        "x": 1511.4,
        "y": 439.0
      },
      {
        "x": 1509.9,
        "y": 450.2
      },
      {
        "x": 1505.6,
        "y": 460.7
      },
      {
        "x": 1498.7,
        "y": 469.7
      },
      {
        "x": 1489.7,
        "y": 476.6
      },
      {
        "x": 1479.2,
        "y": 480.9
      },
      {
        "x": 1468.0,
        "y": 482.4
      },
      {
        "x": 1456.8,
        "y": 480.9
      },
      {
        "x": 1446.3,
        "y": 476.6
      },
      {
        "x": 1438.7,
        "y": 470.8
      },
      {
        "x": 1447.5,
        "y": 400.9
      },
      {
        "x": 1456.8,
        "y": 397.1
      },
      {
        "x": 1468.0,
        "y": 395.6
      },
      {
        "x": 1479.2,
        "y": 397.1
      },
      {
        "x": 1489.7,
        "y": 401.4
      },
      {
        "x": 1498.7,
        "y": 408.3
      },
      {
        "x": 1505.6,
        "y": 417.3
      },
      {
        "x": 1509.9,
        "y": 427.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "spices"
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
        "x": 1430.3,
        "y": 522.0
      },
      {
        "x": 1428.9,
        "y": 532.4
      },
      {
        "x": 1424.9,
        "y": 542.1
      },
      {
        "x": 1418.5,
        "y": 550.5
      },
      {
        "x": 1410.2,
        "y": 556.9
      },
      {
        "x": 1400.4,
        "y": 560.9
      },
      {
        "x": 1398.4,
        "y": 561.2
      },
      {
        "x": 1375.4,
        "y": 556.0
      },
      {
        "x": 1351.2,
        "y": 532.8
      },
      {
        "x": 1349.7,
        "y": 522.0
      },
      {
        "x": 1351.1,
        "y": 511.6
      },
      {
        "x": 1355.1,
        "y": 501.9
      },
      {
        "x": 1361.5,
        "y": 493.5
      },
      {
        "x": 1369.8,
        "y": 487.1
      },
      {
        "x": 1379.6,
        "y": 483.1
      },
      {
        "x": 1390.0,
        "y": 481.7
      },
      {
        "x": 1400.4,
        "y": 483.1
      },
      {
        "x": 1410.2,
        "y": 487.1
      },
      {
        "x": 1418.5,
        "y": 493.5
      },
      {
        "x": 1424.9,
        "y": 501.8
      },
      {
        "x": 1428.9,
        "y": 511.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "spices"
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
        "x": 1374.3,
        "y": 472.8
      },
      {
        "x": 1370.6,
        "y": 481.7
      },
      {
        "x": 1363.7,
        "y": 490.7
      },
      {
        "x": 1354.7,
        "y": 497.6
      },
      {
        "x": 1344.2,
        "y": 501.9
      },
      {
        "x": 1333.0,
        "y": 503.4
      },
      {
        "x": 1321.8,
        "y": 501.9
      },
      {
        "x": 1311.3,
        "y": 497.6
      },
      {
        "x": 1302.3,
        "y": 490.7
      },
      {
        "x": 1295.4,
        "y": 481.7
      },
      {
        "x": 1291.1,
        "y": 471.2
      },
      {
        "x": 1289.6,
        "y": 460.0
      },
      {
        "x": 1291.1,
        "y": 448.8
      },
      {
        "x": 1295.4,
        "y": 438.3
      },
      {
        "x": 1302.3,
        "y": 429.3
      },
      {
        "x": 1311.3,
        "y": 422.4
      },
      {
        "x": 1321.8,
        "y": 418.1
      },
      {
        "x": 1328.5,
        "y": 417.2
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "grain"
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
        "x": 1290.3,
        "y": 445.0
      },
      {
        "x": 1288.9,
        "y": 455.4
      },
      {
        "x": 1284.9,
        "y": 465.1
      },
      {
        "x": 1278.5,
        "y": 473.5
      },
      {
        "x": 1270.2,
        "y": 479.9
      },
      {
        "x": 1260.4,
        "y": 483.9
      },
      {
        "x": 1250.0,
        "y": 485.3
      },
      {
        "x": 1239.6,
        "y": 483.9
      },
      {
        "x": 1229.8,
        "y": 479.9
      },
      {
        "x": 1221.5,
        "y": 473.5
      },
      {
        "x": 1215.1,
        "y": 465.1
      },
      {
        "x": 1211.1,
        "y": 455.4
      },
      {
        "x": 1209.7,
        "y": 445.0
      },
      {
        "x": 1211.1,
        "y": 434.6
      },
      {
        "x": 1212.6,
        "y": 430.8
      },
      {
        "x": 1247.4,
        "y": 406.5
      },
      {
        "x": 1286.0,
        "y": 427.5
      },
      {
        "x": 1288.9,
        "y": 434.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "saltpeter"
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
        "x": 1201.2,
        "y": 428.6
      },
      {
        "x": 1200.9,
        "y": 430.4
      },
      {
        "x": 1196.9,
        "y": 440.1
      },
      {
        "x": 1190.5,
        "y": 448.5
      },
      {
        "x": 1182.2,
        "y": 454.9
      },
      {
        "x": 1172.4,
        "y": 458.9
      },
      {
        "x": 1162.0,
        "y": 460.3
      },
      {
        "x": 1151.6,
        "y": 458.9
      },
      {
        "x": 1141.8,
        "y": 454.9
      },
      {
        "x": 1133.5,
        "y": 448.5
      },
      {
        "x": 1130.7,
        "y": 444.9
      },
      {
        "x": 1126.8,
        "y": 407.2
      },
      {
        "x": 1133.3,
        "y": 398.7
      },
      {
        "x": 1173.3,
        "y": 383.9
      },
      {
        "x": 1180.4,
        "y": 384.5
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "grain"
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
        "x": 1130.8,
        "y": 445.1
      },
      {
        "x": 1129.9,
        "y": 447.1
      },
      {
        "x": 1123.5,
        "y": 455.5
      },
      {
        "x": 1115.2,
        "y": 461.9
      },
      {
        "x": 1105.4,
        "y": 465.9
      },
      {
        "x": 1095.0,
        "y": 467.3
      },
      {
        "x": 1084.6,
        "y": 465.9
      },
      {
        "x": 1074.8,
        "y": 461.9
      },
      {
        "x": 1066.5,
        "y": 455.5
      },
      {
        "x": 1060.1,
        "y": 447.1
      },
      {
        "x": 1056.1,
        "y": 437.4
      },
      {
        "x": 1054.7,
        "y": 427.0
      },
      {
        "x": 1059.6,
        "y": 422.6
      },
      {
        "x": 1122.6,
        "y": 405.6
      },
      {
        "x": 1126.7,
        "y": 406.2
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "grain"
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
        "x": 1151.4,
        "y": 562.0
      },
      {
        "x": 1150.1,
        "y": 572.0
      },
      {
        "x": 1103.2,
        "y": 604.8
      },
      {
        "x": 1096.8,
        "y": 603.9
      },
      {
        "x": 1086.3,
        "y": 599.6
      },
      {
        "x": 1077.3,
        "y": 592.7
      },
      {
        "x": 1070.4,
        "y": 583.7
      },
      {
        "x": 1066.1,
        "y": 573.2
      },
      {
        "x": 1064.6,
        "y": 562.0
      },
      {
        "x": 1066.1,
        "y": 550.8
      },
      {
        "x": 1070.4,
        "y": 540.3
      },
      {
        "x": 1077.3,
        "y": 531.3
      },
      {
        "x": 1086.3,
        "y": 524.4
      },
      {
        "x": 1096.8,
        "y": 520.1
      },
      {
        "x": 1108.0,
        "y": 518.6
      },
      {
        "x": 1119.2,
        "y": 520.1
      },
      {
        "x": 1129.7,
        "y": 524.4
      },
      {
        "x": 1138.7,
        "y": 531.3
      },
      {
        "x": 1145.6,
        "y": 540.3
      },
      {
        "x": 1149.9,
        "y": 550.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "gold"
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
        "x": 1188.4,
        "y": 615.0
      },
      {
        "x": 1186.9,
        "y": 626.2
      },
      {
        "x": 1182.6,
        "y": 636.7
      },
      {
        "x": 1175.7,
        "y": 645.7
      },
      {
        "x": 1166.7,
        "y": 652.6
      },
      {
        "x": 1156.2,
        "y": 656.9
      },
      {
        "x": 1145.0,
        "y": 658.4
      },
      {
        "x": 1133.8,
        "y": 656.9
      },
      {
        "x": 1123.3,
        "y": 652.6
      },
      {
        "x": 1114.3,
        "y": 645.7
      },
      {
        "x": 1107.4,
        "y": 636.7
      },
      {
        "x": 1103.1,
        "y": 626.2
      },
      {
        "x": 1101.6,
        "y": 615.0
      },
      {
        "x": 1102.9,
        "y": 605.0
      },
      {
        "x": 1149.8,
        "y": 572.2
      },
      {
        "x": 1156.2,
        "y": 573.1
      },
      {
        "x": 1166.7,
        "y": 577.4
      },
      {
        "x": 1175.7,
        "y": 584.3
      },
      {
        "x": 1182.6,
        "y": 593.3
      },
      {
        "x": 1186.9,
        "y": 603.8
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ],
    "tradeGood": "grain"
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
        "x": 1277.6,
        "y": 714.0
      },
      {
        "x": 1275.9,
        "y": 726.8
      },
      {
        "x": 1271.0,
        "y": 738.8
      },
      {
        "x": 1263.1,
        "y": 749.1
      },
      {
        "x": 1252.8,
        "y": 757.0
      },
      {
        "x": 1240.8,
        "y": 761.9
      },
      {
        "x": 1228.0,
        "y": 763.6
      },
      {
        "x": 1215.2,
        "y": 761.9
      },
      {
        "x": 1203.2,
        "y": 757.0
      },
      {
        "x": 1192.9,
        "y": 749.1
      },
      {
        "x": 1185.0,
        "y": 738.8
      },
      {
        "x": 1180.1,
        "y": 726.8
      },
      {
        "x": 1178.4,
        "y": 714.0
      },
      {
        "x": 1180.1,
        "y": 701.2
      },
      {
        "x": 1185.0,
        "y": 689.2
      },
      {
        "x": 1192.9,
        "y": 678.9
      },
      {
        "x": 1203.2,
        "y": 671.0
      },
      {
        "x": 1215.2,
        "y": 666.1
      },
      {
        "x": 1228.0,
        "y": 664.4
      },
      {
        "x": 1240.8,
        "y": 666.1
      },
      {
        "x": 1252.8,
        "y": 671.0
      },
      {
        "x": 1263.1,
        "y": 678.9
      },
      {
        "x": 1271.0,
        "y": 689.2
      },
      {
        "x": 1275.9,
        "y": 701.2
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ],
    "tradeGood": "timber"
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
        "x": 1338.7,
        "y": 611.9
      },
      {
        "x": 1331.6,
        "y": 610.9
      },
      {
        "x": 1321.8,
        "y": 606.9
      },
      {
        "x": 1313.5,
        "y": 600.5
      },
      {
        "x": 1307.1,
        "y": 592.1
      },
      {
        "x": 1303.1,
        "y": 582.4
      },
      {
        "x": 1301.7,
        "y": 572.0
      },
      {
        "x": 1303.1,
        "y": 561.6
      },
      {
        "x": 1307.1,
        "y": 551.9
      },
      {
        "x": 1313.5,
        "y": 543.5
      },
      {
        "x": 1321.8,
        "y": 537.1
      },
      {
        "x": 1331.6,
        "y": 533.1
      },
      {
        "x": 1342.0,
        "y": 531.7
      },
      {
        "x": 1351.3,
        "y": 532.9
      },
      {
        "x": 1375.4,
        "y": 556.0
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ],
    "tradeGood": "grain"
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
        "x": 1414.3,
        "y": 593.0
      },
      {
        "x": 1412.9,
        "y": 603.4
      },
      {
        "x": 1408.9,
        "y": 613.1
      },
      {
        "x": 1402.5,
        "y": 621.5
      },
      {
        "x": 1394.2,
        "y": 627.9
      },
      {
        "x": 1384.4,
        "y": 631.9
      },
      {
        "x": 1374.0,
        "y": 633.3
      },
      {
        "x": 1363.6,
        "y": 631.9
      },
      {
        "x": 1353.8,
        "y": 627.9
      },
      {
        "x": 1345.5,
        "y": 621.5
      },
      {
        "x": 1339.1,
        "y": 613.1
      },
      {
        "x": 1375.4,
        "y": 556.0
      },
      {
        "x": 1398.1,
        "y": 561.1
      },
      {
        "x": 1402.5,
        "y": 564.5
      },
      {
        "x": 1408.9,
        "y": 572.9
      },
      {
        "x": 1412.9,
        "y": 582.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "grain"
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
        "x": 1429.4,
        "y": 727.0
      },
      {
        "x": 1427.9,
        "y": 738.2
      },
      {
        "x": 1423.6,
        "y": 748.7
      },
      {
        "x": 1416.7,
        "y": 757.7
      },
      {
        "x": 1407.7,
        "y": 764.6
      },
      {
        "x": 1397.2,
        "y": 768.9
      },
      {
        "x": 1386.0,
        "y": 770.4
      },
      {
        "x": 1374.8,
        "y": 768.9
      },
      {
        "x": 1364.3,
        "y": 764.6
      },
      {
        "x": 1355.3,
        "y": 757.7
      },
      {
        "x": 1348.4,
        "y": 748.7
      },
      {
        "x": 1344.1,
        "y": 738.2
      },
      {
        "x": 1342.6,
        "y": 727.0
      },
      {
        "x": 1344.1,
        "y": 715.8
      },
      {
        "x": 1348.4,
        "y": 705.3
      },
      {
        "x": 1355.3,
        "y": 696.3
      },
      {
        "x": 1364.3,
        "y": 689.4
      },
      {
        "x": 1374.8,
        "y": 685.1
      },
      {
        "x": 1386.0,
        "y": 683.6
      },
      {
        "x": 1397.2,
        "y": 685.1
      },
      {
        "x": 1407.7,
        "y": 689.4
      },
      {
        "x": 1416.7,
        "y": 696.3
      },
      {
        "x": 1423.6,
        "y": 705.3
      },
      {
        "x": 1427.9,
        "y": 715.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "spices"
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
        "x": 1292.4,
        "y": 939.0
      },
      {
        "x": 1290.9,
        "y": 950.2
      },
      {
        "x": 1286.6,
        "y": 960.7
      },
      {
        "x": 1279.7,
        "y": 969.7
      },
      {
        "x": 1270.7,
        "y": 976.6
      },
      {
        "x": 1260.2,
        "y": 980.9
      },
      {
        "x": 1249.0,
        "y": 982.4
      },
      {
        "x": 1237.8,
        "y": 980.9
      },
      {
        "x": 1227.3,
        "y": 976.6
      },
      {
        "x": 1218.3,
        "y": 969.7
      },
      {
        "x": 1211.4,
        "y": 960.7
      },
      {
        "x": 1207.1,
        "y": 950.2
      },
      {
        "x": 1205.6,
        "y": 939.0
      },
      {
        "x": 1207.1,
        "y": 927.8
      },
      {
        "x": 1211.4,
        "y": 917.3
      },
      {
        "x": 1218.3,
        "y": 908.3
      },
      {
        "x": 1227.3,
        "y": 901.4
      },
      {
        "x": 1237.8,
        "y": 897.1
      },
      {
        "x": 1249.0,
        "y": 895.6
      },
      {
        "x": 1260.2,
        "y": 897.1
      },
      {
        "x": 1270.7,
        "y": 901.4
      },
      {
        "x": 1279.7,
        "y": 908.3
      },
      {
        "x": 1286.6,
        "y": 917.3
      },
      {
        "x": 1290.9,
        "y": 927.8
      }
    ],
    "buildings": [
      "barracks",
      "farm"
    ],
    "tradeGood": "grain"
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
        "x": 1682.5,
        "y": 469.0
      },
      {
        "x": 1680.9,
        "y": 481.0
      },
      {
        "x": 1676.5,
        "y": 491.7
      },
      {
        "x": 1668.9,
        "y": 501.9
      },
      {
        "x": 1659.2,
        "y": 509.3
      },
      {
        "x": 1648.0,
        "y": 513.9
      },
      {
        "x": 1636.0,
        "y": 515.5
      },
      {
        "x": 1624.0,
        "y": 513.9
      },
      {
        "x": 1612.8,
        "y": 509.3
      },
      {
        "x": 1603.1,
        "y": 501.9
      },
      {
        "x": 1595.7,
        "y": 492.2
      },
      {
        "x": 1591.1,
        "y": 481.0
      },
      {
        "x": 1589.5,
        "y": 469.0
      },
      {
        "x": 1591.1,
        "y": 457.0
      },
      {
        "x": 1595.7,
        "y": 445.8
      },
      {
        "x": 1603.1,
        "y": 436.1
      },
      {
        "x": 1612.8,
        "y": 428.7
      },
      {
        "x": 1624.0,
        "y": 424.1
      },
      {
        "x": 1636.0,
        "y": 422.5
      },
      {
        "x": 1648.0,
        "y": 424.1
      },
      {
        "x": 1659.2,
        "y": 428.7
      },
      {
        "x": 1668.9,
        "y": 436.1
      },
      {
        "x": 1676.3,
        "y": 445.8
      },
      {
        "x": 1680.9,
        "y": 457.0
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "spices"
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
        "x": 1750.3,
        "y": 514.0
      },
      {
        "x": 1748.9,
        "y": 524.4
      },
      {
        "x": 1744.9,
        "y": 534.1
      },
      {
        "x": 1738.5,
        "y": 542.5
      },
      {
        "x": 1730.2,
        "y": 548.9
      },
      {
        "x": 1720.4,
        "y": 552.9
      },
      {
        "x": 1710.0,
        "y": 554.3
      },
      {
        "x": 1699.6,
        "y": 552.9
      },
      {
        "x": 1696.5,
        "y": 551.6
      },
      {
        "x": 1670.6,
        "y": 520.7
      },
      {
        "x": 1669.7,
        "y": 514.0
      },
      {
        "x": 1671.1,
        "y": 503.6
      },
      {
        "x": 1674.9,
        "y": 494.3
      },
      {
        "x": 1681.5,
        "y": 485.5
      },
      {
        "x": 1689.8,
        "y": 479.1
      },
      {
        "x": 1699.6,
        "y": 475.1
      },
      {
        "x": 1710.0,
        "y": 473.7
      },
      {
        "x": 1720.4,
        "y": 475.1
      },
      {
        "x": 1730.2,
        "y": 479.1
      },
      {
        "x": 1738.5,
        "y": 485.5
      },
      {
        "x": 1744.9,
        "y": 493.8
      },
      {
        "x": 1748.9,
        "y": 503.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "spices"
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
        "x": 1697.5,
        "y": 552.8
      },
      {
        "x": 1698.4,
        "y": 560.0
      },
      {
        "x": 1696.9,
        "y": 571.2
      },
      {
        "x": 1692.6,
        "y": 581.7
      },
      {
        "x": 1685.7,
        "y": 590.7
      },
      {
        "x": 1676.7,
        "y": 597.6
      },
      {
        "x": 1666.2,
        "y": 601.9
      },
      {
        "x": 1655.0,
        "y": 603.4
      },
      {
        "x": 1643.8,
        "y": 601.9
      },
      {
        "x": 1633.3,
        "y": 597.6
      },
      {
        "x": 1624.3,
        "y": 590.7
      },
      {
        "x": 1617.4,
        "y": 581.7
      },
      {
        "x": 1613.1,
        "y": 571.2
      },
      {
        "x": 1611.6,
        "y": 560.0
      },
      {
        "x": 1613.1,
        "y": 548.8
      },
      {
        "x": 1617.4,
        "y": 538.3
      },
      {
        "x": 1624.3,
        "y": 529.3
      },
      {
        "x": 1633.3,
        "y": 522.4
      },
      {
        "x": 1643.8,
        "y": 518.1
      },
      {
        "x": 1655.0,
        "y": 516.6
      },
      {
        "x": 1666.2,
        "y": 518.1
      },
      {
        "x": 1669.6,
        "y": 519.5
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "spices"
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
        "x": 1930.6,
        "y": 402.4
      },
      {
        "x": 1926.7,
        "y": 415.9
      },
      {
        "x": 1918.8,
        "y": 422.0
      },
      {
        "x": 1906.8,
        "y": 426.9
      },
      {
        "x": 1894.0,
        "y": 428.6
      },
      {
        "x": 1881.2,
        "y": 426.9
      },
      {
        "x": 1869.2,
        "y": 422.0
      },
      {
        "x": 1858.9,
        "y": 414.1
      },
      {
        "x": 1851.0,
        "y": 403.8
      },
      {
        "x": 1846.1,
        "y": 391.8
      },
      {
        "x": 1844.4,
        "y": 379.0
      },
      {
        "x": 1846.1,
        "y": 366.2
      },
      {
        "x": 1851.0,
        "y": 354.2
      },
      {
        "x": 1858.9,
        "y": 343.9
      },
      {
        "x": 1869.2,
        "y": 336.0
      },
      {
        "x": 1881.2,
        "y": 331.1
      },
      {
        "x": 1894.0,
        "y": 329.4
      },
      {
        "x": 1905.7,
        "y": 330.9
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "iron"
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
        "x": 1856.4,
        "y": 455.0
      },
      {
        "x": 1854.9,
        "y": 466.2
      },
      {
        "x": 1852.7,
        "y": 471.6
      },
      {
        "x": 1833.8,
        "y": 493.0
      },
      {
        "x": 1824.2,
        "y": 496.9
      },
      {
        "x": 1813.0,
        "y": 498.4
      },
      {
        "x": 1801.8,
        "y": 496.9
      },
      {
        "x": 1791.3,
        "y": 492.6
      },
      {
        "x": 1782.3,
        "y": 485.7
      },
      {
        "x": 1775.4,
        "y": 476.7
      },
      {
        "x": 1771.1,
        "y": 466.2
      },
      {
        "x": 1769.6,
        "y": 455.0
      },
      {
        "x": 1771.1,
        "y": 443.8
      },
      {
        "x": 1775.4,
        "y": 433.3
      },
      {
        "x": 1782.3,
        "y": 424.3
      },
      {
        "x": 1791.3,
        "y": 417.4
      },
      {
        "x": 1801.8,
        "y": 413.1
      },
      {
        "x": 1813.0,
        "y": 411.6
      },
      {
        "x": 1824.2,
        "y": 413.1
      },
      {
        "x": 1834.7,
        "y": 417.4
      },
      {
        "x": 1843.7,
        "y": 424.3
      },
      {
        "x": 1850.6,
        "y": 433.3
      },
      {
        "x": 1854.9,
        "y": 443.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "grain"
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
        "x": 1917.4,
        "y": 509.0
      },
      {
        "x": 1915.9,
        "y": 520.2
      },
      {
        "x": 1911.8,
        "y": 530.2
      },
      {
        "x": 1888.7,
        "y": 549.5
      },
      {
        "x": 1885.2,
        "y": 550.9
      },
      {
        "x": 1874.0,
        "y": 552.4
      },
      {
        "x": 1862.8,
        "y": 550.9
      },
      {
        "x": 1852.3,
        "y": 546.6
      },
      {
        "x": 1843.3,
        "y": 539.7
      },
      {
        "x": 1836.4,
        "y": 530.7
      },
      {
        "x": 1832.1,
        "y": 520.2
      },
      {
        "x": 1830.6,
        "y": 509.0
      },
      {
        "x": 1832.1,
        "y": 497.8
      },
      {
        "x": 1834.3,
        "y": 492.4
      },
      {
        "x": 1853.2,
        "y": 471.0
      },
      {
        "x": 1862.8,
        "y": 467.1
      },
      {
        "x": 1874.0,
        "y": 465.6
      },
      {
        "x": 1885.2,
        "y": 467.1
      },
      {
        "x": 1895.7,
        "y": 471.4
      },
      {
        "x": 1904.7,
        "y": 478.3
      },
      {
        "x": 1911.6,
        "y": 487.3
      },
      {
        "x": 1915.9,
        "y": 497.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "grain"
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
        "x": 1980.3,
        "y": 363.0
      },
      {
        "x": 1928.9,
        "y": 397.5
      },
      {
        "x": 1908.4,
        "y": 338.6
      },
      {
        "x": 1911.5,
        "y": 334.5
      },
      {
        "x": 1919.8,
        "y": 328.1
      },
      {
        "x": 1929.6,
        "y": 324.1
      },
      {
        "x": 1940.0,
        "y": 322.7
      },
      {
        "x": 1950.4,
        "y": 324.1
      },
      {
        "x": 1960.2,
        "y": 328.1
      },
      {
        "x": 1968.5,
        "y": 334.5
      },
      {
        "x": 1974.9,
        "y": 342.8
      },
      {
        "x": 1978.9,
        "y": 352.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "timber"
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
        "x": 1987.7,
        "y": 417.3
      },
      {
        "x": 1956.1,
        "y": 435.2
      },
      {
        "x": 1954.4,
        "y": 434.9
      },
      {
        "x": 1945.4,
        "y": 431.2
      },
      {
        "x": 1937.7,
        "y": 425.3
      },
      {
        "x": 1931.8,
        "y": 417.6
      },
      {
        "x": 1928.5,
        "y": 409.7
      },
      {
        "x": 1932.7,
        "y": 394.9
      },
      {
        "x": 1977.8,
        "y": 364.8
      },
      {
        "x": 1982.6,
        "y": 366.8
      },
      {
        "x": 1990.3,
        "y": 372.7
      },
      {
        "x": 1996.2,
        "y": 380.4
      },
      {
        "x": 1998.8,
        "y": 386.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "iron"
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
        "x": 2065.4,
        "y": 420.0
      },
      {
        "x": 2063.9,
        "y": 431.2
      },
      {
        "x": 2059.6,
        "y": 441.7
      },
      {
        "x": 2052.7,
        "y": 450.7
      },
      {
        "x": 2043.7,
        "y": 457.6
      },
      {
        "x": 2033.2,
        "y": 461.9
      },
      {
        "x": 2026.6,
        "y": 462.8
      },
      {
        "x": 1988.7,
        "y": 414.3
      },
      {
        "x": 2000.3,
        "y": 382.4
      },
      {
        "x": 2010.8,
        "y": 378.1
      },
      {
        "x": 2022.0,
        "y": 376.6
      },
      {
        "x": 2033.2,
        "y": 378.1
      },
      {
        "x": 2043.7,
        "y": 382.4
      },
      {
        "x": 2052.7,
        "y": 389.3
      },
      {
        "x": 2059.6,
        "y": 398.3
      },
      {
        "x": 2063.9,
        "y": 408.8
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market",
      "foundry",
      "star_bastion",
      "university"
    ],
    "tradeGood": "silver"
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
        "x": 2021.8,
        "y": 456.6
      },
      {
        "x": 2019.5,
        "y": 462.1
      },
      {
        "x": 2014.1,
        "y": 469.1
      },
      {
        "x": 2007.0,
        "y": 474.5
      },
      {
        "x": 1998.8,
        "y": 477.9
      },
      {
        "x": 1990.0,
        "y": 479.1
      },
      {
        "x": 1981.2,
        "y": 477.9
      },
      {
        "x": 1973.0,
        "y": 474.5
      },
      {
        "x": 1965.9,
        "y": 469.1
      },
      {
        "x": 1960.5,
        "y": 462.1
      },
      {
        "x": 1957.1,
        "y": 453.8
      },
      {
        "x": 1955.9,
        "y": 445.0
      },
      {
        "x": 1957.1,
        "y": 436.2
      },
      {
        "x": 1957.9,
        "y": 434.1
      },
      {
        "x": 1990.0,
        "y": 416.0
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "iron"
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
        "x": 1829.3,
        "y": 576.0
      },
      {
        "x": 1827.9,
        "y": 586.4
      },
      {
        "x": 1823.9,
        "y": 596.1
      },
      {
        "x": 1817.5,
        "y": 604.5
      },
      {
        "x": 1809.2,
        "y": 610.9
      },
      {
        "x": 1799.4,
        "y": 614.9
      },
      {
        "x": 1789.0,
        "y": 616.3
      },
      {
        "x": 1778.6,
        "y": 614.9
      },
      {
        "x": 1768.8,
        "y": 610.9
      },
      {
        "x": 1760.5,
        "y": 604.5
      },
      {
        "x": 1754.1,
        "y": 596.1
      },
      {
        "x": 1750.1,
        "y": 586.4
      },
      {
        "x": 1748.7,
        "y": 576.0
      },
      {
        "x": 1750.1,
        "y": 565.6
      },
      {
        "x": 1754.1,
        "y": 555.9
      },
      {
        "x": 1760.5,
        "y": 547.5
      },
      {
        "x": 1768.8,
        "y": 541.1
      },
      {
        "x": 1778.6,
        "y": 537.1
      },
      {
        "x": 1789.0,
        "y": 535.7
      },
      {
        "x": 1799.4,
        "y": 537.1
      },
      {
        "x": 1809.2,
        "y": 541.1
      },
      {
        "x": 1817.5,
        "y": 547.5
      },
      {
        "x": 1823.9,
        "y": 555.9
      },
      {
        "x": 1827.9,
        "y": 565.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "spices"
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
        "x": 1838.2,
        "y": 660.0
      },
      {
        "x": 1836.9,
        "y": 669.6
      },
      {
        "x": 1833.2,
        "y": 678.6
      },
      {
        "x": 1830.1,
        "y": 682.6
      },
      {
        "x": 1800.2,
        "y": 697.1
      },
      {
        "x": 1791.4,
        "y": 695.9
      },
      {
        "x": 1782.4,
        "y": 692.2
      },
      {
        "x": 1774.7,
        "y": 686.3
      },
      {
        "x": 1768.8,
        "y": 678.6
      },
      {
        "x": 1765.1,
        "y": 669.6
      },
      {
        "x": 1763.8,
        "y": 660.0
      },
      {
        "x": 1765.1,
        "y": 650.4
      },
      {
        "x": 1768.8,
        "y": 641.4
      },
      {
        "x": 1774.7,
        "y": 633.7
      },
      {
        "x": 1782.4,
        "y": 627.8
      },
      {
        "x": 1791.4,
        "y": 624.1
      },
      {
        "x": 1801.0,
        "y": 622.8
      },
      {
        "x": 1810.6,
        "y": 624.1
      },
      {
        "x": 1819.6,
        "y": 627.8
      },
      {
        "x": 1827.3,
        "y": 633.7
      },
      {
        "x": 1833.2,
        "y": 641.4
      },
      {
        "x": 1836.9,
        "y": 650.4
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "spices"
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
        "x": 1964.3,
        "y": 569.0
      },
      {
        "x": 1962.9,
        "y": 579.4
      },
      {
        "x": 1958.9,
        "y": 589.1
      },
      {
        "x": 1952.5,
        "y": 597.5
      },
      {
        "x": 1944.2,
        "y": 603.9
      },
      {
        "x": 1934.4,
        "y": 607.9
      },
      {
        "x": 1924.0,
        "y": 609.3
      },
      {
        "x": 1913.6,
        "y": 607.9
      },
      {
        "x": 1903.8,
        "y": 603.9
      },
      {
        "x": 1895.5,
        "y": 597.5
      },
      {
        "x": 1889.1,
        "y": 589.1
      },
      {
        "x": 1885.1,
        "y": 579.4
      },
      {
        "x": 1883.7,
        "y": 569.0
      },
      {
        "x": 1885.1,
        "y": 558.6
      },
      {
        "x": 1888.9,
        "y": 549.3
      },
      {
        "x": 1910.4,
        "y": 531.4
      },
      {
        "x": 1913.6,
        "y": 530.1
      },
      {
        "x": 1924.0,
        "y": 528.7
      },
      {
        "x": 1934.4,
        "y": 530.1
      },
      {
        "x": 1944.2,
        "y": 534.1
      },
      {
        "x": 1952.5,
        "y": 540.5
      },
      {
        "x": 1958.9,
        "y": 548.9
      },
      {
        "x": 1962.9,
        "y": 558.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "spices"
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
        "x": 1871.3,
        "y": 722.0
      },
      {
        "x": 1869.9,
        "y": 732.4
      },
      {
        "x": 1865.9,
        "y": 742.1
      },
      {
        "x": 1859.5,
        "y": 750.5
      },
      {
        "x": 1851.2,
        "y": 756.9
      },
      {
        "x": 1841.4,
        "y": 760.9
      },
      {
        "x": 1831.0,
        "y": 762.3
      },
      {
        "x": 1820.6,
        "y": 760.9
      },
      {
        "x": 1810.8,
        "y": 756.9
      },
      {
        "x": 1802.5,
        "y": 750.5
      },
      {
        "x": 1796.1,
        "y": 742.1
      },
      {
        "x": 1792.1,
        "y": 732.4
      },
      {
        "x": 1790.7,
        "y": 722.0
      },
      {
        "x": 1792.1,
        "y": 711.6
      },
      {
        "x": 1796.1,
        "y": 701.9
      },
      {
        "x": 1799.5,
        "y": 697.5
      },
      {
        "x": 1831.8,
        "y": 681.8
      },
      {
        "x": 1841.4,
        "y": 683.1
      },
      {
        "x": 1851.2,
        "y": 687.1
      },
      {
        "x": 1859.5,
        "y": 693.5
      },
      {
        "x": 1865.9,
        "y": 701.9
      },
      {
        "x": 1869.9,
        "y": 711.6
      }
    ],
    "buildings": [
      "barracks",
      "farm",
      "market"
    ],
    "tradeGood": "spices"
  }
];

if (typeof window !== 'undefined') {
  window.WORLD_PROVINCES = WORLD_PROVINCES;
}
if (typeof globalThis !== 'undefined') {
  globalThis.WORLD_PROVINCES = WORLD_PROVINCES;
}
