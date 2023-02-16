/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        sans: "Ubuntu, sans-serif",
      },
      colors: {
        "marine-blue": "#02295a",
        "purplish-blue": "#473dff",
        "pastel-blue": "#adbeff",
        "light-blue": "#bfe2fd",
        "strawberry-red": "#ed3548",
        "cool-gray": "#9699ab",
        "light-gray": "#d6d9e6",
        magnolia: "#f0f6ff",
        alabaster: "#fafbff",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
