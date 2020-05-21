/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button as ButtonInput } from '@westpac/button';

const Button = ({ state: { size }, ...rest }) => <ButtonInput size={size} {...rest} />;

const buttonStyles = (_, { position }) => ({
	boxSizing: 'border-box',
	borderRight: position === 'before' && 0,
	borderLeft: position === 'after' && 0,

	...(!(position === 'before') && {
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
	}),
	...(!(position === 'after') && {
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
