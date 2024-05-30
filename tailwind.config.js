/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
      gray: "#a1a5a6"
     }
    },
    screens:{
      xm:'',
       sm:'350px',
       md:'640px',
       lg:'768px',
       xl:'951px',
    
    }
  },
  plugins: [],
};
