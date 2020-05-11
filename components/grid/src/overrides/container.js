/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';

const Container = ({ state, ...rest }) => <div {...rest} />;

const containerStyles = (_, { fluid }) => {
	const mq = useMediaQuery();
	const padding = ['0.75rem', '1.125rem', '2.25rem', '3rem', '3.75rem'];

	return mq({
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: (fluid ? '75rem' : [null, '33.75rem', '43.5rem', '56rem', '67.5rem']),
		paddingLeft: padding,
		paddingRight: padding,
	})[0];
};

const containerAttributes = () => null;

export const defaultContainer = {
	component: Container,
	styles: containerStyles,
	attributes: containerAttributes,
};
