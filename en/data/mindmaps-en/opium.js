const { shell, pageHeader, relatedLinks, bookTip, psychogrammDaten } = window.__kh;

// Single rubrics of Opium (Type 6), from the author's »Homöopathische Arzneimittellehre der Single-Rubriken aus dem Geist-/Gemütsbereich«
// [branch id, rubric, 1 = main delusion]
const ITEMS = [
  ["geist", "Activity - desire for - sweat, during", 0],
  ["angst", "Anxiety - fright - remains, anxiety if the fear remains after a fright", 0],
  ["angst", "Anxiety - pregnancy, during - abortion in second half, fear of", 0],
  ["stimmung", "Biting - arm (arms), bites his", 0],
  ["delirium", "Unconsciousness - Cheyne-Stokes respiration, with", 0],
  ["delirium", "Unconsciousness - menses - suppression of - fright, from", 0],
  ["delirium", "Delirium - blames himself for his folly", 0],
  ["delirium", "Delirium - cold, after catching", 0],
  ["delirium", "Delirium - ghosts, sees", 0],
  ["delirium", "Delirium - cold - catching cold, after", 0],
  ["delirium", "Delirium - blames himself, for his folly, foolishness", 0],
  ["delirium", "Delirium - devils, sees", 0],
  ["delirium", "Delirium tremens - old, emaciated persons, in", 0],
  ["delirium", "Delirium tremens - small quantities of alcoholic drinks, from", 0],
  ["delirium", "Delirium tremens - senses dulled, stupor with snoring", 0],
  ["delirium", "Delirium tremens - stupor with snoring", 0],
  ["delirium", "Delirium tremens - repeated attacks, a small quantity of alcohol throws her into delirium", 0],
  ["delirium", "Delirium - cold, after catching", 0],
  ["stimmung", "Jealousy - people around him, of", 0],
  ["stimmung", "Discouraged - morose, and", 0],
  ["stimmung", "Indignation - discomfort, from general", 0],
  ["angst", "Frightened, easily - closing the eyes, on", 0],
  ["geist", "Eccentricity - night (all night)", 0],
  ["stimmung", "Cursing - afternoon", 0],
  ["stimmung", "Cheerful, gay - mental derangement, in", 0],
  ["angst", "Fear - alternating with - courage", 0],
  ["angst", "Fear - amenorrhea from fright", 0],
  ["angst", "Fear - extravagance, of", 0],
  ["angst", "Fear - night - bowels, from cramps in", 0],
  ["angst", "Fear - sudden - followed by - diabetes mellitus", 0],
  ["angst", "Fear - sleeplessness, of", 0],
  ["angst", "Fear - urine - retention of urine from fright", 0],
  ["angst", "Fear - squandering, of", 0],
  ["geist", "Memory - active, good - fever, during", 0],
  ["geist", "Memory - weakness of - connected thoughts, for", 0],
  ["geist", "Thoughts - deliberate, thoughtful - night, all", 0],
  ["geist", "Thoughts - clearness of - fever, during", 0],
  ["geist", "Thoughtful - night, all", 0],
  ["delirium", "Insanity - alternating with - stupor", 0],
  ["sprechen", "Face - hot face, with", 0],
  ["sprechen", "Gestures, makes - grasping, reaching for something - picking at bedclothes - dream, in", 0],
  ["sprechen", "Gestures, makes - queer", 0],
  ["sprechen", "Indifference, apathy - finer feelings, to", 0],
  ["sprechen", "Violent, vehement - sleep - before", 0],
  ["stimmung", "Cheerful, gay - alternating with - anxiety", 0],
  ["stimmung", "Cheerful, gay - alternating with - grief", 0],
  ["stimmung", "Cheerful, gay - sweat, during", 0],
  ["stimmung", "Cheerful, gay - alternating with - cares", 0],
  ["delirium", "Coma - eyes - glassy eyes, with", 0],
  ["delirium", "Coma - acidosis, with respiratory", 0],
  ["delirium", "Coma - stupor, with preceding", 0],
  ["stimmung", "Grief - insults, over", 0],
  ["stimmung", "Grief - meningitis, causing cerebrospinal", 0],
  ["stimmung", "Merry, gay - alternating with - anger", 0],
  ["stimmung", "Mania - indecent behavior, with", 0],
  ["geist", "Meditating - night", 0],
  ["sprechen", "Muttering - convulsions in childbed, in", 0],
  ["stimmung", "Morose - dreams, from", 0],
  ["stimmung", "Morose - dreaming, when", 0],
  ["geist", "Plans - makes many plans - gigantic plans", 0],
  ["stimmung", "Buffoonery, plays tricks - alternating with - sadness", 0],
  ["stimmung", "Buffoonery, clowning - raving, haughty, followed by angry wildness or tearful lamenting", 0],
  ["angst", "Anguish - injury, shock of, in", 0],
  ["stimmung", "Rage, fury - drunk, as if - typhus, in", 0],
  ["stimmung", "Rage, fury - pneumonia, after", 0],
  ["stimmung", "Tears things - everything that comes into her fingers", 0],
  ["sprechen", "Restlessness - bed - heat of bed, from", 0],
  ["angst", "Fright, ailments from - anxiety, after fright - impression of the fright remains", 0],
  ["angst", "Fright, ailments from - impression of the fright remains", 0],
  ["angst", "Timidity, bashfulness - business, when conducting", 0],
  ["sprechen", "Singing - monotonous", 0],
  ["geist", "Cares, full of - alternating with - cheerfulness", 0],
  ["geist", "Cares, full of - sleepiness, with", 0],
  ["sprechen", "Speech - delirious - eyes wide open, with", 0],
  ["sprechen", "Speech - short and concise", 0],
  ["sprechen", "Speech - incoherent - slumber, after", 0],
  ["sprechen", "Speech - confused - mental disorder, in", 0],
  ["stimmung", "Quarrelsome - sleep - before", 0],
  ["delirium", "Stupor - hearing in stupor, hypersensitive", 0],
  ["delirium", "Stupor - menses - suppressed menses, in from fright", 0],
  ["geist", "Death - despises death", 0],
  ["stimmung", "Sadness - alternating with - buffoonery", 0],
  ["delirium", "Heedless, careless - mental derangement, in", 0],
  ["geist", "Forgetful - sequence of consecutive thoughts, forgets the", 0],
  ["geist", "Forgetful - sequence of consecutive thoughts, forgets the - apoplexy, after", 0],
  ["angst", "Hiding - himself - old people, in", 0],
  ["angst", "Despair - masturbation, in", 0],
  ["wahn2", "Delusions - drunk - is drunk, he - smoke in brain, from", 0],
  ["wahn", "Delusions - bed - surrounded by devils, bed is", 0],
  ["wahn2", "Delusions - bed - warm bed - hot, sensation as if bed were", 0],
  ["wahn2", "Delusions - double - being, double - will conquer, there is another self and he is not sure which of the two is the other", 0],
  ["wahn", "Delusions - dragons, of", 0],
  ["wahn", "Delusions - stabbed - someone threatening to stab him, as if", 0],
  ["wahn2", "Delusions - brain - smoke on the brain", 0],
  ["wahn2", "Delusions - home, at - away from home, he is - abortion, in threatened", 0],
  ["wahn2", "Delusions - life - three hours' distance from his house", 0],
  ["wahn", "Delusions - murderer, everyone around him is a - to be executed, means to calm down", 1],
  ["wahn2", "Delusions - sliding - forced by an invisible power to slide along the floor, he would be", 0],
  ["wahn2", "Delusions - sleep - short sleep, after", 0],
  ["wahn", "Delusions - scorpions, sees", 0],
  ["wahn2", "Delusions - talking - she talks - to herself, she talks with", 0],
  ["wahn", "Delusions - devil - sees - bed, sees devil at his", 0],
  ["wahn", "Delusions - wrong - done wrong, has - punished, and would be at once", 1],
  ["wahn", "Delusions - criminal, he is a - executed, is to be", 1],
  ["wahn", "Delusions - visions, has - coma vigil, in", 0],
  ["wahn", "Delusions - visions, has - joy, visions of - night, fill his brain all", 0],
  ["stimmung", "Weeping - cold, after catching", 0],
  ["stimmung", "Anger - alternating with - buffoonery, clowning", 0],
  ["stimmung", "Anger - seizes the hands of bystanders", 0],
  ["stimmung", "Contented - night", 0],
  ["stimmung", "Contented - quiet, and", 0]
];

