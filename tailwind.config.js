/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        dancingScript: ["Dancing Script", "cursive"],
      },
      colors: {
        primary: "#2e0927",
        "primary-light": "#59314f",
        "primary-dark": "#000000",
        secondary: "#FF2D00",
        "secondary-light": "#FF3921",
        "secondary-dark": "#D90000",
        tertiary: "#04756F",
        "tertiary-light": "#49a49d",
        "tertiary-dark": "#004944",
        onSecondary: "#ffffff",
        onPrimary: "#000000",
        background: "#000000",
      },
      fontSize: {
        "display-1": ["8rem", { lineHeight: 1, fontWeight: 900 }],
        "display-2": ["6rem", { lineHeight: 1, fontWeight: 900 }],
        "display-3": ["4.75rem", { lineHeight: 1, fontWeight: 900 }],
        "display-4": ["4.5rem", { lineHeight: 1, fontWeight: 900 }],
        "display-5": ["3rem", { lineHeight: 1, fontWeight: 900 }],
        "display-6": ["2.25rem", { lineHeight: "2.5rem", fontWeight: 800 }],
        "display-7": ["1.875rem", { lineHeight: "2.25rem", fontWeight: 700 }],
        "display-8": ["1.5rem", { lineHeight: "2rem", fontWeight: 700 }],
        "display-9": ["1.25rem", { lineHeight: "1.75rem", fontWeight: 600 }],
        "body-1": ["1.5rem", { lineHeight: "1.75rem", fontWeight: 400 }],
        body: ["1.rem", { lineHeight: "1.5rem", fontWeight: 400 }],
      },
      spacing: {
        xs: "0.5rem",
        sm: "1.5rem",
        md: "3rem",
        lg: "6rem",
        xl: "12rem",
        "2xl": "20rem",
      },
    },
  },
  plugins: [],
};
