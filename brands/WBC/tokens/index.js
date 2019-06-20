import Color from 'color';

const COLORS = {
	primary: '#D5002B',
	hero: '#621A4B',
	neutral: '#2D373E',
	muted: '#575F65',
	light: '#F9F9F8',

	background: '#F4F3F0',
	heading: '#621A4B',
	text: '#2D373E',
	border: '#D7D2CB',
	borderDark: '#8C9296',
	focus: '#9F4585',

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
			padding: CONTAINER_PADDING
		}
	},

	button: {
		radius: '3px',

		appearance: {
			primary: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.primary,
					borderColor: COLORS.primary,
				},
				active: {
					color: '#fff',
					backgroundColor: Color('white').mix(Color(COLORS.primary), 0.5).hex(),
					borderColor: COLORS.primary,
				},
				hover: {
					color: null,
					backgroundColor: Color('white').mix(Color(COLORS.primary), 0.7).hex(),
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
					backgroundColor: Color('white').mix(Color(COLORS.hero), 0.5).hex(),
					borderColor: COLORS.hero,
				},
				hover: {
					color: null,
					backgroundColor: Color('white').mix(Color(COLORS.hero), 0.7).hex(),
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
					backgroundColor: Color('white').mix(Color(COLORS.neutral), 0.5).hex(),
					borderColor: COLORS.neutral,
				},
				hover: {
					color: null,
					backgroundColor: Color('white').mix(Color(COLORS.neutral), 0.7).hex(),
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
			}
		}
	}
};
