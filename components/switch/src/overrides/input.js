/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Input = ({
	name,
	label,
	size,
	block,
	flipped,
	toggleText,
	assistiveText,
	...rest
}) => {
	return <input {...rest} />;
};

export const inputStyles = () => ({
	position: 'absolute',
	zIndex: '-1',
	opacity: 0,
});
