"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero, siteConfig } from "@/content/site";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Take first 3 stats for cleaner layout
  const displayStats = hero.stats.slice(0, 3);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        {/* Background image using img element for better positioning control */}
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "80% center" }}
        />

        {/* Fallback color in case image doesn't load */}
        <div className="absolute inset-0 -z-10 bg-panel" />

        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl py-20 lg:py-0">
          {/* Content */}
          <div
            className={cn(
              "transition-all duration-700",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {/* Small label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-accent" aria-hidden="true" />
              <span className="text-label uppercase text-text-secondary">
                {siteConfig.tagline.split("•")[0].trim()}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="mb-6">
              <span className="block text-display-lg md:text-display-xl text-text-primary">
                {siteConfig.name.split(" ")[0]}{" "}
                <span className="text-accent">
                  {siteConfig.name.split(" ").slice(1).join(" ")}
                </span>
              </span>
            </h1>

            {/* Subline */}
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {hero.subline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Button href={hero.cta.primary.href} size="lg">
                {hero.cta.primary.label}
              </Button>
              <Button href={hero.cta.secondary.href} variant="secondary" size="lg">
                {hero.cta.secondary.label}
              </Button>
            </div>

            {/* Stats - 3 column */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {displayStats.map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    "transition-all duration-500",
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div
        className={cn(
          "absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2",
          "transition-all duration-700 delay-500",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <span className="text-text-muted text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-8 bg-linear-to-b from-border to-transparent" />
      </div>
    </section>
  );
}
