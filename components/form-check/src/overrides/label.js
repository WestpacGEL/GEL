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
import { sizeMap } from '../_utils';

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

	const checkWidth = sizeMap[size]['label'][type].width;
	const checkHeight = sizeMap[size]['label'][type].height;
	const checkTweak = sizeMap[size]['label'][type].tweak;
	const checkboxStroke = sizeMap[size]['label']['checkbox'].stroke;

	return {
		label: getLabel('formCheck-option-label'),
		display: 'inline-block',
		paddingTop: sizeMap[size]['label'].paddingTop,
		paddingBottom: sizeMap[size]['label'].paddingBottom,
		paddingLeft: sizeMap[size]['label'].gap,
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
			width: sizeMap[size]['label'].width,
			height: sizeMap[size]['label'].height,
			border: `1px solid ${COLORS.hero}`,
			background: 'transparent',
			borderRadius: type === 'radio' ? '50%' : 3,

			// Focus state
			'body.focus-visible input:focus + &': {
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
			top: `calc(((${sizeMap[size]['label'].height} - ${checkHeight}) / 2) + ${checkTweak})`,
			left: `calc((${sizeMap[size]['label'].width} - ${checkWidth}) / 2)`,
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
