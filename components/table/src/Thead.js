/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Tablehead, theadStyles } from './overrides/thead';
import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Thead = ({ bordered, children, overrides: componentOverrides, ...rest }) => {
	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Thead: {
			styles: theadStyles,
			component: Tablehead,
			attributes: () => null,
		},
	};

	const state = {
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
		<overrides.Thead.component
			bordered={bordered}
			{...rest}
			{...overrides.Thead.attributes(state)}
			css={overrides.Thead.styles(state)}
		>
			{children}
		</overrides.Thead.component>
	);
};

// ==============================
// Types
// ==============================
Thead.propTypes = {
	/**
	 * Whether or not there should border styling
	 */
	bordered: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Thead: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
