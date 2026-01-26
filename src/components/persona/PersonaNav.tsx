"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  Language,
  Persona,
  LANGUAGES,
  PERSONAS,
  LANGUAGE_LABELS,
  PERSONA_LABELS,
} from "@/content/persona";

// ============================================
// TYPES & CONSTANTS
// ============================================

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

const LANGUAGE_FLAGS: Record<Language, string> = {
  nl: "🇳🇱",
  en: "🇬🇧",
  sv: "🇸🇪",
};

// ============================================
// MAIN COMPONENT
// ============================================

export function PersonaNav({ lang, persona }: PersonaNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      // Focus the close button when menu opens
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-surface-body/95 backdrop-blur-md border-b border-surface-border"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href={`/${lang}/${persona}`}
              className="text-xl font-bold text-primary hover:text-accent transition-colors z-10"
            >
              DRP<span className="text-accent">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

            {/* Desktop Switches */}
            <div className="hidden md:flex items-center gap-3">
              <LanguageSwitch currentLang={lang} persona={persona} />
              <PersonaSwitch currentPersona={persona} lang={lang} />
              <Link
                href="/login"
                className="p-2 text-muted hover:text-secondary transition-colors rounded-lg"
                aria-label="Admin login"
                title="Admin"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              className={cn(
                "md:hidden relative z-10 p-2 -mr-2",
                "text-primary hover:text-accent",
                "transition-colors duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-body rounded-lg"
              )}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        closeButtonRef={closeButtonRef}
        lang={lang}
        persona={persona}
      />
    </>
  );
}

// ============================================
// MOBILE DRAWER COMPONENT
// ============================================

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  closeButtonRef: React.RefObject<HTMLButtonElement | null>;
  lang: Language;
  persona: Persona;
}

function MobileDrawer({ isOpen, onClose, closeButtonRef, lang, persona }: MobileDrawerProps) {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigatie menu"
      className={cn(
        "fixed inset-0 z-100 md:hidden",
        "transition-all duration-300 ease-out",
        isOpen ? "visible" : "invisible pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/60 backdrop-blur-sm",
          "transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={cn(
          "absolute inset-y-0 right-0 w-full max-w-sm",
          "bg-surface-body border-l border-surface-border",
          "flex flex-col",
          "transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-surface-border">
          <span className="text-lg font-semibold text-primary">Menu</span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className={cn(
              "p-3 -mr-2",
              "text-secondary hover:text-primary",
              "transition-colors duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            )}
            aria-label="Sluit menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center px-4 py-4 rounded-xl",
                    "text-base font-medium text-secondary",
                    "hover:bg-surface-card hover:text-primary",
                    "active:bg-surface-elevated",
                    "transition-colors duration-150",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-6 border-t border-surface-border" />

          {/* Switches */}
          <div className="space-y-4">
            <div>
              <p className="px-4 text-xs font-medium text-muted uppercase tracking-wider mb-2">
                Taal
              </p>
              <MobileLanguageSwitch currentLang={lang} persona={persona} onClose={onClose} />
            </div>

            <div>
              <p className="px-4 text-xs font-medium text-muted uppercase tracking-wider mb-2">
                Perspectief
              </p>
              <MobilePersonaSwitch currentPersona={persona} lang={lang} onClose={onClose} />
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-surface-border">
          <Link
            href="/login"
            onClick={onClose}
            className={cn(
              "flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl",
              "text-sm font-medium text-muted",
              "bg-surface-card hover:bg-surface-elevated hover:text-secondary",
              "transition-colors duration-150"
            )}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MOBILE LANGUAGE SWITCH
// ============================================

interface MobileLanguageSwitchProps {
  currentLang: Language;
  persona: Persona;
  onClose: () => void;
}

function MobileLanguageSwitch({ currentLang, persona, onClose }: MobileLanguageSwitchProps) {
  return (
    <div className="flex gap-2 px-4">
      {LANGUAGES.map((langOption) => (
        <Link
          key={langOption}
          href={`/${langOption}/${persona}`}
          onClick={onClose}
          className={cn(
            "flex items-center gap-1.5 px-3 py-2.5 rounded-xl flex-1 justify-center min-w-0",
            "text-sm font-medium transition-colors duration-150",
            currentLang === langOption
              ? "bg-accent/10 text-accent border border-accent/30"
              : "bg-surface-card text-secondary hover:bg-surface-elevated hover:text-primary border border-transparent"
          )}
        >
          <span className="text-base">{LANGUAGE_FLAGS[langOption]}</span>
          <span className="hidden min-[400px]:inline text-xs truncate">{LANGUAGE_LABELS[langOption]}</span>
        </Link>
      ))}
    </div>
  );
}

// ============================================
// MOBILE PERSONA SWITCH
// ============================================

interface MobilePersonaSwitchProps {
  currentPersona: Persona;
  lang: Language;
  onClose: () => void;
}

function MobilePersonaSwitch({ currentPersona, lang, onClose }: MobilePersonaSwitchProps) {
  return (
    <ul className="space-y-1">
      {PERSONAS.map((p) => (
        <li key={p}>
          <Link
            href={`/${lang}/${p}`}
            onClick={onClose}
            className={cn(
              "flex items-center px-4 py-3 rounded-xl",
              "text-sm font-medium transition-colors duration-150",
              currentPersona === p
                ? "bg-accent/10 text-accent"
                : "text-secondary hover:bg-surface-card hover:text-primary"
            )}
          >
            {PERSONA_LABELS[lang][p]}
            {currentPersona === p && (
              <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// ============================================
// DESKTOP LANGUAGE SWITCH
// ============================================

interface LanguageSwitchProps {
  currentLang: Language;
  persona: Persona;
}

function LanguageSwitch({ currentLang, persona }: LanguageSwitchProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg transition-all",
          "bg-surface-card text-secondary hover:text-primary",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-lg">{LANGUAGE_FLAGS[currentLang]}</span>
        <span>{LANGUAGE_LABELS[currentLang]}</span>
        <svg
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} aria-hidden="true" />
          <div
            role="listbox"
            className="absolute right-0 top-full mt-2 w-44 bg-surface-panel border border-surface-border rounded-lg shadow-xl shadow-black/20 z-20 overflow-hidden"
          >
            {LANGUAGES.map((langOption) => (
              <Link
                key={langOption}
                href={`/${langOption}/${persona}`}
                onClick={() => setIsOpen(false)}
                role="option"
                aria-selected={currentLang === langOption}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                  currentLang === langOption
                    ? "bg-accent/10 text-accent"
                    : "text-secondary hover:bg-surface-elevated hover:text-primary"
                )}
              >
                <span className="text-lg">{LANGUAGE_FLAGS[langOption]}</span>
                <span>{LANGUAGE_LABELS[langOption]}</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ============================================
// DESKTOP PERSONA SWITCH
// ============================================

interface PersonaSwitchProps {
  currentPersona: Persona;
  lang: Language;
}

function PersonaSwitch({ currentPersona, lang }: PersonaSwitchProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-all",
          "bg-surface-card text-secondary hover:text-primary",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{PERSONA_LABELS[lang][currentPersona]}</span>
        <svg
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} aria-hidden="true" />
          <div
            role="listbox"
            className="absolute right-0 top-full mt-2 w-48 bg-surface-panel border border-surface-border rounded-lg shadow-xl shadow-black/20 z-20 overflow-hidden"
          >
            {PERSONAS.map((p) => (
              <Link
                key={p}
                href={`/${lang}/${p}`}
                onClick={() => setIsOpen(false)}
                role="option"
                aria-selected={currentPersona === p}
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
