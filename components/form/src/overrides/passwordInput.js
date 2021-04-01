/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';
import { TextInputWithButton } from '@westpac/text-input';

// ==============================
// Component
// ==============================

const PasswordInput = ({ state: _, ...rest }) => <TextInputWithButton {...rest} />;

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
