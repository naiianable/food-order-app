module.exports = {
	content: ["./src/components/**/*.js", "./pages/**/*.js"],
	theme: {
		extend: {
			minHeight: {
				"70vh": "70vh",
			},
			animation: {
				fade: "fadeOut 5s ease-in-out",
			},

			// that is actual animation
			keyframes: (theme) => ({
				fadeOut: {
					"0%": { backgroundColor: theme("colors.green.300") },
					"100%": { backgroundColor: theme("colors.transparent") },
				},
			}),
		},
	},
	plugins: [
		require("tailwindcss"),
		require("precss"),
		require("autoprefixer"),
	],
};
