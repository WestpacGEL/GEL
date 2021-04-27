/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import { forwardRef } from 'react';

// ==============================
// Component
// ==============================

const Toggle = forwardRef(({ state: { open }, ...rest }, ref) => (
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
					border: 0,
				}),
			},
		}}
	/>
));

// ==============================
// Styles
// ==============================

const toggleStyles = () => ({});

// ==============================
// Attributes
// ==============================

const toggleAttributes = (_, { instanceId, open }) => ({
	'aria-controls': instanceId,
	'aria-expanded': open,
});

// ==============================
// Exports
// ==============================

export const defaultToggle = {
	component: Toggle,
	styles: toggleStyles,
	attributes: toggleAttributes,
};
