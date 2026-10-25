const { shell, pageHeader, relatedLinks, bookTip, psychogrammDaten } = window.__kh;

// Single rubrics of Tarentula hispanica (Type 3), from the author's »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
// [branch id, rubric, 1 = main delusion]
const ITEMS = [
  ["koerper", "Evening - amel.", 0],
  ["farben", "Aversion - lights, to", 0],
  ["farben", "Aversion - red, to - red, yellow, green and black", 0],
  ["gefuehl", "Anxiety - constipation, with", 0],
  ["taeuschen", "Pities himself - desire to show that he is sick", 0],
  ["taeuschen", "Pities himself - desire to play sick", 0],
  ["gefuehl", "Bilious disposition - grief, after", 0],
  ["gefuehl", "Bilious disposition - difficulties with others, after", 0],
  ["taeuschen", "Looking - all directions, in - hysteria, to observe the effect of her actions on others, in", 0],
  ["taeuschen", "Looking - looks at others, when feeling unwell", 0],
  ["gefuehl", "Dementia - sadness, with", 0],
  ["unruhe", "Destructiveness - alone, when", 0],
  ["unruhe", "Destructiveness - cunning, with", 0],
  ["unruhe", "Threatening - destroy, threatens to destroy something", 0],
  ["gefuehl", "Discouraged - evening - eating amel.", 0],
  ["musik", "Excitement, excitable - dancing, singing and weeping, with", 0],
  ["koerper", "Eating - amel. - evening", 0],
  ["koerper", "Eating - after - evening - amel.", 0],
  ["farben", "Colors - aversion to - bright colors, to", 0],
  ["farben", "Colors - blue, amel. - blue, green, red, delighted with", 0],
  ["farben", "Colors - dark colors - desire for", 0],
  ["farben", "Colors - red, yellow, green and black, aversion", 0],
  ["gefuehl", "Indolence - gonorrhea, in", 0],
  ["musik", "Cheerful - alternating with - indifference", 0],
  ["musik", "Cheerful - room, in - amel.", 0],
  ["gefuehl", "Fear - exertion - amel.", 0],
  ["gefuehl", "Fear - fever - of fever - typhus, of epidemic", 0],
  ["gefuehl", "Fear - death, of - convalescence, during", 0],
  ["gefuehl", "Memory - forgetful - business, forgets his own", 0],
  ["gefuehl", "Insanity - threatens death and destruction", 0],
  ["gefuehl", "Insanity - love, from disappointed", 0],
  ["gefuehl", "Insanity - restlessness, with - legs, of the", 0],
  ["unruhe", "Gestures, makes - hands, involuntary motions of the - knitting, as if", 0],
  ["gefuehl", "Indifference, apathy - morning - 15 h, until", 0],
  ["unruhe", "Hurry - itching, with - genitals, of the", 0],
  ["gefuehl", "Hypochondriasis - masturbation, after", 0],
  ["taeuschen", "Hysteria - touch and pressure are unbearable", 0],
  ["taeuschen", "Hysteria - chlorosis, with", 0],
  ["taeuschen", "Hysteria - ridiculous", 0],
  ["taeuschen", "Hysteria - morning agg., sighing amel.", 0],
  ["taeuschen", "Hysteria - music amel.", 0],
  ["taeuschen", "Hysteria - moaning agg. and sighing amel.", 0],
  ["unruhe", "Complaining - threatens, complains and", 0],
  ["unruhe", "Kneeling position agg. - difficult", 0],
  ["koerper", "Coition - amel.", 0],
  ["gefuehl", "Grief - afternoon", 0],
  ["gefuehl", "Laughing - company, in", 0],
  ["gefuehl", "Laughing - screams after", 0],
  ["gefuehl", "Laughing - sardonic", 0],
  ["musik", "Lively, cheerful - alternating with - grief", 0],
  ["unruhe", "Mania - destructiveness, rage to destroy, followed by laughing and apologies", 0],
  ["musik", "Music - amel. - rhythmic music", 0],
  ["musik", "Music - amel. - restlessness of the limbs", 0],
  ["koerper", "Nymphomania - chorea, with", 0],
  ["koerper", "Nymphomania - coition agg.", 0],
  ["weiteres", "Anguish - wailing and moaning, with", 0],
  ["unruhe", "Rage, fury - striking, with - himself", 0],
  ["unruhe", "Tears at himself - hair - presses head with hands, and", 0],
  ["unruhe", "Tears things - books, his", 0],
  ["unruhe", "Irritability - coition - amel.", 0],
  ["unruhe", "Rolling about - one side to the other, from - amel.", 0],
  ["unruhe", "Restlessness - must move constantly - walking agg., but", 0],
  ["unruhe", "Restlessness - chorea, in", 0],
  ["unruhe", "Restlessness - night - midnight - after - 5 h", 0],
  ["unruhe", "Restlessness - pain, from - stomach, at night", 0],
  ["unruhe", "Striking - himself - head - hands, strikes himself on the head, against the body and other persons with the", 0],
  ["unruhe", "Striking - unobserved, when", 0],
  ["unruhe", "Screaming - respiration, with difficult", 0],
  ["unruhe", "Screaming - laughing - after", 0],
  ["gefuehl", "Timidity, bashfulness - gonorrhea, in", 0],
  ["musik", "Serenity, calmness - music calms him", 0],
  ["koerper", "Sexual desire, sexual behavior - nymphomania, in women - chorea, with", 0],
  ["koerper", "Sexual desire, sexual behavior - nymphomania, in women - coition agg.", 0],
  ["taeuschen", "Simulating - fainting", 0],
  ["taeuschen", "Simulating - fainting - attacks, in", 0],
  ["musik", "Singing - exhaustion, until", 0],
  ["musik", "Singing - hoarse, until quite - exhausted, and", 0],
  ["musik", "Singing - dancing and weeping, with", 0],
  ["koerper", "Jesting - waking, on", 0],
  ["unruhe", "Mocking - old age, of old people and their", 0],
  ["unruhe", "Speech - threatening", 0],
  ["taeuschen", "Mood, temper - alternating - sudden", 0],
  ["unruhe", "Moaning - contradiction, from", 0],
  ["unruhe", "Quarrelsome - hysterical mania, at beginning of", 0],
  ["gefuehl", "Sadness - evening - eating amel., while", 0],
  ["gefuehl", "Sadness - guilty, as if he were", 0],
  ["gefuehl", "Sadness - sexual excitement - after", 0],
  ["gefuehl", "Forgetful - business, forgets his", 0],
  ["taeuschen", "Hiding - himself - fear, from - attacked, of being", 0],
  ["taeuschen", "Understand, difficult - does not understand questions put to him", 0],
  ["taeuschen", "Malingering - fainting", 0],
  ["wahn", "Delusions - air - cold air, he would come into", 0],
  ["wahn", "Delusions - unseen things, of", 1],
  ["gefuehl", "Weeping - consolation - from consolation", 0],
  ["taeuschen", "Aversion - conscious of his unnatural mind - and mental state", 0],
  ["unruhe", "Pulling - hair, by - presses head, and pulls his hair", 0]
];

