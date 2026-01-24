"use client";

import { useState } from "react";
import { SectionHeader, Panel } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { TabButton } from "@/components/ui/Button";
import { portfolio, portfolioCategories } from "@/content/site";
import { ExternalLinkIcon } from "@/components/ui/Icons";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? portfolio
      : portfolio.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-section-sm md:py-section">
      <Container>
        <Panel>
          <SectionHeader
            title="Portfolio"
            subtitle="Uitgelichte Projecten"
            description="Een selectie van recente projecten die onze expertise en werkwijze illustreren."
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {portfolioCategories.map((category) => (
              <TabButton
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.label}
              </TabButton>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </Panel>
      </Container>
    </section>
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
  };
}

function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-surface-border bg-surface-card cursor-pointer">
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden">
        {/* Placeholder background */}
        <div className="absolute inset-0 bg-surface-elevated">
          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-transparent" />

          {/* Placeholder text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-tertiary text-xs uppercase tracking-wider">
              {project.category}
            </span>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6">
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
            <ExternalLinkIcon size={24} className="text-black" />
          </div>

          {/* Title */}
          <h3 className="text-primary text-lg font-semibold text-center mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
            {project.title}
          </h3>

          {/* Category */}
          <p className="text-accent text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
            {project.category}
          </p>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="p-4 border-t border-surface-border">
        <h4 className="text-primary font-medium text-sm mb-1 group-hover:text-accent transition-colors">
          {project.title}
        </h4>
        <p className="text-tertiary text-xs line-clamp-1">{project.description}</p>
      </div>
    </div>
  );
}
