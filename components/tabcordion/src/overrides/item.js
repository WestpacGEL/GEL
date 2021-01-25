/** @jsx jsx */

import { jsx, getLabel, formatClassName, classNames, getModifier } from '@westpac/core';

import { defaultProps } from '../blender/Tabcordion';

// ==============================
// Component
// ==============================

const Item = ({ state: _, ...rest }) => <div {...rest} />;

const BlenderItem = ({ className, ...rest }) => (
	<Item className={formatClassName(className)} {...rest} />
);

// ==============================
// Styles
// ==============================

const itemStyles = () => ({
	label: getLabel('tabcordion-item'),
});

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { selected }) => {
	const props = { selected };
	const baseStyles = itemStyles(_, defaultProps);

	let modifiers = getModifier({ ...defaultProps, selected: false }, props);
	if (!modifiers.length) return baseStyles;

	let label = baseStyles.label;
	const modifier = modifiers[0];

	let panelStyles, accordionBtnStyles;
	switch (modifier) {
		case 'selected':
			label = `${label}-selected`;
			panelStyles = {
				[`.__convert__tabcordion-panel`]: {
					display: 'block',
					height: 'auto',
				},
			};
			accordionBtnStyles = {
				['.__convert__tabcordion-accordion-btn-icon']: { transform: 'rotate(180deg)' },
			};
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...panelStyles, ...accordionBtnStyles };
};

// ==============================
// Attributes
// ==============================

const itemAttributes = () => null;

const blenderAttributes = (_, { selected }) => ({
	className: classNames({ [`__convert__tabcordion-item-selected`]: selected }),
});

// ==============================
// Exports
// ==============================

export const defaultItem = {
	component: Item,
	styles: itemStyles,
	attributes: itemAttributes,
};

export const blenderItem = {
	component: BlenderItem,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
