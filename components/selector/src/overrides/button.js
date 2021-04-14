/** @jsx jsx */

import { jsx, useMediaQuery, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const SelectorButton = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const buttonStyles = (_, { disabled, checked }) => {
	const { PACKS, SPACING, COLORS } = useBrand();
	const mq = useMediaQuery();

	const paddingArr = [SPACING(3), null, SPACING(4)];

	return mq({
		label: getLabel('selector-btn'),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		cursor: 'pointer',
		touchAction: 'manipulation',
		userSelect: 'none',
		boxSizing: 'border-box',
		padding: paddingArr,
		border: `1px solid ${COLORS.borderDark}`,
		borderRadius: '0.1875rem',
		transition: 'background 0.2s ease',

		// Checked state
		// Note: Padding reduced to counter the increased border width
		...(checked
			? {
					borderColor: COLORS.hero,
					borderWidth: '3px',
					padding: paddingArr.map((p) => p && `calc(${p} - 2px)`),
			  }
			: {
					':hover': {
						borderColor: COLORS.hero,
					},
			  }),

		// Disabled via `disabled` attribute or inside a disabled fieldset
		':disabled, fieldset:disabled &': {
			opacity: '0.5',
			pointerEvents: 'none',
		},

		// for non input tags
		...(disabled && { opacity: '0.5', pointerEvents: 'none' }),

		//a11y: WHCM
		position: 'relative',
		'input:checked + &::before, input:checked + &::after': {
			content: '""',
			position: 'absolute',
			zIndex: 1,
			left: 0,
			right: 0,
			borderTop: '6px solid transparent !important',
		},
		'input:checked + &::before': {
			top: 0,
		},
		'input:checked + &::after': {
			bottom: 0,
		},

		// Focus state
		'body:not(.isMouseMode) input:focus + &': {
			...PACKS.focus,
		},
	})[0];
};

// ==============================
// Attributes
// ==============================

const buttonAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultButton = {
	component: SelectorButton,
	styles: buttonStyles,
	attributes: buttonAttributes,
};
