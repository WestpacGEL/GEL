import { asArray } from '@westpac/core';

const sizeMapping = {
	small: {
		width: '2.9375rem',
		height: '1.625rem',
		borderRadius: '1.625rem',
		fontSize: '0.875rem',
	},
	medium: {
		width: '3.625rem',
		height: '2rem',
		borderRadius: '2rem',
		fontSize: '1rem',
	},
	large: {
		width: '4.3125rem',
		height: '2.375rem',
		borderRadius: '2.375rem',
		fontSize: '1rem',
	},
	xlarge: {
		width: '5rem',
		height: '2.75rem',
		borderRadius: '2.75rem',
		fontSize: '1.125rem',
	},
};

const responsiveMap = size => ({
	width: size.map(s => s && sizeMapping[s].width),
	height: size.map(s => s && sizeMapping[s].height),
	borderRadius: size.map(s => s && sizeMapping[s].borderRadius),
	fontSize: size.map(s => s && sizeMapping[s].fontSize),
});

export const sizeMap = size => responsiveMap(asArray(size));
