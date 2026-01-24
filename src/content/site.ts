// ============================================
// DRP Ventures BV - Central Content File
// TypeScript types + alle content data
// ============================================

// ============================================
// TYPES
// ============================================

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  kvk: string;
  btw: string;
  address: {
    street: string;
    city: string;
    zip: string;
    country: string;
  };
  social: {
    linkedin: string;
    github: string;
    twitter: string;
  };
}

export interface HeroContent {
  headline: string;
  subline: string;
  cta: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  stats: Array<{ value: string; label: string }>;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  intro: string;
  mission: {
    title: string;
    description: string;
  };
  values: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Skill {
  skill: string;
  level: number;
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "venture" | "employment";
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  stats?: Record<string, string>;
}

export interface PortfolioCategory {
  id: string;
  label: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  description: string;
  formFields: {
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
    submit: string;
  };
  subjects: string[];
}

export interface FooterContent {
  tagline: string;
  copyright: string;
  links: Array<{ label: string; href: string }>;
}

// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig: SiteConfig = {
  name: "DRP Ventures BV",
  tagline: "Holding & Ventures • Freelance Dienstverlening",
  description:
    "DRP Ventures is een Nederlandse holding gespecialiseerd in ventures, investeringen en high-end freelance dienstverlening op het gebied van software development, consultancy en digitale transformatie.",
  url: "https://drpventures.nl",
  email: "info@drpventures.nl",
  phone: "+31 6 12345678",
  kvk: "12345678",
  btw: "NL123456789B01",
  address: {
    street: "Voorbeeldstraat 123",
    city: "Amsterdam",
    zip: "1012 AB",
    country: "Nederland",
  },
  social: {
    linkedin: "https://linkedin.com/company/drpventures",
    github: "https://github.com/drpventures",
    twitter: "https://twitter.com/drpventures",
  },
};

// ============================================
// NAVIGATION
// ============================================

