/** @jsx jsx */

import { jsx } from '@westpac/core';

const ProgressRope = ({ state, ...rest }) => <nav role="navigation" {...rest} />;

const progressRopeStyles = () => ({});

const progressRopeAttributes = (_, { assistiveText }) => ({
	'aria-label': assistiveText,
});

export const defaultProgressRope = {
	component: ProgressRope,
	styles: progressRopeStyles,
	attributes: progressRopeAttributes,
};
