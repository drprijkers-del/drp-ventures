"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { cn } from "@/lib/cn";
import { SectionHeader, Panel } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contact, siteConfig } from "@/content/site";
import { MailIcon, PhoneIcon, MapPinIcon, CheckCircleIcon } from "@/components/ui/Icons";

// Contact card colors
const cardColors = [
  { bg: "bg-accent/10", border: "border-accent/20", icon: "text-accent", hover: "hover:border-accent/40" },
  { bg: "bg-blue-500/10", border: "border-blue-500/20", icon: "text-blue-400", hover: "hover:border-blue-500/40" },
  { bg: "bg-purple-500/10", border: "border-purple-500/20", icon: "text-purple-400", hover: "hover:border-purple-500/40" },
];

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = (formData: FormData): boolean => {
    const newErrors: FormErrors = {};

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2) {
      newErrors.name = "Vul een geldige naam in";
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Vul een geldig e-mailadres in";
    }
    if (!subject) {
      newErrors.subject = "Selecteer een onderwerp";
    }
    if (!message || message.trim().length < 10) {
      newErrors.message = "Bericht moet minimaal 10 karakters bevatten";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (!validateForm(formData)) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactCards = [
    {
      icon: MailIcon,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: PhoneIcon,
      label: "Telefoon",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
    },
    {
      icon: MapPinIcon,
      label: "Locatie",
      value: `${siteConfig.address.city}, ${siteConfig.address.country}`,
      href: null,
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-section-sm md:py-section">
      <Container>
        <Panel>
          <SectionHeader
            label="Contact"
            title={contact.title}
            description={contact.description}
          />

          {/* Contact cards row */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {contactCards.map((card, index) => {
              const colors = cardColors[index];
              const CardWrapper = card.href ? "a" : "div";
              return (
                <CardWrapper
                  key={card.label}
                  {...(card.href ? { href: card.href } : {})}
                  className={cn(
                    "group flex items-center gap-4 p-5 rounded-xl border",
                    "transition-all duration-500 ease-out",
                    colors.bg,
                    colors.border,
                    card.href && colors.hover,
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center",
                    "bg-surface-card border border-surface-border",
                    "transition-colors duration-300",
                    card.href && "group-hover:border-surface-border-light"
                  )}>
                    <card.icon size={22} className={colors.icon} />
                  </div>
                  <div>
                    <p className="text-muted text-xs uppercase tracking-wider mb-1">{card.label}</p>
                    <p className={cn(
                      "text-primary font-medium text-sm",
                      card.href && "group-hover:text-accent transition-colors"
                    )}>
                      {card.value}
                    </p>
                  </div>
                </CardWrapper>
              );
            })}
          </div>

          {/* Form */}
          <div
            className={cn(
              "bg-surface-card border border-surface-border rounded-xl p-6 md:p-8",
              "transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            )}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircleIcon size={40} className="text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Bericht verzonden!
                </h3>
                <p className="text-secondary max-w-md mx-auto">
                  Bedankt voor uw bericht. Wij nemen binnen 24 uur contact met u op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      {contact.formFields.name} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={cn(
                        "w-full px-4 py-3 bg-surface-elevated border rounded-lg",
                        "text-primary placeholder-muted",
                        "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent",
                        "transition-all duration-200",
                        errors.name ? "border-red-500" : "border-surface-border"
                      )}
                      placeholder="Uw naam"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                      {contact.formFields.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={cn(
                        "w-full px-4 py-3 bg-surface-elevated border rounded-lg",
                        "text-primary placeholder-muted",
                        "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent",
                        "transition-all duration-200",
                        errors.email ? "border-red-500" : "border-surface-border"
                      )}
                      placeholder="uw@email.nl"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-secondary mb-2">
                      {contact.formFields.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-surface-elevated border border-surface-border rounded-lg text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
                      placeholder="Bedrijfsnaam (optioneel)"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                      {contact.formFields.subject} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className={cn(
                        "w-full px-4 py-3 bg-surface-elevated border rounded-lg",
                        "text-primary",
                        "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent",
                        "transition-all duration-200",
                        errors.subject ? "border-red-500" : "border-surface-border"
                      )}
                    >
                      <option value="">Selecteer onderwerp</option>
                      {contact.subjects.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    {contact.formFields.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={cn(
                      "w-full px-4 py-3 bg-surface-elevated border rounded-lg",
                      "text-primary placeholder-muted resize-none",
                      "focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent",
                      "transition-all duration-200",
                      errors.message ? "border-red-500" : "border-surface-border"
                    )}
                    placeholder="Vertel ons over uw project of vraag..."
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-muted text-xs">* Verplichte velden</p>
                  <Button type="submit" size="lg" isLoading={isSubmitting}>
                    {contact.formFields.submit}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Panel>
      </Container>
    </section>
  );
}