const GRUPPEN = [
  { id: "wahn", titel: "Delusions", offen: true, text: "The main delusion of the unseen and the idea of cold air." },
  { id: "taeuschen", titel: "Feigning, malingering and hysteria", text: "Pretending illness, simulating fainting, watching the effect on others." },
  { id: "musik", titel: "Music, dancing and singing", text: "Music that calms or excites, dancing, singing to exhaustion." },
  { id: "farben", titel: "Colors and light", text: "Delight in bright colors, aversion to red, yellow, green and black." },
  { id: "unruhe", titel: "Restlessness, destruction and anger", text: "Constant movement, rage to destroy, striking, tearing, threatening." },
  { id: "gefuehl", titel: "Mood, grief and memory", text: "Sadness, discouragement, forgetting his own business, changes of mood." },
  { id: "koerper", titel: "Eating, evening and sexuality", text: "Amelioration in the evening and while eating, excitement, coition." },
  { id: "weiteres", titel: "Other", text: "Rubrics that fit no branch." },
];

export function tarentulaMindmapPage() {
  const col = "#1fa688";
  const nach = {};
  ITEMS.forEach(i => { (nach[i[0]] = nach[i[0]] || []).push(i); });
  const pfad = r => {
    const t = r.split(" - ");
    const k = t.shift();
    return `<strong>${k}</strong> ` + t.map(x => `<span class="mm-chev">›</span> ${x}`).join(" ");
  };
  const zweige = GRUPPEN.filter(g => (nach[g.id] || []).length).map(g => `
    <details class="mm-branch" style="border-left:3px solid ${col};" ${g.offen ? "open" : ""}>
      <summary style="cursor:pointer;padding:0.7rem 1rem;list-style:none;">
        <span style="font-weight:700;color:var(--ink);">${g.titel}</span>
        <span style="margin-left:0.5rem;background:color-mix(in srgb, ${col} 15%, var(--paper));color:${col};padding:0.1rem 0.55rem;border-radius:999px;font-size:0.78rem;font-weight:700;">${nach[g.id].length}</span>
        <div style="font-size:0.82rem;color:var(--muted);margin-top:0.15rem;">${g.text}</div>
      </summary>
      <ul style="margin:0.2rem 0 0.9rem 1.2rem;padding:0 1rem 0 0;font-size:0.88rem;line-height:1.55;">
        ${nach[g.id].map(i => `<li style="margin:0.25rem 0;${i[2] ? "background:color-mix(in srgb, " + col + " 14%, transparent);border-radius:6px;padding:0.15rem 0.4rem;" : ""}">${pfad(i[1])}</li>`).join("")}
      </ul>
    </details>`).join("");
  return shell(`
    <div class="page-container">
      ${pageHeader("mindmap-tarentula")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← All mind maps of the single rubrics</button>
        <p class="eyebrow">Knowledge · Single rubrics · Type 3</p>
        <h1 class="section-title">Tarentula hispanica: Mind map of the single rubrics</h1>
        <p class="lead-small">Single rubrics are rubrics in which only one remedy is listed. Here are all single rubrics of Tarentula hispanica (Spanish tarantula), the remedy that the Enneagram homeopathy of this Compass assigns to Type 3, ordered by theme.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Type 3 · Tarentula hispanica · Main delusion</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">The unseen: the idea of being surrounded by unseen things</div>
          <div style="font-size:0.85rem;color:var(--muted);margin-top:0.3rem;">Below stands everything that is found for this remedy as a single rubric. The branches can be opened and closed.</div>
        </div>

        <div class="mm-tree" style="display:grid;gap:0.7rem;">${zweige}</div>

        ${(() => {
          const pd = psychogrammDaten(3, "en");
          if (!pd) return "";
          const li = a => a.map(x => `<li>${x}</li>`).join("");
          return `<div style="margin:1.6rem 0 0;padding:1.1rem 1.3rem;border:1px solid var(--line);border-radius:14px;">
            <h2 style="font-size:1.1rem;margin:0 0 0.5rem;">From the psychogram: what lies beneath the surface</h2>
            <p style="font-size:0.9rem;line-height:1.6;margin:0 0 0.8rem;color:var(--muted);">Besides the delusions of the rubrics there are ideas that rarely come to the surface. The psychogram of Type 3 shows the self-image and, beneath it, the shadow parts.</p>
            <p style="font-size:0.95rem;margin:0 0 0.8rem;"><strong>Core sentence:</strong> ${pd.kern}</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(14rem,1fr));gap:1rem;">
              <div><div style="font-weight:700;font-size:0.85rem;margin-bottom:0.3rem;">How the type wants to see itself</div><ul style="margin:0;padding-left:1.1rem;font-size:0.9rem;line-height:1.6;">${li(pd.selbst)}</ul></div>
              <div><div style="font-weight:700;font-size:0.85rem;margin-bottom:0.3rem;color:${col};">What lies beneath (shadow)</div><ul style="margin:0;padding-left:1.1rem;font-size:0.9rem;line-height:1.6;">${li(pd.schatten)}</ul></div>
            </div>
            <p style="margin:0.9rem 0 0;font-size:0.9rem;"><a href="#psychogramme/3">To the full psychogram of Type 3 →</a></p>
          </div>`;
        })()}

        <p class="vb-anmerkung" style="margin-top:1.4rem;font-style:italic;">Important for understanding: The page reproduces rubrics from the author&rsquo;s German book &lsquo;Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich&rsquo; (homeopathic materia medica of the single rubrics of the mind). The English wording follows the usual repertory phrasing; the German edition is the reference. The page makes no diagnosis, gives no treatment recommendation and makes no statement about effect or healing. In emotional crises it does not replace medical or psychotherapeutic help.</p>
      </div>
      ${bookTip("wer-du-wirklich-bist-band-1", "The nine types in their depth – defense patterns, passions, and the path to essence.", "Wer du wirklich bist – Band 1")}
      ${bookTip("die-verborgene-dynamik-der-27-subtypen", "27 subtypes: passions, protective strategies, and paths to healing from therapeutic practice.", "Die verborgene Dynamik der 27 Subtypen")}
      ${bookTip("homoeopathische-arzneimittellehre-der-single-rubriken-aus-de", "8,594 single-rubrics of the 500 most important homeopathic remedies – the standard reference work for the Sehgal method.", "Homöopathische Arzneimittellehre der Single-Rubriken")}
      ${bookTip("der-kern-der-heilmittel-the-core-of-the-remedies-gebunden", "The spiritual essence of the 500 most important homeopathic remedies – over 8,500 single-rubrics.", "Der Kern der Remedies")}
      ${bookTip("rathmer-s-repertorium-gebundene-ausgabe", "The world's most comprehensive homeopathic mind repertory – 1568 pages, 20,000 rubrics.", "Rathmer’s Repertorium")}
      ${bookTip("repertorium-der-hervorstechenden-gemuetsrubriken-gebundene-a", "The most prominent mind rubrics compact and annotated – the practical repertory for daily homeopathic practice.", "Repertorium der hervorstechenden Gemütsrubriken")}
      ${bookTip("enneagramm-homoeopathie-band-1", "The foundation of Enneagram-Homeopathy – how personality type and remedy selection are connected, accessible for lay readers as well.", "Enneagramm-Homöopathie – Band 1")}
      ${bookTip("enneagramm-homoeopathie-band-2", "Deepening and expansion: The 27 Subtypes and their individual homeopathic remedies.", "Enneagramm-Homöopathie – Band 2")}
      ${bookTip("lehrbuch-der-enneagramm-homoeopathie-band-1-taschenbuch", "The textbook on Enneagram-Homeopathy – Volume 1: Foundations, types, and remedies.", "Lehrbuch der Enneagramm-Homöopathie – Band 1")}
      ${bookTip("lehrbuch-der-enneagramm-homoeopathie-band-2-taschenbuch", "Volume 2 of the textbook: In-depth remedy assignments for all 27 Subtypes.", "Lehrbuch der Enneagramm-Homöopathie – Band 2")}
      ${bookTip("lehrbuch-der-enneagramm-homoeopathie-band-3-taschenbuch", "Volume 3 of the textbook: The complete system of Enneagram-Homeopathy in practice.", "Lehrbuch der Enneagramm-Homöopathie – Band 3")}
      ${bookTip("die-enneagramm-homoeopathie-unterrichtsmaterial", "The teaching script on Enneagram-Homeopathy – 376 pages of compact learning material for self-study.", "Enneagramm-Homöopathie – Unterrichtsmaterial (376 Seiten)")}
      ${bookTip("das-unterrichtsskript-zur-sehgal-ausbildung-ebook", "The complete teaching script of the Sehgal School – 500 pages for anyone wishing to learn the Sehgal method in depth.", "Unterrichtsskript zur Sehgal-Ausbildung (500 Seiten)")}
      ${relatedLinks([
        {route:"mindmaps-single-rubriken", label:"All mind maps of the single rubrics"},
        {route:"wahnideen-nicht-reale-vorstellungen", label:"Article: Delusions in the Enneagram and in Homeopathy"},
        {route:"nicht-reale-vorstellungen", label:"Chart: Unreal ideas"},
        {route:"enneagramm-homoeopathie", label:"Enneagram & Homeopathy"},
      ])}
    </div>
  `);
}
