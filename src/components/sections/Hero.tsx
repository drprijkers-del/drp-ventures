"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero, siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-surface-panel via-surface-body to-surface-body" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-5rem)] py-20">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Subtitle */}
            <p className="text-tertiary text-sm uppercase tracking-widest mb-4 animate-fade-in">
              {siteConfig.tagline}
            </p>

            {/* Main headline */}
            <h1 className="text-display-xl md:text-display-2xl text-primary mb-6 animate-fade-in-up">
              <span className="text-accent">DRP</span> Ventures
            </h1>

            {/* Description */}
            <p className="text-secondary text-lg leading-relaxed mb-8 max-w-lg animate-fade-in-up delay-100">
              {hero.subline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up delay-200">
              <Button href={hero.cta.primary.href} size="lg">
                {hero.cta.primary.label}
              </Button>
              <Button href={hero.cta.secondary.href} variant="outline" size="lg">
                {hero.cta.secondary.label}
              </Button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 animate-fade-in-up delay-300">
              {hero.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-tertiary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Portrait Image with vignette */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in delay-200">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Image container with vignette */}
              <div className="relative aspect-3/4 overflow-hidden">
                {/* Placeholder image - replace with actual portrait */}
                <div className="absolute inset-0 bg-surface-panel">
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-linear-to-t from-surface-body via-transparent to-transparent opacity-60" />

                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-8xl font-bold text-accent/20 mb-4">
                        DRP
                      </div>
                      <p className="text-tertiary text-sm">
                        Portrait afbeelding
                        <br />
                        <code className="text-muted text-xs">
                          /public/images/hero-portrait.jpg
                        </code>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vignette effect */}
                <div className="absolute inset-0 vignette pointer-events-none" />

                {/* Top gradient fade */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-surface-body to-transparent" />

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-surface-body via-surface-body/80 to-transparent" />
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-accent/20 rounded-lg" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/10 rounded-lg blur-xl" />
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-tertiary text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-surface-border" />
      </div>

      {/* Side decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-linear-to-b from-transparent via-surface-border to-transparent hidden lg:block" />
    </section>
  );
}
