/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useTableContext } from './Table';
import PropTypes from 'prop-types';

import { defaultTfoot } from './overrides/tfoot';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Tfoot = ({ bordered, children, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const defaultOverrides = {
		TfootRoot: defaultTfoot,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		bordered,
		context: { ...context.state },
		overrides,
		...rest,
	};

	const {
		TfootRoot: { component: TfootRoot, styles: tfootRootStyles, attributes: tfootRootAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);
	return (
		<TfootRoot {...rest} state={state} {...tfootRootAttributes(state)} css={tfootRootStyles(state)}>
			{children}
		</TfootRoot>
	);
};

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
