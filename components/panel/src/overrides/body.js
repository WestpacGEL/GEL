/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';

const Body = ({ state, ...rest }) => <div {...rest} />;

const bodyStyles = () => {
	const mq = useMediaQuery();

	return mq({
		padding: ['0.75rem', null, '1.5rem'],
	})[0];
};

const bodyAttributes = () => null;

export const defaultBody = {
	component: Body,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
