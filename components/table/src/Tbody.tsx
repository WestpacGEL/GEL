/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultTBody } from './overrides/tbody';

import { useTableContext } from './Table';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Tbody = ({
	children,
	overrides,
	...rest
}: typeof Tbody.propTypes & typeof Tbody.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useTableContext();

	const defaultOverrides = {
		Tbody: defaultTBody,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Tbody: { component: Tbody, styles: tbodyStyles, attributes: tbodyAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Tbody {...rest} state={state} {...tbodyAttributes(state)} css={tbodyStyles(state)}>
			{children}
		</Tbody>
	);
};

// ==============================
// Types
// ==============================

Tbody.propTypes = {
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Tbody: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
