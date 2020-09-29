/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@westpac/core';

const TabRow = forwardRef(({ state: _, ...rest }, ref) => <div ref={ref} {...rest} />);

const tabRowStyles = () => ({
	display: 'flex',
	whiteSpace: 'nowrap',
	position: 'relative',
});

const tabRowAttributes = (_, {}) => ({ role: 'tablist' });

export const defaultTabRow = {
	component: TabRow,
	styles: tabRowStyles,
	attributes: tabRowAttributes,
};
