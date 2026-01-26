import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "en",
  persona: "agile-coach",

  contact: {
    name: "Dennis Rijkers",
    title: "Enterprise Agile Coach",
    email: "info@drpventures.nl",
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
    label: "Enterprise Agile Coach",
    headline: "Dennis Rijkers",
    subline: "Agile Coach & Transformation Expert",
    description:
      "I guide organizations through Agile transformations at scale. From team-level coaching to enterprise adoption — with focus on sustainable change and measurable results.",
    cta: {
      primary: { label: "Get in touch", href: "#contact" },
      secondary: { label: "View assignments", href: "#assignments" },
    },
    stats: [
      { value: "20+", label: "Years experience" },
      { value: "SAFe", label: "SPC Certified" },
      { value: "Enterprise", label: "Transformations" },
    ],
  },

  about: {
    title: "About me",
    subtitle: "Dennis Rijkers — Enterprise Agile Coach",
    intro:
      "With over fifteen years of experience in Agile and change management, I help organizations make the transition from 'doing Agile' to 'being Agile'. My focus is on sustainable change that persists when the coach leaves.",
    approach: {
      title: "My approach",
      description:
        "I believe in pragmatic Agile — no dogmas, but principles that work in the specific context of the organization. SAFe, LeSS, or Scrum are means, not ends. It's about delivering value and helping people grow.",
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
        "Practical implementation of the Scaled Agile Framework. No copy-paste, but tailored for the organization.",
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
      id: "ing",
      organization: "ING",
      role: "Enterprise Agile Coach",
      description:
        "Part of the central Agile Coaching team during the 'Think Forward' transformation. Coaching tribes and ARTs in the transition to a fully Agile organization.",
      sector: "financieel",
    },
    {
      id: "alfen",
      organization: "Alfen",
      role: "Agile Transformation Lead",
      description:
        "Leading role in the Agile transformation of the IT organization. From project-based to product-based working with value streams and dedicated teams.",
      sector: "energie",
    },
    {
      id: "alliander",
      organization: "Alliander",
      role: "Agile Coach – Value Stream Level",
      description:
        "Coaching at value stream level within the grid operator. Focus on end-to-end flow and cross-team collaboration.",
      sector: "energie",
    },
    {
      id: "pggm",
      organization: "PGGM",
      role: "Agile Coach – IT Organization",
      description:
        "Guiding the Agile journey within the pension administrator. Finding balance between stability and agility.",
      sector: "financieel",
    },
    {
      id: "dpg-media",
      organization: "DPG Media",
      role: "Agile Coach",
      description:
        "Supporting the integration of teams from different labels under a shared Agile way of working.",
      sector: "media",
    },
  ],

  experience: [
    {
      id: "drp-ventures",
      title: "Principal Consultant",
      organization: "DRP Ventures",
      period: "2020 - present",
      description:
        "Enterprise Agile Coaching for large organizations in finance, energy, and government. Focus on sustainable transformation.",
      type: "current",
    },
    {
      id: "pink-pollos",
      title: "Founder & Lead Coach",
      organization: "Pink Pollos",
      period: "2008 - 2020",
      description:
        "Founded and grew an Agile consultancy into a team of coaches. Guided dozens of enterprise transformations.",
      type: "venture",
    },
    {
      id: "certifications",
      title: "Certifications",
      organization: "Scaled Agile, Scrum.org",
      description:
        "SAFe SPC (Implementing SAFe), SAFe Agilist, PSM II, Professional Coaching certifications.",
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
    tagline: "Enterprise Agile Coach",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Netherlands",
  },
};
