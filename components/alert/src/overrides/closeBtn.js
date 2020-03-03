/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';

export const CloseBtn = ({
	open,
	look,
	dismissible,
	onClose,
	icon,
	heading,
	headingTag,
	...rest
}) => (
	<Button
		onClick={event => onClose(event)}
		iconAfter={CloseIcon}
		look="link"
		size="medium"
		{...rest}
	/>
);

export const closeBtnStyles = (_, {}) => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	return mq({
		color: 'inherit',
		position: 'absolute',
		zIndex: 1,
		top: 0,
		right: SPACING(1),
		opacity: 1,

		':hover': {
			opacity: 0.8,
		},
	})[0];
};
