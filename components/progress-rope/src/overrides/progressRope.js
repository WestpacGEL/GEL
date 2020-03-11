/** @jsx jsx */

import { jsx } from '@westpac/core';

const ProgressRope = ({ state, ...rest }) => <nav role="navigation" {...rest} />;

const progressRopeStyles = () => ({
	// paddingTop: '3.75rem',
	// paddingBottom: '3.75rem',
});

const progressRopeAttributes = () => null;

export const defaultProgressRope = {
	component: ProgressRope,
	styles: progressRopeStyles,
	attributes: progressRopeAttributes,
};
