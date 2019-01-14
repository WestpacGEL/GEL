const COLORS = {
	background: '',
	border: '',
	heading: '',
	hero: '',
	light: '',
	muted: '#5B6871',
	neutral: '',
	primary: '#78BE20',
	text: '',
};

const BREAK_POINTS = { xs: 576, sm: 768, md: 992, lg: 1200 };

export default {
	breakpoints: BREAK_POINTS,
	colors: {
		background: COLORS.background,
		border: COLORS.border,
		heading: COLORS.heading,
		hero: COLORS.hero,
		light: COLORS.light,
		muted: COLORS.muted,
		neutral: COLORS.neutral,
		primary: {
			default: COLORS.primary,
			active: COLORS.primary,
			offset: 'white',
		},
		text: COLORS.text,
	},
	type: {},
	spacing: {},
};
