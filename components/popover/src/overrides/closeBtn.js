/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';

const CloseBtn = ({ state, ...rest }) => (
	<Button iconAfter={CloseIcon} look="link" size="medium" assistiveText="Close popover" {...rest} />
);

const closeBtnStyles = (_, {}) => {
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

const closeBtnAttributes = () => null;

export const defaultCloseBtn = {
	component: CloseBtn,
	styles: closeBtnStyles,
	attributes: closeBtnAttributes,
};
