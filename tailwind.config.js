/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sage: {
          100: '#E8F0E8',
          200: '#D1E1D1',
          300: '#B5CDB5',
          400: '#7A9E7E',
          500: '#6B8E6F',
          600: '#5C7D60',
          700: '#4D6D51',
          800: '#3E5D42',
          900: '#2F4D33',
        },
        sand: {
          100: '#F5F0E8',
          200: '#E8DECC',
          300: '#D6C9B0',
          400: '#C9B99A',
          500: '#BCA97E',
          600: '#A89162',
          700: '#8F7A52',
          800: '#766342',
          900: '#5D4C32',
        },
      },
    },
  },
  plugins: [],
};
