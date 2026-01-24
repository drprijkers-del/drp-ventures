"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Section, SectionHeader, Panel } from "@/components/ui/Section";
import { portfolio, portfolioCategories } from "@/content/site";
import { ExternalLinkIcon } from "@/components/ui/Icons";

// Category colors for variety
const categoryColors: Record<string, { gradient: string; accent: string }> = {
  fintech: { gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent", accent: "text-emerald-400" },
  saas: { gradient: "from-blue-500/20 via-blue-500/5 to-transparent", accent: "text-blue-400" },
  ecommerce: { gradient: "from-purple-500/20 via-purple-500/5 to-transparent", accent: "text-purple-400" },
  healthcare: { gradient: "from-rose-500/20 via-rose-500/5 to-transparent", accent: "text-rose-400" },
  ai: { gradient: "from-amber-500/20 via-amber-500/5 to-transparent", accent: "text-amber-400" },
  logistics: { gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent", accent: "text-cyan-400" },
};

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? portfolio
      : portfolio.filter((project) => project.category === activeCategory);

  return (
    <Section id="portfolio">
      <SectionHeader
        label="Portfolio"
        title="Uitgelichte Projecten"
        description="Een selectie van recente projecten die onze expertise en werkwijze illustreren."
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {portfolioCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium",
              "transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              activeCategory === category.id
                ? "bg-accent text-black"
                : "bg-surface-card border border-surface-border text-secondary hover:text-primary hover:border-surface-border-light"
            )}
            aria-pressed={activeCategory === category.id}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects grid - 3 columns on desktop */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <PortfolioCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-tertiary">Geen projecten gevonden in deze categorie.</p>
        </div>
      )}
    </Section>
  );
}

// Portfolio Card Component
interface PortfolioCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    stats?: Record<string, string>;
  };
  index: number;
}

function PortfolioCard({ project, index }: PortfolioCardProps) {
  const [imageError, setImageError] = useState(false);
  const colors = categoryColors[project.category] || categoryColors.fintech;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl",
        "bg-surface-card border border-surface-border",
        "transition-all duration-300 ease-out",
        "hover:border-surface-border-light hover:shadow-card-hover hover:-translate-y-1"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image container */}
      <div className="relative aspect-4/3 overflow-hidden">
        {/* Image or gradient placeholder */}
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <GradientPlaceholder category={project.category} colors={colors} />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className={cn(
            "px-3 py-1 rounded-full text-xs font-medium",
            "bg-black/50 backdrop-blur-sm border border-white/10",
            colors.accent
          )}>
            {portfolioCategories.find(c => c.id === project.category)?.label || project.category}
          </span>
        </div>

        {/* Hover icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <ExternalLinkIcon size={18} className="text-black" />
          </div>
        </div>

        {/* Bottom content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-primary text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-xs bg-white/10 text-white/70"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-0.5 rounded text-xs bg-white/10 text-white/70">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Stats bar (optional) */}
      {project.stats && (
        <div className="px-5 py-4 border-t border-surface-border bg-surface-elevated/50">
          <div className="flex justify-between">
            {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-accent font-semibold text-sm">{value}</div>
                <div className="text-muted text-xs capitalize">{key}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Gradient placeholder for missing images
function GradientPlaceholder({
  category,
  colors,
}: {
  category: string;
  colors: { gradient: string; accent: string };
}) {
  return (
    <div className="absolute inset-0 bg-surface-elevated">
      {/* Category-colored gradient */}
      <div className={cn("absolute inset-0 bg-linear-to-br", colors.gradient)} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Center label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={cn("text-sm font-medium uppercase tracking-wider", colors.accent)}>
          {category}
        </span>
      </div>
    </div>
  );
}
