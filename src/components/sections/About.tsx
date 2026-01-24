"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Section, SectionHeader, Panel } from "@/components/ui/Section";
import { about } from "@/content/site";
import { Icon, IconName } from "@/components/ui/Icons";

export function About() {
  const [imageError, setImageError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Section id="about">
      <SectionHeader
        label="Over Ons"
        title={about.subtitle}
      />

      <Panel padding="lg">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left column - Photo */}
          <div
            className={cn(
              "lg:col-span-2",
              "transition-all duration-700",
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-2xl" aria-hidden="true" />

              {/* Photo container */}
              <div className="relative aspect-4/5 rounded-xl overflow-hidden">
                {/* Border frame */}
                <div className="absolute inset-0 rounded-xl border border-white/10 z-10 pointer-events-none" />

                {/* Image or placeholder */}
                {!imageError ? (
                  <Image
                    src="/about.jpg"
                    alt="Over DRP Ventures"
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <AboutPlaceholder />
                )}

                {/* Vignette */}
                <div
                  className="absolute inset-0 z-5 pointer-events-none"
                  style={{
                    background: `
                      linear-gradient(to top, rgba(26,26,26,0.6) 0%, transparent 40%),
                      linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, transparent 20%)
                    `,
                  }}
                />
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border border-accent/20 rounded-lg" aria-hidden="true" />
            </div>
          </div>

          {/* Right column - Content */}
          <div
            className={cn(
              "lg:col-span-3 flex flex-col justify-center",
              "transition-all duration-700 delay-100",
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              {about.title}
            </h3>

            {/* Intro text */}
            <p className="text-secondary text-lg leading-relaxed mb-8">
              {about.intro}
            </p>

            {/* Mission block */}
            <div className="p-6 bg-surface-elevated/50 rounded-xl border border-surface-border mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-6 h-px bg-accent" aria-hidden="true" />
                <h4 className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {about.mission.title}
                </h4>
              </div>
              <p className="text-secondary leading-relaxed">
                {about.mission.description}
              </p>
            </div>

            {/* Values - inline */}
            <div className="grid grid-cols-2 gap-4">
              {about.values.map((value, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3 p-4 rounded-lg",
                    "bg-surface-card/50 border border-surface-border/50",
                    "transition-all duration-300",
                    "hover:bg-surface-card hover:border-surface-border"
                  )}
                >
                  {/* Icon */}
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    <Icon name={value.icon as IconName} size={18} />
                  </div>

                  {/* Text */}
                  <div>
                    <h5 className="text-primary font-medium text-sm mb-1">
                      {value.title}
                    </h5>
                    <p className="text-tertiary text-xs leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Panel>
    </Section>
  );
}

/**
 * Placeholder when no about image exists
 */
function AboutPlaceholder() {
  return (
    <div className="absolute inset-0 bg-linear-to-br from-surface-elevated via-surface-card to-surface-panel">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139,195,74,0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(139,195,74,0.2) 0%, transparent 50%)
          `,
        }}
      />

      {/* Center icon */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
          <Icon name="Users" size={28} className="text-accent/40" />
        </div>
        <p className="text-tertiary text-sm">Team foto</p>
        <p className="text-muted text-xs font-mono mt-1">/public/about.jpg</p>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-surface-body/40 via-transparent to-transparent" />
    </div>
  );
}
