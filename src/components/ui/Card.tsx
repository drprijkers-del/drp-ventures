import { ReactNode } from "react";

type CardVariant = "default" | "elevated" | "bordered" | "gradient";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const variants: Record<CardVariant, string> = {
  default: "bg-dark-800",
  elevated: "bg-dark-800 shadow-card",
  bordered: "bg-dark-850 border border-dark-700",
  gradient: "bg-gradient-card border border-dark-700",
};

const paddings: Record<string, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  variant = "bordered",
  className = "",
  hover = false,
  padding = "md",
}: CardProps) {
  const hoverStyles = hover
    ? "transition-all duration-300 hover:border-dark-600 hover:shadow-card-hover hover:-translate-y-1"
    : "";

  return (
    <div
      className={`rounded-2xl ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3" | "h4";
}

export function CardTitle({
  children,
  className = "",
  as: Tag = "h3",
}: CardTitleProps) {
  return (
    <Tag className={`text-xl font-semibold text-white ${className}`}>
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return (
    <p className={`text-dark-300 leading-relaxed ${className}`}>{children}</p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <div className={`mt-6 pt-4 border-t border-dark-700 ${className}`}>{children}</div>;
}
