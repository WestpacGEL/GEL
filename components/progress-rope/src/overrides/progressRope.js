/** @jsx jsx */

import { jsx } from '@westpac/core';

export const ProgressRope = ({ current, data, ...rest }) => <ol {...rest} />;

export const progressRopeStyles = () => ({
	position: 'relative',
	listStyle: 'none',
	paddingLeft: 0,
	margin: 0,
});
