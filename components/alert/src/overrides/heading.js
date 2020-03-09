/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import React from 'react';

export const AlertHeading = ({ state: { headingTag, heading }, ...rest }) => (
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
		color: `${styleMap[look]} !important`,
	};
};

const headingAttibutes = () => null;

export const defaultHeading = {
	component: AlertHeading,
	styles: headingStyles,
	attributes: headingAttibutes,
};
