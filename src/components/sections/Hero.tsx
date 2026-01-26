"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/site";

export function Hero() {
  // Take first 3 stats for cleaner layout
  const displayStats = hero.stats.slice(0, 3);

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* ============================================ */}
      {/* LAYER 1: Dark background (full)             */}
      {/* ============================================ */}
      <div className="absolute inset-0 bg-bg" />

      {/* ============================================ */}
      {/* LAYER 2: Photo - right side only            */}
      {/* Desktop: right 55%, Mobile: hidden          */}
      {/* ============================================ */}
      <div className="absolute inset-y-0 right-0 w-[50%] lg:w-[55%] hidden md:block">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[30%_center]"
          sizes="55vw"
        />
        {/* Gradient fade from left edge into photo */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.7) 15%, rgba(10,10,10,0.3) 30%, transparent 50%)",
          }}
        />
        {/* Bottom fade on photo */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background: "linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0.8) 40%, transparent 100%)",
          }}
        />
      </div>

      {/* Mobile: full overlay, no photo visible */}
      <div className="absolute inset-0 bg-bg/95 md:hidden" />

      {/* ============================================ */}
      {/* LAYER 3: Bottom transition to body color    */}
      {/* Fades from transparent to #0a0a0a (bg)      */}
      {/* ============================================ */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 md:h-32 z-5"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #0a0a0a 100%)",
        }}
      />

      {/* ============================================ */}
      {/* LAYER 4: Subtle vignette for premium feel   */}
      {/* ============================================ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, transparent 40%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* ============================================ */}
      {/* CONTENT: Always on left, above all overlays */}
      {/* ============================================ */}
      <Container className="relative z-10">
        <div className="max-w-xl lg:max-w-2xl py-16 md:py-20 lg:py-0">
          {/* Label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-accent" aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest text-white/60">
              {hero.label}
            </span>
          </div>

          {/* Main headline: DRP Ventures */}
          <h1 className="mb-2">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {hero.headline.split(" ")[0]}{" "}
              <span className="text-accent">
                {hero.headline.split(" ").slice(1).join(" ")}
              </span>
            </span>
          </h1>

          {/* Subline: Door Dennis Rijkers */}
          <p className="text-lg md:text-xl text-white/70 mb-6">
            {hero.subline}
          </p>

          {/* Description */}
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button href={hero.cta.primary.href} size="lg">
              {hero.cta.primary.label}
            </Button>
            <Button href={hero.cta.secondary.href} variant="secondary" size="lg">
              {hero.cta.secondary.label}
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-white/10">
            {displayStats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/50 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* ============================================ */}
      {/* Scroll indicator (desktop only)             */}
      {/* ============================================ */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-10">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-px h-8 bg-linear-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
