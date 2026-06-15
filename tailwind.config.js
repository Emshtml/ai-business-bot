/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Nexus Intelligence Design System - Light Palette
        primary: "#003ec7",
        "primary-container": "#0052ff",
        "on-primary": "#ffffff",
        "on-primary-container": "#dfe3ff",
        
        secondary: "#515f78",
        "secondary-container": "#d2e0fe",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#55637d",
        
        tertiary: "#474e61",
        "tertiary-container": "#5e667a",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#dde4fc",
        
        surface: "#f8f9ff",
        "surface-dim": "#cbdbf5",
        "surface-bright": "#f8f9ff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#eff4ff",
        "surface-container": "#e5eeff",
        "surface-container-high": "#dce9ff",
        "surface-container-highest": "#d3e4fe",
        
        "on-surface": "#0b1c30",
        "on-surface-variant": "#434656",
        outline: "#737688",
        "outline-variant": "#c3c5d9",
        
        "inverse-surface": "#213145",
        "inverse-on-surface": "#eaf1ff",
        "inverse-primary": "#b7c4ff",
        
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      spacing: {
        "base-unit": "8px",
        "margin-mobile": "16px",
        "margin-desktop": "40px",
        gutter: "24px",
        "container-max": "1280px",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "sans-serif"],
        headline: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "SFMono-Regular"],
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-base": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "label-mono": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
  ],
};
