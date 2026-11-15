/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem,7vw,4.75rem)', { lineHeight: '1.02', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-md': ['clamp(1.75rem,3.6vw,2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.03em', fontWeight: '700' }],
      },
      colors: {
        content: {
          primary: token('content-primary'),
          secondary: token('content-secondary'),
          muted: token('content-muted'),
        },
        surface: {
          DEFAULT: token('surface'),
          elevated: token('surface-elevated'),
          muted: token('surface-muted'),
        },
        line: token('line'),
        syn: {
          green: token('syn-green'),
          blue: token('syn-blue'),
          purple: token('syn-purple'),
          orange: token('syn-orange'),
          red: token('syn-red'),
          yellow: token('syn-yellow'),
          string: token('syn-string'),
        },
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '50.01%, 100%': { opacity: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.45', transform: 'scale(0.85)' },
        },
      },
    },
  },
  plugins: [],
};
