/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler } from '@westpac/core';
import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { TableRow, trStyles } from './overrides/tr';
import pkg from '../package.json';

// ==============================
// Utils
// ==============================
const generateHighlightMap = (highlighted, tdCount) => {
	const map = Array(tdCount).fill(false);

	highlighted.forEach(highlight => {
		if (typeof highlight === 'number') {
			map[highlight] = true;
		} else if (Array.isArray(highlight)) {
			map.fill(true, highlight[0], highlight[1] + 1);
		}
	});

	return map;
};

// ==============================
// Component
// ==============================

export const Tr = ({ striped, highlighted, children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Tr: {
			styles: trStyles,
			component: TableRow,
			attributes: (_, a) => a,
		},
	};

	const state = {
		striped,
		highlighted,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

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
		<overrides.Tr.component {...overrides.Tr.attributes(state)} css={overrides.Tr.styles(state)}>
			{highlightedChildren || children}
		</overrides.Tr.component>
	);
};

// ==============================
// Types
// ==============================

Tr.propTypes = {
	/**
	 * Highlighted mode
	 */
	highlighted: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Tr: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Tr.defaultProps = {
	highlighted: false,
};
