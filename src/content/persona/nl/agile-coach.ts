import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "nl",
  persona: "agile-coach",

  contact: {
    name: "Dennis Rijkers",
    title: "Enterprise Agile Coach",
    email: "info@drpventures.nl",
    phone: "+31 6 28 975 904",
    linkedin: "https://linkedin.com/in/dennisrijkers",
    location: "Amersfoort, Nederland",
  },

  sectionLabels: {
    about: "Over mij",
    services: "Diensten",
    assignments: "Opdrachten",
    experience: "Loopbaan",
    process: "Werkwijze",
    clients: "Klanten",
    contact: "Contact",
  },

  hero: {
    label: "Enterprise Agile Coach",
    headline: "Dennis Rijkers",
    subline: "Agile Coach & Transformatie Expert",
    description:
      "Ik begeleid organisaties bij Agile transformaties op schaal. Van team-level coaching tot enterprise adoptie — met focus op duurzame verandering en meetbare resultaten.",
    cta: {
      primary: { label: "Neem contact op", href: "#contact" },
      secondary: { label: "Bekijk opdrachten", href: "#assignments" },
    },
    stats: [
      { value: "20+", label: "Jaar ervaring" },
      { value: "SAFe", label: "SPC Certified" },
      { value: "Enterprise", label: "Transformaties" },
    ],
  },

  about: {
    title: "Over mij",
    subtitle: "Dennis Rijkers — Enterprise Agile Coach",
    intro:
      "Met meer dan twintig jaar ervaring in Agile en verandermanagement help ik organisaties de stap te maken van 'Agile doen' naar 'Agile zijn'. Mijn focus ligt op duurzame verandering die blijft hangen wanneer de coach vertrekt.",
    approach: {
      title: "Mijn aanpak",
      description:
        "Ik geloof in pragmatische Agile — geen dogma's, maar principes die werken in de specifieke context van de organisatie. SAFe, LeSS of Scrum zijn middelen, geen doel. Het gaat om waarde leveren en mensen laten groeien.",
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
        "Praktische implementatie van het Scaled Agile Framework. Geen copy-paste, maar maatwerk voor de organisatie.",
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
      id: "ing",
      organization: "ING",
      role: "Enterprise Agile Coach",
      description:
        "Onderdeel van het centrale Agile Coaching team tijdens de 'Think Forward' transformatie. Coaching van tribes en ARTs in de transitie naar een volledig Agile organisatie.",
      sector: "financieel",
    },
    {
      id: "alfen",
      organization: "Alfen",
      role: "Agile Transformatie Lead",
      description:
        "Leidende rol in de Agile transformatie van de IT-organisatie. Van project-based naar product-based werken met value streams en dedicated teams.",
      sector: "energie",
    },
    {
      id: "alliander",
      organization: "Alliander",
      role: "Agile Coach – Value Stream Level",
      description:
        "Coaching op value stream niveau binnen de netwerkbeheerder. Focus op end-to-end flow en cross-team samenwerking.",
      sector: "energie",
    },
    {
      id: "pggm",
      organization: "PGGM",
      role: "Agile Coach – IT Organisatie",
      description:
        "Begeleiding van de Agile reis binnen de pensioenuitvoerder. Balans vinden tussen stabiliteit en wendbaarheid.",
      sector: "financieel",
    },
    {
      id: "dpg-media",
      organization: "DPG Media",
      role: "Agile Coach",
      description:
        "Ondersteuning bij het samenbrengen van teams uit verschillende labels onder een gezamenlijke Agile werkwijze.",
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
        "Enterprise Agile Coaching voor grote organisaties in finance, energie en overheid. Focus op duurzame transformatie.",
      type: "current",
    },
    {
      id: "pink-pollos",
      title: "Oprichter & Lead Coach",
      organization: "Pink Pollos",
      period: "2008 - 2020",
      description:
        "Agile consultancy opgericht en uitgebouwd tot een team van coaches. Tientallen enterprise transformaties begeleid.",
      type: "venture",
    },
    {
      id: "certifications",
      title: "Certificeringen",
      organization: "Scaled Agile, Scrum.org",
      description:
        "SAFe SPC (Implementing SAFe), SAFe Agilist, PSM II, Professional Coaching certificeringen.",
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
    tagline: "Enterprise Agile Coach",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Nederland",
  },
};
