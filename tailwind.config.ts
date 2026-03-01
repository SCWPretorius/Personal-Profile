import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'retro-bg': '#0d0d0d',
        'retro-surface': '#1a1a1a',
        'retro-text': '#f0f0f0',
        'retro-muted': '#888888',
        'retro-red': '#ff1a1a',
        'retro-border': '#2e2e2e',
      },
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'glitch-1': 'glitch-1 3s infinite',
        'glitch-2': 'glitch-2 3s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'glitch-1': {
          '0%, 90%, 100%': { transform: 'translate(0)', opacity: '0' },
          '91%': { transform: 'translate(-2px, 1px)', opacity: '0.8' },
          '93%': { transform: 'translate(2px, -1px)', opacity: '0.8' },
          '95%': { transform: 'translate(-2px, 1px)', opacity: '0.8' },
          '97%': { transform: 'translate(2px, -1px)', opacity: '0' },
        },
        'glitch-2': {
          '0%, 92%, 100%': { transform: 'translate(0)', opacity: '0' },
          '93%': { transform: 'translate(2px, -1px)', opacity: '0.8' },
          '95%': { transform: 'translate(-2px, 1px)', opacity: '0.8' },
          '97%': { transform: 'translate(2px, -1px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config
