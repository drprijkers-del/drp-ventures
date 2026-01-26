"use client";

import { Section, SectionHeader, Panel } from "@/components/ui/Section";
import { PersonaContent } from "@/content/persona";
import { Icon } from "@/components/ui/Icons";

interface PersonaContactProps {
  content: PersonaContent;
}

export function PersonaContact({ content }: PersonaContactProps) {
  const { contactSection, contact, sectionLabels } = content;

  return (
    <Section id="contact">
      <SectionHeader
        label={sectionLabels.contact}
        title={contactSection.subtitle}
        description={contactSection.description}
      />

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-3">
          <Panel padding="lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    {contactSection.formFields.name}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-surface-card border border-surface-border rounded-lg text-primary placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder={contactSection.formFields.name}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    {contactSection.formFields.email}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-surface-card border border-surface-border rounded-lg text-primary placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder={contactSection.formFields.email}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    {contactSection.formFields.company}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-surface-card border border-surface-border rounded-lg text-primary placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                    placeholder={contactSection.formFields.company}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    {contactSection.formFields.subject}
                  </label>
                  <select className="w-full px-4 py-3 bg-surface-card border border-surface-border rounded-lg text-primary focus:outline-none focus:border-accent transition-colors">
                    {contactSection.subjects.map((subject, i) => (
                      <option key={i} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  {contactSection.formFields.message}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-surface-card border border-surface-border rounded-lg text-primary placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder={contactSection.formFields.message}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-colors"
              >
                {contactSection.formFields.submit}
              </button>
            </form>
          </Panel>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <Panel padding="md">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Icon name="Mail" size={18} />
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-secondary hover:text-accent transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Icon name="Phone" size={18} />
                </div>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-secondary hover:text-accent transition-colors"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Icon name="MapPin" size={18} />
                </div>
                <span className="text-secondary">{contact.location}</span>
              </li>
              {contact.linkedin && (
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Icon name="LinkedIn" size={18} />
                  </div>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </Panel>
        </div>
      </div>
    </Section>
  );
}
