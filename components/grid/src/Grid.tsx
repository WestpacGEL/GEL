/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { gridMap } from './_utils';
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
	tag,
	children,
	overrides: componentOverrides,
	...rest
}: typeof Grid.propTypes & typeof Grid.defaultProps) => {
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
		tag,
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
	 * The `column-gap` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	columnGap: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
	]),

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
	 * The `gap` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	gap: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
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
	 * The `row-gap` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	rowGap: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
	]),

	/**
	 * The `grid-template-rows` CSS property. When a number is passed it is a
	 * shorthand to specify the number of rows.
	 */
	rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,

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
	...gridMap,
	flow: 'row',
	height: 'auto',
	minRowHeight: 32,
	tag: 'div',
};
