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
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      screens: {
        
        'sm': '640px', // Telas pequenas, como celulares em modo paisagem (iPhone SE)
        'md': '768px', // Telas médias, como tablets (iPad)
        'lg': '1024px', // Telas grandes, como laptops e desktops
        'xl': '1280px', // Telas extra grandes, como monitores de desktop maiores
        '2xl': '1536px', // Telas extra extra grandes, como monitores maiores
        'cell': '390px', // Especificamente para uma tela de celular genérica
        'tablet': '640px', // Especificamente para uma tela de tablet genérica
        'laptop': '1024px', // Especificamente para uma tela de laptop genérica
        'desktop': '1280px', // Especificamente para uma tela de desktop genérica
      },
      borderWidth: {
        '1rem': '1rem',
      },
      borderRadius: {
        custom: '20px',
        customLft: '20px 20px 0px 20px',
        ss: '50px 50px 50px 50px',
      },
      border: {
        bcustom: "border: 1px solid #000;"
      },
      colors: {
        "regal-blue": "#243c5a",
      },
      fontSize: {
        'sm': '0.875rem',
        'base': '0.5rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        'mobiletext': '1.5rem',
      },
      fontFamily: {
        signika: ['"Signika Negative"', "sans-serif"],
        lalezar: ['Lalezar', 'sans-serif'],
      },
      animation: {
        tremulo: "tremor 1.5s infinite cubic-bezier(.36,.07,.19,.97) both",
        opacityAnim: "opacityAnim 2.5s  ease-in-out",
        retivalE: "retivalE 2.5s  ease-in-out",
        retivalD: "retivalD 2.5s  ease-in-out",
        retivalB: "retivalB 2.5s  ease-in-out",
        retivalC: "retivalC 2.5s  ease-in-out",
        DropItem: "DropItem 1.5s  ease-in-out",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(122deg, #2B2B2B 41.25%, #909090 166.73%)',
      },
      borderRadius: {
        '20px': '20px',
      },
      backgroundColor: {
        headerlinear: "linear-gradient(90.19deg, rgba(0,0,0,0.4) 0.16%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 95.68%)",
        // 'custom-gradient': 'linear-gradient(122deg, #2B2B2B 41.25%, #909090 166.73%)',
      },
      keyframes: {
        opacityAnim: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 1,
          },
        },
        DropItem: {
          "0%": {
            transform: "translate3d(0px, -100%, 0px)",
          },
          "100%": {
            transform: "translate3d(0px, 0px, 0px)",
          },
        },
        tremor: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%": { transform: "translateX(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(2px)" },
        },
        retivalE: {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100px, 0%, 0px)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0px, 0px, 0px)",
          },
        },
        retivalD: {
          "0%": {
            opacity: 0,
            transform: "translate3d(200px, 0%, 0px)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0px, 0px, 0px)",
          },
        },
        retivalB: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0px, 150%, 0px)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0px, 0px, 0px)",
          },
        },
        retivalC: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0px, -100%, 0px)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0px, 0px, 0px)",
          },
        },
      },
    },
  },
  plugins: [],
};