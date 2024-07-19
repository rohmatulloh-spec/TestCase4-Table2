/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				jetbrains: ["JetBrains Mono", "monospace"],
			},
			screens: {
				mobileS: "320px",
				mobileM: "375px",
				mobileL: "425px",
				tablet: "640px",
				laptop: "1024px",
				desktop: "1280px",
			},
			colors: {
				customGreen: "#00E696",
				customGrey: "#787885",
				greyFormBarLogin: "#5B5B5B",
				customRed: "#FF0000",
				greyInput: "#B4B4BB",
				background: "#F0F9F9",
			},
		},
	},
	plugins: [],
};
