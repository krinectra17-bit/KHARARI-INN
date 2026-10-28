/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF8F3',
          50: '#FDFCFB',
          100: '#FAF8F3',
          200: '#F5F0E6',
        },
        sand: {
          DEFAULT: '#F0E9DE',
          light: '#F8F4EC',
          dark: '#E2D7C5',
        },
        charcoal: {
          DEFAULT: '#29251F',
          dark: '#1C1915',
          light: '#423D35',
        },
        'warm-grey': {
          DEFAULT: '#777168',
          light: '#9E978D',
          dark: '#5A554D',
        },
        gold: {
          DEFAULT: '#B78B50',
          dark: '#9A723D',
          light: '#CFAB79',
          50: '#FAF5EE',
        },
        terracotta: {
          DEFAULT: '#C3512F',
          dark: '#A64123',
          light: '#D96E4E',
        },
        burgundy: {
          DEFAULT: '#7A2234',
          dark: '#621B2A',
          light: '#963046',
        },
        border: {
          DEFAULT: '#E5DED2',
          light: '#EFEAE1',
          dark: '#D4CABA',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(41, 37, 31, 0.04)',
        'soft': '0 6px 24px rgba(41, 37, 31, 0.07)',
        'elevated': '0 12px 36px rgba(41, 37, 31, 0.10)',
      }
    },
  },
  plugins: [],
}
