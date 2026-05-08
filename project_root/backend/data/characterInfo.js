class Person {
    constructor(translations) {
        this.translations = translations;
    }

    // Method to get translations dynamically
    get language() {
        const selectedLanguage = localStorage.getItem('language') || 'en';
        return this.translations[selectedLanguage] || this.translations['en']; // Fallback to English
    }
}

// Creating Captain America with translations
const captainAmerica = new Person({
    en: {
        name: "Captain America",
        gender: "Male",
        species: "Human",
        affiliation: "Avengers",
        role: "Vanguard",
        eyeColor: ["Blue"],
        hairColor: ["Blonde"],
        hp: 575,
        dateOfOrigin: 1941,
        emoji: ["⭐", "🕰️", "🛡️", "🇺🇸"],
        abilities: [
            "SENTINEL STRIKE", "FREEDOM CHARGE", "LEADING DASH",
            "VIBRANIUM ENERGY SAW", "LIBERTY RUSH", "SUPER-SOLDIER SLAM", "LIVING LEGEND"
        ],
        ult: "FREEDOM CHARGE"
    },
    es: {
        name: "Capitán América",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Vengadores",
        role: "Vanguardia",
        eyeColor: ["Azul"],
        hairColor: ["Rubio"],
        hp: 575,
        dateOfOrigin: 1941,
        emoji: ["⭐", "🕰️", "🛡️", "🇺🇸"],
        abilities: [
            "GOLPE CENTINELA", "CARGA DE LIBERTAD", "SALTO DE LIDERAZGO",
            "SIERRA DE ENERGÍA VIBRANIUM", "IMPULSO DE LIBERTAD", "GOLPE DE SÚPER SOLDADO", "LEYENDA VIVA"
        ],
        ult: "CARGA DE LIBERTAD"
    },
    fr: {
        name: "Capitaine Amérique",
        gender: "Homme",
        species: "Humain",
        affiliation: "Avengers",
        role: "Avant-garde",
        eyeColor: ["Bleu"],
        hairColor: ["Blonde"],
        hp: 575,
        dateOfOrigin: 1941,
        emoji: ["⭐", "🕰️", "🛡️", "🇺🇸"],
        abilities: [
            "FRAPPE SENTINELLE", "CHARGE DE LA LIBERTÉ", "RUÉE DE CHEF",
            "SCIE ÉNERGÉTIQUE VIBRANIUM", "COURSE DE LIBERTÉ", "COUP DU SUPER-SOLDAT", "LÉGENDE VIVANTE"
        ],
        ult: "CHARGE DE LA LIBERTÉ"
    },
    de: {  // German
        name: "Captain Amerika",
        gender: "Männlich",
        species: "Menschlich",
        affiliation: "Avengers",
        role: "Vorreiter",
        eyeColor: ["Blau"],
        hairColor: ["Blonde"],
        hp: 575,
        dateOfOrigin: 1941,
        emoji: ["⭐", "🕰️", "🛡️", "🇺🇸"],
        abilities: [
            "WÄCHTER SCHLAG", "FREIHEITSSTURM", "FÜHRUNGSSCHLAG",
            "VIBRANIUM ENERGIESÄGE", "FREIHEITSSTURM", "SUPERSOLDATEN SCHLAG", "LEBENDIGE LEGENDE"
        ],
        ult: "FREIHEITSSTURM"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "美国队长",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "先锋",
        eyeColor: ["蓝色"],
        hairColor: ["金色"],
        hp: 575,
        dateOfOrigin: 1941,
        emoji: ["⭐", "🕰️", "🛡️", "🇺🇸"],
        abilities: [
            "哨兵打击", "自由冲锋", "领导冲刺",
            "振金能量锯", "自由突袭", "超级士兵猛击", "活传奇"
        ],
        ult: "自由冲锋"
    },
});

const doctorStrange = new Person({
    en: {
        name: "Doctor Strange",
        gender: "Male",
        species: "Human",
        affiliation: "Avengers",
        role: "Vanguard",
        eyeColor: ["Green"],
        hairColor: ["Brown", "Grey"],
        hp: 675,
        dateOfOrigin: 1963,
        emoji: ["👁️", "📖", "✨", "🧙‍♂️"],
        abilities: [
            "DAGGERS OF DENAK", "EYE OF AGAMOTTO", "CLOAK OF LEVITATION",
            "MAELSTROM OF MADNESS", "PENTAGRAM OF FARALLAH", "SHIELD OF THE SERAPHIM"
        ],
        ult: "EYE OF AGAMOTTO"
    },
    es: {  // Spanish
        name: "Doctor Strange",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Vengadores",
        role: "Vanguardia",
        eyeColor: ["Verde"],
        hairColor: ["Marrón", "Gris"],
        hp: 675,
        dateOfOrigin: 1963,
        emoji: ["👁️", "📖", "✨", "🧙‍♂️"],
        abilities: [
            "DAGAS DE DENAK", "OJO DE AGAMOTTO", "CAPA DE LEVITACIÓN",
            "MAELSTROM DE LA LOCURA", "PENTAGRAMA DE FARALLAH", "ESCUDO DEL SERAFÍN"
        ],
        ult: "OJO DE AGAMOTTO"
    },
    fr: {  // French
        name: "Docteur Strange",
        gender: "Homme",
        species: "Humain",
        affiliation: "Avengers",
        role: "Avant-garde",
        eyeColor: ["Vert"],
        hairColor: ["Marron", "Gris"],
        hp: 675,
        dateOfOrigin: 1963,
        emoji: ["👁️", "📖", "✨", "🧙‍♂️"],
        abilities: [
            "DAGUES DE DENAK", "ŒIL D'AGAMOTTO", "CAPE DE LÉVITATION",
            "MAELSTROM DE LA FOLIE", "PENTAGRAMME DE FARALLAH", "BOUCLIER DU SÉRAPHIN"
        ],
        ult: "ŒIL D'AGAMOTTO"
    },
    de: {  // German
        name: "Doktor Strange",
        gender: "Männlich",
        species: "Menschlich",
        affiliation: "Avengers",
        role: "Vorreiter",
        eyeColor: ["Grün"],
        hairColor: ["Braun", "Grau"],
        hp: 675,
        dateOfOrigin: 1963,
        emoji: ["👁️", "📖", "✨", "🧙‍♂️"],
        abilities: [
            "DOLCHE VON DENAK", "AUGE VON AGAMOTTO", "UMHANG DER LEVITATION",
            "MAELSTROM DES WAHNSINNS", "PENTAGRAMM VON FARALLAH", "SCHILD DES SERAPHIM"
        ],
        ult: "AUGE VON AGAMOTTO"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "奇异博士",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "先锋",
        eyeColor: ["绿色"],
        hairColor: ["棕色", "灰色"],
        hp: 675,
        dateOfOrigin: 1963,
        emoji: ["👁️", "📖", "✨", "🧙‍♂️"],
        abilities: [
            "德纳克匕首", "阿戈摩托之眼", "悬浮斗篷",
            "疯狂漩涡", "法拉拉五角星", "炽天使护盾"
        ],
        ult: "阿戈摩托之眼"
    }
});

const groot = new Person({
    en: {
        name: "Groot",
        gender: "Male",
        species: "Flora Colossus",
        affiliation: "Guardians",
        role: "Vanguard",
        eyeColor: ["Green"],
        hairColor: ["None"],
        hp: 850,
        dateOfOrigin: 1960,
        emoji: ["🌱", "🌌", "🌳", "🪵"],
        abilities: [
            "VINE STRIKE", "STRANGLING PRISON", "THORNLASH WALL",
            "IRONWOOD WALL", "SPORE BOMB"
        ],
        ult: "STRANGLING PRISON"
    },
    es: {  // Spanish
        name: "Groot",
        gender: "Masculino",
        species: "Coloso Flora",
        affiliation: "Guardianes",
        role: "Vanguardia",
        eyeColor: ["Verde"],
        hairColor: ["Ninguno"],
        hp: 850,
        dateOfOrigin: 1960,
        emoji: ["🌱", "🌌", "🌳", "🪵"],
        abilities: [
            "GOLPE DE VID", "PRISIÓN ESTRANGULADORA", "MURO DE LATIGAZO ESPINOSO",
            "MURO DE MADERA DE HIERRO", "BOMBA DE ESPORAS"
        ],
        ult: "PRISIÓN ESTRANGULADORA"
    },
    fr: {  // French
        name: "Groot",
        gender: "Homme",
        species: "Colosse Flore",
        affiliation: "Gardiens",
        role: "Avant-garde",
        eyeColor: ["Vert"],
        hairColor: ["Aucun"],
        hp: 850,
        dateOfOrigin: 1960,
        emoji: ["🌱", "🌌", "🌳", "🪵"],
        abilities: [
            "FRAPPE DE LIANE", "PRISON ÉTRANGLEUSE", "MUR DE LACETS D'ÉPINES",
            "MUR DE BOIS DE FER", "BOMBE DE SPORES"
        ],
        ult: "PRISON ÉTRANGLEUSE"
    },
    de: {  // German
        name: "Groot",
        gender: "Männlich",
        species: "Flora Koloss",
        affiliation: "Wächter",
        role: "Vorreiter",
        eyeColor: ["Grün"],
        hairColor: ["Keine"],
        hp: 850,
        dateOfOrigin: 1960,
        emoji: ["🌱", "🌌", "🌳", "🪵"],
        abilities: [
            "RANKENSCHLAG", "ERSTICKUNGSGEFÄNGNIS", "DORNENPEITSCHENWAND",
            "EISENHOLZWAND", "SPORENBOMBE"
        ],
        ult: "ERSTICKUNGSGEFÄNGNIS"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "格鲁特",
        gender: "男性",
        species: "植物巨人",
        affiliation: "银河护卫队",
        role: "先锋",
        eyeColor: ["绿色"],
        hairColor: ["无"],
        hp: 850,
        dateOfOrigin: 1960,
        emoji: ["🌱", "🌌", "🌳", "🪵"],
        abilities: [
            "藤蔓打击", "缠绕监狱", "荆棘鞭墙",
            "铁木墙", "孢子炸弹"
        ],
        ult: "缠绕监狱"
    }
});

const hulk = new Person({
    en: {
        name: "Hulk",
        gender: "Male",
        species: "Human",
        affiliation: "Avengers",
        role: "Vanguard",
        eyeColor: ["Brown", "Green"],
        hairColor: ["Brown", "Black"],
        hp: 750,
        dateOfOrigin: 1962,
        emoji: ["🧪", "💥", "💪", "💚"],
        abilities: [
            "GAMMA RAY GUN", "PUNY BANNER", "GAMMA GRENADE"
        ],
        ult: "PUNY BANNER"
    },
    es: {  // Spanish
        name: "Hulk",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Vengadores",
        role: "Vanguardia",
        eyeColor: ["Marrón", "Verde"],
        hairColor: ["Marrón", "Negro"],
        hp: 750,
        dateOfOrigin: 1962,
        emoji: ["🧪", "💥", "💪", "💚"],
        abilities: [
            "PISTOLA DE RAYOS GAMMA", "DÉBIL BANNER", "GRANADA GAMMA"
        ],
        ult: "DÉBIL BANNER"
    },
    fr: {  // French
        name: "Hulk",
        gender: "Homme",
        species: "Humain",
        affiliation: "Avengers",
        role: "Avant-garde",
        eyeColor: ["Marron", "Vert"],
        hairColor: ["Marron", "Noir"],
        hp: 750,
        dateOfOrigin: 1962,
        emoji: ["🧪", "💥", "💪", "💚"],
        abilities: [
            "PISTOLET À RAYONS GAMMA", "FAIBLE BANNER", "GRENADE GAMMA"
        ],
        ult: "FAIBLE BANNER"
    },
    de: {  // German
        name: "Hulk",
        gender: "Männlich",
        species: "Menschlich",
        affiliation: "Avengers",
        role: "Vorreiter",
        eyeColor: ["Braun", "Grün"],
        hairColor: ["Braun", "Schwarz"],
        hp: 750,
        dateOfOrigin: 1962,
        emoji: ["🧪", "💥", "💪", "💚"],
        abilities: [
            "GAMMASTRAHLENKANone", "SCHWACHER BANNER", "GAMMAGRANADE"
        ],
        ult: "SCHWACHER BANNER"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "浩克",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "先锋",
        eyeColor: ["棕色", "绿色"],
        hairColor: ["棕色", "黑色"],
        hp: 750,
        dateOfOrigin: 1962,
        emoji: ["🧪", "💥", "💪", "💚"],
        abilities: [
            "伽马射线枪", "弱小班纳", "伽马手雷"
        ],
        ult: "弱小班纳"
    }
});

const thor = new Person({
    en: {
        name: "Thor",
        gender: "Male",
        species: "Asgardian",
        affiliation: "Avengers",
        role: "Vanguard",
        eyeColor: ["Blue"],
        hairColor: ["Blonde"],
        hp: 600,
        dateOfOrigin: 1962,
        emoji: ["☁️", "👑", "⚡", "🔨"],
        abilities: [
            "Mjolnir Bash", "Hammer Throw", "Lightning Realm",
            "Storm Surge", "Awakening Rune", "God of Thunder"
        ],
        ult: "God of Thunder"
    },
    es: {  // Spanish
        name: "Thor",
        gender: "Masculino",
        species: "Asgardiano",
        affiliation: "Vengadores",
        role: "Vanguardia",
        eyeColor: ["Azul"],
        hairColor: ["Rubio"],
        hp: 600,
        dateOfOrigin: 1962,
        emoji: ["☁️", "👑", "⚡", "🔨"],
        abilities: [
            "GOLPE DE MJOLNIR", "LANZAMIENTO DE MARTILLO", "REINO DEL RAYO",
            "OLEADA DE TORMENTA", "RUNA DEL DESPERTAR", "DIOS DEL TRUENO"
        ],
        ult: "DIOS DEL TRUENO"
    },
    fr: {  // French
        name: "Thor",
        gender: "Homme",
        species: "Asgardien",
        affiliation: "Avengers",
        role: "Avant-garde",
        eyeColor: ["Bleu"],
        hairColor: ["Blonde"],
        hp: 600,
        dateOfOrigin: 1962,
        emoji: ["☁️", "👑", "⚡", "🔨"],
        abilities: [
            "COUP DE MJOLNIR", "LANCER DE MARTEAU", "ROYAUME DE FOUDRE",
            "SURGE DE TEMPÊTE", "RUNE DE L'ÉVEIL", "DIEU DU TONNERRE"
        ],
        ult: "DIEU DU TONNERRE"
    },
    de: {  // German
        name: "Thor",
        gender: "Männlich",
        species: "Asgardian",
        affiliation: "Avengers",
        role: "Vorreiter",
        eyeColor: ["Blau"],
        hairColor: ["Blonde"],
        hp: 600,
        dateOfOrigin: 1962,
        emoji: ["☁️", "👑", "⚡", "🔨"],
        abilities: [
            "MJOLNIR-SCHLAG", "HAMMERWURF", "BLITZREICH",
            "STURMWOGE", "ERWECKUNGSRUNE", "DONNERGOTT"
        ],
        ult: "DONNERGOTT"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "索尔",
        gender: "男性",
        species: "阿斯加德人",
        affiliation: "复仇者联盟",
        role: "先锋",
        eyeColor: ["蓝色"],
        hairColor: ["金色"],
        hp: 600,
        dateOfOrigin: 1962,
        emoji: ["☁️", "👑", "⚡", "🔨"],
        abilities: [
            "雷神之锤重击", "锤子投掷", "雷电领域",
            "风暴激流", "觉醒符文", "雷霆之神"
        ],
        ult: "雷霆之神"
    }
});

