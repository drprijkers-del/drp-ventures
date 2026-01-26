"use client";

import { useState } from "react";
import { Section, SectionHeader, Panel } from "@/components/ui/Section";
import { PersonaContent, Language } from "@/content/persona";
import { Icon } from "@/components/ui/Icons";

// ============================================
// TRANSLATIONS
// ============================================

const LABELS: Record<Language, { phone: string; email: string; linkedin: string; location: string }> = {
  nl: { phone: "Telefoon", email: "E-mail", linkedin: "LinkedIn", location: "Locatie" },
  en: { phone: "Phone", email: "Email", linkedin: "LinkedIn", location: "Location" },
  sv: { phone: "Telefon", email: "E-post", linkedin: "LinkedIn", location: "Plats" },
};

const REVEAL_TEXT: Record<Language, { phone: string; email: string }> = {
  nl: { phone: "Toon nummer", email: "Toon adres" },
  en: { phone: "Show number", email: "Show address" },
  sv: { phone: "Visa nummer", email: "Visa adress" },
};

// ============================================
// COMPONENT
// ============================================

interface PersonaContactProps {
  content: PersonaContent;
}

export function PersonaContact({ content }: PersonaContactProps) {
  const { contactSection, contact, sectionLabels, language } = content;
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const [emailRevealed, setEmailRevealed] = useState(false);
  const labels = LABELS[language];

  // Mask phone: "+31 6 1234 5678" → "+31 6 •••• ••78"
  const maskPhone = (phone: string) => {
    if (phone.length < 8) return "••••••••••";
    return phone.slice(0, 6) + "•••• ••" + phone.slice(-2);
  };

  // Mask email: "info@drpventures.nl" → "in••@••••ventures.nl"
  const maskEmail = (email: string) => {
    const [local, domain] = email.split("@");
    if (!domain) return "••••@••••.••";
    const domainParts = domain.split(".");
    const ext = domainParts.pop();
    return local.slice(0, 2) + "••@••••" + domainParts.join(".").slice(-8) + "." + ext;
  };

  return (
    <Section id="contact">
      <SectionHeader
        label={sectionLabels.contact}
        title={contactSection.subtitle}
        description={contactSection.description}
      />

      <div className="max-w-xl mx-auto">
        <Panel padding="lg">
          <ul className="space-y-6">
            {/* Phone */}
            <li className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Icon name="Phone" size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted uppercase tracking-wider mb-1">
                  {labels.phone}
                </p>
                {phoneRevealed ? (
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    {contact.phone}
                  </a>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="text-secondary font-medium">
                      {maskPhone(contact.phone)}
                    </span>
                    <button
                      onClick={() => setPhoneRevealed(true)}
                      className="text-xs text-accent hover:text-accent-light px-2 py-1 bg-accent/10 hover:bg-accent/20 rounded transition-colors"
                    >
                      {REVEAL_TEXT[language].phone}
                    </button>
                  </div>
                )}
              </div>
            </li>

            {/* Email */}
            <li className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Icon name="Mail" size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted uppercase tracking-wider mb-1">
                  {labels.email}
                </p>
                {emailRevealed ? (
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    {contact.email}
                  </a>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="text-secondary font-medium">
                      {maskEmail(contact.email)}
                    </span>
                    <button
                      onClick={() => setEmailRevealed(true)}
                      className="text-xs text-accent hover:text-accent-light px-2 py-1 bg-accent/10 hover:bg-accent/20 rounded transition-colors"
                    >
                      {REVEAL_TEXT[language].email}
                    </button>
                  </div>
                )}
              </div>
            </li>

            {/* LinkedIn */}
            {contact.linkedin && (
              <li className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Icon name="LinkedIn" size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">
                    {labels.linkedin}
                  </p>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    {contact.name}
                  </a>
                </div>
              </li>
            )}

            {/* Location */}
            <li className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Icon name="MapPin" size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted uppercase tracking-wider mb-1">
                  {labels.location}
                </p>
                <span className="text-primary font-medium">{contact.location}</span>
              </div>
            </li>
          </ul>
        </Panel>
      </div>
    </Section>
  );
}
