/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button as ButtonInput } from '@westpac/button';

const Button = ({ state: { size }, ...rest }) => <ButtonInput size={size} {...rest} />;

const buttonStyles = (_, { position }) => ({
	boxSizing: 'border-box',
	borderRight: position === 'left' && 0,
	borderLeft: position === 'right' && 0,

	...(!(position === 'left') && {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	}),
	...(!(position === 'right') && {
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	}),
});

const buttonAttributes = () => null;

export const defaultButton = {
	component: Button,
	styles: buttonStyles,
	attributes: buttonAttributes,
};
