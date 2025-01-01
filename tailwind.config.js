/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-color": "#f8e6de",
        "text-color": "#333",
        "main-color": "#ed500a",
        "white-color": "#fdfdfd",
        "shadow-color": "#00000033",
        "bg-color-dark": "#0b0e14",
        "text-color-dark": "#f8e6de",
        "shadow-color-dark": "#000000b3",
      },
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
      },
      boxShadow: {
        "buttonShadow": "0 5px 15px"
      }
    },
  },
  plugins: [],
};
