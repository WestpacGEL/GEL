/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultBody } from './overrides/body';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormPodPanelBody = ({
	expanded,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Body: defaultBody,
	};

	const state = {
		expanded,
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

FormPodPanelBody.propTypes = {
	/**
	 * Expanded body mode (less horizontal padding)
	 */
	expanded: PropTypes.bool,

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

FormPodPanelBody.defaultProps = {
	expanded: false,
};
