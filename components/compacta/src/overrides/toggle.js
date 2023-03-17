import { jsx, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';
import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const Toggle = ({ open, state: _, ...rest }) => (
	<Button
		look="link"
		size="large"
		soft
		iconAfter={open ? ExpandLessIcon : ExpandMoreIcon}
		{...rest}
	/>
);

// ==============================
// Styles
// ==============================

const toggleStyles = () => ({
	label: getLabel('compacta-toggle'),
	marginLeft: 'auto',
	padding: 0,
});

// ==============================
// Attributes
// ==============================

const toggleAttributes = (_, { id, open }) => ({
	'aria-expanded': open,
	'aria-controls': id,
});

// ==============================
// Exports
// ==============================

export const defaultToggle = {
	component: Toggle,
	styles: toggleStyles,
	attributes: toggleAttributes,
};
