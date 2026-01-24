import { ReactNode } from "react";
import { Container } from "./Container";

// ================================
// Section Component
// ================================

type SectionVariant = "transparent" | "panel";

interface SectionProps {
  children: ReactNode;
  id?: string;
  variant?: SectionVariant;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  noContainer?: boolean;
}

export function Section({
  children,
  id,
  variant = "transparent",
  className = "",
  containerSize = "xl",
  noContainer = false,
}: SectionProps) {
  const baseStyles = "relative py-section-sm md:py-section";

  const variantStyles: Record<SectionVariant, string> = {
    transparent: "",
    panel: "panel rounded-none md:rounded-lg my-4 md:my-8",
  };

  return (
    <section
      id={id}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {noContainer ? (
        children
      ) : (
        <Container size={containerSize}>{children}</Container>
      )}
    </section>
  );
}

// ================================
// Panel Component - Elevated container
// ================================

interface PanelProps {
  children: ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

const panelPaddings: Record<string, string> = {
  none: "",
  sm: "p-4 md:p-6",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-12",
};

export function Panel({
  children,
  className = "",
  padding = "lg",
}: PanelProps) {
  return (
    <div className={`panel rounded-lg ${panelPaddings[padding]} ${className}`}>
      {children}
    </div>
  );
}

// ================================
// SectionHeader Component - With left line
// ================================

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {/* Title with line */}
      <div className="section-header">
        <span className="section-title">{title}</span>
      </div>

      {/* Optional subtitle (large heading) */}
      {subtitle && (
        <h2 className="text-display-md md:text-display-lg text-primary mb-4">
          {subtitle}
        </h2>
      )}

      {/* Optional description */}
      {description && (
        <p className="text-secondary text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

// ================================
// SectionTitle Component - Simple title with line
// ================================

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <div className={`section-header ${className}`}>
      <span className="section-title">{children}</span>
    </div>
  );
}
