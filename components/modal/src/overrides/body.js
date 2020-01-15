/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Body = ({ heading, open, onClose, size, dismissible, overrides, ...rest }) => (
	<div {...rest} />
);

export const bodyStyles = (_, {}) => {
	return {
		padding: '1.125rem 1.5rem',
	};
};
