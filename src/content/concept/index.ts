export interface ConceptContent {
  lang: "nl" | "en";
  altLang: { code: string; href: string; label: string };
  nav: { label: string; href: string }[];
  hero: {
    name: string; place: string;
    kick: string; title: string; sub: string; lead: string;
    ctaPrimary: string; ctaSecondary: string;
    promises: { title: string; body: string }[];
  };
  rol: { eyebrow: string; title: string; intro: string; portraitAlt: string; niet: string; nietLabel: string; wel: string; welLabel: string };
  ways: { eyebrow: string; title: string; intro: string; items: { title: string; body: string }[] };
  services: { eyebrow: string; title: string; items: { n: string; title: string; body: string }[] };
  ervaring: {
    eyebrow: string; title: string; intro: string;
    cases: { client: string; headline: string; body: string; period: string }[];
    alsoLabel: string; also: string[];
  };
  ventures: { eyebrow: string; title: string; intro: string; items: { name: string; years: string; body: string }[] };
  contact: { eyebrow: string; title: string; intro: string; cta: string; mailto: string; meta: string };
  footer: { tag: string; legal: string; partner: string };
}

const MAILTO_NL = "mailto:dennis@drpventures.org?subject=Kennismaking";
const MAILTO_EN = "mailto:dennis@drpventures.org?subject=Introduction";

