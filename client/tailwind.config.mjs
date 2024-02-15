/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			primary: "#0f0f14",
			secondary: "#fff1e6",
			tetriary: "#575353",
			pink: "#f9bec7",
			pink2: "#e27396"
		},
		fontFamily: {
			dancing: ['DancingScript-Bold', "sans-serif"],
			bespoke: ["BespokeSans-Regular", "sans-serif"],
			sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
		},
	},
	plugins: [],
}

