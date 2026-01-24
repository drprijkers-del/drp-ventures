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
  name: "Dennis Rijkers",
  tagline: "Transformatie & Leiderschap",
  description:
    "Senior transformation consultant gespecialiseerd in organisatieverandering, leiderschap en Agile op schaal. Begeleiding van complexe transities voor enterprise organisaties.",
  url: "https://drpventures.nl",
  email: "info@pinkpollos.com",
  phone: "+31 6 28 975 904",
  kvk: "",
  btw: "",
  address: {
    street: "",
    city: "Amersfoort",
    zip: "",
    country: "Nederland",
  },
  social: {
    linkedin: "https://linkedin.com/in/dennisrijkers",
    github: "",
    twitter: "",
  },
};

// ============================================
// NAVIGATION
// ============================================

export const navigation: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Over", href: "#about" },
  { label: "Diensten", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Ervaring", href: "#experience" },
  { label: "Werkwijze", href: "#process" },
  { label: "Contact", href: "#contact" },
];

// ============================================
// HERO SECTION
// ============================================

export const hero: HeroContent = {
  headline: "Transformatie met richting",
  subline:
    "Ik begeleid organisaties door complexe verandertrajecten. Van strategie tot uitvoering, van boardroom tot werkvloer.",
  cta: {
    primary: { label: "Neem contact op", href: "#contact" },
    secondary: { label: "Meer over mij", href: "#about" },
  },
  stats: [
    { value: "20+", label: "Jaar ervaring" },
    { value: "Enterprise", label: "Financieel, energie, overheid" },
    { value: "Agile", label: "Leiderschap op schaal" },
  ],
};

// ============================================
// ABOUT SECTION
// ============================================

export const about: AboutContent = {
  title: "Dennis Rijkers",
  subtitle: "Senior Transformation Consultant",
  intro:
    "Met een achtergrond in verandermanagement en ruim twee decennia ervaring als consultant en ondernemer, begeleid ik organisaties bij fundamentele transformaties. Mijn werk bevindt zich op het snijvlak van business en IT — waar strategische ambities vertaald worden naar werkende praktijk.",
  mission: {
    title: "Aanpak",
    description:
      "Ik geloof in een pragmatische benadering. Geen methodologische dogma's, maar oplossingen die passen bij de context van de organisatie. Complexe vraagstukken ontleed ik systematisch tot behapbare onderdelen, wat de besluitvorming versnelt en teams in beweging brengt.",
  },
  values: [
    {
      title: "Verbinden",
      description: "Partijen samenbrengen, synergieën creëren en samenwerking stimuleren.",
      icon: "Users",
    },
    {
      title: "Helderheid",
      description: "Complexe uitdagingen systematisch ontrafelen naar beheersbare onderdelen.",
      icon: "Target",
    },
    {
      title: "Pragmatisch",
      description: "Concrete resultaten realiseren met een participatieve rol waar dat waarde toevoegt.",
      icon: "Zap",
    },
    {
      title: "Integriteit",
      description: "Heldere communicatie en adaptief leiderschap als fundament.",
      icon: "Shield",
    },
  ],
};

// ============================================
// SERVICES
// ============================================

