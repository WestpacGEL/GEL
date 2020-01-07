/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Input = props => <input {...props} />;

export const inputStyles = (_, {}) => {
	return {
		position: 'absolute',
		zIndex: '-1',
		opacity: 0,
	};
};
