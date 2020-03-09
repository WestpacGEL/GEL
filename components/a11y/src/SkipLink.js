/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultSkipLink } from './overrides/skipLink';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const SkipLink = ({ href, children, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		SkipLinkRoot: defaultSkipLink,
	};

	const state = {
		href,
		overrides: componentOverrides,
		...rest,
	};

	const {
		SkipLinkRoot: {
			component: SkipLinkRoot,
			styles: skipLinkRootStyles,
			attributes: skipLinkRootAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<SkipLinkRoot
			href={href}
			children={children}
			{...rest}
			{...skipLinkRootAttributes(state)}
			css={skipLinkRootStyles(state)}
		/>
	);
};

// ==============================
// Types
// ==============================

SkipLink.propTypes = {
	/**
	 * href attribute
	 */
	href: PropTypes.string.isRequired,

	/**
	 * Children attributes
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		SkipLink: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

SkipLink.defaultProps = {};
