import { jsx, getLabel, classNames, getModifier, formatClassName } from '@westpac/core';
import { forwardRef } from 'react';

import { Tabcordion as MainTabcordion } from '../blender/Tabcordion';
const defaultProps = MainTabcordion.defaultProps || {};
// ==============================
// Component
// ==============================

const TabRow = forwardRef(({ state: _, ...rest }, ref) => <div ref={ref} {...rest} />);
TabRow.displayName = 'TabRow';

const BlenderTabRow = forwardRef(({ state: _, className, ...rest }, ref) => (
	<div ref={ref} className={formatClassName(className)} {...rest} />
));
BlenderTabRow.displayName = 'BlenderTabRow';

// ==============================
// Styles
// ==============================

const tabRowStyles = () => ({
	label: getLabel('tabcordion-tabRow'),
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
		[`.__convert__tabcordion-tabBtn`]: {
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
	className: classNames({ [`__convert__tabcordion-tabRow-justify`]: justify }),
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
	component: BlenderTabRow,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
