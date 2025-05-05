/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'ibm-plex': ['"IBM Plex Sans"', 'sans-serif'],
      },
      colors: {
        'primary': '#3B82F6', // Blue accent color
        'dark': '#111827',
        'dark-lighter': '#1F2937',
        'light-gray': '#F3F4F6',
      }
    },
  },
  plugins: [],
}
