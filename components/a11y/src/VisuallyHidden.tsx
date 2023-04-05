import PropTypes from 'prop-types';
import { useBrand, overrideReconciler } from '@westpac/core';

import { defaultVisuallyHidden } from './overrides/visuallyHidden';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

// ==============================
// Types
// ==============================

export interface VisuallyHiddenProps {
	/**
	 * Component tag
	 */
	tag?: ((props: any) => any) | string;

	/**
	 * Component content
	 */
	children: ReactNode;

	/**
	 * The override API
	 */
	overrides?: {
		VisuallyHidden?: {
			styles?: ((props: any) => any) | string;
			component?: string;
			attributes?: ((props: any) => any) | string;
		};
	};
}

// ==============================
// Component
//
// Only display content to screen readers
//
// See: https://a11yproject.com/posts/how-to-hide-content/
// See: https://hugogiraudel.com/2016/10/13/css-hide-and-seek/
// ==============================

export const VisuallyHidden = ({
	tag = 'span',
	children,
	overrides: componentOverrides,
	...rest
}: VisuallyHiddenProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		VisuallyHidden: defaultVisuallyHidden,
	};

	const state = {
		tag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		VisuallyHidden: {
			component: VisuallyHidden,
			styles: visuallyHiddenStyles,
			attributes: visuallyHiddenAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<VisuallyHidden
			{...rest}
			state={state}
			{...visuallyHiddenAttributes(state)}
			css={visuallyHiddenStyles(state)}
		>
			{children}
		</VisuallyHidden>
	);
};

VisuallyHidden.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Component content
	 */
	children: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		VisuallyHidden: PropTypes.shape({
			attributes: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
			component: PropTypes.string,
			styles: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
		}),
	}),
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
