/** @format */
const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
    colors: {
      ...colors,
      main: '#ff5a5d',
      primary: {},
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
