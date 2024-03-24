/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lora': ['Lora', 'sans-serif'],
      },
      colors: {
        main: "#292736",
        "main-light": "#4A4856",
        "red-dark": "#D41313",
        "red-light": "#F4C4C4",
        "gray-light": "#E6E6E6",
        "gray-dark": "#626262",
      },
      maxWidth: {
        260: "260px",
      }
    },
  },
  plugins: [],
}
