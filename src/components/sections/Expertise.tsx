"use client";

import { useEffect, useRef, useState } from "react";
import { Section, SectionHeader, Panel } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { expertise } from "@/content/site";

// Progress Bar Component
function ProgressBar({
  label,
  percentage,
  animate = false,
}: {
  label: string;
  percentage: number;
  animate?: boolean;
}) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-3">
        <span className="text-primary font-medium text-sm uppercase tracking-wide">
          {label}
        </span>
        <span className="text-accent font-bold text-sm">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={
            {
              "--progress-width": animate ? `${percentage}%` : "0%",
              width: animate ? `${percentage}%` : "0%",
            } as React.CSSProperties
          }
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label}: ${percentage}%`}
        />
      </div>
    </div>
  );
}

export function Expertise() {
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

  // Split skills into columns
  const midPoint = Math.ceil(expertise.length / 2);
  const leftColumn = expertise.slice(0, midPoint);
  const rightColumn = expertise.slice(midPoint);

  return (
    <section id="expertise" ref={sectionRef} className="py-section-sm md:py-section">
      <Container>
        <Panel>
          <SectionHeader
            title="Skills"
            subtitle="Technische Expertise"
            description="Jarenlange ervaring in moderne technologieën en methodologieën."
          />

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Left column */}
            <div className="space-y-6">
              {leftColumn.map((item, index) => (
                <ProgressBar
                  key={index}
                  label={item.skill}
                  percentage={item.level}
                  animate={isVisible}
                />
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {rightColumn.map((item, index) => (
                <ProgressBar
                  key={index}
                  label={item.skill}
                  percentage={item.level}
                  animate={isVisible}
                />
              ))}
            </div>
          </div>
        </Panel>
      </Container>
    </section>
  );
}
