import {
	jsx,
	useBrand,
	useMediaQuery,
	getLabel,
	getModifier,
	styleReconciler,
	classNames,
	formatClassName,
} from '@westpac/core';
import { useTransition, animated } from '@react-spring/web';

import { Alert as MainAlert } from '../Alert';
const defaultProps = MainAlert?.defaultProps || {};

// ==============================
// Component
// ==============================

const Alert = ({ state: { dismissible, open }, ...rest }) => {
	if (dismissible) {
		const transition = useTransition(open, {
			config: { duration: 400 },
			from: { opacity: 1 },
			enter: { opacity: 1 },
			leave: { opacity: 0 },
		});

		return transition((style, item) => item && <animated.div style={style} {...rest} />);
	} else {
		return <div {...rest} />;
	}
};

const BlenderAlert = ({ className, ...rest }) => (
	<Alert className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const alertStyles = (_, { dismissible, look, mode }) => {
	const mq = useMediaQuery();
	const { COLORS, SPACING } = useBrand();

	const styleMap = {
		info: {
			backgroundColor: COLORS.tints[`${look}5`],
			borderColor: COLORS.tints[`${look}50`],
			color: COLORS[look],
		},
		success: {
			backgroundColor: COLORS.tints[`${look}5`],
			borderColor: COLORS.tints[`${look}50`],
			color: COLORS[look],
		},
		warning: {
			backgroundColor: COLORS.tints[`${look}5`],
			borderColor: COLORS.tints[`${look}50`],
			color: COLORS[look],
		},
		danger: {
			backgroundColor: COLORS.tints[`${look}5`],
			borderColor: COLORS.tints[`${look}50`],
			color: COLORS[look],
		},
		system: {
			backgroundColor: COLORS.system,
			borderColor: COLORS.system,
			color: 'black',
		},
	};

	return mq({
		label: getLabel('alert'),
		marginBottom: SPACING(4),
		padding:
			mode === 'box' &&
			(dismissible ? `${SPACING(3)} ${SPACING(6)} ${SPACING(3)} ${SPACING(3)}` : SPACING(3)),
		position: 'relative',
		display: [null, 'flex'],
		zIndex: 1,
		borderTop: mode === 'box' ? '1px solid' : 0,
		borderBottom: mode === 'box' ? '1px solid' : 0,
		backgroundColor: mode === 'box' ? styleMap[look].backgroundColor : 'transparent',
		borderColor: mode === 'box' ? styleMap[look].borderColor : 'transparent',
		color: styleMap[look].color,
	})[0];
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { dismissible, look, mode }) => {
	const props = { dismissible: dismissible ? dismissible : false, look, mode };
	const baseStyles = alertStyles(_, defaultProps);

	const modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = alertStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'look':
			label = `${label}-${look}`;
			break;
		case 'mode':
			label = `${label}-${mode}`;
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

const alertAttributes = () => null;

const blenderAttributes = (_, { look, mode, dismissible }) => ({
	...(dismissible && { 'data-js': 'alert__version__' }),
	className: classNames({
		[`__convert__alert-${look}`]: look !== defaultProps.look,
		[`__convert__alert-${mode}`]: mode !== defaultProps.mode,
		'__convert__alert-dismissible': dismissible,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultAlert = {
	component: Alert,
	styles: alertStyles,
	attributes: alertAttributes,
};

export const blenderAlert = {
	component: BlenderAlert,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
