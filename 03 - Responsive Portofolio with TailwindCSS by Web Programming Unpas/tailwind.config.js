/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./mainpage.htm'],
  theme: {
    container:{
      center : true,
      padding : '16px'
    },
    extend: {
      colors : {
        'primary' : '#14b8a6',
        'secondary' : '#64748b',
        'dark' : '#0f172a',
      },

      screens :{
        '2xl' : '1320px',
      },

      fontFamily :{
        'deca' : ['Lexend Deca'],
        'exa' : ['Lexend Exa'],
        'chewy' : ['Chewy']
      },

    },
  },
  plugins: [],
}

