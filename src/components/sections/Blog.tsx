"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { SectionHeader } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { blog } from "@/content/site";
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "@/components/ui/Icons";

// Category colors for visual variety
const categoryColors: Record<string, { bg: string; text: string; gradient: string }> = {
  Architecture: { bg: "bg-blue-500/10", text: "text-blue-400", gradient: "from-blue-500/20 via-blue-500/5" },
  Development: { bg: "bg-accent/10", text: "text-accent", gradient: "from-accent/20 via-accent/5" },
  Strategy: { bg: "bg-purple-500/10", text: "text-purple-400", gradient: "from-purple-500/20 via-purple-500/5" },
  Productivity: { bg: "bg-orange-500/10", text: "text-orange-400", gradient: "from-orange-500/20 via-orange-500/5" },
};

const defaultColor = { bg: "bg-accent/10", text: "text-accent", gradient: "from-accent/20 via-accent/5" };

export function Blog() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("nl-NL", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Take first 4 posts
  const displayPosts = blog.slice(0, 4);

  return (
    <section id="blog" ref={sectionRef} className="py-section-sm md:py-section">
      <Container>
        <SectionHeader
          title="Insights"
          subtitle="Laatste artikelen"
          description="Gedachten over technologie, architectuur en het bouwen van succesvolle digitale producten."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              formatDate={formatDate}
              animate={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
  };
  formatDate: (date: string) => string;
  animate: boolean;
  delay: number;
}

function BlogCard({ post, formatDate, animate, delay }: BlogCardProps) {
  const colors = categoryColors[post.category] || defaultColor;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl",
        "bg-surface-card border border-surface-border",
        "transition-all duration-500 ease-out",
        "hover:border-surface-border-light hover:shadow-card-hover hover:-translate-y-1",
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image placeholder with gradient */}
      <div className="relative aspect-video overflow-hidden">
        {/* Background gradient based on category */}
        <div className="absolute inset-0 bg-surface-elevated">
          <div className={cn("absolute inset-0 bg-linear-to-br to-transparent", colors.gradient)} />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          />
        </div>

        {/* Category label centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={cn("text-xs font-medium uppercase tracking-wider", colors.text)}>
            {post.category}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Meta row */}
        <div className="flex items-center gap-3 text-muted text-xs mb-3">
          <span className="flex items-center gap-1.5">
            <CalendarIcon size={12} />
            {formatDate(post.date)}
          </span>
          <span className="w-1 h-1 rounded-full bg-surface-border" />
          <span className="flex items-center gap-1.5">
            <ClockIcon size={12} />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-300">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-tertiary text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
          {post.excerpt}
        </p>

        {/* Read more link */}
        <a
          href={`/blog/${post.id}`}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300",
            colors.text
          )}
        >
          Lees meer
          <ArrowRightIcon
            size={14}
            className="transform group-hover:translate-x-1 transition-transform duration-300"
          />
        </a>
      </div>
    </article>
  );
}
