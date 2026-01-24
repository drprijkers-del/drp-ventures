"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Section, SectionHeader, Panel } from "@/components/ui/Section";
import { experience } from "@/content/site";

// Color blocks for different experience types
const typeColors = {
  venture: {
    block: "bg-accent",
    badge: "bg-accent/10 text-accent border-accent/20",
    dot: "bg-accent",
  },
  employment: {
    block: "bg-blue-500",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    dot: "bg-blue-500",
  },
};

interface ExperienceRowProps {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "venture" | "employment";
  isLast: boolean;
  animate: boolean;
  delay: number;
}

function ExperienceRow({
  year,
  title,
  company,
  description,
  type,
  isLast,
  animate,
  delay,
}: ExperienceRowProps) {
  const colors = typeColors[type];

  return (
    <div
      className={cn(
        "relative grid grid-cols-[auto_1fr] gap-6",
        "transition-all duration-500",
        animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Left: Timeline */}
      <div className="flex flex-col items-center">
        {/* Color block */}
        <div
          className={cn(
            "w-3 h-3 rounded-sm rotate-45",
            colors.block
          )}
        />
        {/* Connecting line */}
        {!isLast && (
          <div className="w-px flex-1 bg-surface-border mt-3" />
        )}
      </div>

      {/* Right: Content */}
      <div className={cn("pb-10", isLast && "pb-0")}>
        {/* Header row */}
        <div className="flex flex-wrap items-center gap-3 mb-2">
          {/* Period badge */}
          <span
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium border",
              colors.badge
            )}
          >
            {year}
          </span>
          {/* Type indicator */}
          <span className="text-xs text-muted uppercase tracking-wider">
            {type === "venture" ? "Venture" : "Employment"}
          </span>
        </div>

        {/* Title & Company */}
        <h3 className="text-lg font-semibold text-primary mb-1">
          {title}
        </h3>
        <p className={cn("font-medium mb-2", type === "venture" ? "text-accent" : "text-blue-400")}>
          {company}
        </p>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export function Experience() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-section-sm md:py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Header */}
          <div className="lg:col-span-2">
            <SectionHeader
              title="Ervaring"
              subtitle="Track Record"
            />
            <p className="text-secondary leading-relaxed mt-4">
              Een overzicht van professionele mijlpalen, ventures en sleutelposities door de jaren heen.
            </p>

            {/* Legend */}
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-sm rotate-45 bg-accent" />
                <span className="text-sm text-tertiary">Eigen venture / onderneming</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-sm rotate-45 bg-blue-500" />
                <span className="text-sm text-tertiary">Werkervaring / consultancy</span>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-3">
            <div className="space-y-0">
              {experience.map((item, index) => (
                <ExperienceRow
                  key={index}
                  year={item.year}
                  title={item.title}
                  company={item.company}
                  description={item.description}
                  type={item.type}
                  isLast={index === experience.length - 1}
                  animate={isVisible}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
