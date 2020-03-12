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
	top,
	width,
	children,
	overrides: componentOverrides,
	...rest
}) => {
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
	 * The cell height in units. When using an array the units are applied to the applicable breakpoints.
	 */
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]).isRequired,

	/**
	 * The `grid-column-start` CSS property.
	 */
	left: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

	/**
	 * The `grid-row-start` CSS property.
	 */
	top: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),

	/**
	 * The cell width in units. When using an array the units are applied to the applicable breakpoints.
	 */
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]).isRequired,

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
	width: 1,
};
