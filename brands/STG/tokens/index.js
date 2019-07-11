import Color from 'color';

const COLORS = {
	background: '#F1F1EF',
	border: '#D6D5D0',
	borderDark: '#949386',
	focus: '#9681AF',
	heading: '#004833',
	hero: '#78BE20',
	light: '#F8F8F7',
	muted: '#757463',
	neutral: '#757463',
	primary: '#E30000',
	text: '#004833',

	// reserved
	success: '#008000',
	information: '#0074C4',
	warning: '#C53B00',
	danger: '#C40000',
};

const BREAK_POINTS = { xs: 576, sm: 768, md: 992, lg: 1200 };

const CONTAINER_MAXWIDTH = 1320;
const CONTAINER_PADDING = [12, 36, 48, 60];

export default {
	breakpoints: BREAK_POINTS,
	colors: {
		...COLORS,
		hero: {
			default: COLORS.hero,
			foreground: COLORS.text,
		},
		primary: {
			default: COLORS.primary,
			foreground: 'white',
		},
	},
	type: {},
	spacing: {},

	grid: {
		container: {
			maxWidth: CONTAINER_MAXWIDTH,
			padding: CONTAINER_PADDING,
		},
	},
};
