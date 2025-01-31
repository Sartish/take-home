module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		screens: {
			'tablet': '640px',
			// => @media (min-width: 640px) { ... }

			'laptop': '1024px',
			// => @media (min-width: 1024px) { ... }

			'desktop': '1280px',
			// => @media (min-width: 1280px) { ... }
		},
		fontFamily: {
			'Montserrat': ['"Montserrat"', 'sans-serif'],
			'Catamaran': ['"Catamaran"', 'sans-serif']
		}
	},
	plugins: [],
};
