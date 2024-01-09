/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
		gridTemplateColumns: {
			"main": "280px minmax(400px, 500px) 280px"
		}
	},
  },
  plugins: [],
}
