/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';

const CloseBtn = ({ state, ...rest }) => (
	<Button iconAfter={CloseIcon} look="link" size="medium" assistiveText="Close" {...rest} />
);

const closeBtnStyles = () => {
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

const closeBtnAttributes = () => null;

export const defaultCloseBtn = {
	component: CloseBtn,
	styles: closeBtnStyles,
	attributes: closeBtnAttributes,
};
