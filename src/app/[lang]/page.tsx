"use client";

import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import { useParams } from "next/navigation";
import { cn } from "@/lib/cn";
import { isValidLanguage, Language, Persona, LANGUAGES } from "@/content/persona";
import { useState } from "react";

// ============================================
// CONTENT PER LANGUAGE
// ============================================

interface PersonaCardContent {
  label: string;
  title: string;
  bullets: string[];
  cta: string;
}

interface LandingContent {
  headline: string;
  subline: string;
  languageLabel: string;
  personas: Record<Persona, PersonaCardContent>;
}

const LANDING_CONTENT: Record<Language, LandingContent> = {
  nl: {
    headline: "Wat zoekt u precies?",
    subline: "Kies uw perspectief voor relevante informatie. U kunt later altijd wisselen.",
    languageLabel: "Taal",
    personas: {
      "scrum-master": {
        label: "Voor opdrachtgevers",
        title: "Ik zoek een specialist",
        bullets: [
          "Transformatie & verandermanagement",
          "Interim opdrachten & beschikbaarheid",
          "Track record & referenties",
        ],
        cta: "Bekijk profiel",
      },
      "agile-coach": {
        label: "Voor Agile professionals",
        title: "Ik wil sparren of samenwerken",
        bullets: [
          "Methodieken & frameworks",
          "Coaching aanpak & visie",
          "Kennisdeling & community",
        ],
        cta: "Ontdek meer",
      },
      "team-manager": {
        label: "Voor team managers",
        title: "Ik wil mijn team versterken",
        bullets: [
          "Team coaching & ontwikkeling",
          "Agile implementatie",
          "Leiderschap & cultuur",
        ],
        cta: "Lees verder",
      },
    },
  },
  en: {
    headline: "What are you looking for?",
    subline: "Choose your perspective for relevant information. You can always switch later.",
    languageLabel: "Language",
    personas: {
      "scrum-master": {
        label: "For clients",
        title: "I'm looking for a specialist",
        bullets: [
          "Transformation & change management",
          "Interim assignments & availability",
          "Track record & references",
        ],
        cta: "View profile",
      },
      "agile-coach": {
        label: "For Agile professionals",
        title: "I want to collaborate",
        bullets: [
          "Methodologies & frameworks",
          "Coaching approach & vision",
          "Knowledge sharing & community",
        ],
        cta: "Discover more",
      },
      "team-manager": {
        label: "For team managers",
        title: "I want to strengthen my team",
        bullets: [
          "Team coaching & development",
          "Agile implementation",
          "Leadership & culture",
        ],
        cta: "Read more",
      },
    },
  },
  sv: {
    headline: "Vad letar du efter?",
    subline: "Välj ditt perspektiv för relevant information. Du kan alltid byta senare.",
    languageLabel: "Språk",
    personas: {
      "scrum-master": {
        label: "För uppdragsgivare",
        title: "Jag söker en specialist",
        bullets: [
          "Transformation & förändringsledning",
          "Interimsuppdrag & tillgänglighet",
          "Meritlista & referenser",
        ],
        cta: "Visa profil",
      },
      "agile-coach": {
        label: "För Agile-proffs",
        title: "Jag vill samarbeta",
        bullets: [
          "Metoder & ramverk",
          "Coachningsmetod & vision",
          "Kunskapsdelning & community",
        ],
        cta: "Upptäck mer",
      },
      "team-manager": {
        label: "För teamledare",
        title: "Jag vill stärka mitt team",
        bullets: [
          "Teamcoaching & utveckling",
          "Agile-implementering",
          "Ledarskap & kultur",
        ],
        cta: "Läs mer",
      },
    },
  },
};

const LANGUAGE_FLAGS: Record<Language, string> = {
  nl: "🇳🇱",
  en: "🇬🇧",
  sv: "🇸🇪",
};

const LANGUAGE_NAMES: Record<Language, string> = {
  nl: "Nederlands",
  en: "English",
  sv: "Svenska",
};

