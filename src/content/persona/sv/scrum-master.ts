import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "sv",
  persona: "scrum-master",

  contact: {
    name: "Dennis Rijkers",
    title: "Senior Scrum Master",
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
    label: "Senior Scrum Master",
    headline: "Dennis Rijkers",
    subline: "Scrum Master & Agile Facilitator",
    description:
      "Jag hjälper utvecklingsteam att nå sin fulla potential. Genom att ta bort hinder, förbättra processer och främja en kultur av kontinuerlig förbättring.",
    cta: {
      primary: { label: "Kontakta mig", href: "#contact" },
      secondary: { label: "Visa uppdrag", href: "#assignments" },
    },
    stats: [
      { value: "20+", label: "Års erfarenhet" },
      { value: "50+", label: "Team coachade" },
      { value: "PSM II", label: "Certifierad" },
    ],
  },

  about: {
    title: "Om mig",
    subtitle: "Dennis Rijkers — Senior Scrum Master",
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
      organization: "Jumbo Supermarkets",
      role: "Senior Scrum Master – IAM Teams",
      description:
        "Vägledning av flera Scrum-team inom Identity & Access Management. Fokus på teamutveckling, sprint-hälsa och cross-team-alignment.",
      sector: "retail",
    },
    {
      id: "ing",
      organization: "ING",
      role: "Scrum Master – Core Banking",
      description:
        "Scrum Master för ett team i core banking-transformationen. Ansvarig för att facilitera ceremonier och ta bort organisatoriska hinder.",
      sector: "financieel",
    },
    {
      id: "rabobank",
      organization: "Rabobank",
      role: "Scrum Master – Digital Channels",
      description:
        "Vägledning av team som arbetade med digitala kundkanaler. Fokus på förbättring av velocity och intressenthantering.",
      sector: "financieel",
    },
    {
      id: "alliander",
      organization: "Alliander",
      role: "Scrum Master – Smart Grid",
      description:
        "Scrum Master för team inom smart grid-domänen. Utmaning: kombinera tekniskt komplex materia med Agila arbetssätt.",
      sector: "energie",
    },
  ],

  experience: [
    {
      id: "drp-ventures",
      title: "Principal Consultant",
      organization: "DRP Ventures",
      period: "2020 - nuvarande",
      description:
        "Genom DRP Ventures levererar jag Scrum Master-tjänster till enterprise-organisationer. Fokus på komplexa IT-miljöer och skalbara Agila praktiker.",
      type: "current",
    },
    {
      id: "pink-pollos",
      title: "Grundare & Scrum Master",
      organization: "Pink Pollos",
      period: "2008 - 2020",
      description:
        "Grundade som en Agile-konsultfirma. Väglett dussintals team hos banker, försäkringsbolag och energiföretag.",
      type: "venture",
    },
    {
      id: "certified",
      title: "Certifieringar",
      organization: "Scrum.org",
      description:
        "PSM II (Professional Scrum Master), PSM I, PSPO I. Kompletterat med SAFe-certifieringar för enterprise-kontexter.",
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
