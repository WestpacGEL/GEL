/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { Footer, footerStyles } from './overrides/footer';
import PropTypes from 'prop-types';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const PanelFooter = ({ children, overrides: componentOverrides, ...props }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			PanelFooter: {
				styles: footerStyles,
				component: Footer,
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
		<overrides.subComponent.PanelFooter.component
			css={overrides.subComponent.PanelFooter.styles}
			{...overrides.subComponent.PanelFooter.attributes(state)}
		>
			{children}
		</overrides.subComponent.PanelFooter.component>
	);
};

// ==============================
// Types
// ==============================

PanelFooter.propTypes = {
	/**
	 * Panel body content
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		subComponent: PropTypes.shape({
			PanelFooter: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
