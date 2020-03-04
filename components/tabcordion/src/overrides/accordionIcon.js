/** @jsx jsx */

import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import { jsx, useBrand } from '@westpac/core';

export const AccordionIcon = ({
	hidden,
	look,
	last,
	selected,
	text,
	mode,
	panelId,
	tabId,
	...rest
}) => {
	const { COLORS } = useBrand();
	const Icon = hidden ? ExpandMoreIcon : ExpandLessIcon;

	return <Icon color={COLORS.muted} size="small" {...rest} />;
};

export const accordionIconStyles = () => ({});
