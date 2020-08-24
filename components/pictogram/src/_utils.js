export const colorMap = (COLORS) => ({
	'colour-filled': {
		outline: COLORS.hero,
		background: '#fff',
		highlight: COLORS.primary,
	},
	colour: {
		outline: COLORS.hero,
		background: 'transparent',
		highlight: COLORS.primary,
	},
	dark: {
		outline: COLORS.text,
		background: 'transparent',
		highlight: COLORS.text,
	},
	light: {
		outline: '#fff',
		background: 'transparent',
		highlight: '#fff',
	},
});
