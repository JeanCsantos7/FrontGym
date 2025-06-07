/** @type {import('tailwindcss').Config} */ 
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"], // corrigido aqui
        inter: ["Inter", "sans-serif"],     // corrigido aqui também
      },
    },
  },
  plugins: [],
};

export default config;
