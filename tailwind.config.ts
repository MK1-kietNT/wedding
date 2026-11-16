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
        crimson: {
          DEFAULT: "#7a0808",
          deep: "#4d0000",
          rich: "#990000",
          dark: "#630505",
        },
        cream: {
          DEFAULT: "#fdf9ec",
          warm: "#f8f0da",
        },
        champagne: {
          DEFAULT: "#ffe8a4",
          gold: "#e8c987",
          soft: "#f5d076",
        },
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        serif: ["var(--font-serif-vn)", "Times New Roman", "serif"],
        sans: ["var(--font-sans-vn)", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
