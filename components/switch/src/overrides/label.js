/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Label = ({
	name,
	label,
	checked,
	size,
	block,
	flipped,
	toggleText,
	disabled,
	...rest
}) => <span {...rest} />;

export const labelStyles = (_, { block, flipped }) => {
	return {
		flex: block && 1,
		display: 'flex',
		alignItems: 'center',
		whiteSpace: 'normal',
		position: 'relative',
		[flipped ? 'paddingLeft' : 'paddingRight']: '0.375rem',
	};
};
