/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

import { blenderReconciler } from './_utils';
import { headerStyleMap } from './header';

// ==============================
// Component
// ==============================

const Panel = ({ state, ...rest }) => <div {...rest} />;

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
// - default: the default modifier styles that is consumed by both the react and vanilla versions
// - blender: Extra class styling only used by the blender version. Creates more traditional css modifier classes
// ==============================

const lookHero = (blender = false) => {
	const { COLORS } = useBrand();
	const { label, hero: heroStyles } = headerStyleMap(); // import the blender styles from the nested component

	const styles = {
		default: {
			label: 'GEL-panel-hero',
			borderColor: COLORS.hero,
		},
		blender: {
			[`.GEL-${label}`]: heroStyles,
		},
	};

	if (blender) return { ...styles.default, ...styles.blender };

	return { ...styles.default };
};

const lookFaint = (blender = false) => {
	const { COLORS } = useBrand();
	const { label, faint: faintStyles } = headerStyleMap();

	const styles = {
		default: {
			label: 'GEL-panel-faint',
			borderColor: COLORS.border,
		},
		blender: {
			[`.GEL-${label}`]: faintStyles,
		},
	};

	if (blender) return { ...styles.default, ...styles.blender };

	return { ...styles.default };
};

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
// Blender specific styles
// - We reconcile all variations of a component and their blender specific styles to create a more traditional css style sheet
// ==============================

export const blenderStyles = () => {
	return blenderReconciler(baseStyles(), [lookHero(true), lookFaint(true)]);
};

const panelStyles = (_, { look }) => {
	return { ...baseStyles(), ...lookMap(look) };
};

// ==============================
// Attributes
// ==============================

const panelAttributes = () => null;

const blenderAttributes = (_, { look }) => ({ className: `GEL-panel-${look}` });

// ==============================
// Exports
// ==============================

export const defaultPanel = {
	component: Panel,
	styles: panelStyles,
	attributes: panelAttributes,
};

export const blenderPanel = {
	component: Panel,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
