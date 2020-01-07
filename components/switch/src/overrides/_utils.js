import { asArray } from '@westpac/core';

const sizeMapping = {
	small: {
		width: '4.375rem',
		height: '1.875rem',
		borderRadius: '1.875rem',
		borderWidth: '2px',
		fontSize: '0.875rem',
	},
	medium: {
		width: '5rem',
		height: '2.25rem',
		borderRadius: '2.25rem',
		borderWidth: '2px',
		fontSize: '1rem',
	},
	large: {
		width: '5.5625rem',
		height: '2.625rem',
		borderRadius: '2.625rem',
		borderWidth: '2px',
		fontSize: '1rem',
	},
	xlarge: {
		width: '6rem',
		height: '3rem',
		borderRadius: '3rem',
		borderWidth: '2px',
		fontSize: '1.125rem',
	},
};

const responsiveMap = size => ({
	width: size.map(s => s && sizeMapping[s].width),
	height: size.map(s => s && sizeMapping[s].height),
	borderRadius: size.map(s => s && sizeMapping[s].borderRadius),
	borderWidth: size.map(s => s && sizeMapping[s].borderWidth),
	fontSize: size.map(s => s && sizeMapping[s].fontSize),
});

export const sizeMap = size => responsiveMap(asArray(size));
