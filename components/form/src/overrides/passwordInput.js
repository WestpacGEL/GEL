import { jsx, useMediaQuery, getLabel } from '@westpac/core';
import { TextInputWithButton } from '@westpac/text-input';
import { VisibilityIcon, VisibilityOffIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const PasswordInput = ({ state: { reveal, handleClick }, ...rest }) => (
	<TextInputWithButton
		type={reveal ? 'text' : 'password'}
		btnIcon={reveal ? VisibilityOffIcon : VisibilityIcon}
		btnAssistiveText={reveal ? 'Obscure password' : 'Reveal password'}
		btnOnClick={handleClick}
		{...rest}
	/>
);

// ==============================
// Styles
// ==============================

const passwordInputStyles = () => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('passwordInput'),
	})[0];
};

// ==============================
// Attributes
// ==============================

const passwordInputAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultPasswordInput = {
	component: PasswordInput,
	styles: passwordInputStyles,
	attributes: passwordInputAttributes,
};

export const blenderPasswordInput = {
	component: PasswordInput,
	styles: passwordInputStyles,
	attributes: passwordInputAttributes,
};
