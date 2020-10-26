/** @jsx jsx */

import { jsx, useBrand, getLabel, classNames, getModifier, styleReconciler } from '@westpac/core';

import { defaultProps } from '../Text';

// ==============================
// Component
// ==============================

const Text = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const textStyles = (_, { size, position }) => {
	const { COLORS } = useBrand();

	const sizeMap = {
		small: {
			fontSize: '0.875rem',
			padding: '0.1875rem 0.5625rem 0.25rem',
			height: '1.875rem',
		},
		medium: {
			fontSize: '1rem',
			padding: '0.3125rem 0.75rem',
			height: '2.25rem',
		},
		large: {
			fontSize: '1rem',
			padding: '0.5rem 0.9375rem',
			height: '2.625rem',
		},
		xlarge: {
			fontSize: '1.125rem',
			padding: '0.5625rem 1.125rem 0.625rem',
			height: '3rem',
		},
	};

	return {
		label: getLabel('inputGroup-text'),
		...sizeMap[size],
		lineHeight: 1.5,
		backgroundColor: COLORS.light,
		border: `1px solid ${COLORS.borderDark}`,
		borderRadius: '0.1875rem',
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',

		...(position === 'after' && {
			borderLeft: 0,
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
		}),
		...(position === 'before' && {
			borderRight: 0,
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
		}),
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { size, position }) => {
	const props = { size, position };
	const defProps = { ...defaultProps, position: 'none' }; // so we can generate a base style with no position
	const baseStyles = textStyles(_, defProps);

	let modifiers = getModifier(defProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = textStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	let modifier;

	if (modifiers.length > 1 && modifiers.includes('size')) {
		modifier = 'size';
	} else {
		modifier = modifiers[0];
	}

	switch (modifier) {
		case 'size':
			label = `${label}-${size}`;
			break;
		case 'position':
			label = `${label}-${position}`;
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const textAttributes = () => null;

const blenderAttributes = (_, { size, position }) => ({
	className: classNames({
		[`__convert__inputGroup-text-${size}`]: size !== defaultProps.size,
		[`__convert__inputGroup-text-${position}`]: position,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultText = {
	component: Text,
	styles: textStyles,
	attributes: textAttributes,
};

export const blenderText = {
	component: Text,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
