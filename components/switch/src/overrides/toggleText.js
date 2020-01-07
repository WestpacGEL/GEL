/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { sizeMap } from './_utils';

export const ToggleText = props => <span {...props} />;

export const toggleTextStyles = (_, { position, checked, size }) => {
	const { BRAND, COLORS } = useBrand();
	const mq = useMediaQuery();

	const sizing = sizeMap(size);

	let color = '#fff';
	if (BRAND === 'STG') {
		color = COLORS.text;
	}

	// Internal height CSS
	const height = `calc(${size.height} - ${size.borderWidth} - ${size.borderWidth})`;

	return mq({
		boxSizing: 'border-box',
		position: 'absolute',
		width: '100%',
		lineHeight: height,
		fontSize: size.fontSize,
		paddingLeft: position === 'right' ? height : '6%',
		paddingRight: position === 'left' ? height : '6%',
		color: position === 'right' ? COLORS.text : color,
		textAlign: 'center',
		opacity: checked ? 1 : 0,
		transition: 'opacity .3s ease',
	})[0];
};
