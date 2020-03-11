/** @jsx jsx */

import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import { jsx, useBrand } from '@westpac/core';

const AccordionIcon = ({ state, ...rest }) => {
	const { COLORS } = useBrand();
	const Icon = state.hidden ? ExpandMoreIcon : ExpandLessIcon;

	return <Icon color={COLORS.muted} size="small" assistiveText={null} {...rest} />;
};

const accordionIconStyles = () => ({});

const accordionIconAttributes = (_, {}) => ({ 'aria-hidden': 'true' });

export const defaultAccordionIcon = {
	component: AccordionIcon,
	styles: accordionIconStyles,
	attributes: accordionIconAttributes,
};
