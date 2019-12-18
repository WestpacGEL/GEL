/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Header, headerStyles } from './overrides/header';
import PropTypes from 'prop-types';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const PanelHeader = ({ children, overrides: componentOverrides, ...props }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			PanelHeader: {
				styles: headerStyles,
				component: Header,
				attributes: state => state,
			},
		},
	};

	const state = {
		overrides: componentOverrides,
		...props,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	return (
		<overrides.subComponent.PanelHeader.component
			css={overrides.subComponent.PanelHeader.styles}
			{...overrides.subComponent.PanelHeader.attributes(state)}
		>
			{children}
		</overrides.subComponent.PanelHeader.component>
	);
};

// ==============================
// Types
// ==============================

PanelHeader.propTypes = {
	/**
	 * Panel body content
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		subComponent: PropTypes.shape({
			PanelHeader: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
