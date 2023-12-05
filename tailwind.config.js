/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/img/**/*.{jpg,png,gif,svg}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    darkMode: false, // or 'media' or 'class'
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
