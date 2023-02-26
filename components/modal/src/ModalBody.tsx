import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultBody } from './overrides/body';

import { useModalContext } from './Modal';
import pkg from '../package.json';

export interface ModalBodyProps {
	/**
	 * Modal body content
	 */
	children?: React.ReactNode;
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

export const ModalBody = ({ children, overrides, ...rest }: ModalBodyProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useModalContext();

	const defaultOverrides = {
		Body: defaultBody,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		context: context.state,
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

ModalBody.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Modal body content
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
};
