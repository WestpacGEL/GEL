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

const TabBtn = forwardRef(({ state: _, ...rest }, ref) => {
	return <button type="button" ref={ref} {...rest} />;
});
TabBtn.displayName = 'TabBtn';

const BlenderTabBtn = forwardRef(({ state: _, className, ...rest }, ref) => {
	return <button type="button" ref={ref} className={formatClassName(className)} {...rest} />;
});
BlenderTabBtn.displayName = 'BlenderTabBtn';

// ==============================
// Styles
// ==============================

const tabBtnStyles = (_, { look, justify, selected }) => {
	const { COLORS, SPACING, PACKS } = useBrand();

	const styleMap = {
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
		// Normalize
		// ==========

		// 1. Change the font styles in all browsers.
		// 2. Remove the margin in Firefox and Safari.
		// button, input, optgroup, select, textarea:
		fontFamily: 'inherit', // 1
		fontSize: '100%', // 1
		lineHeight: 1.15, // 1
		margin: 0, // 2

		// Show the overflow in IE
		// button, input:
		overflow: 'visible',

		// Remove the inheritance of text transform in Edge, Firefox, and IE.
		// button, select:
		textTransform: 'none',

		// Remove the inner border and padding in Firefox.
		// button::-moz-focus-inner:
		'&::-moz-focus-inner': {
			borderStyle: 'none',
			padding: 0,
		},
		// =========

		label: getLabel('tabcordion-tabBtn'),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		flex: justify ? 1 : 0,
		marginRight: '0.125rem',
		padding: `${SPACING(2)} ${SPACING(3)}`,
		borderRadius: 0,
		textAlign: 'left',
		textDecoration: 'none',
		transition: 'background 0.3s ease',
		width: '100%',
		appearance: 'none',
		cursor: 'pointer',
		touchAction: 'manipulation',
		userSelect: 'none',
		...PACKS.typeScale.bodyFont[9],
		...styleMap[look],

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
	const baseStyles = tabBtnStyles(_, defaultProps);

	let modifiers = getModifier({ ...defaultProps, selected: false }, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = tabBtnStyles(_, { ...props, look: 'soft' });
	let reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		case 'selected':
			label = `${label}-active`;
			reconciledStyles = {
				...reconciledStyles,
				...{ ':hover': { backgroundColor: '#fff !important' } },
			};
			break;
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return { label, ...reconciledStyles };
};

// generating lego look styles for modifier
export const tabBtnLegoStyles = (_) => {
	const baseStyles = tabBtnStyles(_, {});
	const legoStyles = tabBtnStyles(_, { look: 'lego' });
	const selectedLegoStyles = tabBtnStyles(_, { look: 'lego', selected: true });

	const reconLegoStyles = styleReconciler(baseStyles, legoStyles);
	const reconSelectedLegoStyles = styleReconciler(baseStyles, selectedLegoStyles);

	return {
		[`.__convert__${baseStyles.label}`]: reconLegoStyles,
		[`.__convert__${baseStyles.label}-active`]: reconSelectedLegoStyles,
	};
};

// ==============================
// Attributes
// ==============================

const tabBtnAttributes = (_, { tabId, panelId, selected }) => ({
	id: tabId,
	'aria-controls': panelId,
	'aria-expanded': selected,
});

const blenderAttributes = (_, { selected, panelId }) => ({
	'aria-controls': panelId,
	'aria-expanded': selected,
	'data-js': 'tabcordion-tabBtn__version__',
	className: classNames({ [`__convert__tabcordion-tabBtn-active`]: selected }),
});

// ==============================
// Exports
// ==============================

export const defaultTabBtn = {
	component: TabBtn,
	styles: tabBtnStyles,
	attributes: tabBtnAttributes,
};

export const blenderTabBtn = {
	component: BlenderTabBtn,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
