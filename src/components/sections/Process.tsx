"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { SectionHeader } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { process } from "@/content/site";
import { Icon, IconName } from "@/components/ui/Icons";

// Process step colors for variety
const stepColors = [
  { bg: "bg-accent/10", border: "border-accent/20", text: "text-accent", number: "bg-accent text-black" },
  { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400", number: "bg-blue-500 text-white" },
  { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400", number: "bg-purple-500 text-white" },
  { bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400", number: "bg-orange-500 text-white" },
];

export function Process() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-section-sm md:py-section">
      <Container>
        <SectionHeader
          title="Werkwijze"
          subtitle="Ons proces"
          description="Een gestructureerde aanpak die kwaliteit en transparantie garandeert."
        />

        {/* Process steps with connector */}
        <div className="relative">
          {/* Horizontal connector line (desktop only) */}
          <div className="hidden lg:block absolute top-13 left-[10%] right-[10%] h-px bg-surface-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {process.map((step, index) => (
              <ProcessStep
                key={step.step}
                step={step}
                colorIndex={index}
                animate={isVisible}
                delay={index * 150}
                isLast={index === process.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

interface ProcessStepProps {
  step: {
    step: number;
    title: string;
    description: string;
    icon: string;
  };
  colorIndex: number;
  animate: boolean;
  delay: number;
  isLast: boolean;
}

function ProcessStep({ step, colorIndex, animate, delay }: ProcessStepProps) {
  const colors = stepColors[colorIndex % stepColors.length];

  return (
    <div
      className={cn(
        "relative flex flex-col items-center text-center",
        "transition-all duration-500 ease-out",
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon tile with number badge */}
      <div className="relative mb-5">
        {/* Icon container */}
        <div
          className={cn(
            "w-24 h-24 rounded-2xl flex items-center justify-center",
            "border transition-all duration-300",
            colors.bg,
            colors.border,
            "hover:scale-105"
          )}
        >
          <Icon
            name={step.icon as IconName}
            size={36}
            className={colors.text}
          />
        </div>

        {/* Step number badge */}
        <div
          className={cn(
            "absolute -top-2 -right-2 w-8 h-8 rounded-full",
            "flex items-center justify-center",
            "text-sm font-bold",
            "ring-4 ring-background",
            colors.number
          )}
        >
          {step.step}
        </div>
      </div>

      {/* Content */}
      <h3 className={cn("text-lg font-semibold mb-2", colors.text)}>
        {step.title}
      </h3>

      <p className="text-tertiary text-sm leading-relaxed max-w-60">
        {step.description}
      </p>
    </div>
  );
}
