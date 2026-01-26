import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "en",
  persona: "team-manager",

  contact: {
    name: "Dennis Rijkers",
    title: "Agile Team Manager",
    email: "info@drpventures.nl",
    phone: "+31 6 28 975 904",
    linkedin: "https://linkedin.com/in/dennisrijkers",
    location: "Amersfoort, Netherlands",
  },

  sectionLabels: {
    about: "About",
    services: "Expertise",
    assignments: "Assignments",
    experience: "Career",
    process: "Approach",
    clients: "Clients",
    contact: "Contact",
  },

  hero: {
    label: "Agile Team Manager",
    headline: "Dennis Rijkers",
    subline: "Team Manager & People Lead",
    description:
      "I combine people management with Agile leadership. Focus on developing people, building high-performing teams, and creating a culture of ownership and growth.",
    cta: {
      primary: { label: "Get in touch", href: "#contact" },
      secondary: { label: "View assignments", href: "#assignments" },
    },
    stats: [
      { value: "20+", label: "Years experience" },
      { value: "100+", label: "People coached" },
      { value: "Hands-on", label: "Leadership" },
    ],
  },

  about: {
    title: "About me",
    subtitle: "Dennis Rijkers — Agile Team Manager",
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
      organization: "Jumbo Supermarkets",
      role: "Agile Team Manager – IAM",
      description:
        "Team Manager for multiple IAM teams. Responsible for 15+ engineers, their development, and the delivery of the IAM platform.",
      sector: "retail",
    },
    {
      id: "alliander",
      organization: "Alliander",
      role: "Interim Team Lead",
      description:
        "Interim Team Lead for a development team without a permanent manager. Focus on stability, clarity, and finding a permanent solution.",
      sector: "energie",
    },
    {
      id: "ing",
      organization: "ING",
      role: "Chapter Lead",
      description:
        "Chapter Lead in ING's Agile model. Responsible for the development of engineers spread across multiple squads.",
      sector: "financieel",
    },
    {
      id: "dpg",
      organization: "DPG Media",
      role: "Engineering Manager",
      description:
        "Engineering Manager for teams working on content management systems. Combination of people management and technical guidance.",
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
        "Interim Team Management assignments at enterprise organizations. Focus on stabilizing and developing engineering teams.",
      type: "current",
    },
    {
      id: "pink-pollos",
      title: "Managing Director",
      organization: "Pink Pollos",
      period: "2008 - 2020",
      description:
        "Besides consulting, also responsible for the own team. People management combined with business development.",
      type: "venture",
    },
    {
      id: "background",
      title: "Management Education",
      organization: "MBA & HEAO",
      description:
        "MBA with focus on leadership and change management. Supplemented with coaching certifications and continuous development.",
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
    tagline: "Agile Team Manager",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Netherlands",
  },
};
