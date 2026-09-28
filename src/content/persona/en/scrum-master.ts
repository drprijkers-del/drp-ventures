import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "en",
  persona: "scrum-master",

  contact: {
    name: "Dennis Rijkers",
    title: "Scrum Master & Agile Coach",
    email: "dennis@drpventures.org",
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
    label: "Scrum Master & Agile Coach",
    headline: "Dennis Rijkers",
    subline: "Scrum Master & Agile Coach",
    description:
      "I help development teams reach their full potential. By removing impediments, improving processes, and facilitating a culture of continuous improvement.",
    cta: {
      primary: { label: "Get in touch", href: "#contact" },
      secondary: { label: "View assignments", href: "#assignments" },
    },
    stats: [
      { value: "25+", label: "Years experience" },
      { value: "50+", label: "Teams coached" },
      { value: "ICP-ACC", label: "Certified" },
    ],
  },

  about: {
    title: "About me",
    subtitle: "Dennis Rijkers, Scrum Master & Agile Coach",
    intro:
      "As a Scrum Master, my focus is on creating an environment where teams can excel. I believe the best results come when teams feel ownership, impediments are resolved quickly, and there's room for experimentation and learning.",
    approach: {
      title: "My approach",
      description:
        "I work from the Scrum values: commitment, focus, openness, respect, and courage. Not as a checklist, but as a compass for daily decisions. My role is servant: I help the team, Product Owner, and organization apply Scrum effectively.",
    },
    values: [
      {
        title: "Servant Leadership",
        description: "The team is central. My role is to facilitate, not dictate.",
        icon: "Users",
      },
      {
        title: "Continuous Improvement",
        description: "Every sprint is an opportunity to improve as a team.",
        icon: "Rocket",
      },
      {
        title: "Transparency",
        description: "Openness about progress, problems, and dependencies.",
        icon: "Search",
      },
      {
        title: "Pragmatic",
        description: "Scrum is a means, not an end. It's about delivering value.",
        icon: "Target",
      },
    ],
  },

  services: [
    {
      id: "scrum-facilitation",
      title: "Scrum Facilitation",
      description:
        "Effective Sprint Planning, Daily Scrums, Reviews, and Retrospectives that energize the team rather than drain them.",
      icon: "Calendar",
      deliverables: [
        "Sprint Planning facilitation",
        "Effective Daily Scrums",
        "Review & Demo guidance",
        "Retrospective techniques",
      ],
    },
    {
      id: "impediment-removal",
      title: "Impediment Removal",
      description:
        "Actively identifying and resolving blockers that hinder the team. From technical debt to organizational obstacles.",
      icon: "Zap",
      deliverables: [
        "Blocker identification",
        "Cross-team coordination",
        "Escalation management",
        "Dependency tracking",
      ],
    },
    {
      id: "team-coaching",
      title: "Team Coaching",
      description:
        "Helping the team grow in self-organization, collaboration, and technical excellence.",
      icon: "Users",
      deliverables: [
        "Team dynamics improvement",
        "Conflict resolution",
        "Definition of Done optimization",
        "Velocity and predictability",
      ],
    },
    {
      id: "po-support",
      title: "Product Owner Support",
      description:
        "Supporting the Product Owner with backlog management, stakeholder communication, and value maximization.",
      icon: "Target",
      deliverables: [
        "Backlog refinement",
        "User story writing",
        "Stakeholder alignment",
        "Release planning",
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
      title: "Observe",
      description:
        "I start by listening and observing. How does the team work now? What are the pain points? Where are the opportunities?",
      icon: "Search",
    },
    {
      step: 2,
      title: "Facilitate",
      description:
        "Structure and facilitate ceremonies so they add value. Not more time, but better time.",
      icon: "Calendar",
    },
    {
      step: 3,
      title: "Coach",
      description:
        "Help the team grow in self-organization. Ask questions instead of giving answers.",
      icon: "Users",
    },
    {
      step: 4,
      title: "Protect",
      description:
        "Shield the team from disruptions and actively remove impediments.",
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
    title: "Contact",
    subtitle: "Let's connect",
    description:
      "Looking for an experienced Scrum Master for your team? Get in touch for an introductory conversation.",
    formFields: {
      name: "Name",
      email: "Email address",
      company: "Organization",
      subject: "Subject",
      message: "Your message",
      submit: "Send message",
    },
    subjects: [
      "Scrum Master assignment",
      "Team coaching",
      "Agile assessment",
      "General inquiry",
    ],
  },

  footer: {
    tagline: "Scrum Master & Agile Facilitator",
    copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
    legal: "Amersfoort, Netherlands",
  },
};
