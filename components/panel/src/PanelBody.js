/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, merge } from '@westpac/core';
import PropTypes from 'prop-types';

import { Body, bodyStyles } from './overrides/body';
import { usePanelContext } from './Panel';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const PanelBody = ({ overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Body: {
				styles: bodyStyles,
				component: Body,
				attributes: state => state,
			},
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
		merge(componentOverrides, overridesCtx),
		state
	);

	return (
		<overrides.subComponent.Body.component
			css={overrides.subComponent.Body.styles}
			{...overrides.subComponent.Body.attributes(state)}
		/>
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
		subComponent: PropTypes.shape({
			Body: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
