/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { sizeMap } from './_utils';

export const ToggleText = ({
	name,
	label,
	toggleText,
	flipped,
	block,
	disabled,
	assistiveText,
	position,
	checked,
	size,
	...props
}) => {
	const { BRAND, COLORS } = useBrand();
	const sizing = sizeMap(size);

	let color = '#fff';
	if (BRAND === 'STG') {
		color = COLORS.text;
	}

	const height = sizing.height.map((height, i) =>
		height ? `calc(${height} - ${sizing.borderWidth[i]} - ${sizing.borderWidth[i]})` : null
	);

	return (
		<span
			css={{
				paddingLeft: position === 'right' ? height : '6%',
				paddingRight: position === 'left' ? height : '6%',
				color: position === 'right' ? COLORS.text : color,
				opacity: checked ? 1 : 0,
			}}
			{...props}
		/>
	);
};

export const toggleTextStyles = (_, { size }) => {
	const mq = useMediaQuery();

	const sizing = sizeMap(size);

	// Internal height CSS
	const height = sizing.height.map((height, i) =>
		height ? `calc(${height} - ${sizing.borderWidth[i]} - ${sizing.borderWidth[i]})` : null
	);

	return mq({
		boxSizing: 'border-box',
		position: 'absolute',
		width: '100%',
		lineHeight: height,
		fontSize: sizing.fontSize,
		textAlign: 'center',
		transition: 'opacity .3s ease',
	})[0];
};
