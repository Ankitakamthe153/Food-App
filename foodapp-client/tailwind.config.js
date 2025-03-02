/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#19207d",
        blue: "#19207d",
        red: "#FF6868",
        secondary: "#555",
        prigmayBG: "#FCFCFC",
      },
      fontFamily:{
        "primary" : ['Public Sans','sans-serif']
      }
     },
  },
  plugins: [daisyui],
}

