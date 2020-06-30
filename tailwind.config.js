const rem = (multiple) => {
	return `${multiple * 0.25}rem`;
};

module.exports = {
	theme: {
		container: {
			center: true
		},
		colors: {
			gray: {
				900: '#1e2029',
				800: '#323545',
				700: '#3b4052',
				600: '#454a60',
				500: '#636a89',
				400: '#737995',
				300: '#9297ac',
				200: '#b1b5c4',
				100: '#e0e1e7'
			},
			white: '#fff',
			positive: '#21bf73',
			negative: '#d50102',
			neutral: '#1b6ca8'
		},
		borderColor: (theme) => ({
			...theme('colors'),
			default: theme('colors.grey.100')
		}),
		borderRadius: {
			sm: rem(0.5),
			md: rem(1),
			lg: rem(1.5),
			full: `99999px`
		},
		fontSize: {
			xs: rem(3),
			sm: rem(3.5),
			base: rem(4.5),
			lg: rem(6),
			xl: rem(8),
			'2xl': rem(10),
			'3xl': rem(12)
		},
		leading: {
			tight: `1.1`,
			base: `1.5`,
			loose: `1.8`
		},
		boxShadow: {
			sm: `0 .1rem .2rem rgba(0, 0, 0, .05), 0 .2rem .4rem rgba(0, 0, 0, .05), `,
			base: `0 .1rem .2rem rgba(0, 0, 0, .05), 0 .2rem .4rem rgba(0, 0, 0, .05), 0 .4rem .6rem rgba(0, 0, 0, .05)`,
			lg: `0 .2rem .4rem rgba(0, 0, 0, .05), 0 .4rem .6rem rgba(0, 0, 0, .05), 0 .6rem 1rem rgba(0, 0, 0, .05)`,
			xl: `0 .2rem .4rem rgba(0, 0, 0, .05), 0 .6rem .8rem rgba(0, 0, 0, .05), 0 .8rem 1.2rem rgba(0, 0, 0, .05), 0 1rem 1.6rem rgba(0, 0, 0, .05)`,
			'2xl': `0 .4rem .6rem rgba(0, 0, 0, .05), 0 .8rem 1rem rgba(0, 0, 0, .05), 0 1rem 1.4rem rgba(0, 0, 0, .05), 0 1.2rem 2rem rgba(0, 0, 0, .05), 0 1.4rem 2.2rem rgba(0, 0, 0, .05)`
		}
	}
};
