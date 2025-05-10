/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'cukcuk-blue': '#0053A0',
        'cukcuk-light-blue': '#E6F0FA',
        'cukcuk-orange': '#F5A623',
      },
    },
  },
  plugins: [],
};