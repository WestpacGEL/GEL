/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Label = props => <span {...props} />;

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
