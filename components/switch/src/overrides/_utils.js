import { asArray } from '@westpac/core';

const sizeMapping = {
	small: {
		width: '3.0625rem',
		height: '1.75rem',
		borderRadius: '1.75rem',
		fontSize: '0.875rem',
	},
	medium: {
		width: '3.75rem',
		height: '2.125rem',
		borderRadius: '2.125rem',
		fontSize: '1rem',
	},
	large: {
		width: '4.4375rem',
		height: '2.5rem',
		borderRadius: '2.5rem',
		fontSize: '1rem',
	},
	xlarge: {
		width: '5.125rem',
		height: '2.875rem',
		borderRadius: '2.875rem',
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
