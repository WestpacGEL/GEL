/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Link = ({ state, ...rest }) => <a {...rest} />;

const linkStyles = (_, { current }) => {
	const { COLORS } = useBrand();

	return {
		color: COLORS.text,
		boxSizing: 'border-box',
		textDecoration: 'none',
		verticalAlign: 'middle',
		cursor: current ? 'auto' : 'pointer',
		appearance: 'none',
		background: 'none',
		border: 'none',
		padding: 0,
		margin: 0,
		display: 'inline',

		':focus, :hover': {
			textDecoration: current ? 'none' : 'underline',
		},
	};
};

const linkAttributes = (_, { current, href }) => ({
	href: href || '#0',
	'aria-current': current ? 'page' : undefined,
});

export const defaultLink = {
	component: Link,
	styles: linkStyles,
	attributes: linkAttributes,
};