const GRUPPEN = [
  { id: "wahn", titel: "Delusions: persecution, guilt and devils", offen: true, text: "The main delusion of persecution and punishment, plus devils, dragons and scorpions." },
  { id: "wahn2", titel: "Delusions: body, home and self", text: "Double self, smoke in the brain, far from home, sliding and heat." },
  { id: "angst", titel: "Fear, anxiety and fright", text: "Fright that remains, fear of sleeplessness and of squandering." },
  { id: "delirium", titel: "Delirium, coma and stupor", text: "Delirium, delirium tremens, unconsciousness, coma and stupor." },
  { id: "stimmung", titel: "Mood: cheerfulness, buffoonery and anger", text: "The alternation of cheerfulness, buffoonery, sadness and anger." },
  { id: "geist", titel: "Thinking, memory and plans", text: "Clear memory in fever, brooding at night, gigantic plans, forgetting." },
  { id: "sprechen", titel: "Speech, gestures and behavior", text: "Short, confused speech, singing, picking at the bedclothes, restlessness." },
];

export function opiumMindmapPage() {
  const col = "#8a5222";
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
      ${pageHeader("mindmap-opium")}
      <div class="page-content">
        <button class="ghost-link" data-route="mindmaps-single-rubriken" style="margin-bottom:1.2rem;">← All mind maps of the single rubrics</button>
        <p class="eyebrow">Knowledge · Single rubrics · Type 6</p>
        <h1 class="section-title">Opium: Mind map of the single rubrics</h1>
        <p class="lead-small">Single rubrics are rubrics in which only one remedy is listed. Here are all single rubrics of Opium (opium poppy), the remedy that the Enneagram homeopathy of this Compass assigns to Type 6, ordered by theme.</p>

        <div style="margin:1.4rem 0;padding:1.1rem 1.3rem;border:2px solid ${col};border-radius:14px;background:color-mix(in srgb, ${col} 8%, var(--paper));text-align:center;">
          <div style="font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);">Type 6 · Opium · Main delusion</div>
          <div style="font-size:1.15rem;font-weight:700;color:var(--ink);margin-top:0.3rem;">Persecution: everyone around him is a murderer, he is a criminal or will be punished for a wrong</div>
          <div style="font-size:0.85rem;color:var(--muted);margin-top:0.3rem;">Below stands everything that is found for this remedy as a single rubric. The branches can be opened and closed.</div>
        </div>

        <div class="mm-tree" style="display:grid;gap:0.7rem;">${zweige}</div>

        ${(() => {
          const pd = psychogrammDaten(6, "en");
          if (!pd) return "";
          const li = a => a.map(x => `<li>${x}</li>`).join("");
          return `<div style="margin:1.6rem 0 0;padding:1.1rem 1.3rem;border:1px solid var(--line);border-radius:14px;">
            <h2 style="font-size:1.1rem;margin:0 0 0.5rem;">From the psychogram: what lies beneath the surface</h2>
            <p style="font-size:0.9rem;line-height:1.6;margin:0 0 0.8rem;color:var(--muted);">Besides the delusions of the rubrics there are ideas that rarely come to the surface. The psychogram of Type 6 shows the self-image and, beneath it, the shadow parts.</p>
            <p style="font-size:0.95rem;margin:0 0 0.8rem;"><strong>Core sentence:</strong> ${pd.kern}</p>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(14rem,1fr));gap:1rem;">
              <div><div style="font-weight:700;font-size:0.85rem;margin-bottom:0.3rem;">How the type wants to see itself</div><ul style="margin:0;padding-left:1.1rem;font-size:0.9rem;line-height:1.6;">${li(pd.selbst)}</ul></div>
              <div><div style="font-weight:700;font-size:0.85rem;margin-bottom:0.3rem;color:${col};">What lies beneath (shadow)</div><ul style="margin:0;padding-left:1.1rem;font-size:0.9rem;line-height:1.6;">${li(pd.schatten)}</ul></div>
            </div>
            <p style="margin:0.9rem 0 0;font-size:0.9rem;"><a href="#psychogramme/6">To the full psychogram of Type 6 →</a></p>
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
