/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37',   // Gold from your branding
          dark: '#0F0F0F',   // Professional Matte Black
          cream: '#FAF9F6',  // Off-white for readability
          accent: '#C5A028'  // Slightly darker gold for hover states
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}