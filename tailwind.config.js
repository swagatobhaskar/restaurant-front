const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        fancy: ['Dancing Script']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
