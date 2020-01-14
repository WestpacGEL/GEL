/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Footer = ({ heading, open, onClose, size, dismissible, overrides, ...rest }) => (
	<div {...rest} />
);

export const footerStyles = (_, {}) => {
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
