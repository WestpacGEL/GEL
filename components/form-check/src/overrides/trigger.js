/** @jsx jsx */

import { jsx, getLabel, useBrand } from '@westpac/core';
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

// Moved icon styling to button to avoid clashing icon class names
const BlenderTrigger = forwardRef(({ state: { revealCount }, ...rest }, ref) => {
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
					styles: (styles) => {
						const blenderStyles = { ...styles };
						delete blenderStyles.label;
						return {
							...blenderStyles, // ensuring classname to be 'formCheckReveal-trigger'
							color: COLORS.text,
							paddingLeft: 0,
							paddingRight: 0,
							textDecoration: 'none',
						};
					},
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
		display: isOpen && 'none',
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { isOpen }) => {
	const { COLORS } = useBrand();
	return {
		...triggerStyles(_, { isOpen }),
		svg: {
			color: COLORS.link,
		},
	};
};

// ==============================
// Attributes
// ==============================

const triggerAttributes = (_, { instanceId, isOpen }) => ({
	'aria-controls': `${instanceId}-panel`,
	'aria-expanded': isOpen,
	'aria-hidden': isOpen,
});

const blenderAttributes = (_, props) => ({
	...triggerAttributes(_, props),
	'data-js': 'formCheckReveal-trigger__version__',
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
	component: BlenderTrigger,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
