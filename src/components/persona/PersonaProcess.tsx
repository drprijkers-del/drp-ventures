"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { PersonaContent } from "@/content/persona";
import { Icon, IconName } from "@/components/ui/Icons";

interface PersonaProcessProps {
  content: PersonaContent;
}

export function PersonaProcess({ content }: PersonaProcessProps) {
  const { process, sectionLabels } = content;

  return (
    <Section id="process">
      <SectionHeader label={sectionLabels.process} />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {process.map((step, index) => (
          <div key={step.step} className="relative">
            {/* Connector line */}
            {index < process.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-surface-border" />
            )}

            {/* Step card */}
            <div className="bg-surface-card border border-surface-border rounded-xl p-6">
              {/* Step number & icon */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Icon name={step.icon as IconName} size={24} className="text-accent" />
                </div>
                <span className="text-3xl font-bold text-muted">
                  {String(step.step).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-primary mb-2">
                {step.title}
              </h3>

              <p className="text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
