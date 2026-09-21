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
  brandName: string;
  founder: string;
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
  label: string;
  headline: string;
  subline: string;
  description: string;
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
  background: {
    title: string;
    description: string;
  };
  approach: {
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
  deliverables: string[];
}

export interface ExpertiseBlock {
  id: string;
  title: string;
  description: string;
  areas: string[];
  icon: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  description: string;
  type: "current" | "venture" | "foundation";
}

export interface Assignment {
  id: string;
  organization: string;
  role: string;
  description: string;
  sector: "financieel" | "energie" | "overheid" | "retail" | "media" | "infrastructuur";
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Client {
  name: string;
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
  legal: string;
  links: Array<{ label: string; href: string }>;
}

// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig: SiteConfig = {
  name: "DRP Ventures",
  brandName: "DRP Ventures BV",
  founder: "Dennis Rijkers",
  tagline: "Transformatie & Leiderschap",
  description:
    "DRP Ventures ondersteunt organisaties bij complexe verandertrajecten. Van teamcoaching tot organisatieverandering, van Agile implementatie tot leiderschapsontwikkeling.",
  url: "https://drpventures.org",
  email: "info@drpventures.org",
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
  { label: "Over mij", href: "#about" },
  { label: "Inzetgebieden", href: "#services" },
  { label: "Opdrachten", href: "#assignments" },
  { label: "Loopbaan", href: "#experience" },
  { label: "Werkwijze", href: "#process" },
  { label: "Contact", href: "#contact" },
];

// ============================================
// HERO SECTION
// ============================================

export const hero: HeroContent = {
  label: "Transformatie & Leiderschap",
  headline: "DRP Ventures",
  subline: "Door Dennis Rijkers",
  description:
    "Ik begeleid organisaties door complexe verandertrajecten. Hands-on, pragmatisch en gericht op duurzaam resultaat — van strategie tot uitvoering.",
  cta: {
    primary: { label: "Neem contact op", href: "#contact" },
    secondary: { label: "Bekijk opdrachten", href: "#assignments" },
  },
  stats: [
    { value: "20+", label: "Jaar ervaring" },
    { value: "Enterprise", label: "Finance, energie, overheid" },
    { value: "Hands-on", label: "Van boardroom tot team" },
  ],
};

// ============================================
// ABOUT SECTION
// ============================================

export const about: AboutContent = {
  title: "Over mij",
  subtitle: "Dennis Rijkers — Transformatie Consultant",
  intro:
    "Met ruim twintig jaar ervaring in verandermanagement en organisatieontwikkeling help ik organisaties bij het realiseren van complexe transities. Mijn werk bevindt zich op het snijvlak van strategie en uitvoering — waar plannen werkelijkheid worden.",
  background: {
    title: "Achtergrond",
    description:
      "Mijn fundament ligt in verandermanagement: een MBA en HEAO-opleiding in dit vakgebied gaven mij de theoretische basis. Die heb ik aangevuld met een full-stack development opleiding (React, Next.js, TypeScript) — niet om developer te worden, maar om de taal van development teams te spreken en de realiteit van IT-trajecten te begrijpen.",
  },
  approach: {
    title: "Aanpak",
    description:
      "Ik geloof in pragmatiek boven methodologie. Frameworks als SAFe of Scrum zijn middelen, geen doel. Mijn rol is om organisaties te helpen vinden wat bij hen werkt — en dat vervolgens te implementeren met oog voor mensen, processen en resultaat.",
  },
  values: [
    {
      title: "Pragmatisch",
      description: "Geen dogma's, maar oplossingen die werken in de specifieke context.",
      icon: "Zap",
    },
    {
      title: "Hands-on",
      description: "Ik werk mét teams, niet alleen óver teams. Van boardroom tot werkvloer.",
      icon: "Users",
    },
    {
      title: "Resultaatgericht",
      description: "Verandering is geen doel op zich. Het gaat om meetbare verbetering.",
      icon: "Target",
    },
    {
      title: "Verbindend",
      description: "Bruggen bouwen tussen business en IT, tussen management en uitvoering.",
      icon: "Handshake",
    },
  ],
};

