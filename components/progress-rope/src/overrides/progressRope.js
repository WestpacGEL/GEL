/** @jsx jsx */

import { jsx } from '@westpac/core';

const ProgressRope = ({ state, ...rest }) => <nav role="navigation" {...rest} />;

const progressRopeStyles = () => ({});

const progressRopeAttributes = () => null;

export const defaultProgressRope = {
	component: ProgressRope,
	styles: progressRopeStyles,
	attributes: progressRopeAttributes,
};
