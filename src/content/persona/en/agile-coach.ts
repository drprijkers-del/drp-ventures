import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "en",
  persona: "agile-coach",

  contact: {
    name: "Dennis Rijkers",
    title: "Agile Coach & Transformation Consultant",
    email: "info@drpventures.org",
    phone: "+31 6 28 975 904",
    linkedin: "https://linkedin.com/in/dennisrijkers",
    location: "Amersfoort, Netherlands",
  },

  sectionLabels: {
    about: "About",
    services: "Services",
    assignments: "Featured assignments",
    experience: "Career",
    process: "Approach",
    clients: "Clients",
    contact: "Contact",
  },

  hero: {
    label: "Agile Coach & Transformation Consultant",
    headline: "Dennis Rijkers",
    subline: "Agile Coach & Transformation Consultant",
    description:
      "I guide organizations through Agile transformations at scale. From team-level coaching to enterprise adoption, with focus on sustainable change and measurable results.",
    cta: {
      primary: { label: "Get in touch", href: "#contact" },
      secondary: { label: "View assignments", href: "#assignments" },
    },
    stats: [
      { value: "25+", label: "Years experience" },
      { value: "SAFe & LeSS", label: "Certified" },
      { value: "Enterprise", label: "Transformations" },
    ],
  },

  about: {
    title: "About me",
    subtitle: "Dennis Rijkers, Agile Coach & Transformation Consultant",
    intro:
      "With eighteen years of experience in Agile and change management, I help organizations make the transition from 'doing Agile' to 'being Agile'. My focus is on sustainable change that persists when the coach leaves.",
    approach: {
      title: "My approach",
      description:
        "I believe in pragmatic Agile: no dogmas, but principles that work in the specific context of the organization. SAFe, LeSS, or Scrum are means, not ends. It's about delivering value and helping people grow.",
    },
    values: [
      {
        title: "Systems thinking",
        description: "Understanding change in the context of the entire system.",
        icon: "Layers",
      },
      {
        title: "Coaching mindset",
        description: "Helping discover rather than telling what to do.",
        icon: "Users",
      },
      {
        title: "Measurable results",
        description: "Agile metrics that matter: flow, quality, value.",
        icon: "Rocket",
      },
      {
        title: "Culture change",
        description: "Structure follows culture. Both must change together.",
        icon: "Handshake",
      },
    ],
  },

  services: [
    {
      id: "enterprise-coaching",
      title: "Enterprise Agile Coaching",
      description:
        "Guidance for large-scale Agile transformations. From assessment to implementation and sustainment.",
      icon: "Building",
      deliverables: [
        "Transformation roadmap",
        "Leadership coaching",
        "Change management",
        "Metrics & reporting",
      ],
    },
    {
      id: "safe-implementation",
      title: "SAFe Implementation",
      description:
        "Practical implementation of the Scaled Agile Framework, or LeSS where it fits better. No copy-paste, but tailored for the organization.",
      icon: "Layers",
      deliverables: [
        "ART launch & support",
        "PI Planning facilitation",
        "Portfolio management",
        "Value stream mapping",
      ],
    },
    {
      id: "team-coaching",
      title: "Team & SM Coaching",
      description:
        "Coaching teams and Scrum Masters to a higher level of maturity and effectiveness.",
      icon: "Users",
      deliverables: [
        "Team assessments",
        "SM/PO coaching",
        "Retrospective facilitation",
        "Capability building",
      ],
    },
    {
      id: "agile-assessment",
      title: "Agile Assessment",
      description:
        "Independent assessment of current Agile maturity with concrete improvement recommendations.",
      icon: "Search",
      deliverables: [
        "Maturity assessment",
        "Gap analysis",
        "Prioritized roadmap",
        "Quick wins identification",
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
      title: "Assess",
      description:
        "Thorough analysis of the current situation: culture, processes, structure, and challenges.",
      icon: "Search",
    },
    {
      step: 2,
      title: "Design",
      description:
        "Together design a transformation approach that fits the organization and its ambitions.",
      icon: "Target",
    },
    {
      step: 3,
      title: "Implement",
      description:
        "Hands-on guidance during implementation. Training, coaching, and facilitation.",
      icon: "Zap",
    },
    {
      step: 4,
      title: "Sustain",
      description:
        "Anchoring the change. Transfer ownership and build internal capability.",
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
    subtitle: "Let's connect",
    description:
      "Is your organization facing an Agile transformation? I'd be happy to discuss the possibilities.",
    formFields: {
      name: "Name",
      email: "Email address",
      company: "Organization",
      subject: "Subject",
      message: "Your message",
      submit: "Send message",
    },
    subjects: [
      "Agile transformation",
      "SAFe implementation",
      "Coaching assignment",
      "Assessment request",
      "General inquiry",
    ],
  },

  footer: {
    tagline: "Agile Coach & Transformation Consultant",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Netherlands",
  },
};