// ============================================
// SERVICES (INZETGEBIEDEN)
// ============================================

export const servicesSection = {
  label: "Inzetgebieden",
  title: "Waarvoor ik word ingeschakeld",
  description:
    "Afhankelijk van de situatie neem ik verschillende rollen aan — van coach tot interim manager, van facilitator tot sparringpartner.",
};

export const services: Service[] = [
  {
    id: "team-coaching",
    title: "Teamcoaching & -ontwikkeling",
    description:
      "Ik help teams effectiever samenwerken en eigenaarschap nemen. Dit kan variëren van het begeleiden van een nieuw team tot het weer op de rails krijgen van een vastgelopen groep.",
    icon: "Users",
    deliverables: [
      "Teamcoaching en -begeleiding",
      "Conflictbemiddeling",
      "Teamstructuur en rolverdeling",
      "Retrospectives en verbetercycli",
    ],
  },
  {
    id: "change-management",
    title: "Veranderbegeleiding",
    description:
      "Bij organisatieveranderingen zorg ik voor een gestructureerde aanpak die mensen meeneemt. Van reorganisaties tot cultuurverandering, van nieuwe werkwijzen tot governance-herinrichting.",
    icon: "Building",
    deliverables: [
      "Veranderstrategie en -planning",
      "Stakeholdermanagement",
      "Organisatieherontwerp",
      "Implementatiebegeleiding",
    ],
  },
  {
    id: "agile-delivery",
    title: "Agile & Delivery Support",
    description:
      "Ik ondersteun organisaties bij het invoeren of verbeteren van Agile werkwijzen. Niet als doel op zich, maar als middel om voorspelbaarder en effectiever te leveren.",
    icon: "Layers",
    deliverables: [
      "Agile coaching (Scrum, Kanban)",
      "SAFe en LeSS implementatie",
      "Value stream inrichting",
      "Delivery-optimalisatie",
    ],
  },
  {
    id: "leadership-coaching",
    title: "Coaching van Leads & PO's",
    description:
      "Ik coach Scrum Masters, Product Owners, Tribe Leads en teammanagers in hun rol. Gericht op effectieve besluitvorming, stakeholdermanagement en het creëren van eigenaarschap.",
    icon: "Target",
    deliverables: [
      "Individuele coaching",
      "Leiderschapsontwikkeling",
      "Product Owner effectiviteit",
      "Scrum Master groei",
    ],
  },
];

// ============================================
// EXPERTISE (3 BLOKKEN)
// ============================================

export const expertiseSection = {
  label: "Expertise",
  title: "Waar ik sterk in ben",
  description:
    "Drie domeinen waarin ik diepgaande kennis en ervaring heb opgebouwd.",
};

export const expertise: ExpertiseBlock[] = [
  {
    id: "change-org",
    title: "Verandermanagement & Organisatiekunde",
    description:
      "Met een MBA en HEAO in verandermanagement heb ik een stevige theoretische basis. In de praktijk vertaal ik dit naar concrete interventies: van organisatieherontwerp tot cultuurverandering.",
    areas: [
      "Organisatieverandering",
      "Governance en aansturing",
      "Cultuur en gedrag",
      "Stakeholdermanagement",
    ],
    icon: "Building",
  },
  {
    id: "agile-delivery",
    title: "Agile & Delivery",
    description:
      "Ruime ervaring met Agile op schaal in enterprise-omgevingen. Van het coachen van individuele teams tot het inrichten van complete value streams en tribes.",
    areas: [
      "SAFe, LeSS, Scrum, Kanban",
      "Tribe en value stream inrichting",
      "Coaching van SM's en PO's",
      "Delivery-optimalisatie",
    ],
    icon: "Layers",
  },
  {
    id: "tech-context",
    title: "Technische Context",
    description:
      "Een full-stack development opleiding (React, Next.js, TypeScript, Java/Spring Boot) geeft mij de technische basis om de taal van development teams te spreken — en realistische verwachtingen te scheppen.",
    areas: [
      "Begrip van development-processen",
      "Technische schuld en prioritering",
      "CI/CD en delivery pipelines",
      "IT-architectuur basics",
    ],
    icon: "Code",
  },
];

