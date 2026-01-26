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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {process.map((step, index) => (
          <div key={step.step} className="relative">
            {/* Connector line - only on desktop */}
            {index < process.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-surface-border" />
            )}

            {/* Step card */}
            <div className="bg-surface-card border border-surface-border rounded-xl p-4 sm:p-6">
              {/* Step number & icon */}
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Icon name={step.icon as IconName} size={20} className="text-accent sm:hidden" />
                  <Icon name={step.icon as IconName} size={24} className="text-accent hidden sm:block" />
                </div>
                <span className="text-2xl sm:text-3xl font-bold text-muted">
                  {String(step.step).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">
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
