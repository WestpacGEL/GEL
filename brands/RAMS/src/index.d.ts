declare module '@westpac/rams' {
	type Colours = {
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

		// reserved
		success: string;
		info: string;
		warning: string;
		danger: string;
		system: string;
	};
	type Layout = {
		breakpoints: {
			xsl: number;
			sm: number;
			md: number;
			lg: number;
		};
	};
	type Overrides = (tokens: string) => void;
	const config: {
		BRAND: {
			name: 'Westpac';
			code: 'WBC';
		};
		COLORS: Colours;
		LAYOUT: Layout;
		OVERRIDES: Overrides;
		PACKS: string;
		SPACING: string;
		TYPE: string;
	};
	export default config;
}
