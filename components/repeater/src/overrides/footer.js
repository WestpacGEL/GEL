import { jsx, getLabel, useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const Footer = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const footerStyles = (_, { separator }) => {
	const { COLORS } = useBrand();
	return {
		label: getLabel('repeater-footer'),
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: separator && '0.875rem',
		borderTop: separator && `2px solid ${COLORS.neutral}`,
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
