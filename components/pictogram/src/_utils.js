export const colorMap = (color, COLORS) => ({
	outline: color ? 'currentColor' : COLORS.hero,
	highlight: color ? 'currentColor' : COLORS.primary,
});