export const services: Service[] = [
  {
    id: "organisatie-transformatie",
    title: "Organisatie & Transformatie",
    description:
      "Begeleiding bij het herinrichten van afdelingen, het opzetten van nieuwe teams en het vormgeven van aansturing. Van analyse tot implementatie, met oog voor zowel structuur als cultuur.",
    icon: "Building",
    features: [
      "Organisatieherontwerp",
      "Teamontwikkeling",
      "Verandermanagement",
      "Stakeholdermanagement",
    ],
  },
  {
    id: "agile-op-schaal",
    title: "Agile op Schaal",
    description:
      "Ondersteuning bij de invoering en doorontwikkeling van Agile werkwijzen in complexe omgevingen. Inclusief frameworks als SAFe en LeSS, afgestemd op de specifieke situatie.",
    icon: "Layers",
    features: [
      "SAFe & LeSS implementatie",
      "Agile coaching",
      "Scrum & Kanban",
      "Portfolio management",
    ],
  },
  {
    id: "leiderschapsontwikkeling",
    title: "Leiderschapsontwikkeling",
    description:
      "Coaching van management en leiderschapsteams in veranderende contexten. Gericht op effectieve besluitvorming, heldere communicatie en het creëren van eigenaarschap.",
    icon: "Users",
    features: [
      "Leiderschapscoaching",
      "Teamcoaching",
      "Facilitatie",
      "Besluitvormingsprocessen",
    ],
  },
  {
    id: "transitiebegeleiding",
    title: "Transitiebegeleiding",
    description:
      "Hands-on ondersteuning bij het doorvoeren van verandertrajecten. Van het inrichten van processen op value stream niveau tot het borgen van aansluiting met de bredere organisatie.",
    icon: "ArrowRight",
    features: [
      "Value stream inrichting",
      "Procesoptimalisatie",
      "Offshoring begeleiding",
      "Kennisoverdracht",
    ],
  },
];

// ============================================
// EXPERTISE / SKILLS
// ============================================

export const expertise: Skill[] = [
  { skill: "Verandermanagement", level: 95 },
  { skill: "Agile Coaching", level: 95 },
  { skill: "Leiderschapscoaching", level: 90 },
  { skill: "SAFe & LeSS", level: 90 },
  { skill: "Teamontwikkeling", level: 92 },
  { skill: "Stakeholdermanagement", level: 88 },
  { skill: "Facilitatie", level: 90 },
  { skill: "Portfolio Management", level: 85 },
];

// ============================================
// EXPERIENCE TIMELINE
// ============================================

export const experience: ExperienceItem[] = [
  {
    year: "2024 - heden",
    title: "Agile Team Manager IAM",
    company: "Jumbo Supermarkten (Hoofdkantoor)",
    description:
      "Aansturing van Identity & Access Management teams binnen het hoofdkantoor. Verantwoordelijk voor teamontwikkeling, Agile werkwijzen en de aansluiting op de bredere IT-organisatie.",
    type: "employment",
  },
  {
    year: "2008 - 2024",
    title: "Oprichter & Principal Consultant",
    company: "Pink Pollos",
    description:
      "Organisaties door complexe transities geleid binnen financiële sector, nutsbedrijven en media. Van het coachen van leiderschapsteams tot het faciliteren van Agile werkwijzen op team- en organisatieniveau.",
    type: "venture",
  },
  {
    year: "2009 - 2019",
    title: "Oprichter",
    company: "Lifebrander.nl",
    description:
      "Platform voor professionele online CV's met aanvullende diensten voor CV-revisie en LinkedIn-optimalisatie. Verantwoordelijk voor strategische leiding en productontwikkeling.",
    type: "venture",
  },
  {
    year: "2001 - 2008",
    title: "Business Consultant",
    company: "Yacht / Falanx / Jufidet",
    description:
      "Projecten gericht op het herstructureren van bedrijfsprocessen en IT-systemen binnen zorg, financiën en overheid. Basis gelegd voor latere specialisatie in verandermanagement.",
    type: "employment",
  },
];

// ============================================
// PORTFOLIO (Key Engagements)
// ============================================

