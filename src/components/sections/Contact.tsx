"use client";

import { useState, FormEvent } from "react";
import { SectionHeader, Panel } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contact, siteConfig } from "@/content/site";
import { MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon, GitHubIcon, CheckCircleIcon } from "@/components/ui/Icons";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual form handling
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-section-sm md:py-section">
      <Container>
        <Panel>
          <SectionHeader
            title="Contact"
            subtitle={contact.title}
            description={contact.description}
          />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-surface-card border border-surface-border rounded-lg p-6 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-4">
                      <CheckCircleIcon size={32} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Bericht verzonden!
                    </h3>
                    <p className="text-secondary">
                      Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-secondary mb-2"
                        >
                          {contact.formFields.name} *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-lg text-primary placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="Uw naam"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-secondary mb-2"
                        >
                          {contact.formFields.email} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-lg text-primary placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="uw@email.nl"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-secondary mb-2"
                        >
                          {contact.formFields.company}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-lg text-primary placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="Bedrijfsnaam"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-secondary mb-2"
                        >
                          {contact.formFields.subject} *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-lg text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                        >
                          <option value="">Selecteer onderwerp</option>
                          {contact.subjects.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-secondary mb-2"
                      >
                        {contact.formFields.message} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-lg text-primary placeholder-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                        placeholder="Vertel ons over uw project of vraag..."
                      />
                    </div>

                    <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full sm:w-auto">
                      {contact.formFields.submit}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-surface-card border border-surface-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Contactgegevens
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 text-secondary hover:text-accent transition-colors group"
                    >
                      <span className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center group-hover:bg-accent-muted transition-colors">
                        <MailIcon size={18} className="text-accent" />
                      </span>
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center gap-3 text-secondary hover:text-accent transition-colors group"
                    >
                      <span className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center group-hover:bg-accent-muted transition-colors">
                        <PhoneIcon size={18} className="text-accent" />
                      </span>
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-secondary">
                    <span className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center shrink-0">
                      <MapPinIcon size={18} className="text-accent" />
                    </span>
                    <span>
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.zip} {siteConfig.address.city}
                      <br />
                      {siteConfig.address.country}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface-card border border-surface-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Volg ons
                </h3>
                <div className="flex gap-3">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center text-tertiary hover:bg-accent hover:text-black transition-all"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon size={18} />
                  </a>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center text-tertiary hover:bg-accent hover:text-black transition-all"
                    aria-label="GitHub"
                  >
                    <GitHubIcon size={18} />
                  </a>
                </div>
              </div>

              <div className="bg-surface-card border border-surface-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Bedrijfsgegevens
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted">KvK</dt>
                    <dd className="text-secondary">{siteConfig.kvk}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">BTW</dt>
                    <dd className="text-secondary">{siteConfig.btw}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </section>
  );
}
