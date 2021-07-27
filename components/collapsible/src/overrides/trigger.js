/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';
import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

const Trigger = forwardRef(({ state: { isOpen, size }, ...rest }, ref) => {
	const { COLORS } = useBrand();

	return (
		<Button
			ref={ref}
			look="link"
			size={size}
			iconAfter={isOpen ? ExpandLessIcon : ExpandMoreIcon}
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
		/>
	);
});

const BlenderTrigger = forwardRef((props, ref) => (
	<Trigger
		ref={ref}
		iconAfter={ExpandMoreIcon}
		overrides={{
			Button: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					blenderStyles.label = 'collapsible-trigger';
					return blenderStyles;
				},
			},
		}}
		{...props}
	/>
));

// ==============================
// Styles
// ==============================

const triggerStyles = () => ({
	label: getLabel('collapsible-trigger'),
});

// ==============================
// Attributes
// ==============================

const triggerAttributes = (_, { instanceId, open }) => ({
	'aria-controls': instanceId,
	'aria-expanded': open,
});

const blenderAttributes = (_, props) => ({
	...triggerAttributes(_, props),
	'data-js': 'collapsible__version__',
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
	styles: triggerStyles,
	attributes: blenderAttributes,
};
