/** @jsx jsx */

import { forwardRef } from 'react';
import {
	jsx,
	useBrand,
	useMediaQuery,
	getLabel,
	getModifier,
	classNames,
	formatClassName,
} from '@westpac/core';

import { defaultProps } from '../blender/Tabcordion';
import { tabBtnLegoStyles } from './tabBtn';
import { accordionBtnLegoStyles } from './accordionBtn';

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
	const { COLORS } = useBrand();
	const mq = useMediaQuery();
	const props = { mode, look };

	const baseStyles = {
		label: getLabel('tabcordion'),

		// default responsive behaviour
		[`.__convert__tabcordion-tab-row`]: {
			display: ['none', null, 'flex'],
		},
		[`.__convert__tabcordion-accordion-btn`]: {
			display: [null, null, 'none'],
		},
		[`.__convert__tabcordion-panel`]: {
			borderTop: ['none', null, `1px solid ${COLORS.border}`],

			':last-of-type': {
				borderBottomLeftRadius: ['0.1875rem', null, 0],
				borderBottomRightRadius: ['0.1875rem', null, 0],
			},
		},
	};

	const tabStyles = {
		label: getLabel('tabcordion-tabs'),
		[`.__convert__tabcordion-tab-row`]: {
			display: 'flex',
		},
		[`.__convert__tabcordion-accordion-btn`]: {
			display: 'none',
		},
		[`.__convert__tabcordion-panel`]: {
			borderTop: `1px solid ${COLORS.border}`,
			':last-of-type': {
				borderBottomLeftRadius: 0,
				borderBottomRightRadius: 0,
			},
		},
	};

	const accordionStyles = {
		label: getLabel('tabcordion-accordion'),
		[`.__convert__tabcordion-tab-row`]: {
			display: ['none', null, 'none'],
		},
		[`.__convert__tabcordion-accordion-btn`]: {
			display: ['flex', null, 'flex'],
		},
		[`.__convert__tabcordion-panel`]: {
			borderTop: ['none', null, 'none'],
			':last-of-type': {
				borderBottomLeftRadius: [null, null, '0.1875rem'],
				borderBottomRightRadius: [null, null, '0.1875rem'],
			},
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
				[`.__convert__tabcordion-panel`]: {
					borderLeft: [`0.375rem solid ${COLORS.border}`, null, `1px solid ${COLORS.border}`],
					':last-of-type': {
						borderBottomLeftRadius: 0,
						borderBottomRightRadius: 0,
					},
				},
				[`&.__convert__tabcordion-tabs .__convert__tabcordion-panel`]: {
					borderLeft: `1px solid ${COLORS.border}`,
				},
				[`&.__convert__tabcordion-accordion .__convert__tabcordion-panel`]: {
					borderLeft: [null, null, `0.375rem solid ${COLORS.border}`],
				},
			};
			break;
		case 'mode':
			if (mode === 'tabs') modifierStyles = tabStyles;
			if (mode === 'accordion') modifierStyles = accordionStyles;
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return mq(modifierStyles)[0];
};

// ==============================
// Attributes
// ==============================

const tabcordionAttributes = () => null;

const blenderAttributes = (_, { mode, look }) => ({
	'data-mode': mode,
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
