/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#11d452",
        "background-light": "#f6f8f6",
        "background-dark": "#102216",
        "card-light": "#ffffff",
        "card-dark": "#182c1c",
        "text-light": "#111812",
        "text-dark": "#e0e0e0",
        "subtle-text-light": "#618968",
        "subtle-text-dark": "#a2bba6",
        "border-light": "#f0f4f1",
        "border-dark": "#2c3e30",
      },
      fontFamily: {
        display: ["Public Sans", "sans-serif"],
        catalog: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};

