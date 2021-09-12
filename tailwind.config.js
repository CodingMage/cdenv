const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure

  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        borderBlue: "#01E4F0",
        "custom-inactive": "#F4F4F4",
        "blur-blue-bg": "rgba(1, 228, 240, 0.03)",
      },
    },
  },
};
