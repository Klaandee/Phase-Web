/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'mq-560': { 'raw': '(max-width: 560px)'},
				'mq-740': { 'raw': '(max-width: 740px)'},
			},
			maxWidth: {
				'pag': '75rem',
			},
		},
	},
	plugins: [],
}
