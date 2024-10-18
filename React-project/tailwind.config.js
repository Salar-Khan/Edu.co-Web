/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   colors:{
    lightBlue:"rgbBa(0, 55, 255, 0.68)"
   }
    },
  },
  plugins: [],
}

