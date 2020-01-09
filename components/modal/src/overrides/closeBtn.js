/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Button } from '@westpac/button';

export const CloseBtn = ({ open, heading, size, dismissible, icon, ...props }) => (
	<Button iconAfter={icon} look="link" {...props} />
);

export const closeBtnStyles = (_, {}) => {
	const { COLORS } = useBrand();
	return {
		position: 'absolute',
		top: '0.375rem',
		right: '0.75rem',
		color: COLORS.text,
		':hover svg': {
			opacity: 0.5,
		},
	};
};
