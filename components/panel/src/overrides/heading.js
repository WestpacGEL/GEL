/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Heading = ({ look, heading, headingTag: Tag, overrides, ...rest }) => (
	<Tag {...rest} />
);

export const headingStyles = (_, {}) => {
	return {
		margin: 0,
		color: 'inherit',
		fontSize: 'inherit',
		lineHeight: 'inherit',
		fontWeight: 'inherit',
	};
};
