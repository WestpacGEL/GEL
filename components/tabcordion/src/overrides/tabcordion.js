/** @jsx jsx */

import { forwardRef } from 'react';
import {
	jsx,
	useMediaQuery,
	getLabel,
	getModifier,
	classNames,
	formatClassName,
} from '@westpac/core';

import { defaultProps } from '../blender/Tabcordion';
import { tabBtnLegoStyles } from './tabBtn';
import { accordionBtnLegoStyles } from './accordionBtn';
import { getTabsPanelStyles, getAccordionPanelStyles } from './panel';

// ==============================
// Component
// ==============================

const Tabcordion = forwardRef(({ state: _, ...rest }, ref) => <div ref={ref} {...rest} />);

const BlenderTabcordion = forwardRef(({ state: _, className, ...rest }, ref) => (
	<div ref={ref} className={formatClassName(className)} {...rest} />
));

// ==============================
// Styles
// ==============================

const tabcordionStyles = () => ({
	label: getLabel('tabcordion'),
});

const blenderStyles = (_, { mode, look }) => {
	const mq = useMediaQuery();
	const props = { mode, look };

	const baseStyles = {
		label: getLabel('tabcordion'),

		[`:not(.__convert__tabcordion-tabs):not(.__convert__tabcordion-accordion)`]: {
			display: 'none', //hide responsive tabcordion until mode class is set (by JS)
		},
	};

	const tabStyles = {
		label: getLabel('tabcordion-tabs'),
		[`.__convert__tabcordion-accordionBtn`]: {
			display: 'none',
		},
		[`.__convert__tabcordion-panel`]: getTabsPanelStyles(),
	};

	const accordionStyles = {
		label: getLabel('tabcordion-accordion'),

		// Hide unnecessary tabRow (responsive tabcordion)
		[`.__convert__tabcordion-tabRow`]: {
			display: 'none',
		},

		// First (soft) accordionBtn
		[`:not(.__convert__tabcordion-lego) .__convert__tabcordion-item:first-child > .__convert__tabcordion-accordionBtn, :not(.__convert__tabcordion-lego) .__convert__tabcordion-tabRow + .__convert__tabcordion-item > .__convert__tabcordion-accordionBtn`]: {
			borderTopLeftRadius: '0.1875rem',
			borderTopRightRadius: '0.1875rem',
		},

		// Last (soft) accordionBtn and not active
		[`:not(.__convert__tabcordion-lego) .__convert__tabcordion-item:last-child .__convert__tabcordion-accordionBtn:not(.__convert__tabcordion-accordionBtn-active)`]: {
			borderBottomLeftRadius: '0.1875rem',
			borderBottomRightRadius: '0.1875rem',
		},

		// Not the last accordionBtn and not active
		[`.__convert__tabcordion-item:not(:last-child) > .__convert__tabcordion-accordionBtn:not(.__convert__tabcordion-accordionBtn-active)`]: {
			borderBottomWidth: 0, //reset
		},

		[`.__convert__tabcordion-panel`]: getAccordionPanelStyles(look),

		[`&.__convert__tabcordion-lego .__convert__tabcordion-panel`]: {
			borderLeftWidth: '0.375rem',
		},
	};

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return mq(baseStyles)[0];

	let label = baseStyles.label;
	const modifier = modifiers[0];

	let modifierStyles = {};

	switch (modifier) {
		case 'look':
			label = `${label}-${look}`;
			modifierStyles = {
				label,
				...tabBtnLegoStyles(),
				...accordionBtnLegoStyles(),
			};
			break;
		case 'mode':
			label = `${label}-${mode}`;
			if (mode === 'tabs') modifierStyles = tabStyles;
			if (mode === 'accordion') modifierStyles = accordionStyles;
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...modifierStyles };
};

// ==============================
// Attributes
// ==============================

const tabcordionAttributes = () => null;

const blenderAttributes = (_, { mode, look }) => ({
	// 'data-mode': mode,
	className: classNames({
		[`__convert__tabcordion-${look}`]: look !== defaultProps.look,
		[`__convert__tabcordion-tabs`]: mode === 'tabs',
		[`__convert__tabcordion-accordion`]: mode === 'accordion',
	}),
});
// ==============================
// Exports
// ==============================

export const defaultTabcordion = {
	component: Tabcordion,
	styles: tabcordionStyles,
	attributes: tabcordionAttributes,
};

export const blenderTabcordion = {
	component: BlenderTabcordion,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
