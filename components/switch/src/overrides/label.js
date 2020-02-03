/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Label = ({ name, label, toggleText, flipped, block, disabled, ...props }) => (
	<span {...props} />
);

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
