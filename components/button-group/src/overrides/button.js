/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';

const ButtonGroupButton = ({ state: { checked, look, size, block, disabled }, ...rest }) => (
	<Button
		tag="span"
		soft={!checked}
		look={look}
		size={size}
		block={block}
		disabled={disabled}
		{...rest}
	/>
);

const buttonStyles = (_, { checked }) => {
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

const buttonAttributes = () => null;

export const defaultButton = {
	component: ButtonGroupButton,
	styles: buttonStyles,
	attributes: buttonAttributes,
};
