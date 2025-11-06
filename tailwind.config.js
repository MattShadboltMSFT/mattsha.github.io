/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Blue AFL Theme
        'afl-navy': '#001F3F',
        'afl-blue': '#003366',
        'afl-blue-light': '#0051A5',
        'afl-blue-lighter': '#1E6FBA',
        'afl-accent': '#E21837',
        'afl-gold': '#FFB81C',
        'grass-green': '#2C7A3D',
        'dark-bg': '#0A1929',
        'dark-card': '#132F4C',
        'dark-border': '#1E3A5F',
      },
    },
  },
  plugins: [],
}
