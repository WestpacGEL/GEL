/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultActionsText } from './overrides/actionsText';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormPodActionsText = ({
	children,
	overrides: componentOverrides,
	...rest
}: typeof FormPodActionsText.propTypes & typeof FormPodActionsText.defaultProps) => {
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

// ==============================
// Types
// ==============================

FormPodActionsText.propTypes = {
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		ActionsText: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

FormPodActionsText.defaultProps = {};
