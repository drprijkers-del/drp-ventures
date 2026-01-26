"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/cn";
import { navigation, siteConfig } from "@/content/site";
import { Container } from "./Container";
import { Button } from "./Button";
import { MenuIcon, XIcon } from "./Icons";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sections = navigation
      .map((item) => item.href.replace("#", ""))
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = useCallback((href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      scrollToSection(href);
    },
    [scrollToSection]
  );

  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      scrollToSection(href);
    },
    [scrollToSection]
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-500 ease-out",
        isScrolled
          ? "bg-surface-body/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav
          className="flex items-center justify-between h-20"
          role="navigation"
          aria-label="Hoofdnavigatie"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className={cn(
              "flex items-center gap-2 font-bold text-xl",
              "transition-colors duration-200",
              "hover:opacity-80",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-body",
              "rounded-lg"
            )}
            aria-label="Ga naar home"
          >
            <span className="text-accent">{siteConfig.name.split(" ")[0]}</span>
            <span className="text-primary">{siteConfig.name.split(" ").slice(1).join(" ")}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg",
                    "transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-body",
                    isActive
                      ? "text-accent"
                      : "text-secondary hover:text-primary"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {/* Active indicator */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full",
                      "transition-all duration-300 ease-out",
                      isActive ? "w-4 opacity-100" : "w-0 opacity-0"
                    )}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="#contact"
              size="sm"
              onClick={(e) => handleButtonClick(e, "#contact")}
            >
              Contact
            </Button>
            <a
              href="/login"
              className="p-2 text-muted hover:text-secondary transition-colors rounded-lg"
              aria-label="Admin login"
              title="Admin"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden relative p-2 rounded-lg",
              "text-secondary hover:text-primary",
              "transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-body"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Sluit menu" : "Open menu"}
          >
            <span
              className={cn(
                "block transition-all duration-300",
                isMobileMenuOpen && "rotate-90 opacity-0"
              )}
            >
              <MenuIcon size={24} />
            </span>
            <span
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                "transition-all duration-300",
                isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              )}
            >
              <XIcon size={24} />
            </span>
          </button>
        </nav>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden fixed inset-0 top-20",
          "bg-surface-body/98 backdrop-blur-2xl",
          "transition-all duration-300 ease-out",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <Container className="py-8 h-full">
          <nav className="flex flex-col h-full">
            {/* Navigation Links */}
            <div className="flex flex-col gap-1">
              {navigation.map((item, index) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "flex items-center justify-between px-4 py-4",
                      "text-lg font-medium rounded-xl",
                      "transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isActive
                        ? "text-accent bg-surface-elevated"
                        : "text-secondary hover:text-primary hover:bg-surface-card"
                    )}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                      transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                      opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA at bottom */}
            <div
              className="mt-auto pt-8 border-t border-surface-border"
              style={{
                transitionDelay: isMobileMenuOpen ? "400ms" : "0ms",
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              <Button
                href="#contact"
                className="w-full"
                size="lg"
                onClick={(e) => handleButtonClick(e, "#contact")}
              >
                Contact opnemen
              </Button>

              {/* Contact info */}
              <div className="mt-6 text-center">
                <p className="text-muted text-sm">{siteConfig.email}</p>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
