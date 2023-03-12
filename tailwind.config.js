/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      "2xl": "1920px",
    },

    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        input: "#EBEBEB",
        reddish: "#FF0000",
        sideBar: "#898989",
        grayish: "#C2C2C2",
      },

      width: {
        400: "400px",
        560: "560px",
        1000: "1000px",
        1200: "1200px",
      },

      spacing: {
        "5px": "5px",
        100: "100px",
        270: "270px",
      },

      borderRadius: {
        circle: "50%",
      },

      translate: {
        left: "-175%",
        top: "-78px",
      },

      fontFamily: {
        mulish: ["Mulish"],
        roboto: ["Roboto"],
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
}
