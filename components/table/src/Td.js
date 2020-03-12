/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useTableContext } from './Table';
import PropTypes from 'prop-types';

import { defaultTd } from './overrides/td';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Td = ({ highlighted, highlightStart, bordered, children, overrides, ...rest }) => {
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
		context: { ...context.state },
		overrides,
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

Td.defaultProps = {
	highlighted: false,
	highlightStart: false,
};
