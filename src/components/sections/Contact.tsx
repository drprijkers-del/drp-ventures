"use client";

import { useState, FormEvent } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { contact, siteConfig } from "@/content/site";
import { MailIcon, PhoneIcon, MapPinIcon, LinkedInIcon, GitHubIcon } from "@/components/ui/Icons";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual form handling
    // Options: Formspree, Netlify Forms, custom API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <Section id="contact" background="dark">
      <SectionHeader
        subtitle="Contact"
        title={contact.title}
        description={contact.description}
      />

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Contact form */}
        <div className="lg:col-span-3">
          <Card variant="bordered" padding="lg">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-brand-lime/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-brand-lime"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Bericht verzonden!
                </h3>
                <p className="text-dark-400">
                  Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dark-200 mb-2"
                    >
                      {contact.formFields.name} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-colors"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark-200 mb-2"
                    >
                      {contact.formFields.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-colors"
                      placeholder="uw@email.nl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-dark-200 mb-2"
                    >
                      {contact.formFields.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-colors"
                      placeholder="Bedrijfsnaam"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-dark-200 mb-2"
                    >
                      {contact.formFields.subject} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-colors"
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
                    className="block text-sm font-medium text-dark-200 mb-2"
                  >
                    {contact.formFields.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-colors resize-none"
                    placeholder="Vertel ons over uw project of vraag..."
                  />
                </div>

                <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full sm:w-auto">
                  {contact.formFields.submit}
                </Button>
              </form>
            )}
          </Card>
        </div>

        {/* Contact info */}
        <div className="lg:col-span-2 space-y-6">
          <Card variant="bordered">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contactgegevens
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-dark-300 hover:text-brand-lime transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center group-hover:bg-brand-lime/10 transition-colors">
                    <MailIcon size={18} className="text-brand-lime" />
                  </span>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-dark-300 hover:text-brand-lime transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center group-hover:bg-brand-lime/10 transition-colors">
                    <PhoneIcon size={18} className="text-brand-lime" />
                  </span>
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-dark-300">
                <span className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center flex-shrink-0">
                  <MapPinIcon size={18} className="text-brand-lime" />
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
          </Card>

          <Card variant="bordered">
            <h3 className="text-lg font-semibold text-white mb-4">
              Volg ons
            </h3>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-brand-lime hover:text-dark-950 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:bg-brand-lime hover:text-dark-950 transition-all"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
            </div>
          </Card>

          <Card variant="bordered">
            <h3 className="text-lg font-semibold text-white mb-4">
              Bedrijfsgegevens
            </h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-dark-500">KvK</dt>
                <dd className="text-dark-300">{siteConfig.kvk}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-dark-500">BTW</dt>
                <dd className="text-dark-300">{siteConfig.btw}</dd>
              </div>
            </dl>
          </Card>
        </div>
      </div>
    </Section>
  );
}
