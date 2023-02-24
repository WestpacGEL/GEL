import {
	jsx,
	useBrand,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
	getLabel,
} from '@westpac/core';
import { Panel as MainPanel } from '../Panel';
const defaultProps = MainPanel?.defaultProps || {};
import { nestedStyles } from './header';

// ==============================
// Component
// ==============================

const Panel = ({ state: _, ...rest }) => <div {...rest} />;

const BlenderPanel = ({ className, ...rest }) => (
	<Panel className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const panelStyles = (_, { look }) => {
	const { COLORS, SPACING } = useBrand();

	const styleMap = {
		hero: {
			borderColor: COLORS.hero,
		},
		faint: {
			borderColor: COLORS.border,
		},
	};

	return {
		label: getLabel('panel'),
		marginBottom: SPACING(4),
		backgroundColor: '#fff',
		border: `1px solid ${styleMap[look].borderColor}`,
		borderRadius: '0.1875rem',

		table: {
			overflow: 'hidden', //clip overflow for rounded corners
			marginBottom: 0,
			borderBottomRightRadius: `calc(0.1875rem - 1px)`,
			borderBottomLeftRadius: `calc(0.1875rem - 1px)`,
		},
		'table caption': {
			padding: [
				`${SPACING(2)} ${SPACING(2)} 0 ${SPACING(2)}`,
				null,
				`${SPACING(4)} ${SPACING(4)} 0 ${SPACING(4)}`,
			],
		},
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { look }) => {
	const props = { look };
	const baseStyles = panelStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = panelStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'look':
			label = `${label}-${look}`;
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles, ...nestedStyles(props) };
};

// ==============================
// Attributes
// ==============================

const panelAttributes = () => null;

const blenderAttributes = (_, { look }) => ({
	className: classNames({ [`__convert__panel-${look}`]: look !== defaultProps.look }),
});

// ==============================
// Exports
// ==============================

export const defaultPanel = {
	component: Panel,
	styles: panelStyles,
	attributes: panelAttributes,
};

export const blenderPanel = {
	component: BlenderPanel,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
