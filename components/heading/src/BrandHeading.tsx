import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { forwardRef, ReactNode } from 'react';

import { defaultBrandHeading } from './overrides/brandHeading';
import pkg from '../package.json';

export interface BrandHeadingProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * Component tag
	 */
	tag?: ((...args: unknown[]) => unknown) | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

	/**
	 * The visual size of the heading
	 */
	size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | (1 | 2 | 3 | 4 | 5 | 6 | 7)[];

	/**
	 * Use upper case.
	 *
	 * This mode will also adjust line-height to suit.
	 */
	uppercase?: boolean;

	/**
	 * The override API
	 */
	overrides?: {
		BrandHeading?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const BrandHeading = forwardRef(
	(
		{ tag, size, uppercase, children, overrides: componentOverrides, ...rest }: BrandHeadingProps,
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const defaultOverrides = {
			BrandHeading: defaultBrandHeading,
		};

		const state = {
			tag,
			size,
			uppercase,
			overrides: componentOverrides,
			...rest,
		};

		const {
			BrandHeading: {
				component: BrandHeading,
				styles: brandHeadingStyles,
				attributes: brandHeadingAttributes,
			},
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		return (
			<BrandHeading
				ref={ref}
				{...rest}
				state={state}
				{...brandHeadingAttributes(state)}
				css={brandHeadingStyles(state)}
			>
				{children}
			</BrandHeading>
		);
	}
);

BrandHeading.displayName = 'BrandHeading';

// ==============================
// Types
// ==============================

BrandHeading.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		BrandHeading: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * The visual size of the heading
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
		PropTypes.arrayOf(PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7])),
	]).isRequired,
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']), PropTypes.func]),
	/**
	 * Use upper case.
	 *
	 * This mode will also adjust line-height to suit.
	 */
	uppercase: PropTypes.bool,
};
