/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { Button } from '@westpac/button';
import { CloseIcon } from '@westpac/icon';

const CloseBtn = ({ state: _, ...rest }) => (
	<Button iconAfter={CloseIcon} look="link" size="medium" assistiveText="Close popover" {...rest} />
);

const closeBtnStyles = (_, {}) => {
	const { COLORS, SPACING } = useBrand();
	return {
		label: getLabel('popover-closebtn'),
		'&&': {
			position: 'absolute',
			zIndex: 1,
			top: 0,
			right: SPACING(1),
			color: COLORS.text,

			':hover': {
				opacity: 0.8,
			},
		},
	};
};

const closeBtnAttributes = () => ({
	'data-js': 'popover-closeBtn__version__',
});

export const defaultCloseBtn = {
	component: CloseBtn,
	styles: closeBtnStyles,
	attributes: closeBtnAttributes,
};
