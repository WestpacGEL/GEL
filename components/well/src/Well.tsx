import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultWell } from './overrides/well';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

export interface WellProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * Component tag
	 */
	tag?: ((...args: unknown[]) => unknown) | string;
	/**
	 * The override API
	 */
	overrides?: {
		Well?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Well = ({
	tag = 'div',
	children,
	overrides: componentOverrides,
	...rest
}: WellProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Well: defaultWell,
	};

	const state = {
		tag,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Well: { component: Well, styles: wellStyles, attributes: wellAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Well {...rest} state={state} {...wellAttributes(state)} css={wellStyles(state)}>
			{children}
		</Well>
	);
};

Well.defaultProps = {
	tag: 'div',
};

Well.propTypes = {
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
		Well: PropTypes.shape({
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
