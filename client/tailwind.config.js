/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0A0F1D',
          900: '#10172B', // Midnight navy
          800: '#172341', // Deep blue
          700: '#233258',
          600: '#344778'
        },
        gold: {
          300: '#E1CC98', // Pale gold
          400: '#D5BC82',
          500: '#C8A96B', // Champagne gold
          600: '#B08E4F',
          700: '#927339'
        },
        ivory: {
          50: '#FAF8F4',
          100: '#F7F4ED', // Warm ivory
          200: '#EFEAE0',
          300: '#E6E0D5'  // Fine borders
        },
        charcoal: '#292A2D',
        mutedGray: '#77766F',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"DM Serif Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(16, 23, 43, 0.05)',
        'luxury': '0 20px 40px -15px rgba(16, 23, 43, 0.12)',
        'gold-glow': '0 0 25px rgba(200, 169, 107, 0.25)',
      }
    },
  },
  plugins: [],
}
