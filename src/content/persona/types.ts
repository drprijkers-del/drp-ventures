import { z } from "zod";

// ============================================
// ENUMS & CONSTANTS
// ============================================

export const LANGUAGES = ["nl", "en", "sv"] as const;
export const PERSONAS = ["scrum-master", "agile-coach", "team-manager"] as const;

export type Language = (typeof LANGUAGES)[number];
export type Persona = (typeof PERSONAS)[number];

export const LANGUAGE_LABELS: Record<Language, string> = {
  nl: "Nederlands",
  en: "English",
  sv: "Svenska",
};

export const PERSONA_LABELS: Record<Language, Record<Persona, string>> = {
  nl: {
    "scrum-master": "Scrum Master",
    "agile-coach": "Agile Coach",
    "team-manager": "Team Manager",
  },
  en: {
    "scrum-master": "Scrum Master",
    "agile-coach": "Agile Coach",
    "team-manager": "Team Manager",
  },
  sv: {
    "scrum-master": "Scrum Master",
    "agile-coach": "Agile Coach",
    "team-manager": "Team Manager",
  },
};

// ============================================
// ZOD SCHEMAS
// ============================================

// Base contact info
export const ContactSchema = z.object({
  name: z.string(),
  title: z.string(),
  email: z.string().email(),
  phone: z.string(),
  linkedin: z.string().url().optional(),
  location: z.string(),
});

// Hero section
export const HeroSchema = z.object({
  label: z.string(),
  headline: z.string(),
  subline: z.string(),
  description: z.string(),
  cta: z.object({
    primary: z.object({ label: z.string(), href: z.string() }),
    secondary: z.object({ label: z.string(), href: z.string() }),
  }),
  stats: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    })
  ),
});

// About section
export const AboutSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  intro: z.string(),
  approach: z.object({
    title: z.string(),
    description: z.string(),
  }),
  values: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })
  ),
});

// Service/expertise item
export const ServiceSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  deliverables: z.array(z.string()),
});

// Experience item
export const ExperienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  organization: z.string(),
  period: z.string().optional(),
  description: z.string(),
  type: z.enum(["current", "venture", "foundation"]),
});

// Assignment item
export const AssignmentSchema = z.object({
  id: z.string(),
  organization: z.string(),
  role: z.string(),
  period: z.string().optional(),
  description: z.string(),
  achievements: z.array(z.string()).optional(),
  sector: z.enum(["financieel", "energie", "overheid", "retail", "media", "infrastructuur", "technology"]),
});

// Process step
export const ProcessStepSchema = z.object({
  step: z.number(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

// Section labels (for headers)
export const SectionLabelsSchema = z.object({
  about: z.string(),
  services: z.string(),
  assignments: z.string(),
  experience: z.string(),
  process: z.string(),
  clients: z.string(),
  contact: z.string(),
});

// Contact section
export const ContactSectionSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  formFields: z.object({
    name: z.string(),
    email: z.string(),
    company: z.string(),
    subject: z.string(),
    message: z.string(),
    submit: z.string(),
  }),
  subjects: z.array(z.string()),
});

// Footer
export const FooterSchema = z.object({
  tagline: z.string(),
  copyright: z.string(),
  legal: z.string(),
});

// ============================================
// COMPLETE PERSONA CONTENT SCHEMA
// ============================================

export const PersonaContentSchema = z.object({
  // Meta
  language: z.enum(LANGUAGES),
  persona: z.enum(PERSONAS),

  // Contact info
  contact: ContactSchema,

  // Section labels
  sectionLabels: SectionLabelsSchema,

  // Content sections
  hero: HeroSchema,
  about: AboutSchema,
  services: z.array(ServiceSchema),
  assignments: z.array(AssignmentSchema),
  experience: z.array(ExperienceSchema),
  process: z.array(ProcessStepSchema),
  clients: z.array(z.string()),
  contactSection: ContactSectionSchema,
  footer: FooterSchema,
});

// ============================================
// INFERRED TYPES
// ============================================

export type Contact = z.infer<typeof ContactSchema>;
export type Hero = z.infer<typeof HeroSchema>;
export type About = z.infer<typeof AboutSchema>;
export type Service = z.infer<typeof ServiceSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Assignment = z.infer<typeof AssignmentSchema>;
export type ProcessStep = z.infer<typeof ProcessStepSchema>;
export type SectionLabels = z.infer<typeof SectionLabelsSchema>;
export type ContactSection = z.infer<typeof ContactSectionSchema>;
export type Footer = z.infer<typeof FooterSchema>;
export type PersonaContent = z.infer<typeof PersonaContentSchema>;

// ============================================
// VALIDATION HELPER
// ============================================

export function validatePersonaContent(data: unknown): PersonaContent {
  return PersonaContentSchema.parse(data);
}

export function isValidLanguage(lang: string): lang is Language {
  return LANGUAGES.includes(lang as Language);
}

export function isValidPersona(persona: string): persona is Persona {
  return PERSONAS.includes(persona as Persona);
}
