import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "nl",
  persona: "team-manager",

  contact: {
    name: "Dennis Rijkers",
    title: "Interim Engineering Lead",
    email: "dennis@drpventures.org",
    phone: "+31 6 28 975 904",
    linkedin: "https://linkedin.com/in/dennisrijkers",
    location: "Amersfoort, Nederland",
  },

  sectionLabels: {
    about: "Over mij",
    services: "Expertise",
    assignments: "Uitgelichte opdrachten",
    experience: "Loopbaan",
    process: "Werkwijze",
    clients: "Klanten",
    contact: "Contact",
  },

  hero: {
    label: "Interim Engineering Lead",
    headline: "Dennis Rijkers",
    subline: "Interim Engineering Lead",
    description:
      "Ik combineer people management met Agile leiderschap. Focus op het ontwikkelen van mensen, het bouwen van high-performing teams en het creëren van een cultuur van eigenaarschap en groei.",
    cta: {
      primary: { label: "Neem contact op", href: "#contact" },
      secondary: { label: "Bekijk opdrachten", href: "#assignments" },
    },
    stats: [
      { value: "25+", label: "Jaar ervaring" },
      { value: "100+", label: "Mensen begeleid" },
      { value: "Hands-on", label: "Leiderschap" },
    ],
  },

  about: {
    title: "Over mij",
    subtitle: "Dennis Rijkers, Interim Engineering Lead",
    intro:
      "Als Team Manager geloof ik dat de beste resultaten komen van teams die eigenaarschap voelen en ruimte krijgen om te groeien. Mijn rol is het creëren van die condities: heldere doelen, psychologische veiligheid en continue ontwikkeling.",
    approach: {
      title: "Mijn aanpak",
      description:
        "Ik combineer moderne people practices met Agile principes. Geen jaarlijkse beoordelingsgesprekken maar continue feedback. Geen top-down sturing maar gedeeld leiderschap. Het resultaat: gemotiveerde teams die eigenaarschap nemen.",
    },
    values: [
      {
        title: "People First",
        description: "Investeren in mensen levert de beste resultaten op.",
        icon: "Handshake",
      },
      {
        title: "Eigenaarschap",
        description: "Teams die ownership voelen presteren beter.",
        icon: "Target",
      },
      {
        title: "Continue groei",
        description: "Leren en ontwikkelen is een continu proces.",
        icon: "Rocket",
      },
      {
        title: "Verbindend",
        description: "Bruggen bouwen tussen teams, management en stakeholders.",
        icon: "Handshake",
      },
    ],
  },

  services: [
    {
      id: "people-management",
      title: "People Management",
      description:
        "Volledige people management verantwoordelijkheid: van hiring tot ontwikkeling, van feedback tot carrièreplanning.",
      icon: "Users",
      deliverables: [
        "1-on-1 gesprekken",
        "Performance management",
        "Carrière ontwikkeling",
        "Team compositie",
      ],
    },
    {
      id: "team-building",
      title: "Team Building",
      description:
        "Het bouwen en ontwikkelen van high-performing teams. Van nieuwe teams tot het transformeren van bestaande groepen.",
      icon: "Building",
      deliverables: [
        "Team forming & norming",
        "Cultuur ontwikkeling",
        "Rolverdeling & ownership",
        "Team health monitoring",
      ],
    },
    {
      id: "stakeholder-mgmt",
      title: "Stakeholder Management",
      description:
        "Effectieve communicatie en alignment met stakeholders op alle niveaus in de organisatie.",
      icon: "Handshake",
      deliverables: [
        "Verwachtingsmanagement",
        "Escalatie handling",
        "Status rapportage",
        "Cross-team coördinatie",
      ],
    },
    {
      id: "delivery-ownership",
      title: "Delivery Ownership",
      description:
        "Eindverantwoordelijkheid voor team delivery. Focus op voorspelbaarheid, kwaliteit en waarde.",
      icon: "Target",
      deliverables: [
        "Delivery planning",
        "Capacity management",
        "Quality assurance",
        "Continuous improvement",
      ],
    },
  ],

  assignments: [
    {
      id: "jumbo",
      organization: "Jumbo Supermarkten",
      role: "Scrum Master, daarna interim Lead Engineering IAM & Workplace",
      period: "nov 2025 tot okt 2026",
      description:
        "Gestart als Scrum Master om de werkwijze van meerdere platformteams te verbeteren. Toen de Lead Engineering-rol voor IAM en Workplace vrijkwam, die overgenomen om de continuiteit te borgen. Overgedragen aan een vaste interne opvolger.",
      sector: "retail",
    },
    {
      id: "alliander",
      organization: "Alliander",
      role: "Agile Coach, herinrichting afdeling",
      period: "2024 tot 2025",
      description:
        "Een afdeling opnieuw ingericht: nieuwe teams samengesteld en herverdeeld rond logischere producten, met de aansturing belegd bij het vaste management.",
      sector: "energie",
    },
    {
      id: "lvnl",
      organization: "LVNL",
      role: "Agile Coach, interventie middenmanagement",
      period: "2025",
      description:
        "Binnen een breder KPMG-traject een korte, gerichte interventie gedaan op het middenmanagement, dat als bottleneck in de verandering zat.",
      sector: "infrastructuur",
    },
    {
      id: "alfen",
      organization: "Alfen",
      role: "Agile Coach, implementatie nieuw operating model",
      period: "mrt tot jul 2025",
      description:
        "Meegewerkt aan de implementatie van een nieuw operating model voor een bedrijfsonderdeel. Vooral een interventie: het bedrijf had niet de luxe om langzaam te veranderen.",
      sector: "energie",
    },
    {
      id: "enexis",
      organization: "Enexis",
      role: "Scrum Master & Agile Coach, Agile Release Train",
      period: "jun 2023 tot feb 2025",
      description:
        "Meerdere teams begeleid rond de landelijke oplevering van het GIS-systeem waarmee monteurs door heel Nederland werken. De Agile Release Train volwassener en beter gestructureerd achtergelaten.",
      sector: "energie",
    },
    {
      id: "belastingdienst",
      organization: "Belastingdienst",
      role: "Agile Coach (SAFe), transitieteam",
      period: "2023 tot 2024",
      description:
        "Coaching binnen het transitieteam, gericht op het verder brengen van de Agile werkwijze in een grote en sterk gereguleerde organisatie.",
      sector: "overheid",
    },
    {
      id: "ing",
      organization: "ING Bank",
      role: "Senior Agile Coach & Trainer",
      period: "2017 tot 2019",
      description:
        "Leiderschapsteams, Product Owners en Chapter Leads gecoacht. Verantwoordelijk voor de verbinding tussen Belgie en Nederland en voor de offshoring naar India vanuit Agile perspectief.",
      sector: "financieel",
    },
  ],

  experience: [
    {
      id: "drp-ventures",
      title: "Oprichter & Consultant",
      organization: "DRP Ventures B.V.",
      period: "2025 tot heden",
      description:
        "Huidige praktijk. Agile coaching, transitiebegeleiding en interim delivery-aansturing bij grote organisaties.",
      type: "current",
    },
    {
      id: "pink-pollos",
      title: "Oprichter",
      organization: "Pink Pollos B.V.",
      period: "sinds 2008",
      description:
        "Meer dan een eigen vehikel: een Agile-consultancy met een eigen team van coaches, inclusief klanten, contracten en bedrijfsvoering.",
      type: "venture",
    },
    {
      id: "certifications",
      title: "Certificering",
      organization: "ICAgile, Scaled Agile, LeSS",
      description:
        "ICAgile Agile Coaching (ICP-ACC) en Team Facilitation (ICP-ATF), SAFe 4.0 SA, Certified LeSS Practitioner, Scrum Master en Product Owner. MBA Verandermanagement.",
      type: "foundation",
    },
  ],

  process: [
    {
      step: 1,
      title: "Kennismaken",
      description:
        "1-on-1s met alle teamleden. Begrijpen wie ze zijn, wat ze drijft en waar ze naartoe willen.",
      icon: "Users",
    },
    {
      step: 2,
      title: "Stabiliseren",
      description:
        "Duidelijkheid creëren: rollen, verwachtingen, werkwijze. Psychologische veiligheid opbouwen.",
      icon: "Shield",
    },
    {
      step: 3,
      title: "Ontwikkelen",
      description:
        "Investeren in groei: training, coaching, stretch assignments. Mensen helpen hun potentieel te bereiken.",
      icon: "Rocket",
    },
    {
      step: 4,
      title: "Overdragen",
      description:
        "Eigenaarschap overdragen aan het team en eventueel een permanente manager. Mijn doel is overbodig worden.",
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
    title: "Contact",
    subtitle: "Laten we kennismaken",
    description:
      "Zoekt u een interim Team Manager of heeft u behoefte aan ondersteuning bij team ontwikkeling? Neem contact op.",
    formFields: {
      name: "Naam",
      email: "E-mailadres",
      company: "Organisatie",
      subject: "Onderwerp",
      message: "Uw bericht",
      submit: "Verstuur bericht",
    },
    subjects: [
      "Interim Team Manager",
      "Team coaching",
      "Leadership development",
      "Algemene vraag",
    ],
  },

  footer: {
    tagline: "Interim Engineering Lead",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Nederland",
  },
};
