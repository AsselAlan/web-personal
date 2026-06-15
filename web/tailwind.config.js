/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        encode: ['Encode Sans', 'sans-serif'],
        pt: ['PT Sans', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#171717', // neutral-900
          darker: '#0a0a0a', // neutral-950
          gold: '#FFD700', // Llamativo gold
          gold_glow: '#FBBF24',
          violet: '#8B5CF6', 
          violet_glossy: '#A855F7', 
        }
      }
    },
  },
  plugins: [],
}
