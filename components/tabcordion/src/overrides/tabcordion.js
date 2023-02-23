import { forwardRef } from 'react';
import {
	jsx,
	useMediaQuery,
	getLabel,
	getModifier,
	classNames,
	formatClassName,
} from '@westpac/core';

import { accordionBtnLegoStyles } from './accordionBtn';
import { Tabcordion as MainTabcordion } from '../blender/Tabcordion';
const defaultProps = MainTabcordion.defaultProps || {};
import { tabBtnLegoStyles } from './tabBtn';

// ==============================
// Component
// ==============================

const Tabcordion = forwardRef(({ state: _, ...rest }, ref) => <div ref={ref} {...rest} />);
Tabcordion.displayName = 'Tabcordion';

const BlenderTabcordion = forwardRef(({ state: _, className, ...rest }, ref) => (
	<div ref={ref} className={formatClassName(className)} {...rest} />
));
BlenderTabcordion.displayName = 'BlenderTabcordion';

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

		// Neither tabs or accordion
		[`:not(.__convert__tabcordion-tabs):not(.__convert__tabcordion-accordion)`]: {
			display: 'none', //hide responsive tabcordion until mode class is set (by JS)
		},

		// Panel (tabs and accordion)
		[`.__convert__tabcordion-panel:not(.__convert__tabcordion-panel-show)`]: {
			display: 'none',
		},
	};

	const tabStyles = {
		label: getLabel('tabcordion-tabs'),

		// Hide unnecessary accordionBtn (responsive tabcordion)
		[`.__convert__tabcordion-accordionBtn`]: {
			display: 'none',
		},

		// Tabs panel
		[`.__convert__tabcordion-panel`]: {
			borderWidth: '1px',
		},
	};

	const accordionStyles = {
		label: getLabel('tabcordion-accordion'),

		/*
		 * tabRow
		 */
		// Hide unnecessary tabRow (responsive tabcordion)
		[`.__convert__tabcordion-tabRow`]: {
			display: 'none',
		},

		/*
		 * accordionBtn
		 */
		// First (soft) accordionBtn
		[`:not(.__convert__tabcordion-lego) .__convert__tabcordion-item:first-child > .__convert__tabcordion-accordionBtn, :not(.__convert__tabcordion-lego) .__convert__tabcordion-tabRow + .__convert__tabcordion-item > .__convert__tabcordion-accordionBtn`]:
			{
				borderTopLeftRadius: '0.1875rem',
				borderTopRightRadius: '0.1875rem',
			},

		// Last (soft) accordionBtn and not active
		[`:not(.__convert__tabcordion-lego) .__convert__tabcordion-item:last-child .__convert__tabcordion-accordionBtn:not(.__convert__tabcordion-accordionBtn-active)`]:
			{
				borderBottomLeftRadius: '0.1875rem',
				borderBottomRightRadius: '0.1875rem',
			},

		// Not the last accordionBtn, not active and not currently collapsing
		[`.__convert__tabcordion-item:not(:last-child) > .__convert__tabcordion-accordionBtn:not(.__convert__tabcordion-accordionBtn-active):not(.collapsing)`]:
			{
				borderBottomWidth: 0, //reset
			},

		/*
		 * panel
		 */
		//  Accordion panel
		[`.__convert__tabcordion-panel`]: {
			borderWidth: '0 1px',
		},

		// Last accordion panel
		[`.__convert__tabcordion-item:last-child .__convert__tabcordion-panel`]: {
			borderBottomLeftRadius: '0.1875rem',
			borderBottomRightRadius: '0.1875rem',
		},

		// Last accordion panel and not closed
		[`.__convert__tabcordion-item:last-child .__convert__tabcordion-panel-show`]: {
			borderBottomWidth: '1px',
		},

		// Lego accordion panel
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
	'data-js': 'tabcordion__version__',
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
