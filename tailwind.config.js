/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#5D6848',
      },
      fontFamily: {
        lindenHill: ['"Linden Hill"', "serif"],
        mrsSaintDelafield: ['"Mrs Saint Delafield"', "cursive"],
        lifeSavers: ['"Life Savers"', "serif"]
      }
    },
  },
  plugins: [],
}

