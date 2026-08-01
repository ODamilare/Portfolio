import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",
        surface: "#10141C",
        "surface-2": "#171C27",
        border: "#1E2430",
        "border-strong": "#2A3143",
        accent: "#4C8DFF",
        "accent-soft": "rgba(76,141,255,0.12)",
        success: "#34D399",
        amber: "#F5A623",
        ink: "#E7EAF0",
        muted: "#8B93A7",
        faint: "#5B6478",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
