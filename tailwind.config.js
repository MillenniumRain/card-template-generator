/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#2c7066',
        'primary-alt': '#074137',
        secondary: '#a0d8d0',
      },
      backgroundSize: {
        200: '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '1rem' }],
        xs: ['0.75rem', { lineHeight: '1.125rem' }],
        sm: ['0.875rem', { lineHeight: '1.45rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.5rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['2rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.375rem', { lineHeight: '3.25rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.875rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['5.75rem', { lineHeight: '1.43' }],
        '9xl': ['7.25rem', { lineHeight: '94.828%' }],
      },
      textShadow: {
        default: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        none: '0 0 transparent',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const textShadowUtilities = {
        '.text-shadow': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: '0 0 transparent',
        },
      };

      addUtilities(textShadowUtilities, ['responsive', 'hover']);
    },
  ],
};
