/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { TableData, tdStyles } from './overrides/td';
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
		Td: {
			styles: tdStyles,
			component: TableData,
			attributes: () => null,
		},
	};

	const state = {
		highlighted,
		highlightStart,
		bordered,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<overrides.Td.component
			highlighted={highlighted}
			highlightStart={highlightStart}
			bordered={bordered}
			{...rest}
			{...overrides.Td.attributes(state)}
			css={overrides.Td.styles(state)}
		>
			{children}
		</overrides.Td.component>
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
