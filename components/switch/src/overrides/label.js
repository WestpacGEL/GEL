/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Label = ({ name, label, checked, size, block, disabled, ...rest }) => (
	<span {...rest} />
);

export const labelStyles = (_, { block }) => {
	return {
		flex: block && 1,
		display: 'flex',
		alignItems: 'center',
		whiteSpace: 'normal',
		position: 'relative',
		paddingRight: '0.375rem',
	};
};
