/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'mm': { 'min': '310px', 'max': '640px' },

      'sm': { 'min': '640px', 'max': '767px' },

      'md': { 'min': '768px', 'max': '1023px' },

      'lg': { 'min': '1024px', 'max': '1279px' },

      'xl': { 'min': '1280px', 'max': '1535px' },

      '2xl': { 'min': '1536px' },
    },
    extend: {
      colors: {
        banana: {
          100: "#FFCE56",
        },
        bluesky: {
          100: "#9DC1E4",
        },
        cherry: {
          100: "#F96E43",
          200: "#CB2552"
        },
        lightgreen: {
          100: "#AEEBAD"
        },
        dark: {
          DEFAULT: "#262626",
        },
        light: {
          DEFAULT: "#E5EFEF",       
        }
      }
    },
  },
  plugins: [],
}
