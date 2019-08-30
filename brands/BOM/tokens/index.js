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
	system: 'yellow',
};

const FONT = (folder = '../font') => ({
	// LL Brown Regular (mapped to 'normal')
	'@font-face': {
		fontFamily: 'brown',
		src: `url("${folder}/lineto-brown-pro-regular.eot")`,
		src: `url("${folder}/lineto-brown-pro-regular.eot?#iefix") format("embedded-opentype"),
	  	url("${folder}/lineto-brown-pro-regular.woff2") format("woff2"),
	  	url("${folder}/lineto-brown-pro-regular.woff") format("woff")`,
		fontWeight: 'normal',
		fontStyle: 'normal',
	},

	// LL Brown Bold (mapped to 'bold')
	'@font-face': {
		fontFamily: 'brown',
		src: `url("${folder}/lineto-brown-pro-bold.eot")`,
		src: `url("${folder}/lineto-brown-pro-bold.eot?#iefix") format("embedded-opentype"),
	  	url("${folder}/lineto-brown-pro-bold.woff2") format("woff2"),
	  	url("${folder}/lineto-brown-pro-bold.woff") format("woff")`,
		fontWeight: 'bold',
		fontStyle: 'normal',
	},

	// LL Brown Light (mapped to '300')
	'@font-face': {
		fontFamily: 'brown',
		src: `url("${folder}/lineto-brown-pro-light.eot")`,
		src: `url("${folder}/lineto-brown-pro-light.eot?#iefix") format("embedded-opentype"),
	  	url("${folder}/lineto-brown-pro-light.woff2") format("woff2"),
	  	url("${folder}/lineto-brown-pro-light.woff") format("woff")`,
		fontWeight: 300,
		fontStyle: 'normal',
	},
});

const BREAK_POINTS = { sm: 768, md: 992, lg: 1200 };

const CONTAINER_MAXWIDTH = '132rem';
const CONTAINER_PADDING = ['1.2rem', '3.6rem', '4.8rem', '6rem'];

