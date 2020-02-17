/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Footer, footerStyles } from './overrides/footer';
import pkg from '../package.json';

export const ModalFooter = ({ children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Footer: {
			styles: footerStyles,
			component: Footer,
			attributes: () => null,
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
			{...rest}
			{...overrides.Footer.attributes(state)}
			css={overrides.Footer.styles(state)}
		>
			{children}
		</overrides.Footer.component>
	);
};

// ==============================
// Types
// ==============================

ModalFooter.propTypes = {
	/**
	 * Modal footer content
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
