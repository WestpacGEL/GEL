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
	const iconAssistiveText = hidden ? 'Show More' : 'Show Less';

	return <Icon color={COLORS.muted} assistiveText={iconAssistiveText} size="small" {...rest} />;
};

export const accordionIconStyles = () => ({});
