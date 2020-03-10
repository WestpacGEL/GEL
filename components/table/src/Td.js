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
	overrides: componentOverrides,
	...rest
}) => {
	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		TdRoot: defaultTd,
	};

	const state = {
		highlighted,
		highlightStart,
		bordered,
		overrides: componentOverrides,
		...rest,
	};

	const {
		TdRoot: { component: TdRoot, styles: tdRootStyles, attributes: tdRootAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<TdRoot {...rest} state={state} {...tdRootAttributes(state)} css={tdRootStyles(state)}>
			{children}
		</TdRoot>
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
