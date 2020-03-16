/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Footer = ({ state, ...rest }) => <div {...rest} />;

const footerStyles = () => {
	const { COLORS } = useBrand();

	return {
		backgroundColor: COLORS.background,
		borderTop: `1px solid ${COLORS.border}`,
		textAlign: 'right',
		padding: '0.75rem 1.125rem',

		'button + button': {
			marginLeft: '0.375rem',
		},
	};
};

const footerAttributes = () => null;

export const defaultFooter = {
	component: Footer,
	styles: footerStyles,
	attributes: footerAttributes,
};
