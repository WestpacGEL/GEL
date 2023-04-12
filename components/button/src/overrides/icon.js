import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const Icon = ({ icon: Icon, before, after, state: _, ...rest }) => (
	<Icon copyrightYear="2020" {...rest} />
);

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

	if (before && hasChildren) label = `button-icon-before`;
	if (after && hasChildren) label = `button-icon-after`;
	if (dropdown) label = block ? `button-icon-dropdown-block` : `button-icon-dropdown-block`;

	return {
		label,
		...(before ? { marginRight: hasChildren && '0.4em' } : null),
		...(after ? { marginLeft: hasChildren && '0.4em' } : null),
		...(dropdown ? { marginLeft: block ? 'auto' : '0.5em' } : null),
	};
};

// ==============================
// Attributes
// ==============================

const iconAttributes = (_, { iconColor }) => ({
	color: iconColor ? iconColor : 'inherit',
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
