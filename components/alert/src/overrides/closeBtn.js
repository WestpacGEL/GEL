/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const CloseBtn = ({ onClose, state, ...rest }) => (
	<Button
		onClick={(event) => onClose(event)}
		iconAfter={CloseIcon}
		look="link"
		size="medium"
		assistiveText="Close alert"
		{...rest}
	/>
);

const BlenderCloseBtn = (props) => (
	<CloseBtn
		overrides={{
			Button: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
			},
		}}
		{...props}
	/>
);

// ==============================
// Styles
// ==============================

const closeBtnStyles = () => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	return mq({
		label: 'alert-closebtn',
		color: 'inherit',
		position: 'absolute',
		zIndex: 1,
		top: 0,
		right: SPACING(1),
		opacity: 1,

		':hover': {
			opacity: 0.8,
		},
	})[0];
};

// ==============================
// Attributes
// ==============================

const closeBtnAttributes = () => ({
	'data-testing': 'alert-closeBtn',
});

const blenderAttributes = () => ({
	'data-js': 'alert-closeBtn__version__',
});

// ==============================
// Exports
// ==============================

export const defaultCloseBtn = {
	component: CloseBtn,
	styles: closeBtnStyles,
	attributes: closeBtnAttributes,
};

export const blenderCloseBtn = {
	component: BlenderCloseBtn,
	styles: closeBtnStyles,
	attributes: blenderAttributes,
};
