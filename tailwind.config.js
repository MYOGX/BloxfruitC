/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rarity-common': '#6B7280',
        'rarity-uncommon': '#10B981',
        'rarity-rare': '#3B82F6',
        'rarity-legendary': '#A855F7',
        'rarity-mythical': '#F59E0B',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
