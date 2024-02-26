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
      'greyCloud': '#B6B6B4',

      'blue' : '#0ba6ff',

      'green' : '#57e32c',
    },
    dropShadow: {
      '2xl': '0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.3)',
    },
    extend: {},
  },
  plugins: [],
}