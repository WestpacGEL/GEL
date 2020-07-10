export const px = (v) => (typeof v === 'number' ? `${v}px` : v);
export const round = (value, decimals = 6) =>
	Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
export const percentage = (p) => `${round(p * 100)}%`;

export const camelize = (str) =>
	str.replace(/-([a-z])/g, function (g) {
		return g[1].toUpperCase();
	});

export const asArray = (val) => (Array.isArray(val) ? val : [val]);

export const objectify = (arrayOfObjects) =>
	Array.isArray(arrayOfObjects) ? Object.assign({}, ...arrayOfObjects) : {};
