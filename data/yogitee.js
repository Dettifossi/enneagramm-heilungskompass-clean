// Yogi-Tee-Kompass: Zuordnung von Yogi-Tea-Sorten zu den neun Typen und 27 Subtypen.
// Sorten und Zutaten laut Hersteller (yogi-life.com, Stand Oktober 2026); verbindlich ist die Packung. Texte sind Genuss- und Ritualvorschläge, keine Heilaussagen.
// Optionales Feld "link" je Sorte: eigener Amazon-Partnerlink (sonst Suche per EAN).
export const YOGITEE = {
 "de": {
  "ui": {
   "kof": "enthält Koffein",
   "lim": "limitierte Edition"
  },
  "tees": [
   {
    "id": "abend",
    "name": "Abend",
    "ean": "4012824401211",
    "fam": "mild",
    "zutaten": [
     "Fenchel",
     "Kamillenblüten",
     "Pfefferminze",
     "Kardamom",
     "Zitronenmelisse",
     "Zitronengras",
     "Baldrianwurzel",
     "Salbei",
     "Lavendelblüten",
     "Muskat"
    ]
   },
   {
    "id": "abend_rooibos",
    "name": "Abend Rooibos Vanille",
    "ean": "4012824402225",
    "fam": "suess",
    "zutaten": [
     "Rooibos",
     "Kamillenblüten",
     "Kakaoschalen",
     "Süßholz",
     "Vanilleextrakt",
     "Zimt",
     "Kardamom",
     "Zitronenmelissenextrakt",
     "Muskat",
     "Ingwer",
     "Nelken",
     "schwarzer Pfeffer"
    ],
    "kof": 1
   },
   {
    "id": "ashwagandha",
    "name": "Ashwagandha Balance",
    "ean": "4012824405974",
    "fam": "fruchtig",
    "zutaten": [
     "Getrockneter Acerolasaft",
     "Hagebutte",
     "Zitronengras",
     "Pfefferminze",
     "Süßholz",
     "Hibiskus",
     "Ashwagandha",
     "Apfel",
     "Passionsblume",
     "Zitronenmelisse",
     "Aroniabeeren",
     "Zimt",
     "Orangenschalen",
     "Rote Bete",
     "süße Brombeerblätter",
     "Cranberries",
     "Orangenöl",
     "Zitronenöl"
    ]
   },
   {
    "id": "atem",
    "name": "Atem Tee",
    "ean": "4012824401006",
    "fam": "wuerzig",
    "zutaten": [
     "Süßholz",
     "Eukalyptus",
     "Ingwer",
     "Basilikum",
     "Zimt",
     "Fenchel",
     "Thymian",
     "Kardamom",
     "Luzerne",
     "Alant",
     "Krauseminze",
     "Nelken",
     "schwarzer Pfeffer"
    ]
   },
   {
    "id": "basisch",
    "name": "Basische Kräuter",
    "ean": "4012824404243",
    "fam": "mild",
    "zutaten": [
     "Zitronengras",
     "Zitronenmelisse",
     "Löwenzahn",
     "Brennnessel",
     "Krauseminze",
     "Gerstengras",
     "Lavendelblüten",
     "Fenchel",
     "Karotte",
     "Lindenblüten",
     "Birkenblätter",
     "Luzerne",
     "Petersilie"
    ]
   },
   {
    "id": "bauch_balance",
    "name": "Bauch Balance",
    "ean": "4012824406650",
    "fam": "mild",
    "zutaten": [
     "Gerstengras",
     "Anis",
     "Kurkuma",
     "Echinacea",
     "Zitronengras",
     "Brennnessel",
     "Löwenzahn",
     "Salbei"
    ]
   },
   {
    "id": "black_chai",
    "name": "Black Chai",
    "ean": "4012824400610",
    "fam": "wuerzig",
    "zutaten": [
     "Schwarzer Tee",
     "Zimt",
     "Ingwer",
     "Anis",
     "Rooibos",
     "geröstete Zichorienwurzel",
     "schwarzer Pfeffer",
     "Nelken",
     "Zimtöl",
     "Ingweröl"
    ],
    "kof": 1
   },
   {
    "id": "christmas",
    "name": "Christmas Tea",
    "ean": "4012824404229",
    "fam": "wuerzig",
    "zutaten": [
     "Rooibos",
     "Zimt",
     "Süßholz",
     "Koriander",
     "Honeybush",
     "Orangenschalen",
     "Nelken",
     "schwarzer Pfeffer",
     "Anis",
     "getrockneter Zitronensaft",
     "Sternanis",
     "Kardamom",
     "geröstete Zichorienwurzel",
     "Limone",
     "Orangenöl",
     "Zimtöl"
    ],
    "lim": 1
   },
   {
    "id": "classic",
    "name": "Classic Chai",
    "ean": "4012824400016",
    "fam": "wuerzig",
    "zutaten": [
     "Zimt",
     "Ingwer",
     "Kardamom",
     "Nelken",
     "schwarzer Pfeffer",
     "Zimtöl"
    ]
   },
   {
    "id": "cold_beeren",
    "name": "Cold Brew Beerenmischung",
    "ean": "4012824407015",
    "fam": "kalt",
    "zutaten": [
     "Schwarzer Tee",
     "Hibiskus",
     "Salbei",
     "Rote Bete",
     "natürliches schwarze Johannisbeeraroma",
     "natürliches Heidelbeeraroma",
     "natürliches Himbeeraroma",
     "Rosmarin",
     "Thymian",
     "Stevia",
     "schwarze Johannisbeeren",
     "Heidelbeeren",
     "Himbeeren"
    ],
    "kof": 1
   },
   {
    "id": "cold_erdbeer_orange",
    "name": "Cold Brew Erdbeer-Orange",
    "ean": "4012824406988",
    "fam": "kalt",
    "zutaten": [
     "Hibiskus",
     "Hagebutte",
     "natürliches Erdbeeraroma",
     "getrockneter Acerolasaft",
     "Apfel",
     "Echinacea",
     "Orangenschalen",
     "Salbei",
     "süße Brombeerblätter",
     "Stevia",
     "natürliches Orangenblütenaroma",
     "natürliches schwarze Johannisbeeraroma",
     "Erdbeeren",
     "Granatapfel-Saft"
    ]
   },
   {
    "id": "cold_pfirsich_mango",
    "name": "Cold Brew Pfirsich-Mango",
    "ean": "4012824406957",
    "fam": "kalt",
    "zutaten": [
     "Kamillenblüten",
     "Zitronengras",
     "Basilikum",
     "natürliches Pfirsicharoma",
     "Lavendelblüten",
     "Zitronenmelisse",
     "natürliches Mangoaroma",
     "Stevia",
     "natürliches Zitronen-Limettenaroma",
     "Rosenöl",
     "Zitronenschalen",
     "Mangosaft",
     "Pfirsichsaft"
    ]
   },
   {
    "id": "echinacea",
    "name": "Echinacea",
    "ean": "4012824401518",
    "fam": "wuerzig",
    "zutaten": [
     "Zimt",
     "Echinacea",
     "Ingwer",
     "Fenchel",
     "Rooibos",
     "geröstete Zichorienwurzel",
     "Karob",
     "Kardamom",
     "Basilikum",
     "Klettenwurzel",
     "Kurkuma",
     "schwarzer Pfeffer",
     "Tragant",
     "Vanilleschoten"
    ]
   },
   {
    "id": "feel_pure",
    "name": "Feel Pure",
    "ean": "4012824401266",
    "fam": "wuerzig",
    "zutaten": [
     "Süßholz",
     "Zimt",
     "Klettenwurzel",
     "Ingwer",
     "Löwenzahn",
     "Fenchel",
     "Wacholderbeeren",
     "Anis",
     "Koriander",
     "Kardamom",
     "schwarzer Pfeffer",
     "Petersilie",
     "Salbei",
     "Nelken",
     "Kurkuma"
    ]
   },
   {
    "id": "feel_pure_zitrone",
    "name": "Feel Pure mit Zitrone",
    "ean": "4012824401839",
    "fam": "frisch",
    "zutaten": [
     "Zitronengras",
     "Löwenzahn",
     "Zimt",
     "Ingwer",
     "Süßholz",
     "Zitronenschalen",
     "Zitronenmelisse",
     "Pfefferminze",
     "Zitronenöl"
    ]
   },
   {
    "id": "frauen_balance",
    "name": "Frauen Balance",
    "ean": "4012824401594",
    "fam": "mild",
    "zutaten": [
     "Himbeerblätter",
     "Süßholz",
     "Zitronenverbene",
     "Zimt",
     "Zitronenmelisse",
     "Ingwer",
     "Thymian",
     "Lavendelblüten",
     "Oregano",
     "Kardamom",
     "schwarzer Pfeffer",
     "Nelken"
    ]
   },
   {
    "id": "frauen_power",
    "name": "Frauen Power",
    "ean": "4012824401648",
    "fam": "fruchtig",
    "zutaten": [
     "Hibiskus",
     "Süßholz",
     "Pfefferminze",
     "Himbeerblätter",
     "Angelikawurzel",
     "schwarzer Pfeffer",
     "Zimt",
     "Ingwer",
     "Kardamom",
     "Nelken"
    ]
   },
   {
    "id": "frauentee",
    "name": "Frauen Tee",
    "ean": "4012824401082",
    "fam": "mild",
    "zutaten": [
     "Fenchel",
     "Kamillenblüten",
     "Pfefferminze",
     "Orangenschalen",
     "Zimt",
     "Frauenmantel",
     "Orange",
     "Orangenöl",
     "Salbei",
     "Ingwer",
     "Angelikawurzel",
     "Kardamom",
     "Wacholderbeeren",
     "Eukalyptus",
     "süße Brombeerblätter",
     "Nelken",
     "schwarzer Pfeffer"
    ]
   },
   {
    "id": "frischer_fokus",
    "name": "Frischer Fokus",
    "ean": "4012824407268",
    "fam": "frisch",
    "zutaten": [
     "Zitronengras",
     "Ingwer",
     "Süßholz",
     "Zitronenthymian",
     "Pfefferminze",
     "Tulsi",
     "Gotu Kola",
     "weißer Hibiskus",
     "Zitronenschalen",
     "Nanaminze",
     "Eukalyptus",
     "Limettenöl",
     "Zitronenöl"
    ]
   },
   {
    "id": "glueck",
    "name": "Glücks Tee",
    "ean": "4012824401464",
    "fam": "wuerzig",
    "zutaten": [
     "Zimt",
     "Ingwer",
     "Fenchel",
     "Süßholz",
     "Anis",
     "Kardamom",
     "Orangenschalen",
     "Hopfen",
     "Basilikum",
     "Orangenöl",
     "schwarzer Pfeffer",
     "Lavendelblüten",
     "Bockshornklee",
     "Schafgarbe",
     "Nelken",
     "Zimtöl"
    ]
   },
   {
    "id": "green_chai",
    "name": "Green Chai",
    "ean": "4012824400719",
    "fam": "gruen",
    "zutaten": [
     "Zimt",
     "Krauseminze",
     "grüner Tee",
     "Ingwer",
     "Kardamom",
     "Nelken",
     "schwarzer Pfeffer",
     "Zimtöl"
    ],
    "kof": 1
   },
   {
    "id": "gruene_energie",
    "name": "Grüne Energie",
    "ean": "4012824401921",
    "fam": "gruen",
    "zutaten": [
     "Grüner Tee",
     "Zitronengras",
     "Guarana",
     "Pfefferminze",
     "Holunderblüten",
     "Ingwer",
     "natürliches Erdbeeraroma",
     "schwarzer Pfeffer",
     "getrocknetes Kombuchagetränk",
     "Bergamottöl",
     "Zitronenverbene",
     "Zitronenöl",
     "Vanilleschoten",
     "natürliches Vanillearoma",
     "natürlicher Passionsfruchtextrakt"
    ],
    "kof": 1
   },
   {
    "id": "gruene_harmonie",
    "name": "Grüne Harmonie",
    "ean": "4012824401877",
    "fam": "gruen",
    "zutaten": [
     "Grüner Tee",
     "Holunderblüten",
     "Zitronengras",
     "Pfefferminze",
     "getrocknetes Kombuchagetränk",
     "Zitronenverbene",
     "Blutorangenöl",
     "Vanilleschoten",
     "Vanilleextrakt",
     "natürliches Erdbeer-/Pfirsicharoma",
     "natürlicher Bananen-/Passionsfrucht-/Sauerkirsch-Extrakt"
    ],
    "kof": 1
   },
   {
    "id": "gruener_morgen",
    "name": "Grüner Morgen",
    "ean": "4012824401976",
    "fam": "gruen",
    "zutaten": [
     "Jasmintee",
     "Ingwer",
     "Süßholz",
     "Zitronengras",
     "Zitronenschalen",
     "schwarzer Pfeffer",
     "Zitronenverbene"
    ],
    "kof": 1
   },
   {
    "id": "gruentee_ingwer_zitrone",
    "name": "Grüntee Ingwer Zitrone",
    "ean": "4012824402010",
    "fam": "gruen",
    "zutaten": [
     "Grüner Tee",
     "Ingwer",
     "Süßholz",
     "Zitronengras",
     "Zitronenöl",
     "Zitronenschalen",
     "Pfefferminze",
     "schwarzer Pfeffer",
     "Ingweröl"
    ],
    "kof": 1
   },
   {
    "id": "gruentee_matcha_zitrone",
    "name": "Grüntee Matcha Zitrone",
    "ean": "4012824403239",
    "fam": "gruen",
    "zutaten": [
     "Grüner Tee",
     "Limone",
     "Süßholz",
     "Zitronengras",
     "Pfefferminze",
     "schwarzer Pfeffer",
     "getrockneter Zitronensaft",
     "Guarana",
     "Zitronenöl",
     "Zitronenverbene",
     "Zitronenschalen",
     "Ingwer"
    ],
    "kof": 1
   },
   {
    "id": "halswaermer",
    "name": "Halswärmer",
    "ean": "4012824401396",
    "fam": "wuerzig",
    "zutaten": [
     "Süßholz",
     "Fenchel",
     "Zimt",
     "Orangenschalen",
     "Ingwer",
     "Thymian",
     "Königskerze",
     "Orangenöl",
     "Zitronenöl",
     "Kardamom",
     "schwarzer Pfeffer",
     "Nelken",
     "Kurkuma"
    ]
   },
   {
    "id": "happy_farming",
    "name": "Happy Farming",
    "ean": "4012824406926",
    "fam": "suess",
    "zutaten": [
     "Zitronengras",
     "Rooibos",
     "geröstetes Karob",
     "Zimt",
     "Süßholz",
     "geröstete Zichorienwurzel",
     "Kakaoschalen",
     "Orange",
     "Orangenschalen",
     "Honeybush",
     "Ingwer",
     "Vanilleschoten",
     "Vanilleextrakt",
     "Orangenöl",
     "Zitronengrasöl"
    ],
    "kof": 1,
    "lim": 1
   },
   {
    "id": "himalaya",
    "name": "Himalaya Chai",
    "ean": "4012824400061",
    "fam": "wuerzig",
    "zutaten": [
     "Ingwer",
     "Fenchel",
     "Zimt",
     "Anis",
     "Koriander",
     "Zimtöl",
     "Ingweröl",
     "Süßholz"
    ]
   },
   {
    "id": "ingwer",
    "name": "Ingwer",
    "ean": "4012824401785",
    "fam": "wuerzig",
    "zutaten": [
     "Ingwer",
     "Zitronengras",
     "Süßholz",
     "Pfefferminze",
     "schwarzer Pfeffer"
    ]
   },
   {
    "id": "ingwer_orange_vanille",
    "name": "Ingwer Orange mit Vanille",
    "ean": "4012824401730",
    "fam": "frisch",
    "zutaten": [
     "Ingwer",
     "Süßholz",
     "Zitronengras",
     "Orangenschalen",
     "schwarzer Pfeffer",
     "Vanilleextrakt",
     "Orangenöl",
     "Pfefferminze",
     "Anis"
    ]
   },
   {
    "id": "ingwer_zitrone",
    "name": "Ingwer Zitrone",
    "ean": "4012824401303",
    "fam": "frisch",
    "zutaten": [
     "Ingwer",
     "Süßholz",
     "Zitronengras",
     "schwarzer Pfeffer",
     "Zitronenschalen",
     "Pfefferminze",
     "Zitronenöl",
     "Hibiskus",
     "getrockneter Zitronensaft"
    ]
   },
   {
    "id": "innere_harmonie",
    "name": "Innere Harmonie",
    "ean": "4012824403758",
    "fam": "mild",
    "zutaten": [
     "Zitronenmelisse",
     "Rooibos",
     "Süßholz",
     "Zimt",
     "Kakaoschalen",
     "Basilikum",
     "Pfefferminze",
     "Kamillenblüten",
     "Rosmarin",
     "schwarzer Pfeffer",
     "Fenchel",
     "Lavendelblüten"
    ],
    "kof": 1
   },
   {
    "id": "klarer_geist",
    "name": "Klarer Geist",
    "ean": "4012824401433",
    "fam": "frisch",
    "zutaten": [
     "Ginkgo",
     "Ingwer",
     "Zitronengras",
     "Süßholz",
     "Pfefferminze",
     "Zitronenverbene",
     "Basilikum",
     "Zitronenmelisse",
     "Kardamom",
     "schwarzer Pfeffer"
    ]
   },
   {
    "id": "kurkuma_chai",
    "name": "Kurkuma Chai",
    "ean": "4012824404120",
    "fam": "wuerzig",
    "zutaten": [
     "Kurkuma",
     "Zimt",
     "Süßholz",
     "Ingwer",
     "Kardamom",
     "schwarzer Pfeffer",
     "Apfel",
     "Fenchel",
     "Muskatblüte",
     "Kakaoschalen",
     "Nelken"
    ],
    "kof": 1
   },
   {
    "id": "kurkuma_orange",
    "name": "Kurkuma Orange",
    "ean": "4012824404489",
    "fam": "wuerzig",
    "zutaten": [
     "Kurkuma",
     "Süßholz",
     "Zimt",
     "Orangenschalen",
     "Apfel",
     "Ingwer",
     "schwarzer Pfeffer",
     "Kardamom",
     "Orangenöl",
     "Kakaoschalen",
     "Vanilleschoten",
     "weißer Hibiskus",
     "Fenchel",
     "Muskatblüte",
     "Nelken"
    ],
    "kof": 1
   },
   {
    "id": "lebensfreude",
    "name": "Lebensfreude",
    "ean": "4012824401686",
    "fam": "wuerzig",
    "zutaten": [
     "Basilikum",
     "Süßholz",
     "getrockneter Zitronensaft",
     "Orangenschalen",
     "Zimt",
     "Ingwer",
     "Chili",
     "Kardamom",
     "Nelken",
     "schwarzer Pfeffer"
    ]
   },
   {
    "id": "lime_mint",
    "name": "Lime Mint",
    "ean": "4012824400504",
    "fam": "frisch",
    "zutaten": [
     "Süßholz",
     "Limone",
     "Krauseminze",
     "Pfefferminze",
     "Kardamom",
     "getrockneter Zitronensaft",
     "Kurkuma",
     "Ingwer",
     "Zimt",
     "Nelken",
     "schwarzer Pfeffer"
    ]
   },
   {
    "id": "maca_chai",
    "name": "Maca Chai",
    "ean": "4012824405349",
    "fam": "wuerzig",
    "zutaten": [
     "Süßholz",
     "Zimt",
     "Ingwer",
     "Kardamom",
     "Anis",
     "Maca",
     "Fenchel",
     "Nelken",
     "geröstete Zichorienwurzel",
     "Kakaoschalen",
     "schwarzer Pfeffer",
     "Guarana"
    ],
    "kof": 1
   },
   {
    "id": "mango_chai",
    "name": "Mango Chai",
    "ean": "4012824406537",
    "fam": "fruchtig",
    "zutaten": [
     "Zimt",
     "Süßholz",
     "Ingwer",
     "Kurkuma",
     "Orange",
     "Anis",
     "Kakaoschalen",
     "Mango",
     "weißer Hibiskus",
     "Orangenschalen",
     "Karotte",
     "Orangenöl",
     "Kardamom",
     "getrockneter Zitronensaft",
     "Zitronenöl",
     "Apfel",
     "schwarzer Pfeffer",
     "Nelken"
    ],
    "kof": 1
   },
   {
    "id": "meno_harmonie",
    "name": "Meno Harmonie",
    "ean": "4012824407695",
    "fam": "mild",
    "zutaten": [
     "Fenchel",
     "Kamillenblüten",
     "Pfefferminze",
     "Orangenschalen",
     "Zimt",
     "Frauenmantel",
     "Orange",
     "Orangenöl",
     "Salbei",
     "Ingwer",
     "Angelikawurzel",
     "Kardamom",
     "Wacholderbeeren",
     "Eukalyptus",
     "süße Brombeerblätter",
     "Nelken",
     "schwarzer Pfeffer"
    ]
   },
   {
    "id": "mentale_klarheit",
    "name": "Mentale Klarheit",
    "ean": "4012824406032",
    "fam": "frisch",
    "zutaten": [
     "Pfefferminze",
     "Zitronenmelisse",
     "Zitronengras",
     "Krauseminze",
     "Süßholz",
     "Rooibos",
     "Ingwer",
     "Zimt",
     "Eukalyptus",
     "Ginsengwurzel",
     "Maca",
     "schwarzer Pfeffer",
     "Orangenöl",
     "Kardamom",
     "Pfefferminzöl"
    ]
   },
   {
    "id": "morgen_energie",
    "name": "Morgen Energie",
    "ean": "4012824406353",
    "fam": "gruen",
    "zutaten": [
     "Geröstete Mate",
     "grüne Mate",
     "Kurkuma",
     "grüne Kaffeebohnen",
     "grüner Rooibos",
     "grüner Tee",
     "geröstete Löwenzahnwurzel",
     "Süßholz",
     "Maca",
     "Krauseminze",
     "Karob"
    ],
    "kof": 1
   },
   {
    "id": "maenner",
    "name": "Männer Tee",
    "ean": "4012824401358",
    "fam": "wuerzig",
    "zutaten": [
     "Ingwer",
     "Kardamom",
     "Süßholz",
     "Karob",
     "Zimt",
     "Gerstenmalz",
     "geröstete Zichorienwurzel",
     "Pfefferminze",
     "Bockshornklee",
     "Fenchel",
     "Muskatblüte",
     "Anis",
     "Ginsengwurzel",
     "Tragant",
     "Kurkuma",
     "Chili",
     "Zimtöl",
     "schwarzer Pfeffer"
    ]
   },
   {
    "id": "nach_dem_essen",
    "name": "Nach Dem Essen",
    "ean": "4012824401044",
    "fam": "mild",
    "zutaten": [
     "Kardamom",
     "Fenchel",
     "Koriander",
     "Gerstenmalz",
     "Süßholz",
     "Pfefferminze",
     "Ingwer",
     "Zimt",
     "schwarzer Pfeffer",
     "Nelken"
    ]
   },
   {
    "id": "natuerliche_abwehr",
    "name": "Natürliche Abwehr",
    "ean": "4012824403185",
    "fam": "wuerzig",
    "zutaten": [
     "Echinacea",
     "Hagebutte",
     "getrockneter Acerolasaft",
     "Basilikum",
     "Zimt",
     "Ingwer",
     "Kardamom",
     "Holunderbeeren",
     "schwarzer Pfeffer",
     "Moringablätter",
     "Hibiskus",
     "Kakaoschalen",
     "Süßholz",
     "Fenchel"
    ],
    "kof": 1
   },
   {
    "id": "natuerliche_balance",
    "name": "Natürliche Balance",
    "ean": "4012824404809",
    "fam": "mild",
    "zutaten": [
     "Zitronengras",
     "Süßholz",
     "Shiitake",
     "Bockshornklee",
     "Holunderblüte",
     "Lindenblüten",
     "Basilikum",
     "Moringa",
     "getrocknetes Kombuchagetränk"
    ]
   },
   {
    "id": "new_inspiration",
    "name": "New Inspiration",
    "ean": "4012824406940",
    "fam": "frisch",
    "zutaten": [
     "Kurkuma",
     "Zitronenschalen",
     "Süßholz",
     "Ingwer",
     "getrockneter Zitronensaft",
     "Zitronengras",
     "Anis",
     "Zitronenmelisse",
     "Apfel",
     "Zitronenöl",
     "Zitronenverbene",
     "Gerstengras",
     "Galgant",
     "Zimt",
     "Fenchel",
     "schwarzer Pfeffer"
    ],
    "lim": 1
   },
   {
    "id": "cranberry_hibiskus",
    "name": "Positive Energie Cranberry Hibiskus",
    "ean": "4012824402171",
    "fam": "fruchtig",
    "zutaten": [
     "Schwarzer Tee",
     "Hibiskus",
     "grüne Mate",
     "Süßholz",
     "Zitronengras",
     "getrockneter Zitronensaft",
     "Hagebutte",
     "Rote Bete",
     "Cranberries",
     "Zimt",
     "schwarzer Pfeffer",
     "Orangenschalen",
     "Rosmarin",
     "Orangenöl",
     "Ingwer",
     "Guarana",
     "Ginsengwurzel",
     "Kardamom",
     "Nelken"
    ],
    "kof": 1
   },
   {
    "id": "pumpkin_chai",
    "name": "Pumpkin Chai",
    "ean": "4012824405462",
    "fam": "wuerzig",
    "zutaten": [
     "Kürbis",
     "Süßholz",
     "Zimt",
     "Karotte",
     "Ingwer",
     "Kardamom",
     "Fenchel",
     "Anis",
     "Rote Bete",
     "geröstete Zichorienwurzel",
     "schwarzer Pfeffer",
     "Nelken",
     "Vanilleschoten",
     "Orangenschalen",
     "Orangenöl",
     "Vanilleextrakt",
     "Muskat"
    ],
    "lim": 1
   },
   {
    "id": "relax",
    "name": "Relax",
    "ean": "4012824401129",
    "fam": "mild",
    "zutaten": [
     "Kamillenblüten",
     "Fenchel",
     "Lindenblüten",
     "Kardamom",
     "Gerstenmalz",
     "Hibiskus",
     "Süßholz",
     "Luzerne",
     "Himbeerblätter",
     "Orangenschalen",
     "Hagebutte",
     "Zimt",
     "Ingwer",
     "Nelken",
     "schwarzer Pfeffer"
    ]
   },
   {
    "id": "rooibos",
    "name": "Rooibos",
    "ean": "4012824400214",
    "fam": "suess",
    "zutaten": [
     "Rooibos",
     "Zimt",
     "Ingwer",
     "Karob",
     "geröstete Zichorienwurzel",
     "Kardamom",
     "Nelken",
     "schwarzer Pfeffer",
     "Zimtöl",
     "Ingweröl",
     "Kardamomöl",
     "Vanilleextrakt"
    ]
   },
   {
    "id": "rose",
    "name": "Rose",
    "ean": "4012824400764",
    "fam": "mild",
    "zutaten": [
     "Hibiskus",
     "Kamillenblüten",
     "Holunderblüten",
     "Lindenblüten",
     "Rosenblüten",
     "Zimt",
     "Lavendelblüten",
     "Schafgarbe",
     "Ingwer",
     "schwarzer Pfeffer",
     "Fenchel",
     "Kurkuma",
     "Geranienöl",
     "Sonnenblumenblütenblätter",
     "Luzerne",
     "Spitzwegerich",
     "Kardamom",
     "Nelken",
     "getrocknetes Kombuchagetränk"
    ],
    "kof": 1
   },
   {
    "id": "rote_beeren_vanille",
    "name": "Rote Beeren Vanille",
    "ean": "4012824406285",
    "fam": "fruchtig",
    "zutaten": [
     "Hibiskus",
     "Süßholz",
     "Apfel",
     "Hagebutte",
     "Zimt",
     "Aroniabeeren",
     "Orangenschalen",
     "Ingwer",
     "Holunderblüten",
     "Rote Bete",
     "Vanilleextrakt",
     "Erdbeeren",
     "Cranberries",
     "Holunderbeeren",
     "Wacholderbeeren",
     "Orangenöl",
     "Vanilleschoten"
    ]
   },
   {
    "id": "salted_caramel",
    "name": "Salted Caramel",
    "ean": "4012824406520",
    "fam": "suess",
    "zutaten": [
     "Süßholz",
     "geröstetes Karob",
     "Kakaopulver",
     "geröstete Zichorienwurzel",
     "Zimt",
     "Anis",
     "Salz",
     "Vanilleextrakt",
     "fettarmes Kakaopulver",
     "süße Brombeerblätter",
     "natürliches Karamellaroma"
    ],
    "kof": 1,
    "lim": 1
   },
   {
    "id": "schoko",
    "name": "Schoko",
    "ean": "4012824400115",
    "fam": "suess",
    "zutaten": [
     "Kakaoschalen",
     "Zimt",
     "Süßholz",
     "Karob",
     "Gerstenmalz",
     "fettarmes Kakaopulver",
     "Kardamom",
     "Ingwer",
     "Nelken",
     "Ingweröl",
     "schwarzer Pfeffer",
     "Vanilleextrakt",
     "Zimtöl",
     "Vanilleschoten"
    ],
    "kof": 1
   },
   {
    "id": "seelenbalsam",
    "name": "Seelenbalsam",
    "ean": "4012824405493",
    "fam": "suess",
    "zutaten": [
     "Zimt",
     "Süßholz",
     "Kakaoschalen",
     "Rooibos",
     "geröstete Zichorienwurzel",
     "Hibiskus",
     "Ingwer",
     "Anis",
     "Honeybush",
     "Orangenschalen",
     "Karob",
     "natürlicher Kakao-Extrakt",
     "fettarmes Kakaopulver",
     "schwarzer Pfeffer",
     "Orangenöl",
     "Vanilleschoten",
     "Vanilleextrakt"
    ],
    "kof": 1
   },
   {
    "id": "spicy_strawberry",
    "name": "Spicy Strawberry",
    "ean": "4012824407206",
    "fam": "fruchtig",
    "zutaten": [
     "Hibiskus",
     "Rote Bete",
     "Süßholz",
     "Koriander",
     "Ingwer",
     "Orange",
     "Zimt",
     "natürliches Erdbeeraroma",
     "süße Brombeerblätter",
     "Zitronenschalen",
     "Anis",
     "Orangenöl",
     "Zitronenöl",
     "schwarzer Pfeffer",
     "Erdbeeren",
     "Chili"
    ]
   },
   {
    "id": "spritzige_blutorange",
    "name": "Spritzige Blutorange",
    "ean": "4012824406599",
    "fam": "fruchtig",
    "zutaten": [
     "Hibiskus",
     "Zitronengras",
     "Süßholz",
     "Koriander",
     "geröstete Zichorienwurzel",
     "Orange",
     "Orangenschalen",
     "Rote Bete",
     "Blutorangenöl",
     "Orangenöl"
    ]
   },
   {
    "id": "star_salutation",
    "name": "Star Salutation",
    "ean": "4012824406131",
    "fam": "frisch",
    "zutaten": [
     "Zitronengras",
     "Pfefferminze",
     "Salbei",
     "Ingwer",
     "Tulsi",
     "Rosmarin",
     "Basilikum",
     "Süßholz",
     "Thymian",
     "Lavendelblüten",
     "Pink-Grapefruitöl",
     "Kardamom"
    ]
   },
   {
    "id": "sweet_chai",
    "name": "Sweet Chai",
    "ean": "4012824400665",
    "fam": "suess",
    "zutaten": [
     "Anis",
     "Fenchel",
     "Süßholz",
     "Kardamom",
     "schwarzer Pfeffer",
     "Zimt",
     "Ingwer",
     "Nelken"
    ]
   },
   {
    "id": "sweet_chili",
    "name": "Sweet Chili",
    "ean": "4012824400269",
    "fam": "wuerzig",
    "zutaten": [
     "Süßholz",
     "Kakaoschalen",
     "Krauseminze",
     "Fenchel",
     "Anis",
     "Ingwer",
     "Pfefferminze",
     "Brennnessel",
     "Zimt",
     "Chili",
     "Kardamom",
     "Nelken",
     "schwarzer Pfeffer"
    ],
    "kof": 1
   },
   {
    "id": "suesse_minze",
    "name": "Süße Minze",
    "ean": "4012824400306",
    "fam": "frisch",
    "zutaten": [
     "Pfefferminze",
     "Süßholz",
     "Zimt",
     "Kardamom",
     "Ingwer",
     "Nelken",
     "schwarzer Pfeffer",
     "Zimtöl",
     "Kardamomöl",
     "Ingweröl"
    ]
   },
   {
    "id": "suesse_traeume",
    "name": "Süße Träume",
    "ean": "4012824407329",
    "fam": "mild",
    "zutaten": [
     "Fenchel",
     "Pfefferminze",
     "Zitronengras",
     "Kamillenblüten",
     "Zitronenmelisse",
     "Salbei",
     "Lavendelblüten",
     "Kardamom",
     "Hopfen",
     "Lavendelöl",
     "Muskat"
    ]
   },
   {
    "id": "suesses_wohlgefuehl",
    "name": "Süßes Wohlgefühl",
    "ean": "4012824400160",
    "fam": "suess",
    "zutaten": [
     "Süßholz",
     "Zimt",
     "Orangenschalen",
     "Ingwer",
     "Kardamom",
     "geröstete Zichorienwurzel",
     "Nelken",
     "Orangenöl",
     "schwarzer Pfeffer",
     "Vanilleextrakt"
    ]
   },
   {
    "id": "tulsi",
    "name": "Tulsi Relax",
    "ean": "4012824405585",
    "fam": "mild",
    "zutaten": [
     "Tulsi",
     "Basilikum",
     "Süßholz",
     "Ingwer",
     "Zitronengras",
     "Orangenschalen",
     "Zimt",
     "Zitronenschalen",
     "Orangenöl",
     "Limone",
     "schwarzer Pfeffer",
     "Kardamom",
     "Nelken",
     "Estragon"
    ]
   },
   {
    "id": "weisser_tee_aloe",
    "name": "Weißer Tee mit Aloe Vera",
    "ean": "4012824404328",
    "fam": "gruen",
    "zutaten": [
     "Basilikum",
     "weißer Tee",
     "Zitronenverbene",
     "Süßholz",
     "Jasmintee",
     "Zimt",
     "Rosmarin",
     "Salbei",
     "Kurkuma",
     "Fenchel",
     "Kakaoschalen",
     "Kamillenblüten",
     "Schisandrabeeren",
     "200fach konzentriertes Aloe Vera Gel"
    ],
    "kof": 1
   },
   {
    "id": "wohlfuehl",
    "name": "Wohlfühl Tee",
    "ean": "4012824401556",
    "fam": "wuerzig",
    "zutaten": [
     "Zimt",
     "Salbei",
     "Süßholz",
     "Oregano",
     "Kardamom",
     "Zitronengras",
     "Ingwer",
     "Nelken",
     "Zitronenverbene",
     "schwarzer Pfeffer",
     "Zimtöl",
     "Ingweröl",
     "Bockshornklee",
     "Koriander"
    ]
   }
  ],
  "fam": {
   "wuerzig": "würzig-warm",
   "mild": "mild & sanft",
   "frisch": "frisch & leicht",
   "gruen": "grün & wach",
   "suess": "süß & weich",
   "fruchtig": "fruchtig",
   "kalt": "Cold Brew (kalt)"
  },
  "typen": {
   "1": {
    "anker": "Zitronenmelisse",
    "intro": "Für die Eins gilt im Heiltee-Kompass die Melisse: Die Strenge darf weicher werden, ohne dass Klarheit verloren geht. Yogi Tea hat mehrere Mischungen mit Zitronenmelisse.",
    "tees": [
     {
      "id": "innere_harmonie",
      "warum": "Zitronenmelisse, Kamille und Rosmarin: eine milde Ordnung aus Kräutern, die sich gegenseitig ausgleichen."
     },
     {
      "id": "abend",
      "warum": "Zitronenmelisse mit Fenchel und Kamille: ein ruhiger Ausklang des Tages, an dem nichts mehr verbessert werden muss."
     },
     {
      "id": "feel_pure_zitrone",
      "warum": "Zitronenmelisse, Zitrone und Löwenzahn: Klarheit und Frische passen zum Wunsch der Eins nach Reinheit."
     },
     {
      "id": "mentale_klarheit",
      "warum": "Pfefferminze, Zitronenmelisse und Zitronengras: ein heller, klarer Tee für Tage voller Anspruch."
     }
    ]
   },
   "2": {
    "anker": "Rosenblüten",
    "intro": "Für die Zwei steht die Rose: Zuwendung darf auch nach innen fließen. Yogi Tea hat dafür eine eigene Rosenmischung und warme, vertraute Sorten.",
    "tees": [
     {
      "id": "rose",
      "warum": "Rosenblüten, Hibiskus und Holunderblüte: ein zarter Tee, der Aufmerksamkeit zu sich selbst lenkt."
     },
     {
      "id": "wohlfuehl",
      "warum": "Zimt, Süßholz und Salbei: eine warme, vertraute Mischung, die Zuwendung für sich selbst erlaubt."
     },
     {
      "id": "sweet_chai",
      "warum": "Anis, Fenchel, Kardamom und Zimt: ein sanft süßer Chai, der gern zu zweit getrunken wird."
     },
     {
      "id": "suesses_wohlgefuehl",
      "warum": "Süßholz, Zimt und Orange: ein süßes Wohlgefühl, schon im Namen."
     }
    ]
   },
   "3": {
    "anker": "Rosmarin",
    "intro": "Für die Drei steht der Rosmarin: Aktivität und Zielkraft werden zu innerer Sammlung zurückgeführt. Rosmarin steckt bei Yogi Tea in einigen Mischungen.",
    "tees": [
     {
      "id": "cranberry_hibiskus",
      "warum": "Schwarztee, Hibiskus, Mate und Rosmarin: ein frischer, wacher Tee mit Koffein für Tage mit Tempo."
     },
     {
      "id": "weisser_tee_aloe",
      "warum": "Weißer Tee, Zitronenverbene und Rosmarin: klar und leicht, Substanz statt Glanz."
     },
     {
      "id": "star_salutation",
      "warum": "Zitronengras, Salbei, Tulsi und Rosmarin: ein koffeinfreier Kräutertee, der sammelt statt aufzudrehen."
     },
     {
      "id": "klarer_geist",
      "warum": "Ginkgo, Zitronengras und Pfefferminze: Fokus ohne Hektik, schon im Namen."
     }
    ]
   },
   "4": {
    "anker": "Weidenröschen",
    "intro": "Für die Vier steht im Heiltee-Kompass das Weidenröschen. Es steckt in keiner Yogi-Mischung, deshalb stehen hier dunkle, tiefe, weiche Tees, die Gefühl Raum geben, ohne zu überfluten.",
    "tees": [
     {
      "id": "seelenbalsam",
      "warum": "Zimt, Kakaoschalen und Rooibos: ein tiefer, dunkler Tee, der der Innenwelt Raum gibt."
     },
     {
      "id": "abend_rooibos",
      "warum": "Rooibos, Kamille und Vanille: weich und ruhig, ein Tee für den stillen Abend."
     },
     {
      "id": "schoko",
      "warum": "Kakaoschalen, Zimt und Kakaopulver: Tiefe mit Wärme, ohne Schwere."
     },
     {
      "id": "salted_caramel",
      "warum": "Süßholz, Karob, Kakao und eine Prise Salz: süß mit einem leisen Gegenton."
     }
    ]
   },
   "5": {
    "anker": "Haferkraut",
    "intro": "Für die Fünf steht das Haferkraut: nährend und erdend, weg von noch mehr Vergeistigung. Es steckt in keiner Yogi-Mischung. Nahe Verwandte sind die Gräser: Gerstengras kommt in mehreren Sorten vor, dazu erdige Zutaten wie Maca.",
    "tees": [
     {
      "id": "basisch",
      "warum": "Gerstengras, Brennnessel und Löwenzahn: Kräuter, die ganz nah am Boden wachsen."
     },
     {
      "id": "new_inspiration",
      "warum": "Gerstengras, Kurkuma und Zitronenmelisse: ein erdiger, klarer Kräutertee ohne Koffein."
     },
     {
      "id": "natuerliche_balance",
      "warum": "Shiitake, Moringa und Lindenblüten: eine erdige Mischung mit Pilz und Kraut."
     },
     {
      "id": "maca_chai",
      "warum": "Maca, Zimt und Ingwer: ein nährender, erdender Chai."
     }
    ]
   },
   "6": {
    "anker": "Kamille",
    "intro": "Für die Sechs steht die Kamille: vertraut und haltgebend, sie stellt die Alarmbereitschaft leiser. Yogi Tea hat mehrere Mischungen mit Kamille.",
    "tees": [
     {
      "id": "relax",
      "warum": "Kamille, Fenchel und Lindenblüten: ein vertrauter Tee, der die Wachsamkeit leiser stellt."
     },
     {
      "id": "tulsi",
      "warum": "Tulsi, Basilikum und Zitronengras: Entspannung steht schon im Namen."
     },
     {
      "id": "suesse_traeume",
      "warum": "Kamille, Zitronenmelisse und Lavendel: ein sanfter Begleiter für den Abend."
     },
     {
      "id": "natuerliche_abwehr",
      "warum": "Echinacea, Hagebutte und Holunderbeeren: ein Tee, der zum Thema Schutz und Vorsorge passt."
     }
    ]
   },
   "7": {
    "anker": "Pfefferminze",
    "intro": "Für die Sieben steht die Pfefferminze: frisch, beweglich, aufhellend. Bei Yogi Tea gibt es viele minzige Sorten.",
    "tees": [
     {
      "id": "lime_mint",
      "warum": "Pfefferminze, Limone und Zitrone: frisch und leicht, mit Schwung im Glas."
     },
     {
      "id": "suesse_minze",
      "warum": "Pfefferminze, Süßholz und Zimt: Minze mit einer süßen Wärme."
     },
     {
      "id": "lebensfreude",
      "warum": "Basilikum, Orange, Zimt und Chili: ein Tee, der den Namen ernst nimmt."
     },
     {
      "id": "mango_chai",
      "warum": "Mango, Orange und Zimt: fruchtig und weich, mit Chai-Würze."
     }
    ]
   },
   "8": {
    "anker": "Ingwer",
    "intro": "Für die Acht steht der Ingwer: wärmend, kraftvoll, direkt. Ingwer gehört bei Yogi Tea zu fast allen Mischungen.",
    "tees": [
     {
      "id": "ingwer",
      "warum": "Ingwer, Zitronengras, Süßholz und Pfeffer: pur und klar, wärmt von innen."
     },
     {
      "id": "black_chai",
      "warum": "Schwarztee, Zimt, Ingwer und Pfeffer: kräftig, mit Biss."
     },
     {
      "id": "sweet_chili",
      "warum": "Kakaoschalen, Minze, Chili und Ingwer: scharf und süß, Kraft mit Wärme."
     },
     {
      "id": "classic",
      "warum": "Zimt, Ingwer, Kardamom, Nelken und Pfeffer: die Urmischung, ohne Umwege."
     }
    ]
   },
   "9": {
    "anker": "Fenchel",
    "intro": "Für die Neun steht der Fenchel: mild, rund, freundlich ausgleichend. Fenchel steckt bei Yogi Tea in vielen sanften Mischungen.",
    "tees": [
     {
      "id": "himalaya",
      "warum": "Ingwer, Fenchel, Zimt und Anis: mild-würzig und rund."
     },
     {
      "id": "nach_dem_essen",
      "warum": "Kardamom, Fenchel und Koriander: ein sanfter Ausklang nach dem Essen."
     },
     {
      "id": "pumpkin_chai",
      "warum": "Kürbis, Zimt, Karotte und Fenchel: wärmend und nährend, ein Tee für gemütliche Stunden."
     },
     {
      "id": "atem",
      "warum": "Süßholz, Eukalyptus, Ingwer und Fenchel: ein Tee, der zu Atem kommen lässt."
     }
    ]
   }
  },
  "sub": {
   "SE1": {
    "tees": [
     "abend",
     "feel_pure",
     "innere_harmonie",
     "suesses_wohlgefuehl"
    ],
    "text": "Die selbsterhaltende Eins sucht Sicherheit durch Ordnung und Selbstkontrolle. Ruhige, vertraute Tees geben der Ordnung eine freundliche Form."
   },
   "SO1": {
    "tees": [
     "gruene_harmonie",
     "innere_harmonie",
     "glueck",
     "green_chai"
    ],
    "text": "Die soziale Eins tritt für Werte und Prinzipien ein. Tees mit Harmonie im Namen und ein Chai zum Teilen laden dazu ein, auch im Miteinander milder zu werden."
   },
   "SX1": {
    "tees": [
     "ingwer_zitrone",
     "lime_mint",
     "gruentee_ingwer_zitrone",
     "kurkuma_orange"
    ],
    "text": "Die sexuelle Eins sucht Intensität und Vollkommenheit in Begegnungen. Zitrus, Ingwer und Minze bringen Klarheit und Frische ins Gespräch."
   },
   "SE2": {
    "tees": [
     "wohlfuehl",
     "rose",
     "suesses_wohlgefuehl",
     "rote_beeren_vanille"
    ],
    "text": "Die selbsterhaltende Zwei sorgt praktisch für andere. Diese Tees sind kleine Gesten der Fürsorge für sich selbst."
   },
   "SO2": {
    "tees": [
     "sweet_chai",
     "glueck",
     "mango_chai",
     "rose"
    ],
    "text": "Die soziale Zwei knüpft Verbindungen im Umfeld. Chai und Glückstee sind Kannen zum Teilen, bei denen Gespräche entstehen."
   },
   "SX2": {
    "tees": [
     "rose",
     "schoko",
     "spicy_strawberry",
     "salted_caramel"
    ],
    "text": "Die sexuelle Zwei gibt sich intensiv in bestimmte Beziehungen. Rose, Schoko und fruchtig-würzige Mischungen verbinden Zartheit mit einem Hauch von Verführung."
   },
   "SE3": {
    "tees": [
     "klarer_geist",
     "gruener_morgen",
     "mentale_klarheit",
     "morgen_energie"
    ],
    "text": "Die selbsterhaltende Drei sichert sich über Kompetenz und Erledigtes. Klare, wache Tees unterstützen einen ruhigen Arbeitsstart."
   },
   "SO3": {
    "tees": [
     "cranberry_hibiskus",
     "gruene_energie",
     "frischer_fokus",
     "gruentee_matcha_zitrone"
    ],
    "text": "Die soziale Drei achtet auf Wirkung im Umfeld. Leuchtende, anregende Tees passen zu Tagen mit vielen Terminen."
   },
   "SX3": {
    "tees": [
     "weisser_tee_aloe",
     "gruentee_matcha_zitrone",
     "spritzige_blutorange",
     "star_salutation"
    ],
    "text": "Die sexuelle Drei strahlt Anziehung aus und passt sich an, was begehrt wird. Klare, leichte Tees lassen Raum für das eigene Selbst."
   },
   "SE4": {
    "tees": [
     "abend_rooibos",
     "seelenbalsam",
     "salted_caramel",
     "happy_farming"
    ],
    "text": "Die selbsterhaltende Vier hält ihre Gefühle zurück und trägt sie still. Weiche, dunkle Tees für den Abend geben ihnen einen geschützten Raum."
   },
   "SO4": {
    "tees": [
     "suesses_wohlgefuehl",
     "rose",
     "kurkuma_chai",
     "seelenbalsam"
    ],
    "text": "Die soziale Vier zeigt ihre Besonderheit und ihre Tiefe. Süßholz und Kurkuma sind eigenwillige Geschmäcker, Rose die zarte Gegenseite."
   },
   "SX4": {
    "tees": [
     "sweet_chili",
     "schoko",
     "spicy_strawberry",
     "black_chai"
    ],
    "text": "Die sexuelle Vier lebt Intensität und Leidenschaft. Scharf-süß und dunkel-süß passen zu diesem Temperament."
   },
   "SE5": {
    "tees": [
     "basisch",
     "natuerliche_balance",
     "new_inspiration",
     "bauch_balance"
    ],
    "text": "Die selbsterhaltende Fünf zieht sich zurück und spart Energie. Erdige, nährende Mischungen mit Gräsern und Kräutern holen sie sanft in den Körper zurück."
   },
   "SO5": {
    "tees": [
     "klarer_geist",
     "feel_pure",
     "mentale_klarheit",
     "weisser_tee_aloe"
    ],
    "text": "Die soziale Fünf sucht Überblick und Verstehen. Klare, frische Tees und ein würziger Reiniger passen zu langen Denkphasen."
   },
   "SX5": {
    "tees": [
     "maca_chai",
     "kurkuma_chai",
     "pumpkin_chai",
     "echinacea"
    ],
    "text": "Die sexuelle Fünf bindet sich tief an wenige Menschen. Wärmende Chai-Sorten sind für das vertraute Gespräch zu zweit gemacht."
   },
   "SE6": {
    "tees": [
     "relax",
     "abend",
     "suesse_traeume",
     "tulsi"
    ],
    "text": "Die selbsterhaltende Sechs sucht Wärme, Schutz und Verlässliches. Kamille und Abendtees sind vertraute Begleiter, wenn die Wachsamkeit leiser werden soll."
   },
   "SO6": {
    "tees": [
     "tulsi",
     "wohlfuehl",
     "natuerliche_abwehr",
     "innere_harmonie"
    ],
    "text": "Die soziale Sechs findet Halt in Gemeinschaft und Regeln. Tulsi und ein Wohlfühltee verbinden Gelassenheit mit einem Ritual."
   },
   "SX6": {
    "tees": [
     "natuerliche_abwehr",
     "black_chai",
     "echinacea",
     "sweet_chili"
    ],
    "text": "Die sexuelle Sechs begegnet Angst mit Mut und Stärke. Würzige Tees mit Echinacea und kräftige Chai-Sorten passen dazu."
   },
   "SE7": {
    "tees": [
     "lebensfreude",
     "rooibos",
     "mango_chai",
     "rote_beeren_vanille"
    ],
    "text": "Die selbsterhaltende Sieben liebt praktischen Genuss und Vorsorge. Diese Tees sind genussvolle, unkomplizierte Begleiter."
   },
   "SO7": {
    "tees": [
     "lime_mint",
     "green_chai",
     "spritzige_blutorange",
     "suesse_minze"
    ],
    "text": "Die soziale Sieben stellt ihre Begeisterung in den Dienst der Gruppe. Frische Minze, Zitrus und ein grüner Chai sind Kannen für Teamrunden."
   },
   "SX7": {
    "tees": [
     "ingwer_orange_vanille",
     "frischer_fokus",
     "spicy_strawberry",
     "mango_chai"
    ],
    "text": "Die sexuelle Sieben sucht Begeisterung und Abenteuer. Ingwer Orange Vanille und fruchtig-würzige Mischungen haben Schwung und Überraschung."
   },
   "SE8": {
    "tees": [
     "classic",
     "ingwer",
     "kurkuma_orange",
     "halswaermer"
    ],
    "text": "Die selbsterhaltende Acht sichert ihre Autonomie und ihre Bedürfnisse. Classic Chai und Ingwer sind direkte, unverstellte Tees."
   },
   "SO8": {
    "tees": [
     "wohlfuehl",
     "black_chai",
     "kurkuma_chai",
     "halswaermer"
    ],
    "text": "Die soziale Acht stellt ihre Kraft in den Dienst anderer. Ein Wohlfühltee zum Verweilen und kräftige Chais für die Runde passen zu dieser Haltung."
   },
   "SX8": {
    "tees": [
     "sweet_chili",
     "kurkuma_orange",
     "black_chai",
     "ingwer"
    ],
    "text": "Die sexuelle Acht sucht Intensität und Echtes. Chili, Kurkuma und Ingwer sind kräftig, farbig und direkt."
   },
   "SE9": {
    "tees": [
     "rooibos",
     "nach_dem_essen",
     "happy_farming",
     "pumpkin_chai"
    ],
    "text": "Die selbsterhaltende Neun sichert ihren Frieden über Komfort und Routine. Vertraute Rituale halten sanft in Gang."
   },
   "SO9": {
    "tees": [
     "himalaya",
     "sweet_chai",
     "atem",
     "rooibos"
    ],
    "text": "Die soziale Neun findet Frieden in der Gruppe. Milde Kannentees sind für gemeinsame Stunden gemacht."
   },
   "SX9": {
    "tees": [
     "kurkuma_orange",
     "star_salutation",
     "salted_caramel",
     "spritzige_blutorange"
    ],
    "text": "Die sexuelle Neun geht in der Verbindung mit anderen auf. Farbige, klare Mischungen bringen eine eigene Kontur ins Spiel."
   }
  }
 },
 "en": {
  "ui": {
   "kof": "contains caffeine",
   "lim": "limited edition"
  },
  "tees": [
   {
    "id": "abend",
    "name": "Abend (Evening, Bedtime)",
    "ean": "4012824401211",
    "fam": "mild",
    "zutaten": [
     "fennel",
     "chamomile",
     "peppermint",
     "cardamom",
     "lemon balm",
     "lemongrass",
     "valerian root",
     "sage",
     "lavender",
     "nutmeg"
    ]
   },
   {
    "id": "abend_rooibos",
    "name": "Abend Rooibos Vanille (Evening Rooibos Vanilla)",
    "ean": "4012824402225",
    "fam": "suess",
    "zutaten": [
     "rooibos",
     "chamomile",
     "cocoa shells",
     "licorice",
     "vanilla extract",
     "cinnamon",
     "cardamom",
     "lemon balm extract",
     "nutmeg",
     "ginger",
     "cloves",
     "black pepper"
    ],
    "kof": 1
   },
   {
    "id": "ashwagandha",
    "name": "Ashwagandha Balance",
    "ean": "4012824405974",
    "fam": "fruchtig",
    "zutaten": [
     "dried acerola juice",
     "rosehip",
     "lemongrass",
     "peppermint",
     "licorice",
     "hibiscus",
     "ashwagandha",
     "apple",
     "passionflower",
     "lemon balm",
     "aronia berries",
     "cinnamon",
     "orange peel",
     "beetroot",
     "sweet blackberry leaves",
     "cranberries",
     "orange oil",
     "lemon oil"
    ]
   },
   {
    "id": "atem",
    "name": "Atem Tee (Breathe)",
    "ean": "4012824401006",
    "fam": "wuerzig",
    "zutaten": [
     "licorice",
     "eucalyptus",
     "ginger",
     "basil",
     "cinnamon",
     "fennel",
     "thyme",
     "cardamom",
     "lucerne",
     "elecampane",
     "curly mint",
     "cloves",
     "black pepper"
    ]
   },
   {
    "id": "basisch",
    "name": "Basische Kräuter (Alkaline Herbs)",
    "ean": "4012824404243",
    "fam": "mild",
    "zutaten": [
     "lemongrass",
     "lemon balm",
     "dandelion",
     "nettle",
     "curly mint",
     "barley grass",
     "lavender",
     "fennel",
     "carrot",
     "linden blossom",
     "birch leaves",
     "lucerne",
     "parsley"
    ]
   },
   {
    "id": "bauch_balance",
    "name": "Bauch Balance (Belly Balance)",
    "ean": "4012824406650",
    "fam": "mild",
    "zutaten": [
     "barley grass",
     "anise",
     "turmeric",
     "echinacea",
     "lemongrass",
     "nettle",
     "dandelion",
     "sage"
    ]
   },
   {
    "id": "black_chai",
    "name": "Black Chai",
    "ean": "4012824400610",
    "fam": "wuerzig",
    "zutaten": [
     "black tea",
     "cinnamon",
     "ginger",
     "anise",
     "rooibos",
     "roasted chicory root",
     "black pepper",
     "cloves",
     "cinnamon oil",
     "ginger oil"
    ],
    "kof": 1
   },
   {
    "id": "christmas",
    "name": "Christmas Tea",
    "ean": "4012824404229",
    "fam": "wuerzig",
    "zutaten": [
     "rooibos",
     "cinnamon",
     "licorice",
     "coriander",
     "honeybush",
     "orange peel",
     "cloves",
     "black pepper",
     "anise",
     "dried lemon juice",
     "star anise",
     "cardamom",
     "roasted chicory root",
     "lime",
     "orange oil",
     "cinnamon oil"
    ],
    "lim": 1
   },
   {
    "id": "classic",
    "name": "Classic Chai",
    "ean": "4012824400016",
    "fam": "wuerzig",
    "zutaten": [
     "cinnamon",
     "ginger",
     "cardamom",
     "cloves",
     "black pepper",
     "cinnamon oil"
    ]
   },
   {
    "id": "cold_beeren",
    "name": "Cold Brew Beerenmischung",
    "ean": "4012824407015",
    "fam": "kalt",
    "zutaten": [
     "black tea",
     "hibiscus",
     "sage",
     "beetroot",
     "natural blackcurrant flavour",
     "natural blueberry flavour",
     "natural raspberry flavour",
     "rosemary",
     "thyme",
     "stevia",
     "blackcurrants",
     "blueberries",
     "raspberries"
    ],
    "kof": 1
   },
   {
    "id": "cold_erdbeer_orange",
    "name": "Cold Brew Erdbeer-Orange",
    "ean": "4012824406988",
    "fam": "kalt",
    "zutaten": [
     "hibiscus",
     "rosehip",
     "natural strawberry flavour",
     "dried acerola juice",
     "apple",
     "echinacea",
     "orange peel",
     "sage",
     "sweet blackberry leaves",
     "stevia",
     "natural orange blossom flavour",
     "natural blackcurrant flavour",
     "strawberries",
     "pomegranate juice"
    ]
   },
   {
    "id": "cold_pfirsich_mango",
    "name": "Cold Brew Pfirsich-Mango",
    "ean": "4012824406957",
    "fam": "kalt",
    "zutaten": [
     "chamomile",
     "lemongrass",
     "basil",
     "natural peach flavour",
     "lavender",
     "lemon balm",
     "natural mango flavour",
     "stevia",
     "natural lemon-lime flavour",
     "rose oil",
     "lemon peel",
     "mango juice",
     "peach juice"
    ]
   },
   {
    "id": "echinacea",
    "name": "Echinacea",
    "ean": "4012824401518",
    "fam": "wuerzig",
    "zutaten": [
     "cinnamon",
     "echinacea",
     "ginger",
     "fennel",
     "rooibos",
     "roasted chicory root",
     "carob",
     "cardamom",
     "basil",
     "burdock root",
     "turmeric",
     "black pepper",
     "tragacanth",
     "vanilla pods"
    ]
   },
   {
    "id": "feel_pure",
    "name": "Feel Pure",
    "ean": "4012824401266",
    "fam": "wuerzig",
    "zutaten": [
     "licorice",
     "cinnamon",
     "burdock root",
     "ginger",
     "dandelion",
     "fennel",
     "juniper berries",
     "anise",
     "coriander",
     "cardamom",
     "black pepper",
     "parsley",
     "sage",
     "cloves",
     "turmeric"
    ]
   },
   {
    "id": "feel_pure_zitrone",
    "name": "Feel Pure mit Zitrone (Feel Pure Lemon)",
    "ean": "4012824401839",
    "fam": "frisch",
    "zutaten": [
     "lemongrass",
     "dandelion",
     "cinnamon",
     "ginger",
     "licorice",
     "lemon peel",
     "lemon balm",
     "peppermint",
     "lemon oil"
    ]
   },
   {
    "id": "frauen_balance",
    "name": "Frauen Balance (Women's Balance)",
    "ean": "4012824401594",
    "fam": "mild",
    "zutaten": [
     "raspberry leaves",
     "licorice",
     "lemon verbena",
     "cinnamon",
     "lemon balm",
     "ginger",
     "thyme",
     "lavender",
     "oregano",
     "cardamom",
     "black pepper",
     "cloves"
    ]
   },
   {
    "id": "frauen_power",
    "name": "Frauen Power (Women's Power)",
    "ean": "4012824401648",
    "fam": "fruchtig",
    "zutaten": [
     "hibiscus",
     "licorice",
     "peppermint",
     "raspberry leaves",
     "angelica root",
     "black pepper",
     "cinnamon",
     "ginger",
     "cardamom",
     "cloves"
    ]
   },
   {
    "id": "frauentee",
    "name": "Frauen Tee (Women's Tea)",
    "ean": "4012824401082",
    "fam": "mild",
    "zutaten": [
     "fennel",
     "chamomile",
     "peppermint",
     "orange peel",
     "cinnamon",
     "lady's mantle",
     "orange",
     "orange oil",
     "sage",
     "ginger",
     "angelica root",
     "cardamom",
     "juniper berries",
     "eucalyptus",
     "sweet blackberry leaves",
     "cloves",
     "black pepper"
    ]
   },
   {
    "id": "frischer_fokus",
    "name": "Frischer Fokus (Fresh Focus)",
    "ean": "4012824407268",
    "fam": "frisch",
    "zutaten": [
     "lemongrass",
     "ginger",
     "licorice",
     "lemon thyme",
     "peppermint",
     "tulsi (holy basil)",
     "gotu kola",
     "white hibiscus",
     "lemon peel",
     "nana mint",
     "eucalyptus",
     "lime oil",
     "lemon oil"
    ]
   },
   {
    "id": "glueck",
    "name": "Glücks Tee (Happiness Tea)",
    "ean": "4012824401464",
    "fam": "wuerzig",
    "zutaten": [
     "cinnamon",
     "ginger",
     "fennel",
     "licorice",
     "anise",
     "cardamom",
     "orange peel",
     "hops",
     "basil",
     "orange oil",
     "black pepper",
     "lavender",
     "fenugreek",
     "yarrow",
     "cloves",
     "cinnamon oil"
    ]
   },
   {
    "id": "green_chai",
    "name": "Green Chai",
    "ean": "4012824400719",
    "fam": "gruen",
    "zutaten": [
     "cinnamon",
     "curly mint",
     "green tea",
     "ginger",
     "cardamom",
     "cloves",
     "black pepper",
     "cinnamon oil"
    ],
    "kof": 1
   },
   {
    "id": "gruene_energie",
    "name": "Grüne Energie (Green Energy)",
    "ean": "4012824401921",
    "fam": "gruen",
    "zutaten": [
     "green tea",
     "lemongrass",
     "guarana",
     "peppermint",
     "elderflower",
     "ginger",
     "natural strawberry flavour",
     "black pepper",
     "dried kombucha",
     "bergamot oil",
     "lemon verbena",
     "lemon oil",
     "vanilla pods",
     "natural vanilla flavour",
     "natural passion fruit extract"
    ],
    "kof": 1
   },
   {
    "id": "gruene_harmonie",
    "name": "Grüne Harmonie (Green Harmony)",
    "ean": "4012824401877",
    "fam": "gruen",
    "zutaten": [
     "green tea",
     "elderflower",
     "lemongrass",
     "peppermint",
     "dried kombucha",
     "lemon verbena",
     "blood orange oil",
     "vanilla pods",
     "vanilla extract",
     "natural strawberry/peach flavour",
     "natural banana/passion fruit/sour cherry extract"
    ],
    "kof": 1
   },
   {
    "id": "gruener_morgen",
    "name": "Grüner Morgen (Green Morning)",
    "ean": "4012824401976",
    "fam": "gruen",
    "zutaten": [
     "jasmine tea",
     "ginger",
     "licorice",
     "lemongrass",
     "lemon peel",
     "black pepper",
     "lemon verbena"
    ],
    "kof": 1
   },
   {
    "id": "gruentee_ingwer_zitrone",
    "name": "Grüntee Ingwer Zitrone (Green Tea Ginger Lemon)",
    "ean": "4012824402010",
    "fam": "gruen",
    "zutaten": [
     "green tea",
     "ginger",
     "licorice",
     "lemongrass",
     "lemon oil",
     "lemon peel",
     "peppermint",
     "black pepper",
     "ginger oil"
    ],
    "kof": 1
   },
   {
    "id": "gruentee_matcha_zitrone",
    "name": "Grüntee Matcha Zitrone (Green Tea Matcha Lemon)",
    "ean": "4012824403239",
    "fam": "gruen",
    "zutaten": [
     "green tea",
     "lime",
     "licorice",
     "lemongrass",
     "peppermint",
     "black pepper",
     "dried lemon juice",
     "guarana",
     "lemon oil",
     "lemon verbena",
     "lemon peel",
     "ginger"
    ],
    "kof": 1
   },
   {
    "id": "halswaermer",
    "name": "Halswärmer (Throat Warmer)",
    "ean": "4012824401396",
    "fam": "wuerzig",
    "zutaten": [
     "licorice",
     "fennel",
     "cinnamon",
     "orange peel",
     "ginger",
     "thyme",
     "mullein",
     "orange oil",
     "lemon oil",
     "cardamom",
     "black pepper",
     "cloves",
     "turmeric"
    ]
   },
   {
    "id": "happy_farming",
    "name": "Happy Farming",
    "ean": "4012824406926",
    "fam": "suess",
    "zutaten": [
     "lemongrass",
     "rooibos",
     "roasted carob",
     "cinnamon",
     "licorice",
     "roasted chicory root",
     "cocoa shells",
     "orange",
     "orange peel",
     "honeybush",
     "ginger",
     "vanilla pods",
     "vanilla extract",
     "orange oil",
     "lemongrass oil"
    ],
    "kof": 1,
    "lim": 1
   },
   {
    "id": "himalaya",
    "name": "Himalaya Chai",
    "ean": "4012824400061",
    "fam": "wuerzig",
    "zutaten": [
     "ginger",
     "fennel",
     "cinnamon",
     "anise",
     "coriander",
     "cinnamon oil",
     "ginger oil",
     "licorice"
    ]
   },
   {
    "id": "ingwer",
    "name": "Ingwer (Ginger)",
    "ean": "4012824401785",
    "fam": "wuerzig",
    "zutaten": [
     "ginger",
     "lemongrass",
     "licorice",
     "peppermint",
     "black pepper"
    ]
   },
   {
    "id": "ingwer_orange_vanille",
    "name": "Ingwer Orange mit Vanille (Ginger Orange Vanilla)",
    "ean": "4012824401730",
    "fam": "frisch",
    "zutaten": [
     "ginger",
     "licorice",
     "lemongrass",
     "orange peel",
     "black pepper",
     "vanilla extract",
     "orange oil",
     "peppermint",
     "anise"
    ]
   },
   {
    "id": "ingwer_zitrone",
    "name": "Ingwer Zitrone (Ginger Lemon)",
    "ean": "4012824401303",
    "fam": "frisch",
    "zutaten": [
     "ginger",
     "licorice",
     "lemongrass",
     "black pepper",
     "lemon peel",
     "peppermint",
     "lemon oil",
     "hibiscus",
     "dried lemon juice"
    ]
   },
   {
    "id": "innere_harmonie",
    "name": "Innere Harmonie (Inner Harmony)",
    "ean": "4012824403758",
    "fam": "mild",
    "zutaten": [
     "lemon balm",
     "rooibos",
     "licorice",
     "cinnamon",
     "cocoa shells",
     "basil",
     "peppermint",
     "chamomile",
     "rosemary",
     "black pepper",
     "fennel",
     "lavender"
    ],
    "kof": 1
   },
   {
    "id": "klarer_geist",
    "name": "Klarer Geist (Clear Mind)",
    "ean": "4012824401433",
    "fam": "frisch",
    "zutaten": [
     "ginkgo",
     "ginger",
     "lemongrass",
     "licorice",
     "peppermint",
     "lemon verbena",
     "basil",
     "lemon balm",
     "cardamom",
     "black pepper"
    ]
   },
   {
    "id": "kurkuma_chai",
    "name": "Kurkuma Chai (Turmeric Chai)",
    "ean": "4012824404120",
    "fam": "wuerzig",
    "zutaten": [
     "turmeric",
     "cinnamon",
     "licorice",
     "ginger",
     "cardamom",
     "black pepper",
     "apple",
     "fennel",
     "nutmeg blossom",
     "cocoa shells",
     "cloves"
    ],
    "kof": 1
   },
   {
    "id": "kurkuma_orange",
    "name": "Kurkuma Orange (Turmeric Orange)",
    "ean": "4012824404489",
    "fam": "wuerzig",
    "zutaten": [
     "turmeric",
     "licorice",
     "cinnamon",
     "orange peel",
     "apple",
     "ginger",
     "black pepper",
     "cardamom",
     "orange oil",
     "cocoa shells",
     "vanilla pods",
     "white hibiscus",
     "fennel",
     "nutmeg blossom",
     "cloves"
    ],
    "kof": 1
   },
   {
    "id": "lebensfreude",
    "name": "Lebensfreude (Joy of Life)",
    "ean": "4012824401686",
    "fam": "wuerzig",
    "zutaten": [
     "basil",
     "licorice",
     "dried lemon juice",
     "orange peel",
     "cinnamon",
     "ginger",
     "chili",
     "cardamom",
     "cloves",
     "black pepper"
    ]
   },
   {
    "id": "lime_mint",
    "name": "Lime Mint",
    "ean": "4012824400504",
    "fam": "frisch",
    "zutaten": [
     "licorice",
     "lime",
     "curly mint",
     "peppermint",
     "cardamom",
     "dried lemon juice",
     "turmeric",
     "ginger",
     "cinnamon",
     "cloves",
     "black pepper"
    ]
   },
   {
    "id": "maca_chai",
    "name": "Maca Chai",
    "ean": "4012824405349",
    "fam": "wuerzig",
    "zutaten": [
     "licorice",
     "cinnamon",
     "ginger",
     "cardamom",
     "anise",
     "maca",
     "fennel",
     "cloves",
     "roasted chicory root",
     "cocoa shells",
     "black pepper",
     "guarana"
    ],
    "kof": 1
   },
   {
    "id": "mango_chai",
    "name": "Mango Chai",
    "ean": "4012824406537",
    "fam": "fruchtig",
    "zutaten": [
     "cinnamon",
     "licorice",
     "ginger",
     "turmeric",
     "orange",
     "anise",
     "cocoa shells",
     "mango",
     "white hibiscus",
     "orange peel",
     "carrot",
     "orange oil",
     "cardamom",
     "dried lemon juice",
     "lemon oil",
     "apple",
     "black pepper",
     "cloves"
    ],
    "kof": 1
   },
   {
    "id": "meno_harmonie",
    "name": "Meno Harmonie",
    "ean": "4012824407695",
    "fam": "mild",
    "zutaten": [
     "fennel",
     "chamomile",
     "peppermint",
     "orange peel",
     "cinnamon",
     "lady's mantle",
     "orange",
     "orange oil",
     "sage",
     "ginger",
     "angelica root",
     "cardamom",
     "juniper berries",
     "eucalyptus",
     "sweet blackberry leaves",
     "cloves",
     "black pepper"
    ]
   },
   {
    "id": "mentale_klarheit",
    "name": "Mentale Klarheit (Mental Clarity)",
    "ean": "4012824406032",
    "fam": "frisch",
    "zutaten": [
     "peppermint",
     "lemon balm",
     "lemongrass",
     "curly mint",
     "licorice",
     "rooibos",
     "ginger",
     "cinnamon",
     "eucalyptus",
     "ginseng root",
     "maca",
     "black pepper",
     "orange oil",
     "cardamom",
     "peppermint oil"
    ]
   },
   {
    "id": "morgen_energie",
    "name": "Morgen Energie (Morning Energy)",
    "ean": "4012824406353",
    "fam": "gruen",
    "zutaten": [
     "roasted maté",
     "green maté",
     "turmeric",
     "green coffee beans",
     "green rooibos",
     "green tea",
     "roasted dandelion root",
     "licorice",
     "maca",
     "curly mint",
     "carob"
    ],
    "kof": 1
   },
   {
    "id": "maenner",
    "name": "Männer Tee (Men's Tea)",
    "ean": "4012824401358",
    "fam": "wuerzig",
    "zutaten": [
     "ginger",
     "cardamom",
     "licorice",
     "carob",
     "cinnamon",
     "barley malt",
     "roasted chicory root",
     "peppermint",
     "fenugreek",
     "fennel",
     "nutmeg blossom",
     "anise",
     "ginseng root",
     "tragacanth",
     "turmeric",
     "chili",
     "cinnamon oil",
     "black pepper"
    ]
   },
   {
    "id": "nach_dem_essen",
    "name": "Nach Dem Essen (After Meal)",
    "ean": "4012824401044",
    "fam": "mild",
    "zutaten": [
     "cardamom",
     "fennel",
     "coriander",
     "barley malt",
     "licorice",
     "peppermint",
     "ginger",
     "cinnamon",
     "black pepper",
     "cloves"
    ]
   },
   {
    "id": "natuerliche_abwehr",
    "name": "Natürliche Abwehr (Natural Defence)",
    "ean": "4012824403185",
    "fam": "wuerzig",
    "zutaten": [
     "echinacea",
     "rosehip",
     "dried acerola juice",
     "basil",
     "cinnamon",
     "ginger",
     "cardamom",
     "elderberries",
     "black pepper",
     "moringa leaves",
     "hibiscus",
     "cocoa shells",
     "licorice",
     "fennel"
    ],
    "kof": 1
   },
   {
    "id": "natuerliche_balance",
    "name": "Natürliche Balance (Natural Balance)",
    "ean": "4012824404809",
    "fam": "mild",
    "zutaten": [
     "lemongrass",
     "licorice",
     "shiitake",
     "fenugreek",
     "elderflower",
     "linden blossom",
     "basil",
     "moringa",
     "dried kombucha"
    ]
   },
   {
    "id": "new_inspiration",
    "name": "New Inspiration",
    "ean": "4012824406940",
    "fam": "frisch",
    "zutaten": [
     "turmeric",
     "lemon peel",
     "licorice",
     "ginger",
     "dried lemon juice",
     "lemongrass",
     "anise",
     "lemon balm",
     "apple",
     "lemon oil",
     "lemon verbena",
     "barley grass",
     "galangal",
     "cinnamon",
     "fennel",
     "black pepper"
    ],
    "lim": 1
   },
   {
    "id": "cranberry_hibiskus",
    "name": "Positive Energie Cranberry Hibiskus (Positive Energy)",
    "ean": "4012824402171",
    "fam": "fruchtig",
    "zutaten": [
     "black tea",
     "hibiscus",
     "green maté",
     "licorice",
     "lemongrass",
     "dried lemon juice",
     "rosehip",
     "beetroot",
     "cranberries",
     "cinnamon",
     "black pepper",
     "orange peel",
     "rosemary",
     "orange oil",
     "ginger",
     "guarana",
     "ginseng root",
     "cardamom",
     "cloves"
    ],
    "kof": 1
   },
   {
    "id": "pumpkin_chai",
    "name": "Pumpkin Chai",
    "ean": "4012824405462",
    "fam": "wuerzig",
    "zutaten": [
     "pumpkin",
     "licorice",
     "cinnamon",
     "carrot",
     "ginger",
     "cardamom",
     "fennel",
     "anise",
     "beetroot",
     "roasted chicory root",
     "black pepper",
     "cloves",
     "vanilla pods",
     "orange peel",
     "orange oil",
     "vanilla extract",
     "nutmeg"
    ],
    "lim": 1
   },
   {
    "id": "relax",
    "name": "Relax",
    "ean": "4012824401129",
    "fam": "mild",
    "zutaten": [
     "chamomile",
     "fennel",
     "linden blossom",
     "cardamom",
     "barley malt",
     "hibiscus",
     "licorice",
     "lucerne",
     "raspberry leaves",
     "orange peel",
     "rosehip",
     "cinnamon",
     "ginger",
     "cloves",
     "black pepper"
    ]
   },
   {
    "id": "rooibos",
    "name": "Rooibos",
    "ean": "4012824400214",
    "fam": "suess",
    "zutaten": [
     "rooibos",
     "cinnamon",
     "ginger",
     "carob",
     "roasted chicory root",
     "cardamom",
     "cloves",
     "black pepper",
     "cinnamon oil",
     "ginger oil",
     "cardamom oil",
     "vanilla extract"
    ]
   },
   {
    "id": "rose",
    "name": "Rose",
    "ean": "4012824400764",
    "fam": "mild",
    "zutaten": [
     "hibiscus",
     "chamomile",
     "elderflower",
     "linden blossom",
     "rose petals",
     "cinnamon",
     "lavender",
     "yarrow",
     "ginger",
     "black pepper",
     "fennel",
     "turmeric",
     "geranium oil",
     "sunflower petals",
     "lucerne",
     "plantain",
     "cardamom",
     "cloves",
     "dried kombucha"
    ],
    "kof": 1
   },
   {
    "id": "rote_beeren_vanille",
    "name": "Rote Beeren Vanille (Red Berries Vanilla)",
    "ean": "4012824406285",
    "fam": "fruchtig",
    "zutaten": [
     "hibiscus",
     "licorice",
     "apple",
     "rosehip",
     "cinnamon",
     "aronia berries",
     "orange peel",
     "ginger",
     "elderflower",
     "beetroot",
     "vanilla extract",
     "strawberries",
     "cranberries",
     "elderberries",
     "juniper berries",
     "orange oil",
     "vanilla pods"
    ]
   },
   {
    "id": "salted_caramel",
    "name": "Salted Caramel",
    "ean": "4012824406520",
    "fam": "suess",
    "zutaten": [
     "licorice",
     "roasted carob",
     "cocoa powder",
     "roasted chicory root",
     "cinnamon",
     "anise",
     "salt",
     "vanilla extract",
     "low-fat cocoa powder",
     "sweet blackberry leaves",
     "natural caramel flavour"
    ],
    "kof": 1,
    "lim": 1
   },
   {
    "id": "schoko",
    "name": "Schoko (Chocolate)",
    "ean": "4012824400115",
    "fam": "suess",
    "zutaten": [
     "cocoa shells",
     "cinnamon",
     "licorice",
     "carob",
     "barley malt",
     "low-fat cocoa powder",
     "cardamom",
     "ginger",
     "cloves",
     "ginger oil",
     "black pepper",
     "vanilla extract",
     "cinnamon oil",
     "vanilla pods"
    ],
    "kof": 1
   },
   {
    "id": "seelenbalsam",
    "name": "Seelenbalsam (Soul Balm)",
    "ean": "4012824405493",
    "fam": "suess",
    "zutaten": [
     "cinnamon",
     "licorice",
     "cocoa shells",
     "rooibos",
     "roasted chicory root",
     "hibiscus",
     "ginger",
     "anise",
     "honeybush",
     "orange peel",
     "carob",
     "natural cocoa extract",
     "low-fat cocoa powder",
     "black pepper",
     "orange oil",
     "vanilla pods",
     "vanilla extract"
    ],
    "kof": 1
   },
   {
    "id": "spicy_strawberry",
    "name": "Spicy Strawberry",
    "ean": "4012824407206",
    "fam": "fruchtig",
    "zutaten": [
     "hibiscus",
     "beetroot",
     "licorice",
     "coriander",
     "ginger",
     "orange",
     "cinnamon",
     "natural strawberry flavour",
     "sweet blackberry leaves",
     "lemon peel",
     "anise",
     "orange oil",
     "lemon oil",
     "black pepper",
     "strawberries",
     "chili"
    ]
   },
   {
    "id": "spritzige_blutorange",
    "name": "Spritzige Blutorange (Sparkling Blood Orange)",
    "ean": "4012824406599",
    "fam": "fruchtig",
    "zutaten": [
     "hibiscus",
     "lemongrass",
     "licorice",
     "coriander",
     "roasted chicory root",
     "orange",
     "orange peel",
     "beetroot",
     "blood orange oil",
     "orange oil"
    ]
   },
   {
    "id": "star_salutation",
    "name": "Star Salutation",
    "ean": "4012824406131",
    "fam": "frisch",
    "zutaten": [
     "lemongrass",
     "peppermint",
     "sage",
     "ginger",
     "tulsi (holy basil)",
     "rosemary",
     "basil",
     "licorice",
     "thyme",
     "lavender",
     "pink grapefruit oil",
     "cardamom"
    ]
   },
   {
    "id": "sweet_chai",
    "name": "Sweet Chai",
    "ean": "4012824400665",
    "fam": "suess",
    "zutaten": [
     "anise",
     "fennel",
     "licorice",
     "cardamom",
     "black pepper",
     "cinnamon",
     "ginger",
     "cloves"
    ]
   },
   {
    "id": "sweet_chili",
    "name": "Sweet Chili",
    "ean": "4012824400269",
    "fam": "wuerzig",
    "zutaten": [
     "licorice",
     "cocoa shells",
     "curly mint",
     "fennel",
     "anise",
     "ginger",
     "peppermint",
     "nettle",
     "cinnamon",
     "chili",
     "cardamom",
     "cloves",
     "black pepper"
    ],
    "kof": 1
   },
   {
    "id": "suesse_minze",
    "name": "Süße Minze (Sweet Mint)",
    "ean": "4012824400306",
    "fam": "frisch",
    "zutaten": [
     "peppermint",
     "licorice",
     "cinnamon",
     "cardamom",
     "ginger",
     "cloves",
     "black pepper",
     "cinnamon oil",
     "cardamom oil",
     "ginger oil"
    ]
   },
   {
    "id": "suesse_traeume",
    "name": "Süße Träume (Sweet Dreams)",
    "ean": "4012824407329",
    "fam": "mild",
    "zutaten": [
     "fennel",
     "peppermint",
     "lemongrass",
     "chamomile",
     "lemon balm",
     "sage",
     "lavender",
     "cardamom",
     "hops",
     "lavender oil",
     "nutmeg"
    ]
   },
   {
    "id": "suesses_wohlgefuehl",
    "name": "Süßes Wohlgefühl (Sweet Comfort, licorice)",
    "ean": "4012824400160",
    "fam": "suess",
    "zutaten": [
     "licorice",
     "cinnamon",
     "orange peel",
     "ginger",
     "cardamom",
     "roasted chicory root",
     "cloves",
     "orange oil",
     "black pepper",
     "vanilla extract"
    ]
   },
   {
    "id": "tulsi",
    "name": "Tulsi Relax",
    "ean": "4012824405585",
    "fam": "mild",
    "zutaten": [
     "tulsi (holy basil)",
     "basil",
     "licorice",
     "ginger",
     "lemongrass",
     "orange peel",
     "cinnamon",
     "lemon peel",
     "orange oil",
     "lime",
     "black pepper",
     "cardamom",
     "cloves",
     "tarragon"
    ]
   },
   {
    "id": "weisser_tee_aloe",
    "name": "Weißer Tee mit Aloe Vera (White Tea with Aloe Vera)",
    "ean": "4012824404328",
    "fam": "gruen",
    "zutaten": [
     "basil",
     "white tea",
     "lemon verbena",
     "licorice",
     "jasmine tea",
     "cinnamon",
     "rosemary",
     "sage",
     "turmeric",
     "fennel",
     "cocoa shells",
     "chamomile",
     "schisandra berries",
     "200x concentrated aloe vera gel"
    ],
    "kof": 1
   },
   {
    "id": "wohlfuehl",
    "name": "Wohlfühl Tee (Well-being Tea)",
    "ean": "4012824401556",
    "fam": "wuerzig",
    "zutaten": [
     "cinnamon",
     "sage",
     "licorice",
     "oregano",
     "cardamom",
     "lemongrass",
     "ginger",
     "cloves",
     "lemon verbena",
     "black pepper",
     "cinnamon oil",
     "ginger oil",
     "fenugreek",
     "coriander"
    ]
   }
  ],
  "fam": {
   "wuerzig": "spicy-warm",
   "mild": "mild & gentle",
   "frisch": "fresh & light",
   "gruen": "green & awake",
   "suess": "sweet & soft",
   "fruchtig": "fruity",
   "kalt": "Cold Brew (cold)"
  },
  "typen": {
   "1": {
    "anker": "lemon balm",
    "intro": "In the Healing-Tea Compass the Type 1 herb is lemon balm: the strictness may soften without losing clarity. Yogi Tea has several blends with lemon balm.",
    "tees": [
     {
      "id": "innere_harmonie",
      "warum": "Lemon balm, chamomile and rosemary: a mild order of herbs that balance one another."
     },
     {
      "id": "abend",
      "warum": "Lemon balm with fennel and chamomile: a calm end to the day at which nothing needs improving any more."
     },
     {
      "id": "feel_pure_zitrone",
      "warum": "Lemon balm, lemon and dandelion: clarity and freshness suit the One's wish for purity."
     },
     {
      "id": "mentale_klarheit",
      "warum": "Peppermint, lemon balm and lemongrass: a bright, clear tea for demanding days."
     }
    ]
   },
   "2": {
    "anker": "rose petals",
    "intro": "For the Two the herb is the rose: care may also flow inward. Yogi Tea has its own rose blend and warm, familiar varieties.",
    "tees": [
     {
      "id": "rose",
      "warum": "Rose petals, hibiscus and elderflower: a delicate tea that turns attention to oneself."
     },
     {
      "id": "wohlfuehl",
      "warum": "Cinnamon, licorice and sage: a warm, familiar blend that allows care for oneself."
     },
     {
      "id": "sweet_chai",
      "warum": "Anise, fennel, cardamom and cinnamon: a gently sweet chai that is happily shared."
     },
     {
      "id": "suesses_wohlgefuehl",
      "warum": "Licorice, cinnamon and orange: a sweet comfort, already in the name."
     }
    ]
   },
   "3": {
    "anker": "rosemary",
    "intro": "For the Three the herb is rosemary: activity and drive are led back to inner focus. Rosemary is part of several Yogi Tea blends.",
    "tees": [
     {
      "id": "cranberry_hibiskus",
      "warum": "Black tea, hibiscus, maté and rosemary: a fresh, alert tea with caffeine for days with pace."
     },
     {
      "id": "weisser_tee_aloe",
      "warum": "White tea, lemon verbena and rosemary: clear and light, substance instead of shine."
     },
     {
      "id": "star_salutation",
      "warum": "Lemongrass, sage, tulsi and rosemary: a caffeine-free herbal tea that gathers rather than winds up."
     },
     {
      "id": "klarer_geist",
      "warum": "Ginkgo, lemongrass and peppermint: focus without haste, already in the name."
     }
    ]
   },
   "4": {
    "anker": "willowherb",
    "intro": "For the Four the Healing-Tea Compass names willowherb. It is not part of any Yogi blend, so here are dark, deep, soft teas that give feeling room without flooding.",
    "tees": [
     {
      "id": "seelenbalsam",
      "warum": "Cinnamon, cocoa shells and rooibos: a deep, dark tea that gives the inner world room."
     },
     {
      "id": "abend_rooibos",
      "warum": "Rooibos, chamomile and vanilla: soft and calm, a tea for a quiet evening."
     },
     {
      "id": "schoko",
      "warum": "Cocoa shells, cinnamon and cocoa powder: depth with warmth, without heaviness."
     },
     {
      "id": "salted_caramel",
      "warum": "Licorice, carob, cocoa and a pinch of salt: sweet with a quiet counter-note."
     }
    ]
   },
   "5": {
    "anker": "oat grass",
    "intro": "For the Five the herb is oat grass: nourishing and grounding, away from still more intellectualising. It is not part of any Yogi blend. Close relatives are the grasses: barley grass is in several varieties, joined by earthy ingredients such as maca.",
    "tees": [
     {
      "id": "basisch",
      "warum": "Barley grass, nettle and dandelion: herbs that grow very close to the ground."
     },
     {
      "id": "new_inspiration",
      "warum": "Barley grass, turmeric and lemon balm: an earthy, clear herbal tea without caffeine."
     },
     {
      "id": "natuerliche_balance",
      "warum": "Shiitake, moringa and linden blossom: an earthy blend with mushroom and herb."
     },
     {
      "id": "maca_chai",
      "warum": "Maca, cinnamon and ginger: a nourishing, grounding chai."
     }
    ]
   },
   "6": {
    "anker": "chamomile",
    "intro": "For the Six the herb is chamomile: familiar and steadying, it turns the alertness down. Yogi Tea has several blends with chamomile.",
    "tees": [
     {
      "id": "relax",
      "warum": "Chamomile, fennel and linden blossom: a familiar tea that turns vigilance down."
     },
     {
      "id": "tulsi",
      "warum": "Tulsi, basil and lemongrass: relaxation is already in the name."
     },
     {
      "id": "suesse_traeume",
      "warum": "Chamomile, lemon balm and lavender: a gentle companion for the evening."
     },
     {
      "id": "natuerliche_abwehr",
      "warum": "Echinacea, rosehip and elderberries: a tea that fits the theme of protection and precaution."
     }
    ]
   },
   "7": {
    "anker": "peppermint",
    "intro": "For the Seven the herb is peppermint: fresh, mobile, brightening. Yogi Tea has many minty varieties.",
    "tees": [
     {
      "id": "lime_mint",
      "warum": "Peppermint, lime and lemon: fresh and light, with zest in the glass."
     },
     {
      "id": "suesse_minze",
      "warum": "Peppermint, licorice and cinnamon: mint with a sweet warmth."
     },
     {
      "id": "lebensfreude",
      "warum": "Basil, orange, cinnamon and chili: a tea that takes its name seriously."
     },
     {
      "id": "mango_chai",
      "warum": "Mango, orange and cinnamon: fruity and soft, with chai spice."
     }
    ]
   },
   "8": {
    "anker": "ginger",
    "intro": "For the Eight the herb is ginger: warming, powerful, direct. Ginger is part of almost every Yogi Tea blend.",
    "tees": [
     {
      "id": "ingwer",
      "warum": "Ginger, lemongrass, licorice and pepper: pure and clear, warms from the inside."
     },
     {
      "id": "black_chai",
      "warum": "Black tea, cinnamon, ginger and pepper: strong, with bite."
     },
     {
      "id": "sweet_chili",
      "warum": "Cocoa shells, mint, chili and ginger: hot and sweet, strength with warmth."
     },
     {
      "id": "classic",
      "warum": "Cinnamon, ginger, cardamom, cloves and pepper: the original blend, no detours."
     }
    ]
   },
   "9": {
    "anker": "fennel",
    "intro": "For the Nine the herb is fennel: mild, round, kindly balancing. Fennel is part of many gentle Yogi Tea blends.",
    "tees": [
     {
      "id": "himalaya",
      "warum": "Ginger, fennel, cinnamon and anise: mild-spicy and round."
     },
     {
      "id": "nach_dem_essen",
      "warum": "Cardamom, fennel and coriander: a gentle finish after a meal."
     },
     {
      "id": "pumpkin_chai",
      "warum": "Pumpkin, cinnamon, carrot and fennel: warming and nourishing, a tea for cosy hours."
     },
     {
      "id": "atem",
      "warum": "Licorice, eucalyptus, ginger and fennel: a tea that lets you catch your breath."
     }
    ]
   }
  },
  "sub": {
   "SE1": {
    "tees": [
     "abend",
     "feel_pure",
     "innere_harmonie",
     "suesses_wohlgefuehl"
    ],
    "text": "The self-preservation One seeks safety through order and self-control. Calm, familiar teas give order a friendly form."
   },
   "SO1": {
    "tees": [
     "gruene_harmonie",
     "innere_harmonie",
     "glueck",
     "green_chai"
    ],
    "text": "The social One stands up for values and principles. Teas with harmony in the name and a chai for sharing invite becoming milder in dealing with others too."
   },
   "SX1": {
    "tees": [
     "ingwer_zitrone",
     "lime_mint",
     "gruentee_ingwer_zitrone",
     "kurkuma_orange"
    ],
    "text": "The sexual One seeks intensity and perfection in encounters. Citrus, ginger and mint bring clarity and freshness to conversation."
   },
   "SE2": {
    "tees": [
     "wohlfuehl",
     "rose",
     "suesses_wohlgefuehl",
     "rote_beeren_vanille"
    ],
    "text": "The self-preservation Two cares practically for others. These teas are small gestures of care for oneself."
   },
   "SO2": {
    "tees": [
     "sweet_chai",
     "glueck",
     "mango_chai",
     "rose"
    ],
    "text": "The social Two weaves connections in its surroundings. Chai and Happiness Tea are pots for sharing, where conversations arise."
   },
   "SX2": {
    "tees": [
     "rose",
     "schoko",
     "spicy_strawberry",
     "salted_caramel"
    ],
    "text": "The sexual Two gives itself intensely to particular relationships. Rose, chocolate and fruity-spicy blends combine tenderness with a touch of seduction."
   },
   "SE3": {
    "tees": [
     "klarer_geist",
     "gruener_morgen",
     "mentale_klarheit",
     "morgen_energie"
    ],
    "text": "The self-preservation Three secures itself through competence and getting things done. Clear, alert teas support a calm start to work."
   },
   "SO3": {
    "tees": [
     "cranberry_hibiskus",
     "gruene_energie",
     "frischer_fokus",
     "gruentee_matcha_zitrone"
    ],
    "text": "The social Three pays attention to impact on its surroundings. Bright, stimulating teas suit days with many appointments."
   },
   "SX3": {
    "tees": [
     "weisser_tee_aloe",
     "gruentee_matcha_zitrone",
     "spritzige_blutorange",
     "star_salutation"
    ],
    "text": "The sexual Three radiates attraction and adapts to what is desired. Clear, light teas leave room for the self."
   },
   "SE4": {
    "tees": [
     "abend_rooibos",
     "seelenbalsam",
     "salted_caramel",
     "happy_farming"
    ],
    "text": "The self-preservation Four holds feelings back and carries them quietly. Soft, dark teas for the evening give them a protected space."
   },
   "SO4": {
    "tees": [
     "suesses_wohlgefuehl",
     "rose",
     "kurkuma_chai",
     "seelenbalsam"
    ],
    "text": "The social Four shows its particularity and depth. Licorice and turmeric are distinctive tastes, rose the delicate counterpart."
   },
   "SX4": {
    "tees": [
     "sweet_chili",
     "schoko",
     "spicy_strawberry",
     "black_chai"
    ],
    "text": "The sexual Four lives intensity and passion. Hot-sweet and dark-sweet suit this temperament."
   },
   "SE5": {
    "tees": [
     "basisch",
     "natuerliche_balance",
     "new_inspiration",
     "bauch_balance"
    ],
    "text": "The self-preservation Five withdraws and conserves energy. Earthy, nourishing blends with grasses and herbs gently bring it back into the body."
   },
   "SO5": {
    "tees": [
     "klarer_geist",
     "feel_pure",
     "mentale_klarheit",
     "weisser_tee_aloe"
    ],
    "text": "The social Five seeks overview and understanding. Clear, fresh teas and a spicy cleanser suit long phases of thinking."
   },
   "SX5": {
    "tees": [
     "maca_chai",
     "kurkuma_chai",
     "pumpkin_chai",
     "echinacea"
    ],
    "text": "The sexual Five bonds deeply with a few people. Warming chai varieties are made for an intimate conversation for two."
   },
   "SE6": {
    "tees": [
     "relax",
     "abend",
     "suesse_traeume",
     "tulsi"
    ],
    "text": "The self-preservation Six seeks warmth, protection and reliability. Chamomile and evening teas are familiar companions when vigilance should quieten."
   },
   "SO6": {
    "tees": [
     "tulsi",
     "wohlfuehl",
     "natuerliche_abwehr",
     "innere_harmonie"
    ],
    "text": "The social Six finds support in community and rules. Tulsi and a well-being tea combine serenity with a ritual."
   },
   "SX6": {
    "tees": [
     "natuerliche_abwehr",
     "black_chai",
     "echinacea",
     "sweet_chili"
    ],
    "text": "The sexual Six meets fear with courage and strength. Spicy teas with echinacea and strong chai varieties suit this."
   },
   "SE7": {
    "tees": [
     "lebensfreude",
     "rooibos",
     "mango_chai",
     "rote_beeren_vanille"
    ],
    "text": "The self-preservation Seven loves practical enjoyment and provision. These teas are enjoyable, uncomplicated companions."
   },
   "SO7": {
    "tees": [
     "lime_mint",
     "green_chai",
     "spritzige_blutorange",
     "suesse_minze"
    ],
    "text": "The social Seven puts its enthusiasm in the service of the group. Fresh mint, citrus and a green chai are pots for team rounds."
   },
   "SX7": {
    "tees": [
     "ingwer_orange_vanille",
     "frischer_fokus",
     "spicy_strawberry",
     "mango_chai"
    ],
    "text": "The sexual Seven seeks enthusiasm and adventure. Ginger Orange Vanilla and fruity-spicy blends have zest and surprise."
   },
   "SE8": {
    "tees": [
     "classic",
     "ingwer",
     "kurkuma_orange",
     "halswaermer"
    ],
    "text": "The self-preservation Eight secures its autonomy and needs. Classic Chai and ginger are direct, unvarnished teas."
   },
   "SO8": {
    "tees": [
     "wohlfuehl",
     "black_chai",
     "kurkuma_chai",
     "halswaermer"
    ],
    "text": "The social Eight puts its strength in the service of others. A well-being tea for lingering and strong chais for the group suit this attitude."
   },
   "SX8": {
    "tees": [
     "sweet_chili",
     "kurkuma_orange",
     "black_chai",
     "ingwer"
    ],
    "text": "The sexual Eight seeks intensity and what is real. Chili, turmeric and ginger are strong, colourful and direct."
   },
   "SE9": {
    "tees": [
     "rooibos",
     "nach_dem_essen",
     "happy_farming",
     "pumpkin_chai"
    ],
    "text": "The self-preservation Nine secures its peace through comfort and routine. Familiar rituals gently keep things going."
   },
   "SO9": {
    "tees": [
     "himalaya",
     "sweet_chai",
     "atem",
     "rooibos"
    ],
    "text": "The social Nine finds peace in the group. Mild pot teas are made for shared hours."
   },
   "SX9": {
    "tees": [
     "kurkuma_orange",
     "star_salutation",
     "salted_caramel",
     "spritzige_blutorange"
    ],
    "text": "The sexual Nine merges in connection with others. Colourful, clear blends bring a contour of their own into play."
   }
  }
 }
};
