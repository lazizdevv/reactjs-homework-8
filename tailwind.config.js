/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:"15px",
        screens: {
          lg: "1260px",
        },
      },
      colors: {
        primary: '#0D63F3', 
        secondary: '#1E1E1E', 
        accent: '#6C757D', 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        nuckle:['Nuckle','sans-serif']
      },
    },
  },
  plugins: [],
}