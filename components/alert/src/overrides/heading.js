/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import React from 'react';

export const AlertHeading = ({ state: { headingTag }, ...rest }) => (
	<Heading size={7} tag={headingTag} {...rest} />
);

export const headingStyles = (_, {}) => {
	const { SPACING } = useBrand();

	return {
		marginBottom: SPACING(2),
	};
};

const headingAttibutes = () => null;

export const defaultHeading = {
	component: AlertHeading,
	styles: headingStyles,
	attributes: headingAttibutes,
};
