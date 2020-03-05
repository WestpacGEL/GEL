/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';

export const ButtonDropdownHeading = ({ tag, ...rest }) => <Heading size={9} tag={tag} {...rest} />;

export const buttonDropdownHeadingStyles = (_, {}) => {
	const { COLORS } = useBrand();

	return {
		margin: '1.5rem -0.375rem 1.125rem -0.375rem',
		padding: '0.4375rem',
		backgroundColor: COLORS.background,
		color: COLORS.hero,
		fontWeight: '500', // what is the correct way to do this??
		// fontSize: '0.75rem',

		':first-child': {
			marginTop: '-0.375rem',
		},
	};
};
