import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type PanelPadding = "none" | "sm" | "md" | "lg";

interface PanelProps {
  children: ReactNode;
  padding?: PanelPadding;
  className?: string;
}

const paddingStyles: Record<PanelPadding, string> = {
  none: "",
  sm: "p-4 md:p-6",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-12",
};

export function Panel({
  children,
  padding = "lg",
  className,
}: PanelProps) {
  return (
    <div
      className={cn(
        "panel rounded-lg",
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
