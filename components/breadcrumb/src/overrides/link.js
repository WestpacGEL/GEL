/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

const Link = ({ state: { tag: Tag }, ...rest }) => {
	return (typeof Tag === 'function' && <Tag {...rest} />) || <a {...rest} />;
};

const linkStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('breadcrumb-link'),
		color: COLORS.text,
		boxSizing: 'border-box',
		textDecoration: 'none',
		verticalAlign: 'middle',
		cursor: 'pointer',
		appearance: 'none',
		background: 'none',
		border: 'none',
		padding: 0,
		margin: 0,
		display: 'inline',

		':focus, :hover': {
			textDecoration: 'underline',
		},
	};
};

const linkAttributes = (_, { current }) => ({
	'aria-current': current ? 'page' : undefined,
});

export const defaultLink = {
	component: Link,
	styles: linkStyles,
	attributes: linkAttributes,
};
