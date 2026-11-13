import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#6E0F1D",
          deep: "#540A15",
          light: "#7C1020",
          muted: "#8F2A38",
        },
        ivory: {
          DEFAULT: "#FAF8F5",
          warm: "#F4EFE8",
          pure: "#FFFFFF",
        },
        gold: {
          DEFAULT: "#C7A96B",
          soft: "#DFCAA0",
          muted: "#A6894E",
        },
        charcoal: {
          DEFAULT: "#1E1E1E",
          muted: "#5A5450",
          subtle: "#8C847E",
        },
        border: "rgba(110, 15, 29, 0.12)",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      letterSpacing: {
        editorial: "0.22em",
        wideEditorial: "0.32em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

