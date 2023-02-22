import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultContainer } from './overrides/container';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

export interface ContainerProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * Enable fixed width container mode. In this mode the container width is fixed at each breakpoint.
	 */
	fixed: boolean;
	/**
	 * Component tag
	 */
	tag?: ((...args: unknown[]) => unknown) | string;
	/**
	 * The override API
	 */
	overrides?: {
		Container?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Container = ({
	fixed = false,
	tag = 'div',
	children,
	overrides: componentOverrides,
	...rest
}: ContainerProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Container: defaultContainer,
	};

	const state = {
		fixed,
		tag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Container: { component: Container, styles: containerStyles, attributes: containerAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Container {...rest} state={state} {...containerAttributes(state)} css={containerStyles(state)}>
			{children}
		</Container>
	);
};

Container.defaultProps = {
	fixed: false,
	tag: 'div',
};

Container.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Enable fixed width container mode. In this mode the container width is fixed at each breakpoint.
	 */
	fixed: PropTypes.bool.isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Container: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
