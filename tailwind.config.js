/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        "league-spartan": ['"League Spartan"', "sans-serif"],
      },
      colors: {
        "space-color": "#000117",
      },
      width: {
        "90vw": "90vw",
      },
    },
  },
  plugins: [],
};
