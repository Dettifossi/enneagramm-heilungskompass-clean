// Erklärtexte zu den neun Psychogrammen (Lerncomic): jeder Typ Schritt für Schritt, DE und EN.
// Inhalt entspricht den Lerncomic-Bildern (typ-N-comic.jpg); die Funktion baut daraus den Text unter dem Bild.
const DATA = {
 "1": {
  "de": {
   "hs": "Heilige Vollkommenheit · Reinheit · Richtigkeit",
   "kern": "Mit mir stimmt etwas nicht.",
   "kernz": "Schlechtigkeit, Falschheit, wesentlicher Makel",
   "rea": [
    "Perfektionismus",
    "Groll, Wut und Zorn",
    "Intoleranz",
    "Urteil und Kritik",
    "Moral"
   ],
   "gegen": "Mit der Welt stimmt etwas nicht.",
   "gegenz": "Schlechtigkeit, Falschheit, wesentlicher Makel",
   "imit": "verbessern, kontrollieren, regeln",
   "ziel": "die heilige Vollkommenheit",
   "selbst": [
    "Ich bin gut",
    "Ich bin perfekt",
    "Ich bin gerecht",
    "Ich habe Recht"
   ],
   "kontra": "Ich habe das Recht, meinen Zorn zu zeigen.",
   "schatten": [
    "Ich bin schlecht",
    "Ich bin defekt",
    "Ich genüge nicht",
    "Ich bin fehlerhaft",
    "Ich bin unvollkommen",
    "Ich bin im Unrecht",
    "Ich bin unwichtig"
   ]
  },
  "en": {
   "hs": "Holy Perfection · Purity · Rightness",
   "kern": "Something is wrong with me.",
   "kernz": "badness, falseness, an essential flaw",
   "rea": [
    "perfectionism",
    "resentment, rage and anger",
    "intolerance",
    "judgment and criticism",
    "morality"
   ],
   "gegen": "Something is wrong with the world.",
   "gegenz": "badness, falseness, an essential flaw",
   "imit": "improving, controlling, regulating",
   "ziel": "holy perfection",
   "selbst": [
    "I am good",
    "I am perfect",
    "I am just",
    "I am right"
   ],
   "kontra": "I have the right to show my anger.",
   "schatten": [
    "I am bad",
    "I am defective",
    "I am not enough",
    "I am flawed",
    "I am imperfect",
    "I am in the wrong",
    "I am unimportant"
   ]
  }
 },
 "2": {
  "de": {
   "hs": "Heiliger Wille · Liebe zum Einssein",
   "kern": "Ich bin nicht liebenswert.",
   "kernz": "Bedeutungslosigkeit",
   "rea": [
    "Eigener Wille",
    "Stolz",
    "Manipulation",
    "Emotion und Drama",
    "Hochmut"
   ],
   "gegen": "Ich brauche die Liebe und Anerkennung anderer.",
   "gegenz": "persönliche Bedeutung schaffen",
   "imit": "schmeicheln, manipulieren, verführen, dienen",
   "ziel": "das Einssein",
   "selbst": [
    "Ich bin liebevoll",
    "Ich bin freundlich",
    "Ich bin großzügig",
    "Ich bin mitfühlend",
    "Ich bin sehr sensibel",
    "Ich bin verständnisvoll",
    "Ich bin selbstlos"
   ],
   "kontra": "Meine Hilfsbereitschaft hat Grenzen.",
   "schatten": [
    "Ich bin bedeutungslos",
    "Ich bin unwichtig",
    "Ich habe keinen Platz",
    "Ich habe keine eigene Bedeutung im Leben",
    "Ich bin vom Universum ausgestoßen",
    "Ich treibe richtungslos"
   ]
  },
  "en": {
   "hs": "Holy Will · Love of Oneness",
   "kern": "I am not lovable.",
   "kernz": "meaninglessness",
   "rea": [
    "own will",
    "pride",
    "manipulation",
    "emotion and drama",
    "arrogance"
   ],
   "gegen": "I need the love and recognition of others.",
   "gegenz": "creating personal significance",
   "imit": "flattering, manipulating, seducing, serving",
   "ziel": "oneness",
   "selbst": [
    "I am loving",
    "I am friendly",
    "I am generous",
    "I am compassionate",
    "I am very sensitive",
    "I am understanding",
    "I am selfless"
   ],
   "kontra": "My helpfulness has limits.",
   "schatten": [
    "I am meaningless",
    "I am unimportant",
    "I have no place",
    "I have no meaning of my own in life",
    "I am cast out by the universe",
    "I drift without direction"
   ]
  }
 },
 "3": {
  "de": {
   "hs": "Heiliges Gesetz · Heilige Hoffnung · Echtheit · Wahrhaftigkeit",
   "kern": "Ich bin leer und substanzlos.",
   "kernz": "Wertlosigkeit, keinen echten Wert besitzen",
   "rea": [
    "Leistung und Erfolg",
    "Eitelkeit",
    "Image und Rolle",
    "Tun und Aktivität",
    "Lüge und Verstellung"
   ],
   "gegen": "Andere können mich nur für meine Leistung anerkennen.",
   "gegenz": "Werte schaffen, echte Werte besitzen",
   "imit": "aktives Tun, lügen, sich verstellen und nach außen wenden",
   "ziel": "die Echtheit",
   "selbst": [
    "Ich bin erfolgreich",
    "Ich bin clever",
    "Ich bin warmherzig",
    "Ich bin aktiv, ein Macher",
    "Ich kann und werde alles erreichen",
    "Ich bin leistungsstark",
    "Ich bin effektiv und effizient"
   ],
   "kontra": "Ich bin nicht eitel.",
   "schatten": [
    "Ich bin ein Blender",
    "Ich bin seicht und oberflächlich",
    "Ich habe versagt",
    "Ich bin leer und substanzlos",
    "Ich bin mit nichts und niemandem verbunden",
    "Ich bin nichts wert"
   ]
  },
  "en": {
   "hs": "Holy Law · Holy Hope · Authenticity · Truthfulness",
   "kern": "I am empty and without substance.",
   "kernz": "worthlessness, having no real value",
   "rea": [
    "achievement and success",
    "vanity",
    "image and role",
    "doing and activity",
    "lying and pretence"
   ],
   "gegen": "Others can only recognise me for my achievement.",
   "gegenz": "creating values, owning real values",
   "imit": "active doing, lying, pretending and turning outward",
   "ziel": "authenticity",
   "selbst": [
    "I am successful",
    "I am clever",
    "I am warm-hearted",
    "I am active, a doer",
    "I can and will achieve everything",
    "I am high-performing",
    "I am effective and efficient"
   ],
   "kontra": "I am not vain.",
   "schatten": [
    "I am a show-off",
    "I am shallow and superficial",
    "I have failed",
    "I am empty and without substance",
    "I am connected to nothing and no one",
    "I am worth nothing"
   ]
  }
 },
 "4": {
  "de": {
   "hs": "Heiliger Ursprung · Quelle sein · individueller Ausdruck des Seins",
   "kern": "Ich bin verlassen worden.",
   "kernz": "Gefühl des Abgetrenntseins von allem, Wunde, Verlust, wesentlicher Makel oder Mangel",
   "rea": [
    "Melancholie und Depression",
    "Neid und Missgunst",
    "Sehnsucht und Nostalgie",
    "Anspruchsdenken",
    "Dramatik in Beziehungen"
   ],
   "gegen": "Ich bin vom Verlust gezeichnet und deshalb einzigartig.",
   "gegenz": "das Gefühl des Abgetrenntseins, die Wunde, den Verlust, den wesentlichen Makel oder Mangel umkehren",
   "imit": "etwas Besonderes sein, Ansprüche stellen, sich sehnen",
   "ziel": "den individuellen Ausdruck des Seins",
   "selbst": [
    "Ich bin besonders und einzigartig",
    "Ich bin besser als andere",
    "Ich fühle tiefer als andere",
    "Ich bin kreativ",
    "Ich habe Klasse und Stil",
    "Ich bin authentisch"
   ],
   "kontra": "Ich bin nicht neidisch.",
   "schatten": [
    "Ich bin verlassen, verstoßen worden, einsam",
    "Es gibt keine Hoffnung für mich",
    "Ich bin abgeschnitten vom Leben und vom Sein",
    "Ich werde es nie schaffen oder erreichen",
    "Ich werde nie wieder verbunden sein",
    "Ich tauge als Mensch nichts"
   ]
  },
  "en": {
   "hs": "Holy Origin · Being the Source · Individual Expression of Being",
   "kern": "I have been abandoned.",
   "kernz": "feeling of being separated from everything, wound, loss, an essential flaw or lack",
   "rea": [
    "melancholy and depression",
    "envy and resentment",
    "longing and nostalgia",
    "entitlement",
    "drama in relationships"
   ],
   "gegen": "I am marked by loss and therefore unique.",
   "gegenz": "turning the feeling of separation, the wound, the loss, the essential flaw or lack around",
   "imit": "being something special, making demands, longing",
   "ziel": "the individual expression of Being",
   "selbst": [
    "I am special and unique",
    "I am better than others",
    "I feel more deeply than others",
    "I am creative",
    "I have class and style",
    "I am authentic"
   ],
   "kontra": "I am not envious.",
   "schatten": [
    "I have been abandoned, cast out, am lonely",
    "There is no hope for me",
    "I am cut off from life and from Being",
    "I will never make it or achieve it",
    "I will never be connected again",
    "I am no good as a human being"
   ]
  }
 },
 "5": {
  "de": {
   "hs": "Heiliges Allwissen · Heilige Transparenz · Klarheit · Verbundenheit",
   "kern": "Ich bin innerlich leer.",
   "kernz": "Gefühl von Isolation, Mangel, Resignation",
   "rea": [
    "Wissen und Rückzug",
    "Geiz und Habgier",
    "Beobachtung",
    "Distanz",
    "Überlegenheit"
   ],
   "gegen": "Ich weiß und verstehe alles und stehe über den Dingen.",
   "gegenz": "das Gefühl von Isolation und Resignation umkehren",
   "imit": "beobachten, lernen, analysieren, distanzieren, verstecken",
   "ziel": "das heilige Allwissen",
   "selbst": [
    "Ich weiß und verstehe die Welt",
    "Ich bin vielen Menschen mental überlegen",
    "Ich bin sachlich, nüchtern und objektiv",
    "Ich bin schlau",
    "Ich bin weise"
   ],
   "kontra": "Ich bin nicht geizig.",
   "schatten": [
    "Ich bin abgeschnitten vom Leben",
    "Ich gehöre nicht dazu",
    "Ich bin von allem getrennt",
    "Es wird nie etwas von außen kommen",
    "Es hat sowieso keinen Sinn",
    "Ich bin völlig allein",
    "Ich bin dem Leben nicht gewachsen"
   ]
  },
  "en": {
   "hs": "Holy Omniscience · Holy Transparency · Clarity · Connectedness",
   "kern": "I am empty inside.",
   "kernz": "feeling of isolation, lack, resignation",
   "rea": [
    "knowledge and withdrawal",
    "stinginess and greed",
    "observation",
    "distance",
    "superiority"
   ],
   "gegen": "I know and understand everything and stand above things.",
   "gegenz": "turning the feeling of isolation and resignation around",
   "imit": "observing, learning, analysing, distancing, hiding",
   "ziel": "holy omniscience",
   "selbst": [
    "I know and understand the world",
    "I am mentally superior to many people",
    "I am matter-of-fact, sober and objective",
    "I am smart",
    "I am wise"
   ],
   "kontra": "I am not stingy.",
   "schatten": [
    "I am cut off from life",
    "I do not belong",
    "I am separate from everything",
    "Nothing will ever come from outside",
    "There is no point anyway",
    "I am completely alone",
    "I am not up to life"
   ]
  }
 },
 "6": {
  "de": {
   "hs": "Heiliger Glaube · Heilige Kraft · Vertrauen · Sicherheit",
   "kern": "Ich bin schwach und unfähig.",
   "kernz": "Die Welt ist bedrohlich und feindlich",
   "rea": [
    "Angst und Furcht",
    "Zweifel",
    "Selbstbehinderung",
    "Autorität",
    "Loyalität und Pflicht"
   ],
   "gegen": "Ich bin loyal und diene einer größeren Sache, ich bin stark.",
   "gegenz": "die Welt freundlich und sicher machen",
   "imit": "sich unterwerfen, Pflicht erfüllen, loyal sein",
   "ziel": "den heiligen Glauben",
   "selbst": [
    "Ich bin loyal",
    "Ich bin pflichtbewusst",
    "Ich glaube an eine größere Sache"
   ],
   "kontra": "Ich bin stark und mächtig, ich habe keine Angst.",
   "schatten": [
    "Ich bin schwach",
    "Ich bin unfähig",
    "Ich bin feige und ängstlich",
    "Ich bin kraftlos",
    "Ich bin nicht überlebensfähig",
    "Ich kann mir selbst nicht vertrauen",
    "Ich bin aggressiv und feindselig"
   ]
  },
  "en": {
   "hs": "Holy Faith · Holy Strength · Trust · Security",
   "kern": "I am weak and incapable.",
   "kernz": "the world is threatening and hostile",
   "rea": [
    "anxiety and fear",
    "doubt",
    "self-obstruction",
    "authority",
    "loyalty and duty"
   ],
   "gegen": "I am loyal and serve a greater cause, I am strong.",
   "gegenz": "making the world friendly and safe",
   "imit": "submitting, fulfilling duty, being loyal",
   "ziel": "holy faith",
   "selbst": [
    "I am loyal",
    "I am dutiful",
    "I believe in a greater cause"
   ],
   "kontra": "I am strong and powerful, I have no fear.",
   "schatten": [
    "I am weak",
    "I am incapable",
    "I am cowardly and fearful",
    "I am powerless",
    "I am not able to survive",
    "I cannot trust myself",
    "I am aggressive and hostile"
   ]
  }
 },
 "7": {
  "de": {
   "hs": "Heiliger Plan · Heilige Arbeit · Freude · Entfaltung",
   "kern": "Ich bin für immer vom Fluss des Lebens abgeschnitten.",
   "kernz": "Meine Lebensquelle ist versiegt",
   "rea": [
    "Planen",
    "Unersättlichkeit und Völlerei",
    "Optimismus",
    "Aktivität",
    "Flucht"
   ],
   "gegen": "Ich plane, bin positiv und idealistisch.",
   "gegenz": "den Zugang zur Lebensquelle wieder öffnen",
   "imit": "planen, sich ablenken, rationalisieren",
   "ziel": "den heiligen Plan",
   "selbst": [
    "Ich bin okay",
    "Ich bin glücklich",
    "Ich bin ein Sonnenschein für andere",
    "Ich bin positiv",
    "Ich bin idealistisch"
   ],
   "kontra": "Ich möchte, dass andere glücklich sind.",
   "schatten": [
    "Ich bin ein Blender",
    "Ich bin abgeschnitten vom Leben",
    "Die Welt ist ein bedrohlicher Ort",
    "Ich habe keinen Platz mehr im Ganzen",
    "Ich bin leer, hohl, verloren",
    "Ich bin für immer von der Quelle abgeschnitten"
   ]
  },
  "en": {
   "hs": "Holy Plan · Holy Work · Joy · Unfolding",
   "kern": "I am cut off from the flow of life for ever.",
   "kernz": "my source of life has dried up",
   "rea": [
    "planning",
    "insatiability and gluttony",
    "optimism",
    "activity",
    "escape"
   ],
   "gegen": "I plan, I am positive and idealistic.",
   "gegenz": "reopening access to the source of life",
   "imit": "planning, distracting oneself, rationalising",
   "ziel": "the holy plan",
   "selbst": [
    "I am okay",
    "I am happy",
    "I am a ray of sunshine for others",
    "I am positive",
    "I am idealistic"
   ],
   "kontra": "I want others to be happy.",
   "schatten": [
    "I am a show-off",
    "I am cut off from life",
    "The world is a threatening place",
    "I no longer have a place in the whole",
    "I am empty, hollow, lost",
    "I am cut off from the source for ever"
   ]
  }
 },
 "8": {
  "de": {
   "hs": "Heilige Wahrheit und Stärke · Heilige Idee Sein",
   "kern": "Ich bin schwach und schlecht.",
   "kernz": "Ich werde ständig angegriffen und muss kämpfen, um zu überleben",
   "rea": [
    "Gerechtigkeit und Rache",
    "Wollust",
    "Härte und Schutz",
    "(Selbst-)Bestrafung",
    "Verleugnung"
   ],
   "gegen": "Das Leben hat mich ungerecht behandelt.",
   "gegenz": "sich gegen die Ungerechtigkeiten zur Wehr setzen",
   "imit": "sich einsetzen, kämpfen, kontrollieren, sich rächen",
   "ziel": "echte Stärke und Wahrheit",
   "selbst": [
    "Ich bin stark und mächtig",
    "Ich bin gerecht",
    "Ich beschütze mich und andere",
    "Ich kämpfe gegen Ungerechtigkeiten",
    "Ich bin selbstbewusst, zäh und kompetent"
   ],
   "kontra": "Einer für alle, alle für einen.",
   "schatten": [
    "Ich bin schwach und schlecht",
    "Ich bin schuldig",
    "Ich bin gefühllos",
    "Ich habe keine Seele",
    "Mit mir stimmt etwas nicht",
    "Die Welt ist feindlich und böswillig"
   ]
  },
  "en": {
   "hs": "Holy Truth and Strength · Holy Idea Being",
   "kern": "I am weak and bad.",
   "kernz": "I am constantly attacked and must fight to survive",
   "rea": [
    "justice and revenge",
    "lust",
    "hardness and protection",
    "(self-)punishment",
    "denial"
   ],
   "gegen": "Life has treated me unjustly.",
   "gegenz": "defending oneself against injustice",
   "imit": "standing up, fighting, controlling, taking revenge",
   "ziel": "real strength and truth",
   "selbst": [
    "I am strong and powerful",
    "I am just",
    "I protect myself and others",
    "I fight against injustice",
    "I am self-confident, tough and competent"
   ],
   "kontra": "One for all, all for one.",
   "schatten": [
    "I am weak and bad",
    "I am guilty",
    "I am unfeeling",
    "I have no soul",
    "Something is wrong with me",
    "The world is hostile and malevolent"
   ]
  }
 },
 "9": {
  "de": {
   "hs": "Heilige Liebe und Harmonie · Würde · Energie · Akzeptanz",
   "kern": "Ich bin unwichtig.",
   "kernz": "nicht wichtig und nicht liebenswert",
   "rea": [
    "Angst und Konfliktvermeidung",
    "Trägheit und Anpassung",
    "Vergessen und Einschlafen",
    "Resignation und Lähmung",
    "Rücksichtnahme, Liebe und Harmonie"
   ],
   "gegen": "Andere sind wichtiger und liebenswerter als ich.",
   "gegenz": "friedlich bleiben, nicht anecken",
   "imit": "freundlich sein, sich zurücknehmen, anpassen",
   "ziel": "die heilige Liebe",
   "selbst": [
    "Ich bin friedfertig und zufrieden",
    "Ich bin freundlich und umgänglich",
    "Ich bin liebevoll und sanftmütig",
    "Ich bin ruhig"
   ],
   "kontra": "Ich bin nicht träge.",
   "schatten": [
    "Ich verdiene Liebe nicht",
    "Ich bin minderwertig und unbedeutend",
    "Ich bin unzulänglich",
    "Ich bin aggressiv",
    "Mir fehlt etwas Wichtiges"
   ]
  },
  "en": {
   "hs": "Holy Love and Harmony · Dignity · Energy · Acceptance",
   "kern": "I am unimportant.",
   "kernz": "not important and not lovable",
   "rea": [
    "fear and conflict avoidance",
    "inertia and adaptation",
    "forgetting and falling asleep",
    "resignation and paralysis",
    "consideration, love and harmony"
   ],
   "gegen": "Others are more important and more lovable than I am.",
   "gegenz": "staying peaceful, not causing offence",
   "imit": "being friendly, holding back, adapting",
   "ziel": "holy love",
   "selbst": [
    "I am peaceable and content",
    "I am friendly and easy to get along with",
    "I am loving and gentle",
    "I am calm"
   ],
   "kontra": "I am not sluggish.",
   "schatten": [
    "I do not deserve love",
    "I am inferior and insignificant",
    "I am inadequate",
    "I am aggressive",
    "I am missing something important"
   ]
  }
 }
};

