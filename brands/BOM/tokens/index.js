import Color from 'color';

const COLORS = {
	background: '#F0F1F2',
	border: '#D2D5D8',
	borderDark: '#939299',
	focus: '#867BCD',
	heading: '#1F252C',
	hero: '#1F252C',
	light: '#F7F8F9',
	muted: '#69727E',
	neutral: '#69727E',
	primary: '#B45C38',
	text: '#1F252C',

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
	},
	type: {},
	spacing: {},

	grid: {
		container: {
			maxWidth: CONTAINER_MAXWIDTH,
			padding: CONTAINER_PADDING,
		},
	},

	label: {
		borderRadius: '2px',
		borderWidth: '1px',
		fontSize: '12px',
		padding: '1px 6px',
		appearance: {
			primary: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.primary,
					borderColor: COLORS.primary,
				},
				hover: {
					color: null,
					backgroundColor: Color('white')
						.mix(Color(COLORS.primary), 0.5)
						.hex(),
					borderColor: Color('white')
						.mix(Color(COLORS.primary), 0.5)
						.hex(),
				},
			},
			hero: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.hero,
					borderColor: COLORS.hero,
				},
				hover: {
					color: null,
					backgroundColor: Color('white')
						.mix(Color(COLORS.hero), 0.5)
						.hex(),
					borderColor: Color('white')
						.mix(Color(COLORS.hero), 0.5)
						.hex(),
				},
			},
			neutral: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.neutral,
					borderColor: COLORS.neutral,
				},
				hover: {
					color: null,
					backgroundColor: Color('white')
						.mix(Color(COLORS.neutral), 0.5)
						.hex(),
					borderColor: Color('white')
						.mix(Color(COLORS.neutral), 0.5)
						.hex(),
				},
			},
			faint: {
				default: {
					color: COLORS.muted,
					backgroundColor: COLORS.light,
					borderColor: COLORS.border,
				},
				hover: {
					color: null,
					backgroundColor: '#fff',
					borderColor: null,
				},
			},
			success: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.success,
					borderColor: COLORS.success,
				},
				hover: {
					color: null,
					backgroundColor: Color('white')
						.mix(Color(COLORS.success), 0.5)
						.hex(),
					borderColor: Color('white')
						.mix(Color(COLORS.success), 0.5)
						.hex(),
				},
			},
			information: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.information,
					borderColor: COLORS.information,
				},
				hover: {
					color: null,
					backgroundColor: Color('white')
						.mix(Color(COLORS.information), 0.5)
						.hex(),
					borderColor: Color('white')
						.mix(Color(COLORS.information), 0.5)
						.hex(),
				},
			},
			warning: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.warning,
					borderColor: COLORS.warning,
				},
				hover: {
					color: null,
					backgroundColor: Color('white')
						.mix(Color(COLORS.warning), 0.5)
						.hex(),
					borderColor: Color('white')
						.mix(Color(COLORS.warning), 0.5)
						.hex(),
				},
			},
			danger: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.danger,
					borderColor: COLORS.danger,
				},
				hover: {
					color: null,
					backgroundColor: Color('white')
						.mix(Color(COLORS.danger), 0.5)
						.hex(),
					borderColor: Color('white')
						.mix(Color(COLORS.danger), 0.5)
						.hex(),
				},
			},
		},
	},
};
