/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Footer, footerStyles } from './overrides/footer';
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
		Footer: {
			styles: footerStyles,
			component: Footer,
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
		<overrides.Footer.component
			{...overrides.Footer.attributes(state)}
			css={overrides.Footer.styles(state)}
		/>
	);
};

// ==============================
// Types
// ==============================

PanelFooter.propTypes = {
	/**
	 * Panel footer content
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Footer: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
