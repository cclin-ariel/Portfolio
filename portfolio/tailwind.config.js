/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '370px': '370px',
      }
    },
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
  // mode: 'jit',
  plugins: [],
};

