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
		label: getLabel('modal-footer'),
		backgroundColor: COLORS.background,
		borderTop: `1px solid ${COLORS.border}`,
		textAlign: 'right',
		padding: '0.75rem 1.125rem',

		'button + button': {
			marginLeft: '0.375rem',
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
