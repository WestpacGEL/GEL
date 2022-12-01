/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultCell } from './overrides/cell';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Cell = ({
	area,
	height,
	left,
	tag,
	top,
	width,
	children,
	overrides: componentOverrides,
	...rest
}: typeof Cell.propTypes & typeof Cell.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Cell: defaultCell,
	};

	const state = {
		area,
		height,
		left,
		tag,
		top,
		width,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Cell: { component: Cell, styles: cellStyles, attributes: cellAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Cell
			{...rest}
			state={state}
			{...cellAttributes(state)}
			css={cellStyles(state)}
			children={children}
		/>
	);
};

// ==============================
// Types
// ==============================

Cell.propTypes = {
	/**
	 * The `grid-area` that this cell belongs to (if any).
	 */
	area: PropTypes.string,

	/**
	 * The cell height in units. When using an array the values are applied to the applicable breakpoints.
	 */
	height: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
	]).isRequired,

	/**
	 * The `grid-column-start` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	left: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
	]),

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,

	/**
	 * The `grid-row-start` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	top: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
	]),

	/**
	 * The cell width in units. When using an array the values are applied to the applicable breakpoints.
	 */
	width: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
	]).isRequired,

	/**
	 * Children
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Cell: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Cell.defaultProps = {
	height: 1,
	tag: 'div',
	width: 1,
};
