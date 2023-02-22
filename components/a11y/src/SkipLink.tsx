import PropTypes from 'prop-types';
import { useBrand, overrideReconciler } from '@westpac/core';

import { defaultSkipLink } from './overrides/skipLink';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

// ==============================
// Types
// ==============================

export interface SkipLinkProps {
	/**
	 * href attribute
	 */
	href: string;

	/**
	 * Children attributes
	 */
	children: ReactNode;

	/**
	 * The override API
	 */
	overrides?: {
		SkipLink: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const SkipLink = ({
	href,
	children,
	overrides: componentOverrides,
	...rest
}: SkipLinkProps) => {
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
		SkipLink: {
			component: OverrideSkipLink,
			styles: skipLinkStyles,
			attributes: skipLinkAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<OverrideSkipLink
			{...rest}
			state={state}
			{...skipLinkAttributes(state)}
			css={skipLinkStyles(state)}
		>
			{children}
		</OverrideSkipLink>
	);
};

SkipLink.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Children attributes
	 */
	children: PropTypes.node,
	/**
	 * href attribute
	 */
	href: PropTypes.string.isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		SkipLink: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}).isRequired,
	}),
};
