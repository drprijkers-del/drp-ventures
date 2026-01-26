"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { SectionHeader } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { experience, experienceSection } from "@/content/site";

// Color blocks for different experience types
const typeColors = {
  current: {
    block: "bg-accent",
    text: "text-accent",
    label: "Huidig",
  },
  venture: {
    block: "bg-purple-500",
    text: "text-purple-400",
    label: "Eigen venture",
  },
  foundation: {
    block: "bg-blue-500",
    text: "text-blue-400",
    label: "Fundament",
  },
};

interface ExperienceCardProps {
  title: string;
  organization: string;
  description: string;
  type: "current" | "venture" | "foundation";
  animate: boolean;
  delay: number;
}

function ExperienceCard({
  title,
  organization,
  description,
  type,
  animate,
  delay,
}: ExperienceCardProps) {
  const colors = typeColors[type];

  return (
    <div
      className={cn(
        "relative p-6 rounded-xl",
        "bg-surface-card border border-surface-border",
        "transition-all duration-500 ease-out",
        "hover:border-surface-border-light hover:shadow-card-hover",
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Type indicator */}
      <div className="flex items-center gap-2 mb-4">
        <div className={cn("w-2 h-2 rounded-full", colors.block)} />
        <span className={cn("text-xs font-medium uppercase tracking-wider", colors.text)}>
          {colors.label}
        </span>
      </div>

      {/* Title & Organization */}
      <h3 className="text-lg font-semibold text-primary mb-1">
        {title}
      </h3>
      <p className={cn("font-medium mb-3", colors.text)}>
        {organization}
      </p>

      {/* Description */}
      <p className="text-secondary text-sm leading-relaxed">
        {description}
      </p>
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
      <Container>
        <SectionHeader
          label={experienceSection.label}
          title={experienceSection.title}
          description={experienceSection.description}
        />

        {/* Experience cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {experience.map((item, index) => (
            <ExperienceCard
              key={item.id}
              title={item.title}
              organization={item.organization}
              description={item.description}
              type={item.type}
              animate={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
