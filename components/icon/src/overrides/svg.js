/** @jsx jsx */

import { jsx } from '@westpac/core';
import React from 'react';

export const Svg = ({ color, size, assistiveText, ...rest }) => (
	<svg
		aria-label={assistiveText}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		role="img"
		focusable="false"
		{...rest}
	/>
);

export const svgStyles = () => ({});
