import { jsx, useMediaQuery, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';
import { textInputWithButtonBtnWidth as btnWidth } from '../_utils';

// ==============================
// Component
// ==============================

const TextInputWithButtonBtn = ({ state: { btnIcon, btnAssistiveText, btnOnClick }, ...rest }) => (
	<Button
		look="unstyled"
		iconAfter={btnIcon}
		assistiveText={btnAssistiveText}
		onClick={btnOnClick}
		{...rest}
	/>
);

// ==============================
// Styles
// ==============================

const textInputWithButtonBtnStyles = () => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('button'),
		position: 'relative',
		zIndex: 1,
		width: btnWidth,
		background: 'transparent',
		marginLeft: `-${btnWidth}`,
	})[0];
};

// ==============================
// Attributes
// ==============================

const textInputWithButtonBtnAttributes = (_, { btnAriaPressed }) => ({
	'aria-pressed': btnAriaPressed,
});

// ==============================
// Exports
// ==============================

export const defaultTextInputWithButtonBtn = {
	component: TextInputWithButtonBtn,
	styles: textInputWithButtonBtnStyles,
	attributes: textInputWithButtonBtnAttributes,
};

export const blenderTextInputWithButtonBtn = {
	component: TextInputWithButtonBtn,
	styles: textInputWithButtonBtnStyles,
	attributes: textInputWithButtonBtnAttributes,
};
