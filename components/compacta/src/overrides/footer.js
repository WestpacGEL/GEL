import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Footer = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const footerStyles = () => ({
	label: getLabel('repeater-footer'),
	display: 'flex',
	paddingTop: '0.5rem',
});

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
