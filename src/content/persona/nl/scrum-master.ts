import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "nl",
  persona: "scrum-master",

  contact: {
    name: "Dennis Rijkers",
    title: "Scrum Master & Agile Coach",
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
    label: "Scrum Master & Agile Coach",
    headline: "Dennis Rijkers",
    subline: "Scrum Master & Agile Coach",
    description:
      "Ik help development teams hun volledige potentieel te bereiken. Door impediments weg te nemen, processen te verbeteren en een cultuur van continue verbetering te faciliteren.",
    cta: {
      primary: { label: "Neem contact op", href: "#contact" },
      secondary: { label: "Bekijk opdrachten", href: "#assignments" },
    },
    stats: [
      { value: "25+", label: "Jaar ervaring" },
      { value: "50+", label: "Teams begeleid" },
      { value: "ICP-ACC", label: "Gecertificeerd" },
    ],
  },

  about: {
    title: "Over mij",
    subtitle: "Dennis Rijkers, Scrum Master & Agile Coach",
    intro:
      "Als Scrum Master ligt mijn focus op het creëren van een omgeving waarin teams kunnen excelleren. Ik geloof dat de beste resultaten ontstaan wanneer teams eigenaarschap voelen, impediments snel worden opgelost en er ruimte is voor experimenten en leren.",
    approach: {
      title: "Mijn aanpak",
      description:
        "Ik werk vanuit de Scrum values: commitment, focus, openness, respect en courage. Niet als checklist, maar als kompas voor dagelijkse beslissingen. Mijn rol is dienend: ik help het team, de Product Owner en de organisatie om Scrum effectief toe te passen.",
    },
    values: [
      {
        title: "Servant Leadership",
        description: "Het team staat centraal. Mijn rol is faciliteren, niet dicteren.",
        icon: "Users",
      },
      {
        title: "Continue Verbetering",
        description: "Elke sprint is een kans om beter te worden als team.",
        icon: "Rocket",
      },
      {
        title: "Transparantie",
        description: "Openheid over voortgang, problemen en afhankelijkheden.",
        icon: "Search",
      },
      {
        title: "Pragmatisch",
        description: "Scrum is een middel, geen doel. Het gaat om waarde leveren.",
        icon: "Target",
      },
    ],
  },

  services: [
    {
      id: "scrum-facilitation",
      title: "Scrum Facilitatie",
      description:
        "Effectieve Sprint Planning, Daily Scrums, Reviews en Retrospectives die het team energie geven in plaats van kosten.",
      icon: "Calendar",
      deliverables: [
        "Sprint Planning facilitatie",
        "Effectieve Daily Scrums",
        "Review & Demo begeleiding",
        "Retrospective technieken",
      ],
    },
    {
      id: "impediment-removal",
      title: "Impediment Removal",
      description:
        "Actief identificeren en oplossen van blokkades die het team belemmeren. Van technische schuld tot organisatorische hobbels.",
      icon: "Zap",
      deliverables: [
        "Blokkade-identificatie",
        "Cross-team coördinatie",
        "Escalatie management",
        "Dependency tracking",
      ],
    },
    {
      id: "team-coaching",
      title: "Team Coaching",
      description:
        "Het team helpen groeien in zelforganisatie, samenwerking en technische excellentie.",
      icon: "Users",
      deliverables: [
        "Teamdynamiek verbetering",
        "Conflict resolutie",
        "Definition of Done optimalisatie",
        "Velocity en predictability",
      ],
    },
    {
      id: "po-support",
      title: "Product Owner Support",
      description:
        "Ondersteuning van de Product Owner bij backlog management, stakeholder communicatie en waarde maximalisatie.",
      icon: "Target",
      deliverables: [
        "Backlog refinement",
        "User story writing",
        "Stakeholder alignment",
        "Release planning",
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
      title: "Observeren",
      description:
        "Ik begin met luisteren en observeren. Hoe werkt het team nu? Wat zijn de pijnpunten? Waar liggen kansen?",
      icon: "Search",
    },
    {
      step: 2,
      title: "Faciliteren",
      description:
        "Ceremonies structureren en faciliteren zodat ze waarde toevoegen. Niet meer tijd, maar betere tijd.",
      icon: "Calendar",
    },
    {
      step: 3,
      title: "Coachen",
      description:
        "Het team helpen groeien in zelforganisatie. Vragen stellen in plaats van antwoorden geven.",
      icon: "Users",
    },
    {
      step: 4,
      title: "Beschermen",
      description:
        "Het team afschermen van verstoringen en impediments actief wegnemen.",
      icon: "Shield",
    },
  ],

  clients: [
    "Jumbo",
    "ING",
    "Rabobank",
    "ABN AMRO",
    "Alliander",
    "Enexis",
    "LVNL",
    "UWV",
    "PGGM",
    "DPG Media",
  ],

  contactSection: {
    title: "Contact",
    subtitle: "Laten we kennismaken",
    description:
      "Zoekt u een ervaren Scrum Master voor uw team? Neem contact op voor een kennismakingsgesprek.",
    formFields: {
      name: "Naam",
      email: "E-mailadres",
      company: "Organisatie",
      subject: "Onderwerp",
      message: "Uw bericht",
      submit: "Verstuur bericht",
    },
    subjects: [
      "Scrum Master opdracht",
      "Team coaching",
      "Agile assessment",
      "Algemene vraag",
    ],
  },

  footer: {
    tagline: "Scrum Master & Agile Facilitator",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Nederland",
  },
};
