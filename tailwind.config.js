/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // Update this line to include src directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d2e32',
        accent: '#64f4ac',
        'accent-light': '#8ff7c2',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}