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
      // COLORS - Premium Dark Template
      // ======================
      colors: {
        // Body background (darkest)
        bg: {
          DEFAULT: "#0a0a0a",
          alt: "#080808",
        },
        // Panel backgrounds (slightly lighter, for sections)
        panel: {
          DEFAULT: "#111111",
          light: "#151515",
          border: "rgba(255, 255, 255, 0.04)",
        },
        // Card backgrounds
        card: {
          DEFAULT: "#141414",
          hover: "#181818",
          border: "rgba(255, 255, 255, 0.06)",
        },
        // Text hierarchy
        text: {
          primary: "#ffffff",
          secondary: "#999999",
          muted: "#666666",
          faint: "#444444",
        },
        // Accent - lime/green (functional only)
        accent: {
          DEFAULT: "#8bc34a",
          light: "#9ccc65",
          dark: "#7cb342",
          muted: "rgba(139, 195, 74, 0.12)",
        },
        // Borders
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.06)",
          light: "rgba(255, 255, 255, 0.1)",
          accent: "rgba(139, 195, 74, 0.3)",
        },
      },

      // ======================
      // TYPOGRAPHY
      // ======================
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        // Display sizes
        "display-xl": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-lg": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-md": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-sm": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" }],
        // Section label
        "label": ["0.6875rem", { lineHeight: "1", letterSpacing: "0.2em", fontWeight: "500" }],
      },

      // ======================
      // SPACING - Large vertical rhythm
      // ======================
      spacing: {
        "section": "7.5rem",     // 120px
        "section-lg": "10rem",   // 160px
        "section-sm": "5rem",    // 80px
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },

      // ======================
      // SHADOWS - Very subtle
      // ======================
      boxShadow: {
        "panel": "0 1px 0 rgba(255,255,255,0.02), 0 4px 40px rgba(0,0,0,0.5)",
        "card": "0 1px 0 rgba(255,255,255,0.02)",
        "card-hover": "0 1px 0 rgba(255,255,255,0.03), 0 8px 30px rgba(0,0,0,0.3)",
        "inner": "inset 0 1px 0 rgba(255,255,255,0.02)",
        "glow": "0 0 40px rgba(139, 195, 74, 0.15)",
        "none": "none",
      },

      // ======================
      // BORDER RADIUS - Subtle
      // ======================
      borderRadius: {
        "sm": "0.25rem",
        "DEFAULT": "0.375rem",
        "md": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
      },

      // ======================
      // TRANSITIONS
      // ======================
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
