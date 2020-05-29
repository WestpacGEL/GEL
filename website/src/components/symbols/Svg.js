/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';

export const Svg = ({ height, width, viewBox, ...rest }) => {
	const mq = useMediaQuery();
	return <svg viewBox={viewBox} css={mq({ height, width })} {...rest} focusable="false" />;
};
