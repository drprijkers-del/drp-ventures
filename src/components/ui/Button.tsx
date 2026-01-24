"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isLoading?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-black font-semibold hover:bg-accent-light shadow-glow-sm hover:shadow-glow",
  secondary:
    "bg-surface-card text-content-secondary hover:bg-surface-elevated border border-surface-border hover:border-surface-border-light",
  ghost:
    "bg-transparent text-content-secondary hover:text-content-primary hover:bg-surface-card",
  outline:
    "bg-transparent text-accent border border-accent hover:bg-accent hover:text-black",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      href,
      isLoading,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-body disabled:opacity-50 disabled:cursor-not-allowed";

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          aria-disabled={disabled || isLoading}
        >
          {isLoading ? (
            <span className="mr-2">
              <LoadingSpinner />
            </span>
          ) : null}
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2">
            <LoadingSpinner />
          </span>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

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
// TabButton - For portfolio filters
// ================================

interface TabButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function TabButton({
  children,
  active = false,
  className = "",
  ...props
}: TabButtonProps) {
  return (
    <button
      className={`tab-button ${active ? "active" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
