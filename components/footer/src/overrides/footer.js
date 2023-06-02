import { jsx, useBrand, getLabel, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

const Footer = ({ state: _, ...rest }) => <footer {...rest} />;

// ==============================
// Styles
// ==============================

const footerStyles = (_, { offsetSidebar }) => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('footer'),
		position: 'relative',
		overflow: 'hidden',
		backgroundColor: COLORS.white,
		marginRight: offsetSidebar && [null, null, null, '300px'],
		borderTop: `1px solid ${COLORS.primary}`,
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
