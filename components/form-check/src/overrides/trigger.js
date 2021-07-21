/** @jsx jsx */

import { jsx, getLabel, useBrand } from '@westpac/core';
import { defaultProps } from '../FormCheck';
import { Button } from '@westpac/button';
import { ExpandMoreIcon } from '@westpac/icon';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

const Trigger = forwardRef(({ state: { revealCount }, ...rest }, ref) => {
	const { COLORS } = useBrand();

	return (
		<Button
			ref={ref}
			look="link"
			size="small"
			iconAfter={ExpandMoreIcon}
			{...rest}
			overrides={{
				Button: {
					styles: (styles) => ({
						...styles,
						color: COLORS.text,
						paddingLeft: 0,
						paddingRight: 0,
						textDecoration: 'none',
					}),
				},
				Icon: {
					styles: (styles) => ({
						...styles,
						color: COLORS.link,
					}),
				},
			}}
		>
			Show {revealCount} {revealCount === 1 ? 'item' : 'items'}
		</Button>
	);
});

// ==============================
// Styles
// ==============================

const triggerStyles = (_, { isOpen }) => {
	return {
		label: getLabel('formCheckReveal-trigger'),
		paddingLeft: 0,
		paddingRight: 0,
		display: isOpen && 'none',
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { block }) => {
	const props = { block };
	const baseStyles = triggerStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = triggerStyles(_, props);
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

const triggerAttributes = (_, { instanceId, isOpen }) => ({
	'aria-controls': `${instanceId}-panel`,
	'aria-expanded': isOpen,
	'aria-hidden': isOpen,
});

// ==============================
// Exports
// ==============================

export const defaultTrigger = {
	component: Trigger,
	styles: triggerStyles,
	attributes: triggerAttributes,
};

export const blenderTrigger = {
	component: Trigger,
	styles: blenderStyles,
	attributes: triggerAttributes,
};
