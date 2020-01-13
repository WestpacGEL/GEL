/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Button } from '@westpac/button';

export const CloseBtn = ({
	icon,
	heading,
	open,
	onClose,
	size,
	dismissible,
	overrides,
	...rest
}) => <Button iconAfter={icon} look="link" {...rest} />;

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
