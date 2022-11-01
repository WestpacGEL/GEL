/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { defaultBrandHeading } from './overrides/brandHeading';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const BrandHeading = forwardRef(
	(
		{
			tag,
			size,
			uppercase,
			children,
			overrides: componentOverrides,
			...rest
		}: typeof BrandHeading.propTypes & typeof BrandHeading.defaultProps,
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

// ==============================
// Types
// ==============================

BrandHeading.propTypes = {
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])]),

	/**
	 * The visual size of the heading
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
		PropTypes.arrayOf(PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7])),
	]).isRequired,

	/**
	 * Use upper case.
	 *
	 * This mode will also adjust line-height to suit.
	 */
	uppercase: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		BrandHeading: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};
