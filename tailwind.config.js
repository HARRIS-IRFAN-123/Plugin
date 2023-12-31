/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    tabSize :{
      1 :'1',
      2 : '2',
      4 : '4',
      8 : '8'
    },
    extend: {},
  },
  plugins: [
    plugin(function({matchUtilities,theme}){
      matchUtilities(
        {
          tab : (value)=>({
            tabSize : value
          }),
        },
        {values: theme('tabSize')}
      )
    })
  ],
}

