/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      sblack: '#1C1C1C',
      orng: '#EA5426',
    }
    ,
    extend: {
      fontFamily: {
        "merri": ["Merriweather", "serif"]
      },
      fontWeight: {
        regular: 400,
        bolder: 800,
      }
    },
  },
  plugins: [],
}