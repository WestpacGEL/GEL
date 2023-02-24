import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultTextInputWithButton } from './overrides/textInputWithButton';
import { defaultTextInputWithButtonTextInput } from './overrides/textInputWithButtonTextInput';
import { defaultTextInputWithButtonBtn } from './overrides/textInputWithButtonBtn';
import pkg from '../package.json';
import React, { ReactNode } from 'react';

export interface TextInputWithButtonProps {
	/**
	 * btnAssistiveText
	 */
	btnAssistiveText?: any;
	/**
	 * btnAriaPressed
	 */
	btnAriaPressed?: any;
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * Input button icon
	 */
	btnIcon(...args: unknown[]): unknown;
	/**
	 * Handler to be called on button click
	 */
	btnOnClick?: (...args: unknown[]) => unknown;
	/**
	 * Text to use as the `aria-label` for the button
	 */
	assistiveText?: string;
	/**
	 * The override API
	 */
	overrides?: {
		TextInputWithButton?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		TextInput?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Button?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const TextInputWithButton = ({
	btnIcon,
	btnAssistiveText,
	btnAriaPressed,
	btnOnClick,
	children,
	overrides: componentOverrides,
	...rest
}: TextInputWithButtonProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		TextInputWithButton: defaultTextInputWithButton,
		TextInputWithButtonTextInput: defaultTextInputWithButtonTextInput,
		TextInputWithButtonBtn: defaultTextInputWithButtonBtn,
	};

	const state = {
		btnIcon,
		btnAssistiveText,
		btnAriaPressed,
		btnOnClick,
		overrides: componentOverrides,
		...rest,
	};

	const {
		TextInputWithButton: {
			component: TextInputWithButton,
			styles: textInputWithButtonStyles,
			attributes: textInputWithButtonAttributes,
		},
		TextInputWithButtonTextInput: {
			component: TextInputWithButtonTextInput,
			styles: textInputWithButtonTextInputStyles,
			attributes: textInputWithButtonTextInputAttributes,
		},
		TextInputWithButtonBtn: {
			component: TextInputWithButtonBtn,
			styles: textInputWithButtonBtnStyles,
			attributes: textInputWithButtonBtnAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<TextInputWithButton
			state={state}
			{...textInputWithButtonAttributes(state)}
			css={textInputWithButtonStyles(state)}
		>
			<TextInputWithButtonTextInput
				{...rest}
				state={state}
				overrides={componentOverrides}
				{...textInputWithButtonTextInputAttributes(state)}
				css={textInputWithButtonTextInputStyles(state)}
			/>
			<TextInputWithButtonBtn
				state={state}
				{...textInputWithButtonBtnAttributes(state)}
				css={textInputWithButtonBtnStyles(state)}
			/>
		</TextInputWithButton>
	);
};

TextInputWithButton.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * btnAriaPressed
	 */
	btnAriaPressed: PropTypes.any,
	/**
	 * btnAssistiveText
	 */
	btnAssistiveText: PropTypes.any,
	/**
	 * Input button icon
	 */
	btnIcon: PropTypes.func.isRequired,
	/**
	 * Handler to be called on button click
	 */
	btnOnClick: PropTypes.func,
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Button: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		TextInput: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		TextInputWithButton: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
