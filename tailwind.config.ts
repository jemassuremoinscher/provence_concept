import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // MD3 colour roles — values defined as CSS vars in globals.css (seed #3C8DCC)
        primary: "var(--primary)",
        "on-primary": "var(--on-primary)",
        "primary-container": "var(--primary-container)",
        "on-primary-container": "var(--on-primary-container)",
        brand: "var(--brand)",
        secondary: "var(--secondary)",
        "on-secondary": "var(--on-secondary)",
        "secondary-container": "var(--secondary-container)",
        "on-secondary-container": "var(--on-secondary-container)",
        tertiary: "var(--tertiary)",
        "on-tertiary": "var(--on-tertiary)",
        "tertiary-container": "var(--tertiary-container)",
        "on-tertiary-container": "var(--on-tertiary-container)",
        background: "var(--background)",
        "on-background": "var(--on-background)",
        surface: "var(--surface)",
        "on-surface": "var(--on-surface)",
        "surface-variant": "var(--surface-variant)",
        "on-surface-variant": "var(--on-surface-variant)",
        "surface-lowest": "var(--surface-lowest)",
        "surface-low": "var(--surface-low)",
        "surface-container": "var(--surface-container)",
        "surface-high": "var(--surface-high)",
        "surface-highest": "var(--surface-highest)",
        outline: "var(--outline)",
        "outline-variant": "var(--outline-variant)",
        error: "var(--error)",
        "on-error": "var(--on-error)",
        "error-container": "var(--error-container)",
        "on-error-container": "var(--on-error-container)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "28px",
        "2xl": "36px",
        "3xl": "44px",
      },
      boxShadow: {
        e1: "0 1px 2px rgba(15,40,64,.10), 0 1px 3px rgba(15,40,64,.06)",
        e2: "0 2px 6px rgba(15,40,64,.12), 0 1px 2px rgba(15,40,64,.08)",
        e3: "0 6px 16px rgba(15,40,64,.14), 0 2px 4px rgba(15,40,64,.08)",
        e4: "0 12px 28px rgba(15,40,64,.16), 0 4px 8px rgba(15,40,64,.10)",
      },
      transitionTimingFunction: {
        emphasized: "cubic-bezier(0.2, 0, 0, 1)",
        "emphasized-out": "cubic-bezier(0.3, 0, 0.8, 0.15)",
        "emphasized-in": "cubic-bezier(0.05, 0.7, 0.1, 1)",
      },
      maxWidth: {
        shell: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
