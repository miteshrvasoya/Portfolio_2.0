/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem,8vw,5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['clamp(2.5rem,6vw,4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['clamp(2rem,4vw,3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75', letterSpacing: '0.01em' }],
        'body-md': ['1rem', { lineHeight: '1.7', letterSpacing: '0.01em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.02em' }],
      },
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
        content: {
          primary: 'rgb(var(--content-primary) / <alpha-value>)',
          secondary: 'rgb(var(--content-secondary) / <alpha-value>)',
          muted: 'rgb(var(--content-muted) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          elevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
          muted: 'rgb(var(--surface-muted) / <alpha-value>)',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
