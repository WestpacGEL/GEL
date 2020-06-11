/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { Heading } from '@westpac/heading';

const PanelHeading = ({ state: { headingTag }, ...rest }) => (
	<Heading tag={headingTag} size={9} {...rest} />
);

const headingStyles = () => {
	const { TYPE } = useBrand();

	return {
		label: getLabel('panel-heading'),
		color: 'inherit',
		...TYPE.bodyFont[400],
	};
};

const headingAttributes = () => null;

export const defaultHeading = {
	component: PanelHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};
