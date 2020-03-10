/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';

export const CloseBtn = ({
	open,
	heading,
	headingTag,
	content,
	dismissible,
	position,
	instanceId,
	...rest
}) => <Button iconAfter={CloseIcon} look="link" size="medium" {...rest} />;

export const closeBtnStyles = (_, {}) => {
	const { COLORS, SPACING } = useBrand();
	return {
		position: 'absolute',
		zIndex: 1,
		top: 0,
		right: SPACING(1),
		color: COLORS.text,

		':hover': {
			opacity: 0.8,
		},
	};
};
