import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultCell } from './overrides/cell';
import pkg from '../package.json';

interface CellProps {
	/**
	 * The `grid-area` that this cell belongs to (if any).
	 */
	area?: string;
	/**
	 * The cell height in units. When using an array the values are applied to the applicable breakpoints.
	 */
	height: number | string | number | string[];
	/**
	 * The `grid-column-start` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	left?: number | string | number | string[];
	/**
	 * Component tag
	 */
	tag?: ((...args: unknown[]) => unknown) | string;
	/**
	 * The `grid-row-start` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	top?: number | string | number | string[];
	/**
	 * The cell width in units. When using an array the values are applied to the applicable breakpoints.
	 */
	width: number | string | number | string[];
	/**
	 * Children
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Cell?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Cell = ({
	area,
	left,
	top,
	height = 1,
	tag = 'div',
	width = 1,
	children,
	overrides: componentOverrides,
	...rest
}: CellProps) => {
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
		<Cell {...rest} state={state} {...cellAttributes(state)} css={cellStyles(state)}>
			{children}
		</Cell>
	);
};

Cell.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * The `grid-area` that this cell belongs to (if any).
	 */
	area: PropTypes.string,
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * The cell height in units. When using an array the values are applied to the applicable breakpoints.
	 */
	height: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.string),
		PropTypes.number,
		PropTypes.string,
	]).isRequired,
	/**
	 * The `grid-column-start` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	left: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.string),
		PropTypes.number,
		PropTypes.string,
	]),
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Cell: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	/**
	 * The `grid-row-start` CSS property. When using an array the values are applied to the applicable breakpoints.
	 */
	top: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.string),
		PropTypes.number,
		PropTypes.string,
	]),
	/**
	 * The cell width in units. When using an array the values are applied to the applicable breakpoints.
	 */
	width: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.string),
		PropTypes.number,
		PropTypes.string,
	]).isRequired,
};

Cell.defaultProps = { height: 1, tag: 'div', width: 1 };
