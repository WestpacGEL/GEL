/** @jsx jsx */

import { jsx } from '@westpac/core';
import PropTypes from 'prop-types';

export const Svg = ({ viewBox, width, height, assistiveText, ...rest }) => (
	<svg
		aria-label={assistiveText}
		xmlns="http://www.w3.org/2000/svg"
		viewBox={viewBox}
		width={width}
		height={height}
		role="img"
		focusable="false"
		css={{ display: 'inline-block' }}
		{...rest}
	/>
);

Svg.propTypes = {
	viewBox: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	assistiveText: PropTypes.string,
};

Svg.defaultProps = {
	assistiveText: null,
};
