/** @jsx jsx */

import { jsx, getLabel, getModifier, styleReconciler, classNames } from '@westpac/core';
import { defaultProps } from '../ButtonDropdown';

// ==============================
// Component
// ==============================

const ButtonDropdown = ({ state, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const buttonDropdownStyles = (_, { block }) => ({
	label: getLabel('buttonDropdown'),
	position: 'relative',
	display: block ? 'block' : 'inline-block',
	verticalAlign: 'middle',
});

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { block }) => {
	const props = { block };
	const baseStyles = buttonDropdownStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = buttonDropdownStyles(_, props);
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

const buttonDropdownAttributes = () => null;

const blenderAttributes = (_, { block }) => ({
	className: classNames({
		[`__convert__buttonDropdown-block`]: block,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultButtonDropdown = {
	component: ButtonDropdown,
	styles: buttonDropdownStyles,
	attributes: buttonDropdownAttributes,
};

export const blenderButtonDropdown = {
	component: ButtonDropdown,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
