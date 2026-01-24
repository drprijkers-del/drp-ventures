import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PanelProps {
  children: ReactNode;
  /** Padding size */
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  /** Visual variant */
  variant?: "default" | "elevated" | "flat";
  className?: string;
}

const paddingStyles = {
  none: "",
  sm: "p-4 md:p-6",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-12",
  xl: "p-10 md:p-16",
};

const variantStyles = {
  default: "panel rounded-lg",
  elevated: "panel rounded-lg shadow-panel",
  flat: "bg-panel rounded-lg",
};

export function Panel({
  children,
  padding = "lg",
  variant = "default",
  className,
}: PanelProps) {
  return (
    <div
      className={cn(
        variantStyles[variant],
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
