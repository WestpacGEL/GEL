import { jsx, useMediaQuery, useBrand, getLabel, mergeWith } from '@westpac/core';
import { Button } from '@westpac/button';

// ==============================
// Component
// ==============================

const ButtonGroupButton = ({ state: { checked, look, size, block, disabled }, ...rest }) => (
	<Button
		tag="span"
		soft={!checked}
		look={look}
		size={size}
		block={block}
		disabled={disabled}
		{...rest}
	/>
);

const BlenderButton = (props) => (
	<ButtonGroupButton
		overrides={{
			Button: {
				attributes: (attributes) => {
					if (attributes.className) {
						attributes.className = attributes.className.concat(' ', `__convert__buttonGroup-btn`); // unable to use attributes below since there is already a className being passed as part of the blender button
					}
					return attributes;
				},
			},
		}}
		{...props}
	/>
);

// ==============================
// Styles
// ==============================

const buttonStyles = () => {
	const { PACKS } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('buttonGroup-btn'),

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

		'label:not(:last-of-type) &': {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
			borderRight: 0,
		},
		'label:not(:first-of-type) &': {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
		},

		// Focus state
		'body:not(.isMouseMode) input:focus + &': {
			...PACKS.focus,
		},
	})[0];
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = () => {
	const { COLORS } = useBrand();
	const baseStyles = buttonStyles();

	// Hard-coded and copied for now...
	const nestedStyles = {
		'input:checked + &': {
			'&.__convert__button-soft': {
				color: '#fff',
				backgroundColor: COLORS.hero,
				borderColor: COLORS.hero,

				':hover': {
					backgroundColor: COLORS.tints.hero70,
				},
				':active, &.active': {
					backgroundColor: COLORS.tints.hero50,
				},
			},
			'&.__convert__button-primary-soft': {
				color: '#fff',
				backgroundColor: COLORS.primary,
				borderColor: COLORS.primary,

				':hover': {
					backgroundColor: COLORS.tints.primary70,
				},
				':active, &.active': {
					backgroundColor: COLORS.tints.primary50,
				},
			},
		},
		'input:disabled + &': {
			opacity: '0.5',
			pointerEvents: 'none',
		},
	};

	return mergeWith(baseStyles, nestedStyles);
};

// ==============================
// Attributes
// ==============================

const buttonAttributes = () => null;

const blenderAttributes = () => ({
	'data-js': 'buttonGroup-btn__version__',
});

// ==============================
// Exports
// ==============================

export const defaultButton = {
	component: ButtonGroupButton,
	styles: buttonStyles,
	attributes: buttonAttributes,
};

export const blenderButton = {
	component: BlenderButton,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
