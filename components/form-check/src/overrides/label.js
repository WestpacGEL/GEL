/** @jsx jsx */

import {
	jsx,
	useBrand,
	getLabel,
	getModifier,
	styleReconciler,
	mergeWith,
	css,
} from '@westpac/core';
import { Body } from '@westpac/body';

import { defaultProps } from '../FormCheck';

// ==============================
// Component
// ==============================

const Label = ({ state: _, ...rest }) => <Body tag="label" {...rest} />;

const BlenderLabel = (props) => (
	<Label
		overrides={{
			Body: {
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

const labelStyles = (_, { type, size }) => {
	const { COLORS, PACKS } = useBrand();

	const sizeMap = {
		medium: {
			paddingTop: '0.125rem',
			paddingBottom: '0.125rem',
			gap: '0.375rem',
			width: '1.5rem',
			height: '1.5rem',
			checkbox: {
				width: '0.875rem',
				height: '0.5rem',
				stroke: '0.1875rem',
				tweak: '-0.125rem',
			},
			radio: {
				width: '0.75rem',
				height: '0.75rem',
				tweak: '0rem', //must state 'rem', used in calc()
			},
		},
		large: {
			paddingTop: '0.3125rem',
			paddingBottom: '0.3125rem',
			gap: '0.625rem',
			width: '1.875rem',
			height: '1.875rem',
			checkbox: {
				width: '1.125rem',
				height: '0.625rem',
				stroke: '0.25rem',
				tweak: '-0.125rem',
			},
			radio: {
				width: '1rem',
				height: '1rem',
				tweak: '0rem', //must state 'rem', used in calc()
			},
		},
	};

	const checkWidth = sizeMap[size][type].width;
	const checkHeight = sizeMap[size][type].height;
	const checkTweak = sizeMap[size][type].tweak;
	const checkboxStroke = sizeMap[size]['checkbox'].stroke;

	return {
		label: getLabel('formCheck-label'),
		display: 'inline-block',
		paddingTop: sizeMap[size].paddingTop,
		paddingBottom: sizeMap[size].paddingBottom,
		paddingLeft: sizeMap[size].gap,
		marginBottom: 0,
		cursor: 'pointer',
		touchAction: 'manipulation', // remove 300ms pause on mobile

		// Control outline
		'::before': {
			content: '""',
			boxSizing: 'border-box',
			position: 'absolute',
			top: 0,
			left: 0,
			width: sizeMap[size].width,
			height: sizeMap[size].height,
			border: `1px solid ${COLORS.hero}`,
			background: 'transparent',
			borderRadius: type === 'radio' ? '50%' : 3,

			// Focus state
			'body:not(.isMouseMode) input:focus + &': {
				...PACKS.focus,
			},

			// Disabled state
			'input:disabled + &, fieldset:disabled &': {
				borderColor: COLORS.border,
				backgroundColor: COLORS.light,
			},
		},

		// Control 'check' (tick or dot)

		'input:checked + &::after': {
			content: '""',
			boxSizing: 'border-box',
			position: 'absolute',
			border: `solid ${COLORS.hero}`,
			top: `calc(((${sizeMap[size].height} - ${checkHeight}) / 2) + ${checkTweak})`,
			left: `calc((${sizeMap[size].width} - ${checkWidth}) / 2)`,
			width: type === 'radio' ? 0 : checkWidth,
			height: type === 'radio' ? 0 : checkHeight,
			borderWidth:
				type === 'radio' ? `calc(${checkWidth} / 2)` : `0 0 ${checkboxStroke} ${checkboxStroke}`,
			borderRadius: type === 'radio' && '50%',
			background: type === 'radio' && COLORS.hero,
			transform: type === 'checkbox' && 'rotate(-54deg)',

			// Fix bug in IE11 caused by transform rotate (-54deg)
			borderTopColor: type === 'checkbox' && 'transparent',
		},

		'input:checked:disabled + &::after, fieldset:disabled input:checked &::after': {
			borderColor: COLORS.border,
		},

		// Disabled state
		'input:disabled + &, fieldset:disabled &': {
			cursor: 'default',
			color: COLORS.muted,
		},
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = () => labelStyles(null, defaultProps);

export const nestedLabelStyles = ({ type, size }) => {
	const props = { type, size };
	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return {};

	const baseStyles = labelStyles(null, defaultProps);

	const modifierStyles = labelStyles(null, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	// have to remove any 'input' dependent styles from being nested within .formCheck-label otherwise it doesnt work
	const formattedStyles = Object.entries(reconciledStyles).reduce((styles, [key, value]) => {
		if (key.startsWith('input')) {
			return { ...styles, [key]: value };
		} else {
			return mergeWith(styles, { [`.__convert__${baseStyles.label}`]: { [key]: value } });
		}
	}, {});

	// Need & to resolve as immediate parent instead of all parents
	const resolvedStyles = css(formattedStyles).styles.replace(
		'&',
		`.__convert__${baseStyles.label}`
	);

	return resolvedStyles;
};

// ==============================
// Attributes
// ==============================

const labelAttributes = (_, { optionId }) => ({ htmlFor: optionId });

// ==============================
// Exports
// ==============================

export const defaultLabel = {
	component: Label,
	styles: labelStyles,
	attributes: labelAttributes,
};

export const blenderLabel = {
	component: BlenderLabel,
	styles: blenderStyles,
	attributes: labelAttributes,
};
