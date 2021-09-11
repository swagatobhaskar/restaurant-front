const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: { // any name for this text color group
          base: 'var(--color-text-base)',
        }
      },
      backgroundColor: {
        
      },
      fontFamily: {
        fancy: ['Dancing Script']
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus'],
      visibility: ['hover', 'focus', 'group-focus'],
    },
  },
  plugins: [],
}
