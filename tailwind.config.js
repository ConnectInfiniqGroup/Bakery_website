/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E98B10', // Orange from the design
          hover: '#C7750C',
        },
        secondary: '#FAF5ED', // Off-white/cream background
        dark: '#2D1F11', // Dark text color
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
