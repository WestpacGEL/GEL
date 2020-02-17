/** @jsx jsx */

import { jsx } from '@westpac/core';
import React from 'react';

export const Svg = ({ assistiveText, viewBoxWidth, viewBoxHeight, ...rest }) => <svg {...rest} />;

export const svgStyles = () => ({
	width: '100%',
	height: '100%',
});
