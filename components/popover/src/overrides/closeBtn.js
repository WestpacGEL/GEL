/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Button } from '@westpac/button';

export const CloseBtn = ({ open, title, content, dismissible, position, icon, ...rest }) => (
	<Button iconAfter={icon} look="link" {...rest} />
);

export const closeBtnStyles = (_, {}) => {
	const { SPACING } = useBrand();
	return {
		position: 'absolute',
		top: SPACING(1, true),
		right: SPACING(1),
		color: '#fff',
		':hover': {
			opacity: 0.8,
		},
	};
};
