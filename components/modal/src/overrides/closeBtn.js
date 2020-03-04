/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';

export const CloseBtn = ({ heading, open, onClose, size, dismissible, ...rest }) => (
	<Button iconAfter={CloseIcon} look="link" size="medium" {...rest} />
);

export const closeBtnStyles = (_, {}) => {
	const { COLORS, SPACING } = useBrand();
	return {
		position: 'absolute',
		zIndex: 1,
		top: SPACING(1),
		right: SPACING(2),
		color: COLORS.text,

		':hover': {
			opacity: 0.8,
		},
	};
};
