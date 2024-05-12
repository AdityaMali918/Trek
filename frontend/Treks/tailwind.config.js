/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        black:"#000000",
      },
      fontFamily: {
        primary: ['Inter'],
        secondary: ['mono', 'monospace'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

