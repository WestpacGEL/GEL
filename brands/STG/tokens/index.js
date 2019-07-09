const COLORS = {
	background: '#F1F1EF',
	border: '#D6D5D0',
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

	panel: {
		backgroundColor: '#fff',
		borderWidth: 1,
		borderRadius: 3,
		appearance: {
			hero: {
				borderColor: COLORS.hero,
			},
			faint: {
				borderColor: COLORS.border
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
				},
				faint: {
					color: COLORS.text,
					backgroundColor: COLORS.background
				},
			},
		},
		body: {
			padding: {
				default: '12px',
				responsive: ['12', '24'],
			}
		},
		footer: {
			padding: {
				default: '10px 12px',
				responsive: ['10px 12px', '10px 24px'],
			},
			backgroundColor: COLORS.light,
			borderColor: COLORS.border,
		}
	},
};
