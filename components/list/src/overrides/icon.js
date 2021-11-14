/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Icon = ({ state: { icon: Icon, look }, ...rest }) => {
	const { COLORS } = useBrand();

	const colorMap = {
		primary: COLORS.primary,
		hero: COLORS.hero,
		neutral: COLORS.neutral,
		link: COLORS.link,
	};

	return <Icon size="small" color={colorMap[look] || COLORS.muted} {...rest} />;
};

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

const iconStyles = () => ({
	label: getLabel('list-item-icon'),
	position: 'absolute',
	top: 0,
	left: 0,
});

// ==============================
// Attributes
// ==============================

const iconAttributes = () => null;

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
