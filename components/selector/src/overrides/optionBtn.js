/** @jsx jsx */

import { jsx, useMediaQuery, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const OptionBtn = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const optionBtnStyles = (_, { type, disabled, checked }) => {
	const { PACKS, SPACING, COLORS } = useBrand();
	const mq = useMediaQuery();

	const paddingArr = [SPACING(3), null, SPACING(4)];

	return {
		label: getLabel('selector-option-btn'),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		cursor: 'pointer',
		touchAction: 'manipulation',
		userSelect: 'none',
		boxSizing: 'border-box',
		border: `1px solid ${COLORS.borderDark}`,
		borderRadius: '0.1875rem',

		// Hover state
		'input:hover + &': {
			borderColor: COLORS.hero,
		},

		// Disabled state
		'input:disabled + &, fieldset:disabled &': {
			opacity: '0.5',
			pointerEvents: 'none',
		},

		//a11y: WHCM
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

		// Note: Temporary fix... mq() array values must come last if `&` selectors are used (as above). This is an issue with our reset specificity solution (`.GEL ` class prepend)
		...mq({
			padding: paddingArr,

			// Checked state
			// Note: Padding reduced to counter the increased border width
			...(checked && {
				borderColor: COLORS.hero,
				borderWidth: '3px',
				padding: paddingArr.map((p) => p && `calc(${p} - 2px)`),
			}),
		})[0],
	};
};

// ==============================
// Attributes
// ==============================

const optionBtnAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultOptionBtn = {
	component: OptionBtn,
	styles: optionBtnStyles,
	attributes: optionBtnAttributes,
};
