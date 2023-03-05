import { jsx, useMediaQuery, asArray, getLabel } from '@westpac/core';

const Cell = ({ state: { tag: Tag }, ...rest }) => <Tag {...rest} />;

const cellStyles = (_, { area, height, left, top, width }) => {
	const mq = useMediaQuery();
	const widthArr = asArray(width);
	const heightArr = asArray(height);

	// an <integer> value of 0 is invalid
	if (left === 0) {
		left = 'auto';
	}

	// allow string or array values for height/width
	const getEndSpan = (n) => n.map((v) => v && `span ${v}`);

	return mq({
		label: getLabel('cell'),
		gridArea: area,
		gridColumnEnd: !area && getEndSpan(widthArr),
		gridColumnStart: asArray(left),
		gridRowEnd: !area && getEndSpan(heightArr),
		gridRowStart: asArray(top),
		minWidth: 0,
	})[0];
};

const cellAttributes = () => ({});

export const defaultCell = {
	component: Cell,
	styles: cellStyles,
	attribute: cellAttributes,
};
