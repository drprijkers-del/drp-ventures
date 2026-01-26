import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getPersonaContent,
  generateStaticParams as getStaticParams,
  isValidLanguage,
  isValidPersona,
  PERSONA_LABELS,
} from "@/content/persona";
import { PersonaHero } from "@/components/persona/PersonaHero";
import { PersonaAbout } from "@/components/persona/PersonaAbout";
import { PersonaServices } from "@/components/persona/PersonaServices";
import { PersonaAssignments } from "@/components/persona/PersonaAssignments";
import { PersonaExperience } from "@/components/persona/PersonaExperience";
import { PersonaProcess } from "@/components/persona/PersonaProcess";
import { PersonaClients } from "@/components/persona/PersonaClients";
import { PersonaContact } from "@/components/persona/PersonaContact";
import { PersonaFooter } from "@/components/persona/PersonaFooter";

// ============================================
// TYPES
// ============================================

interface PageProps {
  params: Promise<{
    lang: string;
    persona: string;
  }>;
}

// ============================================
// STATIC GENERATION
// ============================================

export function generateStaticParams() {
  return getStaticParams();
}

// ============================================
// METADATA
// ============================================

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, persona } = await params;

  if (!isValidLanguage(lang) || !isValidPersona(persona)) {
    return {};
  }

  const content = getPersonaContent(lang, persona);
  if (!content) return {};

  const personaLabel = PERSONA_LABELS[lang][persona];

  return {
    title: `${content.contact.name} | ${personaLabel}`,
    description: content.hero.description,
    openGraph: {
      title: `${content.contact.name} | ${personaLabel}`,
      description: content.hero.description,
      locale: lang === "nl" ? "nl_NL" : lang === "sv" ? "sv_SE" : "en_US",
    },
  };
}

// ============================================
// PAGE COMPONENT
// ============================================

export default async function PersonaPage({ params }: PageProps) {
  const { lang, persona } = await params;

  // Validate params
  if (!isValidLanguage(lang) || !isValidPersona(persona)) {
    notFound();
  }

  // Get content
  const content = getPersonaContent(lang, persona);
  if (!content) {
    notFound();
  }

  return (
    <>
      <PersonaHero content={content} lang={lang} persona={persona} />
      <PersonaAbout content={content} />
      <PersonaServices content={content} />
      <PersonaAssignments content={content} />
      <PersonaExperience content={content} />
      <PersonaProcess content={content} />
      <PersonaClients content={content} />
      <PersonaContact content={content} />
      <PersonaFooter content={content} />
    </>
  );
}
