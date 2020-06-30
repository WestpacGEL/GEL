/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { forwardRef } from 'react';

const Tabcordion = forwardRef(({ state, ...rest }, ref) => <div ref={ref} {...rest} />);

const tabcordionStyles = () => ({
	label: getLabel('tabcordion'),
});

const tabcordionAttributes = () => null;

export const defaultTabcordion = {
	component: Tabcordion,
	styles: tabcordionStyles,
	attributes: tabcordionAttributes,
};
