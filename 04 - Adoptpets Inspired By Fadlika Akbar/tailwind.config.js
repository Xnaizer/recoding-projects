/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'main.htm','signin.htm','signup.htm', 'resetpassword.htm'   
  ],
  theme: {
    extend: {
      colors : {
        linearBlue : {
          default : '#1e3a8a'
        },
      },

      spacing : {
        '100': '100%',  
        '-100': '-100%',
      },

    },
  },
  plugins: [],
}

// npx tailwindcss ./resources/css/usecase.css --minify