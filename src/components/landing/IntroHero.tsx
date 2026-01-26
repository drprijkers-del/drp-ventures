"use client";

import { cn } from "@/lib/cn";
import { Language } from "@/content/persona";

// ============================================
// TRANSLATIONS
// ============================================

interface IntroContent {
  eyebrow: string;
  headline: string;
  subline: string;
  helper: string;
}

const INTRO_CONTENT: Record<Language, IntroContent> = {
  nl: {
    eyebrow: "DRP Ventures BV",
    headline: "Agile transformatie met ervaring en nuance",
    subline:
      "Als Enterprise Agile Coach en Scrum Master begeleid ik organisaties bij duurzame verandering. Pragmatisch, zonder dogma's — gericht op wat werkt in uw specifieke context.",
    helper: "Kies hieronder het perspectief dat het beste past.",
  },
  en: {
    eyebrow: "DRP Ventures BV",
    headline: "Agile transformation with experience and nuance",
    subline:
      "As an Enterprise Agile Coach and Scrum Master, I guide organizations through sustainable change. Pragmatic, without dogmas — focused on what works in your specific context.",
    helper: "Choose the perspective below that best suits your needs.",
  },
  sv: {
    eyebrow: "DRP Ventures BV",
    headline: "Agil transformation med erfarenhet och nyans",
    subline:
      "Som Enterprise Agile Coach och Scrum Master vägleder jag organisationer genom hållbar förändring. Pragmatiskt, utan dogmer — fokuserat på vad som fungerar i er specifika kontext.",
    helper: "Välj det perspektiv nedan som passar dig bäst.",
  },
};

// ============================================
// COMPONENT
// ============================================

interface IntroHeroProps {
  lang: Language;
}

export function IntroHero({ lang }: IntroHeroProps) {
  const content = INTRO_CONTENT[lang];

  return (
    <section
      className={cn(
        "relative min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] lg:min-h-[45vh]",
        "flex items-center justify-center",
        "px-4 sm:px-6 lg:px-8",
        "pt-20 pb-8 sm:pt-24 sm:pb-12"
      )}
    >
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 195, 74, 0.04) 0%, transparent 60%),
            linear-gradient(to bottom, transparent 0%, rgba(10, 10, 10, 0.5) 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
          <span className="w-8 h-px bg-accent/40" aria-hidden="true" />
          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-accent/80">
            {content.eyebrow}
          </span>
          <span className="w-8 h-px bg-accent/40" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-4 sm:mb-6 tracking-tight">
          {content.headline}
        </h1>

        {/* Subline */}
        <p className="text-sm sm:text-base md:text-lg text-secondary leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
          {content.subline}
        </p>

        {/* Helper line */}
        <p className="text-xs sm:text-sm text-muted">
          {content.helper}
        </p>

        {/* Subtle divider arrow */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <svg
            className="w-5 h-5 text-muted/50 animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
