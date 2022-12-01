/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultTd } from './overrides/td';

import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Td = ({
	highlighted,
	highlightStart,
	bordered,
	children,
	overrides,
	...rest
}: typeof Td.propTypes & typeof Td.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const defaultOverrides = {
		Td: defaultTd,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		highlighted,
		highlightStart,
		bordered,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Td: { component: Td, styles: tdStyles, attributes: tdAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Td {...rest} state={state} {...tdAttributes(state)} css={tdStyles(state)}>
			{children}
		</Td>
	);
};

// ==============================
// Types
// ==============================

Td.propTypes = {
	/**
	 * Whether or not the cell is highlighted
	 */
	highlighted: PropTypes.bool,

	/**
	 * Whether or not the start of the highlighted cells
	 */
	highlightStart: PropTypes.bool,

	/**
	 * Bordered mode
	 */
	bordered: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Td: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {
	highlighted: false,
	highlightStart: false,
};

Td.defaultProps = defaultProps;
