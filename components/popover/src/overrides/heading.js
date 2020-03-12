/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';

const PopoverHeading = ({ state: { headingTag }, ...rest }) => (
	<Heading size={8} tag={headingTag} {...rest} />
);

const headingStyles = (_, {}) => {
	const { SPACING, COLORS } = useBrand();
	return {
		marginBottom: SPACING(2),
		color: COLORS.neutral,
		fontWeight: 500,
	};
};

const headingAttributes = () => null;

export const defaultHeading = {
	component: PopoverHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};
