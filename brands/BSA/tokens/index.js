import Color from 'color';

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
					backgroundColor: Color('white').mix(Color(COLORS.primary), 0.5).hex()
				},
				hover: {
					backgroundColor: Color('white').mix(Color(COLORS.primary), 0.7).hex()
				},
			},
			hero: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.hero,
					borderColor: COLORS.hero,
				},
				active: {
					backgroundColor: Color('white').mix(Color(COLORS.hero), 0.5).hex()
				},
				hover: {
					backgroundColor: Color('white').mix(Color(COLORS.hero), 0.7).hex()
				},
			},
			neutral: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.neutral,
					borderColor: COLORS.neutral,
				},
				active: {
					backgroundColor: Color('white').mix(Color(COLORS.neutral), 0.5).hex()
				},
				hover: {
					backgroundColor: COLORS.neutral //mapping unique to this brand
				},
			},
			faint: {
				default: {
					color: COLORS.muted,
					backgroundColor: COLORS.light,
					borderColor: COLORS.border,
				},
				active: {
					backgroundColor: '#fff',
				},
				hover: {
					backgroundColor: '#fff'
				},
			},
			link: {
				default: {
					color: COLORS.primary,
					backgroundColor: 'transparent',
					borderColor: 'transparent',
				},
				active: {},
				hover: {},
			},
		},

		size: {
			small: {
				padding: '3px 9px 4px',
				fontSize: '14px',
				height: '30px',
			},
			medium: {
				padding: '5px 12px',
				fontSize: '16px',
				height: '36px',
			},
			large: {
				padding: '8px 15px',
				fontSize: '16px',
				height: '42px',
			},
			xlarge: {
				padding: '9px 18px 10px',
				fontSize: '18px',
				height: '48px',
			}
		}
	}
};
