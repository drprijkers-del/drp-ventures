"use client";

import { Container } from "@/components/ui/Container";
import { PersonaContent } from "@/content/persona";

interface PersonaFooterProps {
  content: PersonaContent;
}

export function PersonaFooter({ content }: PersonaFooterProps) {
  const { footer, contact } = content;

  return (
    <footer className="py-12 border-t border-surface-border">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-primary mb-1">
              DRP<span className="text-accent">.</span>
            </div>
            <p className="text-sm text-muted">{footer.tagline}</p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted">{footer.copyright}</p>
            <p className="text-xs text-muted/60">{footer.legal}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
