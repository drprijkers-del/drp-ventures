"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { clients } from "@/content/site";

// Colors for pill variety
const pillColors = [
  { bg: "bg-accent/10", border: "border-accent/20", text: "text-accent" },
  { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
  { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
  { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-400" },
];

export function Clients() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 border-y border-surface-border bg-surface-elevated/30">
      <Container>
        <div
          className={cn(
            "flex flex-col items-center text-center",
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {/* Label */}
          <p className="text-muted text-sm uppercase tracking-widest mb-8">
            Vertrouwd door toonaangevende organisaties
          </p>

          {/* Client pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {clients.map((client, index) => {
              const colors = pillColors[index % pillColors.length];
              return (
                <div
                  key={index}
                  className={cn(
                    "px-5 py-2.5 rounded-full border",
                    "transition-all duration-500 ease-out",
                    "hover:scale-105",
                    colors.bg,
                    colors.border,
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <span className={cn("text-sm font-medium", colors.text)}>
                    {client.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Subtle divider dots */}
          <div className="flex items-center gap-2 mt-10">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-1.5 h-1.5 rounded-full bg-surface-border",
                  "transition-all duration-500",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
