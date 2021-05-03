/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const TextInputWithButton = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const textInputWithButtonStyles = (_, { inline }) => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('textInputWithButton'),
		position: 'relative',
		display: 'inline-flex',
		flexWrap: 'nowrap',
		width: inline ? ['100%', 'auto'] : '100%',
	})[0];
};

// ==============================
// Attributes
// ==============================

const textInputWithButtonAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultTextInputWithButton = {
	component: TextInputWithButton,
	styles: textInputWithButtonStyles,
	attributes: textInputWithButtonAttributes,
};

export const blenderTextInputWithButton = {
	component: TextInputWithButton,
	styles: textInputWithButtonStyles,
	attributes: textInputWithButtonAttributes,
};
