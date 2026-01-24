import { ReactNode } from "react";
import { Container } from "./Container";

type SectionBackground = "default" | "dark" | "darker" | "gradient";
type SectionSpacing = "sm" | "md" | "lg" | "xl";

interface SectionProps {
  children: ReactNode;
  id?: string;
  background?: SectionBackground;
  spacing?: SectionSpacing;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  noContainer?: boolean;
}

const backgrounds: Record<SectionBackground, string> = {
  default: "bg-dark-900",
  dark: "bg-dark-950",
  darker: "bg-[#050505]",
  gradient: "bg-gradient-dark",
};

const spacings: Record<SectionSpacing, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
};

export function Section({
  children,
  id,
  background = "default",
  spacing = "lg",
  className = "",
  containerSize = "xl",
  noContainer = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${backgrounds[background]} ${spacings[spacing]} ${className}`}
    >
      {noContainer ? (
        children
      ) : (
        <Container size={containerSize}>{children}</Container>
      )}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  const alignment = centered ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignment} ${className}`}>
      {subtitle && (
        <p className="text-brand-lime font-medium text-sm uppercase tracking-wider mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="text-display-sm md:text-display-md font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-dark-300 text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
