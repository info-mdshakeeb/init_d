/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackText: "#222222",
        primary: "#0C0C0C",
        secondary: "#F1F3F7",

        black: "#0D0D10",
        chartBar: "blue",
        secondBlack: "#333333",
      },
    },
  },
  plugins: [],
}

