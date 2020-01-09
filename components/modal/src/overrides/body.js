/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Body = ({ open, heading, size, dismissible, ...props }) => <div {...props} />;

export const bodyStyles = (_, {}) => {
	return {
		padding: '1.125rem 1.5rem',
	};
};
