/** @type {import('tailwindcss').Config} */

module.exports = {
content: [
"./src/**/*.{js,jsx,ts,tsx}",

// Path to the Tremor module
"./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {
    colors:{
        primary: "#90caf9",
      
        
        secondary: "#42a5f5", 
    }

},
},
plugins: [],
}