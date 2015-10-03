// Parse app key initializer
Parse.initialize("O8DRdrCH1swFcLmKGBY6T7SWEuZpzdblkqvi9Ucj", "DTPRIUqThzJpuFBzfhO78acdOSy22q2t5vCax7WH");

// League DEV api key 89fd5947-db70-4995-bcfe-46600a67628f
// Randy's api key 1809d909-de42-4eda-ae26-645323c35f5b
var APIKEY = "1809d909-de42-4eda-ae26-645323c35f5b";
var matchID = "";
var champID = 0;
var i = 0;
var j = 0;
var k = 0;
var data = {
  "matchId": 1680363673,
  "region": "NA",
  "platformId": "NA1",
  "matchMode": "CLASSIC",
  "matchType": "MATCHED_GAME",
  "matchCreation": 1419831889317,
  "matchDuration": 1883,
  "queueType": "RANKED_SOLO_5x5",
  "mapId": 11,
  "season": "PRESEASON2015",
  "matchVersion": "4.21.0.397",
  "participants": [
    {
      "teamId": 100,
      "spell1Id": 7,
      "spell2Id": 4,
      "championId": 222,
      "highestAchievedSeasonTier": "GOLD",
      "timeline": {
        "creepsPerMinDeltas": {
          "zeroToTen": 7.5,
          "tenToTwenty": 5.3,
          "twentyToThirty": 4.4
        },
        "xpPerMinDeltas": {
          "zeroToTen": 408.3,
          "tenToTwenty": 387.2,
          "twentyToThirty": 499.7
        },
        "goldPerMinDeltas": {
          "zeroToTen": 408.90000000000003,
          "tenToTwenty": 334.1,
          "twentyToThirty": 522.5
        },
        "csDiffPerMinDeltas": {
          "zeroToTen": 1.9500000000000002,
          "tenToTwenty": -1.1000000000000003,
          "twentyToThirty": 0.65
        },
        "xpDiffPerMinDeltas": {
          "zeroToTen": 178.14999999999998,
          "tenToTwenty": -184.74999999999997,
          "twentyToThirty": 71.19999999999993
        },
        "damageTakenPerMinDeltas": {
          "zeroToTen": 341.5,
          "tenToTwenty": 572,
          "twentyToThirty": 599.7
        },
        "damageTakenDiffPerMinDeltas": {
          "zeroToTen": -95.20000000000002,
          "tenToTwenty": 4.400000000000034,
          "twentyToThirty": -376.1000000000001
        },
        "role": "DUO_CARRY",
        "lane": "BOTTOM"
      },
      "masteries": [
        {
          "masteryId": 4112,
          "rank": 4
        },
        {
          "masteryId": 4114,
          "rank": 1
        },
        {
          "masteryId": 4122,
          "rank": 3
        },
        {
          "masteryId": 4124,
          "rank": 1
        },
        {
          "masteryId": 4132,
          "rank": 1
        },
        {
          "masteryId": 4134,
          "rank": 3
        },
        {
          "masteryId": 4142,
          "rank": 2
        },
        {
          "masteryId": 4144,
          "rank": 1
        },
        {
          "masteryId": 4151,
          "rank": 1
        },
        {
          "masteryId": 4152,
          "rank": 3
        },
        {
          "masteryId": 4162,
          "rank": 1
        },
        {
          "masteryId": 4211,
          "rank": 2
        },
        {
          "masteryId": 4212,
          "rank": 2
        },
        {
          "masteryId": 4221,
          "rank": 1
        },
        {
          "masteryId": 4222,
          "rank": 3
        },
        {
          "masteryId": 4232,
          "rank": 1
        }
      ],
      "stats": {
        "winner": true,
        "champLevel": 16,
        "item0": 1038,
        "item1": 3031,
        "item2": 3140,
        "item3": 3087,
        "item4": 3035,
        "item5": 3006,
        "item6": 3340,
        "kills": 15,
        "doubleKills": 1,
        "tripleKills": 0,
        "quadraKills": 0,
        "pentaKills": 0,
        "unrealKills": 0,
        "largestKillingSpree": 6,
        "deaths": 5,
        "assists": 6,
        "totalDamageDealt": 183959,
        "totalDamageDealtToChampions": 25365,
        "totalDamageTaken": 16768,
        "largestCriticalStrike": 848,
        "totalHeal": 2352,
        "minionsKilled": 185,
        "neutralMinionsKilled": 20,
        "neutralMinionsKilledTeamJungle": 17,
        "neutralMinionsKilledEnemyJungle": 3,
        "goldEarned": 14706,
        "goldSpent": 12945,
        "combatPlayerScore": 0,
        "objectivePlayerScore": 0,
        "totalPlayerScore": 0,
        "totalScoreRank": 0,
        "magicDamageDealtToChampions": 2145,
        "physicalDamageDealtToChampions": 22598,
        "trueDamageDealtToChampions": 621,
        "visionWardsBoughtInGame": 0,
        "sightWardsBoughtInGame": 0,
        "magicDamageDealt": 15352,
        "physicalDamageDealt": 167352,
        "trueDamageDealt": 1253,
        "magicDamageTaken": 6689,
        "physicalDamageTaken": 9361,
        "trueDamageTaken": 717,
        "firstBloodKill": true,
        "firstBloodAssist": false,
        "firstTowerKill": false,
        "firstTowerAssist": false,
        "firstInhibitorKill": false,
        "firstInhibitorAssist": true,
        "inhibitorKills": 1,
        "towerKills": 5,
        "wardsPlaced": 8,
        "wardsKilled": 0,
        "largestMultiKill": 2,
        "killingSprees": 3,
        "totalUnitsHealed": 4,
        "totalTimeCrowdControlDealt": 194
      },
      "participantId": 1,
      "runes": [
        {
          "runeId": 5245,
          "rank": 9
        },
        {
          "runeId": 5289,
          "rank": 5
        },
        {
          "runeId": 5290,
          "rank": 4
        },
        {
          "runeId": 5315,
          "rank": 5
        },
        {
          "runeId": 5317,
          "rank": 4
        },
        {
          "runeId": 5335,
          "rank": 3
        }
      ]
    },
    {
      "teamId": 100,
      "spell1Id": 14,
      "spell2Id": 4,
      "championId": 24,
      "highestAchievedSeasonTier": "PLATINUM",
      "timeline": {
        "creepsPerMinDeltas": {
          "zeroToTen": 4.3,
          "tenToTwenty": 6.1,
          "twentyToThirty": 7.6
        },
        "xpPerMinDeltas": {
          "zeroToTen": 373.1,
          "tenToTwenty": 641.6,
          "twentyToThirty": 625.9
        },
        "goldPerMinDeltas": {
          "zeroToTen": 250,
          "tenToTwenty": 413,
          "twentyToThirty": 508.8
        },
        "csDiffPerMinDeltas": {
          "zeroToTen": 0.8000000000000003,
          "tenToTwenty": -0.8999999999999999,
          "twentyToThirty": 5
        },
        "xpDiffPerMinDeltas": {
          "zeroToTen": 70.39999999999999,
          "tenToTwenty": 98.10000000000002,
          "twentyToThirty": 158.79999999999998
        },
        "damageTakenPerMinDeltas": {
          "zeroToTen": 393.2,
          "tenToTwenty": 831.7,
          "twentyToThirty": 672.3
        },
        "damageTakenDiffPerMinDeltas": {
          "zeroToTen": 58.2,
          "tenToTwenty": 93.89999999999998,
          "twentyToThirty": -378.09999999999997
        },
        "role": "SOLO",
        "lane": "TOP"
      },
      "masteries": [
        {
          "masteryId": 4111,
          "rank": 1
        },
        {
          "masteryId": 4113,
          "rank": 4
        },
        {
          "masteryId": 4122,
          "rank": 3
        },
        {
          "masteryId": 4131,
          "rank": 1
        },
        {
          "masteryId": 4132,
          "rank": 1
        },
        {
          "masteryId": 4134,
          "rank": 3
        },
        {
          "masteryId": 4141,
          "rank": 1
        },
        {
          "masteryId": 4142,
          "rank": 2
        },
        {
          "masteryId": 4144,
          "rank": 1
        },
        {
          "masteryId": 4152,
          "rank": 3
        },
        {
          "masteryId": 4162,
          "rank": 1
        },
        {
          "masteryId": 4211,
          "rank": 2
        },
        {
          "masteryId": 4213,
          "rank": 2
        },
        {
          "masteryId": 4221,
          "rank": 1
        },
        {
          "masteryId": 4222,
          "rank": 3
        },
        {
          "masteryId": 4232,
          "rank": 1
        }
      ],
      "stats": {
        "winner": true,
        "champLevel": 17,
        "item0": 1011,
        "item1": 3153,
        "item2": 3082,
        "item3": 3111,
        "item4": 3110,
        "item5": 3078,
        "item6": 3340,
        "kills": 12,
        "doubleKills": 1,
        "tripleKills": 0,
        "quadraKills": 0,
        "pentaKills": 0,
        "unrealKills": 0,
        "largestKillingSpree": 9,
        "deaths": 5,
        "assists": 4,
        "totalDamageDealt": 148128,
        "totalDamageDealtToChampions": 24278,
        "totalDamageTaken": 22200,
        "largestCriticalStrike": 622,
        "totalHeal": 581,
        "minionsKilled": 180,
        "neutralMinionsKilled": 2,
        "neutralMinionsKilledTeamJungle": 1,
        "neutralMinionsKilledEnemyJungle": 1,
        "goldEarned": 13549,
        "goldSpent": 13053,
        "combatPlayerScore": 0,
        "objectivePlayerScore": 0,
        "totalPlayerScore": 0,
        "totalScoreRank": 0,
        "magicDamageDealtToChampions": 5798,
        "physicalDamageDealtToChampions": 16421,
        "trueDamageDealtToChampions": 2059,
        "visionWardsBoughtInGame": 0,
        "sightWardsBoughtInGame": 0,
        "magicDamageDealt": 32796,
        "physicalDamageDealt": 113273,
        "trueDamageDealt": 2059,
        "magicDamageTaken": 3741,
        "physicalDamageTaken": 17879,
        "trueDamageTaken": 579,
        "firstBloodKill": false,
        "firstBloodAssist": false,
        "firstTowerKill": false,
        "firstTowerAssist": false,
        "firstInhibitorKill": false,
        "firstInhibitorAssist": false,
        "inhibitorKills": 0,
        "towerKills": 3,
        "wardsPlaced": 9,
        "wardsKilled": 0,
        "largestMultiKill": 2,
        "killingSprees": 1,
        "totalUnitsHealed": 1,
        "totalTimeCrowdControlDealt": 806
      },
      "participantId": 2,
      "runes": [
        {
          "runeId": 5245,
          "rank": 9
        },
        {
          "runeId": 5295,
          "rank": 9
        },
        {
          "runeId": 5317,
          "rank": 9
        },
        {
          "runeId": 5355,
          "rank": 3
        }
      ]
    },
    {
      "teamId": 100,
      "spell1Id": 3,
      "spell2Id": 4,
      "championId": 412,
      "highestAchievedSeasonTier": "GOLD",
      "timeline": {
        "creepsPerMinDeltas": {
          "zeroToTen": 0.4,
          "tenToTwenty": 1.6,
          "twentyToThirty": 0.5
        },
        "xpPerMinDeltas": {
          "zeroToTen": 312.8,
          "tenToTwenty": 341.8,
          "twentyToThirty": 531.2
        },
        "goldPerMinDeltas": {
          "zeroToTen": 211.2,
          "tenToTwenty": 252.7,
          "twentyToThirty": 409.20000000000005
        },
        "csDiffPerMinDeltas": {
          "zeroToTen": 1.9500000000000002,
          "tenToTwenty": -1.1000000000000003,
          "twentyToThirty": 0.65
        },
        "xpDiffPerMinDeltas": {
          "zeroToTen": 178.14999999999998,
          "tenToTwenty": -184.74999999999997,
          "twentyToThirty": 71.19999999999993
        },
        "damageTakenPerMinDeltas": {
          "zeroToTen": 187.7,
          "tenToTwenty": 678.5,
          "twentyToThirty": 1001.9000000000001
        },
        "damageTakenDiffPerMinDeltas": {
          "zeroToTen": -95.20000000000002,
          "tenToTwenty": 4.400000000000034,
          "twentyToThirty": -376.1000000000001
        },
        "role": "DUO_SUPPORT",
        "lane": "BOTTOM"
      },
      "masteries": [
        {
          "masteryId": 4211,
          "rank": 2
        },
        {
          "masteryId": 4212,
          "rank": 2
        },
        {
          "masteryId": 4221,
          "rank": 1
        },
        {
          "masteryId": 4222,
          "rank": 3
        },
        {
          "masteryId": 4232,
          "rank": 1
        },
        {
          "masteryId": 4233,
          "rank": 3
        },
        {
          "masteryId": 4234,
          "rank": 3
        },
        {
          "masteryId": 4241,
          "rank": 3
        },
        {
          "masteryId": 4242,
          "rank": 1
        },
        {
          "masteryId": 4251,
          "rank": 1
        },
        {
          "masteryId": 4262,
          "rank": 1
        },
        {
          "masteryId": 4312,
          "rank": 3
        },
        {
          "masteryId": 4313,
          "rank": 3
        },
        {
          "masteryId": 4314,
          "rank": 1
        },
        {
          "masteryId": 4324,
          "rank": 1
        },
        {
          "masteryId": 4334,
          "rank": 1
        }
      ],
      "stats": {
        "winner": true,
        "champLevel": 15,
        "item0": 3069,
        "item1": 2049,
        "item2": 3800,
        "item3": 3068,
        "item4": 3117,
        "item5": 0,
        "item6": 3340,
        "kills": 1,
        "doubleKills": 0,
        "tripleKills": 0,
        "quadraKills": 0,
        "pentaKills": 0,
        "unrealKills": 0,
        "largestKillingSpree": 0,
        "deaths": 5,
        "assists": 18,
        "totalDamageDealt": 19767,
        "totalDamageDealtToChampions": 9377,
        "totalDamageTaken": 18917,
        "largestCriticalStrike": 0,
        "totalHeal": 2663,
        "minionsKilled": 26,
        "neutralMinionsKilled": 0,
        "neutralMinionsKilledTeamJungle": 0,
        "neutralMinionsKilledEnemyJungle": 0,
        "goldEarned": 9876,
        "goldSpent": 9010,
        "combatPlayerScore": 0,
        "objectivePlayerScore": 0,
        "totalPlayerScore": 0,
        "totalScoreRank": 0,
        "magicDamageDealtToChampions": 7013,
        "physicalDamageDealtToChampions": 2364,
        "trueDamageDealtToChampions": 0,
        "visionWardsBoughtInGame": 0,
        "sightWardsBoughtInGame": 0,
        "magicDamageDealt": 12958,
        "physicalDamageDealt": 6808,
        "trueDamageDealt": 0,
        "magicDamageTaken": 9580,
        "physicalDamageTaken": 8940,
        "trueDamageTaken": 397,
        "firstBloodKill": false,
        "firstBloodAssist": false,
        "firstTowerKill": false,
        "firstTowerAssist": true,
        "firstInhibitorKill": false,
        "firstInhibitorAssist": true,
        "inhibitorKills": 0,
        "towerKills": 0,
        "wardsPlaced": 16,
        "wardsKilled": 0,
        "largestMultiKill": 1,
        "killingSprees": 0,
        "totalUnitsHealed": 1,
        "totalTimeCrowdControlDealt": 77
      },
      "participantId": 3,
      "runes": [
        {
          "runeId": 5245,
          "rank": 9
        },
        {
          "runeId": 5290,
          "rank": 9
        },
        {
          "runeId": 5317,
          "rank": 9
        },
        {
          "runeId": 5347,
          "rank": 3
        }
      ]
    },
    {
      "teamId": 100,
      "spell1Id": 21,
      "spell2Id": 4,
      "championId": 101,
      "highestAchievedSeasonTier": "GOLD",
      "timeline": {
        "creepsPerMinDeltas": {
          "zeroToTen": 5.5,
          "tenToTwenty": 4.9,
          "twentyToThirty": 5.199999999999999
        },
        "xpPerMinDeltas": {
          "zeroToTen": 391.79999999999995,
          "tenToTwenty": 375.5,
          "twentyToThirty": 639.7
        },
        "goldPerMinDeltas": {
          "zeroToTen": 217.4,
          "tenToTwenty": 275.3,
          "twentyToThirty": 422.70000000000005
        },
        "damageTakenPerMinDeltas": {
          "zeroToTen": 253.1,
          "tenToTwenty": 501.5,
          "twentyToThirty": 585.5999999999999
        },
        "role": "SOLO",
        "lane": "MIDDLE"
      },
      "masteries": [
        {
          "masteryId": 4113,
          "rank": 4
        },
        {
          "masteryId": 4121,
          "rank": 1
        },
        {
          "masteryId": 4123,
          "rank": 3
        },
        {
          "masteryId": 4133,
          "rank": 1
        },
        {
          "masteryId": 4134,
          "rank": 3
        },
        {
          "masteryId": 4143,
          "rank": 3
        },
        {
          "masteryId": 4144,
          "rank": 1
        },
        {
          "masteryId": 4152,
          "rank": 3
        },
        {
          "masteryId": 4154,
          "rank": 1
        },
        {
          "masteryId": 4162,
          "rank": 1
        },
        {
          "masteryId": 4312,
          "rank": 3
        },
        {
          "masteryId": 4313,
          "rank": 3
        },
        {
          "masteryId": 4322,
          "rank": 1
        },
        {
          "masteryId": 4323,
          "rank": 1
        },
        {
          "masteryId": 4332,
          "rank": 1
        }
      ],
      "stats": {
        "winner": true,
        "champLevel": 16,
        "item0": 3157,
        "item1": 3089,
        "item2": 1026,
        "item3": 3158,
        "item4": 0,
        "item5": 1056,
        "item6": 3342,
        "kills": 4,
        "doubleKills": 0,
        "tripleKills": 0,
        "quadraKills": 0,
        "pentaKills": 0,
        "unrealKills": 0,
        "largestKillingSpree": 2,
        "deaths": 5,
        "assists": 6,
        "totalDamageDealt": 117241,
        "totalDamageDealtToChampions": 15985,
        "totalDamageTaken": 13623,
        "largestCriticalStrike": 0,
        "totalHeal": 271,
        "minionsKilled": 159,
        "neutralMinionsKilled": 1,
        "neutralMinionsKilledTeamJungle": 1,
        "neutralMinionsKilledEnemyJungle": 0,
        "goldEarned": 10446,
        "goldSpent": 9245,
        "combatPlayerScore": 0,
        "objectivePlayerScore": 0,
        "totalPlayerScore": 0,
        "totalScoreRank": 0,
        "magicDamageDealtToChampions": 14760,
        "physicalDamageDealtToChampions": 1224,
        "trueDamageDealtToChampions": 0,
        "visionWardsBoughtInGame": 0,
        "sightWardsBoughtInGame": 0,
        "magicDamageDealt": 105114,
        "physicalDamageDealt": 11671,
        "trueDamageDealt": 455,
        "magicDamageTaken": 5060,
        "physicalDamageTaken": 8078,
        "trueDamageTaken": 484,
        "firstBloodKill": false,
        "firstBloodAssist": false,
        "firstTowerKill": false,
        "firstTowerAssist": false,
        "firstInhibitorKill": true,
        "firstInhibitorAssist": false,
        "inhibitorKills": 1,
        "towerKills": 0,
        "wardsPlaced": 3,
        "wardsKilled": 0,
        "largestMultiKill": 1,
        "killingSprees": 1,
        "totalUnitsHealed": 1,
        "totalTimeCrowdControlDealt": 290
      },
      "participantId": 4,
      "runes": [
        {
          "runeId": 5273,
          "rank": 9
        },
        {
          "runeId": 5297,
          "rank": 9
        },
        {
          "runeId": 5315,
          "rank": 9
        },
        {
          "runeId": 5357,
          "rank": 3
        }
      ]
    },
    {
      "teamId": 100,
      "spell1Id": 4,
      "spell2Id": 11,
      "championId": 254,
      "highestAchievedSeasonTier": "GOLD",
      "timeline": {
        "creepsPerMinDeltas": {
          "zeroToTen": 0.1,
          "tenToTwenty": 0.7,
          "twentyToThirty": 3.7
        },
        "xpPerMinDeltas": {
          "zeroToTen": 307.1,
          "tenToTwenty": 532.4000000000001,
          "twentyToThirty": 476.79999999999995
        },
        "goldPerMinDeltas": {
          "zeroToTen": 241.70000000000002,
          "tenToTwenty": 395.5,
          "twentyToThirty": 392.7
        },
        "damageTakenPerMinDeltas": {
          "zeroToTen": 484.70000000000005,
          "tenToTwenty": 764.7,
          "twentyToThirty": 805
        },
        "role": "NONE",
        "lane": "JUNGLE"
      },
      "masteries": [
        {
          "masteryId": 4111,
          "rank": 1
        },
        {
          "masteryId": 4112,
          "rank": 2
        },
        {
          "masteryId": 4113,
          "rank": 4
        },
        {
          "masteryId": 4121,
          "rank": 1
        },
        {
          "masteryId": 4122,
          "rank": 3
        },
        {
          "masteryId": 4131,
          "rank": 1
        },
        {
          "masteryId": 4132,
          "rank": 1
        },
        {
          "masteryId": 4134,
          "rank": 3
        },
        {
          "masteryId": 4141,
          "rank": 1
        },
        {
          "masteryId": 4152,
          "rank": 3
        },
        {
          "masteryId": 4162,
          "rank": 1
        },
        {
          "masteryId": 4211,
          "rank": 2
        },
        {
          "masteryId": 4214,
          "rank": 2
        },
        {
          "masteryId": 4221,
          "rank": 1
        },
        {
          "masteryId": 4222,
          "rank": 3
        },
        {
          "masteryId": 4232,
          "rank": 1
        }
      ],
      "stats": {
        "winner": true,
        "champLevel": 15,
        "item0": 3707,
        "item1": 3155,
        "item2": 3102,
        "item3": 3134,
        "item4": 3270,
        "item5": 1011,
        "item6": 3340,
        "kills": 5,
        "doubleKills": 0,
        "tripleKills": 0,
        "quadraKills": 0,
        "pentaKills": 0,
        "unrealKills": 0,
        "largestKillingSpree": 2,
        "deaths": 5,
        "assists": 5,
        "totalDamageDealt": 172793,
        "totalDamageDealtToChampions": 13057,
        "totalDamageTaken": 22276,
        "largestCriticalStrike": 0,
        "totalHeal": 733,
        "minionsKilled": 45,
        "neutralMinionsKilled": 83,
        "neutralMinionsKilledTeamJungle": 71,
        "neutralMinionsKilledEnemyJungle": 12,
        "goldEarned": 11433,
        "goldSpent": 10417,
        "combatPlayerScore": 0,
        "objectivePlayerScore": 0,
        "totalPlayerScore": 0,
        "totalScoreRank": 0,
        "magicDamageDealtToChampions": 175,
        "physicalDamageDealtToChampions": 11961,
        "trueDamageDealtToChampions": 921,
        "visionWardsBoughtInGame": 0,
        "sightWardsBoughtInGame": 1,
        "magicDamageDealt": 9925,
        "physicalDamageDealt": 154244,
        "trueDamageDealt": 8624,
        "magicDamageTaken": 3872,
        "physicalDamageTaken": 18031,
        "trueDamageTaken": 372,
        "firstBloodKill": false,
        "firstBloodAssist": false,
        "firstTowerKill": false,
        "firstTowerAssist": false,
        "firstInhibitorKill": false,
        "firstInhibitorAssist": true,
        "inhibitorKills": 0,
        "towerKills": 0,
        "wardsPlaced": 11,
        "wardsKilled": 0,
        "largestMultiKill": 1,
        "killingSprees": 2,
        "totalUnitsHealed": 1,
        "totalTimeCrowdControlDealt": 609
      },
      "participantId": 5,
      "runes": [
        {
          "runeId": 5247,
          "rank": 9
        },
        {
          "runeId": 5296,
          "rank": 9
        },
        {
          "runeId": 5317,
          "rank": 9
        },
        {
          "runeId": 5335,
          "rank": 3
        }
      ]
    },
    {
      "teamId": 200,
      "spell1Id": 4,
      "spell2Id": 14,
      "championId": 238,
      "highestAchievedSeasonTier": "GOLD",
      "timeline": {
        "creepsPerMinDeltas": {
          "zeroToTen": 7.6,
          "tenToTwenty": 5.800000000000001,
          "twentyToThirty": 4.9
        },
        "xpPerMinDeltas": {
          "zeroToTen": 459.1,
          "tenToTwenty": 519.9000000000001,
          "twentyToThirty": 372.20000000000005
        },
        "goldPerMinDeltas": {
          "zeroToTen": 272.3,
          "tenToTwenty": 360.9,
          "twentyToThirty": 330.1
        },
        "damageTakenPerMinDeltas": {
          "zeroToTen": 284.4,
          "tenToTwenty": 608.3,
          "twentyToThirty": 860.7
        },
        "role": "NONE",
        "lane": "JUNGLE"
      },
      "masteries": [
        {
          "masteryId": 4111,
          "rank": 1
        },
        {
          "masteryId": 4112,
          "rank": 4
        },
        {
          "masteryId": 4114,
          "rank": 1
        },
        {
          "masteryId": 4122,
          "rank": 3
        },
        {
          "masteryId": 4124,
          "rank": 1
        },
        {
          "masteryId": 4131,
          "rank": 1
        },
        {
          "masteryId": 4132,
          "rank": 1
        },
        {
          "masteryId": 4134,
          "rank": 3
        },
        {
          "masteryId": 4141,
          "rank": 1
        },
        {
          "masteryId": 4144,
          "rank": 1
        },
        {
          "masteryId": 4152,
          "rank": 3
        },
        {
          "masteryId": 4162,
          "rank": 1
        },
        {
          "masteryId": 4211,
          "rank": 2
        },
        {
          "masteryId": 4212,
          "rank": 2
        },
        {
          "masteryId": 4221,
          "rank": 1
        },
        {
          "masteryId": 4222,
          "rank": 3
        },
        {
          "masteryId": 4232,
          "rank": 1
        }
      ],
      "stats": {
        "winner": false,
        "champLevel": 15,
        "item0": 3111,
        "item1": 3031,
        "item2": 3153,
        "item3": 3134,
        "item4": 0,
        "item5": 0,
        "item6": 3340,
        "kills": 3,
        "doubleKills": 0,
        "tripleKills": 0,
        "quadraKills": 0,
        "pentaKills": 0,
        "unrealKills": 0,
        "largestKillingSpree": 0,
        "deaths": 4,
        "assists": 8,
        "totalDamageDealt": 117655,
        "totalDamageDealtToChampions": 17124,
        "totalDamageTaken": 20230,
        "largestCriticalStrike": 670,
        "totalHeal": 1554,
        "minionsKilled": 185,
        "neutralMinionsKilled": 5,
        "neutralMinionsKilledTeamJungle": 4,
        "neutralMinionsKilledEnemyJungle": 1,
        "goldEarned": 10336,
        "goldSpent": 9857,
        "combatPlayerScore": 0,
        "objectivePlayerScore": 0,
        "totalPlayerScore": 0,
        "totalScoreRank": 0,
        "magicDamageDealtToChampions": 816,
        "physicalDamageDealtToChampions": 15709,
        "trueDamageDealtToChampions": 598,
        "visionWardsBoughtInGame": 0,
        "sightWardsBoughtInGame": 1,
        "magicDamageDealt": 6441,
        "physicalDamageDealt": 110616,
        "trueDamageDealt": 598,
        "magicDamageTaken": 4924,
        "physicalDamageTaken": 14332,
        "trueDamageTaken": 973,
        "firstBloodKill": false,
        "firstBloodAssist": false,
        "firstTowerKill": false,
        "firstTowerAssist": false,
        "firstInhibitorKill": false,
        "firstInhibitorAssist": false,
        "inhibitorKills": 0,
        "towerKills": 0,
        "wardsPlaced": 7,
        "wardsKilled": 0,
        "largestMultiKill": 1,
        "killingSprees": 0,
        "totalUnitsHealed": 1,
        "totalTimeCrowdControlDealt": 94
      },
      "participantId": 6,
      "runes": [
        {
          "runeId": 5253,
          "rank": 9
        },
        {
          "runeId": 5289,
          "rank": 9
        },
        {
          "runeId": 5317,
          "rank": 9
        },
        {
          "runeId": 5335,
          "rank": 3
        }
      ]
    },
    {
      "teamId": 200,
      "spell1Id": 14,
      "spell2Id": 4,
      "championId": 92,
      "highestAchievedSeasonTier": "GOLD",
      "timeline": {
        "creepsPerMinDeltas": {
          "zeroToTen": 3.5,
          "tenToTwenty": 7,
          "twentyToThirty": 2.6
        },
        "xpPerMinDeltas": {
          "zeroToTen": 302.7,
          "tenToTwenty": 543.5,
          "twentyToThirty": 467.1
        },
        "goldPerMinDeltas": {
          "zeroToTen": 221.3,
          "tenToTwenty": 386.20000000000005,
          "twentyToThirty": 309.8
        },
        "csDiffPerMinDeltas": {
          "zeroToTen": -0.8000000000000003,
          "tenToTwenty": 0.8999999999999999,
          "twentyToThirty": -5
        },
        "xpDiffPerMinDeltas": {
          "zeroToTen": -70.39999999999999,
          "tenToTwenty": -98.10000000000002,
          "twentyToThirty": -158.79999999999998
        },
        "damageTakenPerMinDeltas": {
          "zeroToTen": 335,
          "tenToTwenty": 737.8,
          "twentyToThirty": 1050.4
        },
        "damageTakenDiffPerMinDeltas": {
          "zeroToTen": -58.2,
          "tenToTwenty": -93.89999999999998,
          "twentyToThirty": 378.09999999999997
        },
        "role": "SOLO",
        "lane": "TOP"
      },
      "masteries": [
        {
          "masteryId": 4111,
          "rank": 1
        },
        {
          "masteryId": 4112,
          "rank": 1
        },
        {
          "masteryId": 4113,
          "rank": 3
        },
        {
          "masteryId": 4122,
          "rank": 3
        },
        {
          "masteryId": 4131,
          "rank": 1
        },
        {
          "masteryId": 4132,
          "rank": 1
        },
        {
          "masteryId": 4134,
          "rank": 3
        },
        {
          "masteryId": 4141,
          "rank": 1
        },
        {
          "masteryId": 4142,
          "rank": 3
        },
        {
          "masteryId": 4144,
          "rank": 1
        },
        {
          "masteryId": 4152,
          "rank": 2
        },
        {
          "masteryId": 4162,
          "rank": 1
        },
        {
          "masteryId": 4211,
          "rank": 2
        },
        {
          "masteryId": 4213,
          "rank": 2
        },
        {
          "masteryId": 4221,
          "rank": 1
        },
        {
          "masteryId": 4222,
          "rank": 3
        },
        {
          "masteryId": 4232,
          "rank": 1
        }
      ],
      "stats": {
        "winner": false,
        "champLevel": 15,
        "item0": 1055,
        "item1": 3134,
        "item2": 3074,
        "item3": 3035,
        "item4": 1053,
        "item5": 3158,
        "item6": 3340,
        "kills": 8,
        "doubleKills": 1,
        "tripleKills": 0,
        "quadraKills": 0,
        "pentaKills": 0,
        "unrealKills": 0,
        "largestKillingSpree": 3,
        "deaths": 12,
        "assists": 2,
        "totalDamageDealt": 112438,
        "totalDamageDealtToChampions": 14087,
        "totalDamageTaken": 23369,
        "largestCriticalStrike": 0,
        "totalHeal": 470,
        "minionsKilled": 131,
        "neutralMinionsKilled": 18,
        "neutralMinionsKilledTeamJungle": 17,
        "neutralMinionsKilledEnemyJungle": 1,
        "goldEarned": 10054,
        "goldSpent": 9317,
        "combatPlayerScore": 0,
        "objectivePlayerScore": 0,
        "totalPlayerScore": 0,
        "totalScoreRank": 0,
        "magicDamageDealtToChampions": 0,
        "physicalDamageDealtToChampions": 13495,
        "trueDamageDealtToChampions": 592,
        "visionWardsBoughtInGame": 0,
        "sightWardsBoughtInGame": 0,
        "magicDamageDealt": 0,
        "physicalDamageDealt": 111846,
        "trueDamageDealt": 592,
        "magicDamageTaken": 7098,
        "physicalDamageTaken": 15760,
        "trueDamageTaken": 511,
        "firstBloodKill": false,
        "firstBloodAssist": false,
        "firstTowerKill": false,
        "firstTowerAssist": false,
        "firstInhibitorKill": false,
        "firstInhibitorAssist": false,
        "inhibitorKills": 0,
        "towerKills": 1,
        "wardsPlaced": 6,
        "wardsKilled": 0,
        "largestMultiKill": 2,
        "killingSprees": 2,
        "totalUnitsHealed": 1,
        "totalTimeCrowdControlDealt": 69
      },
      "participantId": 7,
      "runes": [
        {
          "runeId": 5245,
          "rank": 8
        },
        {
          "runeId": 5253,
          "rank": 1
        },
        {
          "runeId": 5287,
          "rank": 3
        },
        {
          "runeId": 5289,
          "rank": 6
        },
        {
          "runeId": 5317,
          "rank": 9
        },
        {
          "runeId": 5335,
          "rank": 3
        }
      ]
    },
    {
      "teamId": 200,
      "spell1Id": 7,
      "spell2Id": 4,
      "championId": 42,
      "highestAchievedSeasonTier": "GOLD",
      "timeline": {
        "creepsPerMinDeltas": {
          "zeroToTen": 1.5,
          "tenToTwenty": 6.6,
          "twentyToThirty": 3.0999999999999996
        },
        "xpPerMinDeltas": {
          "zeroToTen": 99.9,
          "tenToTwenty": 608.9,
          "twentyToThirty": 504.6
        },
        "goldPerMinDeltas": {
          "zeroToTen": 126.69999999999999,
          "tenToTwenty": 348.9,
          "twentyToThirty": 285.3
        },
        "csDiffPerMinDeltas": {
          "zeroToTen": -1.9500000000000002,
          "tenToTwenty": 1.1000000000000003,
          "twentyToThirty": -0.65
        },
        "xpDiffPerMinDeltas": {
          "zeroToTen": -178.14999999999998,
          "tenToTwenty": 184.74999999999997,
          "twentyToThirty": -71.19999999999993
        },
        "damageTakenPerMinDeltas": {
          "zeroToTen": 272,
          "tenToTwenty": 398.8,
          "twentyToThirty": 855.8
        },
        "damageTakenDiffPerMinDeltas": {
          "zeroToTen": 95.20000000000002,
          "tenToTwenty": -4.400000000000034,
          "twentyToThirty": 376.1000000000001
        },
        "role": "DUO",
        "lane": "BOTTOM"
      },
      "masteries": [
        {
          "masteryId": 4111,
          "rank": 1
        },
        {
          "masteryId": 4113,
          "rank": 4
        },
        {
          "masteryId": 4114,
          "rank": 1
        },
        {
          "masteryId": 4122,
          "rank": 3
        },
        {
          "masteryId": 4124,
          "rank": 1
        },
        {
          "masteryId": 4132,
          "rank": 1
        },
        {
          "masteryId": 4134,
          "rank": 3
        },
        {
          "masteryId": 4142,
          "rank": 3
        },
        {
          "masteryId": 4152,
          "rank": 3
        },
        {
          "masteryId": 4162,
          "rank": 1
        },
        {
          "masteryId": 4211,
          "rank": 2
        },
        {
          "masteryId": 4212,
          "rank": 2
        },
        {
          "masteryId": 4221,
          "rank": 1
        },
        {
          "masteryId": 4222,
          "rank": 3
        },
        {
          "masteryId": 4232,
          "rank": 1
        }
      ],
      "stats": {
        "winner": false,
        "champLevel": 14,
        "item0": 1055,
        "item1": 3078,
        "item2": 1055,
        "item3": 3255,
        "item4": 1018,
        "item5": 1037,
        "item6": 3340,
        "kills": 4,
        "doubleKills": 0,
        "tripleKills": 0,
        "quadraKills": 0,
        "pentaKills": 0,
        "unrealKills": 0,
        "largestKillingSpree": 2,
        "deaths": 6,
        "assists": 2,
        "totalDamageDealt": 101885,
        "totalDamageDealtToChampions": 9228,
        "totalDamageTaken": 17387,
        "largestCriticalStrike": 563,
        "totalHeal": 1118,
        "minionsKilled": 122,
        "neutralMinionsKilled": 14,
        "neutralMinionsKilledTeamJungle": 14,
        "neutralMinionsKilledEnemyJungle": 0,
        "goldEarned": 8487,
        "goldSpent": 8008,
        "combatPlayerScore": 0,
        "objectivePlayerScore": 0,
        "totalPlayerScore": 0,
        "totalScoreRank": 0,
        "magicDamageDealtToChampions": 5819,
        "physicalDamageDealtToChampions": 3097,
        "trueDamageDealtToChampions": 311,
        "visionWardsBoughtInGame": 0,
        "sightWardsBoughtInGame": 0,
        "magicDamageDealt": 60500,
        "physicalDamageDealt": 38324,
        "trueDamageDealt": 3060,
        "magicDamageTaken": 3116,
        "physicalDamageTaken": 13742,
        "trueDamageTaken": 528,
        "firstBloodKill": false,
        "firstBloodAssist": false,
        "firstTowerKill": false,
        "firstTowerAssist": false,
        "firstInhibitorKill": false,
        "firstInhibitorAssist": false,
        "inhibitorKills": 0,
        "towerKills": 0,
        "wardsPlaced": 5,
        "wardsKilled": 0,
        "largestMultiKill": 1,
        "killingSprees": 2,
        "totalUnitsHealed": 2,
        "totalTimeCrowdControlDealt": 21
      },
      "participantId": 8,
      "runes": [
        {
          "runeId": 5245,
          "rank": 9
        },
        {
          "runeId": 5289,
          "rank": 9
        },
        {
          "runeId": 5317,
          "rank": 9
        },
        {
          "runeId": 5335,
          "rank": 3
        }
      ]
    },
    {
      "teamId": 200,
      "spell1Id": 4,
      "spell2Id": 11,
      "championId": 32,
      "highestAchievedSeasonTier": "GOLD",
      "timeline": {
        "creepsPerMinDeltas": {
          "zeroToTen": 0.9,
          "tenToTwenty": 1.3,
          "twentyToThirty": 5.8
        },
        "xpPerMinDeltas": {
          "zeroToTen": 339.1,
          "tenToTwenty": 488.6,
          "twentyToThirty": 472.9
        },
        "goldPerMinDeltas": {
          "zeroToTen": 202.79999999999998,
          "tenToTwenty": 345.5,
          "twentyToThirty": 307.8
        },
        "damageTakenPerMinDeltas": {
          "zeroToTen": 484.5,
          "tenToTwenty": 745.0999999999999,
          "twentyToThirty": 833.3
        },
        "role": "NONE",
        "lane": "JUNGLE"
      },
      "masteries": [
        {
          "masteryId": 4111,
          "rank": 1
        },
        {
          "masteryId": 4112,
          "rank": 4
        },
        {
          "masteryId": 4122,
          "rank": 3
        },
        {
          "masteryId": 4132,
          "rank": 1
        },
        {
          "masteryId": 4211,
          "rank": 1
        },
        {
          "masteryId": 4212,
          "rank": 2
        },
        {
          "masteryId": 4213,
          "rank": 2
        },
        {
          "masteryId": 4222,
          "rank": 3
        },
        {
          "masteryId": 4232,
          "rank": 1
        },
        {
          "masteryId": 4233,
          "rank": 3
        },
        {
          "masteryId": 4234,
          "rank": 3
        },
        {
          "masteryId": 4243,
          "rank": 1
        },
        {
          "masteryId": 4252,
          "rank": 4
        },
        {
          "masteryId": 4262,
          "rank": 1
        }
      ],
      "stats": {
        "winner": false,
        "champLevel": 14,
        "item0": 3111,
        "item1": 3116,
        "item2": 1057,
        "item3": 3068,
        "item4": 3713,
        "item5": 0,
        "item6": 3340,
        "kills": 2,
        "doubleKills": 1,
        "tripleKills": 0,
        "quadraKills": 0,
        "pentaKills": 0,
        "unrealKills": 0,
        "largestKillingSpree": 2,
        "deaths": 4,
        "assists": 7,
        "totalDamageDealt": 128272,
        "totalDamageDealtToChampions": 8284,
        "totalDamageTaken": 23272,
        "largestCriticalStrike": 0,
        "totalHeal": 736,
        "minionsKilled": 80,
        "neutralMinionsKilled": 56,
        "neutralMinionsKilledTeamJungle": 56,
        "neutralMinionsKilledEnemyJungle": 0,
        "goldEarned": 9192,
        "goldSpent": 9220,
        "combatPlayerScore": 0,
        "objectivePlayerScore": 0,
        "totalPlayerScore": 0,
        "totalScoreRank": 0,
        "magicDamageDealtToChampions": 7560,
        "physicalDamageDealtToChampions": 723,
        "trueDamageDealtToChampions": 0,
        "visionWardsBoughtInGame": 2,
        "sightWardsBoughtInGame": 1,
        "magicDamageDealt": 92954,
        "physicalDamageDealt": 14741,
        "trueDamageDealt": 20576,
        "magicDamageTaken": 5408,
        "physicalDamageTaken": 17251,
        "trueDamageTaken": 613,
        "firstBloodKill": false,
        "firstBloodAssist": false,
        "firstTowerKill": false,
        "firstTowerAssist": false,
        "firstInhibitorKill": false,
        "firstInhibitorAssist": false,
        "inhibitorKills": 0,
        "towerKills": 0,
        "wardsPlaced": 11,
        "wardsKilled": 0,
        "largestMultiKill": 2,
        "killingSprees": 1,
        "totalUnitsHealed": 1,
        "totalTimeCrowdControlDealt": 322
      },
      "participantId": 9,
      "runes": [
        {
          "runeId": 5273,
          "rank": 9
        },
        {
          "runeId": 5297,
          "rank": 9
        },
        {
          "runeId": 5327,
          "rank": 9
        },
        {
          "runeId": 5357,
          "rank": 3
        }
      ]
    },
    {
      "teamId": 200,
      "spell1Id": 14,
      "spell2Id": 4,
      "championId": 76,
      "highestAchievedSeasonTier": "PLATINUM",
      "timeline": {
        "creepsPerMinDeltas": {
          "zeroToTen": 2.5,
          "tenToTwenty": 2.5,
          "twentyToThirty": 0.5
        },
        "xpPerMinDeltas": {
          "zeroToTen": 264.9,
          "tenToTwenty": 489.6,
          "twentyToThirty": 383.90000000000003
        },
        "goldPerMinDeltas": {
          "zeroToTen": 168,
          "tenToTwenty": 395.9,
          "twentyToThirty": 224.7
        },
        "csDiffPerMinDeltas": {
          "zeroToTen": -1.9500000000000002,
          "tenToTwenty": 1.1000000000000003,
          "twentyToThirty": -0.65
        },
        "xpDiffPerMinDeltas": {
          "zeroToTen": -178.14999999999998,
          "tenToTwenty": 184.74999999999997,
          "twentyToThirty": -71.19999999999993
        },
        "damageTakenPerMinDeltas": {
          "zeroToTen": 447.6,
          "tenToTwenty": 842.9,
          "twentyToThirty": 1498
        },
        "damageTakenDiffPerMinDeltas": {
          "zeroToTen": 95.20000000000002,
          "tenToTwenty": -4.400000000000034,
          "twentyToThirty": 376.1000000000001
        },
        "role": "DUO",
        "lane": "BOTTOM"
      },
      "masteries": [
        {
          "masteryId": 4113,
          "rank": 3
        },
        {
          "masteryId": 4114,
          "rank": 1
        },
        {
          "masteryId": 4123,
          "rank": 3
        },
        {
          "masteryId": 4124,
          "rank": 1
        },
        {
          "masteryId": 4133,
          "rank": 1
        },
        {
          "masteryId": 4134,
          "rank": 3
        },
        {
          "masteryId": 4143,
          "rank": 3
        },
        {
          "masteryId": 4144,
          "rank": 1
        },
        {
          "masteryId": 4152,
          "rank": 3
        },
        {
          "masteryId": 4154,
          "rank": 1
        },
        {
          "masteryId": 4162,
          "rank": 1
        },
        {
          "masteryId": 4311,
          "rank": 1
        },
        {
          "masteryId": 4313,
          "rank": 3
        },
        {
          "masteryId": 4322,
          "rank": 2
        },
        {
          "masteryId": 4323,
          "rank": 1
        },
        {
          "masteryId": 4324,
          "rank": 1
        },
        {
          "masteryId": 4334,
          "rank": 1
        }
      ],
      "stats": {
        "winner": false,
        "champLevel": 14,
        "item0": 3303,
        "item1": 2049,
        "item2": 3020,
        "item3": 3165,
        "item4": 3089,
        "item5": 0,
        "item6": 3340,
        "kills": 8,
        "doubleKills": 0,
        "tripleKills": 0,
        "quadraKills": 0,
        "pentaKills": 0,
        "unrealKills": 0,
        "largestKillingSpree": 2,
        "deaths": 13,
        "assists": 4,
        "totalDamageDealt": 47968,
        "totalDamageDealtToChampions": 16804,
        "totalDamageTaken": 29869,
        "largestCriticalStrike": 210,
        "totalHeal": 6884,
        "minionsKilled": 56,
        "neutralMinionsKilled": 0,
        "neutralMinionsKilledTeamJungle": 0,
        "neutralMinionsKilledEnemyJungle": 0,
        "goldEarned": 9052,
        "goldSpent": 8420,
        "combatPlayerScore": 0,
        "objectivePlayerScore": 0,
        "totalPlayerScore": 0,
        "totalScoreRank": 0,
        "magicDamageDealtToChampions": 14747,
        "physicalDamageDealtToChampions": 1006,
        "trueDamageDealtToChampions": 1050,
        "visionWardsBoughtInGame": 0,
        "sightWardsBoughtInGame": 1,
        "magicDamageDealt": 41800,
        "physicalDamageDealt": 5118,
        "trueDamageDealt": 1050,
        "magicDamageTaken": 9346,
        "physicalDamageTaken": 19547,
        "trueDamageTaken": 976,
        "firstBloodKill": false,
        "firstBloodAssist": false,
        "firstTowerKill": false,
        "firstTowerAssist": false,
        "firstInhibitorKill": false,
        "firstInhibitorAssist": false,
        "inhibitorKills": 0,
        "towerKills": 0,
        "wardsPlaced": 19,
        "wardsKilled": 0,
        "largestMultiKill": 1,
        "killingSprees": 2,
        "totalUnitsHealed": 3,
        "totalTimeCrowdControlDealt": 4
      },
      "participantId": 10,
      "runes": [
        {
          "runeId": 5273,
          "rank": 9
        },
        {
          "runeId": 5289,
          "rank": 9
        },
        {
          "runeId": 5317,
          "rank": 9
        },
        {
          "runeId": 5357,
          "rank": 3
        }
      ]
    }
  ],
  "participantIdentities": [
    {
      "participantId": 1,
      "player": {
        "summonerId": 484199,
        "summonerName": "Lysergsaure",
        "matchHistoryUri": "/v1/stats/player_history/NA/511030",
        "profileIcon": 539
      }
    },
    {
      "participantId": 2,
      "player": {
        "summonerId": 47806809,
        "summonerName": "DrSteelHammerx",
        "matchHistoryUri": "/v1/stats/player_history/NA1/210737342",
        "profileIcon": 713
      }
    },
    {
      "participantId": 3,
      "player": {
        "summonerId": 22228001,
        "summonerName": "MsRice",
        "matchHistoryUri": "/v1/stats/player_history/NA/35925837",
        "profileIcon": 543
      }
    },
    {
      "participantId": 4,
      "player": {
        "summonerId": 20349360,
        "summonerName": "SoGoood",
        "matchHistoryUri": "/v1/stats/player_history/NA/33285445",
        "profileIcon": 509
      }
    },
    {
      "participantId": 5,
      "player": {
        "summonerId": 19780410,
        "summonerName": "WhipSomeBaLLz",
        "matchHistoryUri": "/v1/stats/player_history/NA/32498711",
        "profileIcon": 21
      }
    },
    {
      "participantId": 6,
      "player": {
        "summonerId": 35388056,
        "summonerName": "Faker",
        "matchHistoryUri": "/v1/stats/player_history/NA1/50068799",
        "profileIcon": 588
      }
    },
    {
      "participantId": 7,
      "player": {
        "summonerId": 39176264,
        "summonerName": "TThe shy ",
        "matchHistoryUri": "/v1/stats/player_history/NA1/202229242",
        "profileIcon": 749
      }
    },
    {
      "participantId": 8,
      "player": {
        "summonerId": 20456981,
        "summonerName": "xKaytl",
        "matchHistoryUri": "/v1/stats/player_history/NA/33434313",
        "profileIcon": 622
      }
    },
    {
      "participantId": 9,
      "player": {
        "summonerId": 20459509,
        "summonerName": "JasonLy",
        "matchHistoryUri": "/v1/stats/player_history/NA/33436275",
        "profileIcon": 627
      }
    },
    {
      "participantId": 10,
      "player": {
        "summonerId": 28394527,
        "summonerName": "LivinLikeLarry",
        "matchHistoryUri": "/v1/stats/player_history/NA1/42648574",
        "profileIcon": 578
      }
    }
  ],
  "teams": [
    {
      "teamId": 100,
      "winner": true,
      "firstBlood": true,
      "firstTower": true,
      "firstInhibitor": true,
      "firstBaron": false,
      "firstDragon": true,
      "towerKills": 10,
      "inhibitorKills": 2,
      "baronKills": 0,
      "dragonKills": 3,
      "vilemawKills": 0,
      "dominionVictoryScore": 0,
      "bans": [
        {
          "championId": 9,
          "pickTurn": 1
        },
        {
          "championId": 421,
          "pickTurn": 3
        },
        {
          "championId": 84,
          "pickTurn": 5
        }
      ]
    },
    {
      "teamId": 200,
      "winner": false,
      "firstBlood": false,
      "firstTower": false,
      "firstInhibitor": false,
      "firstBaron": false,
      "firstDragon": false,
      "towerKills": 2,
      "inhibitorKills": 0,
      "baronKills": 0,
      "dragonKills": 0,
      "vilemawKills": 0,
      "dominionVictoryScore": 0,
      "bans": [
        {
          "championId": 115,
          "pickTurn": 2
        },
        {
          "championId": 268,
          "pickTurn": 4
        },
        {
          "championId": 10,
          "pickTurn": 6
        }
      ]
    }
  ]
};

