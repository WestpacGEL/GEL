/** @jsx jsx */

import { jsx } from '@westpac/core';

export const ProgressRope = ({
	instanceId,
	current,
	headingsTag,
	assistiveText,
	data,
	...rest
}) => <nav role="navigation" {...rest} />;

export const progressRopeStyles = () => ({
	// paddingTop: '3.75rem',
	// paddingBottom: '3.75rem',
});
