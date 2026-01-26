"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Section, SectionHeader, Panel } from "@/components/ui/Section";
import { PersonaContent } from "@/content/persona";
import { Icon, IconName } from "@/components/ui/Icons";

interface PersonaAboutProps {
  content: PersonaContent;
}

export function PersonaAbout({ content }: PersonaAboutProps) {
  const { about, sectionLabels } = content;
  const [imageError, setImageError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section id="about">
      <SectionHeader label={sectionLabels.about} title={about.subtitle} />

      <Panel padding="lg">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Photo */}
          <div
            className={cn(
              "lg:col-span-2",
              "transition-all duration-700",
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="relative">
              <div
                className="absolute -inset-4 bg-accent/5 rounded-2xl blur-2xl"
                aria-hidden="true"
              />

              <div className="relative aspect-4/5 rounded-xl overflow-hidden">
                <div className="absolute inset-0 rounded-xl border border-white/10 z-10 pointer-events-none" />

                {!imageError ? (
                  <Image
                    src="/images/profiel-foto-2.jpg"
                    alt={content.contact.name}
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-surface-card flex items-center justify-center">
                    <Icon name="Users" size={48} className="text-muted" />
                  </div>
                )}

                <div
                  className="absolute inset-0 z-5 pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(to top, rgba(26,26,26,0.6) 0%, transparent 40%),
                      linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, transparent 20%)
                    `,
                  }}
                />
              </div>

              <div
                className="absolute -bottom-2 -right-2 w-16 h-16 border border-accent/20 rounded-lg"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={cn(
              "lg:col-span-3 flex flex-col justify-center",
              "transition-all duration-700 delay-100",
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              {about.title}
            </h3>

            <p className="text-secondary text-lg leading-relaxed mb-8">
              {about.intro}
            </p>

            {/* Approach block */}
            <div className="p-6 bg-surface-elevated/50 rounded-xl border border-surface-border mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-accent" aria-hidden="true" />
                <h4 className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {about.approach.title}
                </h4>
              </div>
              <p className="text-secondary leading-relaxed">
                {about.approach.description}
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {about.values.map((value, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3 p-4 rounded-lg",
                    "bg-surface-card/50 border border-surface-border/50",
                    "transition-all duration-300",
                    "hover:bg-surface-card hover:border-surface-border"
                  )}
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Icon name={value.icon as IconName} size={18} />
                  </div>
                  <div>
                    <h5 className="text-primary font-medium text-sm mb-1">
                      {value.title}
                    </h5>
                    <p className="text-tertiary text-xs leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Panel>
    </Section>
  );
}
