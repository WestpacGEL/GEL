import { useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const Footer = (props) => <div {...props} />;

// ==============================
// Styles
// ==============================

const footerStyles = () => {
	const { COLORS } = useBrand();
	return {
		marginTop: 12,
		borderTop: `1px solid #e8e8ed`,
		fontSize: 14,
		padding: '0.5rem 1rem',
		color: COLORS.text,
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
