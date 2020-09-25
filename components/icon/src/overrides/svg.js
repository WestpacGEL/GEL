/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const Svg = ({ state: _, ...rest }) => <svg {...rest} />;

const svgStyles = () => ({
	label: getLabel('icon-svg'),
});

const svgAttributes = (_, { assistiveText }) => ({
	'aria-label': assistiveText,
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: '0 0 24 24',
	role: 'img',
	focusable: 'false',
});

export const defaultSvg = {
	component: Svg,
	styles: svgStyles,
	attributes: svgAttributes,
};
