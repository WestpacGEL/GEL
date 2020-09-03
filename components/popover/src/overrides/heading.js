/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { Heading } from '@westpac/heading';

const PopoverHeading = ({ state: { headingTag }, ...rest }) => (
	<Heading size={9} tag={headingTag} {...rest} />
);

const headingStyles = () => {
	const { SPACING, COLORS, TYPE } = useBrand();

	return {
		label: getLabel('popover-heading'),
		marginBottom: SPACING(2),
		color: COLORS.neutral,
		...TYPE.bodyFont[500],
	};
};

const headingAttributes = () => null;

export const defaultHeading = {
	component: PopoverHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};
