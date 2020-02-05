/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Text = ({ look, value, ...rest }) => <span {...rest} />;

export const textStyles = (_, {}) => {
	return {
		display: 'inline-block',
		margin: '0 0.75rem',
		'@media print': {
			backgroundColor: '#000 !important',
			color: '#fff !important',
		},
	};
};
