/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import React from 'react';

export const AlertHeading = ({
	look,
	dismissible,
	icon,
	heading,
	headingTag,
	open,
	overrides,
	children,
	...rest
}) => (
	<Heading size={7} tag={headingTag} {...rest}>
		{heading}
	</Heading>
);

export const headingStyles = (_, { look }) => {
	const { SPACING, COLORS } = useBrand();

	const styleMap = {
		success: COLORS[look],
		info: COLORS[look],
		warning: COLORS[look],
		danger: COLORS[look],
		system: 'black',
	};

	return {
		marginBottom: SPACING(2),
		color: `${styleMap[ look]} !important`,
	};
};
