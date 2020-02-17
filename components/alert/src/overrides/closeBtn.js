/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { CloseIcon } from '@westpac/icon';
import { Button } from '@westpac/button';

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

	const styleMap = {
		success: COLORS.success,
		info: COLORS.info,
		warning: COLORS.warning,
		danger: COLORS.danger,
		system: '#000',
	};

	return (
		<Button onClick={() => onClose()} iconAfter={icon} look="link" aria-label="Close" {...rest}>
			<CloseIcon color={styleMap[look]} size="small" assistiveText={null} aria-hidden={true} />
		</Button>
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
			opacity: 0.5,
		},
	})[0];
};
