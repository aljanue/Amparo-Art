/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6c9bc2",
        accent: "#eef6fb",
        "background-light": "#ffffff",
        "text-main": "#334155",
        "text-muted": "#64748b",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Lato", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
