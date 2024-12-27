import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					900: "#0F172A",
					800: "#1E293B",
					500: "#64748B",
					400: "#94A3B8",
					300: "#CBD5E1",
					200: "#E2E8F0",
					100: "#F1F5F9",
				},
				completed: {
					DEFAULT: "#7C3AED",
					light: "#EDE9FE",
				},
				btn: {
					delete: "#F43F5E",
					complete: "#BEF264",
				},
				memoHeading: "#92400E",
			},
			screens: {
				phone: "768px",
				tablet: "1024px",
			},
		},
	},
	plugins: [],
} satisfies Config;
