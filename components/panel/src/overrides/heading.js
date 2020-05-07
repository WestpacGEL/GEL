/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';

const PanelHeading = ({ state: { headingTag }, ...rest }) => (
	<Heading tag={headingTag} size={8} {...rest} />
);

const headingStyles = (_, { look }) => {
	const { COLORS, TYPE } = useBrand();

	const styleMap = {
		hero: {
			color: '#fff',
		},
		faint: {
			color: COLORS.text,
		},
	};

	return {
		color: styleMap[look].color,
		...TYPE.bodyFont[400],
	};
};

const headingAttributes = () => null;

export const defaultHeading = {
	component: PanelHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};
