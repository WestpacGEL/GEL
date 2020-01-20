/** @jsx jsx */

import { ExpandLessIcon, ExpandMoreIcon } from '@westpac/icon';
import { jsx, useBrand } from '@westpac/core';

export const AccordionIcon = ({ look, last, selected, mode, hidden, ...rest }) => {
	const { COLORS } = useBrand();
	const Icon = hidden ? ExpandMoreIcon : ExpandLessIcon;

	return <Icon color={COLORS.muted} assistiveText={null} size="small" {...rest} />;
};

export const accordionIconStyles = (_, {}) => {
	return {};
};
