import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultActionsPrimary } from './overrides/actionsPrimary';
import { defaultActionsSecondary } from './overrides/actionsSecondary';
import { defaultActions } from './overrides/actions';
import pkg from '../package.json';

export interface FormPodActionsProps {
	/**
	 * Primary 'slot'.
	 *
	 * The primary slot is on the right hand side for MD+ breakpoints.
	 */
	primary?: React.ReactNode;
	/**
	 * Secondary 'slot'.
	 *
	 * The secondary slot is on the left hand side for MD+ breakpoints.
	 */
	secondary?: React.ReactNode;
	/**
	 * Reverse layout mode.
	 *
	 * Will swap primary and secondary slot order in the DOM (refer to XS breakpoint).
	 */
	reverse?: boolean;
	/**
	 * The override API
	 */
	overrides?: {
		Actions?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ActionsPrimary?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ActionsSecondary?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const FormPodActions = ({
	primary,
	secondary,
	reverse = false,
	overrides: componentOverrides,
	...rest
}: FormPodActionsProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Actions: defaultActions,
		ActionsPrimary: defaultActionsPrimary,
		ActionsSecondary: defaultActionsSecondary,
	};

	const state = {
		primary,
		secondary,
		reverse,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Actions: { component: Actions, styles: actionsStyles, attributes: actionsAttributes },
		ActionsPrimary: {
			component: ActionsPrimary,
			styles: actionsPrimaryStyles,
			attributes: actionsPrimaryAttributes,
		},
		ActionsSecondary: {
			component: ActionsSecondary,
			styles: actionsSecondaryStyles,
			attributes: actionsSecondaryAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	const children = [
		<ActionsPrimary
			key="primary"
			state={state}
			{...actionsPrimaryAttributes(state)}
			css={actionsPrimaryStyles(state)}
		>
			{primary}
		</ActionsPrimary>,
		<ActionsSecondary
			key="secondary"
			state={state}
			{...actionsSecondaryAttributes(state)}
			css={actionsSecondaryStyles(state)}
		>
			{secondary}
		</ActionsSecondary>,
	];

	return (
		<Actions {...rest} state={state} {...actionsAttributes(state)} css={actionsStyles(state)}>
			{reverse ? children.reverse() : children}
		</Actions>
	);
};

FormPodActions.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Actions: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ActionsPrimary: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ActionsSecondary: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Primary 'slot'.
	 *
	 * The primary slot is on the right hand side for MD+ breakpoints.
	 */
	primary: PropTypes.node,
	/**
	 * Reverse layout mode.
	 *
	 * Will swap primary and secondary slot order in the DOM (refer to XS breakpoint).
	 */
	reverse: PropTypes.bool,
	/**
	 * Secondary 'slot'.
	 *
	 * The secondary slot is on the left hand side for MD+ breakpoints.
	 */
	secondary: PropTypes.node,
};

FormPodActions.defaultProps = { reverse: false };
