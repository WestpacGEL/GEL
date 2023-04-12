import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React, { forwardRef, ReactNode } from 'react';

import { defaultHeading } from './overrides/heading';
import pkg from '../package.json';
type HeadingKeys = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingProps<T extends HeadingKeys = HeadingKeys> = JSX.IntrinsicElements[T] & {
	/**
	 * Emotion css
	 */
	css?: JSX.IntrinsicElements[T]['css'];
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
	size: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10)[];

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
		Heading?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
};

// ==============================
// Component
// ==============================

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
	({ tag, size, uppercase, children, overrides: componentOverrides, ...rest }, ref) => {
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
			uppercase,
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
				css={headingStyles(state)}
			>
				{children}
			</Heading>
		);
	}
);

Heading.displayName = 'Heading';

// ==============================
// Types
// ==============================

Heading.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Heading: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * The visual size of the heading
	 */
	size: PropTypes.oneOfType([
		PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
		PropTypes.arrayOf(PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])),
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
