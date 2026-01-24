"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Section, SectionHeader } from "@/components/ui/Section";
import { expertise } from "@/content/site";

// Skill colors for variety
const skillColors = [
  { bg: "bg-accent/10", border: "border-accent/20", bar: "bg-accent", text: "text-accent" },
  { bg: "bg-blue-500/10", border: "border-blue-500/20", bar: "bg-blue-500", text: "text-blue-400" },
  { bg: "bg-purple-500/10", border: "border-purple-500/20", bar: "bg-purple-500", text: "text-purple-400" },
  { bg: "bg-orange-500/10", border: "border-orange-500/20", bar: "bg-orange-500", text: "text-orange-400" },
];

// Skill descriptions
const skillDescriptions: Record<string, string> = {
  "TypeScript / JavaScript": "Full-stack development met moderne tooling en frameworks",
  "React / Next.js": "Server-side rendering, static generation en app router",
  "Node.js / Backend": "RESTful APIs, GraphQL, microservices architectuur",
  "Cloud (AWS / GCP / Azure)": "Infrastructuur, serverless, containerization",
  "Python / Data Engineering": "Data pipelines, analytics en machine learning",
  "DevOps / CI/CD": "Automatisering, testing en deployment workflows",
  "System Architecture": "Schaalbare en onderhoudbare systeemontwerpen",
  "Team Leadership": "Coaching, mentoring en agile methodologieën",
};

interface SkillCardProps {
  skill: string;
  level: number;
  description: string;
  colorIndex: number;
  animate: boolean;
  delay: number;
}

function SkillCard({ skill, level, description, colorIndex, animate, delay }: SkillCardProps) {
  const colors = skillColors[colorIndex % skillColors.length];

  return (
    <div
      className={cn(
        "group p-6 rounded-xl",
        "bg-surface-card border border-surface-border",
        "transition-all duration-500",
        "hover:border-surface-border-light hover:shadow-card-hover",
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className={cn("font-semibold text-lg mb-1", colors.text)}>
            {skill}
          </h3>
          <p className="text-tertiary text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <span className={cn("text-2xl font-bold", colors.text)}>
          {level}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 bg-surface-elevated rounded-full overflow-hidden">
        <div
          className={cn(
            "absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out",
            colors.bar
          )}
          style={{ width: animate ? `${level}%` : "0%" }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill}: ${level}%`}
        />
        {/* Glow effect */}
        <div
          className={cn(
            "absolute inset-y-0 left-0 rounded-full blur-sm opacity-50 transition-all duration-1000 ease-out",
            colors.bar
          )}
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
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

  // Take top 4 skills for cards
  const topSkills = expertise.slice(0, 4);

  return (
    <section id="expertise" ref={sectionRef} className="py-section-sm md:py-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Expertise"
          subtitle="Technische vaardigheden"
          description="Jarenlange ervaring in moderne technologieën en methodologieën."
        />

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {topSkills.map((item, index) => (
            <SkillCard
              key={index}
              skill={item.skill}
              level={item.level}
              description={skillDescriptions[item.skill] || ""}
              colorIndex={index}
              animate={isVisible}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Additional skills as tags */}
        {expertise.length > 4 && (
          <div
            className={cn(
              "mt-8 pt-8 border-t border-surface-border",
              "transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <p className="text-tertiary text-sm mb-4">Overige vaardigheden:</p>
            <div className="flex flex-wrap gap-3">
              {expertise.slice(4).map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg bg-surface-elevated border border-surface-border text-secondary text-sm"
                >
                  {item.skill}
                  <span className="ml-2 text-accent font-medium">{item.level}%</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
