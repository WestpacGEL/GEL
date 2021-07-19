/** @jsx jsx */

import { jsx, useMediaQuery, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const OptionBtn = ({ state: { type }, ...rest }) => {
	const Tag = type === 'button' ? 'button' : 'div';
	return <Tag {...rest} />;
};

// ==============================
// Styles
// ==============================

const optionBtnStyles = (_, { type }) => {
	const { PACKS, SPACING, COLORS } = useBrand();
	const mq = useMediaQuery();

	const paddingArr = [SPACING(3), null, SPACING(4)];

	return mq({
		// Normalize
		// ==========

		// 1. Change the font styles in all browsers.
		// 2. Remove the margin in Firefox and Safari.
		// button, input, optgroup, select, textarea:
		...(type === 'button' && {
			fontFamily: 'inherit', // 1
			fontSize: '100%', // 1
			lineHeight: 1.15, // 1
			margin: 0, // 2
		}),

		// Show the overflow in IE ('button' and 'input) and Edge ('input').
		// button, input:
		...(type === 'button' && {
			overflow: 'visible',
		}),

		// Remove the inheritance of text transform in Edge, Firefox, and IE.
		// button, select:
		...(type === 'button' && { textTransform: 'none' }),

		// Correct the inability to style clickable types in iOS and Safari.
		// button, [type='button'], [type='reset'], [type='submit']:
		...(type === 'button' && {
			WebkitAppearance: 'button',
		}),

		// Remove the inner border and padding in Firefox.
		// button::-moz-focus-inner, [type='button']::-moz-focus-inner, [type='reset']::-moz-focus-inner, [type='submit']::-moz-focus-inner:
		...(type === 'button' && {
			'&::-moz-focus-inner': {
				borderStyle: 'none',
				padding: 0,
			},
		}),
		// =========

		label: getLabel('selector-option-btn'),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		textAlign: 'left',
		width: '100%',
		cursor: 'pointer',
		touchAction: 'manipulation',
		userSelect: 'none',
		boxSizing: 'border-box',
		border: `1px solid ${COLORS.borderDark}`,
		borderRadius: '0.1875rem',
		padding: paddingArr,
		backgroundColor: type === 'button' && 'transparent',

		// Hover/focus state
		// - Checkbox/Radio
		'input:hover + &, input:focus + &': {
			borderColor: COLORS.hero,
		},
		// - Button/Submit
		// Note: Emotion won't let me combine these selectors for some reason
		'button&:hover': {
			borderColor: COLORS.hero,
		},
		'button&:focus': {
			borderColor: COLORS.hero,
		},

		// Checked state
		// Note: Padding reduced to counter the increased border width
		'input:checked + &, &[aria-pressed="true"]': {
			borderColor: COLORS.hero,
			borderWidth: '3px',
			padding: paddingArr.map((p) => p && `calc(${p} - 2px)`),
		},

		// Disabled state
		// Disabled checkbox/radio, disabled button type (hidden input) or disabled fieldset
		'input:disabled + &, input:disabled ~ div &, &:disabled, fieldset:disabled &': {
			opacity: '0.5',
			pointerEvents: 'none',
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

const optionBtnAttributes = (_, { type, value, checked, disabled }) => ({
	type: type === 'button' ? type : undefined,
	disabled: type === 'button' ? disabled : undefined,
	'data-value': type === 'button' ? value : undefined,
	'aria-pressed': type === 'button' ? checked : undefined,
});

// ==============================
// Exports
// ==============================

export const defaultOptionBtn = {
	component: OptionBtn,
	styles: optionBtnStyles,
	attributes: optionBtnAttributes,
};
