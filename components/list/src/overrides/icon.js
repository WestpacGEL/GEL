/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Icon = ({ state: { icon: Icon, look }, ...rest }) => {
	const { COLORS } = useBrand();

	const colorMap = {
		primary: COLORS.primary,
		hero: COLORS.hero,
		neutral: COLORS.neutral,
	};

	return <Icon size="small" color={colorMap[look] || COLORS.muted} {...rest} />;
};

const iconStyles = () => ({
	position: 'absolute',
	top: 0,
	left: 0,
});

const iconAttributes = () => null;

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};
