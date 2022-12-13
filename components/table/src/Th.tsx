/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultTh } from './overrides/th';

import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Th = ({
	bordered,
	children,
	overrides,
	...rest
}: typeof Th.propTypes & typeof Th.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const defaultOverrides = {
		Th: defaultTh,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		bordered,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Th: { component: Th, styles: thStyles, attributes: thAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);
	return (
		<Th {...rest} state={state} {...thAttributes(state)} css={thStyles(state)}>
			{children}
		</Th>
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
