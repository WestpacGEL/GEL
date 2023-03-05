import {
	jsx,
	css,
	useBrand,
	useMediaQuery,
	getLabel,
	getModifier,
	styleReconciler,
	mergeWith,
} from '@westpac/core';
import { sizeMap } from './_utils';
import { Switch as MainSwitch } from '../Switch';
const defaultProps = MainSwitch?.defaultProps || {};

// ==============================
// Component
// ==============================

const Toggle = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const toggleStyles = (_, { size }) => {
	const mq = useMediaQuery();
	const { COLORS, PACKS } = useBrand();
	const sizing = sizeMap(size);
	const sizeArr = sizing.height.map((h) => h || null);
	const borderWidthArr = sizeArr.map((w) => w && `${parseFloat(w) / 2}rem`);

	return mq({
		label: getLabel('switch-toggle'),
		display: 'block',
		position: 'relative',
		border: `1px solid ${COLORS.borderDark}`,
		borderRadius: sizing.borderRadius,
		backgroundColor: '#fff',
		height: sizing.height,
		width: sizing.width,
		overflow: 'hidden',
		transition: 'border .3s ease,background .3s ease',
		userSelect: 'none',

		// Toggle thumb/dot and high contrast mode 'on' fill
		'::after, ::before': {
			boxSizing: 'border-box',
			content: '""',
			position: 'absolute',
		},

		// Toggle thumb/dot
		'::after': {
			height: sizeArr,
			width: sizeArr,
			display: 'block',
			left: 0,
			top: 0,
			borderRadius: '50%',
			backgroundColor: '#fff',
			boxShadow: '0.1875rem 0 0.375rem 0 rgba(0,0,0,0.53)',
			transition: 'all .3s ease',
		},

		'input:checked ~ &': {
			border: `1px solid ${COLORS.hero}`,
			backgroundColor: COLORS.hero,

			'::after': {
				left: '100%',
				transform: 'translateX(-100%)',
			},

			// a11y: high contrast mode 'on' fill
			'::before': {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				border: 'solid transparent',
				borderWidth: borderWidthArr,
			},
		},

		'input:disabled ~ &': {
			opacity: 0.5,
			cursor: 'not-allowed',
		},

		'body:not(.isMouseMode) input:focus ~ &': {
			...PACKS.focus,
		},
	})[0];
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_) => toggleStyles(_, defaultProps);

export const nestedToggleStyles = ({ size }) => {
	const props = { size };
	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return {};

	const baseStyles = toggleStyles(null, defaultProps);

	const modifierStyles = toggleStyles(null, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	// have to remove any 'input' dependent styles from being nested within .switch-toggle otherwise it doesnt work
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

const toggleAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultToggle = {
	component: Toggle,
	styles: toggleStyles,
	attributes: toggleAttributes,
};

export const blenderToggle = {
	component: Toggle,
	styles: blenderStyles,
	attributes: toggleAttributes,
};
