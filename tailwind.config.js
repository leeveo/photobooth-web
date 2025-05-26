/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        dark: {
          800: '#1A1A29',
          900: '#13111C',
        },
        primary: {
          DEFAULT: '#7C3AED',
          50: '#F6F2FF',
          100: '#EDDEFF',
          200: '#D8BBFF',
          300: '#BF96FF',
          400: '#A169FE',
          500: '#7C3AED',
          600: '#6627D9',
          700: '#5520B2',
          800: '#41188A',
          900: '#2C1164',
        },
        purple: {
          DEFAULT: '#7C3AED',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
}
