/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");


module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      fontFamily: {
        'signika': ['"Signika Negative"', 'sans-serif']
      },
      animation: {
        'tremulo': 'tremor 1.5s infinite cubic-bezier(.36,.07,.19,.97) both',
        "retivalE": "retivalE 2.5s  ease-in-out",
        "retivalD": "retivalD 2.5s  ease-in-out",
        "retivalB": "retivalB 2.5s  ease-in-out",
        "retivalC": "retivalC 2.5s  ease-in-out",
        "DropItem": "DropItem 1.5s  ease-in-out",
      },
      keyframes: {
        DropItem: {
          "0%": {
            transform: 'translate3d(0px, -100%, 0px)',
          },
          "100%": {
            transform: 'translate3d(0px, 0px, 0px)',
          }
        },
        tremor: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        retivalE: {
          "0%": {
            opacity: 0,
            transform: 'translate3d(-100px, 0%, 0px)',
          },
          "100%": {
            opacity: 1,
            transform: 'translate3d(0px, 0px, 0px)',
          }
        },
        retivalD: {
          "0%": {
            opacity: 0,
            transform: 'translate3d(200px, 0%, 0px)',
          },
          "100%": {
            opacity: 1,
            transform: 'translate3d(0px, 0px, 0px)',
          }
        },
        retivalB: {
          "0%": {
            opacity: 0,
            transform: 'translate3d(0px, 150%, 0px)',
          },
          "100%": {
            opacity: 1,
            transform: 'translate3d(0px, 0px, 0px)',
          }
        },
        retivalC: {
          "0%": {
            opacity: 0,
            transform: 'translate3d(0px, -100%, 0px)',
          },
          "100%": {
            opacity: 1,
            transform: 'translate3d(0px, 0px, 0px)',
          }
        },

      },
    },
  },
  plugins: [], 
}

