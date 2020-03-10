/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';

export const PanelHeading = ({ look, heading, headingTag, overrides, ...rest }) => (
	<Heading tag={headingTag} size={8} {...rest} />
);

export const headingStyles = (_, { look }) => {
	const { COLORS } = useBrand();

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
		fontWeight: 'normal',
	};
};
