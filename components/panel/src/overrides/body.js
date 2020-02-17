/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';

export const Body = ({ overrides, ...rest }) => <div {...rest} />;

export const bodyStyles = () => {
	const mq = useMediaQuery();

	return mq({
		padding: ['0.75rem', '1.5rem'],
	})[0];
};
