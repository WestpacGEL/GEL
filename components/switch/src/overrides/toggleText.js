/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { sizeMap } from './_utils';

export const ToggleText = ({
	name,
	label,
	checked,
	size,
	block,
	flipped,
	toggleText,
	disabled,
	assistiveText,
	...rest
}) => <span {...rest} />;

export const toggleTextStyles = (_, { size, position, checked }) => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	const sizing = sizeMap(size);

	// Internal height CSS
	const height = sizing.height.map((height, i) =>
		height ? `calc(${height} - ${sizing.borderWidth[i]} - ${sizing.borderWidth[i]})` : null
	);

	return mq({
		paddingLeft: position === 'right' ? height : '6%',
		paddingRight: position === 'left' ? height : '6%',
		color: position === 'right' ? COLORS.text : '#fff',
		opacity: checked ? 1 : 0,
		boxSizing: 'border-box',
		position: 'absolute',
		width: '100%',
		lineHeight: height,
		fontSize: sizing.fontSize,
		textAlign: 'center',
		transition: 'opacity .3s ease',
	})[0];
};
