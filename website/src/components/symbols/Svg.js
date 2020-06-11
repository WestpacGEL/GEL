/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Svg = ({ viewBox, width, height, ...rest }) => (
	<svg
		viewBox={viewBox}
		width={width}
		height={height}
		css={{ display: 'inline-block' }}
		focusable="false"
		{...rest}
	/>
);
