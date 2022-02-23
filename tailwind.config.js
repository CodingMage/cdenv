const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure

  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  plugins: [
    // ...
    require("tailwind-scrollbar"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        fancy: ["Dancing Script"],
        playfair: ["Playfair Display"],
      },
      colors: {
        borderBlue: "#01E4F0",
        "custom-inactive": "#F4F4F4",
        "blur-blue-bg": "rgba(1, 228, 240, 0.03)",
        "dark-blue-bg": "#283A8F",
        "light-blue-bg": "#01E4F0",
      },
    },
  },
};
