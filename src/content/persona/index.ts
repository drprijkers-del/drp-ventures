import {
  Language,
  Persona,
  PersonaContent,
  LANGUAGES,
  PERSONAS,
  isValidLanguage,
  isValidPersona,
} from "./types";

// ============================================
// CONTENT IMPORTS
// ============================================

// NL
import { content as nlScrumMaster } from "./nl/scrum-master";
import { content as nlAgileCoach } from "./nl/agile-coach";
import { content as nlTeamManager } from "./nl/team-manager";

// EN
import { content as enScrumMaster } from "./en/scrum-master";
import { content as enAgileCoach } from "./en/agile-coach";
import { content as enTeamManager } from "./en/team-manager";

// SV
import { content as svScrumMaster } from "./sv/scrum-master";
import { content as svAgileCoach } from "./sv/agile-coach";
import { content as svTeamManager } from "./sv/team-manager";

// ============================================
// CONTENT REGISTRY
// ============================================

const contentRegistry: Record<Language, Record<Persona, PersonaContent>> = {
  nl: {
    "scrum-master": nlScrumMaster,
    "agile-coach": nlAgileCoach,
    "team-manager": nlTeamManager,
  },
  en: {
    "scrum-master": enScrumMaster,
    "agile-coach": enAgileCoach,
    "team-manager": enTeamManager,
  },
  sv: {
    "scrum-master": svScrumMaster,
    "agile-coach": svAgileCoach,
    "team-manager": svTeamManager,
  },
};

// ============================================
// CONTENT LOADER
// ============================================

export function getPersonaContent(
  lang: string,
  persona: string
): PersonaContent | null {
  if (!isValidLanguage(lang) || !isValidPersona(persona)) {
    return null;
  }

  return contentRegistry[lang][persona];
}

export function getAllPersonaContents(): PersonaContent[] {
  const contents: PersonaContent[] = [];

  for (const lang of LANGUAGES) {
    for (const persona of PERSONAS) {
      contents.push(contentRegistry[lang][persona]);
    }
  }

  return contents;
}

// ============================================
// STATIC PARAMS GENERATOR
// ============================================

export function generateStaticParams(): { lang: Language; persona: Persona }[] {
  const params: { lang: Language; persona: Persona }[] = [];

  for (const lang of LANGUAGES) {
    for (const persona of PERSONAS) {
      params.push({ lang, persona });
    }
  }

  return params;
}

// ============================================
// RE-EXPORTS
// ============================================

export {
  LANGUAGES,
  PERSONAS,
  isValidLanguage,
  isValidPersona,
} from "./types";

export type {
  Language,
  Persona,
  PersonaContent,
  Contact,
  Hero,
  About,
  Service,
  Experience,
  Assignment,
  ProcessStep,
  SectionLabels,
  ContactSection,
  Footer,
} from "./types";

export { LANGUAGE_LABELS, PERSONA_LABELS } from "./types";
