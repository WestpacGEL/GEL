/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const ProgressRope = ({ state, ...rest }) => <nav role="navigation" {...rest} />;

const progressRopeStyles = () => ({ label: getLabel('progressRope') });

const progressRopeAttributes = (_, { assistiveText }) => ({
	'aria-label': assistiveText,
});

export const defaultProgressRope = {
	component: ProgressRope,
	styles: progressRopeStyles,
	attributes: progressRopeAttributes,
};
