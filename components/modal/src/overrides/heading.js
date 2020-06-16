/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { forwardRef } from 'react';

const ModalHeading = forwardRef(({ state, ...rest }, ref) => (
	<Heading ref={ref} tag="h1" size={8} {...rest} />
));

const headingStyles = () => {
	const { COLORS } = useBrand();

	return {
		label: getLabel('modal-heading'),
		color: COLORS.text,
	};
};

const headingAttributes = () => ({ tabIndex: '-1' }); //a11y: heading receives focus on open

export const defaultHeading = {
	component: ModalHeading,
	styles: headingStyles,
	attributes: headingAttributes,
};
