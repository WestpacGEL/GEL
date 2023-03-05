import { jsx, useMediaQuery, getLabel } from '@westpac/core';

const Grid = ({ state: { tag: Tag }, ...rest }) => <Tag {...rest} />;

const gridStyles = (
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

	const stringVal = (v) => (typeof v === 'number' ? `${v}px` : v);
	const repeatNumeric = (v) => (typeof v === 'number' ? `repeat(${v}, 1fr)` : v);
	const formatAreas = (areas) => areas.map((area) => `"${area}"`).join(' ');

	return mq({
		label: getLabel('grid'),
		alignContent,
		display: 'grid',
		gap,
		gridAutoFlow: flow,
		gridAutoRows: `minmax(${stringVal(minRowHeight)}, auto)`,
		gridTemplateAreas: areas ? formatAreas(areas) : null,
		gridTemplateColumns: repeatNumeric(columns),
		gridTemplateRows: rows ? repeatNumeric(rows) : null,
		height,
		justifyContent,

		// must come after `gap` property
		columnGap,
		rowGap,
	})[0];
};

const gridAttributes = () => null;

export const defaultGrid = {
	component: Grid,
	styles: gridStyles,
	attributes: gridAttributes,
};
