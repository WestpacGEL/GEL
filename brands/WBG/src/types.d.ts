declare module '@westpac/wbg' {
	export type BRAND = {
		name: string;
		code: string;
	};
	export type COLORS = {
		tints: {
			background5: string;
			background10: string;
			background20: string;
			background30: string;
			background40: string;
			background50: string;
			background60: string;
			background70: string;
			background80: string;
			background90: string;
			border5: string;
			border10: string;
			border20: string;
			border30: string;
			border40: string;
			border50: string;
			border60: string;
			border70: string;
			border80: string;
			border90: string;
			borderDark5: string;
			borderDark10: string;
			borderDark20: string;
			borderDark30: string;
			borderDark40: string;
			borderDark50: string;
			borderDark60: string;
			borderDark70: string;
			borderDark80: string;
			borderDark90: string;
			focus5: string;
			focus10: string;
			focus20: string;
			focus30: string;
			focus40: string;
			focus50: string;
			focus60: string;
			focus70: string;
			focus80: string;
			focus90: string;
			heading5: string;
			heading10: string;
			heading20: string;
			heading30: string;
			heading40: string;
			heading50: string;
			heading60: string;
			heading70: string;
			heading80: string;
			heading90: string;
			hero5: string;
			hero10: string;
			hero20: string;
			hero30: string;
			hero40: string;
			hero50: string;
			hero60: string;
			hero70: string;
			hero80: string;
			hero90: string;
			light5: string;
			light10: string;
			light20: string;
			light30: string;
			light40: string;
			light50: string;
			light60: string;
			light70: string;
			light80: string;
			light90: string;
			link5: string;
			link10: string;
			link20: string;
			link30: string;
			link40: string;
			link50: string;
			link60: string;
			link70: string;
			link80: string;
			link90: string;
			muted5: string;
			muted10: string;
			muted20: string;
			muted30: string;
			muted40: string;
			muted50: string;
			muted60: string;
			muted70: string;
			muted80: string;
			muted90: string;
			neutral5: string;
			neutral10: string;
			neutral20: string;
			neutral30: string;
			neutral40: string;
			neutral50: string;
			neutral60: string;
			neutral70: string;
			neutral80: string;
			neutral90: string;
			pop5: string;
			pop10: string;
			pop20: string;
			pop30: string;
			pop40: string;
			pop50: string;
			pop60: string;
			pop70: string;
			pop80: string;
			pop90: string;
			primary5: string;
			primary10: string;
			primary20: string;
			primary30: string;
			primary40: string;
			primary50: string;
			primary60: string;
			primary70: string;
			primary80: string;
			primary90: string;
			text5: string;
			text10: string;
			text20: string;
			text30: string;
			text40: string;
			text50: string;
			text60: string;
			text70: string;
			text80: string;
			text90: string;
			success5: string;
			success10: string;
			success20: string;
			success30: string;
			success40: string;
			success50: string;
			success60: string;
			success70: string;
			success80: string;
			success90: string;
			info5: string;
			info10: string;
			info20: string;
			info30: string;
			info40: string;
			info50: string;
			info60: string;
			info70: string;
			info80: string;
			info90: string;
			warning5: string;
			warning10: string;
			warning20: string;
			warning30: string;
			warning40: string;
			warning50: string;
			warning60: string;
			warning70: string;
			warning80: string;
			warning90: string;
			danger5: string;
			danger10: string;
			danger20: string;
			danger30: string;
			danger40: string;
			danger50: string;
			danger60: string;
			danger70: string;
			danger80: string;
			danger90: string;
			system5: string;
			system10: string;
			system20: string;
			system30: string;
			system40: string;
			system50: string;
			system60: string;
			system70: string;
			system80: string;
			system90: string;
		};
		background: string;
		border: string;
		borderDark: string;
		focus: string;
		heading: string;
		hero: string;
		light: string;
		link: string;
		muted: string;
		neutral: string;
		pop: string;
		primary: string;
		text: string;
		white: string;
		black: string;

		// reserved
		success: string;
		info: string;
		warning: string;
		danger: string;
		system: string;
	};
	export type LAYOUT = {
		breakpoints: {
			xsl: number;
			sm: number;
			md: number;
			lg: number;
		};
	};
	export type PACKS = {
		typeScale: {
			bodyFont: {
				1: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				2: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				3: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				4: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				5: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				6: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				7: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				8: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				9: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				10: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
			};
			brandFont: {
				1: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				2: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				3: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				4: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				5: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				6: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				7: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				8: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				9: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
				10: {
					fontSize: string;
					lineHeight: number;
					fontFamily: string;
				};
			};
		};
		lead: {
			marginBottom: string;
			fontSize: string[];
			fontWeight: number;
			lineHeight: number;
		};
		link: {
			color: string;
			textDecoration: string;
			':hover': {
				color: string;
				textDecoration: string;
			};
		};
		focus: {
			outline: string;
			outlineWidth: string;
			outlineOffset: string;
		};
	};
	type Overide = {
		styles: unknown;
		component: unknown;
		attributes: unknown;
	};
	export type OVERRIDES = Record<string, Overide>;
	export type SPACING = {
		major: string;
		minor: string;
	};
	export type TYPE = {
		files: {
			'': string[];
		};
		bodyFont: {
			fontFamily: string;
			headingWeight: number;
			100: {
				fontFamily: string;
				fontWeight: number;
			};
			200: {
				fontFamily: string;
				fontWeight: number;
			};
			300: {
				fontFamily: string;
				fontWeight: number;
			};
			400: {
				fontFamily: string;
				fontWeight: number;
			};
			500: {
				fontFamily: string;
				fontWeight: number;
			};
			600: {
				fontFamily: string;
				fontWeight: number;
			};
			700: {
				fontFamily: string;
				fontWeight: number;
			};
			800: {
				fontFamily: string;
				fontWeight: number;
			};
			900: {
				fontFamily: string;
				fontWeight: number;
			};
		};
		brandFont: {
			fontFamily: string;
			headingWeight: number;
			100: {
				fontFamily: string;
				fontWeight: number;
			};
			200: {
				fontFamily: string;
				fontWeight: number;
			};
			300: {
				fontFamily: string;
				fontWeight: number;
			};
			400: {
				fontFamily: string;
				fontWeight: number;
			};
			500: {
				fontFamily: string;
				fontWeight: number;
			};
			600: {
				fontFamily: string;
				fontWeight: number;
			};
			700: {
				fontFamily: string;
				fontWeight: number;
			};
			800: {
				fontFamily: string;
				fontWeight: number;
			};
			900: {
				fontFamily: string;
				fontWeight: number;
			};
		};
	};

	const config: {
		BRAND: BRAND;
		COLORS: COLORS;
		LAYOUT: LAYOUT;
		PACKS: PACKS;
		OVERRIDES: OVERRIDES;
		SPACING: SPACING;
		TYPE: TYPE;
	};
	export default config;
}
