/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Button } from '@westpac/button';

export const CloseBtn = ({ title, content, position, open, dismissible, icon, ...props }) => (
	<Button iconAfter={icon} look="link" {...props} />
);

export const closeBtnStyles = (_, {}) => {
	const { SPACING } = useBrand();
	return {
		position: 'absolute',
		top: 0,
		right: SPACING(1),
		color: '#fff',
		':hover svg': {
			opacity: 0.5,
		},
	};
};
