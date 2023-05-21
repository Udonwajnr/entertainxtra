/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'black':'#070808',
        'body-black':'#111',
        'light-black':'#252627',
        'red':'#e6473a',
      },
    gridTemplateColumns:{
      fluid:'repeat(auto-fit,minmax(11rem,1fr))',
    },
    boxShadow:{
      "2xl":'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },

    },
  },
  plugins: [
  ],
}
