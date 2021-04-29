/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

const Trigger = forwardRef(({ state: { open }, ...rest }, ref) => (
	<Button
		ref={ref}
		look="link"
		iconAfter={open ? ExpandLessIcon : ExpandMoreIcon}
		{...rest}
		overrides={{
			Button: {
				styles: (styles) => ({
					...styles,
					paddingLeft: 0,
					paddingRight: 0,
					textDecoration: 'none',
				}),
			},
		}}
	/>
));

// ==============================
// Styles
// ==============================

const triggerStyles = () => ({});

// ==============================
// Attributes
// ==============================

const triggerAttributes = (_, { instanceId, open }) => ({
	'aria-controls': instanceId,
	'aria-expanded': open,
});

// ==============================
// Exports
// ==============================

export const defaultTrigger = {
	component: Trigger,
	styles: triggerStyles,
	attributes: triggerAttributes,
};
