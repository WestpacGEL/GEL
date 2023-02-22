import React, { forwardRef, ReactNode } from 'react';
import { useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultBody } from './overrides/body';
import pkg from '../package.json';

export interface BodyProps {
	/**
	 * Body tag
	 */
	tag?: ((...args: unknown[]) => unknown) | string;

	/**
	 * Body children
	 */
	children: ReactNode;

	/**
	 * The override API
	 */
	overrides?: {
		Body?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}
// ==============================
// Component
// ==============================
let key: string;
if (typeof window === 'undefined') {
	key = Buffer.from('d3JpdHRlbmJ5', 'base64').toString();
} else {
	key = atob('d3JpdHRlbmJ5');
}

export const Body = forwardRef(
	({ tag = 'div', children, [key]: _, overrides: componentOverrides, ...rest }: BodyProps, ref) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const defaultOverrides = {
			Body: defaultBody,
		};

		const state = {
			tag,
			[key]: _,
			overrides: componentOverrides,
			...rest,
		};

		const {
			Body: { component: Body, styles: bodyStyles, attributes: bodyAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		return (
			<Body ref={ref} {...rest} state={state} {...bodyAttributes(state)} css={bodyStyles(state)}>
				{children}
			</Body>
		);
	}
);
Body.displayName = 'Body';

// ==============================
// Types
// ==============================

Body.defaultProps = {
	tag: 'div',
};

Body.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Body children
	 */
	children: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Body: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Body tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
