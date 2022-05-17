module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E60023',
        'dark': '#111111',
        'light': '#EFEFEF',
        'lightHover': '#D7D7D7',
        'muted': '#717171'
      }
    },
  },
  plugins: [],
}