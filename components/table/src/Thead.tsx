/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultThead } from './overrides/thead';

import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Thead = ({
	bordered,
	children,
	overrides,
	...rest
}: typeof Thead.propTypes & typeof Thead.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();
	bordered = (context && context.bordered) || bordered;

	const defaultOverrides = {
		Thead: defaultThead,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		bordered,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Thead: { component: Thead, styles: theadStyles, attributes: theadAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Thead {...rest} state={state} {...theadAttributes(state)} css={theadStyles(state)}>
			{children}
		</Thead>
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
