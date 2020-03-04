/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';

export const ButtonGroupButton = ({ name, value, onChange, data, checked, block, ...rest }) => (
	<Button tag="span" soft={!checked} block {...rest} />
);

export const buttonGroupButtonStyles = (_, { checked }) => {
	const mq = useMediaQuery();

	return mq({
		borderTop: checked && '1px solid transparent', //a11y: high-contrast mode
		borderBottom: checked && '1px solid transparent', //a11y: high-contrast mode
		'label:not(:last-of-type) &': {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
			borderRight: 0,
		},
		'label:not(:first-of-type) &': {
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
		},
	})[0];
};
