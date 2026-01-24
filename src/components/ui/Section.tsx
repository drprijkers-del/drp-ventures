import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Use panel background (lighter than body) */
  variant?: "default" | "panel";
  /** Container max-width */
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  /** Skip Container wrapper */
  noContainer?: boolean;
  /** Spacing size */
  spacing?: "sm" | "md" | "lg";
}

const spacingStyles = {
  sm: "py-16 md:py-20",
  md: "py-20 md:py-section",
  lg: "py-section md:py-section-lg",
};

export function Section({
  children,
  id,
  className,
  variant = "default",
  containerSize = "xl",
  noContainer = false,
  spacing = "md",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        spacingStyles[spacing],
        variant === "panel" && "bg-panel",
        className
      )}
    >
      {noContainer ? children : <Container size={containerSize}>{children}</Container>}
    </section>
  );
}

// Re-export for convenience
export { Panel } from "./Panel";
export { SectionHeader } from "./SectionHeader";
