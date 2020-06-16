/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

const Icon = ({ state: { icon: Icon }, ...rest }) => {
	const { COLORS } = useBrand();
	return <Icon size="small" color={COLORS.muted} {...rest} />;
};

const iconStyles = () => ({
	label: getLabel('list-icon'),
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
