/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        default: '1rem',
        sm: '1rem',
        lg: '1.5rem',
        md: '2rem',
        xs: '1rem'
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'Montserrat'
    },
    extend: {
      colors: {
        primary: '#C0B7E8',
      }
    },
  },
  plugins: [],
}