"use client";

import { useState } from "react";
import { Section, SectionHeader, Panel } from "@/components/ui/Section";
import { PersonaContent, Language } from "@/content/persona";
import { Icon, IconName } from "@/components/ui/Icons";

// ============================================
// TRANSLATIONS
// ============================================

const LABELS: Record<Language, { phone: string; email: string; linkedin: string; location: string }> = {
  nl: { phone: "Telefoon", email: "E-mail", linkedin: "LinkedIn", location: "Locatie" },
  en: { phone: "Phone", email: "Email", linkedin: "LinkedIn", location: "Location" },
  sv: { phone: "Telefon", email: "E-post", linkedin: "LinkedIn", location: "Plats" },
};

const REVEAL_TEXT: Record<Language, string> = {
  nl: "Toon",
  en: "Show",
  sv: "Visa",
};

// ============================================
// CONTACT ITEM COMPONENT
// ============================================

interface ContactItemProps {
  icon: IconName;
  label: string;
  children: React.ReactNode;
}

function ContactItem({ icon, label, children }: ContactItemProps) {
  return (
    <li className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
        <Icon name={icon} size={22} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted uppercase tracking-wider mb-1">{label}</p>
        <div className="text-primary font-medium">{children}</div>
      </div>
    </li>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

interface PersonaContactProps {
  content: PersonaContent;
}

export function PersonaContact({ content }: PersonaContactProps) {
  const { contactSection, contact, sectionLabels, language } = content;
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const [emailRevealed, setEmailRevealed] = useState(false);
  const labels = LABELS[language];
  const revealText = REVEAL_TEXT[language];

  // Mask phone: "+31 6 1234 5678" → "+31 6 •••• ••78"
  const maskPhone = (phone: string) => {
    if (phone.length < 8) return "••••••••••";
    return phone.slice(0, 6) + "•••• ••" + phone.slice(-2);
  };

  // Mask email: "dennis@drpventures.org" → "in••@••••ventures.nl"
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

      <Panel padding="lg">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Phone */}
            <ContactItem icon="Phone" label={labels.phone}>
              {phoneRevealed ? (
                <a
                  href={`tel:${contact.phone}`}
                  className="hover:text-accent transition-colors"
                >
                  {contact.phone}
                </a>
              ) : (
                <button
                  onClick={() => setPhoneRevealed(true)}
                  className="flex items-center gap-3 group"
                >
                  <span className="text-secondary">{maskPhone(contact.phone)}</span>
                  <span className="text-xs text-accent group-hover:text-accent-light px-2 py-0.5 bg-accent/10 group-hover:bg-accent/20 rounded transition-colors">
                    {revealText}
                  </span>
                </button>
              )}
            </ContactItem>

            {/* Email */}
            <ContactItem icon="Mail" label={labels.email}>
              {emailRevealed ? (
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {contact.email}
                </a>
              ) : (
                <button
                  onClick={() => setEmailRevealed(true)}
                  className="flex items-center gap-3 group"
                >
                  <span className="text-secondary">{maskEmail(contact.email)}</span>
                  <span className="text-xs text-accent group-hover:text-accent-light px-2 py-0.5 bg-accent/10 group-hover:bg-accent/20 rounded transition-colors">
                    {revealText}
                  </span>
                </button>
              )}
            </ContactItem>

            {/* LinkedIn */}
            {contact.linkedin && (
              <ContactItem icon="LinkedIn" label={labels.linkedin}>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {contact.name}
                </a>
              </ContactItem>
            )}

            {/* Location */}
            <ContactItem icon="MapPin" label={labels.location}>
              {contact.location}
            </ContactItem>
        </ul>
      </Panel>
    </Section>
  );
}
