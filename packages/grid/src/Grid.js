import PropTypes from 'prop-types';
import styled from '@emotion/styled'; // TODO should come from '@westpac/core'

// ==============================
// Utils
// ==============================

const stringVal = v => (typeof v === 'number' ? `${v}px` : v);
const repeatNumeric = v => (typeof v === 'number' ? `repeat(${v}, 1fr)` : v);
const formatAreas = areas => areas.map(area => `"${area}"`).join(' ');

// ==============================
// Component
// ==============================

export const Grid = styled.div(
	({
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
	}) => ({
		display: 'grid',
		height: height,
		gridAutoFlow: flow,
		gridAutoRows: `minmax(${stringVal(minRowHeight)}, auto)`,
		gridTemplateColumns: repeatNumeric(columns),
		gridGap: gap,
		columnGap: columnGap,
		rowGap: rowGap,
		gridTemplateAreas: areas ? formatAreas(areas) : null,
		gridTemplateRows: rows ? repeatNumeric(rows) : null,
		justifyContent: justifyContent,
		alignContent: alignContent,
	})
);

// ==============================
// Types
// ==============================

const UnitType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

Grid.propTypes = {
	alignContent: PropTypes.oneOf([
		'baseline',
		'center',
		'end',
		'first baseline',
		'flex-end',
		'flex-start',
		'last baseline',
		'normal',
		'space-around',
		'space-between',
		'space-evenly',
		'start',
		'stretch',
	]),
	areas: PropTypes.arrayOf(PropTypes.string),
	columnGap: UnitType,
	columns: UnitType,
	flow: PropTypes.oneOf(['column dense', 'column', 'dense', 'row dense', 'row']),
	gap: UnitType,
	height: UnitType,
	justifyContent: PropTypes.oneOf([
		'center',
		'end',
		'flex-end',
		'flex-start',
		'left',
		'normal',
		'right',
		'space-around',
		'space-between',
		'space-evenly',
		'start',
		'stretch',
	]),
	minRowHeight: UnitType,
	rowGap: UnitType,
	rows: UnitType,
};
Grid.defaultProps = {
	columns: 12,
	gap: 8,
	flow: 'row',
	height: 'auto',
	minRowHeight: 20,
};
