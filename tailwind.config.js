/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px'
    },
    extend: {
      colors: {
        soft_orange: 'hsl(35, 77%, 62%)',
        soft_red: 'hsl(5, 85%, 63%)',
        off_white: 'hsl(36, 100%, 99%)',
        grayish_blue: 'hsl(233, 8%, 79%)',
        dark_grayish_blue: 'hsl(236, 13%, 42%)',
        very_dark_blue: 'hsl(240, 100%, 5%)'
      },
      fontFamily: {
        'Inter': 'Inter'
      }
    },
  },
  plugins: [],
}
