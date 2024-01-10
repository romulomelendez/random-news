/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
		gridTemplateColumns: {
			"main": "280px minmax(400px, 500px) 280px"
		},
		textColor: {
			"menu_light_gray": "#E7E9EA"
		},
		backgroundColor: {
			"menu_button_hover": "#181818"
		}
	},
  },
  plugins: [],
}
