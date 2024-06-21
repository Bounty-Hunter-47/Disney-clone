/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#131520',
        'secondary': '#121212'
      },
      transitionDuration: {
        '40': '40ms',
      }

    }
  },
  plugins: [
    require('tailwindcss-no-scrollbar')
  ],
}