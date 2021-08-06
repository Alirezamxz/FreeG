module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e3e5ff",
          200: "#c6cbff",
          300: "#aab1fe",
          400: "#8d97fe",
          500: "#717dfe",
          600: "#5a64cb",
          700: "#444b98",
          800: "#2d3266",
          900: "#171933",
        },
        secondary: {
          100: "#d2d2d3",
          200: "#a5a5a6",
          300: "#78777a",
          400: "#4b4a4d",
          500: "#1e1d21",
          600: "#18171a",
          700: "#121114",
          800: "#0c0c0d",
          900: "#27262b",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
