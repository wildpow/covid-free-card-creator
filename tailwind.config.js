module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "santa-red": "A30202",
        "santa-yellow": "FFB90D",
        "santa-brown": "764F26",
      },
    },
  },
  variants: {},
  plugins: [],
};
