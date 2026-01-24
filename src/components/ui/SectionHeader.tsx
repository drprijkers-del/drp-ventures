import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  /** Small uppercase label with line (e.g., "About", "Services") */
  title: string;
  /** Large heading text */
  subtitle?: string;
  /** Optional description paragraph */
  description?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      {/* Label with line */}
      <div className="flex items-center gap-4 mb-6">
        <span className="section-line" aria-hidden="true" />
        <span className="section-label">{title}</span>
      </div>

      {/* Large heading */}
      {subtitle && (
        <h2 className="text-display-md md:text-display-lg text-primary mb-4">
          {subtitle}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className="text-secondary text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
