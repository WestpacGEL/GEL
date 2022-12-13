/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { defaultTr } from './overrides/tr';

import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Utils
// ==============================

const generateHighlightMap = (highlighted, tdCount) => {
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

// ==============================
// Component
// ==============================

export const Tr = ({
	striped,
	highlighted,
	children,
	overrides,
	...rest
}: typeof Tr.propTypes & typeof Tr.defaultProps) => {
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

export const defaultProps = {
	highlighted: false,
};

Tr.defaultProps = defaultProps;