// ============================================
// EXPERIENCE (LOOPBAAN - BEKNOPT)
// ============================================

export const experienceSection = {
  label: "Loopbaan",
  title: "Professionele achtergrond",
  description:
    "Een selectie van mijlpalen die mijn ontwikkeling als consultant hebben gevormd.",
};

export const experience: ExperienceItem[] = [
  {
    id: "jumbo",
    title: "Agile Team Manager",
    organization: "Jumbo Supermarkten",
    description:
      "Momenteel actief als Agile Team Manager voor de IAM-teams op het hoofdkantoor. Verantwoordelijk voor teamontwikkeling, procesoptimalisatie en de verbinding met de bredere IT-organisatie.",
    type: "current",
  },
  {
    id: "pink-pollos",
    title: "Oprichter & Principal Consultant",
    organization: "Pink Pollos",
    description:
      "Via mijn eigen consultancy heb ik meer dan vijftien jaar organisaties begeleid bij complexe transities. Van financiële instellingen tot energiebedrijven, van overheid tot media.",
    type: "venture",
  },
  {
    id: "foundation",
    title: "Business Consultant",
    organization: "Diverse consultancies",
    description:
      "Mijn carrière begon in de consultancy, waar ik de basis legde voor mijn specialisatie in verandermanagement. Projecten in zorg, financiën en overheid vormden het fundament.",
    type: "foundation",
  },
];

// ============================================
// SELECTED ASSIGNMENTS
// ============================================

export const assignmentsSection = {
  label: "Opdrachten",
  title: "Geselecteerde opdrachten",
  description:
    "Een selectie uit mijn portfolio aan opdrachten in finance, energie, overheid en infrastructuur.",
};

export const assignments: Assignment[] = [
  {
    id: "jumbo",
    organization: "Jumbo Supermarkten",
    role: "Agile Team Manager – Identity & Access Management",
    description:
      "Aansturing van meerdere IAM-teams binnen het hoofdkantoor. Focus op teamontwikkeling, samenwerking tussen technische disciplines en het stroomlijnen van processen rondom toegangsbeheer.",
    sector: "retail",
  },
  {
    id: "alliander",
    organization: "Alliander",
    role: "Verandermanager & Agile Coach",
    description:
      "Begeleiding van een afdeling met onduidelijke verantwoordelijkheden. Samen met het management nieuwe teamstructuren ontworpen en eigenaarschap gecreëerd bij teamleads.",
    sector: "energie",
  },
  {
    id: "alfen",
    organization: "Alfen",
    role: "Transitieleider & Agile Coach",
    description:
      "Verantwoordelijk voor de transitie naar Agile op value stream niveau. Teams heringericht rond productlijnen, rollen verduidelijkt en stakeholder-samenwerking verbeterd.",
    sector: "energie",
  },
  {
    id: "ing",
    organization: "ING",
    role: "Agile Coach – Enterprise Transformatie",
    description:
      "Onderdeel van een grootschalige Agile transformatie. Directe ondersteuning van Scrum Masters en Product Owners in meerdere tribes, gericht op voorspelbaarheid en samenwerking.",
    sector: "financieel",
  },
  {
    id: "lvnl",
    organization: "LVNL",
    role: "Agile Coach",
    description:
      "Begeleiding bij het inrichten van Agile werkwijzen binnen de luchtverkeersleiding. Focus op teambegeleiding en het creëren van draagvlak in een omgeving met strikte protocollen.",
    sector: "infrastructuur",
  },
  {
    id: "rabobank",
    organization: "Rabobank",
    role: "Scrum Master & Agile Coach",
    description:
      "Ondersteuning van ontwikkelteams met complexe stakeholderrelaties. Verantwoordelijk voor het verbeteren van sprintprocessen en het wegnemen van structurele blokkades.",
    sector: "financieel",
  },
  {
    id: "enexis",
    organization: "Enexis",
    role: "Agile Coach – Netbeheer",
    description:
      "Begeleiding van teams onder druk van de energietransitie. Focus op werkprocessen waar IT en operationele technologie samenkomen.",
    sector: "energie",
  },
  {
    id: "dpg-media",
    organization: "DPG Media",
    role: "Verandermanager",
    description:
      "Ondersteuning bij organisatorische herstructurering. Betrokken bij het samenbrengen van teams uit verschillende labels onder een gezamenlijke werkwijze.",
    sector: "media",
  },
  {
    id: "uwv",
    organization: "UWV",
    role: "Agile Coach",
    description:
      "Begeleiding van teams binnen een uitvoeringsorganisatie met grote maatschappelijke verantwoordelijkheid. Wendbaarheid introduceren binnen strikte wet- en regelgeving.",
    sector: "overheid",
  },
  {
    id: "pggm",
    organization: "PGGM",
    role: "Agile Coach – Pensioenbeheer",
    description:
      "Ondersteuning van IT-teams tijdens systeemvernieuwing. Begeleiding bij het vinden van balans tussen stabiliteit en vernieuwing.",
    sector: "financieel",
  },
];

