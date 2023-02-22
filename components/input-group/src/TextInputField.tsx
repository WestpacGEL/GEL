import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React, { Fragment, ReactNode } from 'react';

import { defaultTextInput } from './overrides/textInput';

import { VisuallyHidden } from '@westpac/a11y';

import { useInputGroupContext } from './InputGroup';
import pkg from '../package.json';

interface TextInputFieldProps {
	/**
	 * label
	 */
	label?: ReactNode;
	/**
	 * before
	 */
	before?: ReactNode;
	/**
	 * after
	 */
	after?: ReactNode;
	/**
	 * The instance ID for the label and text input
	 */
	instanceId?: string;
	/**
	 * The override API
	 */
	overrides?: {
		TextInputField?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

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
}: TextInputFieldProps) => {
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

TextInputField.defaultProps = {
	size: 'medium',
};

TextInputField.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * after
	 */
	after: PropTypes.node,
	/**
	 * before
	 */
	before: PropTypes.node,
	/**
	 * The instance ID for the label and text input
	 */
	instanceId: PropTypes.string,
	/**
	 * label
	 */
	label: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		TextInputField: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
