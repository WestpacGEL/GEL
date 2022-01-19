import { getLabel } from '@westpac/core';
import React from 'react';

// ==============================
// Component
// ==============================

const Svg = ({ state: _, ...rest }) => <svg {...rest} />;

// ==============================
// Styles
// ==============================

const svgStyles = () => ({
	label: getLabel('symbol-svg'),
});

// ==============================
// Attributes
// ==============================

const svgAttributes = (_, { assistiveText, viewBoxWidth, viewBoxHeight }) => ({
	'aria-label': assistiveText,
	xmlns: 'http://www.w3.org/2000/svg',
	viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
	role: 'img',
	focusable: 'false',
});

// ==============================
// Exports
// ==============================

export const defaultSvg = {
	component: Svg,
	styles: svgStyles,
	attributes: svgAttributes,
};
