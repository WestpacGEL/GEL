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

const BREAK_POINTS = { sm: 768, md: 992, lg: 1200 };

const CONTAINER_MAXWIDTH = 1320;
const CONTAINER_PADDING = [12, 36, 48, 60];

export default {
	breakpoints: BREAK_POINTS,
	colors: {
		...COLORS,
		primary: {
			default: COLORS.primary,
			foreground: 'white',
		},
		hero: {
			default: COLORS.hero,
			foreground: COLORS.text,
		},
		neutral: {
			default: COLORS.neutral,
			foreground: 'white',
		},
		faint: {
			default: COLORS.light,
			foreground: COLORS.muted,
		},
		success: {
			default: COLORS.success,
			foreground: 'white',
		},
		information: {
			default: COLORS.information,
			foreground: 'white',
		},
		warning: {
			default: COLORS.warning,
			foreground: 'white',
		},
		danger: {
			default: COLORS.danger,
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

	badge: {
		minWidth: '10px',
		minWidth: '10px',
		padding: '4px 7px',
		lineHeight: 1,
		fontWeight: 700,
		fontSize: '14px',
		borderRadius: '12px',
		borderWidth: '1px',
	},

	button: {
		borderRadius: '3px',
		borderWidth: '1px',
		fontWeight: 400,
		lineHeight: 1.5,

		appearance: {
			primary: {
				standard: {
					default: {
						color: '#fff',
						backgroundColor: COLORS.primary,
						borderColor: COLORS.primary,
					},
					hover: {
						color: null,
						backgroundColor: Color('white')
							.mix(Color(COLORS.primary), 0.7)
							.hex(),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: Color('white')
							.mix(Color(COLORS.primary), 0.5)
							.hex(),
						borderColor: null,
					},
				},
				soft: {
					default: {
						color: COLORS.text,
						backgroundColor: '#fff',
						borderColor: COLORS.primary,
					},
					hover: {
						color: '#fff',
						backgroundColor: Color('white')
							.mix(Color(COLORS.primary), 0.7)
							.hex(),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: Color('white')
							.mix(Color(COLORS.primary), 0.5)
							.hex(),
						borderColor: null,
					},
				},
			},
			hero: {
				standard: {
					default: {
						color: COLORS.text, //mapping unique to this brand
						backgroundColor: COLORS.hero,
						borderColor: COLORS.hero,
					},
					hover: {
						color: COLORS.text, //mapping unique to this brand
						backgroundColor: Color('white')
							.mix(Color(COLORS.hero), 0.7)
							.hex(),
						borderColor: null,
					},
					active: {
						color: COLORS.text, //mapping unique to this brand
						backgroundColor: Color('white')
							.mix(Color(COLORS.hero), 0.5)
							.hex(),
						borderColor: null,
					},
				},
				soft: {
					default: {
						color: COLORS.text,
						backgroundColor: '#fff',
						borderColor: COLORS.hero,
					},
					hover: {
						color: null, //mapping unique to this brand
						backgroundColor: Color('white')
							.mix(Color(COLORS.hero), 0.7)
							.hex(),
						borderColor: null,
					},
					active: {
						color: null, //mapping unique to this brand
						backgroundColor: Color('white')
							.mix(Color(COLORS.hero), 0.5)
							.hex(),
						borderColor: null,
					},
				},
			},
			neutral: {
				standard: {
					default: {
						color: '#fff',
						backgroundColor: COLORS.neutral,
						borderColor: COLORS.neutral,
					},
					hover: {
						color: null,
						backgroundColor: Color('white')
							.mix(Color(COLORS.neutral), 0.7)
							.hex(),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: Color('white')
							.mix(Color(COLORS.neutral), 0.5)
							.hex(),
						borderColor: null,
					},
				},
				soft: {
					default: {
						color: COLORS.text,
						backgroundColor: '#fff',
						borderColor: COLORS.neutral,
					},
					hover: {
						color: '#fff',
						backgroundColor: Color('white')
							.mix(Color(COLORS.neutral), 0.7)
							.hex(),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: Color('white')
							.mix(Color(COLORS.neutral), 0.5)
							.hex(),
						borderColor: null,
					},
				},
			},
			faint: {
				standard: {
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
					active: {
						color: COLORS.muted,
						backgroundColor: '#fff',
						borderColor: null,
					},
				},
				soft: {
					default: {
						color: COLORS.muted,
						backgroundColor: '#fff',
						borderColor: COLORS.border,
					},
					hover: {
						color: null,
						backgroundColor: COLORS.light,
						borderColor: null,
					},
					active: {
						color: null,
						backgroundColor: COLORS.light,
						borderColor: null,
					},
				},
			},
			link: {
				standard: {
					default: {
						color: COLORS.primary,
						backgroundColor: 'transparent',
						borderColor: 'transparent',
					},
					hover: {
						color: null,
						backgroundColor: null,
						borderColor: null,
					},
					active: {
						color: null,
						backgroundColor: null,
						borderColor: null,
					},
				},
				soft: {},
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
		borderWidth: '1px',
		marginBottom: '21px',
		backgroundColor: '#fff',

		caption: {
			fontWeight: '300',
			fontSize: '18px',
			marginBottom: '12px',
			padding: '12px',
		},
		tr: {
			hover: {
				backgroundColor: COLORS.background,
			},
		},
		th: {
			fontWeight: 500,
			borderBottomWidth: '3px',
			borderColor: COLORS.hero,
			color: COLORS.text,
		},
		td: {
			padding: '12px',
			borderWidth: '1px',
			borderColor: COLORS.border,
		},
		striped: {
			backgroundColor: COLORS.light,
		},
		highlight: {
			borderColor: COLORS.primary,
		},
		bordered: {
			th: {
				borderBottomWidth: '2px',
			},
			borderColor: COLORS.border,
		},
		responsive: {
			borderWidth: '1px',
			borderColor: COLORS.border,
			caption: {
				padding: '12px',
			},
		},
	},

	well: {
		borderRadius: '3px',
		borderWidth: '1px',
		backgroundColor: COLORS.light,
		borderColor: COLORS.border,
		padding: {
			default: '12px',
			responsive: [12, 24],
		},
		marginBottom: '18px',
	},
};
