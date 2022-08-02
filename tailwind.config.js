/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          primary: '#0B8457',
          secondary: '#29403A',
          other: '#1DA599'
        }
      }
    },
  },
  plugins: [],
}
