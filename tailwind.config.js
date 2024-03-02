/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fill: ({ theme }) => ({
      gray: theme('colors.gray')
    })
  },
  plugins: [],
}