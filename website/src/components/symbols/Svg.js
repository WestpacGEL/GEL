/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';

export const Svg = ({ viewBox, width, height = 'auto', ...rest }) => {
	const mq = useMediaQuery();
	return <svg viewBox={viewBox} css={mq({ height, width })} focusable="false" {...rest} />;
};
