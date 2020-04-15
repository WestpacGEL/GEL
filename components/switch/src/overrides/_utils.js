import { asArray } from '@westpac/core';

const sizeMapping = {
	small: {
		width: '49px',
		height: '28px',
		borderRadius: '28px',
		fontSize: '14px',
	},
	medium: {
		width: '60px',
		height: '34px',
		borderRadius: '34px',
		fontSize: '16px',
	},
	large: {
		width: '71px',
		height: '40px',
		borderRadius: '40px',
		fontSize: '16px',
	},
	xlarge: {
		width: '82px',
		height: '46px',
		borderRadius: '46px',
		fontSize: '18px',
	},
};

const responsiveMap = size => ({
	width: size.map(s => s && sizeMapping[s].width),
	height: size.map(s => s && sizeMapping[s].height),
	borderRadius: size.map(s => s && sizeMapping[s].borderRadius),
	fontSize: size.map(s => s && sizeMapping[s].fontSize),
});

export const sizeMap = size => responsiveMap(asArray(size));
