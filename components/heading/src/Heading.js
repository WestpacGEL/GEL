/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Heading as HeadingWrapper, headingStyles } from './overrides/heading';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

/**
 * Heading: Headlines for your page needs
 */
export const Heading = forwardRef(
	({ tag, size, children, overrides: componentOverrides, ...rest }, ref) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const defaultOverrides = {
			Heading: {
				styles: headingStyles,
				component: HeadingWrapper,
				attributes: () => null,
			},
		};

		const state = {
			tag,
			size,
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
			<overrides.Heading.component
				ref={ref}
				tag={tag}
				size={size}
				{...rest}
				{...overrides.Heading.attributes(state)}
				css={overrides.Heading.styles(state)}
			>
				{children}
			</overrides.Heading.component>
		);
	}
);

// ==============================
// Types
// ==============================

Heading.propTypes = {
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])]),

	/**
	 * The visual size of the heading
	 */
	size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9]).isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Heading: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Heading.defaultProps = {};
