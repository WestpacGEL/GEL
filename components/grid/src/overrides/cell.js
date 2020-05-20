/** @jsx jsx */

import { jsx, useMediaQuery, asArray } from '@westpac/core';

const Cell = ({ state, ...rest }) => <div {...rest} />;

const cellStyles = (_, { area, height, left, top, width }) => {
	const mq = useMediaQuery();
	const widthArr = asArray(width);
	const heightArr = asArray(height);

	// allow string or array values for height/width
	const getEndSpan = (n) => n.map((v) => v && `span ${v}`);

	return mq({
		gridArea: area,
		gridColumnEnd: !area && getEndSpan(widthArr),
		gridColumnStart: asArray(left),
		gridRowEnd: !area && getEndSpan(heightArr),
		gridRowStart: asArray(top),
		height: '100%',
		minWidth: 0,
	})[0];
};

const cellAttributes = () => ({});

export const defaultCell = {
	component: Cell,
	styles: cellStyles,
	attribute: cellAttributes,
};
