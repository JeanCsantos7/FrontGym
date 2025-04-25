/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "serif"],
        inter: ["Inter", "serif"]
      },
    },
  },
  plugins: [],
};

export default config;
