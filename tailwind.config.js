/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Salty: ["Salty", "sans-serif"],
      },
      colors: {
        primary: "#202123",
        secondary: "#252425",
        textSecondary: "#72757E",
      },
    },
  },
  plugins: [],
};
