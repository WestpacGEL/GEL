/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultTextInputWithButton } from './overrides/textInputWithButton';
import { defaultTextInputWithButtonTextInput } from './overrides/textInputWithButtonTextInput';
import { defaultTextInputWithButtonBtn } from './overrides/textInputWithButtonBtn';
import pkg from '../package.json';

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
}) => {
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

// ==============================
// Types
// ==============================

TextInputWithButton.propTypes = {
	/**
	 * Input button icon
	 */
	btnIcon: PropTypes.func.isRequired,

	/**
	 * Handler to be called on button click
	 */
	btnOnClick: PropTypes.func,

	/**
	 * Text to use as the `aria-label` for the button
	 */
	assistiveText: PropTypes.string,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		TextInputWithButton: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		TextInput: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Button: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

export const defaultProps = {};

TextInputWithButton.defaultProps = defaultProps;
