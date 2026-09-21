import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "sv",
  persona: "team-manager",

  contact: {
    name: "Dennis Rijkers",
    title: "Interim Engineering Lead",
    email: "info@drpventures.nl",
    phone: "+31 6 28 975 904",
    linkedin: "https://linkedin.com/in/dennisrijkers",
    location: "Amersfoort, Nederländerna",
  },

  sectionLabels: {
    about: "Om mig",
    services: "Expertis",
    assignments: "Utvalda uppdrag",
    experience: "Karriär",
    process: "Arbetssätt",
    clients: "Kunder",
    contact: "Kontakt",
  },

  hero: {
    label: "Interim Engineering Lead",
    headline: "Dennis Rijkers",
    subline: "Interim Engineering Lead",
    description:
      "Jag kombinerar personalledning med Agilt ledarskap. Fokus på att utveckla människor, bygga högpresterande team och skapa en kultur av ägarskap och tillväxt.",
    cta: {
      primary: { label: "Kontakta mig", href: "#contact" },
      secondary: { label: "Visa uppdrag", href: "#assignments" },
    },
    stats: [
      { value: "25+", label: "Års erfarenhet" },
      { value: "100+", label: "Människor coachade" },
      { value: "Hands-on", label: "Ledarskap" },
    ],
  },

  about: {
    title: "Om mig",
    subtitle: "Dennis Rijkers, Interim Engineering Lead",
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
      organization: "Jumbo Supermarkten",
      role: "Scrum Master, then interim Lead Engineering IAM & Workplace",
      period: "Nov 2025 to Oct 2026",
      description:
        "Started as Scrum Master, improving how several platform teams worked. When the Lead Engineering role for IAM and Workplace fell vacant, took it on to safeguard continuity. Handed over to a permanent internal successor.",
      sector: "retail",
    },
    {
      id: "alliander",
      organization: "Alliander",
      role: "Agile Coach, departmental restructuring",
      period: "2024 to 2025",
      description:
        "Restructured a department: assembled and redistributed teams around more logical products, with day-to-day direction placed with permanent management.",
      sector: "energie",
    },
    {
      id: "lvnl",
      organization: "LVNL",
      role: "Agile Coach, middle management intervention",
      period: "2025",
      description:
        "Within a wider KPMG programme, a short and targeted intervention with middle management, who were the bottleneck in the change.",
      sector: "infrastructuur",
    },
    {
      id: "alfen",
      organization: "Alfen",
      role: "Agile Coach, new operating model implementation",
      period: "Mar to Jul 2025",
      description:
        "Contributed to implementing a new operating model for a business unit. Above all an intervention: the company did not have the luxury of changing slowly.",
      sector: "energie",
    },
    {
      id: "enexis",
      organization: "Enexis",
      role: "Scrum Master & Agile Coach, Agile Release Train",
      period: "Jun 2023 to Feb 2025",
      description:
        "Guided several teams through the nationwide rollout of the GIS system used by field engineers across the Netherlands. Left the Agile Release Train more mature and better structured.",
      sector: "energie",
    },
    {
      id: "belastingdienst",
      organization: "Dutch Tax Administration",
      role: "Agile Coach (SAFe), transformation team",
      period: "2023 to 2024",
      description:
        "Coaching within the transformation team, focused on advancing Agile ways of working in a large and heavily regulated organisation.",
      sector: "overheid",
    },
    {
      id: "ing",
      organization: "ING Bank",
      role: "Senior Agile Coach & Trainer",
      period: "2017 to 2019",
      description:
        "Coached leadership teams, Product Owners and Chapter Leads. Responsible for connecting Belgium and the Netherlands and for offshoring to India from an Agile perspective.",
      sector: "financieel",
    },
  ],

  experience: [
    {
      id: "drp-ventures",
      title: "Founder & Consultant",
      organization: "DRP Ventures B.V.",
      period: "2025 to present",
      description:
        "Current practice. Agile coaching, transformation support and interim delivery direction at large organisations.",
      type: "current",
    },
    {
      id: "pink-pollos",
      title: "Founder",
      organization: "Pink Pollos B.V.",
      period: "since 2008",
      description:
        "More than a personal vehicle: an Agile consultancy with its own team of coaches, including clients, contracts and business operations.",
      type: "venture",
    },
    {
      id: "certifications",
      title: "Certification",
      organization: "ICAgile, Scaled Agile, LeSS",
      description:
        "ICAgile Agile Coaching (ICP-ACC) and Team Facilitation (ICP-ATF), SAFe 4.0 SA, Certified LeSS Practitioner, Scrum Master and Product Owner. MBA in Change Management.",
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
    tagline: "Interim Engineering Lead",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Nederländerna",
  },
};
