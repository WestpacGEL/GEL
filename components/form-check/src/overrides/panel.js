/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { defaultProps } from '../FormCheck';

// ==============================
// Component
// ==============================

const Panel = ({ state: _, ...rest }) => <span {...rest} />;

// ==============================
// Styles
// ==============================

const panelStyles = (_, { isOpen }) => {
	return {
		label: getLabel('formCheckReveal-panel'),
		display: !isOpen ? 'none' : 'inline',
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { block }) => {
	const props = { block };
	const baseStyles = panelStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = panelStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles };
};

// ==============================
// Attributes
// ==============================

const panelAttributes = (_, { instanceId, isOpen }) => ({
	id: `${instanceId}-panel`,
	'aria-hidden': !isOpen,
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
	component: Panel,
	styles: blenderStyles,
	attributes: panelAttributes,
};
