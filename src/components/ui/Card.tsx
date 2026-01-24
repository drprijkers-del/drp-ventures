import { ReactNode } from "react";

// ================================
// Card Component
// ================================

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddings: Record<string, string> = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  const hoverStyles = hover ? "card" : "card hover:transform-none hover:shadow-card";

  return (
    <div className={`rounded-lg ${hoverStyles} ${paddings[padding]} ${className}`}>
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

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

// ================================
// CardTitle
// ================================

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
    <Tag className={`text-lg font-semibold text-primary ${className}`}>
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

export function CardDescription({
  children,
  className = "",
}: CardDescriptionProps) {
  return (
    <p className={`text-secondary text-sm leading-relaxed ${className}`}>
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

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}

// ================================
// CardFooter
// ================================

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return (
    <div className={`mt-6 pt-4 border-t border-surface-border ${className}`}>
      {children}
    </div>
  );
}

// ================================
// ImageCard - For portfolio items
// ================================

interface ImageCardProps {
  children: ReactNode;
  image?: string;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait";
  overlay?: boolean;
}

const aspectRatios: Record<string, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
};

export function ImageCard({
  children,
  image,
  className = "",
  aspectRatio = "video",
  overlay = true,
}: ImageCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-surface-border bg-surface-card ${className}`}
    >
      {/* Image container */}
      <div className={`relative ${aspectRatios[aspectRatio]} overflow-hidden`}>
        {image ? (
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-surface-elevated" />
        )}

        {/* Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>

      {/* Content */}
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

export function IconCard({ children, icon, className = "" }: IconCardProps) {
  return (
    <div className={`card rounded-lg p-6 ${className}`}>
      <div className="icon-box rounded-lg mb-4">{icon}</div>
      {children}
    </div>
  );
}
