/** @jsx jsx */

import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import { jsx, useBrand } from '@westpac/core';

const AccordionIcon = ({ state, ...rest }) => {
	const { COLORS } = useBrand();
	const Icon = state.hidden ? ExpandMoreIcon : ExpandLessIcon;

	return <Icon color={COLORS.muted} size="small" {...rest} />;
};

const accordionIconStyles = () => ({});

export const defaultAccordionIcon = {
	component: AccordionIcon,
	styles: accordionIconStyles,
	attributes: () => null,
};
