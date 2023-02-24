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
    },

    extend: {
      width: {
        "560": "560px",
        "400": "400px"
      }
    },
  },

  plugins: [],
}
