/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    screens: {
      "2xl": "1920px",
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "input": "#EBEBEB",
      "reddish": "#FF0000",
      "sideBar": "#898989",
      "grayish": "#C2C2C2"
    },

    fontFamily: {
      "mulish": ["Mulish"],
    },

    extend: {
      width: {
        "400": "400px",
        "560": "560px",
        "1000": "1000px",
        "1190": "1190px"
      }
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
