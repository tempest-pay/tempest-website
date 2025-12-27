import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "SF Pro Display", "Inter", "Segoe UI", "Roboto", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;