export default {
	brand: 'BOM',
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
	font: FONT(),
	typography: {
		fontSize: '62.5%',
		body: {
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
			fontSize: '1.4rem',
			color: COLORS.text,
			fontWeight: 400,
			lineHeight: 1.428571429,
		},
		brand: {
			fontFamily: 'brown',
		},
		headings: {
			color: COLORS.heading,
		},
		p: {
			margin: '1.2rem 0',
		},
		dl: {},
		dt: {
			fontWeight: 700,
		},
		dd: {
			margin: 0,
		},
		abbr: {
			cursor: 'help',
			borderBottom: `1px dotted ${COLORS.text}`,
			textDecoration: 'none',
		},
		address: {
			fontStyle: 'normal',
		},
		blockquote: {
			fontSize: '1.6rem',
			fontWeight: 300,
		},
		mark: {
			backgroundColor: tint(COLORS.primary, 0.2),
		},
		selection: {
			backgroundColor: tint(COLORS.primary, 0.2),
		},
		lead: {
			marginBottom: '2.1rem',
			fontSize: ['1.6rem', '1.8rem'],
			fontWeight: 300,
			lineHeight: 1.4,
		},
		link: {
			default: {
				color: COLORS.primary,
				textDecoration: 'underline',
			},
			hover: {
				textDecoration: 'underline',
			},
			focus: {
				outline: `2px solid ${COLORS.focus}`,
				outlineOffset: 3,
			},
		},
	},
	spacing: {},

	badge: {
		minWidth: '1rem',
		minWidth: '1rem',
		padding: '0.4rem 0.7rem',
		lineHeight: 1,
		fontWeight: 700,
		fontSize: '1.4rem',
		borderRadius: '1.2rem',
		borderWidth: '1px',
	},

	breadcrumb: {
		padding: '6px 18px',
		marginBottom: '21px',
		fontSize: '13px',
		color: COLORS.text,
		separator: {
			marginLeft: '3px',
			marginRight: '3px',
			color: COLORS.primary,
		},
	},

	button: {
		borderRadius: '0.3rem',
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
				padding: ['0.3rem', '0.9rem', '0.4rem'],
				fontSize: '1.4rem',
				height: '3rem',
			},
			medium: {
				padding: ['0.5rem', '1.2rem'],
				fontSize: '1.6rem',
				height: '3.6rem',
			},
			large: {
				padding: ['0.8rem', '1.5rem'],
				fontSize: '1.6rem',
				height: '4.2rem',
			},
			xlarge: {
				padding: ['0.9rem', '1.8rem', '1rem'],
				fontSize: '1.8rem',
				height: '4.8rem',
			},
		},
	},

	formCheck: {
		control: {
			borderWidth: '1px',
			default: {
				borderColor: COLORS.hero,
				backgroundColor: 'transparent',
			},
			disabled: {
				borderColor: COLORS.border,
				backgroundColor: COLORS.light,
			},
			check: {
				checkbox: {
					backgroundColor: COLORS.hero,
					borderRadius: 3,
				},
				radio: {
					backgroundColor: COLORS.hero,
					borderRadius: '50%',
				},
			},
		},
		label: {
			default: {},
			disabled: {
				color: COLORS.muted,
			},
		},
		size: {
			medium: {
				control: {
					width: '2.4rem',
				},
				check: {
					checkbox: {
						width: '1.4rem',
						height: '0.8rem',
						stroke: '3px',
						tweak: '-0.2rem',
					},
					radio: {
						width: '1.2rem',
						height: '1.2rem',
						tweak: '0rem',
					},
				},
				item: {
					marginRight: '1.8rem',
					marginBottom: '0.6rem',
				},
				label: {
					paddingTop: '0.2rem',
					paddingBottom: '0.2rem',
					gap: '0.6rem',
				},
			},
			large: {
				control: {
					width: '3rem',
				},
				check: {
					checkbox: {
						width: '1.8rem',
						height: '1rem',
						stroke: '4px',
						tweak: '-0.2rem',
					},
					radio: {
						width: '1.6rem',
						height: '1.6rem',
						tweak: '0rem',
					},
				},
				item: {
					marginRight: '1.8rem',
					marginBottom: '1.2rem',
				},
				label: {
					paddingTop: '0.5rem',
					paddingBottom: '0.5rem',
					gap: '1rem',
				},
			},
		},
	},

	grid: {
		container: {
			maxWidth: CONTAINER_MAXWIDTH,
			padding: CONTAINER_PADDING,
		},
	},

	label: {
		borderRadius: '0.2rem',
		borderWidth: '1px',
		fontSize: '1.2rem',
		padding: '0.1rem 0.6rem',
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

	form: {
		chitchat: {
			fontSize: '1.8rem',
			color: COLORS.heading,
			lineHeight: 1.4,
			fontWeight: 'bold',
			textAlign: 'center',
			margin: [0, '0 0 3rem'],
		},
		errorMessage: {
			fontSize: '1.4rem',
			margin: '0 0 1.2rem',
			color: COLORS.danger,
			icon: {
				marginRight: '0.25em',
			},
			li: {
				marginBottom: '0.6rem',
			},
		},
		group: {
			spacing: {
				medium: {
					marginBottom: '1.8rem',
				},
				large: {
					marginBottom: ['2.4rem', '3rem'],
				},
			},
			inline: {
				marginLeft: [null, '0.6rem'],
			},
		},
		hint: {
			color: COLORS.muted,
			fontSize: '1.4rem',
			spacing: {
				medium: {
					marginTop: '-0.6rem',
					marginBottom: '1.2rem',
				},
				large: {
					marginTop: '-1.2rem',
					marginBottom: '1.8rem',
				},
			},
		},
		cluster: {
			item: {
				default: {
					marginTop: '1.8rem',
				},
				horizontal: {
					marginRight: '1.8rem',
				},
			},
		},
		label: {
			fontWeight: 500,
			fontSize: '1.6rem',
			sublabel: {
				fontSize: '1.4rem',
				marginBottom: '0.6rem',
			},
			spacing: {
				medium: {
					marginBottom: '1.2rem',
				},
				large: {
					marginBottom: '1.8rem',
				},
			},
		},
		section: {
			borderTop: `1px solid ${COLORS.border}`,
			paddingTop: ['3rem', '3.6rem'],
			paddingBottom: '0.6rem',
			paddingLeft: [null, '5.4rem', '4.6rem', '5rem'],
			paddingRight: [null, '5.4rem', '4.6rem', '5rem'],
		},
		sectionImg: {
			marginBottom: ['1.8rem', '4.2rem'],
		},
	},

	grid: {
		container: {
			maxWidth: CONTAINER_MAXWIDTH,
			padding: CONTAINER_PADDING,
		},
	},

	modal: {
		backgroundColor: '#fff',
		borderRadius: 3,
		size: {
			small: {
				width: 300,
			},
			medium: {
				width: 600,
			},
			large: {
				width: 900,
			},
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

	list: {
		type: {
			bullet: {
				appearance: {
					primary: {
						color: COLORS.primary,
					},
					hero: {
						color: COLORS.hero,
					},
					neutral: {
						color: COLORS.neutral,
					},
				},
			},
			link: {
				color: COLORS.primary,
			},
			tick: {
				color: COLORS.primary,
			},
			icon: {
				color: COLORS.muted,
			},
		},
	},

	listGroup: {
		margin: 0,
		padding: 0,
		borderWidth: '1px',
		borderColor: COLORS.border,
		borderRadius: '3px',
		listGroupItem: {
			padding: '12px',
		},
	},

	panel: {
		backgroundColor: '#fff',
		marginBottom: '2.1rem',
		borderWidth: '1px',
		borderRadius: '0.3rem',
		appearance: {
			hero: {
				borderColor: COLORS.hero,
			},
			faint: {
				borderColor: COLORS.border,
			},
		},
		header: {
			fontSize: '1.6rem',
			padding: {
				default: '1rem 1.2rem',
				responsive: ['1rem 1.2rem', '1rem 2.4rem'],
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
				default: '1.2rem',
				responsive: ['1.2rem', '2.4rem'],
			},
		},
		footer: {
			padding: {
				default: '1rem 1.2rem',
				responsive: ['1rem 1.2rem', '1rem 2.4rem'],
			},
			backgroundColor: COLORS.light,
			borderColor: COLORS.border,
		},
	},

	progressBar: {
		borderWidth: '1px',
		borderColor: COLORS.border,
		marginBottom: '2.1rem',
		fontSize: '1.4rem',
		fontWeight: 700,
		lineHeight: '2rem',
		color: 'white',
		backgroundColor: COLORS.hero,
		size: {
			default: {
				height: '2.4rem',
			},
			skinny: {
				height: '1rem',
			},
		},
	},

	table: {
		borderWidth: '1px',
		marginBottom: '2.1rem',
		backgroundColor: '#fff',
		caption: {
			fontWeight: 300,
			fontSize: '1.8rem',
			marginBottom: '1.2rem',
			padding: '1.2rem',
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
			padding: '1.2rem',
			borderWidth: '1px',
			borderColor: COLORS.border,
		},
		striped: {
			backgroundColor: COLORS.light,
		},
		highlight: {
			borderLeft: `6px solid ${COLORS.primary}`,
			borderBottom: `1px solid ${COLORS.primary}`,
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
				padding: '1.2rem',
			},
		},
	},

	textInput: {
		lineHeight: 1.5,
		fontWeight: 400,
		color: COLORS.text,
		backgroundColor: '#fff',
		borderWidth: '1px',
		borderRadius: '3px',
		fontXFactor: 1.81,
		appearance: {
			default: {
				borderColor: COLORS.borderDark,
			},
			invalid: {
				borderColor: COLORS.danger,
			},
		},
		size: {
			small: {
				padding: ['0.3rem', '0.9rem', '0.4rem'],
				fontSize: '1.4rem',
			},
			medium: {
				padding: ['0.5rem', '1.2rem'],
				fontSize: '1.6rem',
			},
			large: {
				padding: ['0.8rem', '1.5rem'],
				fontSize: '1.6rem',
			},
			xlarge: {
				padding: ['0.9rem', '1.8rem', '1rem'],
				fontSize: '1.8rem',
			},
		},
		disabled: {
			backgroundColor: COLORS.light,
			color: COLORS.muted,
		},
		placeholder: {
			fontWeight: 300,
			color: tint(COLORS.Text, 0.5),
		},
		select: {
			caretGap: '0.8rem',
		},
		textarea: {
			size: {
				small: {
					minHeight: '5.4rem',
				},
				medium: {
					minHeight: '6rem',
				},
				large: {
					minHeight: '6.6rem',
				},
				xlarge: {
					minHeight: '7.2rem',
				},
			},
		},
	},

	well: {
		borderRadius: '0.3rem',
		borderWidth: '1px',
		backgroundColor: COLORS.light,
		borderColor: COLORS.border,
		padding: {
			default: '1.2rem',
			responsive: ['1.2rem', '2.4rem'],
		},
		marginBottom: '1.8rem',
	},

	alert: {
		padding: '1.8rem',
		marginBottom: '2.1rem',
		borderWidth: '1px',
		appearance: {
			success: {
				color: COLORS.success,
				backgroundColor: tint(COLORS.success, 0.05),
				borderColor: tint(COLORS.success, 0.5),
			},
			information: {
				color: COLORS.information,
				backgroundColor: tint(COLORS.information, 0.05),
				borderColor: tint(COLORS.information, 0.5),
			},
			warning: {
				color: COLORS.warning,
				backgroundColor: tint(COLORS.warning, 0.05),
				borderColor: tint(COLORS.warning, 0.5),
			},
			danger: {
				color: COLORS.danger,
				backgroundColor: tint(COLORS.danger, 0.05),
				borderColor: tint(COLORS.danger, 0.5),
			},
			system: {
				color: 'black',
				backgroundColor: COLORS.system,
				borderColor: COLORS.system,
			},
		},
	},

	switch: {
		borderWidth: '2px',
		borderColor: COLORS.border,
		backgroundColor: '#fff',
		marginRight: '1.8rem',
		marginBottom: '0.6rem',
		text: {
			gap: '0.6rem',
		},
		toggle: {
			checked: {
				borderColor: COLORS.hero,
				backgroundColor: COLORS.hero,
			},
		},
		toggleText: {
			default: {
				color: COLORS.text,
				padding: '0 0.4rem',
			},
			checked: {
				color: '#fff',
			},
			disabled: {
				color: COLORS.muted,
			},
		},
		size: {
			small: {
				width: '7rem',
				height: '3rem',
				borderRadius: '3rem',
				fontSize: '1.4rem',
			},
			medium: {
				width: '8rem',
				height: '3.6rem',
				borderRadius: '3.6rem',
				fontSize: '1.6rem',
			},
			large: {
				width: '8.9rem',
				height: '4.2rem',
				borderRadius: '4.2rem',
				fontSize: '1.6rem',
			},
			xlarge: {
				width: '9.6rem',
				height: '4.8rem',
				borderRadius: '4.8rem',
				fontSize: '1.8rem',
			},
		},
	},
};
