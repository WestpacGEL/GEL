import { jsx, useMediaQuery, getLabel } from '@westpac/core';
import { forwardRef } from 'react';
import { TextInput } from '../TextInput';
import { sizeMap, getMaxWidth, textInputWithButtonBtnWidth as btnWidth } from '../_utils';

// ==============================
// Component
// ==============================

const TextInputWithButtonTextInput = forwardRef(({ state: _, ...rest }, ref) => (
	<TextInput ref={ref} {...rest} />
));
TextInputWithButtonTextInput.displayName = 'TextInputWithButtonTextInput';

// ==============================
// Styles
// ==============================

const textInputWithButtonTextInputStyles = (_, { size, width }) => {
	size = size || 'medium';

	const mq = useMediaQuery();
	const extras = `${btnWidth} - ${sizeMap[size].padding[1]}`;

	return mq({
		label: getLabel('textInputWithButtonTextInput'),
		paddingRight: btnWidth,
		maxWidth: width && getMaxWidth(size, width, extras),
	})[0];
};

// ==============================
// Attributes
// ==============================

const textInputWithButtonTextInputAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultTextInputWithButtonTextInput = {
	component: TextInputWithButtonTextInput,
	styles: textInputWithButtonTextInputStyles,
	attributes: textInputWithButtonTextInputAttributes,
};

export const blenderTextInputWithButtonTextInput = {
	component: TextInputWithButtonTextInput,
	styles: textInputWithButtonTextInputStyles,
	attributes: textInputWithButtonTextInputAttributes,
};