const list = (arr, and) => arr.length <= 1 ? (arr[0] || "") : arr.slice(0, -1).join(", ") + " " + and + " " + arr[arr.length - 1];
const quote = (s, lang) => (lang === "en" ? "\u201c" + s + "\u201d" : "\u201e" + s + "\u201c");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

export function psychogrammErklaerung(typ, lang) {
  const e = DATA[typ] && DATA[typ][lang === "en" ? "en" : "de"];
  if (!e) return "";
  const en = lang === "en";
  const h = (t) => `<h3 style="font-size:1rem;font-weight:700;margin:1.2rem 0 .4rem;color:var(--ink);">${t}</h3>`;
  const p = (t) => `<p style="font-size:.95rem;line-height:1.7;margin:0 0 .6rem;color:var(--ink);">${t}</p>`;
  const ul = (arr) => `<ul style="font-size:.95rem;line-height:1.7;margin:0 0 .6rem;padding-left:1.2rem;">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
  if (en) {
    return `<div class="psycho-explain" style="max-width:620px;margin:1.6rem auto 0;">
      <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Psychogram Type ${typ} explained</h2>
      <p style="font-size:.8rem;color:var(--muted);margin:0 0 .6rem;">The diagram is in German; this text explains it step by step.</p>
      ${h("The Higher Self")}${p("At the top stands the Higher Self of this type: <strong>" + esc(e.hs) + "</strong>. It is the original quality from which the type comes.")}
      ${h("The loss and the feeling of deficiency")}${p("This quality is lost through two experiences that stand at the start of every psychogram: not being held, and loss of contact with Being. From them arises the underlying feeling of deficiency, and from it the core sentence of the type: " + quote(e.kern, "en") + " (" + esc(e.kernz) + ").")}
      ${h("Five typical reactions")}${p("From the core sentence follow five typical reactions: " + esc(list(e.rea, "and")) + ".")}
      ${h("The counter-strategy")}${p("As a counter-strategy the conviction arises: " + quote(e.gegen, "en") + " (" + esc(e.gegenz) + "). It shapes the behaviour: " + esc(e.imit) + " is an attempt to imitate " + esc(e.ziel) + ".")}
      ${h("The fictitious self-image")}${p("This is how the type wants to see itself and show itself:")}${ul(e.selbst)}${p("The <strong>counter-type</strong> adds: " + quote(e.kontra, "en"))}
      ${h("The fictitious shadow")}${p("This is what the type does not want to see in itself but secretly fears:")}${ul(e.schatten)}
      ${h("The path to integration")}${p("Both self-image and shadow are fictitious. The lower boxes of the psychogram show the way: recognise your self-image and recognise your shadow, and meet both with loving acceptance.")}
    </div>`;
  }
  return `<div class="psycho-explain" style="max-width:620px;margin:1.6rem auto 0;">
      <h2 style="font-size:1.15rem;font-weight:700;margin:0 0 .6rem;color:var(--ink);">Psychogramm Typ ${typ} im Einzelnen</h2>
      ${h("Das Höhere Selbst")}${p("Am Anfang steht das Höhere Selbst dieses Typs: <strong>" + esc(e.hs) + "</strong>. Es ist die ursprüngliche Qualität, aus der der Typ stammt.")}
      ${h("Der Verlust und das Mangelgefühl")}${p("Diese Qualität geht durch zwei Erfahrungen verloren, die in jedem Psychogramm am Anfang stehen: nicht gehalten werden und Kontaktverlust zum Sein. Daraus entsteht das untergründige Mangelgefühl, und aus ihm der Kernsatz des Typs: " + quote(e.kern, "de") + " (" + esc(e.kernz) + ").")}
      ${h("Fünf typische Reaktionen")}${p("Aus dem Kernsatz folgen fünf typische Reaktionen: " + esc(list(e.rea, "und")) + ".")}
      ${h("Die Gegenstrategie")}${p("Als Gegenstrategie entsteht die Überzeugung: " + quote(e.gegen, "de") + " (" + esc(e.gegenz) + "). Sie bestimmt das Verhalten: " + esc(e.imit) + " ist der Versuch, " + esc(e.ziel) + " zu imitieren.")}
      ${h("Das fiktive Selbstbild")}${p("So möchte der Typ sich sehen und zeigen:")}${ul(e.selbst)}${p("Der <strong>Kontratyp</strong> ergänzt: " + quote(e.kontra, "de"))}
      ${h("Der fiktive Schatten")}${p("Das ist es, was der Typ an sich nicht sehen will, aber insgeheim fürchtet:")}${ul(e.schatten)}
      ${h("Der Weg der Integration")}${p("Selbstbild und Schatten sind beide fiktiv. Die unteren Kästchen des Psychogramms zeigen den Weg: das eigene Selbstbild erkennen, den eigenen Schatten erkennen und beiden mit liebevoller Akzeptanz begegnen.")}
    </div>`;
}
