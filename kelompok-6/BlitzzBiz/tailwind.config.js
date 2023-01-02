/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'custom': 'repeat(auto-fit, minmax(325px, 1fr))'
      },
      spacing: {
        '12.5': '3.125rem',
        '13': '3.25rem',
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/forms')],
  daisyui: {
    themes: ["lofi"]
  }
}
