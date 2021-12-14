/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Fragment } from 'react';

// ==============================
// Component
// ==============================

const Link = ({ state: _, ...rest }) => <a {...rest} />;

// ==============================
// Styles
// ==============================

const linkStyles = (_, { type, underline }) => {
	const { COLORS } = useBrand();

	return {
		// Normalize
		// =========

		// Remove the gray background on active links in IE 10.
		// a:
		backgroundColor: 'transparent',
		// =========

		label: 'link',
		color: type === 'inline' ? COLORS.link : COLORS.text,
		textDecoration: type === 'inline' && underline ? 'underline' : 'none',
		display: 'inline-flex',
		alignItems: type === 'standalone' ? 'center' : 'baseline',
		':hover': {
			textDecoration: 'underline',
		},
	};
};

// ==============================
// Attributes
// ==============================

const linkAttributes = (_, { href }) => ({
	href,
});

// ==============================
// Exports
// ==============================

export const defaultLink = {
	component: Link,
	styles: linkStyles,
	attributes: linkAttributes,
};
