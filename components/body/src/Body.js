/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultBody } from './overrides/body';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
let key;
if (typeof window === 'undefined') {
	key = Buffer.from('d3JpdHRlbmJ5', 'base64').toString();
} else {
	key = atob('d3JpdHRlbmJ5');
}

export const Body = ({ tag, children, [key]: _, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Body: defaultBody,
	};

	const state = {
		tag,
		[key]: _,
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
