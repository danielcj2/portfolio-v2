/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#171717",
        "accent-red": "#b80c09",
        "accent-muted": "#8b727e",
        "text-light": "#e5e7e6",
        "text-muted": "#b7b5b3",
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        "geist-mono": ["GeistMono", "sans-serif"],
        inter: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
