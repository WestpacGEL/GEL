import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { gridMap } from './_utils';
import { defaultGrid } from './overrides/grid';
import pkg from '../package.json';

export interface GridProps {
	/**
	 * The `align-content` CSS property.
	 */
	alignContent?:
		| 'baseline'
		| 'center'
		| 'end'
		| 'first baseline'
		| 'flex-end'
		| 'flex-start'
		| 'last baseline'
		| 'normal'
		| 'space-around'
		| 'space-between'
		| 'space-evenly'
		| 'start'
		| 'stretch';
	/**
	 * The `grid-template-areas` CSS property. Pass an array of strings, e.g. `["a a", "b c"]`.
	 */
	areas?: string[];
	/**
	 * The `column-gap` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	columnGap?: number | string | number | string[];
	/**
	 * The `grid-template-columns` CSS property. When a number is passed it is a
	 * shorthand to specify the number of columns.
	 */
	columns: number | string;
	/**
	 * The `grid-auto-flow` CSS property.
	 */
	flow: 'column dense' | 'column' | 'dense' | 'row dense' | 'row';
	/**
	 * The `gap` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	gap: string | number | string[] | number[];
	/**
	 * The `height` CSS property
	 */
	height: number | string;
	/**
	 * The `justify-content` CSS property.
	 */
	justifyContent?:
		| 'center'
		| 'end'
		| 'flex-end'
		| 'flex-start'
		| 'left'
		| 'normal'
		| 'right'
		| 'space-around'
		| 'space-between'
		| 'space-evenly'
		| 'start'
		| 'stretch';
	/**
	 * Minimum height of each row.
	 */
	minRowHeight: number | string;
	/**
	 * The `row-gap` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	rowGap?: number | string | number | string[];
	/**
	 * The `grid-template-rows` CSS property. When a number is passed it is a
	 * shorthand to specify the number of rows.
	 */
	rows?: number | string;
	/**
	 * Component tag
	 */
	tag?: ((...args: unknown[]) => unknown) | string;
	/**
	 * Alert children
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Grid?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Cell?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Container?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Grid = ({
	alignContent,
	areas,
	columnGap,
	justifyContent,
	rowGap,
	rows,
	columns = 12,
	gap = [12, 24],
	flow = 'row',
	height = 'auto',
	minRowHeight = 32,
	tag = 'div',
	children,
	overrides: componentOverrides,
	...rest
}: GridProps) => {
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
		<Grid {...rest} state={state} {...gridAttributes(state)} css={gridStyles(state)}>
			{children}
		</Grid>
	);
};

Grid.defaultProps = {
	...gridMap,
	flow: 'row',
	height: 'auto',
	minRowHeight: 32,
	tag: 'div',
};

Grid.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
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
	 * Alert children
	 */
	children: PropTypes.node,
	/**
	 * The `column-gap` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	columnGap: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.string),
		PropTypes.number,
		PropTypes.string,
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
		PropTypes.arrayOf(PropTypes.string),
		PropTypes.number,
		PropTypes.string,
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
	 * The override API
	 */
	overrides: PropTypes.shape({
		Cell: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Container: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Grid: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * The `row-gap` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	rowGap: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.string),
		PropTypes.number,
		PropTypes.string,
	]),
	/**
	 * The `grid-template-rows` CSS property. When a number is passed it is a
	 * shorthand to specify the number of rows.
	 */
	rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
