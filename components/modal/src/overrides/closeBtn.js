import { jsx, useBrand, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const CloseBtn = ({ state: _, ...rest }) => (
	<Button iconAfter={CloseIcon} look="unstyled" assistiveText="Close modal" {...rest} />
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
	const { COLORS, SPACING, PACKS } = useBrand();
	return {
		label: getLabel('modal-closeBtn'),
		position: 'absolute',
		zIndex: 1,
		top: SPACING(1),
		right: SPACING(1),
		padding: SPACING(1),
		color: COLORS.muted,
		backgroundColor: 'transparent',

		':hover': {
			opacity: 0.8,
		},
		':focus': {
			outlineOffset: `-${PACKS.focus.outlineWidth}`, // reposition inside
		},
	};
};

// ==============================
// Attributes
// ==============================

const closeBtnAttributes = () => null;

const blenderAttributes = () => ({ 'data-js': 'modal-closeBtn__version__' });

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
