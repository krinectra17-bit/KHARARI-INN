/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: 'var(--color-paper)',
          2: 'var(--color-paper-2)',
          3: 'var(--color-paper-3)',
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          2: 'var(--color-ink-2)',
        },
        muted: 'var(--color-muted)',
        rule: 'var(--color-rule)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          ink: 'var(--color-accent-ink)',
        },
        focus: 'var(--color-focus)',
        whatsapp: 'var(--color-whatsapp)',
        ivory: {
          DEFAULT: 'var(--color-paper)',
          50: 'var(--color-paper)',
          100: 'var(--color-paper)',
          200: 'var(--color-paper-2)',
        },
        sand: {
          DEFAULT: 'var(--color-paper-2)',
          light: 'var(--color-paper-3)',
          dark: 'var(--color-rule)',
        },
        charcoal: {
          DEFAULT: 'var(--color-ink)',
          dark: 'var(--color-ink)',
          light: 'var(--color-ink-2)',
        },
        'warm-grey': {
          DEFAULT: 'var(--color-muted)',
          light: 'var(--color-muted)',
          dark: 'var(--color-ink-2)',
        },
        gold: {
          DEFAULT: 'var(--color-accent)',
          dark: 'var(--color-accent)',
          light: 'var(--color-accent)',
          50: 'var(--color-paper-3)',
        },
        border: {
          DEFAULT: 'var(--color-rule)',
          light: 'var(--color-rule)',
          dark: 'var(--color-rule)',
        }
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(41, 37, 31, 0.04)',
        'soft': '0 4px 20px rgba(41, 37, 31, 0.06)',
        'elevated': '0 12px 36px rgba(41, 37, 31, 0.10)',
      }
    },
  },
  plugins: [],
}
