import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "sv",
  persona: "team-manager",

  contact: {
    name: "Dennis Rijkers",
    title: "Agile Team Manager",
    email: "info@drpventures.nl",
    phone: "+31 6 28 975 904",
    linkedin: "https://linkedin.com/in/dennisrijkers",
    location: "Amersfoort, Nederländerna",
  },

  sectionLabels: {
    about: "Om mig",
    services: "Expertis",
    assignments: "Uppdrag",
    experience: "Karriär",
    process: "Arbetssätt",
    clients: "Kunder",
    contact: "Kontakt",
  },

  hero: {
    label: "Agile Team Manager",
    headline: "Dennis Rijkers",
    subline: "Team Manager & People Lead",
    description:
      "Jag kombinerar personalledning med Agilt ledarskap. Fokus på att utveckla människor, bygga högpresterande team och skapa en kultur av ägarskap och tillväxt.",
    cta: {
      primary: { label: "Kontakta mig", href: "#contact" },
      secondary: { label: "Visa uppdrag", href: "#assignments" },
    },
    stats: [
      { value: "20+", label: "Års erfarenhet" },
      { value: "100+", label: "Människor coachade" },
      { value: "Hands-on", label: "Ledarskap" },
    ],
  },

  about: {
    title: "Om mig",
    subtitle: "Dennis Rijkers — Agile Team Manager",
    intro:
      "Som Team Manager tror jag att de bästa resultaten kommer från team som känner ägarskap och har utrymme att växa. Min roll är att skapa dessa förutsättningar: tydliga mål, psykologisk trygghet och kontinuerlig utveckling.",
    approach: {
      title: "Mitt arbetssätt",
      description:
        "Jag kombinerar moderna personalmetoder med Agila principer. Inga årliga utvecklingssamtal utan kontinuerlig feedback. Ingen top-down-styrning utan delat ledarskap. Resultatet: motiverade team som tar ägarskap.",
    },
    values: [
      {
        title: "Människor först",
        description: "Att investera i människor ger de bästa resultaten.",
        icon: "Handshake",
      },
      {
        title: "Ägarskap",
        description: "Team som känner ägarskap presterar bättre.",
        icon: "Target",
      },
      {
        title: "Kontinuerlig tillväxt",
        description: "Lärande och utveckling är en kontinuerlig process.",
        icon: "Rocket",
      },
      {
        title: "Förbindande",
        description: "Bygga broar mellan team, ledning och intressenter.",
        icon: "Handshake",
      },
    ],
  },

  services: [
    {
      id: "people-management",
      title: "Personalledning",
      description:
        "Fullt ansvar för personalledning: från rekrytering till utveckling, från feedback till karriärplanering.",
      icon: "Users",
      deliverables: [
        "1-on-1-samtal",
        "Performance management",
        "Karriärutveckling",
        "Teamsammansättning",
      ],
    },
    {
      id: "team-building",
      title: "Teambyggande",
      description:
        "Bygga och utveckla högpresterande team. Från nya team till att transformera befintliga grupper.",
      icon: "Building",
      deliverables: [
        "Team forming & norming",
        "Kulturutveckling",
        "Rollfördelning & ägarskap",
        "Team health-monitorering",
      ],
    },
    {
      id: "stakeholder-mgmt",
      title: "Intressenthantering",
      description:
        "Effektiv kommunikation och samstämmighet med intressenter på alla nivåer i organisationen.",
      icon: "Handshake",
      deliverables: [
        "Förväntningshantering",
        "Eskaleringshantering",
        "Statusrapportering",
        "Cross-team-koordinering",
      ],
    },
    {
      id: "delivery-ownership",
      title: "Delivery-ägarskap",
      description:
        "Slutansvar för teamets leverans. Fokus på förutsägbarhet, kvalitet och värde.",
      icon: "Target",
      deliverables: [
        "Leveransplanering",
        "Kapacitetshantering",
        "Kvalitetssäkring",
        "Kontinuerlig förbättring",
      ],
    },
  ],

  assignments: [
    {
      id: "jumbo",
      organization: "Jumbo Supermarkets",
      role: "Agile Team Manager – IAM",
      description:
        "Team Manager för flera IAM-team. Ansvarig för 15+ ingenjörer, deras utveckling och leveransen av IAM-plattformen.",
      sector: "retail",
    },
    {
      id: "alliander",
      organization: "Alliander",
      role: "Interim Team Lead",
      description:
        "Interim Team Lead för ett utvecklingsteam utan permanent chef. Fokus på stabilitet, tydlighet och att hitta en permanent lösning.",
      sector: "energie",
    },
    {
      id: "ing",
      organization: "ING",
      role: "Chapter Lead",
      description:
        "Chapter Lead i ING:s Agila modell. Ansvarig för utvecklingen av ingenjörer utspridda över flera squads.",
      sector: "financieel",
    },
    {
      id: "dpg",
      organization: "DPG Media",
      role: "Engineering Manager",
      description:
        "Engineering Manager för team som arbetade med content management-system. Kombination av personalledning och teknisk vägledning.",
      sector: "media",
    },
  ],

  experience: [
    {
      id: "drp-ventures",
      title: "Principal Consultant",
      organization: "DRP Ventures",
      period: "2020 - nuvarande",
      description:
        "Interim Team Management-uppdrag hos enterprise-organisationer. Fokus på att stabilisera och utveckla ingenjörsteam.",
      type: "current",
    },
    {
      id: "pink-pollos",
      title: "Managing Director",
      organization: "Pink Pollos",
      period: "2008 - 2020",
      description:
        "Förutom konsulting även ansvarig för det egna teamet. Personalledning kombinerat med affärsutveckling.",
      type: "venture",
    },
    {
      id: "background",
      title: "Management-utbildning",
      organization: "MBA & HEAO",
      description:
        "MBA med fokus på ledarskap och förändringsledning. Kompletterat med coaching-certifieringar och kontinuerlig utveckling.",
      type: "foundation",
    },
  ],

  process: [
    {
      step: 1,
      title: "Anslut",
      description:
        "1-on-1s med alla teammedlemmar. Förstå vilka de är, vad som driver dem och vart de vill.",
      icon: "Users",
    },
    {
      step: 2,
      title: "Stabilisera",
      description:
        "Skapa tydlighet: roller, förväntningar, arbetssätt. Bygga psykologisk trygghet.",
      icon: "Shield",
    },
    {
      step: 3,
      title: "Utveckla",
      description:
        "Investera i tillväxt: utbildning, coaching, stretch assignments. Hjälpa människor nå sin potential.",
      icon: "Rocket",
    },
    {
      step: 4,
      title: "Överlämna",
      description:
        "Överlämna ägarskap till teamet och eventuellt en permanent chef. Mitt mål är att bli överflödig.",
      icon: "CheckCircle",
    },
  ],

  clients: [
    "Jumbo",
    "Alliander",
    "ING",
    "DPG Media",
    "Rabobank",
    "PGGM",
    "Enexis",
    "UWV",
  ],

  contactSection: {
    title: "Kontakt",
    subtitle: "Låt oss prata",
    description:
      "Letar du efter en interim Team Manager eller behöver stöd med teamutveckling? Kontakta mig.",
    formFields: {
      name: "Namn",
      email: "E-postadress",
      company: "Organisation",
      subject: "Ämne",
      message: "Ditt meddelande",
      submit: "Skicka meddelande",
    },
    subjects: [
      "Interim Team Manager",
      "Teamcoaching",
      "Ledarskapsutveckling",
      "Allmän fråga",
    ],
  },

  footer: {
    tagline: "Agile Team Manager",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Nederländerna",
  },
};
