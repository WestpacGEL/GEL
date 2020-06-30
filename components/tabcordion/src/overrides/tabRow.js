/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { forwardRef } from 'react';

const TabRow = forwardRef(({ state, ...rest }, ref) => <div ref={ref} {...rest} />);

const tabRowStyles = () => ({
	label: getLabel('tabcordion-tabRow'),
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
