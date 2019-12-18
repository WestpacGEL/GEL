/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
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
		subComponent: {
			PanelBody: {
				styles: bodyStyles,
				component: Body,
				attributes: state => state,
			},
		},
	};

	const state = {
		overrides: componentOverrides,
		...usePanelContext(),
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	return (
		<overrides.subComponent.PanelBody.component
			css={overrides.subComponent.PanelBody.styles}
			{...overrides.subComponent.PanelBody.attributes(state)}
		>
			{children}
		</overrides.subComponent.PanelBody.component>
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
			PanelBody: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
