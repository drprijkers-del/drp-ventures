import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "nl",
  persona: "agile-coach",

  contact: {
    name: "Dennis Rijkers",
    title: "Agile Coach & Transitieconsultant",
    email: "dennis@drpventures.org",
    phone: "+31 6 28 975 904",
    linkedin: "https://linkedin.com/in/dennisrijkers",
    location: "Amersfoort, Nederland",
  },

  sectionLabels: {
    about: "Over mij",
    services: "Diensten",
    assignments: "Uitgelichte opdrachten",
    experience: "Loopbaan",
    process: "Werkwijze",
    clients: "Klanten",
    contact: "Contact",
  },

  hero: {
    label: "Agile Coach & Transitieconsultant",
    headline: "Dennis Rijkers",
    subline: "Agile Coach & Transitieconsultant",
    description:
      "Ik begeleid organisaties bij Agile transformaties op schaal. Van team-level coaching tot enterprise adoptie, met focus op duurzame verandering en meetbare resultaten.",
    cta: {
      primary: { label: "Neem contact op", href: "#contact" },
      secondary: { label: "Bekijk opdrachten", href: "#assignments" },
    },
    stats: [
      { value: "25+", label: "Jaar ervaring" },
      { value: "SAFe & LeSS", label: "Certified" },
      { value: "Enterprise", label: "Transformaties" },
    ],
  },

  about: {
    title: "Over mij",
    subtitle: "Dennis Rijkers, Agile Coach & Transitieconsultant",
    intro:
      "Met achttien jaar ervaring in Agile en verandermanagement help ik organisaties de stap te maken van 'Agile doen' naar 'Agile zijn'. Mijn focus ligt op duurzame verandering die blijft hangen wanneer de coach vertrekt.",
    approach: {
      title: "Mijn aanpak",
      description:
        "Ik geloof in pragmatische Agile: geen dogma's, maar principes die werken in de specifieke context van de organisatie. SAFe, LeSS of Scrum zijn middelen, geen doel. Het gaat om waarde leveren en mensen laten groeien.",
    },
    values: [
      {
        title: "Systemisch denken",
        description: "Verandering begrijpen in de context van het hele systeem.",
        icon: "Layers",
      },
      {
        title: "Coaching mindset",
        description: "Helpen ontdekken in plaats van vertellen wat te doen.",
        icon: "Users",
      },
      {
        title: "Meetbaar resultaat",
        description: "Agile metrics die er toe doen: flow, kwaliteit, waarde.",
        icon: "Rocket",
      },
      {
        title: "Cultuurverandering",
        description: "Structuur volgt cultuur. Beide moeten mee veranderen.",
        icon: "Handshake",
      },
    ],
  },

  services: [
    {
      id: "enterprise-coaching",
      title: "Enterprise Agile Coaching",
      description:
        "Begeleiding van grootschalige Agile transformaties. Van assessment tot implementatie en borging.",
      icon: "Building",
      deliverables: [
        "Transformatie roadmap",
        "Leadership coaching",
        "Change management",
        "Metrics & reporting",
      ],
    },
    {
      id: "safe-implementation",
      title: "SAFe Implementatie",
      description:
        "Praktische implementatie van het Scaled Agile Framework, of LeSS waar dat beter past. Geen copy-paste, maar maatwerk voor de organisatie.",
      icon: "Layers",
      deliverables: [
        "ART launch & support",
        "PI Planning facilitatie",
        "Portfolio management",
        "Value stream mapping",
      ],
    },
    {
      id: "team-coaching",
      title: "Team & SM Coaching",
      description:
        "Coaching van teams en Scrum Masters naar een hoger niveau van volwassenheid en effectiviteit.",
      icon: "Users",
      deliverables: [
        "Team assessments",
        "SM/PO coaching",
        "Retrospective facilitatie",
        "Capability building",
      ],
    },
    {
      id: "agile-assessment",
      title: "Agile Assessment",
      description:
        "Onafhankelijke beoordeling van de huidige Agile volwassenheid met concrete verbeteradviezen.",
      icon: "Search",
      deliverables: [
        "Maturity assessment",
        "Gap analyse",
        "Prioritized roadmap",
        "Quick wins identificatie",
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
      title: "Assess",
      description:
        "Grondige analyse van de huidige situatie: cultuur, processen, structuur en uitdagingen.",
      icon: "Search",
    },
    {
      step: 2,
      title: "Design",
      description:
        "Samen een transformatie-aanpak ontwerpen die past bij de organisatie en haar ambities.",
      icon: "Target",
    },
    {
      step: 3,
      title: "Implement",
      description:
        "Hands-on begeleiding bij de implementatie. Training, coaching en facilitatie.",
      icon: "Zap",
    },
    {
      step: 4,
      title: "Sustain",
      description:
        "Borging van de verandering. Eigenaarschap overdragen en interne capability opbouwen.",
      icon: "CheckCircle",
    },
  ],

  clients: [
    "Jumbo",
    "ING",
    "Rabobank",
    "ABN AMRO",
    "Alliander",
    "Alfen",
    "Enexis",
    "PGGM",
    "DPG Media",
    "UWV",
    "Belastingdienst",
    "ASML",
    "Schiphol",
  ],

  contactSection: {
    title: "Contact",
    subtitle: "Laten we kennismaken",
    description:
      "Staat uw organisatie voor een Agile transformatie? Ik ga graag het gesprek aan over de mogelijkheden.",
    formFields: {
      name: "Naam",
      email: "E-mailadres",
      company: "Organisatie",
      subject: "Onderwerp",
      message: "Uw bericht",
      submit: "Verstuur bericht",
    },
    subjects: [
      "Agile transformatie",
      "SAFe implementatie",
      "Coaching opdracht",
      "Assessment aanvraag",
      "Algemene vraag",
    ],
  },

  footer: {
    tagline: "Agile Coach & Transitieconsultant",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Nederland",
  },
};
