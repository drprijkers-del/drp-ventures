"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { portfolio, portfolioCategories } from "@/content/site";
import { ExternalLinkIcon } from "@/components/ui/Icons";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? portfolio
      : portfolio.filter((project) => project.category === activeCategory);

  return (
    <Section id="portfolio" background="dark">
      <SectionHeader
        subtitle="Portfolio"
        title="Uitgelichte projecten"
        description="Een selectie van recente projecten die onze expertise en werkwijze illustreren."
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {portfolioCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category.id
                ? "bg-brand-lime text-dark-950"
                : "bg-dark-800 text-dark-300 hover:bg-dark-700 hover:text-white border border-dark-700"
            }`}
            aria-pressed={activeCategory === category.id}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            variant="bordered"
            padding="none"
            hover
            className="group overflow-hidden"
          >
            {/* Image placeholder */}
            <div className="aspect-video bg-dark-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-radial from-brand-lime/5 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-dark-600 text-sm">
                  {project.image.replace("/images/portfolio/", "").replace(".jpg", "")}
                </span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ExternalLinkIcon size={20} className="text-dark-950" />
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              {/* Category badge */}
              <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-dark-700 text-dark-300 mb-3">
                {portfolioCategories.find((c) => c.id === project.category)?.label}
              </span>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-lime transition-colors">
                {project.title}
              </h3>

              <p className="text-dark-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded text-xs bg-dark-800 text-dark-300 border border-dark-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-6 pt-4 border-t border-dark-700">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-brand-lime font-semibold">{value}</div>
                    <div className="text-dark-500 text-xs capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
