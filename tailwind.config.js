/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				auto: "repeat(auto-fill, minmax(300px, 1fr))",
			},
		},
	},
	plugins: [],
};
