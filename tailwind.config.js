module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    backgroundImage: {
      hero: "url('./src/images/newhero.jpg')",
      men: "url('./src/images/men.jpg')",
      women: "url('./src/images/women.jpg')",
      accessory: "url('./src/images/accessory.jpg')",
      electronics: "url('./src/images/electronics.jpg')",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
