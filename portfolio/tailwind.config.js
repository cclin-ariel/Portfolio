/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // transparent: "transparent",
      Blackish: "#202020",
      EggYellow: "#FFDF6C",
      MediumGrey: "#707070",
      DarkGrey: "#3F3F3F",
      white: "#FFFFFF",
    },
  },
  variants: {
    extend: {
      fontSize: ['hover', 'focus'],
      animation: ['hover', 'focus'],
    }
  },
  plugins: [],
};


// const plugin = require('tailwindcss/plugin')
// // const pxToRem = (px, base = 16) => `${px / base}rem`

// module.exports = {
//   theme: {

//     colors: {
//       // transparent: "transparent",
//       Blackish: "#202020",
//       EggYellow: "#FFDF6C",
//       MediumGrey: "#707070",
//       DarkGrey: "#3F3F3F",
//       white: "#FFFFFF",
//     },
//   },

//   purge: [
//     './components/**/*.{vue,js}',
//     './layouts/**/*.vue',
//     './pages/**/*.vue',
//     './plugins/**/*.{js,ts}',
//     './nuxt.config.{js,ts}',
//   ],
//   plugins: [
//     plugin(function ({ addUtilities, theme }) {
//       const customUtilities = {
//         '.text-white': {
//           color: '#FFFFFF',
//         },
//       }
//       addUtilities(customUtilities)
//     }),
//   ],
// }