import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ======================
      // COLORS
      // ======================
      colors: {
        // Accent - lime/green highlights
        accent: {
          DEFAULT: "#8bc34a",
          light: "#a2cf6e",
          dark: "#6b9b37",
          muted: "rgba(139, 195, 74, 0.15)",
        },
        // Surfaces - layered dark backgrounds
        surface: {
          body: "#1a1a1a",
          panel: "#232323",
          card: "#2a2a2a",
          elevated: "#303030",
          border: "#333333",
          "border-light": "#3a3a3a",
        },
        // Content - text hierarchy
        content: {
          primary: "#ffffff",
          secondary: "#b0b0b0",
          tertiary: "#808080",
          muted: "#606060",
        },
      },

      // ======================
      // TYPOGRAPHY
      // ======================
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["5rem", { lineHeight: "1.0", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-xl": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-sm": ["1.75rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        "section-label": ["0.75rem", { lineHeight: "1", letterSpacing: "0.2em", fontWeight: "600" }],
      },

      // ======================
      // SPACING
      // ======================
      spacing: {
        section: "7.5rem",
        "section-sm": "5rem",
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },

      // ======================
      // SHADOWS
      // ======================
      boxShadow: {
        panel: "0 4px 30px rgba(0, 0, 0, 0.3)",
        card: "0 2px 20px rgba(0, 0, 0, 0.2)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.4)",
        glow: "0 0 30px rgba(139, 195, 74, 0.3)",
        "glow-sm": "0 0 15px rgba(139, 195, 74, 0.2)",
        "inner-highlight": "inset 0 1px 0 rgba(255, 255, 255, 0.03)",
      },

      // ======================
      // GRADIENTS
      // ======================
      backgroundImage: {
        "body-gradient": "linear-gradient(180deg, #1a1a1a 0%, #141414 100%)",
        "panel-gradient": "linear-gradient(180deg, #262626 0%, #232323 100%)",
        "card-gradient": "linear-gradient(135deg, #2d2d2d 0%, #282828 100%)",
        "accent-gradient": "linear-gradient(135deg, #8bc34a 0%, #6b9b37 100%)",
        vignette: "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%)",
        "overlay-bottom": "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
      },

      // ======================
      // BORDER RADIUS
      // ======================
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      // ======================
      // ANIMATIONS
      // ======================
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        progress: "progressBar 1.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        progressBar: {
          "0%": { width: "0%" },
          "100%": { width: "var(--progress-width)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
