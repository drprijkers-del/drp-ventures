"use client";

import { Section, SectionHeader, Panel } from "@/components/ui/Section";
import { PersonaContent } from "@/content/persona";
import { cn } from "@/lib/cn";

interface PersonaExperienceProps {
  content: PersonaContent;
}

const typeStyles: Record<string, string> = {
  current: "border-l-accent",
  venture: "border-l-blue-400",
  foundation: "border-l-purple-400",
};

export function PersonaExperience({ content }: PersonaExperienceProps) {
  const { experience, sectionLabels } = content;

  return (
    <Section id="experience">
      <SectionHeader label={sectionLabels.experience} />

      <div className="space-y-4">
        {experience.map((item) => (
          <Panel
            key={item.id}
            padding="md"
            className={cn("border-l-4", typeStyles[item.type] || "border-l-gray-400")}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-accent text-sm">{item.organization}</p>
              </div>

              {item.period && (
                <span className="text-xs text-muted font-mono">
                  {item.period}
                </span>
              )}
            </div>

            <p className="text-secondary text-sm leading-relaxed">
              {item.description}
            </p>
          </Panel>
        ))}
      </div>
    </Section>
  );
}
