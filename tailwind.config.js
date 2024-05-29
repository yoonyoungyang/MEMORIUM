/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'bg-red-500',
    'bg-yellow-500',
    'bg-blue-500',
    'bg-purple-500',
    'bg-green-500',
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
