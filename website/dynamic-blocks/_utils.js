export const levelOptions = [
	{ label: 'H2', value: 'h2' },
	{ label: 'H3', value: 'h3' },
	{ label: 'H4', value: 'h4' },
];

export const sizeOptions = [
	{ label: '6', value: 6 },
	{ label: '8', value: 8 },
	{ label: '10', value: 10 },
];

export const indentOptions = [
	{ label: '1', value: 1 },
	{ label: '2', value: 2 },
	{ label: '3', value: 3 },
];

export const pluralize = (str, length, plural = '') => {
	return length === 1 ? str : `${plural ? plural : `${str}s`}`;
};
