import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "nl",
  persona: "team-manager",

  contact: {
    name: "Dennis Rijkers",
    title: "Agile Team Manager",
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
    label: "Agile Team Manager",
    headline: "Dennis Rijkers",
    subline: "Team Manager & People Lead",
    description:
      "Ik combineer people management met Agile leiderschap. Focus op het ontwikkelen van mensen, het bouwen van high-performing teams en het creëren van een cultuur van eigenaarschap en groei.",
    cta: {
      primary: { label: "Neem contact op", href: "#contact" },
      secondary: { label: "Bekijk opdrachten", href: "#assignments" },
    },
    stats: [
      { value: "20+", label: "Jaar ervaring" },
      { value: "100+", label: "Mensen begeleid" },
      { value: "Hands-on", label: "Leiderschap" },
    ],
  },

  about: {
    title: "Over mij",
    subtitle: "Dennis Rijkers — Agile Team Manager",
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
      role: "Agile Team Manager – IAM",
      description:
        "Team Manager voor meerdere IAM-teams. Verantwoordelijk voor 15+ engineers, hun ontwikkeling en de delivery van het IAM platform.",
      sector: "retail",
    },
    {
      id: "alliander",
      organization: "Alliander",
      role: "Interim Team Lead",
      description:
        "Interim Team Lead voor een development team zonder vaste manager. Focus op stabiliteit, duidelijkheid en het vinden van een permanente oplossing.",
      sector: "energie",
    },
    {
      id: "ing",
      organization: "ING",
      role: "Chapter Lead",
      description:
        "Chapter Lead in het Agile model van ING. Verantwoordelijk voor de ontwikkeling van engineers verspreid over meerdere squads.",
      sector: "financieel",
    },
    {
      id: "dpg",
      organization: "DPG Media",
      role: "Engineering Manager",
      description:
        "Engineering Manager voor teams die werkten aan content management systemen. Combinatie van people management en technische aansturing.",
      sector: "media",
    },
  ],

  experience: [
    {
      id: "drp-ventures",
      title: "Principal Consultant",
      organization: "DRP Ventures",
      period: "2020 - heden",
      description:
        "Interim Team Management opdrachten bij enterprise organisaties. Focus op het stabiliseren en ontwikkelen van engineering teams.",
      type: "current",
    },
    {
      id: "pink-pollos",
      title: "Managing Director",
      organization: "Pink Pollos",
      period: "2008 - 2020",
      description:
        "Naast consulting ook verantwoordelijk voor het eigen team. People management gecombineerd met business development.",
      type: "venture",
    },
    {
      id: "background",
      title: "Management Opleiding",
      organization: "MBA & HEAO",
      description:
        "MBA met focus op leiderschap en verandermanagement. Aangevuld met coaching certificeringen en continue ontwikkeling.",
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
    tagline: "Agile Team Manager",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Nederland",
  },
};
