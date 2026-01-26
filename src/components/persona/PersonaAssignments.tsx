"use client";

import { Section, SectionHeader, Panel } from "@/components/ui/Section";
import { PersonaContent } from "@/content/persona";
import { cn } from "@/lib/cn";

interface PersonaAssignmentsProps {
  content: PersonaContent;
}

const sectorColors: Record<string, string> = {
  financieel: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  energie: "bg-green-500/10 text-green-400 border-green-500/20",
  overheid: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  retail: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  media: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  infrastructuur: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  technology: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
};

export function PersonaAssignments({ content }: PersonaAssignmentsProps) {
  const { assignments, sectionLabels } = content;

  return (
    <Section id="assignments">
      <SectionHeader label={sectionLabels.assignments} />

      <div className="grid md:grid-cols-2 gap-4">
        {assignments.map((assignment) => (
          <Panel key={assignment.id} padding="md" className="group">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {assignment.organization}
                </h3>
                <p className="text-sm text-accent">{assignment.role}</p>
              </div>

              {/* Sector badge */}
              <span
                className={cn(
                  "shrink-0 px-2.5 py-1 text-xs font-medium rounded-full border",
                  sectorColors[assignment.sector] || "bg-gray-500/10 text-gray-400 border-gray-500/20"
                )}
              >
                {assignment.sector}
              </span>
            </div>

            <p className="text-secondary text-sm leading-relaxed">
              {assignment.description}
            </p>
          </Panel>
        ))}
      </div>
    </Section>
  );
}
