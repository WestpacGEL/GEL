/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { CloseIcon } from '@westpac/icon';
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
}) => {
	const { COLORS } = useBrand();

	const styleMap = {
		success: COLORS.success,
		info: COLORS.info,
		warning: COLORS.warning,
		danger: COLORS.danger,
		system: '#000',
	};

	return (
		<Button type="button" onClick={() => onClose()} iconAfter={icon} look="link" {...rest}>
			<CloseIcon color={styleMap[look]} size="small" />
		</Button>
	);
};

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
