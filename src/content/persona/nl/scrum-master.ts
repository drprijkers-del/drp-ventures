import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "nl",
  persona: "scrum-master",

  contact: {
    name: "Dennis Rijkers",
    title: "Senior Scrum Master",
    email: "info@drpventures.nl",
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
    label: "Senior Scrum Master",
    headline: "Dennis Rijkers",
    subline: "Scrum Master & Agile Facilitator",
    description:
      "Ik help development teams hun volledige potentieel te bereiken. Door impediments weg te nemen, processen te verbeteren en een cultuur van continue verbetering te faciliteren.",
    cta: {
      primary: { label: "Neem contact op", href: "#contact" },
      secondary: { label: "Bekijk opdrachten", href: "#assignments" },
    },
    stats: [
      { value: "20+", label: "Jaar ervaring" },
      { value: "50+", label: "Teams begeleid" },
      { value: "PSM II", label: "Gecertificeerd" },
    ],
  },

  about: {
    title: "Over mij",
    subtitle: "Dennis Rijkers — Senior Scrum Master",
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
      role: "Senior Scrum Master – IAM Teams",
      description:
        "Begeleiding van meerdere Scrum teams binnen Identity & Access Management. Focus op teamontwikkeling, sprint health en cross-team alignment.",
      sector: "retail",
    },
    {
      id: "ing",
      organization: "ING",
      role: "Scrum Master – Core Banking",
      description:
        "Scrum Master voor een team in de core banking transformatie. Verantwoordelijk voor het faciliteren van ceremonies en het wegnemen van organisatorische impediments.",
      sector: "financieel",
    },
    {
      id: "rabobank",
      organization: "Rabobank",
      role: "Scrum Master – Digital Channels",
      description:
        "Begeleiding van teams die werkten aan digitale klantkanalen. Focus op velocity verbetering en stakeholder management.",
      sector: "financieel",
    },
    {
      id: "alliander",
      organization: "Alliander",
      role: "Scrum Master – Smart Grid",
      description:
        "Scrum Master voor teams in het smart grid domein. Uitdaging: technisch complexe materie combineren met Agile werkwijzen.",
      sector: "energie",
    },
  ],

  experience: [
    {
      id: "drp-ventures",
      title: "Principal Consultant",
      organization: "DRP Ventures",
      period: "2020 - heden",
      description:
        "Via DRP Ventures lever ik Scrum Master diensten aan enterprise organisaties. Focus op complexe IT-omgevingen en schaalbare Agile praktijken.",
      type: "current",
    },
    {
      id: "pink-pollos",
      title: "Oprichter & Scrum Master",
      organization: "Pink Pollos",
      period: "2008 - 2020",
      description:
        "Opgericht als Agile consultancy. Tientallen teams begeleid bij banken, verzekeraars en energiebedrijven.",
      type: "venture",
    },
    {
      id: "certified",
      title: "Certificeringen",
      organization: "Scrum.org",
      description:
        "PSM II (Professional Scrum Master), PSM I, PSPO I. Aangevuld met SAFe certificeringen voor enterprise contexten.",
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
