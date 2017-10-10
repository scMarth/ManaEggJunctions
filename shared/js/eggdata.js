var eggData = 
{
   "Holy" : {
      "spells": [
         "Diamond Dust",
         "Absolute Zero",
         "Healer+",
         "Reviva",
         "Halvah",
         "Regenera"
      ],
      "possibleSFs":[
         ["Mp", "P", "H", "W", "Ip"],
         ["Mp", "P", "W", "S", "Ip"],
         ["Mp", "P", "S"],
         ["Mp", "S"],
         ["Mp", "S"],
         ["Mp", "P", "S"]
      ],
      "eggLevel" : 9,
      "junctionPairs": [
         ["Crown", "Fenrir"],
         ["Chaos", "Ether"]
      ]
   },

   "Fenrir" : {
      "spells": [
         "Crackle",
         "Crackle Floe",
         "Crackle Glacier",
         "Tartarus Rain",
         "Cold",
         "Binder"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 8,
      "junctionPairs": [
         ["Life", "Blizzard"],
         ["Calamity", "Dragon"]
      ]
   },

   "Protect" : {
      "spells": [
         "Healer",
         "Purify",
         "Diggin'",
         "Guard up",
         "CrystalWall"
      ],
      "possibleSFs":[
         ["S"],
         ["Mp"],
         [],
         ["W"],
         []
      ],
      "eggLevel" : 7,
      "junctionPairs": [
         ["Restore", "Icicle"],
         ["Astral", "Void"]
      ]
   },

   "Astral" : {
      "spells": [
         "BOOM!",
         "Zap!",
         "Crackle",
         "Poizn",
         "Magic Wall"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 7,
      "junctionPairs": [
         ["Restore", "Star"],
         ["Protect", "Void"]
      ]
   },


   "Dragon" : {
      "spells": [
         "Hellburner",
         "Zap!",
         "Blade Zap",
         "Dragon Zap",
         "Resurrect",
         "WOW!"
      ],
      "possibleSFs":[
         ["Mp", "P", "Ip"],
         ["Mp", "P", "W", "S", "Ip"],
         ["Mp", "H", "S", "Ip"],
         ["Mp", "P", "W", "S", "Ip"],
         ["Mp", "S"],
         ["Mp", "P", "W", "S"]
      ],
      "eggLevel" : 8,
      "junctionPairs": [
         ["Life", "Photon"],
         ["Calamity", "Fenrir"]
      ]
   },


   "Chaos" : {
      "spells": [
         "Inferno",
         "Howlnado",
         "Quake",
         "Zap All",
         "Astraea Zap",
         "Absorber"
      ],
      "possibleSFs":[
         ["Mp", "P", "W", "S", "Ip"],
         ["Mp", "P", "W", "S", "Ip"],
         ["Mp", "S", "Ip"],
         ["P", "H", "W", "S", "Ip"],
         ["Mp", "P", "W", "S", "Ip"],
         ["Mp", "P", "S", "Ip"]
      ],
      "eggLevel" : 9,
      "junctionPairs": [
         ["Crown", "Dragon"],
         ["Holy", "Ether"]
      ]
   },

   "Booster" : {
      "spells": [
         "WOW!",
         "Diggin'",
         "Guard up",
         "Speedy",
         "Runner"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 4,
      "junctionPairs": [
         ["Dust", "Lava"],
         ["Restore", "Frost"],
         ["Decrease", "Darkness"]
      ]
   },

   "Flare" : {
      "spells": [
         "Burn!",
         "Guard up"
      ],
      "possibleSFs":[
         [],
         []
      ],
      "eggLevel" : 1,
      "junctionPairs": [
         ["Flare", "Flare"]
      ]
   },

   "Wind" : {
      "spells": [
         "Howl",
         "Runner"
      ],
      "possibleSFs":[
         [],
         []
      ],
      "eggLevel" : 1,
      "junctionPairs": [
         ["Wind", "Wind"]
      ]
   },

   "Aqua" : {
      "spells": [
         "Heal",
         "Snooze"
      ],
      "possibleSFs":[
         [],
         []
      ],
      "eggLevel" : 1,
      "junctionPairs": [
         ["Aqua", "Aqua"]
      ]
   },

   "Stone" : {
      "spells": [
         "Shake",
         "Diggin'"
      ],
      "possibleSFs":[
         [],
         []
      ],
      "eggLevel" : 1,
      "junctionPairs": [
         ["Stone", "Stone"]
      ]
   },

   "Dust" : {
      "spells": [
         "Refresh",
         "Freeze!",
         "Evap"
      ],
      "possibleSFs":[
         [],
         [],
         []
      ],
      "eggLevel" : 0,
      "junctionPairs": [
         ["Flare", "Aqua"],
         ["Wind", "Stone"]
      ]
   },

   "Decrease" : {
      "spells": [
         "Stram",
         "Def-Loss",
         "Res-Loss",
         "Cold",
         "Freeze!"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 4,
      "junctionPairs": [
         ["Dust", "Mist"],
         ["Burst", "Thunder"],
         ["Booster", "Darkness"]
      ]
   },

   "Lava" : {
      "spells": [
         "Burn!",
         "Burnflame",
         "Def-Loss",
      ],
      "possibleSFs":[
         [],
         [],
         []
      ],
      "eggLevel" : 2,
      "junctionPairs": [
         ["Flare", "Stone"],
         ["Flare", "Sand"],
         ["Stone", "Star"]
      ]
   },

   "Heat" : {
      "spells": [
         "Burn!",
         "Howl",
         "Howlslash",
      ],
      "possibleSFs":[
         [],
         [],
         ["Mp"]
      ],
      "eggLevel" : 2,
      "junctionPairs": [
         ["Wind", "Flare"],
         ["Wind", "Lava"],
         ["Flare", "Lightning"]
      ]
   },

   "Mist" : {
      "spells": [
         "Alheal",
         "Erebos",
         "Fader",
      ],
      "possibleSFs":[
         [],
         [],
         []
      ],
      "eggLevel" : 2,
      "junctionPairs": [
         ["Aqua", "Wind"],
         ["Aqua", "Heat"],
         ["Wind", "Icicle"]
      ]
   },

   "Sand" : {
      "spells": [
         "Shake",
         "Tremor",
         "Evap"
      ],
      "possibleSFs":[
         [],
         [],
         []
      ],
      "eggLevel" : 2,
      "junctionPairs": [
         ["Stone", "Aqua"],
         ["Stone", "Mist"],
         ["Aqua", "Forest"]
      ]
   },

   "Burst" : {
      "spells": [
         "Burnstrike",
         "Howlslash",
         "Tremor",
         "Erebos"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 3,
      "junctionPairs": [
         ["Lava", "Mist"],
         ["Heat", "Sand"],
         ["Bomb", "Frost"],
         ["Thunder", "Leaf"]
      ]
   },


   "Darkness" : {
      "spells": [
         "Snooze",
         "Shhh!",
         "Fiora",
         "Binder",
         "Craze"
      ],
      "possibleSFs":[
         ["Mp", "P", "W", "S"],
         ["P", "W", "S"],
         ["P", "S"],
         ["Mp", "P", "S"],
         ["Mp", "P", "W", "S"]
      ],
      "eggLevel" : 4,
      "junctionPairs": [
         ["Dust", "Forest"],
         ["Burst", "Sand"],
         ["Booster", "Decrease"]
      ]
   },

   "Bomb" : {
      "spells": [
         "Burnstrike",
         "BOOM!",
         "WOW!",
         "Res-Loss"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 3,
      "junctionPairs": [
         ["Lava", "Flare"],
         ["Lava", "Stone"],
         ["Flare", "Leaf"],
         ["Volcano", "Gravity"]
      ]
   },

   "Thunder" : {
      "spells": [
         "Zap!",
         "Wham!",
         "Runner",
         "Stram"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 3,
      "junctionPairs": [
         ["Heat", "Wind"],
         ["Heat", "Flare"],
         ["Wind", "Bomb"],
         ["Volcano", "Cyclone"]
      ]
   },

   "Frost" : {
      "spells": [
         "Crackle",
         "Heal",
         "Healer",
         "Freeze!"
      ],
      "possibleSFs":[
         [],
         [],
         ["P"],
         []
      ],
      "eggLevel" : 3,
      "junctionPairs": [
         ["Mist", "Aqua"],
         ["Mist", "Wind"],
         ["Aqua", "Thunder"],
         ["Rainbow", "Cyclone"]
      ]
   },

   "Leaf" : {
      "spells": [
         "Poizn",
         "Cure",
         "Diggin'",
         "Regenera"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 3,
      "junctionPairs": [
         ["Sand", "Stone"],
         ["Sand", "Aqua"],
         ["Stone", "Frost"],
         ["Rainbow", "Gravity"]
      ]
   },

   "Restore" : {
      "spells": [
         "Absorber",
         "Alheal",
         "Alhealer",
         "Cure",
         "Regenera"
      ],
      "possibleSFs":[
         [],
         [],
         ["Mp"],
         [],
         []
      ],
      "eggLevel" : 6,
      "junctionPairs": [
         ["Burst", "Booster"],
         ["Burst", "Decrease"],
         ["Burst", "Darkness"]
      ]
   },


   "Void" : {
      "spells": [
         "BOOMOR!",
         "Erebos",
         "Wham!",
         "Vanish",
         "Giga Vanish"
      ],
      "possibleSFs":[
         ["Mp"],
         ["Mp"],
         ["Mp"],
         [],
         ["S"]
      ],
      "eggLevel" : 7,
      "junctionPairs": [
         ["Crown", "Darkness"],
         ["Protect", "Astral"]
      ]
   },

   "Star" : {
      "spells": [
         "BOOM!",
         "Meteor Fall",
         "Refresh",
         "Res-Loss",
         "Gravity"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 4,
      "junctionPairs": [
         ["Bomb", "Flare"],
         ["Bomb", "Stone"],
         ["Lava", "Heat"],
         ["Lava", "Bomb"],
         ["Lava", "Lightning"]
      ]
   },

   "Lightning" : {
      "spells": [
         "Burnflame",
         "Zap!",
         "Blade Zap",
         "Guard up",
         "Binder"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 4,
      "junctionPairs": [
         ["Thunder", "Wind"],
         ["Thunder", "Flare"],
         ["Heat", "Mist"],
         ["Heat", "Thunder"],
         ["Heat", "Icicle"]
      ]
   },

   "Icicle" : {
      "spells": [
         "Crackle",
         "Diamond Dust",
         "Wake",
         "Shhh!",
         "Fiora"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 4,
      "junctionPairs": [
         ["Frost", "Aqua"],
         ["Frost", "Wind"],
         ["Mist", "Sand"],
         ["Mist", "Frost"],
         ["Mist", "Forest"]
      ]
   },


   "Forest" : {
      "spells": [
         "Poizn",
         "Alheal",
         "Alhealer",
         "Resurrect",
         "Craze"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 4,
      "junctionPairs": [
         ["Leaf", "Stone"],
         ["Leaf", "Aqua"],
         ["Sand", "Lava"],
         ["Sand", "Leaf"],
         ["Sand", "Star"]
      ]
   },

   "Fairy" : {
      "spells": [
         "Healer",
         "Vanish",
         "Fader",
         "Snooze",
         "Craze"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 5,
      "junctionPairs": [
         ["Star", "Icicle"],
         ["Lightning", "Forest"],
         ["Volcano", "Rainbow"],
         ["Cyclone", "Gravity"]
      ]
   },

   "Calamity" : {
      "spells": [
         "Inferno",
         "BOOM!",
         "BOOMOR!",
         "BA-BOOM!",
         "Curse",
         "Gravity"
      ],
      "possibleSFs":[
         ["W", "S"],
         ["P", "H", "W", "S", "Ip"],
         ["Mp", "W", "S", "Ip"],
         ["Mp", "P", "W", "S", "Ip"],
         ["Mp", "P", "S"],
         ["Mp", "W", "S"]
      ],
      "eggLevel" : 8,
      "junctionPairs": [
         ["Life", "Cluster"],
         ["Dragon", "Fenrir"]
      ]
   },

   "Volcano" : {
      "spells": [
         "Burn!",
         "Burnstrike",
         "Hellburner",
         "WOW!",
         "Guard up",
         "Res-Loss"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 5,
      "junctionPairs": [
         ["Star", "Lava"],
         ["Star", "Heat"],
         ["Bomb", "Thunder"],
         ["Bomb", "Star"],
         ["Bomb", "Cyclone"]
      ]
   },

   "Cyclone" : {
      "spells": [
         "Howl",
         "Howlslash",
         "Howlnado",
         "Runner",
         "Stram",
         "Wham!"
      ],
      "possibleSFs":[
         ["H", "W", "Ip"],
         ["Mp", "P", "W", "S", "Ip"],
         ["Mp", "P", "W", "S", "Ip"],
         ["W"],
         ["Mp", "P"],
         ["Mp", "P", "S"]
      ],
      "eggLevel" : 5,
      "junctionPairs": [
         ["Lightning", "Heat"],
         ["Lightning", "Mist"],
         ["Thunder", "Frost"],
         ["Thunder", "Lightning"],
         ["Thunder", "Rainbow"]
      ]
   },

   "Rainbow" : {
      "spells": [
         "Heal",
         "Healer",
         "Healer+",
         "Evap",
         "Tartarus Rain",
         "Cold"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 5,
      "junctionPairs": [
         ["Icicle", "Mist"],
         ["Icicle", "Sand"],
         ["Frost", "Leaf"],
         ["Frost", "Icicle"],
         ["Frost", "Gravity"]
      ]
   },

   "Gravity" : {
      "spells": [
         "Shake",
         "Tremor",
         "Quake",
         "Calm",
         "Halvah",
         "Gravity"
      ],
      "possibleSFs":[
         ["Mp", "P", "H", "S", "Ip"],
         ["Mp", "P", "W", "S", "Ip"],
         ["Mp", "P", "W", "S", "Ip"],
         ["Mp"],
         ["Mp", "S"],
         ["Mp", "W", "S"]
      ],
      "eggLevel" : 5,
      "junctionPairs": [
         ["Forest", "Sand"],
         ["Forest", "Lava"],
         ["Leaf", "Bomb"],
         ["Leaf", "Forest"],
         ["Leaf", "Volcano"]
      ]
   },

   "Life" : {
      "spells": [
         "Alhealer+",
         "Reviva",
         "Evap",
         "Erebos",
         "Tartarus Rain",
         "Regenera"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 7,
      "junctionPairs": [
         ["Cluster", "Blizzard"],
         ["Photon", "Soul"]
      ]
   },

   "Ether" : {
      "spells": [
         "Galactic Bang",
         "Alhealer",
         "Resurrect",
         "Snooze",
         "Fader",
         "Speedy"
      ],
      "possibleSFs":[
         ["Mp", "P", "H", "S", "Ip"],
         ["Mp", "P", "S"],
         ["Mp", "S"],
         ["Mp", "P", "W", "S"],
         ["Mp", "P", "S"],
         ["Mp", "P", "W", "S"]
      ],
      "eggLevel" : 9,
      "junctionPairs": [
         ["Crown", "Calamity"],
         ["Chaos", "Holy"]
      ]
   },

   "Cluster" : {
      "spells": [
         "Burnflame",
         "BOOM!",
         "Meteor Fall",
         "Meteor Strike",
         "Calm",
         "Def-Loss"
      ],
      "possibleSFs":[
         ["Mp"],
         ["Mp", "P", "W", "Ip"],
         ["Mp"],
         [],
         ["Mp"],
         []
      ],
      "eggLevel" : 6,
      "junctionPairs": [
         ["Volcano", "Lava"],
         ["Volcano", "Heat"],
         ["Volcano", "Bomb"],
         ["Star", "Forest"],
         ["Star", "Volcano"],
         ["Star", "Photon"]
      ]
   },

   "Photon" : {
      "spells": [
         "Burnstrike",
         "Zap!",
         "Zap All",
         "Gad Zap",
         "Wake",
         "Binder"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 6,
      "junctionPairs": [
         ["Cyclone", "Heat"],
         ["Cyclone", "Mist"],
         ["Cyclone", "Thunder"],
         ["Lightning", "Star"],
         ["Lightning", "Cyclone"],
         ["Lightning", "Blizzard"]
      ]
   },

   "Blizzard" : {
      "spells": [
         "Crackle",
         "Crackle Floe",
         "Crackle Fang",
         "Healer",
         "Shhh!",
         "Fiora"
      ],
      "possibleSFs":[
         ["Mp", "P", "H", "S"],
         ["P", "S", "Ip"],
         ["Mp", "P", "W", "S", "Ip"],
         ["Mp", "S"],
         ["Mp", "P"],
         ["Mp", "P", "W", "S"]
      ],
      "eggLevel" : 6,
      "junctionPairs": [
         ["Rainbow", "Mist"],
         ["Rainbow", "Sand"],
         ["Rainbow", "Frost"],
         ["Icicle", "Lightning"],
         ["Icicle", "Rainbow"],
         ["Icicle", "Soul"]
      ]
   },

   "Soul" : {
      "spells": [
         "Alhealer",
         "Reviva",
         "Cure",
         "Purify",
         "Speedy",
         "Craze"
      ],
      "possibleSFs":[
         ["Mp", "S"],
         ["Mp"],
         ["Mp", "S"],
         ["Mp", "S"],
         ["Mp", "P", "W", "S"],
         ["Mp", "P", "W", "S"]
      ],
      "eggLevel" : 6,
      "junctionPairs": [
         ["Gravity", "Sand"],
         ["Gravity", "Lava"],
         ["Gravity", "Leaf"],
         ["Forest", "Icicle"],
         ["Forest", "Gravity"],
         ["Forest", "Cluster"]
      ]
   },

   "Crown" : {
      "spells": [
         "BOOMOR!",
         "Zap All",
         "Diamond Dust",
         "Healer+",
         "Halvah",
         "Curse"
      ],
      "possibleSFs":[
         [],
         [],
         [],
         [],
         [],
         []
      ],
      "eggLevel" : 8,
      "junctionPairs": [
         ["Life", "Soul"],
         ["Life", "Dragon"]
      ]
   }
}

var eggColors = {
   // rainbow eggs
   "Holy": "rainbowME",
   "Chaos": "rainbowME",
   "Ether": "rainbowME",

   // yellow eggs
   "Fenrir": "yellowME",
   "Protect": "yellowME",
   "Astral": "yellowME",
   "Dragon": "yellowME",
   "Void": "yellowME",
   "Calamity": "yellowME",

   // red eggs
   "Darkness": "redME",
   "Booster": "redME",
   "Decrease": "redME",

   // green eggs
   "Cluster": "greenME",
   "Photon": "greenME",
   "Blizzard": "greenME",
   "Soul": "greenME",

   // blue eggs
   "Aqua": "blueME",
   "Flare": "blueME",
   "Wind": "blueME",
   "Stone": "blueME",
   "Lava": "blueME",
   "Heat": "blueME",
   "Mist": "blueME",
   "Sand": "blueME",
   "Bomb": "blueME",
   "Thunder": "blueME",
   "Frost": "blueME",
   "Leaf": "blueME",

   // gray eggs
   "Dust": "greyME",
   "Burst": "greyME",
   "Restore": "greyME",
   "Fairy": "greyME",
   "Life": "greyME",
   "Crown": "greyME",

   // light-blue eggs
   "Icicle": "lightblueME",
   "Star": "lightblueME",
   "Lightning": "lightblueME",
   "Forest": "lightblueME",
   "Volcano": "lightblueME",
   "Cyclone": "lightblueME",
   "Rainbow": "lightblueME",
   "Gravity": "lightblueME"
}

var spellData = {
   // Blizzard
   "Diamond Dust": [30, "Fan", "Blizzard"],
   "Absolute Zero": [68, "Line", "Blizzard"],
   "Crackle": [20, "Single", "Blizzard"],
   "Crackle Floe": [30, "Single", "Blizzard"],
   "Crackle Fang": [48, "Circle", "Blizzard"],
   "Crackle Glacier": [60, "Single", "Blizzard"],
   "Cold": [18, "Circle", "Blizzard"],
   "CrystalWall": [8, "Single", "Blizzard"],
   "Freeze!": [8, "Circle", "Blizzard"],
   "Fiora": [8, "Circle", "Blizzard"],

   // Water
   "Healer": [10, "Single", "Water"],
   "Healer+": [16, "Single", "Water"],
   "Tartarus Rain": [24, "Circle", "Water"],
   "Heal": [6, "Single", "Water"],
   "Snooze": [5, "Circle", "Water"],
   "Evap": [14, "Single", "Water"],
   "Alheal": [12, "All", "Water"],
   "Alhealer": [20, "All", "Water"],
   "Erebos": [12, "Single", "Water"],
   "Alhealer+": [36, "Circle", "Water"],

   // Forest
   "Reviva": [42, "Single", "Forest"],
   "Halvah": [32, "Single", "Forest"],
   "Regenera": [10, "Single", "Forest"],
   "Purify": [12, "Single", "Forest"],
   "Poizn": [10, "Single", "Forest"],
   "Resurrect": [26, "Single", "Forest"],
   "Absorber": [32, "Circle", "Forest"],
   "Speedy": [15, "Circle", "Forest"],
   "Craze": [16, "Circle", "Forest"],

   // Bolt
   "Binder": [8, "Single", "Bolt"],
   "Zap!": [22, "Circle", "Bolt"],
   "Magic Wall": [35, "Single", "Bolt"],
   "Blade Zap": [32, "Single", "Bolt"],
   "Dragon Zap": [50, "Line", "Bolt"],
   "Zap All": [32, "Fan", "Bolt"],
   "Astraea Zap": [70, "Area", "Bolt"],
   "Stram": [12, "Circle", "Bolt"],
   "Curse": [12, "Single", "Bolt"],
   "Gad Zap": [62, "Single", "Bolt"],

   // Land
   "Diggin'": [5, "Circle", "Land"],
   "Quake": [36, "Circle", "Land"],
   "Shake": [5, "Single", "Land"],
   "Refresh": [3, "Single", "Land"],
   "Def-Loss": [7, "Circle", "Land"],
   "Tremor": [10, "Area", "Land"],
   "Cure": [5, "Single", "Land"],
   "Gravity": [4, "Circle", "Land"],
   "Calm": [6, "Single", "Land"],

   // Fire
   "Guard up": [8, "Circle", "Fire"],
   "Hellburner": [40, "Single", "Fire"],
   "WOW!": [10, "Circle", "Fire"],
   "Inferno": [35, "Fan", "Fire"],
   "Burn!": [4, "Single", "Fire"],
   "Burnflame": [12, "Circle", "Fire"],
   "Burnstrike": [16, "Single", "Fire"],

   // Wind
   "Howlnado": [32, "Area", "Wind"],
   "Runner": [4, "Circle", "Wind"],
   "Howl": [7, "Circle", "Wind"],
   "Howlslash": [18, "Line", "Wind"],
   "Fader": [16, "Single", "Wind"],
   "Shhh!": [12, "Circle", "Wind"],
   "Wham!": [4, "Single", "Wind"],
   "Wake": [2, "Circle", "Wind"],

   // Bomb
   "BOOM!": [18, "Line", "Bomb"],
   "Res-Loss": [9, "Circle", "Bomb"],
   "BOOMOR!": [26, "Area", "Bomb"],
   "Vanish": [35, "Area", "Bomb"],
   "Giga Vanish": [50, "Single", "Bomb"],
   "Meteor Fall": [32, "Single", "Bomb"],
   "Meteor Strike": [56, "Single", "Bomb"],
   "BA-BOOM!": [48, "Circle", "Bomb"],
   "Galactic Bang": [72, "Single", "Bomb"]
}

var eggLevels = [
   /* Level 0 */ ["Dust"],
   /* Level 1 */ ["Flare", "Aqua", "Wind", "Stone"],
   /* Level 2 */ ["Lava", "Heat", "Sand", "Mist"],
   /* Level 3 */ ["Thunder", "Frost", "Leaf", "Bomb", "Burst"],
   /* Level 4 */ ["Forest", "Booster", "Decrease", "Darkness", "Star", "Lightning", "Icicle"],
   /* Level 5 */ ["Volcano", "Cyclone", "Rainbow", "Gravity", "Fairy"],
   /* Level 6 */ ["Cluster", "Photon", "Blizzard", "Soul", "Restore"],
   /* Level 7 */ ["Life", "Astral", "Protect", "Void"],
   /* Level 8 */ ["Crown", "Calamity", "Dragon", "Fenrir"],
   /* Level 9 */ ["Chaos", "Ether", "Holy"]
]