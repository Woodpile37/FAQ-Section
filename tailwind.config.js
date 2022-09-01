/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'faq': "url('/images/aqex-bg.png')",
      },
      colors: {
        'primary': "#1EAFDE",
      },
      spacing: {
        "1/2": "50%",
        "1/3	": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5	": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6	": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "600": "600px",
        "82vh": "82vh",
        "87vh": "87vh",
        "92vh": "92vh",
        "93vh": "93vh",
        "94vh": "94vh",
        "30": "7rem",
        "100vh": "100vh",
        "60vh": "75vh",
        "4.5": "4.5rem",
      },
      fontWeight:{
        "1000":"1000",
      },

    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
