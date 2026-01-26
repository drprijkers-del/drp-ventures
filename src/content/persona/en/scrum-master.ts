import { PersonaContent } from "../types";

export const content: PersonaContent = {
  language: "en",
  persona: "scrum-master",

  contact: {
    name: "Dennis Rijkers",
    title: "Senior Scrum Master",
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
    label: "Senior Scrum Master",
    headline: "Dennis Rijkers",
    subline: "Scrum Master & Agile Facilitator",
    description:
      "I help development teams reach their full potential. By removing impediments, improving processes, and facilitating a culture of continuous improvement.",
    cta: {
      primary: { label: "Get in touch", href: "#contact" },
      secondary: { label: "View assignments", href: "#assignments" },
    },
    stats: [
      { value: "20+", label: "Years experience" },
      { value: "50+", label: "Teams coached" },
      { value: "PSM II", label: "Certified" },
    ],
  },

  about: {
    title: "About me",
    subtitle: "Dennis Rijkers — Senior Scrum Master",
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
      organization: "Jumbo Supermarkets",
      role: "Senior Scrum Master – IAM Teams",
      description:
        "Guiding multiple Scrum teams within Identity & Access Management. Focus on team development, sprint health, and cross-team alignment.",
      sector: "retail",
    },
    {
      id: "ing",
      organization: "ING",
      role: "Scrum Master – Core Banking",
      description:
        "Scrum Master for a team in the core banking transformation. Responsible for facilitating ceremonies and removing organizational impediments.",
      sector: "financieel",
    },
    {
      id: "rabobank",
      organization: "Rabobank",
      role: "Scrum Master – Digital Channels",
      description:
        "Guiding teams working on digital customer channels. Focus on velocity improvement and stakeholder management.",
      sector: "financieel",
    },
    {
      id: "alliander",
      organization: "Alliander",
      role: "Scrum Master – Smart Grid",
      description:
        "Scrum Master for teams in the smart grid domain. Challenge: combining technically complex subject matter with Agile practices.",
      sector: "energie",
    },
  ],

  experience: [
    {
      id: "drp-ventures",
      title: "Principal Consultant",
      organization: "DRP Ventures",
      period: "2020 - present",
      description:
        "Through DRP Ventures, I deliver Scrum Master services to enterprise organizations. Focus on complex IT environments and scalable Agile practices.",
      type: "current",
    },
    {
      id: "pink-pollos",
      title: "Founder & Scrum Master",
      organization: "Pink Pollos",
      period: "2008 - 2020",
      description:
        "Founded as an Agile consultancy. Guided dozens of teams at banks, insurers, and energy companies.",
      type: "venture",
    },
    {
      id: "certified",
      title: "Certifications",
      organization: "Scrum.org",
      description:
        "PSM II (Professional Scrum Master), PSM I, PSPO I. Supplemented with SAFe certifications for enterprise contexts.",
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
