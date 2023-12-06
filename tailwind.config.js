/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},

		colors: {
			Violet: "hsl(257, 40%, 49%)",
			SoftMagenta: "hsl(300, 69%, 71%)",
		},
		fontFamily: {
			Montserrat: ["Poppins", "sans-serif"],
			Fraunces: ["Open Sans", "serif"],
		},
	},
	plugins: [],
};
