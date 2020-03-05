/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@westpac/core';

const TabRow = forwardRef(({ state, ...rest }, ref) => <div ref={ref} {...rest} />);

const tabRowStyles = () => ({
	display: 'flex',
	whiteSpace: 'nowrap',
	position: 'relative',
});

export const defaultTabRow = { component: TabRow, styles: tabRowStyles, attributes: () => null };
