const COLORS = {
	background: '#F3F5F6',
	border: '#CFD8DC',
	borderDark: '#91979A',
	focus: '#E45C78',
	heading: '#000000',
	hero: '#495761',
	light: '#F9FAFB',
	muted: '#5B6871',
	neutral: '#263238',
	primary: '#D5002B',
	text: '#000000',

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
			foreground: 'white',
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

	panel: {
		backgroundColor: '#fff',
		borderWidth: '1px',
		borderRadius: '3px',
		appearance: {
			hero: {
				borderColor: COLORS.hero,
			},
			faint: {
				borderColor: COLORS.border,
			},
		},
		header: {
			padding: {
				default: '10px 12px',
				responsive: ['10px 12px', '10px 24px'],
			},
			appearance: {
				hero: {
					color: '#fff',
					backgroundColor: COLORS.hero,
					borderColor: COLORS.hero,
				},
				faint: {
					color: COLORS.text,
					backgroundColor: COLORS.background,
					borderColor: COLORS.border,
				},
			},
		},
		body: {
			padding: {
				default: '12px',
				responsive: ['12px', '24px'],
			},
		},
		footer: {
			padding: {
				default: '10px 12px',
				responsive: ['10px 12px', '10px 24px'],
			},
			backgroundColor: COLORS.light,
			borderColor: COLORS.border,
		},
	},

	table: {
		th: {
			borderColor: COLORS.hero,
			color: COLORS.text,
		},
		tr: {
			hover: {
				backgroundColor: COLORS.background,
			},
		},
		appearance: {
			striped: {
				backgroundColor: COLORS.light,
			},
			highlight: {
				borderColor: COLORS.primary,
			},
			bordered: {
				borderColor: COLORS.border,
			},
			responsive: {
				borderColor: COLORS.border,
			},
		},
	},
};
