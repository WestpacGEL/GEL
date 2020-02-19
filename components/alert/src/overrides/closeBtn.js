/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';

export const CloseBtn = ({
	open,
	look,
	dismissible,
	icon,
	heading,
	headingTag,
	onClose,
	...rest
}) => {
	const { COLORS } = useBrand();

	return (
		<Button onClick={() => onClose()} iconAfter={CloseIcon} look="link" size="small" {...rest} />
	);
};

export const closeBtnStyles = (_, {}) => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	return mq({
		color: 'inherit',
		position: 'absolute',
		zIndex: 1,
		top: SPACING(1, 'minor'),
		right: SPACING(1),
		opacity: 1,

		':hover': {
			opacity: 0.8,
		},
	})[0];
};
