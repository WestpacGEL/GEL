/** @jsx jsx */

import { jsx } from '@westpac/core';

export const ProgressRope = ({ current, data, overrides, ...props }) => <ol {...props} />;

export const progressRopeStyles = (_, {}) => {
	return {
		position: 'relative',
		listStyle: 'none',
		paddingLeft: 0,
		margin: 0,
	};
};
