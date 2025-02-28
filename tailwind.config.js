/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#181818",
      secondary: "#8B5CF6",
      white: "#fff",
      black: "#0e0e0e",
    }
  },
  plugins: [],
}