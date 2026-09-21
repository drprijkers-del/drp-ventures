import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "sv",
  persona: "scrum-master",

  contact: {
    name: "Dennis Rijkers",
    title: "Scrum Master & Agile Coach",
    email: "info@drpventures.org",
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
    label: "Scrum Master & Agile Coach",
    headline: "Dennis Rijkers",
    subline: "Scrum Master & Agile Coach",
    description:
      "Jag hjälper utvecklingsteam att nå sin fulla potential. Genom att ta bort hinder, förbättra processer och främja en kultur av kontinuerlig förbättring.",
    cta: {
      primary: { label: "Kontakta mig", href: "#contact" },
      secondary: { label: "Visa uppdrag", href: "#assignments" },
    },
    stats: [
      { value: "25+", label: "Års erfarenhet" },
      { value: "50+", label: "Team coachade" },
      { value: "ICP-ACC", label: "Certifierad" },
    ],
  },

  about: {
    title: "Om mig",
    subtitle: "Dennis Rijkers, Scrum Master & Agile Coach",
    intro:
      "Som Scrum Master fokuserar jag på att skapa en miljö där team kan excellera. Jag tror att de bästa resultaten uppstår när team känner ägarskap, hinder löses snabbt och det finns utrymme för experiment och lärande.",
    approach: {
      title: "Mitt arbetssätt",
      description:
        "Jag arbetar utifrån Scrum-värderingarna: engagemang, fokus, öppenhet, respekt och mod. Inte som en checklista, utan som en kompass för dagliga beslut. Min roll är tjänande: jag hjälper teamet, Product Owner och organisationen att tillämpa Scrum effektivt.",
    },
    values: [
      {
        title: "Tjänande ledarskap",
        description: "Teamet står i centrum. Min roll är att facilitera, inte diktera.",
        icon: "Users",
      },
      {
        title: "Kontinuerlig förbättring",
        description: "Varje sprint är en möjlighet att bli bättre som team.",
        icon: "Rocket",
      },
      {
        title: "Transparens",
        description: "Öppenhet om framsteg, problem och beroenden.",
        icon: "Search",
      },
      {
        title: "Pragmatisk",
        description: "Scrum är ett medel, inte ett mål. Det handlar om att leverera värde.",
        icon: "Target",
      },
    ],
  },

  services: [
    {
      id: "scrum-facilitation",
      title: "Scrum Facilitering",
      description:
        "Effektiv Sprint Planning, Daily Scrums, Reviews och Retrospectives som ger teamet energi istället för att dränera det.",
      icon: "Calendar",
      deliverables: [
        "Sprint Planning facilitering",
        "Effektiva Daily Scrums",
        "Review & Demo vägledning",
        "Retrospective tekniker",
      ],
    },
    {
      id: "impediment-removal",
      title: "Hinderhantering",
      description:
        "Aktivt identifiera och lösa blockerare som hindrar teamet. Från teknisk skuld till organisatoriska hinder.",
      icon: "Zap",
      deliverables: [
        "Identifiering av blockerare",
        "Cross-team koordinering",
        "Eskaleringshantering",
        "Beroendehantering",
      ],
    },
    {
      id: "team-coaching",
      title: "Teamcoaching",
      description:
        "Hjälpa teamet växa i självorganisering, samarbete och teknisk excellens.",
      icon: "Users",
      deliverables: [
        "Förbättring av teamdynamik",
        "Konfliktlösning",
        "Optimering av Definition of Done",
        "Velocity och förutsägbarhet",
      ],
    },
    {
      id: "po-support",
      title: "Product Owner-stöd",
      description:
        "Stötta Product Owner med backlog-hantering, intressentkommunikation och värdemaximering.",
      icon: "Target",
      deliverables: [
        "Backlog refinement",
        "User story-skrivning",
        "Intressentjustering",
        "Releaseplanering",
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
      title: "Observera",
      description:
        "Jag börjar med att lyssna och observera. Hur arbetar teamet nu? Vilka är smärtpunkterna? Var finns möjligheterna?",
      icon: "Search",
    },
    {
      step: 2,
      title: "Facilitera",
      description:
        "Strukturera och facilitera ceremonier så att de tillför värde. Inte mer tid, utan bättre tid.",
      icon: "Calendar",
    },
    {
      step: 3,
      title: "Coacha",
      description:
        "Hjälpa teamet växa i självorganisering. Ställa frågor istället för att ge svar.",
      icon: "Users",
    },
    {
      step: 4,
      title: "Skydda",
      description:
        "Skydda teamet från störningar och aktivt ta bort hinder.",
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
    title: "Kontakt",
    subtitle: "Låt oss prata",
    description:
      "Letar du efter en erfaren Scrum Master för ditt team? Kontakta mig för ett introduktionssamtal.",
    formFields: {
      name: "Namn",
      email: "E-postadress",
      company: "Organisation",
      subject: "Ämne",
      message: "Ditt meddelande",
      submit: "Skicka meddelande",
    },
    subjects: [
      "Scrum Master-uppdrag",
      "Teamcoaching",
      "Agile assessment",
      "Allmän fråga",
    ],
  },

  footer: {
    tagline: "Scrum Master & Agile Facilitator",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Nederländerna",
  },
};
