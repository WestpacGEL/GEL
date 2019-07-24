import { tint } from './utils';

const COLORS = {
	background: '#F1F1F2',
	border: '#D4D4D8',
	borderDark: '#939299',
	focus: '#867BCD',
	heading: '#534891',
	hero: '#534891',
	light: '#FBFBFD',
	muted: '#6E6C7A',
	neutral: '#595762',
	primary: '#D73B00',
	text: '#20024E',

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
			foreground: 'white',
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
						backgroundColor: tint(COLORS.primary, 0.7),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: tint(COLORS.primary, 0.5),
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
						backgroundColor: tint(COLORS.primary, 0.7),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: tint(COLORS.primary, 0.5),
						borderColor: null,
					},
				},
			},
			hero: {
				standard: {
					default: {
						color: '#fff',
						backgroundColor: COLORS.hero,
						borderColor: COLORS.hero,
					},
					hover: {
						color: null,
						backgroundColor: tint(COLORS.hero, 0.7),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: tint(COLORS.hero, 0.5),
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
						color: '#fff',
						backgroundColor: tint(COLORS.hero, 0.7),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: tint(COLORS.hero, 0.5),
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
						backgroundColor: tint(COLORS.neutral, 0.7),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: tint(COLORS.neutral, 0.5),
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
						backgroundColor: tint(COLORS.neutral, 0.7),
						borderColor: null,
					},
					active: {
						color: '#fff',
						backgroundColor: tint(COLORS.neutral, 0.5),
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

	label: {
		borderRadius: '2px',
		borderWidth: '1px',
		fontSize: '12px',
		padding: '1px 6px',
		fontWeight: 400,
		lineHeight: 1,

		appearance: {
			primary: {
				default: {
					color: '#fff',
					backgroundColor: COLORS.primary,
					borderColor: COLORS.primary,
				},
				hover: {
					color: null,
					backgroundColor: tint(COLORS.primary, 0.5),
					borderColor: tint(COLORS.primary, 0.5),
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
					backgroundColor: tint(COLORS.hero, 0.5),
					borderColor: tint(COLORS.hero, 0.5),
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
					backgroundColor: tint(COLORS.neutral, 0.5),
					borderColor: tint(COLORS.neutral, 0.5),
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
					backgroundColor: tint(COLORS.success, 0.5),
					borderColor: tint(COLORS.success, 0.5),
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
					backgroundColor: tint(COLORS.information, 0.5),
					borderColor: tint(COLORS.information, 0.5),
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
					backgroundColor: tint(COLORS.warning, 0.5),
					borderColor: tint(COLORS.warning, 0.5),
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
					backgroundColor: tint(COLORS.danger, 0.5),
					borderColor: tint(COLORS.danger, 0.5),
				},
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

	modal: {
		backgroundColor: '#fff',
		borderRadius: 3,
		width: {
			small: 300,
			medium: 600,
			large: 900,
		},
		header: {
			borderWidth: '1px',
			borderColor: COLORS.hero,
			padding: '16px 24px 12px',
		},
		title: {
			fontSize: 18,
			fontWeight: 700,
			color: COLORS.text,
		},
		body: {
			padding: '18px 24px',
		},
		footer: {
			backgroundColor: COLORS.background,
			borderWidth: '1px',
			borderColor: COLORS.border,
			padding: '12px 18px',
		},
	},
};
