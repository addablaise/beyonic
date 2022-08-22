/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "beyonic-blue": "#0077BA",
        "beyonic-blue-50": "#CAECFF",
        "beyonic-blue-400": "#006FAB",
        "beyonic-blue-500": "#005989",
        "beyonic-blue-600": "#00456B",
      }
    },
  },
  plugins: [],
}
