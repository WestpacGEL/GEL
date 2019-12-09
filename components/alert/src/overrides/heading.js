/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import React from 'react';

export const AlertHeading = ({ tag, children, dismissible, icon, headingTag, ...rest }) => (
	<Heading size={7} tag={tag} {...rest}>
		{children}
	</Heading>
);

export const headingStyles = () => {
	const { SPACING } = useBrand();

	return { marginBottom: SPACING(2) };
}
