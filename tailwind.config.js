/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: ['"Burtons"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
