"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import {
  Language,
  Persona,
  LANGUAGES,
  PERSONAS,
  LANGUAGE_LABELS,
  PERSONA_LABELS,
} from "@/content/persona";

interface PersonaNavProps {
  lang: Language;
  persona: Persona;
}

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Over", href: "#about" },
  { label: "Expertise", href: "#services" },
  { label: "Opdrachten", href: "#assignments" },
  { label: "Contact", href: "#contact" },
];

export function PersonaNav({ lang, persona }: PersonaNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-surface-body/95 backdrop-blur-md border-b border-surface-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={`/${lang}/${persona}`}
            className="text-xl font-bold text-primary hover:text-accent transition-colors"
          >
            DRP<span className="text-accent">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-secondary hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Switches */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switch */}
            <LanguageSwitch currentLang={lang} persona={persona} />

            {/* Persona Switch */}
            <PersonaSwitch currentPersona={persona} lang={lang} />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-secondary hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-surface-border">
            <nav className="flex flex-col gap-4 mb-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-secondary hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 pt-4 border-t border-surface-border">
              <div>
                <p className="text-xs text-muted mb-2">Taal</p>
                <LanguageSwitch currentLang={lang} persona={persona} />
              </div>
              <div>
                <p className="text-xs text-muted mb-2">Profiel</p>
                <PersonaSwitch currentPersona={persona} lang={lang} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// ============================================
// LANGUAGE SWITCH WITH FLAGS
// ============================================

const LANGUAGE_FLAGS: Record<Language, string> = {
  nl: "🇳🇱",
  en: "🇬🇧",
  sv: "🇸🇪",
};

interface LanguageSwitchProps {
  currentLang: Language;
  persona: Persona;
}

function LanguageSwitch({ currentLang, persona }: LanguageSwitchProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg transition-all",
          "bg-surface-card text-secondary hover:text-primary"
        )}
      >
        <span className="text-lg">{LANGUAGE_FLAGS[currentLang]}</span>
        <span>{LANGUAGE_LABELS[currentLang]}</span>
        <svg
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
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
          <div className="absolute right-0 top-full mt-2 w-44 bg-surface-panel border border-surface-border rounded-lg shadow-lg z-20 overflow-hidden">
            {LANGUAGES.map((lang) => (
              <Link
                key={lang}
                href={`/${lang}/${persona}`}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                  currentLang === lang
                    ? "bg-accent/10 text-accent"
                    : "text-secondary hover:bg-surface-elevated hover:text-primary"
                )}
              >
                <span className="text-lg">{LANGUAGE_FLAGS[lang]}</span>
                <span>{LANGUAGE_LABELS[lang]}</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ============================================
// PERSONA SWITCH
// ============================================

interface PersonaSwitchProps {
  currentPersona: Persona;
  lang: Language;
}

function PersonaSwitch({ currentPersona, lang }: PersonaSwitchProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-all",
          "bg-surface-card text-secondary hover:text-primary"
        )}
      >
        <span>{PERSONA_LABELS[lang][currentPersona]}</span>
        <svg
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
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
          <div className="absolute right-0 top-full mt-2 w-48 bg-surface-panel border border-surface-border rounded-lg shadow-lg z-20 overflow-hidden">
            {PERSONAS.map((p) => (
              <Link
                key={p}
                href={`/${lang}/${p}`}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-2.5 text-sm transition-colors",
                  currentPersona === p
                    ? "bg-accent/10 text-accent"
                    : "text-secondary hover:bg-surface-elevated hover:text-primary"
                )}
              >
                {PERSONA_LABELS[lang][p]}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