export const navigation: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Over Ons", href: "#about" },
  { label: "Diensten", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Ervaring", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Proces", href: "#process" },
  { label: "Insights", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

// ============================================
// HERO SECTION
// ============================================

export const hero: HeroContent = {
  headline: "Bouwen aan de toekomst van digitale innovatie",
  subline:
    "DRP Ventures combineert strategisch inzicht met technische excellentie. Van venture building tot high-end software development — wij realiseren ambitieuze digitale projecten.",
  cta: {
    primary: { label: "Start een gesprek", href: "#contact" },
    secondary: { label: "Bekijk portfolio", href: "#portfolio" },
  },
  stats: [
    { value: "15+", label: "Jaar ervaring" },
    { value: "50+", label: "Projecten afgerond" },
    { value: "€2M+", label: "Ventures geïnvesteerd" },
    { value: "98%", label: "Klanttevredenheid" },
  ],
};

// ============================================
// ABOUT SECTION
// ============================================

export const about: AboutContent = {
  title: "Over DRP Ventures",
  subtitle: "Waar visie en vakmanschap samenkomen",
  intro:
    "DRP Ventures BV is een Nederlandse holding die ondernemerschap, investering en technologische expertise bundelt. Wij geloven in het bouwen van duurzame digitale oplossingen die echte waarde creëren.",
  mission: {
    title: "Onze Missie",
    description:
      "Het ondersteunen van ambitieuze ondernemers en organisaties bij het realiseren van hun digitale ambities door middel van strategisch partnerschap, kapitaal en hands-on expertise.",
  },
  values: [
    {
      title: "Excellentie",
      description: "Wij streven naar het hoogste niveau in alles wat we doen.",
      icon: "Trophy",
    },
    {
      title: "Integriteit",
      description: "Eerlijkheid en transparantie vormen de basis van elke samenwerking.",
      icon: "Shield",
    },
    {
      title: "Innovatie",
      description: "Continu verbeteren en vooroplopen in technologische ontwikkelingen.",
      icon: "Lightbulb",
    },
    {
      title: "Partnership",
      description: "Langdurige relaties opbouwen gebaseerd op wederzijds succes.",
      icon: "Handshake",
    },
  ],
};

// ============================================
// SERVICES
// ============================================

export const services: Service[] = [
  {
    id: "software-development",
    title: "Software Development",
    description:
      "Full-stack development van web- en mobiele applicaties met moderne technologieën. Van concept tot productie-ready oplossing.",
    icon: "Code",
    features: [
      "React / Next.js / TypeScript",
      "Node.js / Python / Go",
      "Cloud-native architectuur",
      "API development & integraties",
    ],
  },
  {
    id: "consultancy",
    title: "Technische Consultancy",
    description:
      "Strategisch advies op het gebied van architectuur, tech-stack keuzes en digitale transformatie trajecten.",
    icon: "MessageSquare",
    features: [
      "Architectuur reviews",
      "Technology assessments",
      "Team coaching & mentoring",
      "Due diligence voor investeerders",
    ],
  },
  {
    id: "venture-building",
    title: "Venture Building",
    description:
      "Van idee tot schaalbare startup. Wij bouwen mee aan veelbelovende ventures als technisch co-founder of lead developer.",
    icon: "Rocket",
    features: [
      "MVP development",
      "Product-market fit validatie",
      "Technische roadmap planning",
      "Investor-ready deliverables",
    ],
  },
  {
    id: "interim-management",
    title: "Interim CTO / Tech Lead",
    description:
      "Tijdelijke technische leiderschap voor scale-ups en organisaties in transitie. Hands-on en resultaatgericht.",
    icon: "Users",
    features: [
      "Team opbouw & hiring",
      "Proces optimalisatie",
      "Stakeholder management",
      "Kennisoverdracht & documentatie",
    ],
  },
];

// ============================================
// EXPERTISE / SKILLS
// ============================================

export const expertise: Skill[] = [
  { skill: "TypeScript / JavaScript", level: 95 },
  { skill: "React / Next.js", level: 92 },
  { skill: "Node.js / Backend", level: 90 },
  { skill: "Cloud (AWS / GCP / Azure)", level: 85 },
  { skill: "Python / Data Engineering", level: 80 },
  { skill: "DevOps / CI/CD", level: 82 },
  { skill: "System Architecture", level: 88 },
  { skill: "Team Leadership", level: 90 },
];

// ============================================
// EXPERIENCE TIMELINE
// ============================================

export const experience: ExperienceItem[] = [
  {
    year: "2024 - heden",
    title: "Founder & Managing Director",
    company: "DRP Ventures BV",
    description:
      "Holding voor ventures en high-end freelance dienstverlening. Focus op software development, consultancy en investeringen in tech startups.",
    type: "venture",
  },
  {
    year: "2022 - 2024",
    title: "Lead Software Architect",
    company: "Enterprise FinTech",
    description:
      "Technische leiding over een team van 12 engineers. Verantwoordelijk voor de modernisering van legacy systemen naar cloud-native microservices.",
    type: "employment",
  },
  {
    year: "2020 - 2022",
    title: "Co-Founder & CTO",
    company: "TechStartup X",
    description:
      "Mede-opgericht en technisch geleid van 0 naar Series A. Platform verwerkte €50M+ aan transacties per jaar.",
    type: "venture",
  },
];

// ============================================
// PORTFOLIO
// ============================================

export const portfolio: PortfolioItem[] = [
  {
    id: "fintech-platform",
    title: "FinTech Payment Platform",
    category: "fintech",
    description:
      "Schaalbaar betalingsplatform met real-time transactieverwerking. Microservices architectuur op Kubernetes.",
    image: "/images/portfolio/fintech.jpg",
    tags: ["TypeScript", "Node.js", "Kubernetes", "PostgreSQL"],
    stats: { users: "100K+", transactions: "€50M/jaar" },
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "saas",
    description:
      "Business intelligence dashboard met real-time data visualisaties en AI-powered insights.",
    image: "/images/portfolio/saas.jpg",
    tags: ["React", "Python", "TensorFlow", "BigQuery"],
    stats: { clients: "250+", datapoints: "1B+" },
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    category: "ecommerce",
    description:
      "Headless commerce oplossing met gepersonaliseerde shopping experiences en omnichannel integraties.",
    image: "/images/portfolio/ecommerce.jpg",
    tags: ["Next.js", "Shopify", "Algolia", "Stripe"],
    stats: { orders: "50K/maand", conversion: "+35%" },
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    category: "healthcare",
    description:
      "HIPAA-compliant patiënt portal met telemedicine functionaliteit en EHR integraties.",
    image: "/images/portfolio/healthcare.jpg",
    tags: ["React Native", "Node.js", "HL7 FHIR", "AWS"],
    stats: { patients: "75K+", appointments: "10K/maand" },
  },
  {
    id: "ai-tool",
    title: "AI Content Generator",
    category: "ai",
    description:
      "Enterprise tool voor geautomatiseerde content creatie met geavanceerde NLP en brand voice matching.",
    image: "/images/portfolio/ai.jpg",
    tags: ["Python", "OpenAI", "FastAPI", "Redis"],
    stats: { content: "1M+ items", accuracy: "94%" },
  },
  {
    id: "logistics-platform",
    title: "Logistics Management",
    category: "logistics",
    description:
      "End-to-end supply chain management platform met real-time tracking en route optimalisatie.",
    image: "/images/portfolio/logistics.jpg",
    tags: ["Vue.js", "Go", "MongoDB", "Google Maps"],
    stats: { shipments: "500K/jaar", efficiency: "+40%" },
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  { id: "all", label: "Alle projecten" },
  { id: "fintech", label: "FinTech" },
  { id: "saas", label: "SaaS" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "healthcare", label: "Healthcare" },
  { id: "ai", label: "AI / ML" },
  { id: "logistics", label: "Logistics" },
];

// ============================================
// PROCESS
// ============================================

export const process: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We starten met een grondige analyse van uw doelen, uitdagingen en technische vereisten. Dit resulteert in een helder projectplan.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Strategie",
    description:
      "Op basis van de discovery fase ontwikkelen we een technische strategie, architectuur en roadmap die past bij uw budget en timeline.",
    icon: "Target",
  },
  {
    step: 3,
    title: "Executie",
    description:
      "Agile development met wekelijkse sprints, continue feedback loops en transparante communicatie. Quality-first approach.",
    icon: "Zap",
  },
  {
    step: 4,
    title: "Lancering & Support",
    description:
      "Zorgvuldige deployment, monitoring setup en kennisoverdracht. Optioneel doorlopend onderhoud en optimalisatie.",
    icon: "CheckCircle",
  },
];

