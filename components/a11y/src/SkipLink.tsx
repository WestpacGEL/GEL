/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultSkipLink } from './overrides/skipLink';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const SkipLink = ({
	href,
	children,
	overrides: componentOverrides,
	...rest
}: typeof SkipLink.propTypes & typeof SkipLink.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		SkipLink: defaultSkipLink,
	};

	const state = {
		href,
		overrides: componentOverrides,
		...rest,
	};

	const {
		SkipLink: { component: SkipLink, styles: skipLinkStyles, attributes: skipLinkAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<SkipLink
			children={children}
			{...rest}
			state={state}
			{...skipLinkAttributes(state)}
			css={skipLinkStyles(state)}
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
