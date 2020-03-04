/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, asArray } from '@westpac/core';
import React from 'react';

export const Icon = ({ color, size, assistiveText, ...rest }) => <span {...rest} />;

export const iconStyles = (_, { color, size }) => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	const sizeMap = {
		xsmall: 12, // 0.5x
		small: 18, //  0.75x
		medium: 24, // 1x (default)
		large: 36, //  1.5x
		xlarge: 48, // 2x
	};

	// Size styling (responsive)
	const sizeArr = asArray(size);
	const styleSize = {
		height: sizeArr.map(s => s && sizeMap[s]),
		width: sizeArr.map(s => s && sizeMap[s]),
	};

	return mq({
		display: 'inline-block',
		flexShrink: 0,
		lineHeight: 1,
		verticalAlign: 'middle',
		color: color ? color : COLORS.muted,
		...styleSize,
	})[0];
};
