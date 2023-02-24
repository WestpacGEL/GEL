import {
	jsx,
	useBrand,
	useMediaQuery,
	getModifier,
	styleReconciler,
	getLabel,
} from '@westpac/core';
import { Panel as MainPanel } from '../Panel';
const defaultProps = MainPanel?.defaultProps || {};

// ==============================
// Component
// ==============================

const Header = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const headerStyles = (_, { look }) => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	const styleMap = {
		hero: {
			backgroundColor: COLORS.hero,
			borderColor: COLORS.hero,
			color: '#fff',
		},
		faint: {
			backgroundColor: COLORS.background,
			borderColor: COLORS.border,
			color: COLORS.text,
		},
	};

	return mq({
		label: getLabel('panel-header'),
		padding: ['0.625rem 0.75rem', null, '0.625rem 1.5rem'],
		backgroundColor: styleMap[look].backgroundColor,
		borderBottom: `1px solid ${styleMap[look].borderColor}`,
		borderTopRightRadius: `calc(0.1875rem - 1px)`,
		borderTopLeftRadius: `calc(0.1875rem - 1px)`,
		color: styleMap[look].color,
		'@media print': {
			borderBottom: '1px solid #000',
		},
	})[0];
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, props) => {
	const baseStyles = headerStyles(_, defaultProps);

	return baseStyles;
};

export const nestedStyles = (props) => {
	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return {};

	const baseStyles = headerStyles(null, defaultProps);
	const modifierStyles = headerStyles(null, props);

	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	return { [`.__convert__${baseStyles.label}`]: reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const headerAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeader = {
	component: Header,
	styles: headerStyles,
	attributes: headerAttributes,
};

export const blenderHeader = {
	component: Header,
	styles: blenderStyles,
	attributes: headerAttributes,
};
