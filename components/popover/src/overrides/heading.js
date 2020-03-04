/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';

export const PopoverHeading = ({
	open,
	heading,
	headingTag,
	content,
	dismissible,
	position,
	...rest
}) => <Heading size={8} tag={headingTag} {...rest} />;

export const headingStyles = (_, {}) => {
	const { SPACING, COLORS } = useBrand();
	return {
		marginBottom: SPACING(2),
		color: COLORS.neutral,
		fontWeight: 500,
	};
};
