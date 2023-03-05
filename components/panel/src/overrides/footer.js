import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Footer = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const footerStyles = () => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('panel-footer'),
		padding: ['0.625rem 0.75rem', null, '0.625rem 1.5rem'],
		backgroundColor: COLORS.light,
		borderTop: `1px solid ${COLORS.border}`,
		borderBottomRightRadius: `calc(0.1875rem - 1px)`,
		borderBottomLeftRadius: `calc(0.1875rem - 1px)`,
	})[0];
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
