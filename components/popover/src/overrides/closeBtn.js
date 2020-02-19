/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';

export const CloseBtn = ({ open, heading, content, dismissible, position, ...rest }) => (
	<Button iconAfter={CloseIcon} look="link" size="small" {...rest} />
);

export const closeBtnStyles = (_, {}) => {
	const { COLORS, SPACING } = useBrand();
	return {
		position: 'absolute',
		zIndex: 1,
		top: SPACING(1, true),
		right: SPACING(1),
		color: COLORS.text,

		':hover': {
			opacity: 0.8,
		},
	};
};
