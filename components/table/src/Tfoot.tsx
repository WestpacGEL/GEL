/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultTfoot } from './overrides/tfoot';

import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Tfoot = ({
	bordered,
	children,
	overrides,
	...rest
}: typeof Tfoot.propTypes & typeof Tfoot.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const defaultOverrides = {
		Tfoot: defaultTfoot,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		bordered,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Tfoot: { component: Tfoot, styles: tfootStyles, attributes: tfootAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);
	return (
		<Tfoot {...rest} state={state} {...tfootAttributes(state)} css={tfootStyles(state)}>
			{children}
		</Tfoot>
	);
};

// ==============================
// Types
// ==============================

Tfoot.propTypes = {
	/**
	 * Whether or not there should border styling
	 */
	bordered: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Tfoot: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
