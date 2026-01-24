import { ReactNode } from "react";
import { cn } from "@/lib/cn";

// ================================
// Card Component - Premium Dark Style
// ================================

interface CardProps {
  children: ReactNode;
  /** Padding size */
  padding?: "none" | "sm" | "md" | "lg";
  /** Enable hover effect */
  hover?: boolean;
  /** Visual variant */
  variant?: "default" | "flat" | "outline";
  className?: string;
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

export function Card({
  children,
  padding = "md",
  hover = true,
  variant = "default",
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md",
        // Variant styles
        variant === "default" && "card",
        variant === "flat" && "bg-card",
        variant === "outline" && "border border-border bg-transparent",
        // Padding
        paddingStyles[padding],
        // Hover override if disabled
        !hover && "transform-none! shadow-card!",
        className
      )}
    >
      {children}
    </div>
  );
}

// ================================
// CardHeader
// ================================

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return <div className={cn("mb-3", className)}>{children}</div>;
}

// ================================
// CardTitle
// ================================

interface CardTitleProps {
  children: ReactNode;
  as?: "h2" | "h3" | "h4";
  className?: string;
}

export function CardTitle({
  children,
  as: Tag = "h3",
  className,
}: CardTitleProps) {
  return (
    <Tag className={cn("text-base font-semibold text-text-primary", className)}>
      {children}
    </Tag>
  );
}

// ================================
// CardDescription
// ================================

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn("text-text-secondary text-sm leading-relaxed", className)}>
      {children}
    </p>
  );
}

// ================================
// CardContent
// ================================

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn(className)}>{children}</div>;
}

// ================================
// CardFooter
// ================================

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn("mt-4 pt-4 border-t border-border", className)}>
      {children}
    </div>
  );
}

// ================================
// ImageCard - For portfolio/gallery items
// ================================

interface ImageCardProps {
  children?: ReactNode;
  image?: string;
  alt?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  className?: string;
}

const aspectRatios = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/9]",
};

export function ImageCard({
  children,
  image,
  alt = "",
  aspectRatio = "video",
  className,
}: ImageCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-md",
        "border border-border bg-card",
        "transition-all duration-250",
        "hover:border-border-light",
        className
      )}
    >
      {/* Image container */}
      <div className={cn("relative overflow-hidden", aspectRatios[aspectRatio])}>
        {image ? (
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-350 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full bg-panel-light" />
        )}

        {/* Gradient overlay - always visible, stronger on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-250" />
      </div>

      {/* Content at bottom */}
      {children && (
        <div className="absolute bottom-0 left-0 right-0 p-4">
          {children}
        </div>
      )}
    </div>
  );
}

// ================================
// IconCard - Card with icon tile
// ================================

interface IconCardProps {
  children: ReactNode;
  icon: ReactNode;
  className?: string;
}

export function IconCard({ children, icon, className }: IconCardProps) {
  return (
    <Card padding="lg" className={className}>
      <div className="icon-tile rounded-md mb-4">{icon}</div>
      {children}
    </Card>
  );
}
