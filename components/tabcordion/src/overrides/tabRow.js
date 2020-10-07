/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx, getLabel, classNames, getModifier } from '@westpac/core';

import { defaultProps } from '../blender/Tabcordion';
// ==============================
// Component
// ==============================

const TabRow = forwardRef(({ state: _, ...rest }, ref) => <div ref={ref} {...rest} />);

// ==============================
// Styles
// ==============================

const tabRowStyles = () => ({
	label: getLabel('tabcordion-tab-row'),
	display: 'flex',
	whiteSpace: 'nowrap',
	position: 'relative',
});

const blenderStyles = (_, { justify }) => {
	const props = { justify };
	const baseStyles = tabRowStyles();

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	return {
		label: `${baseStyles.label}-justify`,
		[`.__convert__tabcordion-tab-btn`]: {
			flex: 1,
		},
	};
};
// ==============================
// Attributes
// ==============================

const tabRowAttributes = (_, {}) => ({ role: 'tablist' });

const blenderAttributes = (_, { justify }) => ({
	...tabRowAttributes(_, {}),
	className: classNames({ [`__convert__tabcordion-tab-row-justify`]: justify }),
});
// ==============================
// Exports
// ==============================

export const defaultTabRow = {
	component: TabRow,
	styles: tabRowStyles,
	attributes: tabRowAttributes,
};

export const blenderTabRow = {
	component: TabRow,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
