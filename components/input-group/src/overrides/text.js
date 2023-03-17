import {
	jsx,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';

// ==============================
// Component
// ==============================

const Text = ({ state: _, ...rest }) => <span {...rest} />;

const BlenderText = ({ className, ...rest }) => (
	<Text className={formatClassName(className)} {...rest} />
);

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
		boxSizing: 'border-box',
		position: 'relative',
		zIndex: 1,
		...sizeMap[size],
		lineHeight: 1.5,
		backgroundColor: COLORS.light,
		border: `1px solid ${COLORS.borderDark}`,
		borderRadius: '0.1875rem',
		whiteSpace: 'nowrap',

		...(position === 'after' && {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
			borderLeft: 0,
		}),
		...(position === 'before' && {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
			borderRight: 0,
		}),
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { size, position }) => {
	const props = { size, position };
	const defProps = { position: 'none' }; // so we can generate a base style with no position
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
	component: BlenderText,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
