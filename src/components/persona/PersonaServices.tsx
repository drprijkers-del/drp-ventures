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

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Panel key={service.id} padding="md" className="group">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                <Icon name={service.icon as IconName} size={24} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Deliverables */}
                <ul className="space-y-1.5">
                  {service.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs text-muted"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {item}
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
