import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  /** Small uppercase label with line (e.g., "About", "Services") */
  label: string;
  /** Large heading text */
  title?: string;
  /** Optional description paragraph */
  description?: string;
  /** Alignment */
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {/* Label with line: ─ ABOUT */}
      <div
        className={cn(
          "flex items-center gap-3 mb-5",
          align === "center" && "justify-center"
        )}
      >
        <span className="section-line" aria-hidden="true" />
        <span className="section-label">{label}</span>
      </div>

      {/* Large heading */}
      {title && (
        <h2 className="text-display-md md:text-display-lg text-text-primary mb-4">
          {title}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p
          className={cn(
            "text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
