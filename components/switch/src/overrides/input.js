/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Input = ({ label, toggleText, flipped, block, ...props }) => {
	return <input {...props} />;
};

export const inputStyles = (_, {}) => {
	return {
		position: 'absolute',
		zIndex: '-1',
		opacity: 0,
	};
};
