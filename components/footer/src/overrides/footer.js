/** @jsx jsx */

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
		backgroundColor: '#fff',
		marginRight: offsetSidebar && [null, null, null, '300px'],
		'::before': {
			content: '""',
			display: 'block',
			backgroundColor: COLORS.primary,
			height: '1px',
		},
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
