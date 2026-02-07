/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        onelearn: {
          red: '#D7282F',
          dark: '#1a1a1a',
          gray: '#333333',
          light: '#f5f5f5'
        }
      },
      fontFamily: {
        sans: ['Kanit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}