/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      animation: {
        'tremulo': 'tremor 6.5s infinite cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        tremor: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
      },
    },
  },
  plugins: [], 
}

