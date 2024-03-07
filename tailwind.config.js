/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#eff2f5',
        'custom-blue':'#0052fe'
      },
    },
  },
  plugins: [],
}

