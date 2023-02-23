import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React, { Children, cloneElement, ReactNode } from 'react';

import { defaultTr } from './overrides/tr';

import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Utils
// ==============================

const generateHighlightMap = (highlighted: any[], tdCount: number) => {
	const map = Array(tdCount).fill(false);

	highlighted.forEach((highlight) => {
		if (typeof highlight === 'number') {
			map[highlight] = true;
		} else if (Array.isArray(highlight)) {
			map.fill(true, highlight[0], highlight[1] + 1);
		}
	});

	return map;
};

export interface TrProps {
	/**
	 * striped
	 */
	striped?: any;
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * Highlighted mode
	 */
	highlighted?: boolean | unknown[];
	/**
	 * The override API
	 */
	overrides?: {
		Tr?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Tr = ({ striped, highlighted = false, children, overrides, ...rest }: TrProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();
	striped = (context && context.striped) || striped;

	const defaultOverrides = {
		Tr: defaultTr,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		striped,
		highlighted,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Tr: { component: Tr, styles: trStyles, attributes: trAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	let highlightedChildren;

	if (Array.isArray(highlighted)) {
		const highlightMap = generateHighlightMap(highlighted, Children.count(children));

		highlightedChildren = Children.map(children, (child, index) => {
			if (highlightMap[index] === true) {
				if (index === 0 || highlightMap[index - 1] === false) {
					return cloneElement(child, { highlightStart: true, highlighted: true });
				} else {
					return cloneElement(child, { highlighted: true });
				}
			} else {
				return child;
			}
		});
	}

	return (
		<Tr {...rest} state={state} {...trAttributes(state)} css={trStyles(state)}>
			{highlightedChildren || children}
		</Tr>
	);
};

export const defaultProps = {
	highlighted: false,
};

Tr.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Highlighted mode
	 */
	highlighted: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Tr: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * striped
	 */
	striped: PropTypes.any,
};

Tr.defaultProps = { highlighted: false };
