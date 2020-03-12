/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useModalContext } from './Modal';
import PropTypes from 'prop-types';

import { defaultBody } from './overrides/body';
import pkg from '../package.json';

export const ModalBody = ({ children, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();
	const context = useModalContext();

	const defaultOverrides = {
		Body: defaultBody,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Body: { component: Body, styles: bodyStyles, attributes: bodyAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Body {...rest} state={state} {...bodyAttributes(state)} css={bodyStyles(state)}>
			{children}
		</Body>
	);
};

// ==============================
// Types
// ==============================
ModalBody.propTypes = {
	/**
	 * Modal body content
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
