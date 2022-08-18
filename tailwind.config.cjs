/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'p-linear-from': 'hsl(236, 72%, 79%)',
				'p-linear-to': 'hsl(237, 63%, 64%)',
				'n-very-light-grayish-blue': 'hsl(240, 78%, 98%)',
				'n-light-grayish-blue': 'hsl(234, 14%, 74%)',
				'n-grayish-blue': 'hsl(233, 13%, 49%)',
				'n-dark-grayish-blue': 'hsl(232, 13%, 33%)'
			},
			fontSize: {
				'body-copy': '15px'
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif']
			}
		}
	},
	plugins: []
};
