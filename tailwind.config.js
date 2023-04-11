/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    // "./src/index.js",
    // "./src/App.js",
  ],
  theme: {
    extend: {},
    // container: true,
  },
  themes: ["cupcake", "dark", "cmyk",],
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}
