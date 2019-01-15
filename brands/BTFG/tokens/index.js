const COLORS = {
	background: '#F9F9F9',
	border: '#E0E0E0',
	heading: '#2574A9',
	hero: '#2574A9',
	light: '#FCFCFC',
	muted: '#666666',
	neutral: '#637b98',
	primary: '#9E005D',
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
		primary: {
			default: COLORS.primary,
			foreground: 'white',
		},
	},
	type: {},
	spacing: {},
};
