/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f3c614',
        'secondary': '#353535',
        'danger': '#e3342f',
        'success': '#38c172',
        'info': '#3490dc',
        'light': '#f8f9fa',
        'dark': '#343a40',
        'maroon': "#af5111"
      },
    },
  },
  plugins: [],
}

