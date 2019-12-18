/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, merge } from '@westpac/core';
import PropTypes from 'prop-types';

import { Footer, footerStyles } from './overrides/footer';
import { usePanelContext } from './Panel';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const PanelFooter = ({ overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Footer: {
				styles: footerStyles,
				component: Footer,
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
		<overrides.subComponent.Footer.component
			css={overrides.subComponent.Footer.styles}
			{...overrides.subComponent.Footer.attributes(state)}
		/>
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
			Footer: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};