function matchLookUp() {

    //Static matchID
    //matchID = 1955047813;
    //$("matchId").val();
    //User input a starting matchID
    
    var dataSets = {};
    var dataPoints = {};
    var allChamps = [];
    var masteryAll = [];
    var runeAll = [];
    var spell = [];
    var teamId = 0;
    var teamData = {
                    allChamps: [],
                    teamWin: true,
                    teamSide: "blue"
                    };        
    function champion(champ,masteryAll,runeAll,spells,team){
        this.champ = champ;
        this.masteryAll = masteryAll;
        this.runeAll = runeAll;
        this.spells = spells;
        this.team = team;
    
    }
    function spells (spellOne, spellTwo){
        this.spellOne = spellOne;
        this.spellTwo = spellTwo;
    }
    function mastery ( mastRank, mastIden){
        this.mastIden = mastIden;
        this.mastRank = mastRank;

    }
    function rune(runeRank, runeIden){
        this.runeIden = runeIden;
        this.runeRank = runeRank;
    }
    
    //Loop through team one
    for (i = 0; i < 5; ++i) {
        
        k = 0;
        // Gets the current Team member
        var tempParticipant = data.participants[i];
        
                
        // Goes through masteries and adds all to an array
        while(tempParticipant.masteries[k]){
            var tempId =  tempParticipant.masteries[k].masteryId;
            var tempRank = tempParticipant.masteries[k].rank;
            //Pushes each mastery object into the mastery array
            var tempMast = new mastery(tempRank, tempId);
            
            masteryAll[k]=tempMast;
            k++;
        }
        // Gets all the runes and adds it into an array
        k = 0;
        
        while(tempParticipant.runes[k]){

            //Pushes each rune object into the all runes array
            var tempRuneId = tempParticipant.runes[k].runeId;
            var tempRuneRank = tempParticipant.runes[k].rank;
            var tempRune = new rune(tempRuneRank, tempRuneId);
            
            runeAll[k] = tempRune;
            k++;
            

        }
        
        //Stores champ Id
        champID = tempParticipant.championId;
        
        //Stores spells and sorts
        spell[0] = tempParticipant.spell1Id;
        spell[1] = tempParticipant.spell2Id;
        
        spell.sort(function( a, b){
            return a-b;
        });
        var tempSpells = new spells (spell[0], spell[1]);
        
        //Stores the team Id
        teamId = tempParticipant.teamId;
        
        var tempChamp = new champion(champID, masteryAll, runeAll, tempSpells, teamId);
        allChamps[i] = tempChamp;
        
        
        
    }
    console.log(allChamps);
    
    
  

  
  
  
   /* if (matchID !== null) {
        $.ajax({
            // Example matchID 1955047813
            url: 'https://na.api.pvp.net/api/lol/na/v2.2/match/' + matchID + '?includeTimeline=false&api_key=' + APIKEY,
            type: 'GET',
        //    dataType: 'json',
            data: {

            },
            dataType: 'json',
            success: function (json) {
                
                //Team one
                for (i = 0; i < 5; ++i) {
                    
                    champID = json.participants[i].championId;
                    team[0].push(champID);
                    
                }
                
                //Team two
                for (i = 5; i < 10; ++i) {
                    
                    champID = json[participants][i].championId;
                    team[1].push(champID);

                }



                dataPoints.push(teamOne);
                dataPoints.push(teamTwo);
                
                for( var j = 0; j <2; j++) {
                    //teamId 100 is blue side, teamId 200 is purple side

                    dataPoints.push(json[teams][j].teamId);
                    dataPoints.push(json[teams][j].winner);
                }
                //teamId 100 is blue side, teamId 200 is purple side
                dataSets.push(dataPoints);
                
                
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert (errorThrown);
                console.log(XMLHttpRequest);
                console.log(textStatus);
                console.log(errorThrown);
                if (textStatus === "429") {
                 
                    alert ("STOP");
                }
                matchID = null;
            },
        });
    } else {} */
}