const magneto = new Person({
    en: {
        name: "Magneto",
        gender: "Male",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Vanguard",
        eyeColor: ["Blue"],
        hairColor: ["White"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["🪖", "🧲", "🌀", "🦹‍♂️"],
        abilities: [
            "IRON VOLLEY", "METEOR M", "METALLIC CURTAIN",
            "METAL BULWARK", "IRON BULWARK", "MAG-CANNON", "MAGNETIC DESCENT"
        ],
        ult: "METEOR M"
    },
    es: {  // Spanish
        name: "Magneto",
        gender: "Masculino",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Vanguardia",
        eyeColor: ["Azul"],
        hairColor: ["Blanco"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["🪖", "🧲", "🌀", "🦹‍♂️"],
        abilities: [
            "DESCARGA DE HIERRO", "METEORO M", "CORTINA METÁLICA",
            "BALUARTE METÁLICO", "BALUARTE DE HIERRO", "CANÓN MAGNÉTICO", "DESCENSO MAGNÉTICO"
        ],
        ult: "METEORO M"
    },
    fr: {  // French
        name: "Magnéto",
        gender: "Homme",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Avant-garde",
        eyeColor: ["Bleu"],
        hairColor: ["Blanc"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["🪖", "🧲", "🌀", "🦹‍♂️"],
        abilities: [
            "RAFALE DE FER", "MÉTÉORE M", "RIDEAU MÉTALLIQUE",
            "REMPLISSEMENT MÉTALLIQUE", "REMPLISSEMENT DE FER", "CANON MAGNÉTIQUE", "DESCENTE MAGNÉTIQUE"
        ],
        ult: "MÉTÉORE M"
    },
    de: {  // German
        name: "Magneto",
        gender: "Männlich",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Vorreiter",
        eyeColor: ["Blau"],
        hairColor: ["Weiß"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["🪖", "🧲", "🌀", "🦹‍♂️"],
        abilities: [
            "EISEN-SALVE", "METEOR M", "METALLVORHANG",
            "METALLWALL", "EISENWALL", "MAGNETKANone", "MAGNETISCHER ABSTIEG"
        ],
        ult: "METEOR M"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "万磁王",
        gender: "男性",
        species: "变种人",
        affiliation: "X战警",
        role: "先锋",
        eyeColor: ["蓝色"],
        hairColor: ["白色"],
        hp: 650,
        dateOfOrigin: 1963,
        emoji: ["🪖", "🧲", "🌀", "🦹‍♂️"],
        abilities: [
            "铁雨", "陨石M", "金属幕帘",
            "金属壁垒", "钢铁壁垒", "磁力炮", "磁力下降"
        ],
        ult: "陨石M"
    }
});

const peniParker = new Person({
    en: {
        name: "Peni Parker",
        gender: "Female",
        species: "Human",
        affiliation: "Spider-Verse",
        role: "Vanguard",
        eyeColor: ["Blue"],
        hairColor: ["Black"],
        hp: 650,
        dateOfOrigin: 2014,
        emoji: ["📓", "🤖", "🕸️", "🕷️"],
        abilities: [
            "CYBER-WEB CLUSTER", "SPIDER-SWEEPER", "BIONIC SPIDER-NEST",
            "ARACHNO-MINE", "CYBER-BOND", "WALL CRAWL", "CYBER-WEB SNARE"
        ],
        ult: "SPIDER-SWEEPER"
    },
    es: {  // Spanish
        name: "Peni Parker",
        gender: "Femenino",
        species: "Humana",
        affiliation: "Spider-Verso",
        role: "Vanguardia",
        eyeColor: ["Azul"],
        hairColor: ["Negro"],
        hp: 650,
        dateOfOrigin: 2014,
        emoji: ["📓", "🤖", "🕸️", "🕷️"],
        abilities: [
            "CLÚSTER DE CIBER-RED", "LIMPIADOR DE ARAÑAS", "NIDO BIÓNICO DE ARAÑAS",
            "MINA ARÁCNIDA", "VÍNCULO CIBERNÉTICO", "TREPAR MUROS", "TRAMPA DE CIBER-RED"
        ],
        ult: "LIMPIADOR DE ARAÑAS"
    },
    fr: {  // French
        name: "Peni Parker",
        gender: "Féminin",
        species: "Humaine",
        affiliation: "Spider-Verse",
        role: "Avant-garde",
        eyeColor: ["Bleu"],
        hairColor: ["Noir"],
        hp: 650,
        dateOfOrigin: 2014,
        emoji: ["📓", "🤖", "🕸️", "🕷️"],
        abilities: [
            "GRAPPE DE TOILE CYBERNÉTIQUE", "NETTOYEUR D'ARAIGNÉES", "NID BIONIQUE D'ARAIGNÉES",
            "MINE ARACHNÉENNE", "LIEN CYBERNÉTIQUE", "ESCALADE MURALE", "PIÈGE DE TOILE CYBERNÉTIQUE"
        ],
        ult: "NETTOYEUR D'ARAIGNÉES"
    },
    de: {  // German
        name: "Peni Parker",
        gender: "Weiblich",
        species: "Menschlich",
        affiliation: "Spider-Versum",
        role: "Vorreiter",
        eyeColor: ["Blau"],
        hairColor: ["Schwarz"],
        hp: 650,
        dateOfOrigin: 2014,
        emoji: ["📓", "🤖", "🕸️", "🕷️"],
        abilities: [
            "CYBER-NETZCLUSTER", "SPINNEN-KEHRMASCHINE", "BIONISCHES SPINNENNEST",
            "ARACHNO-MINE", "CYBER-BINDUNG", "WANDKLETTERN", "CYBER-NETZFALLE"
        ],
        ult: "SPINNEN-KEHRMASCHINE"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "佩妮·帕克",
        gender: "女性",
        species: "人类",
        affiliation: "蜘蛛宇宙",
        role: "先锋",
        eyeColor: ["蓝色"],
        hairColor: ["黑色"],
        hp: 650,
        dateOfOrigin: 2014,
        emoji: ["📓", "🤖", "🕸️", "🕷️"],
        abilities: [
            "网络集群", "蜘蛛清扫者", "仿生蜘蛛巢",
            "蛛形地雷", "网络羁绊", "攀墙", "网络陷阱"
        ],
        ult: "蜘蛛清扫者"
    }
});

const venom = new Person({
    en: {
        name: "Venom",
        gender: "Male",
        species: "Symbiote",
        affiliation: "None",
        role: "Vanguard",
        eyeColor: ["White"],
        hairColor: ["None"],
        hp: 650,
        dateOfOrigin: 1988,
        emoji: ["🕷️", "🦠", "👅", "🖤"],
        abilities: [
            "Dark Predation", "Cellular Corrosion", "Symbiotic Resilience",
            "Frenzied Arrival", "Feast of the Abyss"
        ],
        ult: "Feast of the Abyss"
    },
    es: {  // Spanish
        name: "Venom",
        gender: "Masculino",
        species: "Simbionte",
        affiliation: "Ninguno",
        role: "Vanguardia",
        eyeColor: ["Blanco"],
        hairColor: ["Ninguno"],
        hp: 650,
        dateOfOrigin: 1988,
        emoji: ["🕷️", "🦠", "👅", "🖤"],
        abilities: [
            "DEPREDACIÓN OSCURA", "CORROSIÓN CELULAR", "RESILIENCIA SIMBIÓTICA",
            "LLEGADA FRENÉTICA", "BANQUETE DEL ABISMO"
        ],
        ult: "BANQUETE DEL ABISMO"
    },
    fr: {  // French
        name: "Venom",
        gender: "Homme",
        species: "Symbiote",
        affiliation: "Aucune",
        role: "Avant-garde",
        eyeColor: ["Blanc"],
        hairColor: ["Aucun"],
        hp: 650,
        dateOfOrigin: 1988,
        emoji: ["🕷️", "🦠", "👅", "🖤"],
        abilities: [
            "PRÉDATION OBSCURE", "CORROSION CELLULAIRE", "RÉSILIENCE SYMBIOTIQUE",
            "ARRIVÉE FRÉNÉTIQUE", "FESTIN DE L'ABÎME"
        ],
        ult: "FESTIN DE L'ABÎME"
    },
    de: {  // German
        name: "Venom",
        gender: "Männlich",
        species: "Symbiont",
        affiliation: "Keine",
        role: "Vorreiter",
        eyeColor: ["Weiß"],
        hairColor: ["Keine"],
        hp: 650,
        dateOfOrigin: 1988,
        emoji: ["🕷️", "🦠", "👅", "🖤"],
        abilities: [
            "DUNKLE PRÄDATION", "ZELLKORROSION", "SYMBIOTISCHE RESILIENZ",
            "FRENZIERTE ANKUNFT", "BANKETT DES ABGRUNDS"
        ],
        ult: "BANKETT DES ABGRUNDS"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "毒液",
        gender: "男性",
        species: "共生体",
        affiliation: "无",
        role: "先锋",
        eyeColor: ["白色"],
        hairColor: ["无"],
        hp: 650,
        dateOfOrigin: 1988,
        emoji: ["🕷️", "🦠", "👅", "🖤"],
        abilities: [
            "黑暗捕食", "细胞腐蚀", "共生体适应",
            "狂暴降临", "深渊盛宴"
        ],
        ult: "深渊盛宴"
    }
});

const theThing = new Person({
    en: {
        name: "The Thing",
        gender: "Male",
        species: "Human",
        affiliation: "Fantastic 4",
        role: "Vanguard",
        eyeColor: ["Blue"],
        hairColor: ["None"],
        hp: 700,
        dateOfOrigin: 1961,
        emoji: ["💪", "😊", "👊", "🪨"],
        abilities: [
            "ROCKY JAB", "CLOBBERIN' TIME", "STONE HAYMAKER",
            "YANCY STREET CHARGE", "EMBATTLED LEAP"
        ],
        ult: "CLOBBERIN' TIME"
    },
    es: {  // Spanish
        name: "La Cosa",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Los Cuatro Fantásticos",
        role: "Vanguardia",
        eyeColor: ["Azul"],
        hairColor: ["Ninguno"],
        hp: 700,
        dateOfOrigin: 1961,
        emoji: ["💪", "😊", "👊", "🪨"],
        abilities: [
            "GOLPE ROCOSO", "¡HORA DE MACHACAR!", "GANCHO DE PIEDRA",
            "CARGA DE LA CALLE YANCY", "SALTO DE BATALLA"
        ],
        ult: "¡HORA DE MACHACAR!"
    },
    fr: {  // French
        name: "La Chose",
        gender: "Homme",
        species: "Humain",
        affiliation: "Les Quatre Fantastiques",
        role: "Avant-garde",
        eyeColor: ["Bleu"],
        hairColor: ["Aucun"],
        hp: 700,
        dateOfOrigin: 1961,
        emoji: ["💪", "😊", "👊", "🪨"],
        abilities: [
            "COUP ROCHEUX", "C'EST L'HEURE DE COGNER", "COUP DE PIERRE",
            "CHARGE DE LA RUE YANCY", "SAUT DE COMBAT"
        ],
        ult: "C'EST L'HEURE DE COGNER"
    },
    de: {  // German
        name: "Das Ding",
        gender: "Männlich",
        species: "Menschlich",
        affiliation: "Fantastische Vier",
        role: "Vorhut",
        eyeColor: ["Blau"],
        hairColor: ["Keine"],
        hp: 700,
        dateOfOrigin: 1961,
        emoji: ["💪", "😊", "👊", "🪨"],
        abilities: [
            "FELSHIEB", "ZEIT ZUM VERKLOPPEN", "STEINHAKEN",
            "YANCY-STRASSEN-ANSTURM", "KAMPFSPRUNG"
        ],
        ult: "ZEIT ZUM VERKLOPPEN"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "石头人",
        gender: "男性",
        species: "人类",
        affiliation: "神奇四侠",
        role: "先锋",
        eyeColor: ["蓝色"],
        hairColor: ["无"],
        hp: 700,
        dateOfOrigin: 1961,
        emoji: ["💪", "😊", "👊", "🪨"],
        abilities: [
            "岩石重击", "暴揍时刻", "石拳横扫",
            "扬西街冲锋", "战斗跳跃"
        ],
        ult: "暴揍时刻"
    }
});

const emmaFrost = new Person({
    en: {
        name: "Emma Frost",
        gender: "Female",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Vanguard",
        eyeColor: ["Blue"],
        hairColor: ["Blonde"],
        hp: 650,
        dateOfOrigin: 1980,
        emoji: ["🧠", "💋", "❄️", "💎"],
        abilities: [
            "TELEPATHIC PULSE", "PSIONIC SEDUCTION", "DIAMOND FORM",
            "PSYCHIC SPEAR", "MIND'S AEGIS"
        ],
        ult: "PSIONIC SEDUCTION"
    },
    es: {  // Spanish
        name: "Emma Frost",
        gender: "Femenina",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Vanguardia",
        eyeColor: ["Azul"],
        hairColor: ["Rubio"],
        hp: 650,
        dateOfOrigin: 1980,
        emoji: ["🧠", "💋", "❄️", "💎"],
        abilities: [
            "PULSO TELEPÁTICO", "SEDUCCIÓN PSIONICA", "FORMA DE DIAMANTE",
            "LANZA PSÍQUICA", "ÉGIDA DE LA MENTE"
        ],
        ult: "SEDUCCIÓN PSIONICA"
    },
    fr: {  // French
        name: "Emma Frost",
        gender: "Femelle",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Avant-garde",
        eyeColor: ["Bleu"],
        hairColor: ["Blond"],
        hp: 650,
        dateOfOrigin: 1980,
        emoji: ["🧠", "💋", "❄️", "💎"],
        abilities: [
            "IMPULSION TÉLÉPATHIQUE", "SÉDUCTION PSIONIQUE", "FORME DE DIAMANT",
            "LANCE PSYCHIQUE", "L'ÉGIDE DE L'ESPRIT"
        ],
        ult: "SÉDUCTION PSIONIQUE"
    },
    de: {  // German
        name: "Emma Frost",
        gender: "Femelle",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Avantgarde",
        eyeColor: ["Blau"],
        hairColor: ["Blond"],
        hp: 650,
        dateOfOrigin: 1980,
        emoji: ["🧠", "💋", "❄️", "💎"],
        abilities: [
            "TELEPATHISCHER IMPULS", "PSIONISCHE VERFÜHRUNG", "DIAMANTFORM",
            "PSYCHISCHER SPEER", "DIE ÄGIDE DES GEISTES"
        ],
        ult: "PSIONISCHE VERFÜHRUNG"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "艾玛·弗罗斯特",
        gender: "费梅勒",
        species: "突变体",
        affiliation: "X战警",
        role: "先锋派",
        eyeColor: ["蓝色"],
        hairColor: ["金发"],
        hp: 650,
        dateOfOrigin: 1980,
        emoji: ["🧠", "💋", "❄️", "💎"],
        abilities: [
            "心灵感应脉冲", "灵能诱惑", "钻石形状",
            "心灵之矛", "精神之盾"
        ],
        ult: "灵能诱惑"
    }
});

const blackPanther = new Person({
    en: {
        name: "Black Panther",
        gender: "Male",
        species: "Human",
        affiliation: "Avengers",
        role: "Duelist",
        eyeColor: ["Brown"],
        hairColor: ["Black"],
        hp: 275,
        dateOfOrigin: 1966,
        emoji: ["🌍", "👑", "🐾", "🖤"],
        abilities: [
            "VIBRANIUM CLAWS", "BAST'S DESCENT", "SPIRIT REND",
            "SUBTLE STEP", "SPEAR TOSS"
        ],
        ult: "BAST'S DESCENT"
    },
    es: {  // Spanish
        name: "Pantera Negra",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Vengadores",
        role: "Duelista",
        eyeColor: ["Marrón"],
        hairColor: ["Negro"],
        hp: 275,
        dateOfOrigin: 1966,
        emoji: ["🌍", "👑", "🐾", "🖤"],
        abilities: [
            "GARRAS DE VIBRANIUM", "DESCENSO DE BAST", "DESGARRA ESPIRITUAL",
            "PASO SUTIL", "LANZAMIENTO DE LANZA"
        ],
        ult: "DESCENSO DE BAST"
    },
    fr: {  // French
        name: "Panthère Noire",
        gender: "Homme",
        species: "Humain",
        affiliation: "Avengers",
        role: "Duelliste",
        eyeColor: ["Marron"],
        hairColor: ["Noir"],
        hp: 275,
        dateOfOrigin: 1966,
        emoji: ["🌍", "👑", "🐾", "🖤"],
        abilities: [
            "GRIFFES EN VIBRANIUM", "DESCENTE DE BAST", "DÉCHIREMENT SPIRITUEL",
            "PAS DISCRET", "LANCER DE LANCE"
        ],
        ult: "DESCENTE DE BAST"
    },
    de: {  // German
        name: "Schwarzer Panther",
        gender: "Männlich",
        species: "Menschlich",
        affiliation: "Avengers",
        role: "Duellant",
        eyeColor: ["Braun"],
        hairColor: ["Schwarz"],
        hp: 275,
        dateOfOrigin: 1966,
        emoji: ["🌍", "👑", "🐾", "🖤"],
        abilities: [
            "VIBRANIUMKRALLEN", "BASTS ABSTIEG", "GEISTERSCHNITT",
            "SUBTILER SCHRITT", "SPEERWURF"
        ],
        ult: "BASTS ABSTIEG"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "黑豹",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "决斗者",
        eyeColor: ["棕色"],
        hairColor: ["黑色"],
        hp: 275,
        dateOfOrigin: 1966,
        emoji: ["🌍", "👑", "🐾", "🖤"],
        abilities: [
            "振金之爪", "巴斯特降临", "灵魂撕裂",
            "潜行步伐", "长矛投掷"
        ],
        ult: "巴斯特降临"
    }
});

const blackWidow = new Person({
    en: {
        name: "Black Widow",
        gender: "Female",
        species: "Human",
        affiliation: "Avengers",
        role: "Duelist",
        eyeColor: ["Blue"],
        hairColor: ["Red"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🧣", "💋", "🕸️", "🕷️"],
        abilities: [
            "WIDOW'S BITE BATON", "RED ROOM RIFLE", "ELECTRO-PLASMA EXPLOSION",
            "FLEET FOOT", "EDGE DANCER", "STRAIGHT SHOOTER"
        ],
        ult: "ELECTRO-PLASMA EXPLOSION"
    },
    es: {  // Spanish
        name: "Viuda Negra",
        gender: "Femenino",
        species: "Humana",
        affiliation: "Vengadores",
        role: "Duelista",
        eyeColor: ["Azul"],
        hairColor: ["Rojo"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🧣", "💋", "🕸️", "🕷️"],
        abilities: [
            "BASTÓN DE MORDEDURA DE VIUDA", "RIFLE DE LA HABITACIÓN ROJA", "EXPLOSIÓN ELECTRO-PLASMA",
            "PASO ÁGIL", "BAILARINA FILOSA", "TIRADORA PRECISA"
        ],
        ult: "EXPLOSIÓN ELECTRO-PLASMA"
    },
    fr: {  // French
        name: "Veuve Noire",
        gender: "Féminin",
        species: "Humaine",
        affiliation: "Avengers",
        role: "Duelliste",
        eyeColor: ["Bleu"],
        hairColor: ["Rouge"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🧣", "💋", "🕸️", "🕷️"],
        abilities: [
            "BÂTON DE MORSURE DE LA VEUVRE", "FUSIL DE LA CHAMBRE ROUGE", "EXPLOSION ÉLECTRO-PLASMA",
            "DÉMARCHE RAPIDE", "DANSEUR DE LAME", "TIREUSE D'ÉLITE"
        ],
        ult: "EXPLOSION ÉLECTRO-PLASMA"
    },
    de: {  // German
        name: "Schwarze Witwe",
        gender: "Weiblich",
        species: "Menschlich",
        affiliation: "Avengers",
        role: "Duellant",
        eyeColor: ["Blau"],
        hairColor: ["Rot"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🧣", "💋", "🕸️", "🕷️"],
        abilities: [
            "WITWENBISS-STOCK", "ROTER RAUM GEWEHR", "ELEKTRO-PLASMA-EXPLOSION",
            "FLINKER SCHRITT", "KLINGENTÄNZER", "PRÄZISIONSSCHÜTZE"
        ],
        ult: "ELEKTRO-PLASMA-EXPLOSION"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "黑寡妇",
        gender: "女性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["红色"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["🧣", "💋", "🕸️", "🕷️"],
        abilities: [
            "寡妇之咬棍棒", "红屋步枪", "电浆爆炸",
            "迅捷步伐", "刀锋舞者", "神枪手"
        ],
        ult: "电浆爆炸"
    }
});

const hawkeye = new Person({
    en: {
        name: "Hawkeye",
        gender: "Male",
        species: "Human",
        affiliation: "Avengers",
        role: "Duelist",
        eyeColor: ["Green"],
        hairColor: ["Blonde"],
        hp: 275,
        dateOfOrigin: 1964,
        emoji: ["🔍", "🎯", "🏹", "🦅"],
        abilities: [
            "PIERCING ARROW", "BLAST ARROW", "HUNTER'S SIGHT",
            "CRESCENT SLASH", "HYPERSONIC ARROW", "RONIN SLASH", "SKYWARD LEAP"
        ],
        ult: "HUNTER'S SIGHT"
    },
    es: {  // Spanish
        name: "Ojo de Halcón",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Vengadores",
        role: "Duelista",
        eyeColor: ["Verde"],
        hairColor: ["Rubio"],
        hp: 275,
        dateOfOrigin: 1964,
        emoji: ["🔍", "🎯", "🏹", "🦅"],
        abilities: [
            "FLECHA PERFORANTE", "FLECHA EXPLOSIVA", "VISTA DEL CAZADOR",
            "TAJADA CRECIENTE", "FLECHA HIPERSÓNICA", "CORTE RONIN", "SALTO CELESTIAL"
        ],
        ult: "VISTA DEL CAZADOR"
    },
    fr: {  // French
        name: "Oeil-de-Faucon",
        gender: "Homme",
        species: "Humain",
        affiliation: "Avengers",
        role: "Duelliste",
        eyeColor: ["Vert"],
        hairColor: ["Blonde"],
        hp: 275,
        dateOfOrigin: 1964,
        emoji: ["🔍", "🎯", "🏹", "🦅"],
        abilities: [
            "FLÈCHE PERÇANTE", "FLÈCHE EXPLOSIVE", "REGARD DU CHASSEUR",
            "ENTAILLE CROISSANTE", "FLÈCHE HYPERSONIQUE", "COUP RONIN", "SAUT CÉLESTE"
        ],
        ult: "REGARD DU CHASSEUR"
    },
    de: {  // German
        name: "Falkenauge",
        gender: "Männlich",
        species: "Menschlich",
        affiliation: "Avengers",
        role: "Duellant",
        eyeColor: ["Grün"],
        hairColor: ["Blonde"],
        hp: 275,
        dateOfOrigin: 1964,
        emoji: ["🔍", "🎯", "🏹", "🦅"],
        abilities: [
            "DURCHDRINGENDER PFEIL", "SPRENGPFEIL", "BLICK DES JÄGERS",
            "MONDSICHEL-SCHLAG", "HYPERSONISCHER PFEIL", "RONIN-SCHNITT", "HIMMELSSPRUNG"
        ],
        ult: "BLICK DES JÄGERS"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "鹰眼",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "决斗者",
        eyeColor: ["绿色"],
        hairColor: ["金色"],
        hp: 275,
        dateOfOrigin: 1964,
        emoji: ["🔍", "🎯", "🏹", "🦅"],
        abilities: [
            "穿透箭", "爆炸箭", "猎人之眼",
            "弧月斩", "超音速箭", "浪人斩", "天跃"
        ],
        ult: "猎人之眼"
    }
});

const hela = new Person({
    en: {
        name: "Hela",
        gender: "Female",
        species: "Asgardian",
        affiliation: "Villain",
        role: "Duelist",
        eyeColor: ["Green"],
        hairColor: ["None"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["⚔️", "🖤", "👑", "💀"],
        abilities: [
            "NIGHTSWORD THORN", "GODDESS OF DEATH", "ASTRAL FLOCK",
            "SOUL DRAINER", "PIERCING NIGHT"
        ],
        ult: "GODDESS OF DEATH"
    },
    es: {  // Spanish
        name: "Hela",
        gender: "Femenino",
        species: "Asgardiana",
        affiliation: "Villana",
        role: "Duelista",
        eyeColor: ["Verde"],
        hairColor: ["Ninguno"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["⚔️", "🖤", "👑", "💀"],
        abilities: [
            "ESPINA DE LA ESPADA NOCTURNA", "DIOSA DE LA MUERTE", "BANDADA ASTRAL",
            "DRENADOR DE ALMAS", "NOCHE PERFORANTE"
        ],
        ult: "DIOSA DE LA MUERTE"
    },
    fr: {  // French
        name: "Hela",
        gender: "Féminin",
        species: "Asgardienne",
        affiliation: "Méchant",
        role: "Duelliste",
        eyeColor: ["Vert"],
        hairColor: ["Aucun"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["⚔️", "🖤", "👑", "💀"],
        abilities: [
            "ÉPINE DE L'ÉPÉE NoirE", "DÉESSE DE LA MORT", "ESSAIM ASTRAL",
            "DRAIN D'ÂME", "NUIT PERÇANTE"
        ],
        ult: "DÉESSE DE LA MORT"
    },
    de: {  // German
        name: "Hela",
        gender: "Weiblich",
        species: "Asgardian",
        affiliation: "Schurke",
        role: "Duellant",
        eyeColor: ["Grün"],
        hairColor: ["Keine"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["⚔️", "🖤", "👑", "💀"],
        abilities: [
            "NACHTSCHWERTDORN", "GÖTTIN DES TODES", "ASTRALSCHWARM",
            "SEELENENTZIEHER", "DURCHBOHRENDE NACHT"
        ],
        ult: "GÖTTIN DES TODES"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "海拉",
        gender: "女性",
        species: "阿斯加德人",
        affiliation: "反派",
        role: "决斗者",
        eyeColor: ["绿色"],
        hairColor: ["无"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["⚔️", "🖤", "👑", "💀"],
        abilities: [
            "夜剑荆棘", "死亡女神", "星界群鸦",
            "灵魂吸取", "穿透黑夜"
        ],
        ult: "死亡女神"
    }
});

const ironFist = new Person({
    en: {
        name: "Iron Fist",
        gender: "Male",
        species: "Human",
        affiliation: "Defenders",
        role: "Duelist",
        eyeColor: ["Brown"],
        hairColor: ["Black"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["🎭", "🐉", "👊", "🔥"],
        abilities: [
            "JEET KUNE DO", "YAT JEE CHUNG KUEN", "LIVING CHI",
            "K'UN-LUN KICK", "HARMONY RECOVERY", "CRANE LEAP",
            "DRAGON'S DEFENSE", "WALL RUNNER"
        ],
        ult: "LIVING CHI"
    },
    es: {  // Spanish
        name: "Puño de Hierro",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Defensores",
        role: "Duelista",
        eyeColor: ["Marrón"],
        hairColor: ["Negro"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["🎭", "🐉", "👊", "🔥"],
        abilities: [
            "JEET KUNE DO", "YAT JEE CHUNG KUEN", "CHI VIVIENTE",
            "PATADA DE K'UN-LUN", "RECUPERACIÓN ARMÓNICA", "SALTO DE GRULLA",
            "DEFENSA DEL DRAGÓN", "CORREDOR DE MUROS"
        ],
        ult: "CHI VIVIENTE"
    },
    fr: {  // French
        name: "Poing d'Acier",
        gender: "Homme",
        species: "Humain",
        affiliation: "Défenseurs",
        role: "Duelliste",
        eyeColor: ["Marron"],
        hairColor: ["Noir"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["🎭", "🐉", "👊", "🔥"],
        abilities: [
            "JEET KUNE DO", "YAT JEE CHUNG KUEN", "CHI VIVANT",
            "COUP DE PIED K'UN-LUN", "RÉCUPÉRATION HARMONIQUE", "SAUT DE GRUE",
            "DÉFENSE DU DRAGON", "COUREUR MURAL"
        ],
        ult: "CHI VIVANT"
    },
    de: {  // German
        name: "Eiserne Faust",
        gender: "Männlich",
        species: "Menschlich",
        affiliation: "Verteidiger",
        role: "Duellant",
        eyeColor: ["Braun"],
        hairColor: ["Schwarz"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["🎭", "🐉", "👊", "🔥"],
        abilities: [
            "JEET KUNE DO", "YAT JEE CHUNG KUEN", "LEBENDIGES CHI",
            "K'UN-LUN-KICK", "HARMONISCHE ERHOLUNG", "KRANICHSCHNUNG",
            "DRACHENVertEIDIGUNG", "WANDLÄUFER"
        ],
        ult: "LEBENDIGES CHI"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "铁拳",
        gender: "男性",
        species: "人类",
        affiliation: "捍卫者联盟",
        role: "决斗者",
        eyeColor: ["棕色"],
        hairColor: ["黑色"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["🎭", "🐉", "👊", "🔥"],
        abilities: [
            "截拳道", "一指冲拳", "活生生的气",
            "昆仑踢", "和谐恢复", "仙鹤跳跃",
            "龙之防御", "跑墙者"
        ],
        ult: "活生生的气"
    }
});

const ironMan = new Person({
    en: {
        name: "Iron Man",
        gender: "Male",
        species: "Human",
        affiliation: "Avengers",
        role: "Duelist",
        eyeColor: ["Blue"],
        hairColor: ["Brown"],
        hp: 250,
        dateOfOrigin: 1963,
        emoji: ["🔧", "💡", "🤖", "🛑"],
        abilities: [
            "REPULSOR BLAST", "UNIBEAM", "INVINCIBLE PULSE CANNON",
            "HYPER-VELOCITY", "ARMOR OVERDRIVE", "MICRO-MISSILE BARRAGE"
        ],
        ult: "INVINCIBLE PULSE CANNON"
    },
    es: {  // Spanish
        name: "Hombre de Hierro",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Vengadores",
        role: "Duelista",
        eyeColor: ["Azul"],
        hairColor: ["Marrón"],
        hp: 250,
        dateOfOrigin: 1963,
        emoji: ["🔧", "💡", "🤖", "🛑"],
        abilities: [
            "EXPLOSIÓN REPULSORA", "RAYO UNIBEAM", "CAÑÓN PULSO INVENCIBLE",
            "HIPER-VELOCIDAD", "SOBRECARGA DE ARMADURA", "BARRERA DE MICRO-MISILES"
        ],
        ult: "CAÑÓN PULSO INVENCIBLE"
    },
    fr: {  // French
        name: "Homme de Fer",
        gender: "Homme",
        species: "Humain",
        affiliation: "Avengers",
        role: "Duelliste",
        eyeColor: ["Bleu"],
        hairColor: ["Marron"],
        hp: 250,
        dateOfOrigin: 1963,
        emoji: ["🔧", "💡", "🤖", "🛑"],
        abilities: [
            "EXPLOSION RÉPULSEUR", "UNIBEAM", "CANON À IMPULSIONS INVINCIBLE",
            "HYPER-VÉLOCITÉ", "SURCHARGE D'ARMURE", "BARRAGE DE MICRO-MISSILES"
        ],
        ult: "CANON À IMPULSIONS INVINCIBLE"
    },
    de: {  // German
        name: "Iron Man",
        gender: "Männlich",
        species: "Menschlich",
        affiliation: "Avengers",
        role: "Duellant",
        eyeColor: ["Blau"],
        hairColor: ["Braun"],
        hp: 250,
        dateOfOrigin: 1963,
        emoji: ["🔧", "💡", "🤖", "🛑"],
        abilities: [
            "REPULSORSTRAHL", "UNIBEAM", "UNBESIEGBARER IMPULSKANone",
            "HYPERGESCHWINDIGKEIT", "RÜSTUNGSÜBERLASTUNG", "MIKRO-MISSILENBARRAGE"
        ],
        ult: "UNBESIEGBARER IMPULSKANone"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "钢铁侠",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["棕色"],
        hp: 250,
        dateOfOrigin: 1963,
        emoji: ["🔧", "💡", "🤖", "🛑"],
        abilities: [
            "驱动爆破", "单向光束", "无敌脉冲炮",
            "超高速", "装甲超载", "微型导弹弹幕"
        ],
        ult: "无敌脉冲炮"
    }
});

const magik = new Person({
    en: {
        name: "Magik",
        gender: "Female",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Duelist",
        eyeColor: ["Blue", "Red"],
        hairColor: ["Blonde", "White"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["👩", "🗡️", "🌠", "🔥"],
        abilities: [
            "SOULSWORD", "DARKCHILD", "STEPPING DISCS",
            "UMBRAL INCURSION", "ELDRITCH WHIRL", "MAGIK SLASH", "DEMON'S RAGE"
        ],
        ult: "DARKCHILD"
    },
    es: {  // Spanish
        name: "Magik",
        gender: "Femenino",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Duelista",
        eyeColor: ["Azul", "Rojo"],
        hairColor: ["Rubio", "Blanco"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["👩", "🗡️", "🌠", "🔥"],
        abilities: [
            "ESPADA ALMA", "NIÑA OSCURA", "DISCOS DE TELETRANSPORTE",
            "INCURSIÓN UMBRAL", "TORBELLINO ESOTÉRICO", "CORTE MÁGICO", "FURIA DEMONÍACA"
        ],
        ult: "NIÑA OSCURA"
    },
    fr: {  // French
        name: "Magik",
        gender: "Féminin",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Duelliste",
        eyeColor: ["Bleu", "Rouge"],
        hairColor: ["Blonde", "Blanc"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["👩", "🗡️", "🌠", "🔥"],
        abilities: [
            "ÉPÉE D'ÂME", "ENFANT SOMBRE", "DISQUES DE TÉLÉPORTATION",
            "INCURSION UMBRALE", "TOURBILLON OCCULTE", "ENTAILLE MAGIQUE", "RAGE DÉMONIAQUE"
        ],
        ult: "ENFANT SOMBRE"
    },
    de: {  // German
        name: "Magik",
        gender: "Weiblich",
        species: "Mutantin",
        affiliation: "X-Men",
        role: "Duellant",
        eyeColor: ["Blau", "Rot"],
        hairColor: ["Blonde", "Weiß"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["👩", "🗡️", "🌠", "🔥"],
        abilities: [
            "SEELENSCHWERT", "DUNKLES KIND", "TELEPORTATIONSSCHEIBEN",
            "SCHATTENINVASION", "OKKULTES WIRBELN", "MAGIK-SCHNITT", "DÄMONENZORN"
        ],
        ult: "DUNKLES KIND"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "魔法",
        gender: "女性",
        species: "变种人",
        affiliation: "X战警",
        role: "决斗者",
        eyeColor: ["蓝色", "红色"],
        hairColor: ["金色", "白色"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["👩", "🗡️", "🌠", "🔥"],
        abilities: [
            "灵魂之剑", "黑暗之子", "传送圆盘",
            "幽影入侵", "奥术旋风", "魔法斩击", "恶魔之怒"
        ],
        ult: "黑暗之子"
    }
});

const moonKnight = new Person({
    en: {
        name: "Moon Knight",
        gender: "Male",
        species: "Human",
        affiliation: "Midnight Sons",
        role: "Duelist",
        eyeColor: ["Blue"],
        hairColor: ["None"],
        hp: 275,
        dateOfOrigin: 1975,
        emoji: ["🔮", "🎭", "🏺", "🌙"],
        abilities: [
            "CRESCENT DART", "HAND OF KHONSHU", "NIGHT GLIDER",
            "ANCIENT ANKH", "MOONLIGHT HOOK", "RISING LEAP",
            "MOON BLADE", "TRIPLE ECLIPSE"
        ],
        ult: "HAND OF KHONSHU"
    },
    es: {  // Spanish
        name: "Caballero Luna",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Hijos de la Medianoche",
        role: "Duelista",
        eyeColor: ["Azul"],
        hairColor: ["Ninguno"],
        hp: 275,
        dateOfOrigin: 1975,
        emoji: ["🔮", "🎭", "🏺", "🌙"],
        abilities: [
            "DARDOS CRESCENT", "MANO DE KHONSHU", "PLANEADOR NOCTURNO",
            "ANKH ANCESTRAL", "GANCHO LUNAR", "SALTO ASCENDENTE",
            "ESPADA LUNAR", "ECLIPSE TRIPLE"
        ],
        ult: "MANO DE KHONSHU"
    },
    fr: {  // French
        name: "Chevalier de la Lune",
        gender: "Homme",
        species: "Humain",
        affiliation: "Fils de Minuit",
        role: "Duelliste",
        eyeColor: ["Bleu"],
        hairColor: ["Aucun"],
        hp: 275,
        dateOfOrigin: 1975,
        emoji: ["🔮", "🎭", "🏺", "🌙"],
        abilities: [
            "FLÉCHETTE CROISSANTE", "MAIN DE KHONSHU", "PLANEUR NOCTURNE",
            "ANKH ANCESTRAL", "CROCHET DE LUNE", "SAUT ÉLEVÉ",
            "LAME LUNAIRE", "ÉCLIPSE TRIPLE"
        ],
        ult: "MAIN DE KHONSHU"
    },
    de: {  // German
        name: "Mondritter",
        gender: "Männlich",
        species: "Menschlich",
        affiliation: "Mitternachtssöhne",
        role: "Duellant",
        eyeColor: ["Blau"],
        hairColor: ["Keine"],
        hp: 275,
        dateOfOrigin: 1975,
        emoji: ["🔮", "🎭", "🏺", "🌙"],
        abilities: [
            "MONDDART", "HAND VON KHONSHU", "NACHTGLEITER",
            "URANKE", "MONDHAKEN", "AUFSTEIGENDER SPRUNG",
            "MONDKLINGE", "DREIFACHER ECLIPSE"
        ],
        ult: "HAND VON KHONSHU"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "月光骑士",
        gender: "男性",
        species: "人类",
        affiliation: "午夜之子",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["无"],
        hp: 275,
        dateOfOrigin: 1975,
        emoji: ["🔮", "🎭", "🏺", "🌙"],
        abilities: [
            "新月飞镖", "孔苏之手", "夜间滑翔",
            "古代安卡", "月光钩", "升跃",
            "月刃", "三重日食"
        ],
        ult: "孔苏之手"
    }
});

const namor = new Person({
    en: {
        name: "Namor",
        gender: "Male",
        species: "Atlantean",
        affiliation: "Defenders",
        role: "Duelist",
        eyeColor: ["Blue"],
        hairColor: ["Blonde", "Green"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["🌊", "👑", "💪", "🐠"],
        abilities: [
            "TRIDENT OF NEPTUNE", "HORN OF PROTEUS", "BLESSING OF THE DEEP",
            "AQUATIC DOMINION", "WRATH OF THE SEVEN SEAS"
        ],
        ult: "HORN OF PROTEUS"
    },
    es: {  // Spanish
        name: "Namor",
        gender: "Masculino",
        species: "Atlante",
        affiliation: "Defensores",
        role: "Duelista",
        eyeColor: ["Azul"],
        hairColor: ["Rubio", "Verde"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["🌊", "👑", "💪", "🐠"],
        abilities: [
            "TRIDENTE DE NEPTUNO", "CUERNO DE PROTEO", "BENDICIÓN DE LAS PROFUNDIDADES",
            "DOMINIO ACUÁTICO", "IRA DE LOS SIETE MARES"
        ],
        ult: "CUERNO DE PROTEO"
    },
    fr: {  // French
        name: "Namor",
        gender: "Homme",
        species: "Atlante",
        affiliation: "Défenseurs",
        role: "Duelliste",
        eyeColor: ["Bleu"],
        hairColor: ["Blonde", "Vert"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["🌊", "👑", "💪", "🐠"],
        abilities: [
            "TRIDENT DE NEPTUNE", "CORNE DE PROTÉE", "BÉNÉDICTION DES PROFONDEURS",
            "DOMINATION AQUATIQUE", "COLÈRE DES SEPT MERS"
        ],
        ult: "CORNE DE PROTÉE"
    },
    de: {  // German
        name: "Namor",
        gender: "Männlich",
        species: "Atlante",
        affiliation: "Verteidiger",
        role: "Duellant",
        eyeColor: ["Blau"],
        hairColor: ["Blonde", "Grün"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["🌊", "👑", "💪", "🐠"],
        abilities: [
            "DREIZACK VON NEPTUN", "HORN VON PROTEUS", "SEGEN DER TIEFE",
            "AQUATISCHE HERRSCHAFT", "ZORN DER SIEBEN MEERE"
        ],
        ult: "HORN VON PROTEUS"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "纳摩",
        gender: "男性",
        species: "亚特兰蒂斯人",
        affiliation: "捍卫者联盟",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["金色", "绿色"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["🌊", "👑", "💪", "🐠"],
        abilities: [
            "海王三叉戟", "普洛透斯之角", "深海祝福",
            "水域统治", "七海之怒"
        ],
        ult: "普洛透斯之角"
    }
});

const psylocke = new Person({
    en: {
        name: "Psylocke",
        gender: "Female",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Duelist",
        eyeColor: ["Blue"],
        hairColor: ["Purple"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🗡️", "👁️‍🗨️", "🦋", "💜"],
        abilities: [
            "PSIONIC CROSSBOW", "DANCE OF THE BUTTERFLY", "PSI-BLADE DASH",
            "PSYCHIC STEALTH", "WING SHURIKENS"
        ],
        ult: "DANCE OF THE BUTTERFLY"
    },
    es: {  // Spanish
        name: "Psylocke",
        gender: "Femenino",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Duelista",
        eyeColor: ["Azul"],
        hairColor: ["Púrpura"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🗡️", "👁️‍🗨️", "🦋", "💜"],
        abilities: [
            "BALLESTA PSIÓNICA", "DANZA DE LA MARIPOSA", "CARGA DE HOJA PSI",
            "SIGILO PSÍQUICO", "SHURIKENS ALADOS"
        ],
        ult: "DANZA DE LA MARIPOSA"
    },
    fr: {  // French
        name: "Psylocke",
        gender: "Féminin",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Duelliste",
        eyeColor: ["Bleu"],
        hairColor: ["Violet"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🗡️", "👁️‍🗨️", "🦋", "💜"],
        abilities: [
            "ARBALETE PSIONIQUE", "DANSE DU PAPILLON", "RUÉE DE LAME PSI",
            "FURTIVITÉ PSYCHIQUE", "SHURIKENS AILÉS"
        ],
        ult: "DANSE DU PAPILLON"
    },
    de: {  // German
        name: "Psylocke",
        gender: "Weiblich",
        species: "Mutantin",
        affiliation: "X-Men",
        role: "Duellant",
        eyeColor: ["Blau"],
        hairColor: ["Lila"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🗡️", "👁️‍🗨️", "🦋", "💜"],
        abilities: [
            "PSIONISCHE ARMBRUST", "TANZ DES SCHMETTERLINGS", "PSI-KLINGENSTURM",
            "PSYCHISCHE TARNUNG", "FLÜGELSHURIKENS"
        ],
        ult: "TANZ DES SCHMETTERLINGS"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "灵蝶",
        gender: "女性",
        species: "变种人",
        affiliation: "X战警",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["紫色"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🗡️", "👁️‍🗨️", "🦋", "💜"],
        abilities: [
            "灵能弩", "蝶舞", "灵刃冲刺",
            "心灵潜行", "翼手里剑"
        ],
        ult: "蝶舞"
    }
});

const scarletWitch = new Person({
    en: {
        name: "Scarlet Witch",
        gender: "Female",
        species: "Mutant",
        affiliation: "Avengers",
        role: "Duelist",
        eyeColor: ["Green"],
        hairColor: ["Auburn"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["📜", "🔮", "🟥", "🧙‍♀️"],
        abilities: [
            "CHAOS CONTROL", "REALITY ERASURE", "MYSTIC PROJECTION",
            "DARK SEAL", "TELEKINESIS", "CHTHONIAN BURST"
        ],
        ult: "REALITY ERASURE"
    },
    es: {  // Spanish
        name: "Bruja Escarlata",
        gender: "Femenino",
        species: "Mutante",
        affiliation: "Vengadores",
        role: "Duelista",
        eyeColor: ["Verde"],
        hairColor: ["Caoba"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["📜", "🔮", "🟥", "🧙‍♀️"],
        abilities: [
            "CONTROL DEL CAOS", "BORRADO DE LA REALIDAD", "PROYECCIÓN MÍSTICA",
            "SELLO OSCURO", "TELEQUINESIS", "EXPLOSIÓN CTHONIANA"
        ],
        ult: "BORRADO DE LA REALIDAD"
    },
    fr: {  // French
        name: "Sorcière Rouge",
        gender: "Féminin",
        species: "Mutante",
        affiliation: "Avengers",
        role: "Duelliste",
        eyeColor: ["Vert"],
        hairColor: ["Auburn"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["📜", "🔮", "🟥", "🧙‍♀️"],
        abilities: [
            "CONTRÔLE DU CHAOS", "EFFACEMENT DE LA RÉALITÉ", "PROJECTION MYSTIQUE",
            "SCEAU OBSCUR", "TÉLÉKINÉSIE", "EXPLOSION CTHONIENNE"
        ],
        ult: "EFFACEMENT DE LA RÉALITÉ"
    },
    de: {  // German
        name: "Scharlachhexe",
        gender: "Weiblich",
        species: "Mutantin",
        affiliation: "Avengers",
        role: "Duellant",
        eyeColor: ["Grün"],
        hairColor: ["KastanienBraun"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["📜", "🔮", "🟥", "🧙‍♀️"],
        abilities: [
            "CHAOS-KONTROLLE", "REALITÄTSAUSLÖSCHUNG", "MYSTISCHE PROJEKTION",
            "DUNKLES SIEGEL", "TELEKINESE", "CTHONISCHE EXPLOSION"
        ],
        ult: "REALITÄTSAUSLÖSCHUNG"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "猩红女巫",
        gender: "女性",
        species: "变种人",
        affiliation: "复仇者联盟",
        role: "决斗者",
        eyeColor: ["绿色"],
        hairColor: ["赤褐色"],
        hp: 250,
        dateOfOrigin: 1964,
        emoji: ["📜", "🔮", "🟥", "🧙‍♀️"],
        abilities: [
            "混沌控制", "现实抹除", "神秘投射",
            "黑暗封印", "念动力", "克苏鲁爆破"
        ],
        ult: "现实抹除"
    }
});

const spiderMan = new Person({
    en: {
        name: "Spider Man",
        gender: "Male",
        species: "Human",
        affiliation: "Spider-Verse",
        role: "Duelist",
        eyeColor: ["Hazel"],
        hairColor: ["Brown"],
        hp: 250,
        dateOfOrigin: 1962,
        emoji: ["🧪", "🏙️", "🕸️", "🕷️"],
        abilities: [
            "Spider-Power", "Cyber-Web Cluster", "Thwip and Flip",
            "Wall Crawl", "Web-Swing", "Amazing Combo",
            "Get Over Here!", "Spectacular Spin"
        ],
        ult: "Spectacular Spin"
    },
    es: {  // Spanish
        name: "Hombre Araña",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Spider-Verso",
        role: "Duelista",
        eyeColor: ["Avellana"],
        hairColor: ["Marrón"],
        hp: 250,
        dateOfOrigin: 1962,
        emoji: ["🧪", "🏙️", "🕸️", "🕷️"],
        abilities: [
            "PODER ARÁCNIDO", "CLÚSTER DE CIBER-RED", "THWIP Y VOLTERETA",
            "TREPAR MUROS", "BALANCEO CON TELARAÑA", "COMBO ASOMBROSO",
            "¡VEN AQUÍ!", "GIRO ESPECTACULAR"
        ],
        ult: "GIRO ESPECTACULAR"
    },
    fr: {  // French
        name: "Spider-Man",
        gender: "Homme",
        species: "Humain",
        affiliation: "Spider-Verse",
        role: "Duelliste",
        eyeColor: ["Noisette"],
        hairColor: ["Marron"],
        hp: 250,
        dateOfOrigin: 1962,
        emoji: ["🧪", "🏙️", "🕸️", "🕷️"],
        abilities: [
            "POUVOIR D'ARAIGNÉE", "GRAPPE DE TOILE CYBERNÉTIQUE", "THWIP ET FLIP",
            "ESCALADE MURALE", "BALANCEMENT AVEC TOILE", "COMBO INCROYABLE",
            "VIENS ICI !", "TOURNOIEMENT SPECTACULAIRE"
        ],
        ult: "TOURNOIEMENT SPECTACULAIRE"
    },
    de: {  // German
        name: "Spider-Man",
        gender: "Männlich",
        species: "Mensch",
        affiliation: "Spider-Versum",
        role: "Duellant",
        eyeColor: ["Haselnussbraun"],
        hairColor: ["Braun"],
        hp: 250,
        dateOfOrigin: 1962,
        emoji: ["🧪", "🏙️", "🕸️", "🕷️"],
        abilities: [
            "SPINNENKRAFT", "CYBER-NETZCLUSTER", "THWIP UND FLIP",
            "WANDKLETTERN", "NETZSCHWINGEN", "ERSTAUNLICHES KOMBO",
            "KOMM HER!", "SPEKTAKULÄRE DREHUNG"
        ],
        ult: "SPEKTAKULÄRE DREHUNG"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "蜘蛛侠",
        gender: "男性",
        species: "人类",
        affiliation: "蜘蛛宇宙",
        role: "决斗者",
        eyeColor: ["榛色"],
        hairColor: ["棕色"],
        hp: 250,
        dateOfOrigin: 1962,
        emoji: ["🧪", "🏙️", "🕸️", "🕷️"],
        abilities: [
            "蜘蛛能力", "网络集群", "蛛丝翻转",
            "攀墙", "蜘蛛摆荡", "惊人连击",
            "过来吧！", "壮观旋转"
        ],
        ult: "壮观旋转"
    }
});

const squirrelGirl = new Person({
    en: {
        name: "Squirrel Girl",
        gender: "Female",
        species: "Human",
        affiliation: "None",
        role: "Duelist",
        eyeColor: ["Green"],
        hairColor: ["Ginger"],
        hp: 275,
        dateOfOrigin: 1992,
        emoji: ["🍂", "😂", "💪", "🐿️"],
        abilities: [
            "Burst Acorn", "Squirrel Blockade", "Tail Bounce",
            "Mammal Bond", "Unbeatable Squirrel Tsunami"
        ],
        ult: "Unbeatable Squirrel Tsunami"
    },
    es: {  // Spanish
        name: "Chica Ardilla",
        gender: "Femenino",
        species: "Humana",
        affiliation: "Ninguno",
        role: "Duelista",
        eyeColor: ["Verde"],
        hairColor: ["Pelirrojo"],
        hp: 275,
        dateOfOrigin: 1992,
        emoji: ["🍂", "😂", "💪", "🐿️"],
        abilities: [
            "BELLOTA EXPLOSIVA", "BLOQUEO DE ARDILLA", "REBOTE DE COLA",
            "VÍNCULO MAMÍFERO", "TSUNAMI DE ARDILLAS INDESTRUCTIBLE"
        ],
        ult: "TSUNAMI DE ARDILLAS INDESTRUCTIBLE"
    },
    fr: {  // French
        name: "Fille Écureuil",
        gender: "Féminin",
        species: "Humaine",
        affiliation: "Aucune",
        role: "Duelliste",
        eyeColor: ["Vert"],
        hairColor: ["Roux"],
        hp: 275,
        dateOfOrigin: 1992,
        emoji: ["🍂", "😂", "💪", "🐿️"],
        abilities: [
            "GLAND EXPLOSIF", "BARRICADE D'ÉCUREUIL", "REBONDISSEMENT DE QUEUE",
            "LIEN MAMMIFÈRE", "TSUNAMI D'ÉCUREUILS INDESTRUCTIBLE"
        ],
        ult: "TSUNAMI D'ÉCUREUILS INDESTRUCTIBLE"
    },
    de: {  // German
        name: "Eichhörnchen-Mädchen",
        gender: "Weiblich",
        species: "Menschlich",
        affiliation: "Keine",
        role: "Duellant",
        eyeColor: ["Grün"],
        hairColor: ["Rotbraun"],
        hp: 275,
        dateOfOrigin: 1992,
        emoji: ["🍂", "😂", "💪", "🐿️"],
        abilities: [
            "EICHEL-EXPLOSION", "EICHHÖRNCHEN-SPERRUNG", "SCHWANZSPRUNG",
            "SÄUGETIER-BINDUNG", "UNSCHLAGBARE EICHHÖRNCHEN-TSUNAMI"
        ],
        ult: "UNSCHLAGBARE EICHHÖRNCHEN-TSUNAMI"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "松鼠女孩",
        gender: "女性",
        species: "人类",
        affiliation: "无",
        role: "决斗者",
        eyeColor: ["绿色"],
        hairColor: ["姜色"],
        hp: 275,
        dateOfOrigin: 1992,
        emoji: ["🍂", "😂", "💪", "🐿️"],
        abilities: [
            "爆裂橡果", "松鼠封锁", "尾巴弹跳",
            "哺乳动物羁绊", "无敌松鼠海啸"
        ],
        ult: "无敌松鼠海啸"
    }
});

const starLord = new Person({
    en: {
        name: "Star Lord",
        gender: "Male",
        species: "Human",
        affiliation: "Guardians",
        role: "Duelist",
        eyeColor: ["Hazel"],
        hairColor: ["Blonde"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🎶", "🔫", "🌌", "😎"],
        abilities: [
            "Element Guns", "Stellar Shift", "Blaster Barrage",
            "Rocket Propulsion", "Galactic Legend"
        ],
        ult: "Galactic Legend"
    },
    es: {  // Spanish
        name: "Señor de las Estrellas",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Guardianes",
        role: "Duelista",
        eyeColor: ["Avellana"],
        hairColor: ["Rubio"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🎶", "🔫", "🌌", "😎"],
        abilities: [
            "PISTOLAS ELEMENTALES", "CAMBIO ESTELAR", "BARRAGE DE BLÁSTERES",
            "PROPULSIÓN COHETE", "LEYENDA GALÁCTICA"
        ],
        ult: "LEYENDA GALÁCTICA"
    },
    fr: {  // French
        name: "Star-Lord",
        gender: "Homme",
        species: "Humain",
        affiliation: "Gardiens",
        role: "Duelliste",
        eyeColor: ["Noisette"],
        hairColor: ["Blonde"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🎶", "🔫", "🌌", "😎"],
        abilities: [
            "PISTOLETS ÉLÉMENTAIRES", "DÉPLACEMENT STELLAIRE", "BARRAGE DE BLASTERS",
            "PROPULSION À RÉACTION", "LÉGENDE GALACTIQUE"
        ],
        ult: "LÉGENDE GALACTIQUE"
    },
    de: {  // German
        name: "Star-Lord",
        gender: "Männlich",
        species: "Mensch",
        affiliation: "Wächter",
        role: "Duellant",
        eyeColor: ["Haselnussbraun"],
        hairColor: ["Blonde"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🎶", "🔫", "🌌", "😎"],
        abilities: [
            "ELEMENTARWAFFEN", "STELLARER SCHRITT", "BLASTER-BARRAGE",
            "RAKETENANTRIEB", "GALAKTISCHE LEGENDE"
        ],
        ult: "GALAKTISCHE LEGENDE"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "星爵",
        gender: "男性",
        species: "人类",
        affiliation: "银河护卫队",
        role: "决斗者",
        eyeColor: ["榛色"],
        hairColor: ["金色"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🎶", "🔫", "🌌", "😎"],
        abilities: [
            "元素枪", "星际突进", "爆能枪弹幕",
            "火箭推进", "银河传奇"
        ],
        ult: "银河传奇"
    }
});

const storm = new Person({
    en: {
        name: "Storm",
        gender: "Female",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Duelist",
        eyeColor: ["Blue"],
        hairColor: ["White"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🌧️", "☁️", "⚡", "🌪️"],
        abilities: [
            "Wind Blade", "Bolt Rush", "Goddess Boost",
            "Weather Control", "Omega Hurricane"
        ],
        ult: "Omega Hurricane"
    },
    es: {  // Spanish
        name: "Tormenta",
        gender: "Femenino",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Duelista",
        eyeColor: ["Azul"],
        hairColor: ["Blanco"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🌧️", "☁️", "⚡", "🌪️"],
        abilities: [
            "ESPADA DE VIENTO", "CARGA RELÁMPAGO", "IMPULSO DE DIOSA",
            "CONTROL CLIMÁTICO", "HURACÁN OMEGA"
        ],
        ult: "HURACÁN OMEGA"
    },
    fr: {  // French
        name: "Tornade",
        gender: "Féminin",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Duelliste",
        eyeColor: ["Bleu"],
        hairColor: ["Blanc"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🌧️", "☁️", "⚡", "🌪️"],
        abilities: [
            "LAME DE VENT", "RUÉE FOUDROYANTE", "BOOST DE DÉESSE",
            "CONTRÔLE DU CLIMAT", "OURAGAN OMÉGA"
        ],
        ult: "OURAGAN OMÉGA"
    },
    de: {  // German
        name: "Sturm",
        gender: "Weiblich",
        species: "Mutantin",
        affiliation: "X-Men",
        role: "Duellant",
        eyeColor: ["Blau"],
        hairColor: ["Weiß"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🌧️", "☁️", "⚡", "🌪️"],
        abilities: [
            "WINDSCHNEIDE", "BLITZSTURM", "GÖTTIN-SCHUB",
            "WETTERKONTROLLE", "OMEGA-HURRIKAN"
        ],
        ult: "OMEGA-HURRIKAN"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "暴风女",
        gender: "女性",
        species: "变种人",
        affiliation: "X战警",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["白色"],
        hp: 250,
        dateOfOrigin: 1975,
        emoji: ["🌧️", "☁️", "⚡", "🌪️"],
        abilities: [
            "风刃", "雷霆突袭", "女神增益",
            "天气控制", "欧米茄飓风"
        ],
        ult: "欧米茄飓风"
    }
});

const punisher = new Person({
    en: {
        name: "The Punisher",
        gender: "Male",
        species: "Human",
        affiliation: "None",
        role: "Duelist",
        eyeColor: ["Blue"],
        hairColor: ["Brown"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["⚖️", "💀", "🔫", "🏴‍☠️"],
        abilities: [
            "Adjudication", "Deliverance", "Scourge Grenade",
            "Culling Turret", "Vantage Connection", "Final Judgement", "Warrior's Gaze"
        ],
        ult: "Final Judgement"
    },
    es: {  // Spanish
        name: "El Castigador",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Ninguno",
        role: "Duelista",
        eyeColor: ["Azul"],
        hairColor: ["Marrón"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["⚖️", "💀", "🔫", "🏴‍☠️"],
        abilities: [
            "ADJUDICACIÓN", "LIBERACIÓN", "GRANADA DEL AZOTE",
            "TORRETA DE ELIMINACIÓN", "CONEXIÓN ESTRATÉGICA", "JUICIO FINAL", "MIRADA GUERRERA"
        ],
        ult: "JUICIO FINAL"
    },
    fr: {  // French
        name: "Le Punisher",
        gender: "Homme",
        species: "Humain",
        affiliation: "Aucune",
        role: "Duelliste",
        eyeColor: ["Bleu"],
        hairColor: ["Marron"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["⚖️", "💀", "🔫", "🏴‍☠️"],
        abilities: [
            "ADJUDICATION", "DÉLIVRANCE", "GRENADE FLÉAU",
            "TOURELLE D'ÉLIMINATION", "CONNEXION STRATÉGIQUE", "JUGEMENT FINAL", "REGARD DU GUERRIER"
        ],
        ult: "JUGEMENT FINAL"
    },
    de: {  // German
        name: "Der Bestrafer",
        gender: "Männlich",
        species: "Mensch",
        affiliation: "Keine",
        role: "Duellant",
        eyeColor: ["Blau"],
        hairColor: ["Braun"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["⚖️", "💀", "🔫", "🏴‍☠️"],
        abilities: [
            "RICHERT", "BEFREIUNG", "GEISSLEGRANATE",
            "AUSMERZUNGSGESCHÜTZ", "TAKTISCHE VERBINDUNG", "ENDGÜLTIGES URTEIL", "KRIEGERBLICK"
        ],
        ult: "ENDGÜLTIGES URTEIL"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "惩罚者",
        gender: "男性",
        species: "人类",
        affiliation: "无",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["棕色"],
        hp: 300,
        dateOfOrigin: 1974,
        emoji: ["⚖️", "💀", "🔫", "🏴‍☠️"],
        abilities: [
            "裁决", "救赎", "天罚手雷",
            "清算炮塔", "战略连接", "终极审判", "战士凝视"
        ],
        ult: "终极审判"
    }
});

const winterSoldier = new Person({
    en: {
        name: "Winter Soldier",
        gender: "Male",
        species: "Human",
        affiliation: "Avengers",
        role: "Duelist",
        eyeColor: ["Blue"],
        hairColor: ["Brown"],
        hp: 275,
        dateOfOrigin: 1941,
        emoji: ["❄️", "🔧", "🦾", "🧑‍🎤"],
        abilities: [
            "Roterstern", "Bionic Hook", "Tainted Voltage",
            "Trooper's Fist", "Ceaseless Charge", "Kraken Impact", "Infinite Grit"
        ],
        ult: "Kraken Impact"
    },
    es: {  // Spanish
        name: "Soldado de Invierno",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Vengadores",
        role: "Duelista",
        eyeColor: ["Azul"],
        hairColor: ["Marrón"],
        hp: 275,
        dateOfOrigin: 1941,
        emoji: ["❄️", "🔧", "🦾", "🧑‍🎤"],
        abilities: [
            "ROTERSTERN", "GANCHO BIÓNICO", "VOLTAJE CORRUPTO",
            "PUÑO DE SOLDADO", "CARGA INCESANTE", "IMPACTO DEL KRAKEN", "DETERMINACIÓN INFINITA"
        ],
        ult: "IMPACTO DEL KRAKEN"
    },
    fr: {  // French
        name: "Soldat de l'Hiver",
        gender: "Homme",
        species: "Humain",
        affiliation: "Avengers",
        role: "Duelliste",
        eyeColor: ["Bleu"],
        hairColor: ["Marron"],
        hp: 275,
        dateOfOrigin: 1941,
        emoji: ["❄️", "🔧", "🦾", "🧑‍🎤"],
        abilities: [
            "ROTERSTERN", "CROCHET BIONIQUE", "TENSION CORROMPUE",
            "POING DU TROUPE", "CHARGE INCESSANTE", "IMPACT DU KRAKEN", "GRIT INFINI"
        ],
        ult: "IMPACT DU KRAKEN"
    },
    de: {  // German
        name: "Wintersoldat",
        gender: "Männlich",
        species: "Mensch",
        affiliation: "Avengers",
        role: "Duellant",
        eyeColor: ["Blau"],
        hairColor: ["Braun"],
        hp: 275,
        dateOfOrigin: 1941,
        emoji: ["❄️", "🔧", "🦾", "🧑‍🎤"],
        abilities: [
            "ROTERSTERN", "BIONISCHER HAKEN", "VerdeRBTE SPANNUNG",
            "FAUST DES SOLDATEN", "UNAUFHÖRLICHER ANGRIFF", "KRAKEN-EINSCHLAG", "UNENDLICHE ENTSCHLOSSENHEIT"
        ],
        ult: "KRAKEN-EINSCHLAG"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "冬日战士",
        gender: "男性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["棕色"],
        hp: 275,
        dateOfOrigin: 1941,
        emoji: ["❄️", "🔧", "🦾", "🧑‍🎤"],
        abilities: [
            "红星", "仿生钩爪", "腐蚀电压",
            "士兵之拳", "无尽冲锋", "海妖冲击", "无限坚韧"
        ],
        ult: "海妖冲击"
    }
});

const wolverine = new Person({
    en: {
        name: "Wolverine",
        gender: "Male",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Duelist",
        eyeColor: ["Brown"],
        hairColor: ["Black"],
        hp: 350,
        dateOfOrigin: 1974,
        emoji: ["🐺", "⚔️", "🛡️", "🦾"],
        abilities: [
            "Savage Claw", "Feral Leap", "Undying Animal",
            "Vicious Rampage", "Regenerative Healing Factor",
            "Berserker Rage", "Last Stand"
        ],
        ult: "Last Stand"
    },
    es: {  // Spanish
        name: "Lobezno",
        gender: "Masculino",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Duelista",
        eyeColor: ["Marrón"],
        hairColor: ["Negro"],
        hp: 350,
        dateOfOrigin: 1974,
        emoji: ["🐺", "⚔️", "🛡️", "🦾"],
        abilities: [
            "GARRA SALVAJE", "SALTO FEROZ", "ANIMAL INMORTAL",
            "DESTRUCCIÓN IMPLACABLE", "FACTOR DE CURACIÓN REGENERATIVA",
            "FURIA BERSERKER", "ÚLTIMA RESISTENCIA"
        ],
        ult: "ÚLTIMA RESISTENCIA"
    },
    fr: {  // French
        name: "Wolverine",
        gender: "Homme",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Duelliste",
        eyeColor: ["Marron"],
        hairColor: ["Noir"],
        hp: 350,
        dateOfOrigin: 1974,
        emoji: ["🐺", "⚔️", "🛡️", "🦾"],
        abilities: [
            "GRIFFE SAUVAGE", "SAUT FÉROCE", "ANIMAL IMMORTEL",
            "RAGE VICIEUSE", "FACTEUR DE GUÉRISON RÉGÉNÉRATIF",
            "RAGE BERSERKER", "DERNIER COMBAT"
        ],
        ult: "DERNIER COMBAT"
    },
    de: {  // German
        name: "Wolverine",
        gender: "Männlich",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Duellant",
        eyeColor: ["Braun"],
        hairColor: ["Schwarz"],
        hp: 350,
        dateOfOrigin: 1974,
        emoji: ["🐺", "⚔️", "🛡️", "🦾"],
        abilities: [
            "WILDE KLAUE", "WILDER SPRUNG", "UNSTERBLICHES TIER",
            "BÖSARTIGE RAMPAGE", "REGENERIERENDER HEILFAKTOR",
            "BERSERKERWUT", "LETZTER STAND"
        ],
        ult: "LETZTER STAND"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "金刚狼",
        gender: "男性",
        species: "变种人",
        affiliation: "X战警",
        role: "决斗者",
        eyeColor: ["棕色"],
        hairColor: ["黑色"],
        hp: 350,
        dateOfOrigin: 1974,
        emoji: ["🐺", "⚔️", "🛡️", "🦾"],
        abilities: [
            "野蛮之爪", "野性跳跃", "不朽野兽",
            "残暴狂暴", "再生治愈因子",
            "狂战士之怒", "最后防线"
        ],
        ult: "最后防线"
    }
});

const misterFantastic = new Person({
    en: {
        name: "Mister Fantastic",
        gender: "Male",
        species: "Human",
        affiliation: "Fantastic 4",
        role: "Duelist",
        eyeColor: ["Brown"],
        hairColor: ["Brown", "Grey"],
        hp: 375,
        dateOfOrigin: 1961,
        emoji: ["🧑‍🔬", "🔵", "🧠", "🔬"],
        abilities: [
            "STRETCH PUNCH", "BRAINIAC BOUNCE", "REFLEXIVE RUBBER",
            "FLEXIBLE ELONGATION", "DISTENDED GRIP", "ELASTIC STRENGTH"
        ],
        ult: "BRAINIAC BOUNCE"
    },
    es: {  // Spanish
        name: "Señor Fantástico",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Los 4 Fantásticos",
        role: "Duelista",
        eyeColor: ["Marrón"],
        hairColor: ["Marrón", "Gris"],
        hp: 375,
        dateOfOrigin: 1961,
        emoji: ["🧑‍🔬", "🔵", "🧠", "🔬"],
        abilities: [
            "PUÑETAZO ELÁSTICO", "REBOTE CEREBRAL", "GOMA REFLEJA",
            "ALARGAMIENTO FLEXIBLE", "AGARRE EXTENDIDO", "FUERZA ELÁSTICA"
        ],
        ult: "REBOTE CEREBRAL"
    },
    fr: {  // French
        name: "Mister Fantastique",
        gender: "Homme",
        species: "Humain",
        affiliation: "Les 4 Fantastiques",
        role: "Duelliste",
        eyeColor: ["Marron"],
        hairColor: ["Marron", "Gris"],
        hp: 375,
        dateOfOrigin: 1961,
        emoji: ["🧑‍🔬", "🔵", "🧠", "🔬"],
        abilities: [
            "COUP DE POING ÉLASTIQUE", "REBONDISSEMENT CERVEAU", "CAOUTCHOUC RÉFLEXIF",
            "ALLONGEMENT FLEXIBLE", "PRISE ÉTIRÉE", "FORCE ÉLASTIQUE"
        ],
        ult: "REBONDISSEMENT CERVEAU"
    },
    de: {  // German
        name: "Mister Fantastisch",
        gender: "Männlich",
        species: "Mensch",
        affiliation: "Fantastischen Vier",
        role: "Duellant",
        eyeColor: ["Braun"],
        hairColor: ["Braun", "Grau"],
        hp: 375,
        dateOfOrigin: 1961,
        emoji: ["🧑‍🔬", "🔵", "🧠", "🔬"],
        abilities: [
            "STRECKSCHLAG", "GEHIRN-HÜPFER", "REFLEXIVES GUMMI",
            "FLEXIBLE DEHNUNG", "AUSGEDEHNTER GRIFF", "ELASTISCHE KRAFT"
        ],
        ult: "GEHIRN-HÜPFER"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "神奇先生",
        gender: "男性",
        species: "人类",
        affiliation: "神奇四侠",
        role: "决斗者",
        eyeColor: ["棕色"],
        hairColor: ["棕色", "灰色"],
        hp: 375,
        dateOfOrigin: 1961,
        emoji: ["🧑‍🔬", "🔵", "🧠", "🔬"],
        abilities: [
            "伸展拳", "智者弹跳", "反射橡胶",
            "灵活延展", "拉长抓握", "弹性力量"
        ],
        ult: "智者弹跳"
    }
});

const humanTorch = new Person({
    en: {
        name: "Human Torch",
        gender: "Male",  // Fixed typo from 'gemder'
        species: "Human",
        affiliation: "Fantastic 4",
        role: "Duelist",
        eyeColor: ["Blue"],
        hairColor: ["Blonde"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["💥", "💫", "💙", "🔥"],
        abilities: [
            "FIRE CLUSTER", "BLAZING BLAST", "PYRO-PRISON",
            "PLASMA BODY", "FLAMING METEOR", "SUPERNOVA"
        ],
        ult: "SUPERNOVA"  // Fixed capitalization to match pattern
    },
    es: {  // Spanish
        name: "Antorcha Humana",
        gender: "Masculino",
        species: "Humano",
        affiliation: "Los Cuatro Fantásticos",
        role: "Duelista",
        eyeColor: ["Azul"],
        hairColor: ["Rubio"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["💥", "💫", "💙", "🔥"],
        abilities: [
            "CÚMULO DE FUEGO", "EXPLOSIÓN ARDIENTE", "PRISIÓN DE FUEGO",
            "CUERPO DE PLASMA", "METEORO LLAMEANTE", "SUPERNOVA"
        ],
        ult: "SUPERNOVA"
    },
    fr: {  // French
        name: "Torche Humaine",
        gender: "Homme",
        species: "Humain",
        affiliation: "Les Quatre Fantastiques",
        role: "Duelliste",
        eyeColor: ["Bleu"],
        hairColor: ["Blond"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["💥", "💫", "💙", "🔥"],
        abilities: [
            "GRAPPE DE FEU", "EXPLOSION FLAMBOYANTE", "PRISON PYRO",
            "CORPS DE PLASMA", "MÉTÉORE ENFLAMMÉ", "SUPERNOVA"
        ],
        ult: "SUPERNOVA"
    },
    de: {  // German
        name: "Menschliche Fackel",
        gender: "Männlich",
        species: "Menschlich",
        affiliation: "Fantastische Vier",
        role: "Duellant",
        eyeColor: ["Blau"],
        hairColor: ["Blond"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["💥", "💫", "💙", "🔥"],
        abilities: [
            "FEUERBÜNDEL", "LODERNDE EXPLOSION", "PYRO-GEFÄNGNIS",
            "PLASMAKÖRPER", "FLAMMENDER METEOR", "SUPERNOVA"
        ],
        ult: "SUPERNOVA"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "霹雳火",
        gender: "男性",
        species: "人类",
        affiliation: "神奇四侠",
        role: "决斗者",
        eyeColor: ["蓝色"],
        hairColor: ["金色"],
        hp: 250,
        dateOfOrigin: 1939,
        emoji: ["💥", "💫", "💙", "🔥"],
        abilities: [
            "火焰集群", "烈焰爆破", "烈火牢笼",
            "等离子体", "燃烧流星", "超新星"
        ],
        ult: "超新星"
    }
});

const phoenix = new Person({
    en: {
        name: "Phoenix",
        gender: "Female",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Duelist",
        eyeColor: ["Green"],
        hairColor: ["Red"],
        hp: 275,
        dateOfOrigin: 1963,
        emoji: ["🔥", "🦜", "🔮", '🌌'],
        abilities: [
            "COSMIC FLAMES", "ENDSONG INFERNO", "TELEPATHIC ILLUSION",
            "DARK ASCENT", "TELEKINESIS BURST", "MIND'S GRACE"
        ],
        ult: "ENDSONG INFERNO"

    },
    es: {
        name: "Phoenix",
        gender: "Femenina",
        species: "mutante",
        affiliation: "X-Men",
        role: "Duelista",
        eyeColor: ["Verde"],
        hairColor: ["Roja"],
        hp: 275,
        dateOfOrigin: 1963,
        emoji: ["🔥", "🦜", "🔮", '🌌'],
        abilities: [
            "LLAMAS CÓSMICAS", "FIN DE LA CANCIÓN DEL INFIERNO", "ILUSIÓN TELEPÁTICA",
            "ASCENSO OSCURO", "EXPLOSIÓN DE TELEKINESIS", "LA GRACIA DE LA MENTE"
        ],
        ult: "FIN DE LA CANCIÓN DEL INFIERNO"
    },
    fr: {
        name: "Phoenix",
        gender: "Femelle",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Duelliste",
        eyeColor: ["Verte"],
        hairColor: ["Rouge"],
        hp: 275,
        dateOfOrigin: 1963,
        emoji: ["🔥", "🦜", "🔮", '🌌'],
        abilities: [
            "FLAMMES COSMIQUES", "FIN DE CHANSON INFERNO", "ILLUSION TÉLÉPATHIQUE",
            "ASCENSION SOMBRE", "ÉCLAT DE TÉLÉKINÉSIE", "MIND'S GRACE"
        ],
        ult: "FIN DE CHANSON INFERNO"
    },
    de: {
        name: "Phoenix",
        gender: "Weiblich",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Duellant",
        eyeColor: ["Grün"],
        hairColor: ["Rot"],
        hp: 275,
        dateOfOrigin: 1963,
        emoji: ["🔥", "🦜", "🔮", '🌌'],
        abilities: [
            "KOSMISCHE FLAMMEN", "ENDSONG INFERNO", "TELEPATHISCHE ILLUSION",
            "Dunkler Aufstieg", "TELEKINESES-AUSBRUCH", "Die Gnade des Geistes"
        ],
        ult: "ENDSONG INFERNO"
    },
    zh: {
        name: "凤凰",
        gender: "女性",
        species: "突变体",
        affiliation: "X战警",
        role: "决斗者",
        eyeColor: ["绿色的"],
        hairColor: ["红色的"],
        hp: 275,
        dateOfOrigin: 1963,
        emoji: ["🔥", "🦜", "🔮", '🌌'],
        abilities: [
            "宇宙火焰", "末日之歌地狱", "心灵感应幻觉",
            "黑暗上升", "心灵感应爆发", "心灵的优雅"
        ],
        ult: "末日之歌地狱"

    },
});

const adamWarlock = new Person({
    en: {
        name: "Adam Warlock",
        gender: "Male",
        species: "Sovereign",
        affiliation: "Guardians",
        role: "Strategist",
        eyeColor: ["White"],
        hairColor: ["Gold"],
        hp: 250,
        dateOfOrigin: 1967,
        emoji: ["🪞", "✨", "🌌", "👑"],
        abilities: [
            "QUANTUM MAGIC", "KARMIC REVIVAL", "SOUL BOND",
            "AVATAR LIFE STREAM", "COSMIC CLUSTER"
        ],
        ult: "KARMIC REVIVAL"
    },
    es: {  // Spanish
        name: "Adam Warlock",
        gender: "Masculino",
        species: "Soberano",
        affiliation: "Guardianes",
        role: "Estratega",
        eyeColor: ["Blanco"],
        hairColor: ["Dorado"],
        hp: 250,
        dateOfOrigin: 1967,
        emoji: ["🪞", "✨", "🌌", "👑"],
        abilities: [
            "MAGIA CUÁNTICA", "RENACIMIENTO KÁRMICO", "VÍNCULO ALMA",
            "CORRIENTE VITAL AVATAR", "CLÚSTER CÓSMICO"
        ],
        ult: "RENACIMIENTO KÁRMICO"
    },
    fr: {  // French
        name: "Adam Warlock",
        gender: "Homme",
        species: "Souverain",
        affiliation: "Gardiens",
        role: "Stratège",
        eyeColor: ["Blanc"],
        hairColor: ["Doré"],
        hp: 250,
        dateOfOrigin: 1967,
        emoji: ["🪞", "✨", "🌌", "👑"],
        abilities: [
            "MAGIE QUANTIQUE", "RÉVIVISCENCE KARMATIQUE", "LIEN D'ÂME",
            "FLUX DE VIE AVATAR", "AGRÉGAT COSMIQUE"
        ],
        ult: "RÉVIVISCENCE KARMATIQUE"
    },
    de: {  // German
        name: "Adam Warlock",
        gender: "Männlich",
        species: "Souverän",
        affiliation: "Wächter",
        role: "Stratege",
        eyeColor: ["Weiß"],
        hairColor: ["Gold"],
        hp: 250,
        dateOfOrigin: 1967,
        emoji: ["🪞", "✨", "🌌", "👑"],
        abilities: [
            "QUANTENMAGIE", "KARMISCHE WIEDERGEBURT", "SEELENBUND",
            "AVATAR-LEBENSSTROM", "KOSMISCHES CLUSTER"
        ],
        ult: "KARMISCHE WIEDERGEBURT"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "亚当·沃洛克",
        gender: "男性",
        species: "至尊族",
        affiliation: "银河护卫队",
        role: "战略家",
        eyeColor: ["白色"],
        hairColor: ["金色"],
        hp: 250,
        dateOfOrigin: 1967,
        emoji: ["🪞", "✨", "🌌", "👑"],
        abilities: [
            "量子魔法", "业力复生", "灵魂羁绊",
            "化身生命流", "宇宙聚合"
        ],
        ult: "业力复生"
    }
});

const rocket = new Person({
    en: {
        name: "Rocket",
        gender: "Male",
        species: "Raccoon",
        affiliation: "Guardians",
        role: "Strategist",
        eyeColor: ["Red"],
        hairColor: ["Black", "Brown", "White"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🔧", "😂", "🦝", "🔫"],
        abilities: [
            "BOMBARD MODE", "REPAIR MODE", "C.Y.A.",
            "JETPACK DASH", "B.R.B.", "WILD CRAWL", "FLYING ACE"
        ],
        ult: "C.Y.A."
    },
    es: {  // Spanish
        name: "Rocket",
        gender: "Masculino",
        species: "Mapache",
        affiliation: "Guardianes",
        role: "Estratega",
        eyeColor: ["Rojo"],
        hairColor: ["Negro", "Marrón", "Blanco"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🔧", "😂", "🦝", "🔫"],
        abilities: [
            "MODO BOMBARDEO", "MODO REPARACIÓN", "C.Y.A.",
            "IMPULSO JETPACK", "B.R.B.", "TREPA SALVAJE", "AS VOLADOR"
        ],
        ult: "C.Y.A."
    },
    fr: {  // French
        name: "Rocket",
        gender: "Homme",
        species: "Raton laveur",
        affiliation: "Gardiens",
        role: "Stratège",
        eyeColor: ["Rouge"],
        hairColor: ["Noir", "Marron", "Blanc"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🔧", "😂", "🦝", "🔫"],
        abilities: [
            "MODE BOMBARDEMENT", "MODE RÉPARATION", "C.Y.A.",
            "PROPULSION JETPACK", "B.R.B.", "GRIMPÉE SAUVAGE", "AS VOLANT"
        ],
        ult: "C.Y.A."
    },
    de: {  // German
        name: "Rocket",
        gender: "Männlich",
        species: "Waschbär",
        affiliation: "Wächter",
        role: "Stratege",
        eyeColor: ["Rot"],
        hairColor: ["Schwarz", "Braun", "Weiß"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🔧", "😂", "🦝", "🔫"],
        abilities: [
            "BOMBARDIERUNGSMODUS", "REPARATURMODUS", "C.Y.A.",
            "JETPACK-SPRINT", "B.R.B.", "WILDER KRABBEL", "FLIEGERASS"
        ],
        ult: "C.Y.A."
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "火箭浣熊",
        gender: "男性",
        species: "浣熊",
        affiliation: "银河护卫队",
        role: "战略家",
        eyeColor: ["红色"],
        hairColor: ["黑色", "棕色", "白色"],
        hp: 250,
        dateOfOrigin: 1976,
        emoji: ["🔧", "😂", "🦝", "🔫"],
        abilities: [
            "轰炸模式", "维修模式", "C.Y.A.",
            "喷气背包冲刺", "B.R.B.", "狂野爬行", "飞行王牌"
        ],
        ult: "C.Y.A."
    }
});

const loki = new Person({
    en: {
        name: "Loki",
        gender: "Fluid",
        species: "Asgardian",
        affiliation: "Villain",
        role: "Strategist",
        eyeColor: ["Green"],
        hairColor: ["Black"],
        hp: 275,
        dateOfOrigin: 1949,
        emoji: ["🃏", "🟢", "👑", "🪄"],
        abilities: [
            "MYSTICAL MISSILE", "GOD OF MISCHIEF", "REGENERATION DOMAIN",
            "DOPPELGANGER", "DEVIOUS EXCHANGE", "BACKSTAB", "DECEPTION"
        ],
        ult: "GOD OF MISCHIEF"
    },
    es: {  // Spanish
        name: "Loki",
        gender: "Fluido",
        species: "Asgardiano",
        affiliation: "Villano",
        role: "Estratega",
        eyeColor: ["Verde"],
        hairColor: ["Negro"],
        hp: 275,
        dateOfOrigin: 1949,
        emoji: ["🃏", "🟢", "👑", "🪄"],
        abilities: [
            "MISIL MÍSTICO", "DIOS DEL ENGAÑO", "DOMINIO REGENERADOR",
            "DOBLE FANTASMA", "INTERCAMBIO ENGAÑOSO", "PUÑALADA TRAPERA", "ILUSIÓN"
        ],
        ult: "DIOS DEL ENGAÑO"
    },
    fr: {  // French
        name: "Loki",
        gender: "Fluide",
        species: "Asgardien",
        affiliation: "Méchant",
        role: "Stratège",
        eyeColor: ["Vert"],
        hairColor: ["Noir"],
        hp: 275,
        dateOfOrigin: 1949,
        emoji: ["🃏", "🟢", "👑", "🪄"],
        abilities: [
            "MISSILE MYSTIQUE", "DIEU DE LA MALICE", "DOMAINE DE RÉGÉNÉRATION",
            "DOPPELGÄNGER", "ÉCHANGE MALICIEUX", "COUP DANS LE DOS", "ILLUSION"
        ],
        ult: "DIEU DE LA MALICE"
    },
    de: {  // German
        name: "Loki",
        gender: "Flüssig",
        species: "Asgardian",
        affiliation: "Schurke",
        role: "Stratege",
        eyeColor: ["Grün"],
        hairColor: ["Schwarz"],
        hp: 275,
        dateOfOrigin: 1949,
        emoji: ["🃏", "🟢", "👑", "🪄"],
        abilities: [
            "MYSTISCHES GESCHOSS", "GOTT DES SCHABERNACKS", "REGENERATIONSZONE",
            "DOPPELGÄNGER", "HINTERLISTIGER TAUSCH", "HINTERHÄLTIGER STICH", "TÄUSCHUNG"
        ],
        ult: "GOTT DES SCHABERNACKS"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "洛基",
        gender: "流动",
        species: "阿斯加德人",
        affiliation: "反派",
        role: "战略家",
        eyeColor: ["绿色"],
        hairColor: ["黑色"],
        hp: 275,
        dateOfOrigin: 1949,
        emoji: ["🃏", "🟢", "👑", "🪄"],
        abilities: [
            "神秘飞弹", "恶作剧之神", "再生领域",
            "幻影分身", "狡诈换位", "背刺", "欺骗"
        ],
        ult: "恶作剧之神"
    }
});

const lunaSnow = new Person({
    en: {
        name: "Luna Snow",
        gender: "Female",
        species: "Human",
        affiliation: "Avengers",
        role: "Strategist",
        eyeColor: ["Blue", "Brown"],
        hairColor: ["Black", "White"],
        hp: 275,
        dateOfOrigin: 2018,
        emoji: ["❄️", "🎤", "✨", "🌙"],
        abilities: [
            "LIGHT & DARK ICE", "FATE OF BOTH WORLDS", "ICE ARTS",
            "SHARE THE STAGE", "ABSOLUTE ZERO", "CRYO HEART", "SMOOTH SKATE"
        ],
        ult: "FATE OF BOTH WORLDS"
    },
    es: {  // Spanish
        name: "Luna Snow",
        gender: "Femenino",
        species: "Humana",
        affiliation: "Vengadores",
        role: "Estratega",
        eyeColor: ["Azul", "Marrón"],
        hairColor: ["Negro", "Blanco"],
        hp: 275,
        dateOfOrigin: 2018,
        emoji: ["❄️", "🎤", "✨", "🌙"],
        abilities: [
            "HIELO CLARO Y OSCURO", "DESTINO DE DOS MUNDOS", "ARTES DEL HIELO",
            "COMPARTE EL ESCENARIO", "CERO ABSOLUTO", "CORAZÓN CRIOGÉNICO", "PATINAJE SUAVE"
        ],
        ult: "DESTINO DE DOS MUNDOS"
    },
    fr: {  // French
        name: "Luna Snow",
        gender: "Féminin",
        species: "Humaine",
        affiliation: "Avengers",
        role: "Stratège",
        eyeColor: ["Bleu", "Marron"],
        hairColor: ["Noir", "Blanc"],
        hp: 275,
        dateOfOrigin: 2018,
        emoji: ["❄️", "🎤", "✨", "🌙"],
        abilities: [
            "GLACE LUMINEUSE ET SOMBRE", "DESTIN DES DEUX MONDES", "ARTS DE LA GLACE",
            "PARTAGE DE SCÈNE", "ZÉRO ABSOLU", "CŒUR CRYOGÉNIQUE", "PATINAGE FluidE"
        ],
        ult: "DESTIN DES DEUX MONDES"
    },
    de: {  // German
        name: "Luna Snow",
        gender: "Weiblich",
        species: "Mensch",
        affiliation: "Avengers",
        role: "Stratege",
        eyeColor: ["Blau", "Braun"],
        hairColor: ["Schwarz", "Weiß"],
        hp: 275,
        dateOfOrigin: 2018,
        emoji: ["❄️", "🎤", "✨", "🌙"],
        abilities: [
            "LICHT & DUNKLES EIS", "SCHICKSAL BEIDER WELTEN", "EISKÜNSTE",
            "BÜHNE TEILEN", "ABSOLUTER NULLPUNKT", "KRYO-HERZ", "SANFTES SCHLITTERN"
        ],
        ult: "SCHICKSAL BEIDER WELTEN"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "露娜·雪",
        gender: "女性",
        species: "人类",
        affiliation: "复仇者联盟",
        role: "战略家",
        eyeColor: ["蓝色", "棕色"],
        hairColor: ["黑色", "白色"],
        hp: 275,
        dateOfOrigin: 2018,
        emoji: ["❄️", "🎤", "✨", "🌙"],
        abilities: [
            "光暗之冰", "双界命运", "冰之艺术",
            "共享舞台", "绝对零度", "冰冻之心", "流畅滑行"
        ],
        ult: "双界命运"
    }
});

const mantis = new Person({
    en: {
        name: "Mantis",
        gender: "Female",
        species: "Empath",
        affiliation: "Guardians",
        role: "Strategist",
        eyeColor: ["Black"],
        hairColor: ["Black"],
        hp: 250,
        dateOfOrigin: 1973,
        emoji: ["🌸", "😌", "👾", "🌌"],
        abilities: [
            "LIFE ENERGY BLAST", "SOUL RESURGENCE", "SPORE SLUMBER",
            "ALLIED INSPIRATION", "NATURAL ANGER", "HEALING FLOWER",
            "NATURE'S FAVOR", "NATURE'S SOUL"
        ],
        ult: "SOUL RESURGENCE"
    },
    es: {  // Spanish
        name: "Mantis",
        gender: "Femenino",
        species: "Émpata",
        affiliation: "Guardianes",
        role: "Estratega",
        eyeColor: ["Negro"],
        hairColor: ["Negro"],
        hp: 250,
        dateOfOrigin: 1973,
        emoji: ["🌸", "😌", "👾", "🌌"],
        abilities: [
            "EXPLOSIÓN DE ENERGÍA VITAL", "RESURGIMIENTO DEL ALMA", "SUEÑO DE ESPORAS",
            "INSPIRACIÓN ALIADA", "IRA NATURAL", "FLOR CURATIVA",
            "FAVOR DE LA NATURALEZA", "ALMA DE LA NATURALEZA"
        ],
        ult: "RESURGIMIENTO DEL ALMA"
    },
    fr: {  // French
        name: "Mantis",
        gender: "Féminin",
        species: "Empathe",
        affiliation: "Gardiens",
        role: "Stratège",
        eyeColor: ["Noir"],
        hairColor: ["Noir"],
        hp: 250,
        dateOfOrigin: 1973,
        emoji: ["🌸", "😌", "👾", "🌌"],
        abilities: [
            "EXPLOSION D'ÉNERGIE VITALE", "RÉSURGENCE DE L'ÂME", "SOMMEIL DES SPORES",
            "INSPIRATION ALLIÉE", "COLÈRE NATURELLE", "FLEUR GUÉRISSEUSE",
            "FAVEUR DE LA NATURE", "ÂME DE LA NATURE"
        ],
        ult: "RÉSURGENCE DE L'ÂME"
    },
    de: {  // German
        name: "Mantis",
        gender: "Weiblich",
        species: "Empath",
        affiliation: "Wächter",
        role: "Stratege",
        eyeColor: ["Schwarz"],
        hairColor: ["Schwarz"],
        hp: 250,
        dateOfOrigin: 1973,
        emoji: ["🌸", "😌", "👾", "🌌"],
        abilities: [
            "LEBENSENERGIE-EXPLOSION", "SEELEN-WIEDERBELEBUNG", "SPORENSCHLAF",
            "VERBÜNDETE INSPIRATION", "NATÜRLICHER ZORN", "HEILENDE BLUME",
            "GUNST DER NATUR", "SEELE DER NATUR"
        ],
        ult: "SEELEN-WIEDERBELEBUNG"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "螳螂女",
        gender: "女性",
        species: "共感者",
        affiliation: "银河护卫队",
        role: "战略家",
        eyeColor: ["黑色"],
        hairColor: ["黑色"],
        hp: 250,
        dateOfOrigin: 1973,
        emoji: ["🌸", "😌", "👾", "🌌"],
        abilities: [
            "生命能量爆破", "灵魂复苏", "孢子沉眠",
            "盟友激励", "自然之怒", "治愈之花",
            "自然之恩", "自然之魂"
        ],
        ult: "灵魂复苏"
    }
});

const cloakAndDagger = new Person({
    en: {  // English
        name: "Cloak And Dagger",
        gender: "Other",
        species: "Mutant",
        affiliation: "X-Men",
        role: "Strategist",
        eyeColor: ["Grey", "Blue"],
        hairColor: ["Black", "Blonde"],
        hp: 275,
        dateOfOrigin: 1982,
        emoji: ["🌘", "🔗", "🗡️", "🌌"],
        abilities: [
            "DARKFORCE CLOAK", "ETERNAL BOND", "LIGHT'S EMBRACE",
            "TERROR CAPE", "DARK TELEPORTATION"
        ],
        ult: "ETERNAL BOND"
    },
    es: {  // Spanish
        name: "Capa y Daga",
        gender: "Otro",
        species: "Mutante",
        affiliation: "X-Men",
        role: "Estratega",
        eyeColor: ["Gris", "Azul"],
        hairColor: ["Negro", "Rubio"],
        hp: 275,
        dateOfOrigin: 1982,
        emoji: ["🌘", "🔗", "🗡️", "🌌"],
        abilities: [
            "MANTO DE FUERZA OSCURA", "VÍNCULO ETERNO", "ABRAZO DE LUZ",
            "CAPA DEL TERROR", "TELETRANSPORTE OSCURO"
        ],
        ult: "VÍNCULO ETERNO"
    },
    fr: {  // French
        name: "Cape et Dague",
        gender: "Autre",

        species: "Mutant",
        affiliation: "X-Men",
        role: "Stratège",
        eyeColor: ["Gris", "Bleu"],
        hairColor: ["Noir", "Blonde"],
        hp: 275,
        dateOfOrigin: 1982,
        emoji: ["🌘", "🔗", "🗡️", "🌌"],
        abilities: [
            "CAPE DE FORCE OBSCURE", "LIEN ÉTERNEL", "ÉTREINTE DE LUMIÈRE",
            "CAPE DE TERREUR", "TÉLÉPORTATION OBSCURE"
        ],
        ult: "LIEN ÉTERNEL"
    },
    de: {  // German
        name: "Umhang und Dolch",
        gender: "Andere",

        species: "Mutant",
        affiliation: "X-Men",
        role: "Stratege",
        eyeColor: ["Grau", "Blau"],
        hairColor: ["Schwarz", "Blonde"],
        hp: 275,
        dateOfOrigin: 1982,
        emoji: ["🌘", "🔗", "🗡️", "🌌"],
        abilities: [
            "DUNKELKRAFT-UMHANG", "EWIGE BINDUNG", "UMARMUNG DES LICHTS",
            "TERROR-UMHANG", "DUNKLE TELEPORTATION"
        ],
        ult: "EWIGE BINDUNG"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "斗篷与匕首",
        gender: "其他",
        species: "变种人",
        affiliation: "X战警",
        role: "战略家",
        eyeColor: ["灰色", "蓝色"],
        hairColor: ["黑色", "金色"],
        hp: 275,
        dateOfOrigin: 1982,
        emoji: ["🌘", "🔗", "🗡️", "🌌"],
        abilities: [
            "黑暗能量斗篷", "永恒羁绊", "光之拥抱",
            "恐惧斗篷", "黑暗传送"
        ],
        ult: "永恒羁绊"
    }
});

const jeffTheLandShark = new Person({
    en: {  // English
        name: "Jeff The Land Shark",
        gender: "Male",
        species: "Land Shark",
        affiliation: "None",
        role: "Strategist",
        eyeColor: ["Black"],
        hairColor: ["None"],
        hp: 250,
        dateOfOrigin: 2019,
        emoji: ["🌊", "🐟", "🦈", "😂"],
        abilities: [
            "JOYFUL SPLASH", "AQUA BURST", "IT'S JEFF!",
            "HIDE AND SEEK", "HEALING BUBBLE", "OBLIVIOUS CUTENESS"
        ],
        ult: "IT'S JEFF!"
    },
    es: {  // Spanish
        name: "Jeff el Tiburón Terrestre",
        gender: "Masculino",
        species: "Tiburón Terrestre",
        affiliation: "Ninguna",
        role: "Estratega",
        eyeColor: ["Negro"],
        hairColor: ["Ninguno"],
        hp: 250,
        dateOfOrigin: 2019,
        emoji: ["🌊", "🐟", "🦈", "😂"],
        abilities: [
            "SALPICADURA ALEGRE", "EXPLOSIÓN ACUÁTICA", "¡ES JEFF!",
            "ESCÓNDETE Y BUSCA", "BURBUJA CURATIVA", "TERNURA INGENUA"
        ],
        ult: "¡ES JEFF!"
    },
    fr: {  // French
        name: "Jeff le Requin Terrestre",
        gender: "masculin",
        species: "Requin Terrestre",
        affiliation: "Aucune",
        role: "Stratège",
        eyeColor: ["Noir"],
        hairColor: ["Aucun"],
        hp: 250,
        dateOfOrigin: 2019,
        emoji: ["🌊", "🐟", "🦈", "😂"],
        abilities: [
            "ÉCLABOUSSURE JOYEUSE", "EXPLOSION AQUATIQUE", "C'EST JEFF!",
            "CACHE-CACHE", "BULLE GUÉRISSANTE", "ADORABLEMENT NAÏF"
        ],
        ult: "C'EST JEFF!"
    },
    de: {  // German
        name: "Jeff der Landhai",
        gender: "Männlich",
        species: "Landhai",
        affiliation: "Keine",
        role: "Stratege",
        eyeColor: ["Schwarz"],
        hairColor: ["Keine"],
        hp: 250,
        dateOfOrigin: 2019,
        emoji: ["🌊", "🐟", "🦈", "😂"],
        abilities: [
            "FREUDIGER SPRITZER", "AQUA-EXPLOSION", "ES IST JEFF!",
            "VERSTECKEN", "HEILENDE BLASE", "UNBEWUSSTE SÜßIGKEIT"
        ],
        ult: "ES IST JEFF!"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "陆地鲨杰夫",
        gender: "男性",
        species: "陆地鲨",
        affiliation: "无",
        role: "战略家",
        eyeColor: ["黑色"],
        hairColor: ["无"],
        hp: 250,
        dateOfOrigin: 2019,
        emoji: ["🌊", "🐟", "🦈", "😂"],
        abilities: [
            "欢乐水花", "水波爆发", "是杰夫！",
            "捉迷藏", "治愈气泡", "呆萌可爱"
        ],
        ult: "是杰夫！"
    }
});

const invisibleWoman = new Person({
    en: {  // English
        name: "Invisible Woman",
        gender: "Female",
        species: "Human",
        affiliation: "Fantastic 4",
        role: "Strategist",
        eyeColor: ["Blue"],
        hairColor: ["Blonde"],
        hp: 275,
        dateOfOrigin: 1961,
        emoji: [" ", "🌫️", "🛡️", "💎"],
        abilities: [
            "ORB PROJECTION", "INVISIBLE BOUNDARY", "PSIONIC VORTEX",
            "FORCE PHYSICS", "AGILE STRIKE", "VEILED STEP",
            "GUARDIAN SHIELD", "COVert ADVANCE"
        ],
        ult: "INVISIBLE BOUNDARY"
    },
    es: {  // Spanish
        name: "Mujer Invisible",
        gender: "Femenino",
        species: "Humana",
        affiliation: "Los 4 Fantásticos",
        role: "Estratega",
        eyeColor: ["Azul"],
        hairColor: ["Rubio"],
        hp: 275,
        dateOfOrigin: 1961,
        emoji: [" ", "🌫️", "🛡️", "💎"],
        abilities: [
            "PROYECCIÓN ORB", "BARRERA INVISIBLE", "VÓRTICE PSIÓNICO",
            "FÍSICA DE FUERZA", "ATAQUE ÁGIL", "PASO VELADO",
            "ESCUDO GUARDIÁN", "AVANCE ENCUBIERTO"
        ],
        ult: "BARRERA INVISIBLE"
    },
    fr: {  // French
        name: "Femme Invisible",
        gender: "Féminin",
        species: "Humaine",
        affiliation: "Les 4 Fantastiques",
        role: "Stratège",
        eyeColor: ["Bleu"],
        hairColor: ["Blonde"],
        hp: 275,
        dateOfOrigin: 1961,
        emoji: [" ", "🌫️", "🛡️", "💎"],
        abilities: [
            "PROJECTION D'ORBE", "BARRIÈRE INVISIBLE", "VORTEX PSIONIQUE",
            "PHYSIQUE DE FORCE", "FRAPPE AGILE", "PAS VOILÉ",
            "BOUCLIER GARDIEN", "AVANCÉE CACHÉE"
        ],
        ult: "BARRIÈRE INVISIBLE"
    },
    de: {  // German
        name: "Unsichtbare Frau",
        gender: "Weiblich",
        species: "Mensch",
        affiliation: "Fantastischen 4",
        role: "Stratege",
        eyeColor: ["Blau"],
        hairColor: ["Blonde"],
        hp: 275,
        dateOfOrigin: 1961,
        emoji: [" ", "🌫️", "🛡️", "💎"],
        abilities: [
            "ORB-PROJEKTION", "UNSICHTBARE GRENZE", "PSIONISCHER WIRBEL",
            "KRAFTPHYSIK", "AGILER SCHLAG", "VERSCHLEIERTER SCHRITT",
            "WÄCHTERSCHILD", "GEHEIMER VORSTOß"
        ],
        ult: "UNSICHTBARE GRENZE"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "隐形女",
        gender: "女性",
        species: "人类",
        affiliation: "神奇四侠",
        role: "战略家",
        eyeColor: ["蓝色"],
        hairColor: ["金色"],
        hp: 275,
        dateOfOrigin: 1961,
        emoji: [" ", "🌫️", "🛡️", "💎"],
        abilities: [
            "能量球投射", "隐形屏障", "心灵漩涡",
            "力量物理", "敏捷打击", "隐秘步伐",
            "守护之盾", "秘密推进"
        ],
        ult: "隐形屏障"
    }
});

const ultron = new Person({
    en: {  // English
        name: "Ultron",
        gender: "Male",
        species: "Robot",
        affiliation: "None",
        role: "Strategist",
        eyeColor: ["Orange", "Red"],
        hairColor: ["None"],
        hp: 250,
        dateOfOrigin: 1968,
        emoji: ["🤖", "🧠", "⚙️", "☠️"],
        abilities: [
            "ENCEPHALO-RAY", "RAGE OF ULTRON", "IMPERATIVE: FIREWALL",
            "IMPERATIVE: PATCH", "DYNAMIC FLIGHT", "NANO RAY"
            ],
        ult: "RAGE OF ULTRON"
    },
    es: {  // Spanish
        name: "Ultron",
        gender: "Masculino",
        species: "Robot",
        affiliation: "Ninguno",
        role: "Estratega",
        eyeColor: ["Naranja", "Rojo"],
        hairColor: ["Ninguno"],
        hp: 250,
        dateOfOrigin: 1968,
        emoji: ["🤖", "🧠", "⚙️", "☠️"],
        abilities: [
            "ENCEFALO-RAY", "LA FURIA DE ULTRÓN", "IMPERATIVO: FIREWALL",
            "IMPERATIVO: PARCHE", "VUELO DINÁMICO", "NANORAYO"
            ],
        ult: "LA FURIA DE ULTRÓN"
    },
    fr: {  // French
        name: "Ultron",
        gender: "Mâle",
        species: "Robot",
        affiliation: "Aucun",
        role: "Stratège",
        eyeColor: ["Orange", "Rouge"],
        hairColor: ["Aucun"],
        hp: 250,
        dateOfOrigin: 1968,
        emoji: ["🤖", "🧠", "⚙️", "☠️"],
        abilities: [
            "RAYONNEMENT ENCÉPHALIQUE", "RAGE D'ULTRON", "IMPÉRATIF : PARE-FEU",
            "IMPÉRATIF : PATCH", "VOL DYNAMIQUE", "NANO RAYON"
            ],
        ult: "RAGE D'ULTRON"
    },
    de: {  // German
        name: "Ultron",
        gender: "Männlich",
        species: "Roboter",
        affiliation: "Keiner",
        role: "Stratege",
        eyeColor: ["Orange", "Rot"],
        hairColor: ["Keiner"],
        hp: 250,
        dateOfOrigin: 1968,
        emoji: ["🤖", "🧠", "⚙️", "☠️"],
        abilities: [
            "ENCEPHALO-RAY", "WUT VON ULTRON", "UNBEDINGT: FIREWALL",
            "UNBEDINGT: PATCH", "DYNAMISCHER FLUG", "NANOSTRAHL"
            ],
        ult: "WUT VON ULTRON"
    },
    zh: {  // Mandarin (Simplified Chinese)
        name: "奥创",
        gender: "男性",
        species: "机器人",
        affiliation: "没有任何",
        role: "战略家",
        eyeColor: ["橙子", "红色的"],
        hairColor: ["没有任何"],
        hp: 250,
        dateOfOrigin: 1968,
        emoji: ["🤖", "🧠", "⚙️", "☠️"],
        abilities: [
            "脑射线", "奥创之怒", "必要措施：防火墙",
            "紧急：补丁", "动态飞行", "纳米射线"
            ],
        ult: "奥创之怒"
    }
});

export const characters = [
    captainAmerica,
    doctorStrange,
    groot,
    hulk,
    thor,
    magneto,
    peniParker,
    venom,
    theThing,
    emmaFrost,
    blackPanther,
    blackWidow,
    hawkeye,
    hela,
    ironFist,
    ironMan,
    magik,
    moonKnight,
    namor,
    psylocke,
    scarletWitch,
    spiderMan,
    squirrelGirl,
    starLord,
    storm,
    punisher,
    winterSoldier,
    wolverine,
    misterFantastic,
    humanTorch,
    phoenix,
    adamWarlock,
    rocket,
    loki,
    lunaSnow,
    mantis,
    cloakAndDagger,
    jeffTheLandShark,
    invisibleWoman,
    ultron
];