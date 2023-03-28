/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': {
          light: '#EEEEEE',
          DEFAULT: '#999999',
          dark: '#222222',
        },
        'primary': {
          light: '#fff4e0',
          DEFAULT: '#a77b29',
          dark: '#423112',
        },
        'secondary': {
          light: '#e4eaf4',
          DEFAULT: '#2955a7',
          dark: '#0a152a',
        },
      },
      aspectRatio: {
        'desktop': '21 / 9',
        'mobile': '4 / 3',
      },
    },
  },
  plugins: [],
}
