/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';

const AccordionButtonIcon = ({ state, ...rest }) => {
	const { COLORS } = useBrand();
	const Icon = state.hidden ? ExpandMoreIcon : ExpandLessIcon;

	return <Icon color={COLORS.muted} size="small" assistiveText={null} {...rest} />;
};

const accordionButtonIconStyles = () => ({});

const accordionButtonIconAttributes = () => ({ 'aria-hidden': 'true' });

export const defaultAccordionButtonIcon = {
	component: AccordionButtonIcon,
	styles: accordionButtonIconStyles,
	attributes: accordionButtonIconAttributes,
};
