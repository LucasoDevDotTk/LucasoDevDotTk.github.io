/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			MainBg: "#050b39",
			primary: "#8a06d7",
			primary1: "#bc0dde",
			primary2: "#ee387a",
			contrast: "#080fc6",
			cgrey: "#B9B9B9",
		  },
		},
	  },
	plugins: [],
}
