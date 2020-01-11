/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { TableHeader, thStyles } from './overrides/th';
import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Th = ({ bordered, overrides: componentOverrides, ...rest }) => {
	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Th: {
			styles: thStyles,
			component: TableHeader,
			attributes: (_, a) => a,
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
		<overrides.Th.component
			{...overrides.Th.attributes(state)}
			css={overrides.Th.styles(state)}
		/>
	);
};

// ==============================
// Types
// ==============================
Th.propTypes = {
	/**
	 * Whether or not there should border styling
	 */
	bordered: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Th: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
