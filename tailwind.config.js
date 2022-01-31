module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily:{
      'kaushan': ['kaushan script'],
    },
    extend: {
      colors:{
        green:{
          DEFAULT: '#00f260'
        },
      },
    },
  },
  plugins: [],
}
