/** @jsx jsx */

import { Children, cloneElement } from 'react';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
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

export const Tr = ({ striped, highlighted, children, overrides: componentOverrides, ...props }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Tr: {
				styles: trStyles,
				component: TableRow,
				attributes: state => state,
			},
		},
	};

	const state = {
		striped,
		highlighted,
		overrides: componentOverrides,
		...props,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
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
		<overrides.subComponent.Tr.component
			css={overrides.subComponent.Tr.styles}
			{...overrides.subComponent.Tr.attributes(state)}
		>
			{highlightedChildren || children}
		</overrides.subComponent.Tr.component>
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
		subComponent: PropTypes.shape({
			Tr: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Tr.defaultProps = {
	highlighted: false,
};
