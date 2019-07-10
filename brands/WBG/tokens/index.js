import Color from 'color';

const COLORS = {
	background: '#F4F3F0',
	border: '#D7D2CB',
	heading: '#621A4B',
	hero: '#621A4B',
	light: '#F9F9F8',
	muted: '#575F65',
	neutral: '#2D373E',
	primary: '#D5002B',
	text: '#2D373E',

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

	button: {
		borderRadius: '3px',

		appearance: {
			primary: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.primary,
					borderColor: COLORS.primary,
				},
				active: {
					color: '#fff',
					backgroundColor: Color('white')
						.mix(Color(COLORS.primary), 0.5)
						.hex(),
					borderColor: COLORS.primary,
				},
				hover: {
					color: null,
					backgroundColor: Color('white')
						.mix(Color(COLORS.primary), 0.7)
						.hex(),
					borderColor: null,
				},
			},
			hero: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.hero,
					borderColor: COLORS.hero,
				},
				active: {
					color: '#fff',
					backgroundColor: Color('white')
						.mix(Color(COLORS.hero), 0.5)
						.hex(),
					borderColor: COLORS.hero,
				},
				hover: {
					color: null,
					backgroundColor: Color('white')
						.mix(Color(COLORS.hero), 0.7)
						.hex(),
					borderColor: null,
				},
			},
			neutral: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.neutral,
					borderColor: COLORS.neutral,
				},
				active: {
					color: '#fff',
					backgroundColor: Color('white')
						.mix(Color(COLORS.neutral), 0.5)
						.hex(),
					borderColor: COLORS.neutral,
				},
				hover: {
					color: null,
					backgroundColor: Color('white')
						.mix(Color(COLORS.neutral), 0.7)
						.hex(),
					borderColor: null,
				},
			},
			faint: {
				default: {
					color: COLORS.muted,
					backgroundColor: COLORS.light,
					borderColor: COLORS.border,
				},
				active: {
					color: COLORS.muted,
					backgroundColor: '#fff',
					borderColor: COLORS.border,
				},
				hover: {
					color: null,
					backgroundColor: '#fff',
					borderColor: null,
				},
			},
			link: {
				default: {
					color: COLORS.primary,
					backgroundColor: 'transparent',
					borderColor: 'transparent',
				},
				active: {
					color: null,
					backgroundColor: null,
					borderColor: null,
				},
				hover: {
					color: null,
					backgroundColor: null,
					borderColor: null,
				},
			},
		},

		size: {
			small: {
				padding: ['3px', '9px', '4px'],
				fontSize: '14px',
				height: '30px',
			},
			medium: {
				padding: ['5px', '12px'],
				fontSize: '16px',
				height: '36px',
			},
			large: {
				padding: ['8px', '15px'],
				fontSize: '16px',
				height: '42px',
			},
			xlarge: {
				padding: ['9px', '18px', '10px'],
				fontSize: '18px',
				height: '48px',
			},
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

	well: {
		borderRadius: '3px',
		backgroundColor: COLORS.light,
		borderColor: COLORS.border,
		padding: {
			default: '12px',
			responsive: [12, 24],
		},
		marginBottom: '18px',
	},
};
