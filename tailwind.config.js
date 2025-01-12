/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.js"]
  ,
  darkMode: 'class',
  theme: {

    extend: {
      screens:{
        //screen is too big so make it smaller than default tailwind size by adding this 
        "sm":"340px", 
        'lg':"1050px"
      },
      
      fontFamily:{
        montserrat:["Montserrat", "serif"],
        inconsolas:["Inconsolata", "serif"],
        caveat: ["Caveat", "serif"],
        offside: ["Offside", "serif"]

      }
    },
  },

  plugins: [],
}

