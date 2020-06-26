/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { blenderReconciler } from './_utils';

// ==============================
// Component
// ==============================

// Ideally I can use this for both?
const Panel = ({ state, ...rest }) => <div {...rest} />;

// or I might have to do it this way, probably only need to do this when we have components that additional logic in the component
const BlenderPanel = (props) => <div {...props} />;

// ==============================
// Styles
// ==============================
// Base
// - Base styles for a component with no modifiers, the same for both react and vanilla versions
// ==============================
const baseStyles = () => {
	return {
		label: 'panel',
		marginBottom: '1.3125rem',
		backgroundColor: '#fff',
		border: `1px solid`,
		borderRadius: '0.1875rem',
		table: {
			overflow: 'hidden', //clip overflow for rounded corners
			marginBottom: 0,
			borderBottomRightRadius: `calc(0.1875rem - 1px)`,
			borderBottomLeftRadius: `calc(0.1875rem - 1px)`,
		},
		'table caption': {
			padding: ['0.75rem 0.75rem 0 0.75rem', null, '1.5rem 1.5rem 0 1.5rem'],
		},
	};
};

// ==============================
// Modifiers
// ==============================
// This file is probably going to get really big when we have a lot of different modifiers for a component
// Probably going to have to add folder to overrides
// overrides
// 	-> Panel
//		-> styles.js
//		-> component.js	// this can contain the component and attributes since they are often very small compared to styles
//		-> index.js		// would create the exports as similar to below

// I hate the naming of this
const lookHero = (blender = false) => {
	const { COLORS } = useBrand();

	const styles = {
		default: {
			label: 'GEL-panel-hero',
			borderColor: COLORS.hero,
		},
		blender: {
			'.GEL-panel-header': {
				backgroundColor: COLORS.hero,
				borderColor: COLORS.hero,
			},
			'.GEL-panel-heading': {
				color: '#fff',
			},
		},
	};

	if (blender) return { ...styles.default, ...styles.blender };

	return { ...styles.default };
};

const lookFaint = (blender = false) => {
	const { COLORS } = useBrand();

	/**
	 * default: the default modifier styles that is consumed by both the react and vanilla versions
	 * blender: Extra class styling only used by the blender version. There is repetition of styles here as we are extracting out styles from the nested components and moving it to the top level, but this is the only way to do it.
	 */
	const styles = {
		default: {
			label: 'GEL-panel-faint',
			borderColor: COLORS.border,
		},
		blender: {
			'.GEL-panel-header': {
				backgroundColor: COLORS.background,
				borderColor: COLORS.border,
			},
			'.GEL-panel-heading': {
				color: COLORS.text,
			},
		},
	};

	if (blender) return { ...styles.default, ...styles.blender };

	return { ...styles.default };
};

// I also hate this, I wonder if I can just generate the styles into an object rather than a function
const lookMap = (look, blender = false) => {
	switch (look) {
		case 'hero':
			return lookHero(blender);
		case 'faint':
			return lookFaint(blender);
		default:
			return {};
	}
};

// ==============================
// Style Reconciliation
// ==============================

/**
 * Blender specific styles
 * - We reconcile all variations of a component and their blender specific styles to create a more traditional css style sheet
 * - Not dependent on any props since blender will generate a .panel styles and that needs to have everything in it
 * ^ Need to explain above better
 */
export const blenderStyles = () => {
	return blenderReconciler(baseStyles(), [lookHero(true), lookFaint(true)]);
};

const panelStyles = (_, { look }) => {
	return { ...baseStyles(), ...lookMap(look) };
};

const panelAttributes = () => null;

// I wonder if I can just combine these i.e.
// export const defaultPanel = {
// 	component: Panel,
// 	styles: panelStyles,
// 	blenderStyles,
// 	attributes: panelAttributes,
// };
// really depends on if I have make a separate component...

export const defaultPanel = {
	component: Panel,
	styles: panelStyles,
	attributes: panelAttributes,
};

export const blenderPanel = {
	component: Panel,
	styles: blenderStyles,
	attributes: panelAttributes,
};
