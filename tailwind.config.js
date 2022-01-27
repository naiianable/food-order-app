module.exports = {
	content: ["./src/components/**/*.js", "./pages/**/*.js"],
	theme: {
		extend: {
			minHeight: {
				"70vh": "70vh",
			},
		},
	},
	plugins: [
		require("tailwindcss"),
		require("precss"),
		require("autoprefixer"),
	],
};