export const portfolio: PortfolioItem[] = [
  {
    id: "alliander",
    title: "Alliander",
    category: "energie",
    description:
      "Herinrichting van een afdeling, opzetten van nieuwe teams en vormgeven van de managementaansturing.",
    image: "/images/portfolio/alliander.jpg",
    tags: ["Organisatieherontwerp", "Teamontwikkeling", "Agile"],
  },
  {
    id: "alfen",
    title: "Alfen",
    category: "energie",
    description:
      "Verantwoordelijk voor de transitie van een bedrijfsonderdeel, van teaminrichting tot Agile processen op value stream niveau.",
    image: "/images/portfolio/alfen.jpg",
    tags: ["Value Stream", "Agile Transitie", "Scaling"],
  },
  {
    id: "lvnl",
    title: "LVNL",
    category: "overheid",
    description:
      "In samenwerking met KPMG: begeleiding van een afdeling bij het inrichten van Agile werkwijzen en aansluiting op de bredere transitie.",
    image: "/images/portfolio/lvnl.jpg",
    tags: ["Agile Inrichting", "Transitie", "Samenwerking"],
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  { id: "all", label: "Alle opdrachten" },
  { id: "energie", label: "Energie" },
  { id: "overheid", label: "Overheid" },
  { id: "financieel", label: "Financieel" },
];

// ============================================
// PROCESS
// ============================================

export const process: ProcessStep[] = [
  {
    step: 1,
    title: "Analyse",
    description:
      "Grondige verkenning van de huidige situatie, stakeholders en onderliggende dynamiek. Geen aannames, maar een helder beeld van waar de organisatie staat.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Ontwerp",
    description:
      "Samen met de opdrachtgever vormgeven van de gewenste richting. Concrete doelen, heldere rolverdeling en een aanpak die past bij de organisatiecultuur.",
    icon: "Target",
  },
  {
    step: 3,
    title: "Implementatie",
    description:
      "Hands-on begeleiding bij de uitvoering. Teams opzetten, processen inrichten, mensen meenemen in de verandering.",
    icon: "Zap",
  },
  {
    step: 4,
    title: "Verankering",
    description:
      "Zorgen dat veranderingen beklijven. Eigenaarschap overdragen, competenties ontwikkelen en de organisatie zelfstandig verder laten bouwen.",
    icon: "CheckCircle",
  },
];

// ============================================
// BLOG (placeholder - kan later gevuld worden)
// ============================================

export const blog: BlogPost[] = [];

// ============================================
// CLIENTS
// ============================================

export const clients: Client[] = [
  { name: "Jumbo", logo: "/images/clients/jumbo.svg" },
  { name: "Alliander", logo: "/images/clients/alliander.svg" },
  { name: "Alfen", logo: "/images/clients/alfen.svg" },
  { name: "LVNL", logo: "/images/clients/lvnl.svg" },
  { name: "Enexis", logo: "/images/clients/enexis.svg" },
  { name: "ING", logo: "/images/clients/ing.svg" },
  { name: "Rabobank", logo: "/images/clients/rabobank.svg" },
  { name: "ABN AMRO", logo: "/images/clients/abnamro.svg" },
  { name: "UWV", logo: "/images/clients/uwv.svg" },
  { name: "Belastingdienst", logo: "/images/clients/belastingdienst.svg" },
  { name: "ASML", logo: "/images/clients/asml.svg" },
  { name: "Schiphol", logo: "/images/clients/schiphol.svg" },
  { name: "DPG Media", logo: "/images/clients/dpgmedia.svg" },
  { name: "PGGM", logo: "/images/clients/pggm.svg" },
];

// ============================================
// CONTACT
// ============================================

export const contact: ContactContent = {
  title: "Laten we kennismaken",
  subtitle: "Klaar voor een gesprek?",
  description:
    "Staat u voor een organisatieverandering of transitie? Ik ga graag het gesprek aan om te verkennen hoe ik van betekenis kan zijn.",
  formFields: {
    name: "Naam",
    email: "E-mailadres",
    company: "Organisatie",
    subject: "Onderwerp",
    message: "Uw bericht",
    submit: "Verstuur bericht",
  },
  subjects: [
    "Organisatie & Transformatie",
    "Agile op Schaal",
    "Leiderschapsontwikkeling",
    "Transitiebegeleiding",
    "Algemene vraag",
  ],
};

// ============================================
// FOOTER
// ============================================

export const footer: FooterContent = {
  tagline: "Transformatie met richting",
  copyright: `© ${new Date().getFullYear()} DRP Ventures BV. Alle rechten voorbehouden.`,
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Voorwaarden", href: "/terms" },
  ],
};
