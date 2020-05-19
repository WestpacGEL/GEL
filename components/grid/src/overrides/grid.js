/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';

const Grid = ({ state, ...rest }) => <div {...rest} />;

const gridStyles = (
	_,
	{
		alignContent,
		areas,
		columnGap,
		columns,
		flow,
		gridColumnGap,
		gap,
		height,
		justifyContent,
		minRowHeight,
		rowGap,
		rows,
	}
) => {
	const mq = useMediaQuery();

	const stringVal = (v) => (typeof v === 'number' ? `${v}px` : v);
	const repeatNumeric = (v) => (typeof v === 'number' ? `repeat(${v}, 1fr)` : v);
	const formatAreas = (areas) => areas.map((area) => `"${area}"`).join(' ');

	return mq({
		alignContent,
		columnGap,
		display: 'grid',
		gridAutoFlow: flow,
		gridAutoRows: `minmax(${stringVal(minRowHeight)}, auto)`,
		gridColumnGap,
		gridGap: gap,
		gridTemplateAreas: areas ? formatAreas(areas) : null,
		gridTemplateColumns: repeatNumeric(columns),
		gridTemplateRows: rows ? repeatNumeric(rows) : null,
		height,
		justifyContent: justifyContent,
		rowGap,
	})[0];
};

const gridAttributes = () => null;

export const defaultGrid = {
	component: Grid,
	styles: gridStyles,
	attributes: gridAttributes,
};
