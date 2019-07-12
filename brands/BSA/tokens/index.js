const COLORS = {
	background: '#F0F1F1',
	border: '#D3D4D5',
	borderDark: '#909396',
	focus: '#C26F9D',
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
