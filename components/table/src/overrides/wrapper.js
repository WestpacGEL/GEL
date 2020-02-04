/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Wrapper = ({ striped, bordered, ...props }) => <div {...props} />;

export const wrapperStyles = (_, {}) => {
	const { COLORS } = useBrand();

	return {
		'@media screen and (max-width: 480px)': {
			width: '100%',
			marginBottom: '1.125rem',
			overflowY: 'hidden',
			overflowX: 'auto',
			border: `1px solid ${COLORS.border}`,
		},
	};
};
