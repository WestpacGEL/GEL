/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import React from 'react';

export const CloseBtn = ({
	onClose,
	look,
	dismissible,
	icon,
	heading,
	headingTag,
	open,
	overrides,
	...rest
}) => (
	<Button onClick={() => onClose()} iconAfter={icon} look="link" {...rest} />
);

export const closeBtnStyles = (_, {}) => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	return mq({
		color: 'inherit',
		position: ['relative', 'absolute'],
		zIndex: 1,
		float: ['right', 'none'],
		top: SPACING(1, 'minor'),
		right: SPACING(1),
		marginTop: [`-${SPACING(3, 'major')}`, 0],
		marginRight: [`-${SPACING(3, 'major')}`, 0],
		opacity: 1,

		':hover': {
			opacity: 0.5,
		},
	})[0];
};
