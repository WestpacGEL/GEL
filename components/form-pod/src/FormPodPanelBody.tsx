import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultBody } from './overrides/body';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

export interface FormPodPanelBodyProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * Expanded body mode (less horizontal padding)
	 */
	expanded?: boolean;
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

export const FormPodPanelBody = ({
	expanded = false,
	children,
	overrides: componentOverrides,
	...rest
}: FormPodPanelBodyProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Body: defaultBody,
	};

	const state = {
		expanded,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Body: { component: Body, styles: bodyStyles, attributes: bodyAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Body {...rest} state={state} {...bodyAttributes(state)} css={bodyStyles(state)}>
			{children}
		</Body>
	);
};

FormPodPanelBody.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Expanded body mode (less horizontal padding)
	 */
	expanded: PropTypes.bool,
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
};

FormPodPanelBody.defaultProps = { expanded: false };
