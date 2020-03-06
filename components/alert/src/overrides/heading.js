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
	...rest
}) => <Heading tag={headingTag} size={7} {...rest} />;

export const headingStyles = (_, {}) => {
	const { SPACING } = useBrand();

	return {
		marginBottom: SPACING(2),
	};
};
