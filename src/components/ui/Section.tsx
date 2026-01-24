import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  noContainer?: boolean;
}

export function Section({
  children,
  id,
  className,
  containerSize = "xl",
  noContainer = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-section-sm md:py-section", className)}
    >
      {noContainer ? children : <Container size={containerSize}>{children}</Container>}
    </section>
  );
}

// Re-export Panel and SectionHeader for convenience
export { Panel } from "./Panel";
export { SectionHeader } from "./SectionHeader";
