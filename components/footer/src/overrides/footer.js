/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Footer = ({ state: _, ...rest }) => <footer {...rest} />;

// ==============================
// Styles
// ==============================

const footerStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('footer'),
		position: 'relative',
		overflow: 'hidden',
		backgroundColor: '#fff',
		'::before': {
			content: '""',
			display: 'block',
			backgroundColor: COLORS.primary,
			height: '1px',
		},
	};
};

// ==============================
// Attributes
// ==============================

const footerAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultFooter = {
	component: Footer,
	styles: footerStyles,
	attributes: footerAttributes,
};
