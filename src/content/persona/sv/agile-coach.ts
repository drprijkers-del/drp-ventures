import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "sv",
  persona: "agile-coach",

  contact: {
    name: "Dennis Rijkers",
    title: "Enterprise Agile Coach",
    email: "info@drpventures.nl",
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
    label: "Enterprise Agile Coach",
    headline: "Dennis Rijkers",
    subline: "Agile Coach & Transformationsexpert",
    description:
      "Jag vägleder organisationer genom Agila transformationer i stor skala. Från team-coaching till enterprise-adoption — med fokus på hållbar förändring och mätbara resultat.",
    cta: {
      primary: { label: "Kontakta mig", href: "#contact" },
      secondary: { label: "Visa uppdrag", href: "#assignments" },
    },
    stats: [
      { value: "20+", label: "Års erfarenhet" },
      { value: "SAFe & LeSS", label: "Certifierad" },
      { value: "Enterprise", label: "Transformationer" },
    ],
  },

  about: {
    title: "Om mig",
    subtitle: "Dennis Rijkers — Enterprise Agile Coach",
    intro:
      "Med över femton års erfarenhet av Agile och förändringsledning hjälper jag organisationer att gå från att 'göra Agile' till att 'vara Agile'. Mitt fokus ligger på hållbar förändring som består när coachen lämnar.",
    approach: {
      title: "Mitt arbetssätt",
      description:
        "Jag tror på pragmatisk Agile — inga dogmer, utan principer som fungerar i organisationens specifika kontext. SAFe, LeSS eller Scrum är medel, inte mål. Det handlar om att leverera värde och hjälpa människor växa.",
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
        "Praktisk implementering av Scaled Agile Framework — eller LeSS där det passar bättre. Ingen copy-paste, utan skräddarsytt för organisationen.",
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
      id: "ing",
      organization: "ING",
      role: "Enterprise Agile Coach",
      description:
        "Del av det centrala Agile Coaching-teamet under 'Think Forward'-transformationen. Coaching av tribes och ARTs i övergången till en helt Agil organisation.",
      sector: "financieel",
    },
    {
      id: "alfen",
      organization: "Alfen",
      role: "Agile Transformation Lead",
      description:
        "Ledande roll i den Agila transformationen av IT-organisationen. Från projektbaserat till produktbaserat arbete med value streams och dedikerade team.",
      sector: "energie",
    },
    {
      id: "alliander",
      organization: "Alliander",
      role: "Agile Coach – Value Stream Level",
      description:
        "Coaching på value stream-nivå inom nätoperatören. Fokus på end-to-end-flöde och cross-team-samarbete.",
      sector: "energie",
    },
    {
      id: "pggm",
      organization: "PGGM",
      role: "Agile Coach – IT Organisation",
      description:
        "Vägledning av den Agila resan inom pensionsförvaltaren. Hitta balans mellan stabilitet och agilitet.",
      sector: "financieel",
    },
    {
      id: "dpg-media",
      organization: "DPG Media",
      role: "Agile Coach",
      description:
        "Stöd vid integrering av team från olika varumärken under ett gemensamt Agilt arbetssätt.",
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
        "Enterprise Agile Coaching för stora organisationer inom finans, energi och offentlig sektor. Fokus på hållbar transformation.",
      type: "current",
    },
    {
      id: "pink-pollos",
      title: "Grundare & Lead Coach",
      organization: "Pink Pollos",
      period: "2008 - 2020",
      description:
        "Grundade och växte en Agile-konsultfirma till ett team av coacher. Väglett dussintals enterprise-transformationer.",
      type: "venture",
    },
    {
      id: "certifications",
      title: "Certifieringar",
      organization: "Scaled Agile, Scrum.org",
      description:
        "SAFe SPC (Implementing SAFe), SAFe Agilist, PSM II, Professionella coaching-certifieringar.",
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
    tagline: "Enterprise Agile Coach",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Nederländerna",
  },
};
