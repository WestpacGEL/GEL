/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Wrapper = ({ current, data, overrides, ...props }) => <ol {...props} />;

export const wrapperStyles = (_, {}) => {
	return {
		position: 'relative',
		listStyle: 'none',
		paddingLeft: 0,
		margin: 0,
	};
};
