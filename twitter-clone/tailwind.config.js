/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
		gridTemplateRows: {
			"main": "120px 1fr 60px"
		},
		gridTemplateColumns: {
			"grid-cols-2-custom": "repeat(2, 50%)"
		},
		textColor: {
			"menu_light_gray": "#E7E9EA"
		},
		backgroundColor: {
			"menu_button_hover": "#181818",
			"post_btn_light": "#1D9BF0",
			"post_btn_dark": "#1A8CD8"
		}
	},
  },
  plugins: [],
}
