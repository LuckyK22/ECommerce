/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'gWhite': '#F8F8FF',
      'wSmoke': '#F5F5F5',
      'bPowder': '#FEFEFA',
      'snow': '#F5FEFD',
      'ivory': '#FFFFF0',
      'fWhite': '#FFFAF0',
      'sShell': '#FFF5EE',
      'rWhite': '#FFFAFA',
      'sDrift': '#F8FBF8',

      'abbey' : '#494F55',
      'black' : '#000000',
      'charcoal' : '#36454F',
      'sBlack' : '#100C08',
    },
    extend: {},
  },
  plugins: [],
}