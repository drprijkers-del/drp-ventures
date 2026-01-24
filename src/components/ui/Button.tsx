"use client";

import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

// ================================
// Button Component - Premium Dark Style
// ================================

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isLoading?: boolean;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-accent text-bg font-semibold",
    "hover:bg-accent-light",
    "active:bg-accent-dark",
    "shadow-sm hover:shadow-glow"
  ),
  secondary: cn(
    "bg-panel text-text-primary border border-border",
    "hover:bg-panel-light hover:border-border-light"
  ),
  ghost: cn(
    "bg-transparent text-text-secondary",
    "hover:text-text-primary hover:bg-white/5"
  ),
  outline: cn(
    "bg-transparent text-text-primary border border-border-light",
    "hover:bg-white/5 hover:border-white/20"
  ),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      isLoading = false,
      className,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center gap-2",
      "font-medium rounded-md",
      "transition-all duration-250",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
      "disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    // Render as anchor if href is provided
    if (href) {
      return (
        <a
          href={href}
          className={baseStyles}
          aria-disabled={disabled || isLoading}
        >
          {isLoading && <LoadingSpinner />}
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={baseStyles}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && <LoadingSpinner />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

// ================================
// Loading Spinner
// ================================

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

// ================================
// TabButton - For filters/tabs
// ================================

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: ReactNode;
}

export function TabButton({
  children,
  active = false,
  className,
  ...props
}: TabButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 text-sm font-medium rounded-md",
        "transition-all duration-250",
        active
          ? "bg-accent/10 text-accent border border-accent/30"
          : "text-text-secondary hover:text-text-primary hover:bg-white/5",
        className
      )}
      aria-pressed={active}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
