/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultActionsPrimary } from './overrides/actionsPrimary';
import { defaultActionsSecondary } from './overrides/actionsSecondary';
import { defaultActions } from './overrides/actions';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormPodActions = ({
	primary,
	secondary,
	reverse,
	overrides: componentOverrides,
	...rest
}: typeof FormPodActions.propTypes & typeof FormPodActions.defaultProps) => {
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

// ==============================
// Types
// ==============================

FormPodActions.propTypes = {
	/**
	 * Primary 'slot'.
	 *
	 * The primary slot is on the right hand side for MD+ breakpoints.
	 */
	primary: PropTypes.node,

	/**
	 * Secondary 'slot'.
	 *
	 * The secondary slot is on the left hand side for MD+ breakpoints.
	 */
	secondary: PropTypes.node,

	/**
	 * Reverse layout mode.
	 *
	 * Will swap primary and secondary slot order in the DOM (refer to XS breakpoint).
	 */
	reverse: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Actions: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ActionsPrimary: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		ActionsSecondary: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

FormPodActions.defaultProps = {
	reverse: false,
};
