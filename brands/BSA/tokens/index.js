const COLORS = {
	background: '#F0F1F1',
	border: '#D3D4D5',
	heading: '#002F6C',
	hero: '#002F6C',
	light: '#F8F8F8',
	muted: '#6C7074',
	neutral: '#6C7074',
	primary: '#D81B2B',
	text: '#333333',

	// reserved
	success: '#008000',
	information: '#0074C4',
	warning: '#C53B00',
	danger: '#C40000',
};

const BREAK_POINTS = { xs: 576, sm: 768, md: 992, lg: 1200 };

export default {
	breakpoints: BREAK_POINTS,
	colors: {
		...COLORS,
		hero: {
			default: COLORS.hero,
			foreground: 'white',
		},
		primary: {
			default: COLORS.primary,
			foreground: 'white',
		},
	},
	type: {},
	spacing: {},
	list: {
		bullet: {
			primary: {
				color: COLORS.primary,
			},
			hero: {
				color: COLORS.hero,
			},
			neutral: {
				color: COLORS.neutral,
			},
		},
		link: {
			color: COLORS.primary,
		},
		tick: {
			color: COLORS.primary,
		},
		icon: {
			color: COLORS.primary,
		},
	},
};
