/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Body } from '@westpac/body';

export const PopoverBody = ({
	open,
	heading,
	headingTag,
	content,
	dismissible,
	position,
	instanceId,
	...rest
}) => <Body {...rest} />;

export const bodyStyles = (_, {}) => {
	const { COLORS } = useBrand();
	return {
		color: COLORS.neutral,
	};
};
