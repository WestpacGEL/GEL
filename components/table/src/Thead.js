/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useTableContext } from './Table';
import PropTypes from 'prop-types';

import { defaultThead } from './overrides/thead';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Thead = ({ bordered, children, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const defaultOverrides = {
		TheadRoot: defaultThead,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		bordered,
		context: { ...context.state },
		overrides,
		...rest,
	};

	const {
		TheadRoot: { component: TheadRoot, styles: theadRootStyles, attributes: theadRootAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<TheadRoot {...rest} state={state} {...theadRootAttributes(state)} css={theadRootStyles(state)}>
			{children}
		</TheadRoot>
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
