/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#003049',
        customYellow: '#EDE3A1',
        customOrange: '#FCBF49',
        customBlue1: '#004062'
      },
      fontFamily: {
        custom: "Climate Crisis",
        custom1: 'Dela Gothic One',
        serif: ['"PT Serif"', 'serif'],
      },
    },
  },
};