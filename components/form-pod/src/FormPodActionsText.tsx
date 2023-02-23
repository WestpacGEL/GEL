import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultActionsText } from './overrides/actionsText';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

export interface FormPodActionsTextProps {
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		ActionsText?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const FormPodActionsText = ({
	children,
	overrides: componentOverrides,
	...rest
}: FormPodActionsTextProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		ActionsText: defaultActionsText,
	};

	const state = {
		overrides: componentOverrides,
		...rest,
	};

	const {
		ActionsText: {
			component: ActionsText,
			styles: actionsTextStyles,
			attributes: actionsTextAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<ActionsText
			{...rest}
			state={state}
			{...actionsTextAttributes(state)}
			css={actionsTextStyles(state)}
		>
			{children}
		</ActionsText>
	);
};

FormPodActionsText.propTypes = {
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
		ActionsText: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
