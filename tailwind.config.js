module.exports = {
	content: ["./src/compnents/**/*.js", "./pages/**/*.js"],
	theme: {
		extend: {},
	},
	plugins: [
		require("tailwindcss"),
		require("precss"),
		require("autoprefixer"),
	],
};
