/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { Heading } from '@westpac/heading';

const AlertHeading = ({ state: { headingTag }, ...rest }) => (
	<Heading size={7} tag={headingTag} {...rest} />
);

const headingStyles = () => {
	const { SPACING } = useBrand();

	return {
		label: getLabel('Alert-heading'),
		marginBottom: SPACING(2),
	};
};

const headingAttibutes = () => null;

export const defaultHeading = {
	component: AlertHeading,
	styles: headingStyles,
	attributes: headingAttibutes,
};
