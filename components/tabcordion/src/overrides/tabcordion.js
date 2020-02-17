/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@westpac/core';

export const Tabcordion = forwardRef(
	({ mode, look, justify, initialTabIndex, instanceIdPrefix, ...rest }, ref) => (
		<div ref={ref} {...rest} />
	)
);

export const tabcordionStyles = () => ({});
