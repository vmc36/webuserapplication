/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#A7D7C5",
      },
      screens: {
        md: { max: "768px" },
        sm: { max: "414px" },
        xs: { max: "360px" },
      },
    },
  },
  plugins: [],
};
