/** @jsx jsx */

import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import { jsx, useBrand } from '@westpac/core';

const AccordionButtonIcon = ({ state, ...rest }) => {
	const { COLORS } = useBrand();
	const Icon = state.hidden ? ExpandMoreIcon : ExpandLessIcon;

	return <Icon color={COLORS.muted} size="small" assistiveText={null} {...rest} />;
};

const accordionButtonIconStyles = () => ({});

const accordionButtonIconAttributes = (_, {}) => ({ 'aria-hidden': 'true' });

export const defaultAccordionButtonIcon = {
	component: AccordionButtonIcon,
	styles: accordionButtonIconStyles,
	attributes: accordionButtonIconAttributes,
};
