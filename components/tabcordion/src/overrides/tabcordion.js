/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@westpac/core';

const Tabcordion = forwardRef(({ state, ...rest }, ref) => <div ref={ref} {...rest} />);

const tabcordionStyles = () => ({});

const tabcordionAttributes = () => null;

export const defaultTabcordion = {
	component: Tabcordion,
	styles: tabcordionStyles,
	attributes: tabcordionAttributes,
};
