/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        bgBody:'#101014',
        textColor:'#858587',
        bgButtons:'#1E1E1E'
      },
      backgroundImage : {
        searchIcon : "url('/src/assets/images/icons/search.png')"
      }
    },
  },
  plugins: [],
}
