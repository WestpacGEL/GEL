/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultGrid } from './overrides/grid';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

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
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Grid: defaultGrid,
	};

	const state = {
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
		overrides: componentOverrides,
		...rest,
	};

	const {
		Grid: { component: Grid, styles: gridStyles, attributes: gridAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Grid
			{...rest}
			state={state}
			{...gridAttributes(state)}
			css={gridStyles(state)}
			children={children}
		/>
	);
};

// ==============================
// Types
// ==============================

Grid.propTypes = {
	/**
	 * The `align-content` CSS property.
	 */
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

	/**
	 * The `grid-template-areas` CSS property. Pass an array of strings, e.g. `["a a", "b c"]`.
	 */
	areas: PropTypes.arrayOf(PropTypes.string),

	/**
	 * The `column-gap` CSS property.
	 */
	columnGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

	/**
	 * The `grid-template-columns` CSS property. When a number is passed it is a
	 * shorthand to specify the number of columns.
	 */
	columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

	/**
	 * The `grid-auto-flow` CSS property.
	 */
	flow: PropTypes.oneOf(['column dense', 'column', 'dense', 'row dense', 'row']).isRequired,

	/**
	 * The `grid-gap` CSS property.
	 */
	gap: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.number),
		PropTypes.arrayOf(PropTypes.string),
	]).isRequired,

	/**
	 * The `height` CSS property
	 */
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

	/**
	 * The `justify-content` CSS property.
	 */
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

	/**
	 * Minimum height of each row.
	 */
	minRowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

	/**
	 * The `row-gap` CSS property.
	 */
	rowGap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

	/**
	 * The `grid-template-rows` CSS property. When a number is passed it is a
	 * shorthand to specify the number of rows.
	 */
	rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

	/**
	 * Alert children
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Grid: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Cell: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Container: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Grid.defaultProps = {
	columns: 12,
	gap: ['1.2rem', '2.4rem'],
	flow: 'row',
	height: 'auto',
	minRowHeight: '2rem',
};
