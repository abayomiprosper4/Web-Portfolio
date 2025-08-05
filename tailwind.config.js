// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/5569540.jpg')",
        'hero-pattern2': "url('./assets/—Pngtree—elegant white background with rectangle_2025279.png')",
        'hero-pattern3': "url('./assets/6227820.jpg')"
      }
    },
  },
  plugins: [],
};