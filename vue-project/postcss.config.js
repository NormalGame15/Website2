export default {
  plugins: {
    '@tailwindcss/postcss': {}, 
    'autoprefixer': {},
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lao: ['"Noto Sans Lao"', 'Phetsarath OT', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