export const nl: ConceptContent = {
  lang: "nl",
  altLang: { code: "en", href: "/en", label: "EN" },
  nav: [
    { label: "Mijn rol", href: "#rol" },
    { label: "Wat ik doe", href: "#wat" },
    { label: "Ervaring", href: "#ervaring" },
    { label: "Ondernemingen", href: "#ondernemingen" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    name: "Dennis Rijkers",
    place: "Amersfoort, Nederland",
    kick: "Agile coaching · Verandering · Interim leiderschap",
    title: "Doet het werk, en begeleidt wie het doet.",
    sub: "Agile Coach · Interim Lead Engineering · Zelfstandig sinds 2008",
    lead: "Ik word gehaald bij organisaties waar de verandering vastloopt. Zelden op de visie, bijna altijd op de uitvoering. Achttien jaar begeleid ik teams en hun leiders, en de laatste jaren draag ik die verantwoordelijkheid ook zelf in de lijn.",
    ctaPrimary: "Plan een kennismaking",
    ctaSecondary: "Bekijk mijn ervaring",
    promises: [
      { title: "Achttien jaar praktijk", body: "Van één Scrum-team tot een Agile Release Train." },
      { title: "Coach én lijnverantwoordelijk", body: "Ik vraag niets van een team dat ik zelf niet heb gedaan." },
      { title: "Draagt over en vertrekt", body: "Volwassenheid die blijft staan als ik weg ben." },
    ],
  },
  rol: {
    eyebrow: "Mijn rol",
    title: "De rem zit zelden bij het team.",
    portraitAlt: "Portret van Dennis Rijkers",
    intro: "Als de levering stokt, wijst iedereen naar de teams. In mijn ervaring ligt de blokkade bijna altijd ergens anders: in de afspraken eromheen, in een managementlaag die besluiten ophoudt, of in een afhankelijkheid die niemand bezit. Dat benoemen is het werk, en het is zelden het makkelijkste gesprek.",
    nietLabel: "Niet",
    niet: "Een volwassenheidsscan met een verbeterplan dat in de la belandt.",
    welLabel: "Wel",
    wel: "Benoemen wat de voortgang blokkeert, ook als dat boven het team ligt, en het dan oplossen.",
  },
  ways: {
    eyebrow: "Twee ingangen",
    title: "Twee manieren om mij in te zetten.",
    intro: "Ze komen uit dezelfde praktijk en versterken elkaar, maar het zijn verschillende opdrachten.",
    items: [
      {
        title: "Agile Coach & Verandering",
        body: "Teams en hun leiders naar een werkwijze die past bij hun context, in plaats van een model dat van buiten wordt opgelegd. Schalen waar het nodig is: SAFe, LeSS, Obeya. ICAgile gecertificeerd in coaching en teamfacilitatie.",
      },
      {
        title: "Interim Lead Engineering",
        body: "De lijnrol zelf overnemen als die vrijvalt of ontbreekt. Eindverantwoordelijk voor teams, budget, leveranciers en roadmap, en geordend overdragen aan een vaste opvolger.",
      },
    ],
  },
  services: {
    eyebrow: "Wat ik doe",
    title: "Van bestuurlijke ambitie naar werkende teams.",
    items: [
      { n: "01", title: "Teams en volwassenheid", body: "Scrum-structuur en rituelen die blijven werken zonder begeleider. Facilitatie, teamcoaching en een feedbackpraktijk die een team zelf volhoudt." },
      { n: "02", title: "Opstellingen en werkafspraken", body: "Teams samenstellen en herverdelen rond producten die wél bij elkaar horen, samen met de teams en hun leidinggevenden. Structure follows strategy, maar dan in gesprekken en niet op een tekentafel." },
      { n: "03", title: "Verandering in de lijn", body: "Leidinggevenden toerusten om het gesprek over gedrag en werkafspraken zelf te voeren. Weerstand ophalen en vertalen naar acties, in plaats van eromheen plannen." },
      { n: "04", title: "Interim leiderschap", body: "Continuïteit borgen als een rol vrijvalt, inclusief contractmanagement en leveranciers. En een overdracht die klopt, want daar begint of eindigt het resultaat." },
    ],
  },
  ervaring: {
    eyebrow: "Ervaring",
    title: "Ervaring waar veel op het spel staat.",
    intro: "Netbeheer, retail, bank, luchtvaart en overheid. Omgevingen waar stilstand geld kost of het nieuws haalt.",
    cases: [
      {
        client: "Enexis",
        headline: "Een Agile Release Train die volwassener was toen ik vertrok.",
        body: "Bijna twee jaar bij de netbeheerder rond de landelijke uitrol van het systeem waarmee monteurs door heel Nederland werken. Meerdere teams binnen de ART begeleid, leiderschap gecoacht en teams waar nodig opnieuw ingericht. Een van die teams ging als eerste in productie op een kernproduct; daarbij heb ik ook het beheerproces ingericht, zodat de oplevering niet eindigde bij livegang.",
        period: "juni 2023 tot februari 2025",
      },
      {
        client: "Alliander",
        headline: "Een afdeling opnieuw ingericht rond producten die wél bij elkaar hoorden.",
        body: "Teams samengesteld en herverdeeld zodat eigenaarschap en prioritering op de juiste plek kwamen te liggen. Het inhoudelijke werk zat in de gesprekken met teams en leidinggevenden over wat de nieuwe indeling van hen vroeg, niet in het schema. De aansturing is daarna belegd bij het vaste management, zodat het zelfstandig doorliep.",
        period: "2024 tot 2025",
      },
      {
        client: "Jumbo Supermarkten",
        headline: "Van Scrum Master naar eindverantwoordelijk voor vijf teams.",
        body: "Begonnen met het verbeteren van de werkwijze van meerdere platformteams. Toen de afdelingsrol vrijkwam die overgenomen, met budget, leveranciers en de roadmap voor IAM en Workplace. De werkwijze van het managementteam aangescherpt door daar zowel als lid als als facilitator aan deel te nemen, en dat dubbele hardop benoemd zodat mijn vragen niet als sturing werden gelezen.",
        period: "november 2025 tot januari 2027",
      },
    ],
    alsoLabel: "Ook voor",
    also: ["ING", "Rabobank", "DPG Media", "ASML", "Schiphol", "PGGM", "Alfen", "Belastingdienst", "UWV", "ABN AMRO", "Engie"],
  },
  ventures: {
    eyebrow: "Ondernemingen",
    title: "Zelf gebouwd wat ik anderen adviseer.",
    intro: "Ik praat over ondernemerschap en verandering vanuit de praktijk van het zelf doen, inclusief de keren dat het tegenviel.",
    items: [
      { name: "Averden B.V.", years: "sinds 2008", body: "In 2008 opgericht als Pink Pollos: een adviesbureau met een eigen team van coaches, inclusief klanten, contracten en bedrijfsvoering. Gaat nu verder als Averden, waarin ik partner ben voor verandering en Agile." },
      { name: "Lifebrander.nl", years: "2009 tot 2019", body: "Platform voor cv's en personal branding, van de grond opgebouwd en na tien jaar verkocht." },
      { name: "Agile & Pixels B.V.", years: "sinds 2015", body: "Vennootschap waaronder ik een deel van mijn opdrachten en samenwerkingen heb gevoerd." },
      { name: "DRP Ventures B.V.", years: "sinds 2025", body: "De vennootschap waaronder ik vandaag werk, opgericht op 4 augustus 2025." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Elke opdracht begint met een gesprek.",
    intro: "Een vrijblijvend gesprek van een half uur, om te kijken of het past. Daar hoeft nog geen opdracht achter te zitten.",
    cta: "Plan een kennismaking",
    mailto: MAILTO_NL,
    meta: "dennis@drpventures.org · Amersfoort · Cv op aanvraag",
  },
  footer: {
    tag: "Doet het werk, en begeleidt wie het doet.",
    legal: "DRP Ventures B.V. · KvK 97968366 · BTW NL868307531B01 · © 2026",
    partner: "Partner bij Averden.",
  },
};

export const en: ConceptContent = {
  lang: "en",
  altLang: { code: "nl", href: "/", label: "NL" },
  nav: [
    { label: "My role", href: "#rol" },
    { label: "What I do", href: "#wat" },
    { label: "Experience", href: "#ervaring" },
    { label: "Ventures", href: "#ondernemingen" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    name: "Dennis Rijkers",
    place: "Amersfoort, the Netherlands",
    kick: "Agile coaching · Change · Interim leadership",
    title: "Does the work, and coaches the people doing it.",
    sub: "Agile Coach · Interim Lead Engineering · Independent since 2008",
    lead: "I get called in where change has stalled. Rarely on the vision, almost always on the execution. For eighteen years I have coached teams and their leaders, and in recent years I have carried that responsibility in the line myself.",
    ctaPrimary: "Plan an introduction",
    ctaSecondary: "See my experience",
    promises: [
      { title: "Eighteen years in practice", body: "From a single Scrum team to an Agile Release Train." },
      { title: "Coach and accountable lead", body: "I ask nothing of a team that I have not done myself." },
      { title: "Hands over and leaves", body: "Maturity that holds up once I am gone." },
    ],
  },
  rol: {
    eyebrow: "My role",
    title: "The brake is rarely the team.",
    portraitAlt: "Portrait of Dennis Rijkers",
    intro: "When delivery stalls, everyone points at the teams. In my experience the blocker sits somewhere else almost every time: in the agreements around them, in a management layer holding up decisions, or in a dependency nobody owns. Naming it is the job, and it is rarely the easiest conversation.",
    nietLabel: "Not",
    niet: "A maturity assessment with an improvement plan that ends up in a drawer.",
    welLabel: "Instead",
    wel: "Naming what blocks progress, including when it sits above the team, and then fixing it.",
  },
  ways: {
    eyebrow: "Two ways in",
    title: "Two ways to bring me in.",
    intro: "They come from the same practice and reinforce each other, but they are different assignments.",
    items: [
      {
        title: "Agile Coach & Change",
        body: "Teams and their leaders towards a way of working that fits their context, rather than a model imposed from outside. Scaling where it is needed: SAFe, LeSS, Obeya. ICAgile certified in coaching and team facilitation.",
      },
      {
        title: "Interim Lead Engineering",
        body: "Taking on the line role itself when it falls vacant or is missing. Accountable for teams, budget, suppliers and roadmap, and handing it over in order to a permanent successor.",
      },
    ],
  },
  services: {
    eyebrow: "What I do",
    title: "From boardroom ambition to teams that deliver.",
    items: [
      { n: "01", title: "Teams and maturity", body: "Scrum structure and rituals that keep working without a facilitator present. Facilitation, team coaching and a feedback practice a team sustains on its own." },
      { n: "02", title: "Team topology and ways of working", body: "Assembling and redistributing teams around products that actually belong together, with the teams and their leads. Structure follows strategy, but in conversations rather than on a drawing board." },
      { n: "03", title: "Change in the line", body: "Equipping leaders to hold the conversation about behaviour and working agreements themselves. Surfacing resistance and turning it into action, instead of planning around it." },
      { n: "04", title: "Interim leadership", body: "Keeping continuity when a role falls vacant, including contract management and suppliers. And a handover that holds, because that is where the result is made or lost." },
    ],
  },
  ervaring: {
    eyebrow: "Experience",
    title: "Experience where a lot is at stake.",
    intro: "Grid operators, retail, banking, aviation and government. Environments where standing still costs money or makes the news.",
    cases: [
      {
        client: "Enexis",
        headline: "An Agile Release Train that was more mature when I left.",
        body: "Almost two years at the grid operator around the nationwide rollout of the system field engineers use across the Netherlands. Coached several teams within the ART and their leadership, and restructured teams where needed. One of those teams was the first to go live on a core product, and I set up the operational support process so delivery did not end at launch.",
        period: "June 2023 to February 2025",
      },
      {
        client: "Alliander",
        headline: "A department rebuilt around products that actually belonged together.",
        body: "Teams assembled and redistributed so that ownership and prioritisation sat in the right place. The real work was in the conversations with teams and leads about what the new structure asked of them, not in the diagram. Direction was then handed to permanent management so it continued without me.",
        period: "2024 to 2025",
      },
      {
        client: "Jumbo Supermarkten",
        headline: "From Scrum Master to accountable for five teams.",
        body: "Joined to improve how several platform teams worked. Took on the departmental role when it fell vacant, with budget, suppliers and the roadmap for IAM and Workplace. Sharpened how the management team worked by taking part both as a member and as its facilitator, and naming that double role out loud so my questions were not read as direction.",
        period: "November 2025 to January 2027",
      },
    ],
    alsoLabel: "Also for",
    also: ["ING", "Rabobank", "DPG Media", "ASML", "Schiphol Airport", "PGGM", "Alfen", "Dutch Tax Administration", "UWV", "ABN AMRO", "Engie"],
  },
  ventures: {
    eyebrow: "Ventures",
    title: "I have built what I advise others on.",
    intro: "I talk about entrepreneurship and change from the practice of doing it myself, including the times it did not work out.",
    items: [
      { name: "Averden B.V.", years: "since 2008", body: "Founded in 2008 as Pink Pollos: a consultancy with its own team of coaches, including clients, contracts and business operations. Now continuing as Averden, where I am partner for change and Agile." },
      { name: "Lifebrander.nl", years: "2009 to 2019", body: "Platform for CVs and personal branding, built from the ground up and sold after ten years." },
      { name: "Agile & Pixels B.V.", years: "since 2015", body: "The company through which I ran part of my assignments and collaborations." },
      { name: "DRP Ventures B.V.", years: "since 2025", body: "The company I work through today, incorporated on 4 August 2025." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Every assignment starts with a conversation.",
    intro: "Half an hour, no obligation, to see whether it fits. There does not need to be an assignment behind it yet.",
    cta: "Plan an introduction",
    mailto: MAILTO_EN,
    meta: "dennis@drpventures.org · Amersfoort · CV on request",
  },
  footer: {
    tag: "Does the work, and coaches the people doing it.",
    legal: "DRP Ventures B.V. · Chamber of Commerce 97968366 · VAT NL868307531B01 · © 2026",
    partner: "Partner at Averden.",
  },
};
