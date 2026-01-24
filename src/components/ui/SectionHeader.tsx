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
    <div className={cn("mb-10 md:mb-12", className)}>
      {/* Label with line */}
      <div className="flex items-center gap-3 mb-4">
        <span className="section-line" aria-hidden="true" />
        <span className="section-label">{title}</span>
      </div>

      {/* Large heading */}
      {subtitle && (
        <h2 className="text-2xl md:text-3xl font-semibold text-primary tracking-tight mb-3">
          {subtitle}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className="text-secondary text-base leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
