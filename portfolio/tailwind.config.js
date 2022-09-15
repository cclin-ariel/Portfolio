/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        '370px': '370px',
      },
      animation: {
        'spin-move': 'spin-move 2.5s linear infinite;',
        'move': 'move 1.5s ease-out infinite'
      },
      keyframes: {
        'spin-move': {
          '0%': {
            transform: 'translateX(0) translateY(0) rotate(360deg)',
          },
          '100%': {
            transform: 'translateX(-3rem) translateY(1.8rem) rotate(0deg)',
          }
        },

      }
    },
    colors: {
      // transparent: "transparent",
      Blackish: "#202020",
      EggYellow: "#FFDF6C",
      MediumGrey: "#707070",
      DarkGrey: "#3F3F3F",
      white: "#FFFFFF",
      light: "#FFFBEB",
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

