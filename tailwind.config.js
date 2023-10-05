/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins":'poppins',
        "raleway":'raleway',
        "pacifico":'pacifico' 
      },
      
      colors: {
        'sosialmedia': '#F2F7FC',
        "primary": '#F2F5F9',
        "secondary": '#ff9c1a',
        "red" : '#EC1B09',
        "brownlight":'#FFEBD1',
        "navcolor": '#E1E8EF'
      },
      boxShadow: {
        "shadowku": '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
        "aboutme" : '0px 0px 0px 0px rgba(0, 0, 0, 0.25)'
      }
      
      
    },
  },
  plugins: [],
}