// ============================================
// PROCESS (WERKWIJZE)
// ============================================

export const processSection = {
  label: "Werkwijze",
  title: "Hoe ik werk",
  description:
    "Elke opdracht is anders, maar mijn aanpak volgt een herkenbare structuur.",
};

export const process: ProcessStep[] = [
  {
    step: 1,
    title: "Verkenning",
    description:
      "Ik begin met luisteren. Wat is de werkelijke vraag? Wie zijn de stakeholders? Wat is er al geprobeerd? Een grondige analyse voorkomt symptoombestrijding.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Ontwerp",
    description:
      "Samen met de opdrachtgever bepalen we de aanpak. Concrete doelen, heldere rolverdeling en een realistische planning die past bij de organisatiecultuur.",
    icon: "Target",
  },
  {
    step: 3,
    title: "Uitvoering",
    description:
      "Hands-on aan de slag. Ik werk mét teams, niet alleen óver teams. Verandering ontstaat door te doen, niet door te presenteren.",
    icon: "Zap",
  },
  {
    step: 4,
    title: "Borging",
    description:
      "Mijn doel is overbodig worden. Eigenaarschap overdragen, competenties ontwikkelen en zorgen dat de organisatie zelfstandig verder kan.",
    icon: "CheckCircle",
  },
];

// ============================================
// CLIENTS
// ============================================

export const clientsSection = {
  label: "Klanten",
  title: "Organisaties waar ik heb gewerkt",
};

export const clients: Client[] = [
  { name: "Jumbo" },
  { name: "Alliander" },
  { name: "Alfen" },
  { name: "ING" },
  { name: "Rabobank" },
  { name: "ABN AMRO" },
  { name: "LVNL" },
  { name: "Enexis" },
  { name: "UWV" },
  { name: "Belastingdienst" },
  { name: "DPG Media" },
  { name: "PGGM" },
  { name: "ASML" },
  { name: "Schiphol" },
];

// ============================================
// CONTACT
// ============================================

export const contact: ContactContent = {
  title: "Contact",
  subtitle: "Laten we kennismaken",
  description:
    "Staat u voor een verandering of transitie? Ik ga graag het gesprek aan om te verkennen hoe ik kan helpen.",
  formFields: {
    name: "Naam",
    email: "E-mailadres",
    company: "Organisatie",
    subject: "Onderwerp",
    message: "Uw bericht",
    submit: "Verstuur bericht",
  },
  subjects: [
    "Teamcoaching",
    "Veranderbegeleiding",
    "Agile ondersteuning",
    "Coaching van leads/PO's",
    "Algemene vraag",
  ],
};

// ============================================
// FOOTER
// ============================================

export const footer: FooterContent = {
  tagline: "Transformatie met richting",
  copyright: `© ${new Date().getFullYear()} DRP Ventures BV`,
  legal: "Amersfoort, Nederland",
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Voorwaarden", href: "/terms" },
    { label: "LinkedIn", href: "https://linkedin.com/in/dennisrijkers" },
  ],
};
