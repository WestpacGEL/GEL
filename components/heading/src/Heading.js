/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { defaultHeading } from './overrides/heading';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Heading = forwardRef(
	({ tag, size, fontType, children, overrides: componentOverrides, ...rest }, ref) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const defaultOverrides = {
			Heading: defaultHeading,
		};

		const state = {
			tag,
			size,
			fontType,
			overrides: componentOverrides,
			...rest,
		};

		const {
			Heading: { component: Heading, styles: headingStyles, attributes: headingAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		return (
			<Heading
				ref={ref}
				{...rest}
				state={state}
				{...headingAttributes(state)}
				css={{ '&&': headingStyles(state) }}
			>
				{children}
			</Heading>
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
	size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).isRequired,

	/**
	 * The heading font type
	 */
	fontType: PropTypes.oneOf(['bodyFont', 'brandFont']).isRequired,

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

Heading.defaultProps = {
	fontType: 'bodyFont',
};
