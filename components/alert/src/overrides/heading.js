/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import React from 'react';

export const AlertHeading = ({
	open,
	look,
	dismissible,
	onClose,
	icon,
	heading,
	headingTag,
	children,
	...rest
}) => (
	<Heading size={7} tag={headingTag} {...rest}>
		{heading}
	</Heading>
);

export const headingStyles = (_, {}) => {
	const { SPACING } = useBrand();

	return {
		marginBottom: SPACING(2),
	};
};
