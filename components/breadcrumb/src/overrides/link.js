/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Link = ({ state: { tag: Tag }, ...rest }) => {
	return (Tag && <Tag {...rest} />) || <a {...rest} />;
};

// ==============================
// Styles
// ==============================

const linkStyles = () => {
	const { COLORS } = useBrand();

	return {
		// Normalize
		// =========

		// Remove the gray background on active links in IE 10.
		// a:
		backgroundColor: 'transparent',
		// =========

		label: getLabel('breadcrumb-link'),
		color: COLORS.text,
		textDecoration: 'none',
		verticalAlign: 'middle',
		display: 'inline',

		':focus, :hover': {
			textDecoration: 'underline',
		},
	};
};

// ==============================
// Attributes
// ==============================

const linkAttributes = (_, { current }) => ({
	'aria-current': current ? 'page' : undefined,
});

// ==============================
// Exports
// ==============================

export const defaultLink = {
	component: Link,
	styles: linkStyles,
	attributes: linkAttributes,
};
