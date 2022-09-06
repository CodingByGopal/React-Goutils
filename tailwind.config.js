/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brown-500": "#3a2519",
        "brown-600": "#2e1e14",
        "orange-10": "#fdf2e9",
        "orange-5": "#fbfaf8",
      },
    },
  },
  plugins: [],
};
