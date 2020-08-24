/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

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

Svg.propTypes = {
	viewBox: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};
