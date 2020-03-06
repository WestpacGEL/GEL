/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@westpac/core';

export const TabRow = forwardRef(
	({ mode, look, justify, initialTabIndex, instanceId, ...rest }, ref) => (
		<div ref={ref} {...rest} />
	)
);

export const tabRowStyles = () => ({
	display: 'flex',
	whiteSpace: 'nowrap',
	position: 'relative',
});
