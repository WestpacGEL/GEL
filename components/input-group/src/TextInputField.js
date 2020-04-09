/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React from 'react';
import PropTypes from 'prop-types';

import { defaultTextInput } from './overrides/textInput';

import { VisuallyHidden } from '@westpac/a11y';

import { useInputGroupContext } from './InputGroup';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const TextInputField = ({ instanceId, label, left, right, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useInputGroupContext();

	const defaultOverrides = {
		TextInput: defaultTextInput,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		instanceId,
		label,
		left,
		right,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		TextInput: { component: TextInput, styles: textInputStyles, attributes: textInputAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<>
			<VisuallyHidden tag="label" htmlFor={instanceId}>
				{label}
			</VisuallyHidden>
			<TextInput
				{...rest}
				state={state}
				{...textInputAttributes(state)}
				css={{ '&&': textInputStyles(state) }}
			/>
		</>
	);
};

// ==============================
// Types
// ==============================

TextInputField.propTypes = {
	/**
	 * The instance ID for the label and text input
	 */
	instanceId: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		TextInputField: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

TextInputField.defaultProps = {
	size: 'medium',
};
