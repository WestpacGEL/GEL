/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Body as BodyWrapper, bodyStyles } from './overrides/body';
import pkg from '../package.json';

// ==============================
// Component
//
// Body component in charge of body text
// ==============================

export const Body = ({ tag, children, overrides: componentOverrides, ...rest }) => {
	const {
		COLORS,
		TYPE,
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Body: {
			styles: bodyStyles,
			component: BodyWrapper,
			attributes: () => null,
		},
	};

	const state = {
		tag,
		children,
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
		<overrides.Body.component
			tag={tag}
			{...overrides.Body.attributes(state)}
			css={overrides.Body.styles(state)}
		>
			{children}
		</overrides.Body.component>
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
