import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultFooter } from '../overrides/footer';

import { useModalContext } from './Modal';
import pkg from '../../package.json';

// ==============================
// Component
// ==============================

export const ModalFooter = ({ children, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useModalContext();

	const defaultOverrides = {
		Footer: defaultFooter,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Footer: { component: Footer, styles: footerStyles, attributes: footerAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Footer {...rest} state={state} {...footerAttributes(state)} css={footerStyles(state)}>
			{children}
		</Footer>
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
