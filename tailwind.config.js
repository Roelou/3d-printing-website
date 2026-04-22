module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a',
        'deep-grey': '#2c2c2c',
        'muted-purple': '#5c4b8a',
        'dark-blue': '#1e1e78',
        'crimson': '#9b1b30',
        'gold': '#d4af37',
      },
      fontFamily: {
        'fantasy': ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'glow': '0 0 10px rgba(212, 175, 55, 0.5)',
      },
    },
  },
  plugins: [],
}