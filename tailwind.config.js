/** @type {import('tailwindcss').Config} */ 
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"], 
        inter: ["Inter", "sans-serif"],     
      },
    },
  },
  plugins: [],
};

export default config;
