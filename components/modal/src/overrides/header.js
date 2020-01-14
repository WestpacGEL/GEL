/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Header = ({ heading, open, onClose, size, dismissible, overrides, ...rest }) => (
	<div {...rest} />
);

export const headerStyles = (_, {}) => {
	const { COLORS } = useBrand();
	return {
		borderBottom: `1px solid ${COLORS.hero}`,
		padding: '1.5rem 2.25rem 1.125rem 1.5rem',
	};
};
