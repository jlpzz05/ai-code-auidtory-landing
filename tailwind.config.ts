import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        terminal: {
          DEFAULT: "#4ade80",
          soft: "#22c55e",
        },
        danger: {
          DEFAULT: "#f87171",
          soft: "#ef4444",
        },
        border: "#1f2933",
        muted: "#6b7280",
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 197, 94, 0.2)",
        "glow-red": "0 0 40px rgba(248, 113, 113, 0.2)",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["SFMono-Regular", "ui-monospace", "Menlo", "Monaco", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