// ============================================
// BLOG
// ============================================

export const blog: BlogPost[] = [
  {
    id: "microservices-2024",
    title: "Microservices in 2024: Wanneer wel en wanneer niet",
    excerpt:
      "Een nuchtere kijk op microservices architectuur. Niet elke applicatie heeft ze nodig, maar wanneer zijn ze de juiste keuze?",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Architecture",
    image: "/images/blog/microservices.jpg",
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices voor Enterprise Projecten",
    excerpt:
      "Praktische tips en patterns voor het bouwen van onderhoudbare TypeScript codebases in grote teams.",
    date: "2024-01-08",
    readTime: "12 min",
    category: "Development",
    image: "/images/blog/typescript.jpg",
  },
  {
    id: "startup-tech-choices",
    title: "Tech Stack Keuzes voor Startups: Snelheid vs Schaalbaarheid",
    excerpt:
      "Hoe kies je de juiste technologieën als startup? Een framework voor het maken van pragmatische beslissingen.",
    date: "2023-12-20",
    readTime: "10 min",
    category: "Strategy",
    image: "/images/blog/startup.jpg",
  },
  {
    id: "ai-development-workflow",
    title: "AI-Assisted Development: Productiviteit verhogen zonder kwaliteit te verliezen",
    excerpt:
      "Hoe integreer je AI tools effectief in je development workflow? Praktische tips uit de praktijk.",
    date: "2023-12-10",
    readTime: "6 min",
    category: "Productivity",
    image: "/images/blog/ai-dev.jpg",
  },
];

// ============================================
// CLIENTS
// ============================================

export const clients: Client[] = [
  { name: "TechCorp", logo: "/images/clients/techcorp.svg" },
  { name: "FinanceHub", logo: "/images/clients/financehub.svg" },
  { name: "StartupX", logo: "/images/clients/startupx.svg" },
  { name: "Enterprise Co", logo: "/images/clients/enterprise.svg" },
];

// ============================================
// CONTACT
// ============================================

export const contact: ContactContent = {
  title: "Laten we samenwerken",
  subtitle: "Klaar om uw volgende project te bespreken?",
  description:
    "Of het nu gaat om een nieuw venture, een complex development project of strategisch advies — wij denken graag met u mee. Neem vrijblijvend contact op voor een kennismaking.",
  formFields: {
    name: "Naam",
    email: "E-mailadres",
    company: "Bedrijf (optioneel)",
    subject: "Onderwerp",
    message: "Uw bericht",
    submit: "Verstuur bericht",
  },
  subjects: [
    "Software Development",
    "Consultancy",
    "Venture Building",
    "Interim CTO",
    "Algemene vraag",
  ],
};

// ============================================
// FOOTER
// ============================================

export const footer: FooterContent = {
  tagline: "Bouwen aan digitale excellentie",
  copyright: `© ${new Date().getFullYear()} DRP Ventures BV. Alle rechten voorbehouden.`,
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Algemene Voorwaarden", href: "/terms" },
  ],
};
