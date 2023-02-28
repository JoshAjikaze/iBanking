/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iBankingGreen: '#477E5B',
        iBankingDarkGreen: '#1A5131',
        iBankingLightGreen: '#CF9B08',
        iBankingBgLight: '#E5E5E5',
      }
    },
  },
  plugins: [],
}