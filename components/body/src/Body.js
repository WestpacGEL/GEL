/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultBody } from './overrides/body';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const Body = ({ tag, children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		BodyRoot: defaultBody,
	};

	const state = {
		tag,
		children,
		overrides: componentOverrides,
		...rest,
	};

	const {
		BodyRoot: { component: BodyRoot, styles: bodyRootStyles, attributes: bodyRootAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<BodyRoot {...rest} state={state} {...bodyRootAttributes(state)} css={bodyRootStyles(state)}>
			{children}
		</BodyRoot>
	);
};

// ==============================
// Types
// ==============================

Body.propTypes = {
	/**
	 * Body tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,

	/**
	 * Body children
	 */
	children: PropTypes.node.isRequired,

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

Body.defaultProps = {
	tag: 'div',
};
