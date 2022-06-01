export enum Kar {
    a = "a",
    i = "i",
    ii = "ii",
    u = "u",
    uu = "uu",
    e = "e",
    oi = "oi",
    oo = "oo",
    ou = "ou",
    rri = "rri",
    nn = "nn",
    ng = "ng",
    ":" = ":",
    rro = "rro",
    yy = "yy",
    o = "o",
}

export enum Vowel {
    O = "O",
    A = "A",
    I = "I",
    II = "II",
    U = "U",
    UU = "UU",
    RRI = "RRI",
    E = "E",
    OI = "OI",
    OO = "OO",
    OU = "OU",
}

export enum Consonant {
    k = "k",
    kh = "kh",
    g = "g",
    gh = "gh",
    uo = "uo",
    c = "c",
    ch = "ch",
    j = "j",
    jh = "jh",
    eo = "eo",
    T = "T",
    Th = "Th",
    D = "D",
    Dh = "Dh",
    N = "N",
    t = "t",
    th = "th",
    d = "d",
    dh = "dh",
    n = "n",
    p = "p",
    ph = "ph",
    f = "f",
    b = "b",
    bh = "bh",
    v = "v",
    m = "m",
    z = "z",
    r = "r",
    l = "l",
    sh = "sh",
    SH = "SH",
    s = "s",
    h = "h",
    TH = "TH",
    R = "R",
    Rh = "Rh",
    y = "y",
}

export enum Conjunction {
    kSH = "kSH",
    hm = "hm",
}

export interface RuleSet {
    kar: { [key: string]: string };
    helpers: { [key: string]: string };
    vowels: { [key: string]: string };
    consonants: { [key: string]: string };
    connector: string;
    conjunctions: { [key: string]: string };
    numbers: { [key: string]: string };
    specialSymbols: { [key: string]: string };
}
