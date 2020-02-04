/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@westpac/core';

export const TabRow = forwardRef(
	(
		{
			mode,
			look,
			justify,
			initialTabIndex,
			instanceIdPrefix,
			instancePrefix,
			activeTabIndex,
			overrides,
			...rest
		},
		ref
	) => <div ref={ref} {...rest} />
);

export const tabRowStyles = (_, {}) => {
	return {
		display: 'flex',
		whiteSpace: 'nowrap',
		position: 'relative',
	};
};
