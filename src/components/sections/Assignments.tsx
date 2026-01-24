"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { SectionHeader } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { assignments, assignmentsSection } from "@/content/site";

// Sector colors for visual variety
const sectorColors: Record<string, { accent: string; bg: string; border: string }> = {
  financieel: {
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  energie: {
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  overheid: {
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  retail: {
    accent: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  media: {
    accent: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  infrastructuur: {
    accent: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
};

const sectorLabels: Record<string, string> = {
  financieel: "Financieel",
  energie: "Energie",
  overheid: "Overheid",
  retail: "Retail",
  media: "Media",
  infrastructuur: "Infrastructuur",
};

export function Assignments() {
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

  return (
    <section id="assignments" ref={sectionRef} className="py-section-sm md:py-section">
      <Container>
        <SectionHeader
          label={assignmentsSection.label}
          title={assignmentsSection.title}
        />

        {/* Assignments grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {assignments.map((assignment, index) => (
            <AssignmentCard
              key={assignment.id}
              assignment={assignment}
              animate={isVisible}
              delay={index * 75}
            />
          ))}
        </div>

        {/* Footer note */}
        <p
          className={cn(
            "mt-10 text-center text-tertiary text-sm italic",
            "transition-all duration-500 delay-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {assignmentsSection.description}
        </p>
      </Container>
    </section>
  );
}

interface AssignmentCardProps {
  assignment: {
    id: string;
    organization: string;
    role: string;
    description: string;
    sector: string;
  };
  animate: boolean;
  delay: number;
}

function AssignmentCard({ assignment, animate, delay }: AssignmentCardProps) {
  const colors = sectorColors[assignment.sector] || sectorColors.financieel;

  return (
    <div
      className={cn(
        "group relative p-6 rounded-xl",
        "bg-surface-card border border-surface-border",
        "transition-all duration-500 ease-out",
        "hover:border-surface-border-light hover:shadow-card-hover",
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          {/* Organization */}
          <h3 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
            {assignment.organization}
          </h3>
          {/* Role */}
          <p className={cn("text-sm font-medium", colors.accent)}>
            {assignment.role}
          </p>
        </div>

        {/* Sector badge */}
        <span
          className={cn(
            "shrink-0 px-3 py-1 rounded-full text-xs font-medium",
            colors.bg,
            colors.border,
            colors.accent,
            "border"
          )}
        >
          {sectorLabels[assignment.sector] || assignment.sector}
        </span>
      </div>

      {/* Description */}
      <p className="text-secondary text-sm leading-relaxed">
        {assignment.description}
      </p>

      {/* Subtle accent line */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl",
          "bg-gradient-to-r from-transparent via-current to-transparent",
          colors.accent,
          "opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        )}
      />
    </div>
  );
}
