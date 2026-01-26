"use client";

import { cn } from "@/lib/cn";
import { Section, SectionHeader, Panel } from "@/components/ui/Section";
import { PersonaContent } from "@/content/persona";
import { Icon, IconName } from "@/components/ui/Icons";

interface PersonaServicesProps {
  content: PersonaContent;
}

export function PersonaServices({ content }: PersonaServicesProps) {
  const { services, sectionLabels } = content;

  return (
    <Section id="services">
      <SectionHeader label={sectionLabels.services} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <Panel key={service.id} padding="sm" className="group sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Icon */}
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                <Icon name={service.icon as IconName} size={20} className="sm:hidden" />
                <Icon name={service.icon as IconName} size={24} className="hidden sm:block" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-3 sm:mb-4">
                  {service.description}
                </p>

                {/* Deliverables */}
                <ul className="space-y-1.5">
                  {service.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-muted"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </Section>
  );
}
