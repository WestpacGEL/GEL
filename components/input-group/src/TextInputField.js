/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React from 'react';
import PropTypes from 'prop-types';

import { defaultLabel } from './overrides/label';
import { defaultTextInput } from './overrides/textInput';

import { useInputGroupContext } from './InputGroup';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const TextInputField = ({ instanceId, label, size, left, right, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useInputGroupContext();

	const defaultOverrides = {
		Label: defaultLabel,
		TextInput: defaultTextInput,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		instanceId,
		label,
		size,
		left,
		right,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
		TextInput: { component: TextInput, styles: textInputStyles, attributes: textInputAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<>
			<Label state={state} {...labelAttributes(state)} css={{ '&&': labelStyles(state) }}>
				{label}
			</Label>
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
	 * The label text for the text input
	 */
	label: PropTypes.string.isRequired,

	/**
	 * What size the button-group is
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,

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
