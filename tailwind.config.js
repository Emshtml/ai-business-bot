/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0052ff",
        surface: "#f8f9ff",
        "surface-dim": "#cbdbf5",
        "surface-container": "#eff4ff",
        outline: "#74777f",
        secondary: "#565e71"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'eight': '8px',
      }
    },
  },
  plugins: [],
}
