"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { hero } from "@/content/site";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <Section
      id="hero"
      background="darker"
      spacing="xl"
      className="min-h-screen flex items-center pt-20"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <h1 className="text-display-md md:text-display-lg lg:text-display-xl font-bold text-white mb-6 animate-fade-in-up">
            {hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-dark-300 leading-relaxed mb-8 max-w-xl animate-fade-in-up [animation-delay:100ms]">
            {hero.subline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up [animation-delay:200ms]">
            <Button href={hero.cta.primary.href} size="lg">
              {hero.cta.primary.label}
              <ArrowRightIcon size={20} className="ml-2" />
            </Button>
            <Button href={hero.cta.secondary.href} variant="outline" size="lg">
              {hero.cta.secondary.label}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up [animation-delay:300ms]">
            {hero.stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-brand-lime mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in [animation-delay:400ms]">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Placeholder voor hero visual - vervang door eigen afbeelding */}
            <div className="aspect-square rounded-3xl bg-gradient-card border border-dark-700 overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-radial from-brand-lime/10 via-transparent to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-lime/20 rounded-full blur-3xl animate-float" />

              {/* Placeholder content - replace with actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-brand-lime mb-4">DRP</div>
                  <div className="text-dark-400 text-sm">
                    Voeg hier uw hero afbeelding toe
                    <br />
                    <code className="text-dark-500 text-xs">/public/images/hero.jpg</code>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-lime/10 rounded-2xl blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-dark-700/50 rounded-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
        <div className="w-6 h-10 border-2 border-dark-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-brand-lime rounded-full" />
        </div>
      </div>
    </Section>
  );
}
