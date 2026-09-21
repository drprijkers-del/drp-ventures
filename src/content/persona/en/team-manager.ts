import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "en",
  persona: "team-manager",

  contact: {
    name: "Dennis Rijkers",
    title: "Interim Engineering Lead",
    email: "info@drpventures.nl",
    phone: "+31 6 28 975 904",
    linkedin: "https://linkedin.com/in/dennisrijkers",
    location: "Amersfoort, Netherlands",
  },

  sectionLabels: {
    about: "About",
    services: "Expertise",
    assignments: "Featured assignments",
    experience: "Career",
    process: "Approach",
    clients: "Clients",
    contact: "Contact",
  },

  hero: {
    label: "Interim Engineering Lead",
    headline: "Dennis Rijkers",
    subline: "Interim Engineering Lead",
    description:
      "I combine people management with Agile leadership. Focus on developing people, building high-performing teams, and creating a culture of ownership and growth.",
    cta: {
      primary: { label: "Get in touch", href: "#contact" },
      secondary: { label: "View assignments", href: "#assignments" },
    },
    stats: [
      { value: "25+", label: "Years experience" },
      { value: "100+", label: "People coached" },
      { value: "Hands-on", label: "Leadership" },
    ],
  },

  about: {
    title: "About me",
    subtitle: "Dennis Rijkers, Interim Engineering Lead",
    intro:
      "As a Team Manager, I believe the best results come from teams that feel ownership and have room to grow. My role is creating those conditions: clear goals, psychological safety, and continuous development.",
    approach: {
      title: "My approach",
      description:
        "I combine modern people practices with Agile principles. No annual performance reviews but continuous feedback. No top-down steering but shared leadership. The result: motivated teams that take ownership.",
    },
    values: [
      {
        title: "People First",
        description: "Investing in people yields the best results.",
        icon: "Handshake",
      },
      {
        title: "Ownership",
        description: "Teams that feel ownership perform better.",
        icon: "Target",
      },
      {
        title: "Continuous growth",
        description: "Learning and development is a continuous process.",
        icon: "Rocket",
      },
      {
        title: "Connecting",
        description: "Building bridges between teams, management, and stakeholders.",
        icon: "Handshake",
      },
    ],
  },

  services: [
    {
      id: "people-management",
      title: "People Management",
      description:
        "Full people management responsibility: from hiring to development, from feedback to career planning.",
      icon: "Users",
      deliverables: [
        "1-on-1 conversations",
        "Performance management",
        "Career development",
        "Team composition",
      ],
    },
    {
      id: "team-building",
      title: "Team Building",
      description:
        "Building and developing high-performing teams. From new teams to transforming existing groups.",
      icon: "Building",
      deliverables: [
        "Team forming & norming",
        "Culture development",
        "Role allocation & ownership",
        "Team health monitoring",
      ],
    },
    {
      id: "stakeholder-mgmt",
      title: "Stakeholder Management",
      description:
        "Effective communication and alignment with stakeholders at all levels in the organization.",
      icon: "Handshake",
      deliverables: [
        "Expectation management",
        "Escalation handling",
        "Status reporting",
        "Cross-team coordination",
      ],
    },
    {
      id: "delivery-ownership",
      title: "Delivery Ownership",
      description:
        "End responsibility for team delivery. Focus on predictability, quality, and value.",
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
      title: "Connect",
      description:
        "1-on-1s with all team members. Understanding who they are, what drives them, and where they want to go.",
      icon: "Users",
    },
    {
      step: 2,
      title: "Stabilize",
      description:
        "Create clarity: roles, expectations, ways of working. Build psychological safety.",
      icon: "Shield",
    },
    {
      step: 3,
      title: "Develop",
      description:
        "Invest in growth: training, coaching, stretch assignments. Help people reach their potential.",
      icon: "Rocket",
    },
    {
      step: 4,
      title: "Transfer",
      description:
        "Transfer ownership to the team and potentially a permanent manager. My goal is to become redundant.",
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
    subtitle: "Let's connect",
    description:
      "Looking for an interim Team Manager or need support with team development? Get in touch.",
    formFields: {
      name: "Name",
      email: "Email address",
      company: "Organization",
      subject: "Subject",
      message: "Your message",
      submit: "Send message",
    },
    subjects: [
      "Interim Team Manager",
      "Team coaching",
      "Leadership development",
      "General inquiry",
    ],
  },

  footer: {
    tagline: "Interim Engineering Lead",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Netherlands",
  },
};
