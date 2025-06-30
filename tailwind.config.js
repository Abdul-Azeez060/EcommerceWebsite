/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FDFCF7',
          100: '#F8F6ED',
          200: '#F5F5DC',
          300: '#F0EDD1',
          400: '#E8E3C1',
          500: '#DDD6AA',
          600: '#C9C085',
          700: '#A8A065',
          800: '#7A7247',
          900: '#4D4729'
        },
        olive: {
          50: '#F6F8F4',
          100: '#E8F0E3',
          200: '#D4E2CE',
          300: '#8FBC8F',
          400: '#7BA77B',
          500: '#6B936B',
          600: '#5A7E5A',
          700: '#4A6A4A',
          800: '#3B553B',
          900: '#2C402C'
        },
        brown: {
          50: '#F9F6F3',
          100: '#F2EDE6',
          200: '#E5D6C7',
          300: '#D4BFA2',
          400: '#C1A577',
          500: '#A0824D',
          600: '#8B4513',
          700: '#6B3410',
          800: '#4F260C',
          900: '#331908'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif']
      }
    },
  },
  plugins: [],
};