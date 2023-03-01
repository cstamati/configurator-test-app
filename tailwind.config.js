/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#C8B18B",
        "dark": "#1B1B1B",
        "on-dark": "#202020",
        "transparent-light": "rgba(255,255,255,0.17)",
        "transparent-dark": "rgba(0,0,0,0.17)",
      },
      fontFamily:{
        sans: ['var(--font-roboto)']
      }
    },
  },
  plugins: [],
}