/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { Body } from '@westpac/body';
import React from 'react';

export const Cell = ({ area, height, left, top, width, ...rest }) => <div {...rest} />;

export const cellStyles = (_, { area, height, left, top, width }) => {
	const mq = useMediaQuery();

	// allow string or array values for height/width
	const span = n => `span ${n}`;
	const getEndSpan = c => (Array.isArray(c) ? c.map(span) : span(c));

	return mq({
		gridArea: area,
		gridColumnEnd: !area && getEndSpan(width),
		gridColumnStart: left,
		gridRowEnd: !area && getEndSpan(height),
		gridRowStart: top,
		height: '100%',
		minWidth: 0,
	})[0];
};
