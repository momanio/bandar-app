/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          50: "#fef2f2",
          100: "#ffe1e1",
          200: "#fea3a3",
          300: "#fea3a3",
          400: "#fb6e6e",
          500: "#f23a3a",
          600: "#e02222",
          700: "#bc1919",
          800: "#9c1818",
          900: "#811b1b",
          950: "#460909",
        },
        black: {
          50: "#F3F3F4",
          100: "#F3F3F4",
          200: "#fea3a3",
          300: "#BABBBE",
          400: "#9EA0A5",
          500: "#81858D",
          600: "#676C75",
          700: "#50535B",
          800: "#393C43",
          900: "#24262B",
          950: "#111315",
          1000: "#1A1D1F",
        },
      },
    },
  },
  plugins: [],
};
