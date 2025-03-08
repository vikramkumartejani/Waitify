/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        dark: {
          background: '#121212',
          text: '#ffffff',
          primary: '#bb86fc',
        },
        light: {
          background: '#ffffff',
          text: '#000000',
          primary: '#6200ee',
        }
      }

    },
  },
  plugins: [],
}