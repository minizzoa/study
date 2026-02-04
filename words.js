// words.js
const wordList = [
    // --- 동식물 & 자연 (Nature & Animals) ---
    "TIGER", "ZEBRA", "COWBOY", "EAGLE", "SHARK", "WHALE", "SNAKE", "MOUSE", "PANDA", "LEMON",
    "APPLE", "GRAPE", "BERRY", "PLANT", "FLOWER", "FOREST", "RIVER", "OCEAN", "EARTH", "BEACH",
    "STORM", "CLOUD", "RAINY", "SUNNY", "GRASS", "DESERT", "MOON", "SPACE", "PLANET", "STAR",

    // --- 일상 사물 (Daily Objects) ---
    "HOUSE", "CHAIR", "TABLE", "CLOCK", "PHONE", "RADIO", "KNIFE", "SPOON", "GLASS", "PLATE",
    "BREAD", "PIZZA", "CANDY", "SUGAR", "WATER", "JUICE", "DRINK", "SHIRT", "PANTS", "DRESS",
    "WATCH", "SHOES", "PAPER", "BOOKS", "TRAIN", "TRUCK", "PLANE", "CYCLE", "MOTOR", "LIGHT",

    // --- 신체 & 감정 (Body & Emotions) ---
    "SMILE", "HAPPY", "ANGRY", "BRAVE", "SWEET", "HEART", "BLOOD", "MOUTH", "TOOTH", "BRAIN",
    "POWER", "FORCE", "DREAM", "PEACE", "GHOST", "ALIVE", "MAGIC", "MUSIC", "SOUND", "VOICE",

    // --- 동작 & 상태 (Verbs & States) ---
    "CLEAN", "DRINK", "DRIVE", "SLEEP", "WRITE", "PAINT", "STUDY", "LEARN", "THINK", "WATCH",
    "LAUGH", "BREAK", "BUILD", "CARRY", "CHECK", "CLOSE", "DANCE", "FIGHT", "GUESS", "HURRY",
    "JOKES", "KNOCK", "LIGHT", "ORDER", "REACH", "SHAKE", "SHARE", "SPEND", "TRUST", "VISIT",

    // --- 기타 다빈도 단어 (Common Words) ---
    "ABOUT", "ABOVE", "AFTER", "AGAIN", "ALONE", "ALONG", "BASIC", "BEGIN", "BELOW", "BLACK",
    "BLIND", "BOARD", "Brave", "BRIGHT", "BRING", "BROWN", "BUILD", "CAUSE", "CHILD", "CLEAR",
    "COLOR", "COUNT", "COVER", "CROSS", "DAILY", "DIRTY", "EARLY", "EMPTY", "ENTRY", "EQUAL",
    "EXTRA", "FAIRY", "FALSE", "FIELD", "FINAL", "FIRST", "FLOOR", "FOCUS", "FRESH", "FRONT",
    "FUNNY", "GIANT", "GRAND", "GREAT", "GREEN", "GROUP", "GUARD", "GUIDE", "HELLO", "IMAGE",
    "INDEX", "INPUT", "LARGE", "LEVEL", "LOCAL", "LUCKY", "MARCH", "MATCH", "METAL", "MODEL",
    "MONEY", "MONTH", "NIGHT", "NOISE", "NORTH", "NOVEL", "PARTY", "PILOT", "POINT", "PRICE",
    "PRIDE", "PROUD", "QUICK", "QUIET", "RADIO", "RAISE", "READY", "RIGHT", "ROBOT", "ROUND",
    "ROUTE", "SCENE", "SCORE", "SHAPE", "SHEET", "SHELF", "SHIFT", "SHINE", "SHOCK", "SHORT",
    "SIGHT", "SINCE", "SKILL", "SLIDE", "SMALL", "SMART", "SMOKE", "SOLID", "SOUND", "SOUTH",
    "SPEED", "STAGE", "STAND", "START", "STATE", "STEAM", "STEEL", "STICK", "STILL", "STONE",
    "STYLE", "SUGAR", "SUPER", "TABLE", "TASTE", "TEACH", "THANK", "THEME", "THICK", "THING",
    "TOTAL", "TOUCH", "TOWER", "TRACK", "TRADE", "TRAIN", "TREAT", "TREND", "TRIAL", "TRICK",
    "TRUTH", "UNDER", "UNION", "UNTIL", "UPPER", "VALUE", "VIDEO", "WORLD", "YOUNG", "YOUTH"
];