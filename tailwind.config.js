/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        'dark-slate-grey' : 'hsl(234, 29%, 20%)',
        'charcoal-grey' : 'hsl(235, 18%, 26%)',
        'grey' : 'hsl(231, 7%, 60%)',
      }
    },
  },
  plugins: [],
}

