/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB3D6',
        secondary: '#682999',
        accent: '#EFB8DA',
        deepPurple: '#6840D9',
        lightBg: '#FEFEFE',
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}