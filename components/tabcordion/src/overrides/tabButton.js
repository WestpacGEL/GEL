/** @jsx jsx */

import { forwardRef } from 'react';
import {
	jsx,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';

import { defaultProps } from '../blender/Tabcordion';

// ==============================
// Component
// ==============================

const TabButton = forwardRef(({ state: _, ...rest }, ref) => {
	return <button type="button" ref={ref} {...rest} />;
});

const BlenderTabButton = forwardRef(({ state: _, className, ...rest }, ref) => {
	return <button type="button" ref={ref} className={formatClassName(className)} {...rest} />;
});

// ==============================
// Styles
// ==============================

const tabButtonStyles = (_, { look, justify, selected }) => {
	const { COLORS, SPACING, PACKS } = useBrand();

	const styles = {
		soft: {
			backgroundColor: selected ? '#fff' : COLORS.light,
			borderTopLeftRadius: '0.1875rem',
			borderTopRightRadius: '0.1875rem',
			border: `1px solid ${COLORS.border}`,
			borderBottom: 0,
			color: COLORS.text,
			marginBottom: selected && '-1px',

			':hover': {
				backgroundColor: !selected && COLORS.background,
			},
		},
		lego: {
			backgroundColor: selected ? '#fff' : COLORS.hero,
			borderTopLeftRadius: 0,
			borderTopRightRadius: 0,
			border: `1px solid ${selected ? COLORS.border : 'transparent'}`,
			borderBottom: 0,
			color: selected ? COLORS.text : '#fff',
			marginBottom: selected ? '-1px' : '0.125rem',

			':hover': {
				backgroundColor: !selected && COLORS.tints.hero70,
			},
		},
	};

	return {
		label: getLabel('tabcordion-tab-btn'),
		flex: justify ? 1 : 0,
		marginRight: '0.125rem',
		padding: `${SPACING(2)} ${SPACING(3)}`,
		textAlign: 'left',
		textDecoration: 'none',
		transition: 'background 0.3s ease',
		width: '100%',
		cursor: 'pointer',
		...PACKS.typeScale.bodyFont[9],
		...styles[look],

		':last-of-type': {
			marginRight: 0,
		},
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { selected }) => {
	const props = { selected };
	const baseStyles = tabButtonStyles(_, defaultProps);

	let modifiers = getModifier({ ...defaultProps, selected: false }, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = tabButtonStyles(_, { ...props, look: 'soft' });
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

// generating lego look styles for modifier
export const tabBtnLegoStyles = (_) => {
	const baseStyles = tabButtonStyles(_, {});
	const legoStyles = tabButtonStyles(_, { look: 'lego' });
	const selectedLegoStyles = tabButtonStyles(_, { look: 'lego', selected: true });

	const reconLegoStyles = styleReconciler(baseStyles, legoStyles);
	const reconSelectedLegoStyles = styleReconciler(baseStyles, selectedLegoStyles);

	return {
		[`.__convert__${baseStyles.label}`]: reconLegoStyles,
		[`.__convert__${baseStyles.label}-selected`]: reconSelectedLegoStyles,
	};
};
// ==============================
// Attributes
// ==============================

const tabButtonAttributes = (_, { tabId, panelId, selected }) => ({
	id: tabId,
	'aria-controls': panelId,
	'aria-expanded': selected,
});

const blenderAttributes = (_, { selected, panelId }) => ({
	'aria-controls': panelId,
	'aria-expanded': selected,
	'data-js': 'tabcordion-tab-btn__version__',
	className: classNames({ [`__convert__tabcordion-tab-btn-selected`]: selected }),
});

// ==============================
// Exports
// ==============================

export const defaultTabButton = {
	component: TabButton,
	styles: tabButtonStyles,
	attributes: tabButtonAttributes,
};

export const blenderTabButton = {
	component: BlenderTabButton,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
