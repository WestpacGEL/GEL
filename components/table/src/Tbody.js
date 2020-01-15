/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { TableBody, tbodyStyles } from './overrides/tbody';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Tbody = ({ overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Tbody: {
			styles: tbodyStyles,
			component: TableBody,
			attributes: (_, a) => a,
		},
	};

	const state = {
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
		<overrides.Tbody.component
			{...overrides.Tbody.attributes(state)}
			css={overrides.Tbody.styles(state)}
		/>
	);
};

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
