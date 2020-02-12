/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, mergeWith } from '@westpac/core';
import PropTypes from 'prop-types';

import { Body, bodyStyles } from './overrides/body';
import { usePanelContext } from './Panel';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const PanelBody = ({ children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Body: {
			styles: bodyStyles,
			component: Body,
			attributes: () => null,
		},
	};

	const { overrides: overridesCtx, ...context } = usePanelContext();

	const state = {
		overrides: componentOverrides,
		...context,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		mergeWith(componentOverrides, overridesCtx)
	);

	return (
		<overrides.Body.component
			{...rest}
			{...overrides.Body.attributes(state)}
			css={overrides.Body.styles(state)}
		>
			{children}
		</overrides.Body.component>
	);
};

// ==============================
// Types
// ==============================

PanelBody.propTypes = {
	/**
	 * Panel body content
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Body: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
