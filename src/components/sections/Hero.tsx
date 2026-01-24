"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero, siteConfig } from "@/content/site";

export function Hero() {
  const [imageError, setImageError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Take first 3 stats for cleaner layout
  const displayStats = hero.stats.slice(0, 3);

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-surface-panel via-surface-body to-surface-body" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Accent glow - top left */}
        <div className="absolute -top-40 -left-40 w-125 h-125 bg-accent/5 rounded-full blur-3xl" />

        {/* Dark vignette corners */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-0">
          {/* Left: Content */}
          <div
            className={cn(
              "order-2 lg:order-1",
              "transition-all duration-700",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {/* Small label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-tertiary">
                {siteConfig.tagline.split("•")[0].trim()}
              </span>
            </div>

            {/* Main headline - Editorial style */}
            <h1 className="mb-6">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-accent">
                  {siteConfig.name.split(" ")[0]}
                </span>
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-primary mt-2 tracking-tight">
                {siteConfig.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Subline */}
            <p className="text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {hero.subline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-14">
              <Button href={hero.cta.primary.href} size="lg">
                {hero.cta.primary.label}
              </Button>
              <Button href={hero.cta.secondary.href} variant="outline" size="lg">
                {hero.cta.secondary.label}
              </Button>
            </div>

            {/* Stats - 3 column */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-surface-border">
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
                  <div className="text-sm text-tertiary leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait Card */}
          <div
            className={cn(
              "order-1 lg:order-2 flex justify-center lg:justify-end",
              "transition-all duration-700 delay-200",
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div className="relative">
              {/* Glow behind portrait */}
              <div className="absolute -inset-8 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute -inset-4 bg-linear-to-br from-accent/20 via-transparent to-transparent rounded-3xl blur-2xl" aria-hidden="true" />

              {/* Portrait container */}
              <div className="relative w-72 md:w-80 lg:w-96 aspect-3/4 rounded-2xl overflow-hidden">
                {/* Border frame */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 z-20 pointer-events-none" />

                {/* Image or placeholder */}
                {!imageError ? (
                  <Image
                    src="/hero.jpg"
                    alt="Portrait"
                    fill
                    className="object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <PortraitPlaceholder />
                )}

                {/* Vignette overlay */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%),
                      linear-gradient(to top, rgba(26,26,26,0.8) 0%, transparent 30%),
                      linear-gradient(to bottom, rgba(26,26,26,0.4) 0%, transparent 20%)
                    `,
                  }}
                />

                {/* Subtle highlight top-left */}
                <div
                  className="absolute top-0 left-0 w-1/2 h-1/3 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)',
                  }}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border border-accent/30 rounded-xl" aria-hidden="true" />
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-accent/20 rounded-lg blur-sm" aria-hidden="true" />

              {/* Corner accent */}
              <div className="absolute bottom-6 -right-6 flex items-center gap-2 bg-surface-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-surface-border">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs text-tertiary font-medium">Beschikbaar</span>
              </div>
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
        <span className="text-tertiary text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-8 bg-linear-to-b from-surface-border to-transparent" />
      </div>

      {/* Side decoration line */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-32 bg-linear-to-b from-transparent via-accent/30 to-transparent hidden xl:block"
        aria-hidden="true"
      />
    </section>
  );
}

/**
 * Premium gradient placeholder when no hero image exists
 */
function PortraitPlaceholder() {
  return (
    <div className="absolute inset-0 bg-linear-to-br from-surface-elevated via-surface-card to-surface-panel">
      {/* Diagonal lines pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(139,195,74,0.3) 20px,
            rgba(139,195,74,0.3) 21px
          )`,
        }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
        {/* Large initials */}
        <div className="relative">
          <span className="text-8xl font-bold text-accent/20">
            DRP
          </span>
          {/* Glow effect */}
          <div className="absolute inset-0 text-8xl font-bold text-accent/10 blur-xl">
            DRP
          </div>
        </div>

        {/* Placeholder text */}
        <div className="mt-6 space-y-1">
          <p className="text-tertiary text-sm">Portrait afbeelding</p>
          <p className="text-muted text-xs font-mono">/public/hero.jpg</p>
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-t from-surface-body/50 via-transparent to-surface-body/30" />
    </div>
  );
}
