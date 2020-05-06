/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { forwardRef } from 'react';

const Title = forwardRef(({ state, ...rest }, ref) => (
	<Heading ref={ref} tag="h1" size={7} {...rest} />
));

const titleStyles = () => {
	const { COLORS, TYPE } = useBrand();

	return {
		color: COLORS.text,
		...TYPE.bodyFont[700],
	};
};

const titleAttributes = () => ({ tabIndex: '-1' }); //a11y: heading receives focus on open

export const defaultTitle = {
	component: Title,
	styles: titleStyles,
	attributes: titleAttributes,
};
