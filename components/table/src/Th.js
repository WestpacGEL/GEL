/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useTableContext } from './Table';
import PropTypes from 'prop-types';

import { defaultTh } from './overrides/th';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Th = ({ bordered, children, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const defaultOverrides = {
		ThRoot: defaultTh,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		bordered,
		context: { ...context.state },
		overrides,
		...rest,
	};

	const {
		ThRoot: { component: ThRoot, styles: thRootStyles, attributes: thRootAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);
	return (
		<ThRoot {...rest} state={state} {...thRootAttributes(state)} css={thRootStyles(state)}>
			{children}
		</ThRoot>
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
