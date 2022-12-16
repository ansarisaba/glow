/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      colors: {
        'regal-blue': '#9C6A8C',
      },

    },
    screens: {
      'sm': '600px',
      'md': '768px',
      'lg':	'1024px'
    },

  },
  plugins: [],


}
