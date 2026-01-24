import { ReactNode } from "react";
import { cn } from "@/lib/cn";

// ================================
// Card Component
// ================================

type CardPadding = "none" | "sm" | "md" | "lg";

interface CardProps {
  children: ReactNode;
  padding?: CardPadding;
  hover?: boolean;
  className?: string;
}

const paddingStyles: Record<CardPadding, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  padding = "md",
  hover = true,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-surface-border bg-surface-card",
        "transition-all duration-300",
        hover && "hover:border-surface-border-light hover:shadow-card-hover hover:-translate-y-0.5",
        paddingStyles[padding],
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
  return <div className={cn("mb-4", className)}>{children}</div>;
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
    <Tag className={cn("text-lg font-semibold text-primary", className)}>
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
    <p className={cn("text-secondary text-sm leading-relaxed", className)}>
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
    <div className={cn("mt-6 pt-4 border-t border-surface-border", className)}>
      {children}
    </div>
  );
}

// ================================
// ImageCard - For portfolio items
// ================================

interface ImageCardProps {
  children?: ReactNode;
  image?: string;
  alt?: string;
  aspectRatio?: "square" | "video" | "portrait";
  overlay?: boolean;
  className?: string;
}

const aspectRatios: Record<string, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-3/4",
};

export function ImageCard({
  children,
  image,
  alt = "",
  aspectRatio = "video",
  overlay = true,
  className,
}: ImageCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg",
        "border border-surface-border bg-surface-card",
        className
      )}
    >
      {/* Image container */}
      <div className={cn("relative overflow-hidden", aspectRatios[aspectRatio])}>
        {image ? (
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-surface-elevated" />
        )}

        {/* Overlay on hover */}
        {overlay && (
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>

      {/* Content slides up on hover */}
      {children && (
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {children}
        </div>
      )}
    </div>
  );
}

// ================================
// IconCard - Card with icon
// ================================

interface IconCardProps {
  children: ReactNode;
  icon: ReactNode;
  className?: string;
}

export function IconCard({ children, icon, className }: IconCardProps) {
  return (
    <Card className={className}>
      <div className="icon-box rounded-lg mb-4">{icon}</div>
      {children}
    </Card>
  );
}
