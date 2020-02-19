/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';

export const ButtonGroupItem = ({ name, value, checked, look, size, disabled, ...rest }) => (
	<Button {...rest} />
);

export const buttonGroupItemStyles = () => ({});
