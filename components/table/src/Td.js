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
	overrides: componentOverrides,
	...props
}) => {
	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Td: {
				styles: tdStyles,
				component: TableData,
				attributes: state => state,
			},
		},
	};

	const state = {
		highlighted,
		highlightStart,
		bordered,
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

	return (
		<overrides.subComponent.Td.component
			css={overrides.subComponent.Td.styles}
			{...overrides.subComponent.Td.attributes(state)}
		/>
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
		subComponent: PropTypes.shape({
			Td: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Td.defaultProps = {
	highlighted: false,
	highlightStart: false,
};
