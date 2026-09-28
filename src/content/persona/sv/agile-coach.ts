import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "sv",
  persona: "agile-coach",

  contact: {
    name: "Dennis Rijkers",
    title: "Agile Coach & Transformationskonsult",
    email: "dennis@drpventures.org",
    phone: "+31 6 28 975 904",
    linkedin: "https://linkedin.com/in/dennisrijkers",
    location: "Amersfoort, Nederländerna",
  },

  sectionLabels: {
    about: "Om mig",
    services: "Tjänster",
    assignments: "Utvalda uppdrag",
    experience: "Karriär",
    process: "Arbetssätt",
    clients: "Kunder",
    contact: "Kontakt",
  },

  hero: {
    label: "Agile Coach & Transformationskonsult",
    headline: "Dennis Rijkers",
    subline: "Agile Coach & Transformationskonsult",
    description:
      "Jag vägleder organisationer genom Agila transformationer i stor skala. Från team-coaching till enterprise-adoption, med fokus på hållbar förändring och mätbara resultat.",
    cta: {
      primary: { label: "Kontakta mig", href: "#contact" },
      secondary: { label: "Visa uppdrag", href: "#assignments" },
    },
    stats: [
      { value: "25+", label: "Års erfarenhet" },
      { value: "SAFe & LeSS", label: "Certifierad" },
      { value: "Enterprise", label: "Transformationer" },
    ],
  },

  about: {
    title: "Om mig",
    subtitle: "Dennis Rijkers, Agile Coach & Transformationskonsult",
    intro:
      "Med arton års erfarenhet av Agile och förändringsledning hjälper jag organisationer att gå från att 'göra Agile' till att 'vara Agile'. Mitt fokus ligger på hållbar förändring som består när coachen lämnar.",
    approach: {
      title: "Mitt arbetssätt",
      description:
        "Jag tror på pragmatisk Agile: inga dogmer, utan principer som fungerar i organisationens specifika kontext. SAFe, LeSS eller Scrum är medel, inte mål. Det handlar om att leverera värde och hjälpa människor växa.",
    },
    values: [
      {
        title: "Systemtänkande",
        description: "Förstå förändring i kontexten av hela systemet.",
        icon: "Layers",
      },
      {
        title: "Coachande mindset",
        description: "Hjälpa att upptäcka istället för att säga vad man ska göra.",
        icon: "Users",
      },
      {
        title: "Mätbara resultat",
        description: "Agila mätvärden som spelar roll: flöde, kvalitet, värde.",
        icon: "Rocket",
      },
      {
        title: "Kulturförändring",
        description: "Struktur följer kultur. Båda måste förändras tillsammans.",
        icon: "Handshake",
      },
    ],
  },

  services: [
    {
      id: "enterprise-coaching",
      title: "Enterprise Agile Coaching",
      description:
        "Vägledning för storskaliga Agila transformationer. Från assessment till implementering och förankring.",
      icon: "Building",
      deliverables: [
        "Transformations-roadmap",
        "Ledarskapscoaching",
        "Förändringsledning",
        "Mätvärden & rapportering",
      ],
    },
    {
      id: "safe-implementation",
      title: "SAFe-implementering",
      description:
        "Praktisk implementering av Scaled Agile Framework, eller LeSS där det passar bättre. Ingen copy-paste, utan skräddarsytt för organisationen.",
      icon: "Layers",
      deliverables: [
        "ART-lansering & support",
        "PI Planning-facilitering",
        "Portföljhantering",
        "Value stream mapping",
      ],
    },
    {
      id: "team-coaching",
      title: "Team & SM-coaching",
      description:
        "Coaching av team och Scrum Masters till en högre nivå av mognad och effektivitet.",
      icon: "Users",
      deliverables: [
        "Team assessments",
        "SM/PO-coaching",
        "Retrospective-facilitering",
        "Kompetensbyggande",
      ],
    },
    {
      id: "agile-assessment",
      title: "Agile Assessment",
      description:
        "Oberoende bedömning av nuvarande Agil mognad med konkreta förbättringsrekommendationer.",
      icon: "Search",
      deliverables: [
        "Mognadsbedömning",
        "Gap-analys",
        "Prioriterad roadmap",
        "Quick wins-identifiering",
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
      title: "Bedöm",
      description:
        "Grundlig analys av nuläget: kultur, processer, struktur och utmaningar.",
      icon: "Search",
    },
    {
      step: 2,
      title: "Designa",
      description:
        "Tillsammans designa ett transformationsupplägg som passar organisationen och dess ambitioner.",
      icon: "Target",
    },
    {
      step: 3,
      title: "Implementera",
      description:
        "Hands-on vägledning under implementeringen. Utbildning, coaching och facilitering.",
      icon: "Zap",
    },
    {
      step: 4,
      title: "Förankra",
      description:
        "Förankra förändringen. Överföra ägarskap och bygga intern kapacitet.",
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
    title: "Kontakt",
    subtitle: "Låt oss prata",
    description:
      "Står din organisation inför en Agil transformation? Jag diskuterar gärna möjligheterna.",
    formFields: {
      name: "Namn",
      email: "E-postadress",
      company: "Organisation",
      subject: "Ämne",
      message: "Ditt meddelande",
      submit: "Skicka meddelande",
    },
    subjects: [
      "Agil transformation",
      "SAFe-implementering",
      "Coachinguppdrag",
      "Assessment-förfrågan",
      "Allmän fråga",
    ],
  },

  footer: {
    tagline: "Agile Coach & Transformationskonsult",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Nederländerna",
  },
};
