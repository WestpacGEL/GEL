/** @jsx jsx */

import { jsx } from '@westpac/core';

const ProgressRope = ({ state, ...rest }) => <ol {...rest} />;

const progressRopeStyles = () => ({
	position: 'relative',
	listStyle: 'none',
	paddingLeft: 0,
	margin: 0,
});

export const defaultProgressRopeRoot = {
	component: ProgressRope,
	styles: progressRopeStyles,
	attributes: () => null,
};
