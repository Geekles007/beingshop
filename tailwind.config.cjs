/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scrolling': "scroll-down 1s linear infinite"
      },
      keyframes: {
        'scroll-down': {
          '0%, 100%': {
            transform: `translateY(0%)`
          },
          '50%': {
            transform: `translateY(100%)`
          }
        }
      },
      colors: {
        flag: {
          green: '#099170',
          red: '#e21b30',
          yellow: '#ffdc44',
        },
        primary: colors.emerald,
        green: colors.emerald,
        secondary: colors.teal,
      },
      fontFamily: {
        heading: ['Roboto Condensed', ...fontFamily.sans],
        sans: ['Abril Fatface', ...fontFamily.sans],
        mono: ['Inter', ...fontFamily.mono],
        main: ['Kaisei HarunoUmi', ...fontFamily.mono],
      },
      maxWidth: {
        '8xl': '86rem',
        '9xl': '92rem',
      },
      screens: {
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
