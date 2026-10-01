/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        bg: 'var(--bg, #f5f0eb)',
        'bg-alt': 'var(--bg-alt, #ede8e3)',
        'bg-dark': 'var(--bg-dark, #1c1917)',
        'bg-card': 'var(--bg-card, #ffffff)',
        border: 'var(--border, #ddd8d3)',
        'border-dark': 'var(--border-dark, #2c2825)',
        text: 'var(--text, #1c1917)',
        muted: 'var(--text-muted, #78716c)',
        light: 'var(--text-light, #a8a29e)',
        'pastel-blue': 'var(--pastel-blue, #bfd7ea)',
        'pastel-pink': 'var(--pastel-pink, #f2c4ce)',
        'pastel-green': 'var(--pastel-green, #b8e0c8)',
        'pastel-yellow': 'var(--pastel-yellow, #f5e6a3)',
        'pastel-purple': 'var(--pastel-purple, #d4c5f9)',
        'pastel-peach': 'var(--pastel-peach, #f9d4bb)',
        accent: 'var(--accent, #1c1917)',
        'accent-inv': 'var(--accent-inv, #f5f0eb)',
      },
    },
  },
  plugins: [],
}
