/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { Body } from '@westpac/body';

const PopoverBody = ({ state: _, ...rest }) => <Body {...rest} />;

const bodyStyles = (_, {}) => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('popover-body'),
		color: COLORS.neutral,
	};
};

const bodyAttributes = () => null;

export const defaultBody = {
	component: PopoverBody,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
