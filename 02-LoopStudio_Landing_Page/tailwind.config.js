const defaultTheme= require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens:{
      'xs':'500px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily:{
        'Alata':["'Alata'", 'sans-serif'],
        'Josefin':["'Josefin Sans'",' sans-serif']
      }
    },
  },
  plugins: [],
}