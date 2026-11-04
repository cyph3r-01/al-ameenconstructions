/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        primary: { black: '#1A1A1A', orange: '#F59E0B', white: '#FFFFFF' },
        // accent = orange darkened to pass contrast (5.0:1) for text on white
        accent: '#B45309',
        secondary: {
          light: '#FAFAFA',
          border: '#E5E5E5',
          text: '#5C5C5C',
          muted: '#6B6B6B',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Arial Narrow', 'Arial', 'sans-serif'],
        sans: ['"Public Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
