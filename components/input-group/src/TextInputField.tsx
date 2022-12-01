/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { defaultTextInput } from './overrides/textInput';

import { VisuallyHidden } from '@westpac/a11y';

import { useInputGroupContext } from './InputGroup';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const TextInputField = ({
	instanceId,
	label,
	before,
	after,
	overrides,
	...rest
}: typeof TextInputField.propTypes & typeof TextInputField.defaultProps) => {
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
		before,
		after,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		TextInput: { component: TextInput, styles: textInputStyles, attributes: textInputAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Fragment>
			{label && (
				<VisuallyHidden tag="label" htmlFor={instanceId}>
					{label}
				</VisuallyHidden>
			)}
			<TextInput
				{...rest}
				state={state}
				{...textInputAttributes(state)}
				css={textInputStyles(state)}
			/>
		</Fragment>
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
