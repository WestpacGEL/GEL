/** @jsx jsx */

import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const Icon = ({ state, icon: Icon, left, right, ...rest }) => <Icon {...rest} />;

// ==============================
// Styles
// ==============================

const iconStyles = (_, { left, right, dropdown, block, hasChildren }) => {
	let label = 'button-icon';

	if (left) label = `button-icon-left`;
	if (right) label = `button-icon-right`;

	return {
		label,
		...(left ? { marginRight: hasChildren && '0.4em' } : null),
		...(right ? { marginLeft: hasChildren && '0.4em' } : null),
		...(dropdown ? { marginLeft: block ? 'auto' : '0.4em' } : null),
	};
};

// ==============================
// Attributes
// ==============================

const iconAttributes = () => ({
	color: 'inherit',
	'aria-hidden': 'true',
	assistiveText: null,
});

// ==============================
// Exports
// ==============================

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};
