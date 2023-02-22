import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultHeading } from './overrides/heading';

import { useButtonDropdownContext } from './ButtonDropdown';
import pkg from '../package.json';
import { ReactNode } from 'react';

export interface HeadingProps {
	/**
	 * The tag of the heading element for semantic reasons
	 */
	tag?: ((...args: unknown[]) => unknown) | string;
	/**
	 * children
	 */
	children?: ReactNode;
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
}

// ==============================
// Component
// ==============================

export const Heading = ({ tag = 'h3', children, overrides, ...rest }: HeadingProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useButtonDropdownContext();

	const defaultOverrides = {
		Heading: defaultHeading,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		tag,
		children,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Heading: { component: Heading, styles: headingStyles, attributes: headingAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Heading state={state} {...headingAttributes(state)} css={headingStyles(state)}>
			{children}
		</Heading>
	);
};

Heading.defaultProps = {
	tag: 'h3',
};

Heading.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * children
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
	 * The tag of the heading element for semantic reasons
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
