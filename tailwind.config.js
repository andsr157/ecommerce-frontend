/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        50: "#D8EEFD",
        500: "#28A0F6",
        600: "#0984DD",
        700: "#0764A7",
        yellow: "#FCE834",
      },
      gray: {
        50: "#F9FAFB",
        100: "#F2F4F7",
        200: "#EAECF0",
        300: "#D0D5DD",
        400: "#98A2B3",
        500: "#667085",
        600: "#475467",
        700: "#344054",
        800: "#1D2939",
        900: "#101828",
      },
      error: {
        50: "#FEF3F2",
        500: "#F04438",
        700: "#B42318",
      },
      green: {
        500: "#27AE60",
      },
      indigo: {
        500: "#6172F3",
      },
      orange: {
        500: "#F95016",
      },
      gits: {
        blue: {
          500: "#28A0F6",
        },
      },
      warning: {
        600: "#DC6803",
      },
    },
  },
  plugins: [],
}
