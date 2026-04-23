/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: '#111111',
        paper: '#fff7e8',
        acid: '#d7ff34',
        volt: '#00e5ff',
        punch: '#ff4ecd',
        ember: '#ff6b35',
        signal: '#7c5cff',
      },
      boxShadow: {
        brutal: '8px 8px 0 #111111',
        'brutal-sm': '4px 4px 0 #111111',
        'brutal-lg': '12px 12px 0 #111111',
        'brutal-dark': '8px 8px 0 #d7ff34',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 45%': { opacity: '1' },
          '46%, 100%': { opacity: '0' },
        },
      },
      animation: {
        scan: 'scan 4s linear infinite',
        blink: 'blink 1s steps(1) infinite',
      },
    },
  },
  plugins: [],
}