// ============================================
// PERSONA ORDER
// ============================================

const PERSONA_ORDER: Persona[] = ["scrum-master", "agile-coach", "team-manager"];

// ============================================
// PAGE COMPONENT
// ============================================

export default function LandingPage() {
  const params = useParams();
  const lang = params.lang as string;

  // Validate language
  if (!isValidLanguage(lang)) {
    notFound();
  }

  const content = LANDING_CONTENT[lang];

  return (
    <main className="min-h-screen bg-surface-body flex flex-col">
      {/* Header with language selector */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <span className="text-xl font-bold text-primary">
            DRP<span className="text-accent">.</span>
          </span>

          {/* Language selector */}
          <LanguageSelector currentLang={lang} label={content.languageLabel} />
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-5xl">
          {/* Headline */}
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 tracking-tight">
              {content.headline}
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {content.subline}
            </p>
          </div>

          {/* Persona cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PERSONA_ORDER.map((persona) => (
              <PersonaCard
                key={persona}
                lang={lang}
                persona={persona}
                content={content.personas[persona]}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 text-center">
        <p className="text-muted text-sm">
          DRP Ventures BV
        </p>
      </footer>
    </main>
  );
}

// ============================================
// PERSONA CARD COMPONENT
// ============================================

interface PersonaCardProps {
  lang: Language;
  persona: Persona;
  content: PersonaCardContent;
}

function PersonaCard({ lang, persona, content }: PersonaCardProps) {
  return (
    <Link
      href={`/${lang}/${persona}`}
      className={cn(
        "group relative flex flex-col p-6 lg:p-8",
        "bg-surface-card rounded-xl",
        "border border-surface-border",
        "transition-all duration-300 ease-out",
        "hover:border-accent/40 hover:bg-surface-elevated",
        "hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
      )}
    >
      {/* Label */}
      <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-accent mb-3">
        {content.label}
      </span>

      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold text-primary mb-4 leading-snug">
        {content.title}
      </h2>

      {/* Bullets */}
      <ul className="flex-1 space-y-2 mb-6">
        {content.bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-secondary">
            <span className="text-accent mt-1.5 shrink-0">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="3" />
              </svg>
            </span>
            <span className="leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300">
        <span>{content.cta}</span>
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>

      {/* Subtle accent line on hover */}
      <div
        className={cn(
          "absolute bottom-0 left-6 right-6 h-0.5 rounded-full",
          "bg-accent/0 group-hover:bg-accent/60",
          "transition-all duration-300"
        )}
      />
    </Link>
  );
}

// ============================================
// LANGUAGE SELECTOR COMPONENT
// ============================================

interface LanguageSelectorProps {
  currentLang: Language;
  label: string;
}

function LanguageSelector({ currentLang, label }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLanguageChange = (newLang: Language) => {
    setIsOpen(false);
    router.push(`/${newLang}`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg",
          "bg-surface-card border border-surface-border",
          "text-secondary hover:text-primary hover:border-surface-border/80",
          "transition-all duration-200"
        )}
        aria-label={label}
      >
        <span className="text-lg">{LANGUAGE_FLAGS[currentLang]}</span>
        <span className="hidden sm:inline">{LANGUAGE_NAMES[currentLang]}</span>
        <svg
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-44 bg-surface-panel border border-surface-border rounded-lg shadow-xl shadow-black/20 z-20 overflow-hidden">
            {LANGUAGES.map((langOption) => (
              <button
                key={langOption}
                onClick={() => handleLanguageChange(langOption)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 text-sm text-left",
                  "transition-colors duration-150",
                  currentLang === langOption
                    ? "bg-accent/10 text-accent"
                    : "text-secondary hover:bg-surface-elevated hover:text-primary"
                )}
              >
                <span className="text-lg">{LANGUAGE_FLAGS[langOption]}</span>
                <span>{LANGUAGE_NAMES[langOption]}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
