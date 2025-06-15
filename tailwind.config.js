/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('nativewind/preset')], // ✅ ADD THIS LINE
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
