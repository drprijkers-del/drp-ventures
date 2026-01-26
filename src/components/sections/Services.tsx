"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { SectionHeader, Panel } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { services, servicesSection } from "@/content/site";
import { Icon, IconName, CheckCircleIcon } from "@/components/ui/Icons";

// Service card accent colors for variety
const serviceColors = [
  { accent: "bg-accent", glow: "shadow-[0_0_20px_rgba(163,230,53,0.15)]", text: "text-accent" },
  { accent: "bg-blue-500", glow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]", text: "text-blue-400" },
  { accent: "bg-purple-500", glow: "shadow-[0_0_20px_rgba(168,85,247,0.15)]", text: "text-purple-400" },
  { accent: "bg-orange-500", glow: "shadow-[0_0_20px_rgba(249,115,22,0.15)]", text: "text-orange-400" },
];

export function Services() {
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
    <section id="services" ref={sectionRef} className="py-section-sm md:py-section">
      <Container>
        <Panel>
          <SectionHeader
            label={servicesSection.label}
            title={servicesSection.title}
            description={servicesSection.description}
          />

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                colorIndex={index}
                animate={isVisible}
                delay={index * 100}
              />
            ))}
          </div>
        </Panel>
      </Container>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    deliverables: string[];
  };
  colorIndex: number;
  animate: boolean;
  delay: number;
}

function ServiceCard({ service, colorIndex, animate, delay }: ServiceCardProps) {
  const colors = serviceColors[colorIndex % serviceColors.length];

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl",
        "bg-surface-card border border-surface-border",
        "transition-all duration-500 ease-out",
        "hover:border-surface-border-light hover:shadow-card-hover hover:-translate-y-1",
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Accent tile - subtle top border gradient */}
      <div className={cn("absolute top-0 left-0 right-0 h-1", colors.accent)} />

      {/* Background glow on hover */}
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          colors.glow
        )}
      />

      <div className="relative p-6">
        {/* Header with icon */}
        <div className="flex items-start gap-4 mb-4">
          {/* Icon tile */}
          <div
            className={cn(
              "shrink-0 w-14 h-14 rounded-xl flex items-center justify-center",
              "bg-surface-elevated border border-surface-border",
              "transition-all duration-300",
              "group-hover:border-surface-border-light group-hover:shadow-glow-sm"
            )}
          >
            <Icon
              name={service.icon as IconName}
              size={26}
              className={cn("transition-colors duration-300", colors.text)}
            />
          </div>

          {/* Title */}
          <div className="flex-1 pt-1">
            <h3 className={cn(
              "text-xl font-semibold mb-1 transition-colors duration-300",
              "text-primary group-hover:text-white"
            )}>
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-secondary text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Deliverables list */}
        <ul className="space-y-2.5">
          {service.deliverables.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-sm text-tertiary group-hover:text-secondary transition-colors duration-300"
            >
              <CheckCircleIcon
                size={15}
                className={cn("shrink-0 transition-colors duration-300", colors.text)}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
