/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Footer = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const footerStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('formPod-footer'),
		display: 'flex',
		alignItems: 'center',
		height: '3.375rem', //Nb. there's no min-height with flex in IE
		backgroundColor: COLORS.light,
		padding: '0.75rem',
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
