/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
				DEFAULT: '1.8rem',
				sm: '2rem',
				lg: '4rem',
				xl: '7rem',
				'2xl': '10rem',
			},
		},
	},
	plugins: [],
	darkMode: ['class'],
}

