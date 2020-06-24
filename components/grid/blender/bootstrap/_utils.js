export const px = (v) => (typeof v === 'number' ? `${v}px` : v);
export const round = (value, decimals = 6) =>
	Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
export const percentage = (p) => `${round(p * 100)}%`;
