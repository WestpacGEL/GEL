/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { Body } from '@westpac/body';
import React from 'react';

export const Grid = ({
	alignContent,
	areas,
	columnGap,
	columns,
	flow,
	gap,
	height,
	justifyContent,
	minRowHeight,
	rowGap,
	rows,
	...rest
}) => <div {...rest} />;

export const gridStyles = (
	_,
	{
		alignContent,
		areas,
		columnGap,
		columns,
		flow,
		gap,
		height,
		justifyContent,
		minRowHeight,
		rowGap,
		rows,
	}
) => {
	const mq = useMediaQuery();

	const stringVal = v => (typeof v === 'number' ? `${v}px` : v);
	const repeatNumeric = v => (typeof v === 'number' ? `repeat(${v}, 1fr)` : v);
	const formatAreas = areas => areas.map(area => `"${area}"`).join(' ');

	return mq({
		alignContent: alignContent,
		columnGap,
		display: 'grid',
		gridAutoFlow: flow,
		gridAutoRows: `minmax(${stringVal(minRowHeight)}, auto)`,
		gridGap: gap,
		gridTemplateAreas: areas ? formatAreas(areas) : null,
		gridTemplateColumns: repeatNumeric(columns),
		gridTemplateRows: rows ? repeatNumeric(rows) : null,
		height,
		justifyContent: justifyContent,
		rowGap,
	})[0];
};
