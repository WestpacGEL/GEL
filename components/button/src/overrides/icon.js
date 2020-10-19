/** @jsx jsx */

import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const Icon = ({ icon: Icon, before, after, state: _, ...rest }) => <Icon {...rest} />;

const BlenderIcon = (props) => (
	<Icon
		overrides={{
			Icon: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
			},
		}}
		{...props}
	/>
);

// ==============================
// Styles
// ==============================

const iconStyles = (_, { before, after, dropdown, block, hasChildren }) => {
	let label = 'button-icon';

	if (before) label = `button-icon-left`;
	if (after) label = `button-icon-right`;
	if (dropdown) label = `button-icon-dropdown`;

	return {
		label,
		...(before ? { marginRight: hasChildren && '0.4em' } : null),
		...(after ? { marginLeft: hasChildren && '0.4em' } : null),
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

export const blenderIcon = {
	component: BlenderIcon,
	styles: iconStyles,
	attributes: iconAttributes,
};
