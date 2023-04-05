import {
	jsx,
	useBrand,
	useMediaQuery,
	asArray,
	getModifier,
	styleReconciler,
	classNames,
	getLabel,
	formatClassName,
} from '@westpac/core';

const defaultProps = {
	size: 'medium',
	copyrightYear: '',
};

// ==============================
// Component
// ==============================

const Icon = ({ state: _, ...rest }) => <span {...rest} />;

const BlenderIcon = ({ className, ...rest }) => (
	<Icon className={formatClassName(className)} {...rest} />
);
// ==============================
// Styles
// ==============================

const iconStyles = (_, { color, size }) => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	const sizeMap = {
		xsmall: 12, // 0.5x
		small: 18, //  0.75x
		medium: 24, // 1x (default)
		large: 36, //  1.5x
		xlarge: 48, // 2x
	};

	// Size styling (responsive)
	const sizeArr = asArray(size);
	const styleSize = {
		height: sizeArr.map((s) => s && sizeMap[s]),
		width: sizeArr.map((s) => s && sizeMap[s]),
	};

	const colorMap = {
		primary: COLORS.primary,
		hero: COLORS.hero,
		neutral: COLORS.neutral,
		muted: COLORS.muted,
		background: COLORS.background,
		border: COLORS.border,
		heading: COLORS.heading,
		light: COLORS.light,
		text: COLORS.text,
		info: COLORS.info,
		success: COLORS.success,
		warning: COLORS.warning,
		danger: COLORS.danger,
		system: COLORS.system,
	};

	return mq({
		label: getLabel('icon'),
		display: 'inline-block',
		flexShrink: 0,
		lineHeight: 1,
		verticalAlign: 'middle',
		color: colorMap[color] || color || COLORS.muted,
		...styleSize,

		svg: {
			display: 'block',
		},
	})[0];
};

const blenderStyles = (_, { color, size }) => {
	const props = { color, size };
	const baseStyles = iconStyles(_, defaultProps);

	const modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = iconStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'color':
			label = `${label}-${color}`;
			break;
		case 'size':
			label = `${label}-${size}`;
			break;
		default:
			label = `${label}-${modifier}`;
	}

	return { label, ...reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const iconAttributes = () => null;

const blenderAttributes = (_, { color, size }) => ({
	className: classNames({
		[`__convert__icon-${color}`]: color,
		[`__convert__icon-${size}`]: size && size !== defaultProps.size,
	}),
});
// ==============================
// Exports
// ==============================

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};

export const blenderIcon = {
	component: BlenderIcon,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
