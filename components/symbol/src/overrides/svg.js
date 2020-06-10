/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const Svg = ({ state, ...rest }) => <svg {...rest} />;

const svgStyles = () => ({
	label: getLabel('symbol-svg'),
	width: '100%',
	height: '100%',
});

const svgAttributes = (_, { assistiveText, viewBoxWidth, viewBoxHeight }) => ({
	'aria-label': assistiveText,
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
	role: 'img',
	focusable: 'false',
});

export const defaultSvg = {
	component: Svg,
	styles: svgStyles,
	attributes: svgAttributes,
};
