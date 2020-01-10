/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@westpac/core';

export const TabRow = forwardRef((props, ref) => <div ref={ref} {...props} />);

export const tabRowStyles = (_, {}) => {
	return {
		display: 'flex',
		whiteSpace: 'nowrap',
		position: 'relative',
	};
};
