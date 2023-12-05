/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: "tw-",
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
    theme: {
      extend: {
        colors: {
          "primary-color": "#101019",
          "seconday-color": "#989BDF",
          "secondary-color-light": "#C4C7FD",
          "tertiary-color": "#151521",
          "info-light": "#FCFCFC",
          "blue-color-primary": "#0a0c15",
          "blue-color-secondary": "#67CEFC",
          "purple-color": "#8874D4",
          "purple-color-secondary": "#8967FC",
        },
      },
      fontFamily: {
        poppinsRegular: ["Poppins-Regular"],
        poppinsBold: ["Poppins-Bold"],
        poppinsMedium: ["Poppins-Medium"],
        poppinsSemiBold: ["Poppins-SemiBold"],
        openSansSemiBold: ["OpenSans-SemiBold"],
        openSansRegular: ["OpenSans-Regular"],
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "170%": "170%",
      },
    },
    plugins: [],
  };
  