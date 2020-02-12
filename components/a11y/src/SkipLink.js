/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { SkipLinkWrapper, skipLinkStyles } from './overrides/skipLink';
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
		SkipLink: {
			styles: skipLinkStyles,
			component: SkipLinkWrapper,
			attributes: () => null,
		},
	};

	const state = {
		href,
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
		<overrides.SkipLink.component
			children={children}
			href={href}
			{...rest}
			{...overrides.SkipLink.attributes(state)}
			css={overrides.SkipLink.styles(state)}
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
