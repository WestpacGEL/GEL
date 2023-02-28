import { jsx, useMediaQuery } from '@westpac/core';

export const Container = ({ width = 100, ...props }) => {
	const mq = useMediaQuery();
	return <div css={mq({ width: ['100%', null, `${width}%`] })} {...props} />;
};
