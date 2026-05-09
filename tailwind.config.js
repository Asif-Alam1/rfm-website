/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.25rem',
				md: '2rem',
				lg: '3rem'
			},
			screens: {
				'2xl': '1280px'
			}
		},
		extend: {
			fontFamily: {
				display: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif'],
				sans: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui', 'sans-serif']
			},
			colors: {
				ink: {
					DEFAULT: 'hsl(var(--ink))',
					soft: 'hsl(var(--ink-soft))'
				},
				clay: {
					DEFAULT: 'hsl(var(--clay))',
					soft: 'hsl(var(--clay-soft))'
				},
				bone: 'hsl(var(--bone))',
				paper: 'hsl(var(--paper))',
				ash: {
					DEFAULT: 'hsl(var(--ash))',
					soft: 'hsl(var(--ash-soft))'
				},
				stone: {
					DEFAULT: 'hsl(var(--stone))',
					soft: 'hsl(var(--stone-soft))'
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 1px)',
				sm: '2px'
			},
			fontSize: {
				'display-2xl': ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
				'display-xl': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.025em' }],
				'display-lg': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
				'display-md': ['clamp(1.75rem, 3.5vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }]
			},
			letterSpacing: {
				tightest: '-0.04em'
			},
			transitionTimingFunction: {
				'soft': 'cubic-bezier(0.22, 1, 0.36, 1)'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
};
